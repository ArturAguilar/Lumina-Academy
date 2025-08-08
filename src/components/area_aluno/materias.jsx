import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const materiasList = [
  {
    key: 'matematica',
    label: 'Matemática',
    cor: '#ef4444',
    bg: 'bg-red-100',
    icone: <i className='bx bx-calculator' style={{ fontSize: 22, color: '#ef4444' }}></i>,
    descricao: 'Álgebra, Geometria, Cálculo',
    progresso: 85,
    conceitos: 24,
    pendentes: 4,
    status: 'Em Progresso',
    statusColor: 'bg-orange-100 text-orange-500',
    ultima: '2h atrás',
    link: '/area_aluno/materias/matematica',
    linkLabel: 'Continuar',
    barraBg: 'bg-red-100',
    barra: 'bg-red-500',
  },
  {
    key: 'portugues',
    label: 'Português',
    cor: '#a855f7',
    bg: 'bg-purple-100',
    icone: <i className='bx bx-pencil' style={{ fontSize: 22, color: '#a855f7' }}></i>,
    descricao: 'Gramática, Redação',
    progresso: 72,
    conceitos: 18,
    pendentes: 5,
    status: 'Em Progresso',
    statusColor: 'bg-orange-100 text-orange-500',
    ultima: '1 dia atrás',
    link: '/area_aluno/materias/portugues',
    linkLabel: 'Continuar',
    barraBg: 'bg-purple-100',
    barra: 'bg-purple-500',
  },
  {
    key: 'ingles',
    label: 'Inglês',
    cor: '#a855f7',
    bg: 'bg-purple-100',
    icone: <i className='bx bx-globe' style={{ fontSize: 22, color: '#a855f7' }}></i>,
    descricao: 'Grammar, Conversation',
    progresso: 68,
    conceitos: 16,
    pendentes: 5,
    status: 'Em Progresso',
    statusColor: 'bg-orange-100 text-orange-500',
    ultima: '3h atrás',
    link: '/area_aluno/materias/ingles',
    linkLabel: 'Continuar',
    barraBg: 'bg-purple-100',
    barra: 'bg-purple-500',
  },
  {
    key: 'espanhol',
    label: 'Espanhol',
    cor: '#a855f7',
    bg: 'bg-purple-100',
    icone: <i className='bx bx-book-open' style={{ fontSize: 22, color: '#a855f7' }}></i>,
    descricao: 'Gramática, Conversação',
    progresso: 45,
    conceitos: 14,
    pendentes: 8,
    status: 'Em Progresso',
    statusColor: 'bg-orange-100 text-orange-500',
    ultima: '2 dias atrás',
    link: '/area_aluno/materias/espanhol',
    linkLabel: 'Continuar',
    barraBg: 'bg-purple-100',
    barra: 'bg-purple-500',
  },
  {
    key: 'literatura',
    label: 'Literatura',
    cor: '#a855f7',
    bg: 'bg-purple-100',
    icone: <i className='bx bx-book' style={{ fontSize: 22, color: '#a855f7' }}></i>,
    descricao: 'Clássicos, Análise',
    progresso: 100,
    conceitos: 12,
    pendentes: 0,
    status: 'Concluída',
    statusColor: 'bg-green-100 text-green-600',
    ultima: '15/12/2024',
    link: '/area_aluno/materias/literatura',
    linkLabel: 'Revisar',
    barraBg: 'bg-purple-100',
    barra: 'bg-purple-500',
    iconeStatus: <i className='bx bx-check-circle' style={{ color: '#22c55e' }}></i>,
  },
  {
    key: 'arte',
    label: 'Arte',
    cor: '#a855f7',
    bg: 'bg-purple-100',
    icone: <i className='bx bx-palette' style={{ fontSize: 22, color: '#a855f7' }}></i>,
    descricao: 'História, Técnicas',
    progresso: 100,
    conceitos: 8,
    pendentes: 0,
    status: 'Concluída',
    statusColor: 'bg-green-100 text-green-600',
    ultima: '08/12/2024',
    link: '/area_aluno/materias/artes',
    linkLabel: 'Revisar',
    barraBg: 'bg-purple-100',
    barra: 'bg-purple-500',
    iconeStatus: <i className='bx bx-check-circle' style={{ color: '#22c55e' }}></i>,
  },
  {
    key: 'fisica',
    label: 'Física',
    cor: '#22c55e',
    bg: 'bg-green-100',
    icone: <i className='bx bx-bolt' style={{ fontSize: 22, color: '#22c55e' }}></i>,
    descricao: 'Mecânica, Óptica',
    progresso: 78,
    conceitos: 22,
    pendentes: 5,
    status: 'Em Progresso',
    statusColor: 'bg-orange-100 text-orange-500',
    ultima: '4h atrás',
    link: '/area_aluno/materias/fisica',
    linkLabel: 'Continuar',
    barraBg: 'bg-green-100',
    barra: 'bg-green-500',
  },
  {
    key: 'quimica',
    label: 'Química',
    cor: '#22c55e',
    bg: 'bg-green-100',
    icone: <i className='bx bx-medical-flask' style={{ fontSize: 22, color: '#22c55e' }}></i>,
    descricao: 'Orgânica, Inorgânica',
    progresso: 82,
    conceitos: 20,
    pendentes: 4,
    status: 'Em Progresso',
    statusColor: 'bg-orange-100 text-orange-500',
    ultima: '1 dia atrás',
    link: '/area_aluno/materias/quimica',
    linkLabel: 'Continuar',
    barraBg: 'bg-green-100',
    barra: 'bg-green-500',
  },
  {
    key: 'biologia',
    label: 'Biologia',
    cor: '#22c55e',
    bg: 'bg-green-100',
    icone: <i className='bx bx-leaf' style={{ fontSize: 22, color: '#22c55e' }}></i>,
    descricao: 'Genética, Ecologia',
    progresso: 65,
    conceitos: 18,
    pendentes: 6,
    status: 'Em Progresso',
    statusColor: 'bg-orange-100 text-orange-500',
    ultima: '6h atrás',
    link: '/area_aluno/materias/biologia',
    linkLabel: 'Continuar',
    barraBg: 'bg-green-100',
    barra: 'bg-green-500',
  },
  {
    key: 'historia',
    label: 'História',
    cor: '#eab308',
    bg: 'bg-yellow-100',
    icone: <i className='bx bx-landmark' style={{ fontSize: 22, color: '#eab308' }}></i>,
    descricao: 'Brasil, Mundo',
    progresso: 100,
    conceitos: 15,
    pendentes: 0,
    status: 'Concluída',
    statusColor: 'bg-green-100 text-green-600',
    ultima: '12/12/2024',
    link: '/area_aluno/materias/historia',
    linkLabel: 'Revisar',
    barraBg: 'bg-yellow-100',
    barra: 'bg-yellow-500',
    iconeStatus: <i className='bx bx-check-circle' style={{ color: '#22c55e' }}></i>,
  },
  {
    key: 'filosofia',
    label: 'Filosofia',
    cor: '#eab308',
    bg: 'bg-yellow-100',
    icone: <i className='bx bx-brain' style={{ fontSize: 22, color: '#eab308' }}></i>,
    descricao: 'Ética, Lógica',
    progresso: 55,
    conceitos: 10,
    pendentes: 4,
    status: 'Em Progresso',
    statusColor: 'bg-orange-100 text-orange-500',
    ultima: '3 dias atrás',
    link: '/area_aluno/materias/filosofia',
    linkLabel: 'Continuar',
    barraBg: 'bg-yellow-100',
    barra: 'bg-yellow-500',
  },
  {
    key: 'sociologia',
    label: 'Sociologia',
    cor: '#eab308',
    bg: 'bg-yellow-100',
    icone: <i className='bx bx-group' style={{ fontSize: 22, color: '#eab308' }}></i>,
    descricao: 'Sociedade, Cultura',
    progresso: 100,
    conceitos: 9,
    pendentes: 0,
    status: 'Concluída',
    statusColor: 'bg-green-100 text-green-600',
    ultima: '10/12/2024',
    link: '/area_aluno/materias/sociologia',
    linkLabel: 'Revisar',
    barraBg: 'bg-yellow-100',
    barra: 'bg-yellow-500',
    iconeStatus: <i className='bx bx-check-circle' style={{ color: '#22c55e' }}></i>,
  },
  {
    key: 'geografia',
    label: 'Geografia',
    cor: '#eab308',
    bg: 'bg-yellow-100',
    icone: <i className='bx bx-globe-alt' style={{ fontSize: 22, color: '#eab308' }}></i>,
    descricao: 'Física, Humana',
    progresso: 73,
    conceitos: 13,
    pendentes: 3,
    status: 'Em Progresso',
    statusColor: 'bg-orange-100 text-orange-500',
    ultima: '2 dias atrás',
    link: '/area_aluno/materias/geografia',
    linkLabel: 'Continuar',
    barraBg: 'bg-yellow-100',
    barra: 'bg-yellow-500',
  },
];

