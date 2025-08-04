import React, { useState } from "react";

const Materias = () => {
  const [filtro, setFiltro] = useState("todas");

  const materias = [
    {
      tipo: "exatas",
      titulo: "Matemática",
      card: (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 card-hover">
          <div className="h-2 bg-blue-600"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">Matemática</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">Álgebra, Geometria, Trigonometria, Estatística e muito mais para dominar os conceitos fundamentais.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Álgebra</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Geometria</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Estatística</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-3/4">
                <span className="text-xs text-gray-500">32 aulas • 75% concluído</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-blue-600 h-2 rounded-full progress-bar" style={{ width: '75%' }}></div>
                </div>
              </div>
              <button className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      tipo: "naturezas",
      titulo: "Física",
      card: (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 card-hover">
          <div className="h-2 bg-blue-600"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 bg-opacity-10 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">Física</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">Mecânica, Termodinâmica, Eletromagnetismo e Física Moderna com abordagem prática e intuitiva.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Mecânica</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Eletromagnetismo</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Óptica</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-3/4">
                <span className="text-xs text-gray-500">28 aulas • 60% concluído</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-blue-600 h-2 rounded-full progress-bar" style={{ width: '60%' }}></div>
                </div>
              </div>
              <button className="flex items-center justify-center w-10 h-10 bg-blue-600 bg-opacity-10 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      tipo: "naturezas",
      titulo: "Química",
      card: (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 card-hover">
          <div className="h-2 bg-blue-600"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 bg-opacity-10 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">Química</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">Química Orgânica, Inorgânica, Físico-Química e Analítica com exemplos práticos e aplicações.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Orgânica</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Inorgânica</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Físico-Química</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-3/4">
                <span className="text-xs text-gray-500">24 aulas • 45% concluído</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-blue-600 h-2 rounded-full progress-bar" style={{ width: '45%' }}></div>
                </div>
              </div>
              <button className="flex items-center justify-center w-10 h-10 bg-blue-600 bg-opacity-10 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      tipo: "naturezas",
      titulo: "Biologia",
      card: (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 card-hover">
          <div className="h-2 bg-blue-600"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 bg-opacity-10 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">Biologia</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">Citologia, Genética, Ecologia, Fisiologia e Evolução com conteúdo atualizado e didático.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Genética</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Ecologia</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Evolução</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-3/4">
                <span className="text-xs text-gray-500">30 aulas • 80% concluído</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-blue-600 h-2 rounded-full progress-bar" style={{ width: '80%' }}></div>
                </div>
              </div>
              <button className="flex items-center justify-center w-10 h-10 bg-blue-600 bg-opacity-10 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      tipo: "linguagens",
      titulo: "Literatura",
      card: (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 card-hover">
          <div className="h-2 bg-blue-600"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 bg-opacity-10 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">Literatura</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">Escolas literárias, análise de obras obrigatórias e interpretação textual aprofundada.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Modernismo</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Romantismo</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Contemporânea</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-3/4">
                <span className="text-xs text-gray-500">22 aulas • 65% concluído</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-blue-600 h-2 rounded-full progress-bar" style={{ width: '65%' }}></div>
                </div>
              </div>
              <button className="flex items-center justify-center w-10 h-10 bg-blue-600 bg-opacity-10 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      tipo: "humanas",
      titulo: "História",
      card: (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 card-hover">
          <div className="h-2 bg-blue-600"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 bg-opacity-10 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">História</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">História Geral, do Brasil e contemporânea com análises críticas e contextualização.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Brasil</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Geral</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">Contemporânea</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-3/4">
                <span className="text-xs text-gray-500">26 aulas • 55% concluído</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-blue-600 h-2 rounded-full progress-bar" style={{ width: '55%' }}></div>
                </div>
              </div>
              <button className="flex items-center justify-center w-10 h-10 bg-blue-600 bg-opacity-10 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )
    },
    // Adicione os outros cards aqui, um para cada matéria, com o tipo correto (exatas, humanas, naturezas, linguagens)
  ];

  const filtros = [
    { id: "todas", label: "Todas" },
    { id: "exatas", label: "Exatas" },
    { id: "humanas", label: "Humanas" },
    { id: "naturezas", label: "Naturezas" },
    { id: "linguagens", label: "Linguagens" },
  ];

  const materiasFiltradas = filtro === "todas" ? materias : materias.filter(m => m.tipo === filtro);

  return (
    <section id="materias" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 bg-blue-50 rounded-full mb-4">
            <span className="text-blue-600 text-sm font-medium">Conteúdo completo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Matérias Disponíveis</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore nosso conteúdo completo para todas as disciplinas dos principais vestibulares do país, organizado de forma intuitiva e didática.</p>
        </div>
        <div className="flex flex-wrap justify-center mb-10 gap-3">
          {filtros.map(f => (
            <button
              key={f.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filtro === f.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-600 hover:text-white'}`}
              onClick={() => setFiltro(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {materiasFiltradas.map((m, i) => (
            <React.Fragment key={i}>{m.card}</React.Fragment>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center mx-auto">
            <span>Ver todas as matérias</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Materias;
