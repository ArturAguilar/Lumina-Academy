import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function Registro() {
  const navigate = useNavigate();
  const { register, login } = useAuth();
  // Estados para feedback do backend (devem ficar no topo do componente)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [cadastroFinalizado, setCadastroFinalizado] = useState(false);

  // Garante que, se o usuário já cadastrou, nunca verá o formulário de novo nesse fluxo
  useEffect(() => {
    if (localStorage.getItem("cadastroFinalizado") === "true") {
      setCadastroFinalizado(true);
      setTimeout(() => {
        localStorage.removeItem("cadastroFinalizado");
        window.location.href = "/login";
      }, 1200);
    }
  }, []);
  // Controle de etapas do formulário
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
    desiredCourse: "",
    desiredUniversity: "",
    materias: [""], // começa com 1 matéria obrigatória
    terms: false,
  });

  // Adiciona novo campo de matéria (até 3)
  const handleAddMateria = () => {
    setForm((prev) => {
      if (prev.materias.length < 3) {
        return { ...prev, materias: [...prev.materias, ""] };
      }
      return prev;
    });
  };

  // Atualiza valor de uma matéria específica
  const handleMateriaChange = (idx, value) => {
    setForm((prev) => {
      const materias = [...prev.materias];
      materias[idx] = value;
      return { ...prev, materias };
    });
  };

  // Handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  // Renderização do lado esquerdo (institucional)
  const LeftSide = (
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
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Comece sua jornada de aprendizado hoje</h1>
            <p className="text-white/80 mb-8">Acesse milhares de cursos online ministrados por especialistas e desenvolva habilidades que impulsionarão sua carreira.</p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-2 rounded-full mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.0 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
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
  );

  // Renderização do lado direito (registro)
  const RightSide = (
    <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-6 lg:p-8">
      <div className="w-full max-w-md form-container-wrapper">
        <div className="form-container bg-white p-8 rounded-xl shadow-lg w-full">
          {/* Steps visuais apenas */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center w-full">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm mr-2 ${step >= 1 ? 'bg-blue-600' : 'bg-gray-300'}`}>1</div>
                <div className={`flex-1 h-1 ${step > 1 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm mx-2 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}>2</div>
                <div className={`flex-1 h-1 ${step > 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm ml-2 ${step === 3 ? 'bg-blue-600' : 'bg-gray-300'}`}>3</div>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {step === 1 && 'Crie sua conta'}
                {step === 2 && 'Qual é o seu perfil?'}
                {step === 3 && 'Finalizar cadastro'}
              </h2>
              <p className="text-gray-600 mt-2">
                {step === 1 && 'Comece sua jornada de aprendizado'}
                {step === 2 && 'Escolha a opção que melhor descreve você'}
                {step === 3 && (form.userType === 'student' ? 'Conte-nos sobre seus objetivos!' : 'Quais matérias você leciona?')}
              </p>
            </div>
          </div>
          {/* Etapa 1: Dados Básicos */}
          {step === 1 && (
            <form className="space-y-6" onSubmit={e => { e.preventDefault(); setStep(2); }} autoComplete="off">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="register-nome" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input type="text" id="register-nome" name="nome" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Maria" required value={form.nome} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="register-sobrenome" className="block text-sm font-medium text-gray-700 mb-2">Sobrenome</label>
                  <input type="text" id="register-sobrenome" name="sobrenome" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Silva" required value={form.sobrenome} onChange={handleChange} />
                </div>
              </div>
              <div>
                <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="register-email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="seu@email.com" required value={form.email} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
                  <input type="password" id="register-password" name="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="••••••••" required value={form.password} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="register-confirm-password" className="block text-sm font-medium text-gray-700 mb-2">Confirmar senha</label>
                  <input type="password" id="register-confirm-password" name="confirmPassword" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="••••••••" required value={form.confirmPassword} onChange={handleChange} />
                </div>
              </div>
              <button type="submit" className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium transition-all duration-200 hover:shadow-lg">Continuar</button>
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Já tem uma conta?
                  <a href="/login" className="text-blue-600 font-medium hover:underline ml-1">Entrar</a>
                </p>
              </div>
            </form>
          )}
          {/* Etapa 2: Tipo de Usuário */}
          {step === 2 && (
            <form className="space-y-6" onSubmit={e => { e.preventDefault(); setStep(3); }}>
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Qual é o seu perfil?</h3>
                <p className="text-gray-600">Escolha a opção que melhor descreve você</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div onClick={() => setForm(f => ({ ...f, userType: "student" }))} className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${form.userType === "student" ? "border-blue-500 shadow-md" : "border-gray-200 hover:border-blue-400"}`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Aluno</h4>
                    <p className="text-sm text-gray-600">Quero estudar e me preparar para vestibulares</p>
                  </div>
                </div>
                <div onClick={() => setForm(f => ({ ...f, userType: "teacher" }))} className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${form.userType === "teacher" ? "border-green-500 shadow-md" : "border-gray-200 hover:border-green-400"}`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Professor</h4>
                    <p className="text-sm text-gray-600">Quero ensinar e criar conteúdo educacional</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setStep(1)} className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">Voltar</button>
                <button type="submit" className="flex-1 py-3 rounded-lg bg-blue-600 text-white font-medium transition-all duration-200 hover:shadow-lg" disabled={!form.userType}>Continuar</button>
              </div>
            </form>
          )}
          {/* Etapa 3: Dados Específicos e Finalização */}
          {step === 3 && (
            <form className="space-y-6" onSubmit={async e => {
              e.preventDefault();
              setError("");
              setLoading(true);
              // Validação básica
              if (form.userType === "student") {
                if (!form.nome || !form.sobrenome || !form.email || !form.password || !form.desiredCourse || !form.desiredUniversity) {
                  setLoading(false);
                  setError("Preencha todos os campos obrigatórios.");
                  return;
                }
              } else if (form.userType === "teacher") {
                if (!form.nome || !form.sobrenome || !form.email || !form.password || !form.materias[0]) {
                  setLoading(false);
                  setError("Preencha todos os campos obrigatórios.");
                  return;
                }
              } else {
                setLoading(false);
                setError("Selecione um tipo de usuário válido.");
                return;
              }
              // Mapeia campos para o backend
              let formToSend = { ...form };
              if (form.userType === "student") {
                formToSend = {
                  ...form,
                  curso_desejado: form.desiredCourse,
                  universidade_desejada: form.desiredUniversity
                };
              }
              // Chama o AuthContext para registro
              const result = await register(formToSend, form.userType);
              if (result.success) {
                setLoading(false);
                setCadastroFinalizado(true);
                localStorage.setItem("cadastroFinalizado", "true");
                toast.success("Cadastro realizado com sucesso! Faça login para continuar.", {
                  position: "top-right",
                  autoClose: 1200,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored"
                });
                setTimeout(() => {
                  localStorage.removeItem("cadastroFinalizado");
                  window.location.href = "/login";
                }, 1200);
              } else {
                setLoading(false);
                setError(result.error || "Erro ao cadastrar.");
              }
            }}>
              {form.userType === "student" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="register-exam-date" className="block text-sm font-medium text-gray-700 mb-2">Data do vestibular</label>
                      <input type="date" id="register-exam-date" name="examDate" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" value={form.examDate || ''} onChange={handleChange} />
                    </div>
                    <div>
                      <label htmlFor="register-desired-course" className="block text-sm font-medium text-gray-700 mb-2">Curso desejado</label>
                      <input type="text" id="register-desired-course" name="desiredCourse" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Ex: Medicina, Engenharia..." value={form.desiredCourse} onChange={handleChange} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="register-desired-university" className="block text-sm font-medium text-gray-700 mb-2">Universidade de preferência</label>
                    <input type="text" id="register-desired-university" name="desiredUniversity" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Ex: USP, UNICAMP, UFRJ..." value={form.desiredUniversity} onChange={handleChange} />
                  </div>
                </>
              )}
              {form.userType === "teacher" && (
                <>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Quais matérias você leciona?</h3>
                    <p className="text-gray-600 mb-4">Você pode adicionar até 3 matérias. Pelo menos uma é obrigatória.</p>
                    <div className="w-full max-w-lg mx-auto grid grid-cols-1 gap-4">
                      {form.materias.map((mat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder={`Matéria ${idx + 1}${idx === 0 ? ' (obrigatória)' : ' (opcional)'}`}
                            value={mat}
                            required={idx === 0}
                            onChange={e => handleMateriaChange(idx, e.target.value)}
                          />
                        </div>
                      ))}
                      {form.materias.length < 3 && (
                        <button
                          type="button"
                          onClick={handleAddMateria}
                          className="mt-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-colors"
                        >
                          + Adicionar matéria
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
              <div className="flex items-center">
                <input type="checkbox" id="terms" name="terms" checked={form.terms} onChange={handleChange} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  Eu concordo com os <a href="#termos" className="text-blue-600 hover:underline">Termos de Serviço</a> e <a href="#privacidade" className="text-blue-600 hover:underline">Política de Privacidade</a>
                </label>
              </div>
              {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
              {/* Mensagem de sucesso removida, apenas toast será exibido */}
              <div className="flex gap-4">
                <button type="button" onClick={() => setStep(2)} className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">Voltar</button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-lg bg-blue-600 text-white font-medium transition-all duration-200 hover:shadow-lg disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Criar conta"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex">
        {LeftSide}
        {cadastroFinalizado ? (
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-6 lg:p-8">
            <div className="w-full max-w-md form-container-wrapper">
              <div className="form-container bg-white p-8 rounded-xl shadow-lg w-full flex flex-col items-center justify-center">
                <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Cadastro realizado com sucesso!</h2>
                <p className="text-gray-600 text-center mb-2">Redirecionando para o login...</p>
              </div>
            </div>
          </div>
        ) : RightSide}
      </div>
    </>
  );
}