const Materias = () => {
  return (
    <main className="min-h-screen p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#23272F] leading-tight">Suas Matérias</h1>
          <p className="text-gray-500 text-sm mt-1">Gerencie e acompanhe seu progresso em cada disciplina</p>
        </div>
        <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-2 rounded-xl shadow flex items-center gap-2 text-base">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
          Adicionar Matéria
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {/* Card: Total de Matérias */}
        <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">
          <div>
            <span className="text-gray-500 text-sm block mb-1">Total de Matérias</span>
            <span className="text-xl font-bold text-gray-800">14</span>
          </div>
          <div className="bg-blue-100 text-blue-600 rounded-full p-2 flex items-center justify-center">
            <i class='bx bx-book' style={{ fontSize: 24 }}></i>
          </div>
        </div>
        {/* Card: Em Progresso */}
        <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">
          <div>
            <span className="text-gray-500 text-sm block mb-1">Em Progresso</span>
            <span className="text-xl font-bold text-gray-800">9</span>
          </div>
          <div className="bg-orange-100 text-orange-500 rounded-full p-2 flex items-center justify-center">
            <i class='bx bx-clock-3' style={{ fontSize: 24 }}></i>
          </div>
        </div>
        {/* Card: Concluídas */}
        <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">
          <div>
            <span className="text-gray-500 text-sm block mb-1">Concluídas</span>
            <span className="text-xl font-bold text-gray-800">5</span>
          </div>
          <div className="bg-green-100 text-green-500 rounded-full p-2 flex items-center justify-center">
            <i class='bx bx-check-circle' style={{ fontSize: 24 }}></i>
          </div>
        </div>
        {/* Card: Média Geral */}
        <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">
          <div>
            <span className="text-gray-500 text-sm block mb-1">Média Geral</span>
            <span className="text-xl font-bold text-gray-800">78%</span>
          </div>
          <div className="bg-purple-100 text-purple-500 rounded-full p-2 flex items-center justify-center">
            <i class='bx bx-chart-network' style={{ fontSize: 24 }}></i>
          </div>
        </div>
      </div>
      {/* Área de filtros */}
      <div className="grid grid-cols-2 sm:flex sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 mb-8 w-full">
        <span className="text-gray-600 text-sm sm:text-base font-medium col-span-2 sm:col-span-1 sm:mr-2 mb-2 sm:mb-0">Filtrar por:</span>
        <button className="bg-[#2563eb] text-white font-semibold px-5 py-2 rounded-lg shadow-sm text-sm focus:outline-none w-full sm:w-auto">Todas</button>
        <button className="bg-gray-100 text-gray-500 font-semibold px-5 py-2 rounded-lg shadow-sm text-sm focus:outline-none w-full sm:w-auto">Em Progresso</button>
        <button className="bg-gray-100 text-gray-500 font-semibold px-5 py-2 rounded-lg shadow-sm text-sm focus:outline-none w-full sm:w-auto">Concluídas</button>
        <button className="bg-gray-100 text-gray-500 font-semibold px-5 py-2 rounded-lg shadow-sm text-sm focus:outline-none w-full sm:w-auto">Prioridade</button>
      </div>
      {/* Cards de matérias */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {materiasList.map((materia) => (
          <div key={materia.key} className="bg-white rounded-2xl shadow p-6 flex flex-col gap-2 min-w-[220px]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className={`${materia.bg} rounded-lg w-10 h-10 flex items-center justify-center`}>
                  {materia.icone}
                </div>
                <div>
                  <span className="font-bold text-gray-800 text-lg">{materia.label}</span>
                  <div className="text-gray-500 text-xs">{materia.descricao}</div>
                </div>
              </div>
              <span className={`${materia.statusColor} text-xs font-semibold px-3 py-1 rounded-lg`}>{materia.status}</span>
            </div>
            <div className="flex items-center justify-between mt-2 mb-1">
              <span className="text-gray-500 text-xs">Progresso</span>
              <span className="font-bold text-xs text-gray-800">{materia.progresso}%</span>
            </div>
            <div className={`w-full h-2 ${materia.barraBg} rounded-full mb-2`}>
              <div className={`${materia.barra} h-2 rounded-full`} style={{ width: `${materia.progresso}%` }}></div>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
              <div className="font-bold text-gray-800">{materia.conceitos} <span className="font-normal text-gray-500">Conceitos</span></div>
              <div className="font-bold text-gray-800">{materia.pendentes} <span className="font-normal text-gray-500">Pendentes</span></div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
              <span className="flex items-center gap-1">{materia.iconeStatus ? materia.iconeStatus : <i className='bx bx-time-five'></i>}{materia.ultima}</span>
              <Link to={materia.link} className={materia.status === 'Concluída' ? 'text-[#22c55e] font-semibold' : 'text-[#2563eb] font-semibold'}>{materia.linkLabel}</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Materias;
