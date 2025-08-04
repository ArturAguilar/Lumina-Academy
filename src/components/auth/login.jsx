import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loginFinalizado, setLoginFinalizado] = useState(false);

  // Garante que, se o usuário já logou, nunca verá o formulário de novo nesse fluxo
  useEffect(() => {
    if (localStorage.getItem("loginFinalizado") === "true") {
      setLoginFinalizado(true);
      setTimeout(() => {
        localStorage.removeItem("loginFinalizado");
        window.location.href = "/area_aluno/dashboard";
      }, 1200);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const result = await login(email, password);
    if (result.success) {
      setLoginFinalizado(true);
      localStorage.setItem("loginFinalizado", "true");
      setTimeout(() => {
        localStorage.removeItem("loginFinalizado");
        window.location.href = "/area_aluno/dashboard";
      }, 1200);
    } else {
      setLoading(false);
      setError(result.error || "Erro ao fazer login.");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Lado Esquerdo - Institucional (50% da tela) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
        {/* SVG decorativo de fundo */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-30 z-0" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="120" fill="#fff" fillOpacity="0.08" />
          <circle cx="500" cy="100" r="80" fill="#fff" fillOpacity="0.10" />
          <ellipse cx="400" cy="400" rx="140" ry="80" fill="#fff" fillOpacity="0.07" />
          <rect x="350" y="-40" width="120" height="120" rx="40" fill="#fff" fillOpacity="0.06" />
        </svg>
        {/* Formas Flutuantes */}
        <div className="floating-shapes z-10">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        {/* Conteúdo Institucional */}
        <div className="relative z-10 flex flex-col justify-between h-full p-12 text-white">
          {/* Header */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-2xl font-bold">Lumina Academy</span>
          </div>
          {/* Conteúdo Central */}
          <div className="space-y-8">
            {/* Chamada Principal */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Comece sua jornada de aprendizado hoje
              </h1>
              <p className="text-white/80 mb-8">
                Acesse milhares de cursos online ministrados por especialistas e desenvolva habilidades que impulsionarão sua carreira.
              </p>
            </div>
            {/* Benefícios */}
            <div className="hidden md:block">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Mais de 5.000 cursos</h3>
                  <p className="text-sm text-white/70">Em diversas áreas de conhecimento</p>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.0 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Certificados reconhecidos</h3>
                  <p className="text-sm text-white/70">Valorize seu currículo</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Aprenda no seu ritmo</h3>
                  <p className="text-sm text-white/70">Acesso vitalício aos cursos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block mt-12">
            <p className="text-sm text-white/70">© 2025 Lumina Academy. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
      {/* Lado Direito - Formulário de Login (50% da tela) */}
      {loginFinalizado ? (
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-6 lg:p-8">
          <div className="w-full max-w-md form-container-wrapper">
            <div className="form-container bg-white p-8 rounded-xl shadow-lg w-full flex flex-col items-center justify-center">
              <svg className="w-16 h-16 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Login realizado com sucesso!</h2>
              <p className="text-gray-600 text-center mb-2">Redirecionando para sua área...</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-6 lg:p-8">
          <div className="w-full max-w-md form-container-wrapper">
            <div className="form-container bg-white p-8 rounded-xl shadow-lg w-full">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Bem-vindo de volta!</h2>
                <p className="text-gray-600 mt-2">Entre na sua conta para continuar</p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="flex-1">
                    <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="login-email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Senha</label>
                    </div>
                    <input
                      type="password"
                      id="login-password"
                      name="password"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      placeholder="••••••••"
                      required
                    />
                    <div className="mt-2 text-right">
                      <button type="button" className="text-sm text-blue-600 hover:underline focus:outline-none">Esqueceu a senha?</button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <input id="rememberMe" name="rememberMe" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700 select-none cursor-pointer">Lembrar de mim</label>
                </div>
                <button type="submit" className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium transition-all duration-200 hover:shadow-lg" disabled={loading}>
                  {loading ? "Entrando..." : "Entrar"}
                </button>
                <button type="button" className="w-full py-3 mt-3 rounded-lg flex items-center justify-center border border-gray-300 bg-white text-gray-700 font-medium transition-all duration-200 hover:shadow-lg">
                  <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-6 h-6 mr-2" /> Entrar com Google
                </button>
              </form>
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Não tem uma conta?
                  <a href="/registro" className="text-blue-600 font-medium hover:underline ml-1">Cadastre-se</a>
                </p>
              </div>
              <div className="mt-6 text-center">
                <a href="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center justify-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Voltar ao início
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}