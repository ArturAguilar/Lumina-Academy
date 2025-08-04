

import React from "react";
import { Link } from "react-router-dom";


const stats = [
  {
    label: "Exercícios Hoje",
    value: 12,
    iconBg: '#e8f0fe',
    iconColor: '#2563eb',
    iconClass: 'bxr bx-pen-alt',
    progress: 80,
    progressLabel: '80%',
    progressColor: '#2563eb',
    extra: null,
  },
  {
    label: "Taxa de Acerto",
    value: "87%",
    iconBg: '#e6fbf0',
    iconColor: '#16a34a',
    iconClass: 'bxr bx-check-circle',
    progress: null,
    progressLabel: null,
    progressColor: null,
    extra: <span style={{ color: '#16a34a', fontSize: 13 }}>↗ +5% esta semana</span>,
  },
  {
    label: "Tempo Médio",
    value: "2m 15s",
    iconBg: '#f3f0ff',
    iconColor: '#a78bfa',
    iconClass: 'bxr bx-hourglass',
    progress: null,
    progressLabel: null,
    progressColor: null,
    extra: <span style={{ color: '#a78bfa', fontSize: 13 }}>↘ ~30s melhor</span>,
  },
  {
    label: "XP Ganho",
    value: 340,
    iconBg: '#fffbe6',
    iconColor: '#eab308',
    iconClass: 'bxr bx-medal-star',
    progress: null,
    progressLabel: null,
    progressColor: null,
    extra: <span style={{ color: '#eab308', fontSize: 13 }}>↗ +120 hoje</span>,
  },
];

// --- Dados das matérias principais (resumido, pode expandir conforme necessário) ---
const MATERIAS = [
  {
    key: 'matematica',
    label: 'Matemática',
    cor: '#ef4444',
    icone: <i className="bx bx-calculator" style={{ fontSize: 22, color: '#ef4444' }}></i>,
    descricao: 'Álgebra, Geometria, Cálculo',
    total: 247,
    progresso: 85,
  },
  {
    key: 'portugues',
    label: 'Português',
    cor: '#a855f7',
    icone: <i className="bx bx-pencil" style={{ fontSize: 22, color: '#a855f7' }}></i>,
    descricao: 'Gramática, Redação',
    total: 189,
    progresso: 72,
  },
  {
    key: 'ingles',
    label: 'Inglês',
    cor: '#a855f7',
    icone: <i className="bx bx-globe" style={{ fontSize: 22, color: '#a855f7' }}></i>,
    descricao: 'Grammar, Conversation',
    total: 168,
    progresso: 68,
  },
  {
    key: 'espanhol',
    label: 'Espanhol',
    cor: '#a855f7',
    icone: <i className="bx bx-book-open" style={{ fontSize: 22, color: '#a855f7' }}></i>,
    descricao: 'Gramática, Conversação',
    total: 120,
    progresso: 45,
  },
  {
    key: 'literatura',
    label: 'Literatura',
    cor: '#a855f7',
    icone: <i className="bx bx-book" style={{ fontSize: 22, color: '#a855f7' }}></i>,
    descricao: 'Clássicos, Análise',
    total: 112,
    progresso: 100,
  },
  {
    key: 'arte',
    label: 'Arte',
    cor: '#a855f7',
    icone: <i className="bx bx-palette" style={{ fontSize: 22, color: '#a855f7' }}></i>,
    descricao: 'História, Técnicas',
    total: 80,
    progresso: 100,
  },
  {
    key: 'biologia',
    label: 'Biologia',
    cor: '#22c55e',
    icone: <i className="bx bx-leaf" style={{ fontSize: 22, color: '#22c55e' }}></i>,
    descricao: 'Genética, Ecologia',
    total: 118,
    progresso: 65,
  },
  {
    key: 'fisica',
    label: 'Física',
    cor: '#22c55e',
    icone: <i className="bx bx-bolt" style={{ fontSize: 22, color: '#22c55e' }}></i>,
    descricao: 'Mecânica, Óptica',
    total: 122,
    progresso: 78,
  },
  {
    key: 'quimica',
    label: 'Química',
    cor: '#22c55e',
    icone: <i className="bx bx-medical-flask" style={{ fontSize: 22, color: '#22c55e' }}></i>,
    descricao: 'Orgânica, Inorgânica',
    total: 120,
    progresso: 82,
  },
  {
    key: 'historia',
    label: 'História',
    cor: '#f59e42',
    icone: <i className="bx bx-landmark" style={{ fontSize: 22, color: '#f59e42' }}></i>,
    descricao: 'Brasil, Mundo',
    total: 156,
    progresso: 100,
  },
  {
    key: 'geografia',
    label: 'Geografia',
    cor: '#f59e42',
    icone: <i className="bx bx-globe-alt" style={{ fontSize: 22, color: '#f59e42' }}></i>,
    descricao: 'Física, Humana',
    total: 134,
    progresso: 73,
  },
  {
    key: 'filosofia',
    label: 'Filosofia',
    cor: '#eab308',
    icone: <i className="bx bx-brain" style={{ fontSize: 22, color: '#eab308' }}></i>,
    descricao: 'Ética, Lógica',
    total: 100,
    progresso: 55,
  },
  {
    key: 'sociologia',
    label: 'Sociologia',
    cor: '#eab308',
    icone: <i className="bx bx-group" style={{ fontSize: 22, color: '#eab308' }}></i>,
    descricao: 'Sociedade, Cultura',
    total: 90,
    progresso: 100,
  },
];

