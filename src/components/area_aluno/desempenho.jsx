import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Componente base para Desempenho do Aluno
// Aqui você pode começar a criar as lógicas e visualizações de desempenho


const lineData = {
  labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
  datasets: [
    {
      label: "Horas estudadas",
      data: [6.3, 7.1, 5.8, 8.0, 7.0, 4.3, 5.2],
      fill: true,
      backgroundColor: "rgba(59,130,246,0.12)",
      borderColor: "#3b82f6",
      tension: 0.4,
      pointBackgroundColor: "#3b82f6",
      pointBorderColor: "#fff",
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointStyle: 'circle',
    },
  ],
};

const doughnutData = {
  labels: [
    "Matemática", "Português", "Inglês", "Espanhol", "Literatura", "Arte", "Física", "Química", "Biologia", "História", "Filosofia", "Sociologia", "Geografia"
  ],
  datasets: [
    {
      label: "Desempenho",
      data: [32, 28, 24, 20, 18, 15, 25, 22, 19, 21, 17, 16, 23], // Exemplo de dados fictícios
      backgroundColor: [
        "#3b82f6", // Matemática
        "#a855f7", // Português
        "#818cf8", // Inglês
        "#f472b6", // Espanhol
        "#f59e42", // Literatura
        "#fbbf24", // Arte
        "#10b981", // Física
        "#06b6d4", // Química
        "#22c55e", // Biologia
        "#eab308", // História
        "#f43f5e", // Filosofia
        "#6366f1", // Sociologia
        "#0ea5e9", // Geografia
      ],
      borderWidth: 2,
    },
  ],
};

