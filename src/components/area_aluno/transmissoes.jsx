import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const mensagensExemplo = [
  { nome: "Rafael Lima", iniciais: "RL", cor: "bg-green-500", texto: "👏 Excelente aula!", hora: "18:46" },
  { nome: "Pedro Costa", iniciais: "PC", cor: "bg-red-500", texto: "Muito boa essa explicação!", hora: "18:46" },
  { nome: "Lucia Santos", iniciais: "LS", cor: "bg-purple-500", texto: "Professor, pode dar um exemplo prático?", hora: "18:46" },
  { nome: "Lucia Santos", iniciais: "LS", cor: "bg-purple-500", texto: "Professor, pode dar um exemplo prático?", hora: "18:46" },
  { nome: "Rafael Lima", iniciais: "RL", cor: "bg-green-500", texto: "👏 Excelente aula!", hora: "18:47" },
  { nome: "Lucia Santos", iniciais: "LS", cor: "bg-purple-500", texto: "Professor, pode dar um exemplo prático?", hora: "18:47" },
];

const TransmissoesAluno = () => {
  const navigate = useNavigate();
  const { materia } = useParams();
  // const location = useLocation();
  const [aba, setAba] = useState("aoVivo"); // "aoVivo" ou "biblioteca"
  const [mensagens, setMensagens] = useState(mensagensExemplo);
  const [novaMensagem, setNovaMensagem] = useState("");
  const chatRef = useRef(null);

  const handleEnviar = (e) => {
    e.preventDefault();
    if (novaMensagem.trim() === "") return;
    setMensagens([
      ...mensagens,
      { nome: "Você", iniciais: "VC", cor: "bg-blue-500", texto: novaMensagem, hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
    setNovaMensagem("");
    setTimeout(() => {
      if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, 100);
  };

  const handleNavigateToMateria = (materia) => {
    // Converte o nome da matéria para um slug URL-friendly
    const materiaSlug = materia.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9]/g, '_'); // Substitui caracteres especiais por underscore
    
    // Navega para a página de transmissões da matéria específica
    navigate(`/area_aluno/transmissoes/${materiaSlug}`);
  };

  // Mapeamento das matérias para exibir informações específicas
  const materiaInfo = {
    matematica: { nome: "Matemática", cor: "bg-blue-500", icon: "bx-calculator" },
    fisica: { nome: "Física", cor: "bg-purple-500", icon: "bx-atom" },
    quimica: { nome: "Química", cor: "bg-green-500", icon: "bx-medical-flask" },
    historia: { nome: "História", cor: "bg-orange-400", icon: "bx-landmark" },
    portugues: { nome: "Português", cor: "bg-pink-500", icon: "bx-book" },
    biologia: { nome: "Biologia", cor: "bg-cyan-600", icon: "bx-dna" },
    geografia: { nome: "Geografia", cor: "bg-blue-600", icon: "bx-globe" },
    ingles: { nome: "Inglês", cor: "bg-pink-400", icon: "bx-book-open" },
    literatura: { nome: "Literatura", cor: "bg-yellow-600", icon: "bx-book-reader" },
    artes: { nome: "Artes", cor: "bg-pink-300", icon: "bx-palette" },
    espanhol: { nome: "Espanhol", cor: "bg-red-400", icon: "bx-chat" },
    filosofia: { nome: "Filosofia", cor: "bg-gray-700", icon: "bx-brain" },
    sociologia: { nome: "Sociologia", cor: "bg-green-700", icon: "bx-group" }
  };

  const materiaAtual = materia ? materiaInfo[materia] : null;

  return (
    <main className="min-h-screen p-8">
      {/* Breadcrumb e cabeçalho quando visualizando uma matéria específica */}
      {materiaAtual && (
        <div className="mb-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <i className="bx bx-home text-lg"></i>
            <span className="cursor-pointer hover:text-gray-800" onClick={() => navigate('/area_aluno/transmissoes')}>
              Biblioteca
            </span>
            <i className="bx bx-chevron-right text-sm"></i>
            <span className="text-gray-800 font-medium">{materiaAtual.nome}</span>
          </div>
          
          {/* Título e filtros */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/area_aluno/transmissoes')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <i className="bx bx-arrow-back text-xl"></i>
                <span className="font-medium">Voltar</span>
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Buscar aulas */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar aulas..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <i className="bx bx-search absolute left-3 top-2.5 text-gray-400"></i>
              </div>
              
              {/* Ordenar por */}
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Ordenar por Data</option>
                <option>Ordenar por Título</option>
                <option>Ordenar por Progresso</option>
              </select>
              
              {/* Filtros */}
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                <i className="bx bx-filter-alt"></i>
                Filtros
              </button>
            </div>
          </div>
          
          {/* Título da seção */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Aulas de {materiaAtual.nome}</h1>
          </div>
        </div>
      )}
      
      {/* Layout original quando não está em uma matéria específica */}
      {!materiaAtual && (
        <div className="flex gap-3 mb-8">
          <button
            type="button"
            onClick={() => setAba("aoVivo")}
            className={`px-6 py-2 rounded-lg font-semibold flex items-center gap-2 text-base ${aba === "aoVivo" ? "bg-blue-600 text-white shadow" : "bg-gray-100 text-gray-600"}`}
          >
            <i className='bx bx-broadcast' style={{ fontSize: 18 }}></i>
            Aulas ao Vivo
          </button>
          <button
            type="button"
            onClick={() => setAba("biblioteca")}
            className={`px-6 py-2 rounded-lg font-semibold flex items-center gap-2 text-base ${aba === "biblioteca" ? "bg-blue-600 text-white shadow" : "bg-gray-100 text-gray-600"}`}
          >
            <i className='bx bx-folder' style={{ fontSize: 18 }}></i>
            Biblioteca de Aulas
          </button>
        </div>
      )}
      
      {/* Conteúdo quando em uma matéria específica */}
      {materiaAtual ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Aula 1 */}
          <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-40 flex items-center justify-center">
                <i className="bx bx-play-circle text-white text-5xl"></i>
              </div>
              <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">45 min</span>
              <div className="absolute bottom-2 left-2">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">{materiaAtual.nome}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-1">Funções Quadráticas e Parábolas</h3>
              <p className="text-gray-600 text-sm mb-3">Prof. Carlos Mendes • 15 de Nov</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">Progresso</span>
                <span className="text-xs font-medium text-blue-600">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <i className="bx bx-show mr-1"></i>
                <span className="mr-3">980 visualizações</span>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded">Concluída</span>
              </div>
            </div>
          </div>

          {/* Aula 2 */}
          <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-40 flex items-center justify-center">
                <i className="bx bx-play-circle text-white text-5xl"></i>
              </div>
              <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">52 min</span>
              <div className="absolute bottom-2 left-2">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">{materiaAtual.nome}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-1">Derivadas e Integrais</h3>
              <p className="text-gray-600 text-sm mb-3">Prof. Carlos Mendes • 14 de Nov</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">Progresso</span>
                <span className="text-xs font-medium text-green-600">100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <i className="bx bx-show mr-1"></i>
                <span className="mr-3">980 visualizações</span>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded">Concluída</span>
              </div>
            </div>
          </div>

          {/* Aula 3 */}
          <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500 to-blue-600 h-40 flex items-center justify-center">
                <i className="bx bx-play-circle text-white text-5xl"></i>
              </div>
              <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">48 min</span>
              <div className="absolute bottom-2 left-2">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">{materiaAtual.nome}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-1">Logaritmos e Propriedades</h3>
              <p className="text-gray-600 text-sm mb-3">Prof. Carlos Mendes • 13 de Nov</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">Progresso</span>
                <span className="text-xs font-medium text-blue-600">30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '30%'}}></div>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <i className="bx bx-show mr-1"></i>
                <span className="mr-3">1.5k visualizações</span>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">Continuar</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Layout original das abas
        <>
        {aba === "aoVivo" && (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Player e info */}
          <div className="flex-1 min-w-[320px]">
            <div className="bg-[#181C27] rounded-2xl p-6 relative mb-4">
              <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full inline-block animate-pulse"></span> AO VIVO
              </span>
              <span className="absolute top-4 right-4 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <i className='bx bx-show'></i> 247 assistindo
              </span>
              <div className="flex flex-col items-center justify-center h-56">
                <button className="w-16 h-16 rounded-full bg-black/30 flex items-center justify-center mb-4">
                  <i className="bx bx-play text-4xl text-white"></i>
                </button>
                <h2 className="text-white text-xl font-bold text-center">
                  {materiaAtual ? 
                    `${materiaAtual.nome} - Derivadas e Integrais` : 
                    "Matemática - Derivadas e Integrais"
                  }
                </h2>
                <span className="text-gray-300 text-sm mt-1">Prof. Carlos Mendes • Ao Vivo</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg flex items-center gap-2 w-full sm:w-auto justify-center">
                  <i className="bx bx-play"></i> Assistir
                </button>
                <button className="bg-gray-100 text-gray-700 font-semibold px-4 py-2 rounded-lg flex items-center gap-2 w-full sm:w-auto justify-center">
                  <i className="bx bx-fullscreen"></i> Tela Cheia
                </button>
              </div>
              <div className="flex gap-2 items-center w-full sm:w-auto">
                <span className="text-gray-500 text-sm">Qualidade:</span>
                <select className="border rounded px-2 py-1 text-sm w-full sm:w-auto">
                  <option>1080p</option>
                  <option>720p</option>
                  <option>480p</option>
                </select>
              </div>
              <div className="flex gap-2 items-center justify-center w-full sm:w-auto">
                <span className="cursor-pointer">👍</span>
                <span className="cursor-pointer">❤️</span>
                <span className="cursor-pointer">😲</span>
                <span className="cursor-pointer">👏</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-4 mt-4">
              <h3 className="font-bold text-gray-800 mb-2">Derivadas e Integrais - Aula 15</h3>
              <p className="text-gray-600 text-sm">Nesta aula, vamos abordar os principais conceitos de derivadas e integrais, exemplos práticos e resolução de exercícios ao vivo.</p>
            </div>
          </div>
          {/* Chat ao vivo */}
          <div className="w-full lg:w-[350px] flex flex-col bg-white rounded-2xl shadow p-4">
            <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2"><i className="bx bx-chat"></i> Chat ao Vivo</h3>
            <div ref={chatRef} className="flex-1 overflow-y-auto mb-3 pr-2" style={{ maxHeight: 320 }}>
              {mensagens.map((msg, idx) => (
                <div key={idx} className="flex items-start gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${msg.cor}`}>{msg.iniciais}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-800 text-sm">{msg.nome}</span>
                      <span className="text-xs text-gray-400">{msg.hora}</span>
                    </div>
                    <div className="text-gray-700 text-sm">{msg.texto}</div>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleEnviar} className="flex items-center gap-2 mt-auto">
              <input
                type="text"
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none"
                placeholder="Digite sua mensagem..."
                value={novaMensagem}
                onChange={e => setNovaMensagem(e.target.value)}
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
                <i className="bx bx-send"></i>
              </button>
            </form>
          </div>
        </div>
      )}
      {aba === "biblioteca" && (
        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {materiaAtual ? `Aulas de ${materiaAtual.nome}` : "Biblioteca de Aulas"}
          </h2>
          
          {materiaAtual ? (
            // Exibe aulas específicas da matéria selecionada
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Exemplo de aulas da matéria específica */}
              <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
                <div className="relative">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 flex items-center justify-center">
                    <i className="bx bx-play-circle text-white text-4xl"></i>
                  </div>
                  <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">45 min</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">Funções Quadráticas</h3>
                  <p className="text-gray-600 text-sm mb-2">Prof. Carlos Mendes • 15 de Nov</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Progresso</span>
                    <span className="text-xs font-medium text-blue-600">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
                <div className="relative">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-32 flex items-center justify-center">
                    <i className="bx bx-play-circle text-white text-4xl"></i>
                  </div>
                  <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">52 min</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">Derivadas e Integrais</h3>
                  <p className="text-gray-600 text-sm mb-2">Prof. Carlos Mendes • 14 de Nov</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Progresso</span>
                    <span className="text-xs font-medium text-green-600">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
                <div className="relative">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 h-32 flex items-center justify-center">
                    <i className="bx bx-play-circle text-white text-4xl"></i>
                  </div>
                  <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">48 min</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">Logaritmos e Propriedades</h3>
                  <p className="text-gray-600 text-sm mb-2">Prof. Carlos Mendes • 13 de Nov</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Progresso</span>
                    <span className="text-xs font-medium text-yellow-600">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Exibe o grid de todas as matérias
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Matemática */}
            <div 
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleNavigateToMateria('matematica')}
            >
              <div className="bg-blue-500 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <i className="bx bx-calculator text-white text-3xl"></i>
              </div>
              <div className="font-bold text-lg text-gray-900 mb-1">Matemática</div>
              <div className="text-gray-600 text-sm mb-1">24 aulas • 18h 30min</div>
              <div className="flex items-center gap-1 text-gray-500 text-xs"><i className="bx bx-time-five"></i> Última: <span className="font-medium text-gray-700">Derivadas</span></div>
            </div>
            {/* Física */}
            <div 
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleNavigateToMateria('fisica')}
            >
              <div className="bg-purple-500 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <i className="bx bx-atom text-white text-3xl"></i>
              </div>
              <div className="font-bold text-lg text-gray-900 mb-1">Física</div>
              <div className="text-gray-600 text-sm mb-1">18 aulas • 14h 20min</div>
              <div className="flex items-center gap-1 text-gray-500 text-xs"><i className="bx bx-time-five"></i> Última: <span className="font-medium text-gray-700">Leis de Newton</span></div>
            </div>
            {/* Química */}
            <div 
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleNavigateToMateria('quimica')}
            >
              <div className="bg-green-500 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <i className="bx bx-medical-flask text-white text-3xl"></i>
              </div>
              <div className="font-bold text-lg text-gray-900 mb-1">Química</div>
              <div className="text-gray-600 text-sm mb-1">21 aulas • 16h 45min</div>
              <div className="flex items-center gap-1 text-gray-500 text-xs"><i className="bx bx-time-five"></i> Última: <span className="font-medium text-gray-700">Balanceamento</span></div>
            </div>
            {/* História */}
            <div 
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleNavigateToMateria('historia')}
            >
              <div className="bg-orange-400 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <i className="bx bx-landmark text-white text-3xl"></i>
              </div>
              <div className="font-bold text-lg text-gray-900 mb-1">História</div>
              <div className="text-gray-600 text-sm mb-1">15 aulas • 12h 15min</div>
              <div className="flex items-center gap-1 text-gray-500 text-xs"><i className="bx bx-time-five"></i> Última: <span className="font-medium text-gray-700">Brasil Colonial</span></div>
            </div>
            {/* Português */}
            <div 
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleNavigateToMateria('portugues')}
            >
              <div className="bg-pink-500 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <i className="bx bx-book text-white text-3xl"></i>
              </div>
              <div className="font-bold text-lg text-gray-900 mb-1">Português</div>
              <div className="text-gray-600 text-sm mb-1">19 aulas • 15h 30min</div>
              <div className="flex items-center gap-1 text-gray-500 text-xs"><i className="bx bx-time-five"></i> Última: <span className="font-medium text-gray-700">Sintaxe</span></div>
            </div>
            {/* Biologia */}
            <div 
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleNavigateToMateria('biologia')}
            >
              <div className="bg-cyan-600 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <i className="bx bx-dna text-white text-3xl"></i>
              </div>
              <div className="font-bold text-lg text-gray-900 mb-1">Biologia</div>
              <div className="text-gray-600 text-sm mb-1">22 aulas • 17h 10min</div>
              <div className="flex items-center gap-1 text-gray-500 text-xs"><i className="bx bx-time-five"></i> Última: <span className="font-medium text-gray-700">Genética</span></div>
            </div>
            {/* Geografia */}
            <div 
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleNavigateToMateria('geografia')}
            >
              <div className="bg-blue-600 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <i className="bx bx-globe text-white text-3xl"></i>
              </div>
              <div className="font-bold text-lg text-gray-900 mb-1">Geografia</div>
              <div className="text-gray-600 text-sm mb-1">16 aulas • 13h 20min</div>
              <div className="flex items-center gap-1 text-gray-500 text-xs"><i className="bx bx-time-five"></i> Última: <span className="font-medium text-gray-700">Climatologia</span></div>
            </div>
            {/* Inglês */}
            <div 
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleNavigateToMateria('ingles')}
            >
              <div className="bg-pink-400 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <i className="bx bx-book-open text-white text-3xl"></i>
              </div>
              <div className="font-bold text-lg text-gray-900 mb-1">Inglês</div>
              <div className="text-gray-600 text-sm mb-1">20 aulas • 16h 00min</div>
              <div className="flex items-center gap-1 text-gray-500 text-xs"><i className="bx bx-time-five"></i> Última: <span className="font-medium text-gray-700">Present Perfect</span></div>
            </div>
            {/* Literatura */}
            <div 
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleNavigateToMateria('literatura')}
            >
              <div className="bg-yellow-600 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <i className="bx bx-book-reader text-white text-3xl"></i>
              </div>
              <div className="font-bold text-lg text-gray-900 mb-1">Literatura</div>
              <div className="text-gray-600 text-sm mb-1">14 aulas • 11h 00min</div>
              <div className="flex items-center gap-1 text-gray-500 text-xs"><i className="bx bx-time-five"></i> Última: <span className="font-medium text-gray-700">Modernismo</span></div>
            </div>
            {/* Artes */}
            <div 
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleNavigateToMateria('artes')}
            >
              <div className="bg-pink-300 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <i className="bx bx-palette text-white text-3xl"></i>
              </div>
              <div className="font-bold text-lg text-gray-900 mb-1">Artes</div>
              <div className="text-gray-600 text-sm mb-1">10 aulas • 8h 30min</div>
              <div className="flex items-center gap-1 text-gray-500 text-xs"><i className="bx bx-time-five"></i> Última: <span className="font-medium text-gray-700">Cubismo</span></div>
            </div>
            {/* Espanhol */}
            <div 
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleNavigateToMateria('espanhol')}
            >
              <div className="bg-red-400 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <i className="bx bx-chat text-white text-3xl"></i>
              </div>
              <div className="font-bold text-lg text-gray-900 mb-1">Espanhol</div>
              <div className="text-gray-600 text-sm mb-1">12 aulas • 9h 40min</div>
              <div className="flex items-center gap-1 text-gray-500 text-xs"><i className="bx bx-time-five"></i> Última: <span className="font-medium text-gray-700">Pretérito Perfeito</span></div>
            </div>
            {/* Filosofia */}
            <div 
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleNavigateToMateria('filosofia')}
            >
              <div className="bg-gray-700 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <i className="bx bx-brain text-white text-3xl"></i>
              </div>
              <div className="font-bold text-lg text-gray-900 mb-1">Filosofia</div>
              <div className="text-gray-600 text-sm mb-1">13 aulas • 10h 20min</div>
              <div className="flex items-center gap-1 text-gray-500 text-xs"><i className="bx bx-time-five"></i> Última: <span className="font-medium text-gray-700">Ética</span></div>
            </div>
            {/* Sociologia */}
            <div 
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleNavigateToMateria('sociologia')}
            >
              <div className="bg-green-700 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <i className="bx bx-group text-white text-3xl"></i>
              </div>
              <div className="font-bold text-lg text-gray-900 mb-1">Sociologia</div>
              <div className="text-gray-600 text-sm mb-1">11 aulas • 8h 50min</div>
              <div className="flex items-center gap-1 text-gray-500 text-xs"><i className="bx bx-time-five"></i> Última: <span className="font-medium text-gray-700">Cidadania</span></div>
            </div>
            </div>
          )}
        </div>
      )}
      {/* Próximas Transmissões - apenas no layout original */}
      {!materiaAtual && aba === "aoVivo" && (
        <div className="bg-white rounded-2xl shadow p-6 mt-10 w-full">
          <h2 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
            <i className="bx bx-calendar text-blue-600 text-xl"></i> Próximas Transmissões
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 bg-blue-50 rounded-lg px-6 py-4">
              <div className="bg-blue-600 rounded-lg w-10 h-10 flex items-center justify-center">
                <i className="bx bx-bolt text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900">Eletromagnetismo Avançado</div>
                <div className="text-gray-500 text-sm">Prof. Ana Rodrigues • Física</div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-blue-600 font-bold">Hoje • 16:00</span>
                <span className="text-xs text-gray-400">Em 2 horas</span>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-green-50 rounded-lg px-6 py-4">
              <div className="bg-green-600 rounded-lg w-10 h-10 flex items-center justify-center">
                <i className="bx bx-medical-flask text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900">Química Orgânica - Hidrocarbonetos</div>
                <div className="text-gray-500 text-sm">Prof. Roberto Silva • Química</div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-green-600 font-bold">Amanhã • 14:30</span>
                <span className="text-xs text-gray-400">Em 1 dia</span>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-yellow-50 rounded-lg px-6 py-4">
              <div className="bg-yellow-500 rounded-lg w-10 h-10 flex items-center justify-center">
                <i className="bx bx-landmark text-white text-2xl"></i>
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900">República Velha no Brasil</div>
                <div className="text-gray-500 text-sm">Prof. Mariana Costa • História</div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-yellow-600 font-bold">Sex • 15:00</span>
                <span className="text-xs text-gray-400">Em 2 dias</span>
              </div>
            </div>
          </div>
        </div>
      )}
        </>
      )}
    </main>
  );
};

export default TransmissoesAluno;
