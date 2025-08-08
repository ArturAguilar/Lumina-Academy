import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-4 px-4 sm:px-8" style={{minHeight: "100vh" }}>
      <div className="mb-8 bg-white rounded-2xl shadow p-3 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4 mt-0">
        {(() => {
          const hour = new Date().getHours();
          let period = "manhã";
          let phrases = [
            "Aproveite o início do dia para aprender algo novo! 🌞",
            "Bom dia! O segredo do sucesso é a constância nos estudos. 📚",
            "Que seu dia seja produtivo e cheio de conquistas acadêmicas! 🏆",
            "Comece o dia focado: cada exercício te aproxima da aprovação. 🚀",
            "Estudar pela manhã potencializa seu rendimento! 💡"
          ];
          if (hour >= 12 && hour < 18) {
            period = "tarde";
            phrases = [
              "Boa tarde! Continue firme, cada esforço vale a pena. 💪",
              "A tarde é perfeita para revisar conteúdos importantes! 📖",
              "Persistência nos estudos faz toda diferença! 🔥",
              "Aproveite a energia da tarde para superar desafios. ⚡",
              "Seu futuro está sendo construído agora, não desista! 🏅"
            ];
          } else if (hour >= 18 && hour < 24) {
            period = "noite";
            phrases = [
              "Boa noite! O conhecimento adquirido hoje te leva mais longe. 🌙",
              "Noite de estudos é noite de crescimento! 📈",
              "Aproveite a tranquilidade da noite para se concentrar. 🤫",
              "Cada página lida à noite é um passo rumo à aprovação. 📝",
              "Estudar à noite mostra sua dedicação! ⭐"
            ];
          } else if (hour >= 0 && hour < 6) {
            period = "madrugada";
            phrases = [
              "Madrugada de estudos: poucos fazem, muitos sonham! 🌌",
              "Seu esforço fora do horário comum será recompensado. 🥇",
              "A madrugada é dos determinados! Continue assim. 🦉",
              "Estudar enquanto outros descansam é diferencial. 🛌",
              "A disciplina na madrugada te destaca dos demais. 🔥"
            ];
          }
          const phrase = phrases[Math.floor(Math.random() * phrases.length)];
          return (
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 flex flex-wrap items-center gap-3 sm:gap-4 leading-tight">
              <span className="flex items-center gap-3">
                {hour >= 6 && hour < 12 ? "Bom dia" : hour >= 12 && hour < 18 ? "Boa tarde" : hour >= 18 && hour < 24 ? "Boa noite" : "Boa madrugada"}, Izabela Galantini! {phrase}
              </span>
            </h1>
          );
        })()}
        <div className="text-xs sm:text-sm md:text-base text-slate-400 mt-1 sm:mt-2 flex flex-wrap items-center gap-3 sm:gap-5">
          <span>Próxima prova: <span className="font-semibold text-slate-800">IME 2024</span></span>
          <span className="text-orange-400 font-semibold flex items-center gap-2">
            <i className='bx bx-clock-3 text-orange-400 text-lg'></i> 127 dias restantes
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between min-w-[120px] w-full">
          <div>
            <span className="text-gray-500 text-sm block mb-1">Esta semana</span>
            <span className="text-xl font-bold text-gray-800">24</span>
            <div className="text-xs sm:text-sm md:text-base text-slate-400 mt-1">Tarefas Concluídas</div>
          </div>
          <div className="bg-green-100 text-green-500 rounded-full p-2 flex items-center justify-center">
            <i className='bx bx-check' style={{ fontSize: 24 }}></i>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between min-w-[120px] w-full">
          <div>
            <span className="text-gray-500 text-sm block mb-1">Último mês</span>
            <span className="text-xl font-bold text-gray-800">87%</span>
            <div className="text-xs sm:text-sm md:text-base text-slate-400 mt-1">Média de Acertos</div>
          </div>
          <div className="bg-blue-100 text-sky-500 rounded-full p-2 flex items-center justify-center">
            <i className='bx bx-bullseye' style={{ fontSize: 24 }}></i>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between min-w-[120px] w-full">
          <div>
            <span className="text-gray-500 text-sm block mb-1">Geral</span>
            <span className="text-xl font-bold text-gray-800">73%</span>
            <div className="text-xs sm:text-sm md:text-base text-slate-400 mt-1">Progresso Geral</div>
          </div>
          <div className="bg-purple-100 text-purple-500 rounded-full p-2 flex items-center justify-center">
            <i className='bx bx-chart-line' style={{ fontSize: 24 }}></i>
          </div>
        </div>
        {/* Card 4 - Conquistas */}
        <Link to="/area_aluno/conquistas" className="bg-white rounded-xl shadow p-5 flex items-center justify-between min-w-[120px] w-full hover:shadow-lg transition-all duration-200 group">
          <div>
            <span className="text-gray-500 text-sm block mb-1">Desbloqueadas</span>
            <span className="text-xl font-bold text-gray-800">3</span>
            <div className="text-sm md:text-base text-slate-400 mt-1 group-hover:text-amber-600 transition-colors">Conquistas</div>
          </div>
          <div className="bg-amber-100 text-amber-500 rounded-full p-2 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
            <i className='bx bx-medal' style={{ fontSize: 24 }}></i>
          </div>
        </Link>
      </div>
      {/* Cards e Calendário lado a lado */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        {/* Card Suas Matérias */}
        <div className="bg-white rounded-2xl shadow p-2 sm:p-4 md:p-6 w-full max-w-md mx-auto lg:mx-0 lg:w-[380px] flex-1 mb-8 lg:mb-0" >
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 whitespace-nowrap">Suas Matérias</h2>
            <Link to="/area_aluno/materias" className="text-blue-600 font-medium text-xs sm:text-sm md:text-base hover:underline whitespace-nowrap">Ver todas</Link>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            {/* Matéria 1 */}
            <div className="flex items-center bg-gray-50 rounded-xl px-3 py-2 sm:px-4 sm:py-3 gap-2 sm:gap-3 shadow-sm">
              <div className="bg-red-100 rounded-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <i className='bx bx-calculator text-base sm:text-xl text-red-500'></i>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-slate-800 text-base sm:text-lg mb-0.5">Matemática</div>
                <div className="text-slate-400 text-[11px] sm:text-xs">12 exercícios pendentes</div>
              </div>
              <div className="text-right min-w-[40px] sm:min-w-[52px]">
                <div className="font-bold text-slate-700 text-base sm:text-xl">85%</div>
                <div className="text-slate-400 text-[9px] sm:text-xs">Progresso</div>
              </div>
            </div>
            {/* Matéria 2 */}
            <div className="flex items-center bg-gray-50 rounded-xl px-3 py-2 sm:px-4 sm:py-3 gap-2 sm:gap-3 shadow-sm">
              <div className="bg-indigo-100 rounded-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <i className='bx bx-bolt text-base sm:text-xl text-indigo-500'></i>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-slate-800 text-base sm:text-lg mb-0.5">Física</div>
                <div className="text-slate-400 text-[11px] sm:text-xs">8 exercícios pendentes</div>
              </div>
              <div className="text-right min-w-[40px] sm:min-w-[52px]">
                <div className="font-bold text-slate-700 text-base sm:text-xl">78%</div>
                <div className="text-slate-400 text-[9px] sm:text-xs">Progresso</div>
              </div>
            </div>
            {/* Matéria 3 */}
            <div className="flex items-center bg-gray-50 rounded-xl px-3 py-2 sm:px-4 sm:py-3 gap-2 sm:gap-3 shadow-sm">
              <div className="bg-green-100 rounded-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <i className='bx bx-medical-flask text-base sm:text-xl text-green-500'></i>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-slate-800 text-base sm:text-lg mb-0.5">Química</div>
                <div className="text-slate-400 text-[11px] sm:text-xs">5 exercícios pendentes</div>
              </div>
              <div className="text-right min-w-[40px] sm:min-w-[52px]">
                <div className="font-bold text-slate-700 text-base sm:text-xl">92%</div>
                <div className="text-slate-400 text-[9px] sm:text-xs">Progresso</div>
              </div>
            </div>
          </div>
        </div>
        {/* Calendário */}
        <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 2px 8px #0001", padding: 32, width: 420, minWidth: 220, flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1e293b" }}>Calendário</h2>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <i className='bx bx-chevron-left' style={{ fontSize: 18, color: "#64748b", cursor: "pointer" }}></i>
              <span style={{ fontWeight: 500, color: "#334155", fontSize: 15 }}>Dezembro 2024</span>
              <i className='bx bx-chevron-right' style={{ fontSize: 18, color: "#64748b", cursor: "pointer" }}></i>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8, marginBottom: 12 }}>
            {[
              "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"
            ].map((d, i) => (
              <div key={i} style={{ color: "#64748b", fontWeight: 500, fontSize: 15, textAlign: "center" }}>{d}</div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8 }}>
            {/* Dias do mês, estático para exemplo */}
            {Array.from({ length: 35 }).map((_, i) => {
              const day = i - 0;
              let style = { color: "#334155", fontWeight: 500, fontSize: 14, textAlign: "center", borderRadius: 8, padding: "6px 0" };
              if ([14, 21, 28].includes(day)) style = { ...style, background: "#fef3c7", color: "#b45309" };
              if (day === 15) style = { ...style, background: "#2563eb", color: "#fff" };
              if (day < 1 || day > 31) style = { ...style, color: "#d1d5db" };
              return <div key={i} style={style}>{day > 0 && day <= 31 ? day : ""}</div>;
            })}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, marginTop: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <span style={{ width: 12, height: 12, background: "#fde68a", borderRadius: "50%", display: "inline-block" }}></span>
              <span style={{ color: "#64748b", fontSize: 15 }}>Simulados e provas importantes</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <span style={{ width: 12, height: 12, background: "#2563eb", borderRadius: "50%", display: "inline-block" }}></span>
              <span style={{ color: "#64748b", fontSize: 15 }}>Hoje</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