const Desempenho = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-4">
      {/* Cards de indicadores */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {/* Tempo Total de Estudo */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 flex flex-col justify-between min-h-[120px] sm:min-h-[140px]">
          <span className="text-gray-600 text-xs sm:text-sm mb-1">Tempo Total de Estudo</span>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg sm:text-2xl text-gray-900">47h 32m</span>
            <span className="bg-blue-100 p-1 sm:p-2 rounded-lg"><i className="bx bx-clock-4 text-blue-600 text-base sm:text-xl"></i></span>
          </div>
          <span className="text-green-600 text-xs sm:text-sm mt-2 flex items-center gap-1">
            <i className="bx bx-up-arrow-alt"></i> +12% vs semana passada
          </span>
        </div>
        {/* Tarefas Concluídas */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 flex flex-col justify-between min-h-[120px] sm:min-h-[140px]">
          <span className="text-gray-600 text-xs sm:text-sm mb-1">Tarefas Concluídas</span>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg sm:text-2xl text-gray-900">23</span>
            <span className="bg-green-100 p-1 sm:p-2 rounded-lg"><i className="bx bx-check text-green-600 text-base sm:text-xl"></i></span>
          </div>
          <span className="text-green-600 text-xs sm:text-sm mt-2 flex items-center gap-1">
            <i className="bx bx-up-arrow-alt"></i> +8% vs semana passada
          </span>
        </div>
        {/* Nota Média */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 flex flex-col justify-between min-h-[120px] sm:min-h-[140px]">
          <span className="text-gray-600 text-xs sm:text-sm mb-1">Nota Média</span>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg sm:text-2xl text-gray-900">8.7</span>
            <span className="bg-yellow-100 p-1 sm:p-2 rounded-lg"><i className="bx bxs-star text-yellow-500 text-base sm:text-xl"></i></span>
          </div>
          <span className="text-green-600 text-xs sm:text-sm mt-2 flex items-center gap-1">
            <i className="bx bx-up-arrow-alt"></i> +0.3 vs mês passado
          </span>
        </div>
        {/* Sequência de Estudos */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 flex flex-col justify-between min-h-[120px] sm:min-h-[140px]">
          <span className="text-gray-600 text-xs sm:text-sm mb-1">Sequência de Estudos</span>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg sm:text-2xl text-gray-900">15 dias</span>
            <span className="bg-orange-100 p-1 sm:p-2 rounded-lg"><i className="bx bx-fire text-orange-500 text-base sm:text-xl"></i></span>
          </div>
          <span className="text-orange-500 text-xs sm:text-sm mt-2 flex items-center gap-1">
            <i className="bx bx-fire"></i> <span className="font-semibold">Recorde pessoal!</span>
          </span>
        </div>
      </div>
      {/* Seletor de período */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-xl flex overflow-hidden">
          <button className="px-6 py-2 text-sm font-semibold focus:outline-none transition-all bg-[#3b82f6] text-white shadow-none" style={{borderRadius: '0.75rem 0 0 0.75rem'}}>Esta Semana</button>
          <button className="px-6 py-2 text-sm font-semibold focus:outline-none transition-all bg-transparent text-gray-800 hover:bg-gray-200">Este Mês</button>
          <button className="px-6 py-2 text-sm font-semibold focus:outline-none transition-all bg-transparent text-gray-800 hover:bg-gray-200" style={{borderRadius: '0 0.75rem 0.75rem 0'}}>Este Ano</button>
        </div>
      </div>
      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gráfico de Linha - igual à imagem */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-xl">Tempo de Estudo Diário</span>
            <span className="text-blue-600 text-sm flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Horas estudadas</span>
          </div>
          <div style={{width: '100%', minWidth: 320, maxWidth: 480, height: 320, margin: '0 auto', background: '#fff', borderRadius: 12}}>
            <Line 
              data={lineData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { 
                    display: false
                  },
                  title: { display: false },
                  tooltip: {
                    backgroundColor: '#fff',
                    titleColor: '#3b82f6',
                    bodyColor: '#222',
                    borderColor: '#3b82f6',
                    borderWidth: 1,
                    callbacks: {
                      label: (context) => `${context.parsed.y}h`,
                    },
                    padding: 12,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      color: 'rgba(0,0,0,0.04)',
                      borderDash: [2, 2],
                    },
                    ticks: {
                      font: { size: 13, family: 'inherit' },
                      color: '#222',
                    },
                  },
                  y: {
                    beginAtZero: true,
                    min: 0,
                    max: 10,
                    grid: {
                      color: 'rgba(0,0,0,0.07)',
                      borderDash: [2, 2],
                    },
                    ticks: {
                      callback: (value) => value + "h",
                      font: { size: 13, family: 'inherit' },
                      color: '#222',
                      stepSize: 1,
                      padding: 6,
                    },
                  },
                },
              }} 
              height={320} 
            />
          </div>
        </div>
        {/* Gráfico Doughnut - igual à imagem */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-xl">Desempenho por Matéria</span>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Ver detalhes</a>
          </div>
          <div style={{width: '100%', minWidth: 320, maxWidth: 400, height: 260, margin: '0 auto', background: '#fff', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Doughnut 
              data={doughnutData}
              options={{
                cutout: '70%',
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    callbacks: {
                      label: (context) => `${context.label}: ${context.parsed}%`,
                    },
                  },
                },
              }}
              height={220}
            />
          </div>
          {/* Legenda customizada para todas as matérias */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
            <div className="flex items-center gap-2 text-sm"><span className="w-4 h-4 rounded-full inline-block" style={{background:'#3b82f6'}}></span><span className="text-gray-700">Matemática</span></div>
            <div className="flex items-center gap-2 text-sm"><span className="w-4 h-4 rounded-full inline-block" style={{background:'#a855f7'}}></span><span className="text-gray-700">Português</span></div>
            <div className="flex items-center gap-2 text-sm"><span className="w-4 h-4 rounded-full inline-block" style={{background:'#818cf8'}}></span><span className="text-gray-700">Inglês</span></div>
            <div className="flex items-center gap-2 text-sm"><span className="w-4 h-4 rounded-full inline-block" style={{background:'#f472b6'}}></span><span className="text-gray-700">Espanhol</span></div>
            <div className="flex items-center gap-2 text-sm"><span className="w-4 h-4 rounded-full inline-block" style={{background:'#f59e42'}}></span><span className="text-gray-700">Literatura</span></div>
            <div className="flex items-center gap-2 text-sm"><span className="w-4 h-4 rounded-full inline-block" style={{background:'#fbbf24'}}></span><span className="text-gray-700">Arte</span></div>
            <div className="flex items-center gap-2 text-sm"><span className="w-4 h-4 rounded-full inline-block" style={{background:'#10b981'}}></span><span className="text-gray-700">Física</span></div>
            <div className="flex items-center gap-2 text-sm"><span className="w-4 h-4 rounded-full inline-block" style={{background:'#06b6d4'}}></span><span className="text-gray-700">Química</span></div>
            <div className="flex items-center gap-2 text-sm"><span className="w-4 h-4 rounded-full inline-block" style={{background:'#22c55e'}}></span><span className="text-gray-700">Biologia</span></div>
            <div className="flex items-center gap-2 text-sm"><span className="w-4 h-4 rounded-full inline-block" style={{background:'#eab308'}}></span><span className="text-gray-700">História</span></div>
            <div className="flex items-center gap-2 text-sm"><span className="w-4 h-4 rounded-full inline-block" style={{background:'#f43f5e'}}></span><span className="text-gray-700">Filosofia</span></div>
            <div className="flex items-center gap-2 text-sm"><span className="w-4 h-4 rounded-full inline-block" style={{background:'#6366f1'}}></span><span className="text-gray-700">Sociologia</span></div>
            <div className="flex items-center gap-2 text-sm"><span className="w-4 h-4 rounded-full inline-block" style={{background:'#0ea5e9'}}></span><span className="text-gray-700">Geografia</span></div>
          </div>
        </div>
      </div>
      {/* Cards de Metas, Conquistas e Consistência */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* Metas da Semana */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col min-w-[260px]">
          <span className="font-semibold text-lg text-gray-900 mb-4">Metas da Semana</span>
          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="text-gray-700">Tempo de Estudo</span>
            <span className="font-semibold text-gray-500">47h <span className="text-gray-300">/ 50h</span></span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full mb-4"><div className="h-2 rounded-full bg-blue-500" style={{width: '94%'}}></div></div>
          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="text-gray-700">Tarefas Concluídas</span>
            <span className="font-semibold text-gray-500">23 <span className="text-gray-300">/ 25</span></span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full mb-4"><div className="h-2 rounded-full bg-green-500" style={{width: '92%'}}></div></div>
          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="text-gray-700">Exercícios Resolvidos</span>
            <span className="font-semibold text-gray-500">156 <span className="text-gray-300">/ 200</span></span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full"><div className="h-2 rounded-full bg-purple-500" style={{width: '78%'}}></div></div>
        </div>
        {/* Conquistas Recentes */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col min-w-[260px]">
          <span className="font-semibold text-lg text-gray-900 mb-4">Conquistas Recentes</span>
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-yellow-100 text-yellow-500 rounded-full p-2 flex items-center justify-center"><i className='bx bx-fire text-xl'></i></span>
            <div>
              <span className="font-semibold text-gray-800 text-sm block">Sequência de 15 dias</span>
              <span className="text-xs text-gray-500">Conquistado hoje</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-blue-100 text-blue-500 rounded-full p-2 flex items-center justify-center"><i className='bx bx-trophy text-xl'></i></span>
            <div>
              <span className="font-semibold text-gray-800 text-sm block">Mestre em Matemática</span>
              <span className="text-xs text-gray-500">2 dias atrás</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-green-100 text-green-500 rounded-full p-2 flex items-center justify-center"><i className='bx bx-medal text-xl'></i></span>
            <div>
              <span className="font-semibold text-gray-800 text-sm block">100 Exercícios</span>
              <span className="text-xs text-gray-500">1 semana atrás</span>
            </div>
          </div>
        </div>
        {/* Consistência de Estudos */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center min-w-[260px]">
          <span className="font-semibold text-lg text-gray-900 mb-4">Consistência de Estudos</span>
          <div className="flex flex-col items-center justify-center mb-2">
            <svg width="90" height="90" viewBox="0 0 90 90">
              <circle cx="45" cy="45" r="38" fill="none" stroke="#e5e7eb" strokeWidth="8" />
              <circle cx="45" cy="45" r="38" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="238" strokeDashoffset="47.6" strokeLinecap="round" />
              <text x="50%" y="54%" textAnchor="middle" fill="#222" fontSize="22" fontWeight="bold" dominantBaseline="middle">80%</text>
            </svg>
          </div>
          <span className="text-gray-500 text-sm mb-1">Dias estudados este mês</span>
          <span className="text-xl font-bold text-gray-800">24 de 30 dias</span>
        </div>
      </div>
    {/* Card de Desempenho Detalhado por Matéria */}
    <div className="bg-white rounded-xl shadow p-6 mt-8">
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold text-xl">Desempenho Detalhado por Matéria</span>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded flex items-center gap-2 text-sm transition-all">
          <i className="bx bx-download text-lg"></i> Exportar Relatório
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-2 px-3 font-semibold">MATÉRIA</th>
              <th className="py-2 px-3 font-semibold">TEMPO ESTUDADO</th>
              <th className="py-2 px-3 font-semibold">EXERCÍCIOS</th>
              <th className="py-2 px-3 font-semibold">NOTA MÉDIA</th>
              <th className="py-2 px-3 font-semibold">PROGRESSO</th>
              <th className="py-2 px-3 font-semibold">STATUS</th>
            </tr>
          </thead>
          <tbody className="text-gray-900">
            {/* Matemática */}
            <tr className="border-b hover:bg-gray-50">
              <td className="py-3 px-3 flex items-center gap-2 font-medium"><span className="bg-blue-100 p-2 rounded-lg"><i className="bx bx-calculator text-blue-600"></i></span> Matemática</td>
              <td className="py-3 px-3">15h 24m</td>
              <td className="py-3 px-3">67 / 80</td>
              <td className="py-3 px-3">8.9</td>
              <td className="py-3 px-3"><div className="w-32 h-2 bg-gray-100 rounded-full"><div className="h-2 rounded-full bg-blue-600" style={{width: '85%'}}></div></div></td>
              <td className="py-3 px-3"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Excelente</span></td>
            </tr>
            {/* Física */}
            <tr className="border-b hover:bg-gray-50">
              <td className="py-3 px-3 flex items-center gap-2 font-medium"><span className="bg-purple-100 p-2 rounded-lg"><i className="bx bx-atom text-purple-600"></i></span> Física</td>
              <td className="py-3 px-3">12h 18m</td>
              <td className="py-3 px-3">45 / 60</td>
              <td className="py-3 px-3">8.2</td>
              <td className="py-3 px-3"><div className="w-32 h-2 bg-gray-100 rounded-full"><div className="h-2 rounded-full bg-purple-600" style={{width: '75%'}}></div></div></td>
              <td className="py-3 px-3"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Bom</span></td>
            </tr>
            {/* Química */}
            <tr className="border-b hover:bg-gray-50">
              <td className="py-3 px-3 flex items-center gap-2 font-medium"><span className="bg-green-100 p-2 rounded-lg"><i className="bx bx-medical-flask text-green-600"></i></span> Química</td>
              <td className="py-3 px-3">10h 45m</td>
              <td className="py-3 px-3">32 / 50</td>
              <td className="py-3 px-3">7.8</td>
              <td className="py-3 px-3"><div className="w-32 h-2 bg-gray-100 rounded-full"><div className="h-2 rounded-full bg-green-600" style={{width: '64%'}}></div></div></td>
              <td className="py-3 px-3"><span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">Regular</span></td>
            </tr>
            {/* História */}
            <tr>
              <td className="py-3 px-3 flex items-center gap-2 font-medium"><span className="bg-orange-100 p-2 rounded-lg"><i className="bx bx-landmark text-orange-600"></i></span> História</td>
              <td className="py-3 px-3">9h 05m</td>
              <td className="py-3 px-3">28 / 40</td>
              <td className="py-3 px-3">8.5</td>
              <td className="py-3 px-3"><div className="w-32 h-2 bg-gray-100 rounded-full"><div className="h-2 rounded-full bg-orange-500" style={{width: '70%'}}></div></div></td>
              <td className="py-3 px-3"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Bom</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
  );
};

export default Desempenho;