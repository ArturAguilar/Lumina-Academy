import React from "react";

const Recursos = () => {
  return (
    <section id="recursos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 bg-blue-600 bg-opacity-10 rounded-full mb-4">
            <span className="text-blue-600 text-sm font-medium">Ferramentas exclusivas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Recursos que Potencializam seus Estudos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Ferramentas desenvolvidas para maximizar seu aprendizado e aumentar suas chances de aprovação nos vestibulares.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cronograma Personalizado */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col items-center text-center feature-card">
            <div className="bg-blue-600 bg-opacity-10 p-4 rounded-full mb-6 feature-icon">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Cronograma Personalizado</h3>
            <p className="text-gray-600 text-sm mb-4">Organize seus estudos de acordo com seu tempo disponível e objetivos. Nosso algoritmo cria um plano ideal para você.</p>
            <a href="/src/pages/student/cronograma.php" className="text-blue-600 font-medium text-sm flex items-center mt-auto">
              <span>Saiba mais</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          {/* Banco de Questões */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col items-center text-center feature-card">
            <div className="bg-blue-600 bg-opacity-10 p-4 rounded-full mb-6 feature-icon">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Banco de Questões</h3>
            <p className="text-gray-600 text-sm mb-4">Mais de 50.000 questões de vestibulares anteriores com resolução detalhada e classificadas por nível de dificuldade.</p>
            <a href="/src/pages/student/exercicios.php" className="text-blue-600 font-medium text-sm flex items-center mt-auto">
              <span>Saiba mais</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          {/* Central de Suporte */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col items-center text-center feature-card">
            <div className="bg-blue-600 bg-opacity-10 p-4 rounded-full mb-6 feature-icon">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Central de Suporte</h3>
            <p className="text-gray-600 text-sm mb-4">Suporte completo 24/7 com chat ao vivo, FAQ detalhado e atendimento especializado para otimizar seus estudos.</p>
            <a href="/src/shared/suporte.php" className="text-blue-600 font-medium text-sm flex items-center mt-auto">
              <span>Saiba mais</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          {/* Análise de Desempenho */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col items-center text-center feature-card">
            <div className="bg-blue-600 bg-opacity-10 p-4 rounded-full mb-6 feature-icon">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Análise de Desempenho</h3>
            <p className="text-gray-600 text-sm mb-4">Relatórios detalhados do seu progresso com gráficos e estatísticas para acompanhar sua evolução nos estudos.</p>
            <a href="/src/pages/student/desempenho.php" className="text-blue-600 font-medium text-sm flex items-center mt-auto">
              <span>Saiba mais</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recursos;
