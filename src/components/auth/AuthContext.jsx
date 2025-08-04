import React, { createContext, useContext, useState, useEffect } from "react";

// Cria o contexto
const AuthContext = createContext();

// Hook para consumir o contexto
export function useAuth() {
    return useContext(AuthContext);

}

export { AuthContext };

// Provider do contexto
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [accessToken, setAccessToken] = useState(null);

    // Ao iniciar, tenta restaurar token do localStorage
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            setAccessToken(token);
            fetch("http://localhost/Lumina-Academy/backend/api/user.php", {
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            })
                .then(async res => {
                    const data = await res.json();
                    setUser(data); // data já é o usuário completo
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);
    // Função de login
    async function login(email, password) {
        setLoading(true);
        try {
            const res = await fetch("http://localhost/Lumina-Academy/backend/api/login.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha: password })
            });
            const data = await res.json();
            // Espera-se que o backend retorne: { access_token: "...", refresh_token: "..." }
            if (res.ok && data.access_token) {
                setAccessToken(data.access_token);
                localStorage.setItem("accessToken", data.access_token);
                if (data.refresh_token) localStorage.setItem("refreshToken", data.refresh_token);
                // Buscar usuário completo
                try {
                    const userRes = await fetch("http://localhost/Lumina-Academy/backend/api/user.php", {
                        method: "GET",
                        headers: { "Authorization": `Bearer ${data.access_token}` }
                    });
                    const userData = await userRes.json();
                    setUser(userData);
                } catch (e) {
                    setUser(null);
                }
                setLoading(false);
                return { success: true };
            } else {
                setLoading(false);
                return { success: false, error: data.erro || "Erro ao logar." };
            }
        } catch (err) {
            setLoading(false);
            return { success: false, error: "Erro de conexão." };
        }
    }

    // Função de logout
    function logout() {
        setUser(null);
        setAccessToken(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    }

    // Função de registro para aluno e professor
    async function register(form, userType) {
        setLoading(true);
        let endpoint = null;
        let payload = {};
        if (userType === "student") {
            endpoint = "http://localhost/Lumina-Academy/backend/api/alunos/cadastro.php";
            const cursoDesejado = form.curso_desejado || form.desiredCourse || "";
            const universidadeDesejada = form.universidade_desejada || form.desiredUniversity || "";
            const dataVestibular = form.data_vestibular || form.examDate || "";
            payload = {
                nome: form.nome + (form.sobrenome ? (" " + form.sobrenome) : ""),
                email: form.email,
                senha: form.password,
                curso_desejado: cursoDesejado,
                universidade_desejada: universidadeDesejada,
                data_vestibular: dataVestibular
            };
        } else if (userType === "teacher") {
            endpoint = "http://localhost/Lumina-Academy/backend/api/professores/cadastro.php";
            payload = {
                nome: form.nome + (form.sobrenome ? (" " + form.sobrenome) : ""),
                email: form.email,
                senha: form.password,
                materias: form.materias.filter(m => m.trim() !== "")
            };
        } else {
            setLoading(false);
            return { success: false, error: "Tipo de usuário inválido." };
        }
        try {
            console.log("[DEBUG] Payload enviado para cadastro:", payload);
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            setLoading(false);
            if (res.ok) {
                // Cadastro realizado com sucesso, agora faz login automático
                try {
                    const loginResult = await login(form.email, form.password);
                    if (loginResult.success) {
                        return { success: true };
                    } else {
                        return { success: true, warning: "Cadastro feito, mas não foi possível logar automaticamente." };
                    }
                } catch (e) {
                    return { success: true, warning: "Cadastro feito, mas erro ao tentar login automático." };
                }
            } else {
                return { success: false, error: data.erro || "Erro ao registrar." };
            }
        } catch (err) {
            setLoading(false);
            return { success: false, error: "Erro de conexão." };
        }
    }

    // Valor do contexto
    const value = {
        user,
        loading,
        login,
        logout,
        register,
        isAuthenticated: !!user && !!accessToken,
        accessToken
    };

    return (
        <AuthContext.Provider value={value}>
            {loading ? <div style={{ padding: 32, textAlign: 'center' }}>Carregando...</div> : children}
        </AuthContext.Provider>
    );
}