export default function ExerciciosDashboard() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 mb-8">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow p-5 flex items-center justify-between"
          >
            <div>
              <span className="text-gray-500 text-xs md:text-sm block mb-1">{stat.label}</span>
              <span className="font-bold text-lg md:text-2xl text-gray-900 block">{stat.value}</span>
              {stat.progress !== null && (
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex-1 h-1 bg-gray-200 rounded min-w-[60px] overflow-hidden md:h-1.5">
                    <div style={{ width: `${stat.progress}%`, background: stat.progressColor }} className="h-1 md:h-1.5 rounded"></div>
                  </div>
                  <span className="text-gray-500 text-xs md:text-sm">{stat.progressLabel}</span>
                </div>
              )}
              {stat.extra && (
                <div className="mt-1">{stat.extra}</div>
              )}
            </div>
            <div className="rounded-full p-2 md:p-3 flex items-center justify-center" style={{ background: stat.iconBg }}>
              <i className={stat.iconClass} style={{ fontSize: 18, color: stat.iconColor }}></i>
            </div>
          </div>
        ))}
      </div>

      {/* Título Categorias */}
      <div className="mt-12 mb-7 px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#23272F] leading-tight mb-2">Categorias</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {MATERIAS.map((card, idx) => (
          <div
            key={card.key}
            className="bg-white rounded-2xl shadow p-6 flex flex-col gap-2 min-w-[220px]"
            style={{ boxShadow: `0 2px 8px 0 ${card.cor}22` }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="rounded-lg w-10 h-10 flex items-center justify-center" style={{ background: `${card.cor}22` }}>
                  {card.icone}
                </div>
                <div>
                  <span className="font-bold text-gray-800 text-lg">{card.label}</span>
                  <div className="text-gray-500 text-xs">{card.descricao}</div>
                </div>
              </div>
              <span className="bg-orange-100 text-orange-500 text-xs font-semibold px-3 py-1 rounded-lg">Em Progresso</span>
            </div>
            <div className="flex items-center justify-between mt-2 mb-1">
              <span className="text-gray-500 text-xs">Progresso</span>
              <span className="font-bold text-xs text-gray-800">{card.progresso}%</span>
            </div>
            <div className="w-full h-2 rounded-full mb-2" style={{ background: `${card.cor}22` }}>
              <div className="h-2 rounded-full" style={{ background: card.cor, width: `${card.progresso}%` }}></div>
            </div>
            <div className="flex items-center justify-between text-sm mb-2">
              <div className="font-bold text-gray-800">24 <span className="font-normal text-gray-500">Exercícios</span></div>
              <div className="font-bold text-gray-800">4 <span className="font-normal text-gray-500">Pendentes</span></div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
              <span className="flex items-center gap-1"><i className='bx bx-time-five'></i>2h atrás</span>
              <Link to={`/area_aluno/exercicios/${card.key}`} className="text-[#2563eb] font-semibold">Continuar</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
