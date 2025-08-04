import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-32 bg-gradient-to-br from-blue-600 to-indigo-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <div className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm font-medium mb-6">
              #1 Plataforma de Estudos para Vestibulares
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Prepare-se para o <span className="bg-white text-blue-600 px-2 rounded-lg">sucesso</span> no vestibular
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-lg">
              Organize seus estudos, acompanhe seu progresso e conquiste sua aprovação com a metodologia exclusiva da Lumina Academy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                id="startNowBtn"
                to="/login"
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                Começar Agora
              </Link>
              <button
                id="knowMoreBtn"
                className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center">
                  Saiba mais
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative animate-float">
              <div className="bg-white rounded-2xl shadow-2xl p-6 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500">Lumina Academy Dashboard</div>
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">Seu progresso</h3>
                    <span className="text-xs text-blue-600 font-medium">75% completo</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="text-xs text-gray-500 mb-1">Próxima aula</div>
                    <div className="font-medium text-gray-800">Matemática</div>
                    <div className="text-xs text-blue-600 mt-1">Hoje, 14:00</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="text-xs text-gray-500 mb-1">Suporte</div>
                    <div className="font-medium text-gray-800">Chat disponível</div>
                    <div className="text-xs text-blue-600 mt-1">24/7</div>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Matérias recentes</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center">
                        <div className="bg-blue-50 p-2 rounded-md mr-3">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-sm text-gray-800">Matemática</div>
                          <div className="text-xs text-gray-500">Funções Trigonométricas</div>
                        </div>
                      </div>
                      <div className="bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-md">85%</div>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center">
                        <div className="bg-blue-50 p-2 rounded-md mr-3">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-sm text-gray-800">Química</div>
                          <div className="text-xs text-gray-500">Química Orgânica</div>
                        </div>
                      </div>
                      <div className="bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-md">70%</div>
                    </div>
                  </div>
                </div>
                <a href="/pages/student/dashboard.php" className="w-full py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <span>Ver dashboard completo</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg z-20">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-indigo-200 rounded-lg h-24 w-24 z-0 opacity-50"></div>
            </div>
          </div>
        </div>
        {/* Estatísticas flutuantes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300">
            <div className="text-white text-4xl font-bold mb-2">15+</div>
            <div className="text-white text-opacity-90">Matérias completas</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300">
            <div className="text-white text-4xl font-bold mb-2">5.000+</div>
            <div className="text-white text-opacity-90">Exercícios resolvidos</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300">
            <div className="text-white text-4xl font-bold mb-2">98%</div>
            <div className="text-white text-opacity-90">Taxa de aprovação</div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
