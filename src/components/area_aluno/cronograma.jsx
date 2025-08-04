import React, { useState } from "react";


const tarefasHoje = [
  {
    titulo: 'Revisão de Cálculo',
    subtitulo: 'Derivadas e integrais',
    horario: '09:00 - 11:00',
    duracao: '2h',
    prioridade: 'Alta',
    cor: 'border-red-400',
    bg: 'bg-red-50',
    tag: 'bg-red-100 text-red-500',
  },
  {
    titulo: 'Exercícios de Física',
    subtitulo: 'Mecânica clássica',
    horario: '14:00 - 15:30',
    duracao: '1h 30m',
    prioridade: 'Média',
    cor: 'border-yellow-400',
    bg: 'bg-yellow-50',
    tag: 'bg-yellow-100 text-yellow-600',
  },
  {
    titulo: 'Leitura - História',
    subtitulo: 'Capítulo 5 - República',
    horario: '19:00 - 20:00',
    duracao: '1h',
    prioridade: 'Baixa',
    cor: 'border-green-400',
    bg: 'bg-green-50',
    tag: 'bg-green-100 text-green-600',
  },
];

const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const diasMes = [
  [null, null, null, null, null, 1, 2],
  [3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30],
  [31, null, null, null, null, null, null],
];
const diasComTarefa = [3, 5, 12, 15, 20, 25];

const stats = [
  {
    label: 'Horas Hoje',
    value: '4h 30m',
    progress: 75,
    progressLabel: null,
    progressColor: '#2563eb',
    iconBg: '#e8f0fe',
    iconColor: '#2563eb',
    iconClass: 'bx bx-clock-4',
    extra: <span className="text-xs text-gray-400">Meta: 6h</span>,
  },
  {
    label: 'Tarefas Concluídas',
    value: '8/12',
    progress: null,
    progressLabel: null,
    progressColor: null,
    iconBg: '#e6fbf0',
    iconColor: '#16a34a',
    iconClass: 'bx bx-check-circle',
    extra: <span className="text-xs text-green-600 font-semibold">↗ +2 desde ontem</span>,
  },
  {
    label: 'Próxima Prova',
    value: '5 dias',
    progress: null,
    progressLabel: null,
    progressColor: null,
    iconBg: '#fee2e2',
    iconColor: '#ef4444',
    iconClass: 'bx bx-info-octagon',
    extra: <span className="text-xs text-red-500">Matemática - Cálculo</span>,
  },
  {
    label: 'Sequência',
    value: '12 dias',
    progress: null,
    progressLabel: null,
    progressColor: null,
    iconBg: '#fff7ed',
    iconColor: '#f59e42',
    iconClass: 'bx bx-fire',
    extra: <span className="text-xs text-orange-500 flex items-center gap-1"><i className="bx bx-trophy"></i>Recorde pessoal!</span>,
  },
];

const Cronograma = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="min-h-screen bg-gray-50 p-2 md:p-6">
      {/* Cards de resumo */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow p-5 flex items-center justify-between"
          >
            <div>
              <span className="text-gray-500 text-xs md:text-sm block mb-1">{stat.label}</span>
              <span className="font-bold text-lg md:text-2xl text-gray-900 block">{stat.value}</span>
              {stat.progress !== null && (
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex-1 h-1.5 bg-gray-200 rounded min-w-[60px] overflow-hidden">
                    <div style={{ width: `${stat.progress}%`, background: stat.progressColor }} className="h-1.5 rounded"></div>
                  </div>
                  <span className="text-gray-500 text-xs">{stat.progressLabel}</span>
                </div>
              )}
              {stat.extra && (
                <div className="mt-1">{stat.extra}</div>
              )}
            </div>
            <div className="rounded-full p-2 flex items-center justify-center" style={{ background: stat.iconBg }}>
              <i className={stat.iconClass} style={{ fontSize: 24, color: stat.iconColor }}></i>
            </div>
          </div>
        ))}

      </div>
      <div className="max-w-6xl mx-auto flex justify-end mt-6 mb-8">
        <button
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition-colors"
          onClick={() => setShowModal(true)}
        >
          <i className="bx bx-plus text-lg"></i>
          Adicionar Tarefa
        </button>
      </div>

      {/* Modal Adicionar Tarefa */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative animate-fade-in">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Fechar modal"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Adicionar Tarefa</h2>
            <form className="flex flex-col gap-4">
              <input className="border rounded px-3 py-2" placeholder="Título da tarefa" />
              <input className="border rounded px-3 py-2" placeholder="Descrição/Matéria" />
              <div className="flex gap-2">
                <input type="time" className="border rounded px-3 py-2 w-1/2" />
                <input type="time" className="border rounded px-3 py-2 w-1/2" />
              </div>
              <select className="border rounded px-3 py-2">
                <option>Prioridade</option>
                <option>Alta</option>
                <option>Média</option>
                <option>Baixa</option>
              </select>
              <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg mt-2">Salvar</button>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 min-h-[70vh] md:min-h-[70vh] flex-grow">
        {/* Calendário */}
        <section className="bg-white rounded-xl shadow p-6 flex-1 md:basis-[60%] md:max-w-[60%] md:h-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Dezembro 2024</h2>
            <div className="flex gap-2">
              <button className="text-gray-400 hover:text-gray-600"><i className="bx bx-chevron-left text-2xl"></i></button>
              <button className="text-gray-400 hover:text-gray-600"><i className="bx bx-chevron-right text-2xl"></i></button>
            </div>
          </div>
          <div className="grid grid-cols-7 text-center text-gray-500 font-medium mb-2">
            {diasSemana.map((dia) => (
              <div key={dia}>{dia}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {diasMes.flat().map((dia, idx) => (
              <div key={idx} className="relative h-10 flex items-center justify-center">
                {dia ? (
                  <>
                    <button
                      className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all
                        ${dia === 3 ? 'bg-blue-600 text-white font-bold' : 'hover:bg-blue-100'}
                      `}
                    >
                      {dia}
                    </button>
                    {diasComTarefa.includes(dia) && (
                      <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    )}
                  </>
                ) : null}
              </div>
            ))}
          </div>
          {/* Legenda de categorias */}
          <div className="pt-8">
            <hr className="mb-4 border-gray-200" />
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span>
                <span>Estudo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                <span>Prova</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                <span>Revisão</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-500 inline-block"></span>
                <span>Projeto</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tarefas do dia */}
        <aside className="bg-white rounded-xl shadow p-6 w-full md:basis-[40%] md:max-w-[40%] flex-shrink-0 md:h-full md:flex md:flex-col md:justify-between flex-grow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">Hoje - 15 Dez</h3>
            <button className="text-blue-600 text-xl"><i className="bx bx-plus"></i></button>
          </div>
          <div className="flex flex-col gap-4">
            {tarefasHoje.map((tarefa, idx) => (
              <div key={idx} className={`border-l-4 ${tarefa.cor} ${tarefa.bg} rounded-lg p-4 flex flex-col gap-1 shadow-sm`}>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">{tarefa.titulo}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${tarefa.tag} font-semibold`}>{tarefa.prioridade}</span>
                </div>
                <span className="text-gray-500 text-sm">{tarefa.subtitulo}</span>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-400 flex items-center gap-1"><i className="bx bx-time"></i> {tarefa.horario}</span>
                  <span className="text-xs text-gray-400 flex items-center gap-1"><i className="bx bx-timer"></i> {tarefa.duracao}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Cronograma;
