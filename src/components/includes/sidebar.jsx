import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { icon: "bxr bx-home-alt-2", label: "Home", to: "/area_aluno/dashboard" },
  { icon: "bx-book", label: "Matérias", to: "/area_aluno/materias" },
  { icon: "bx-pencil", label: "Exercícios", to: "/area_aluno/exercicios" },
  { icon: "bx-task", label: "Simulados", to: "/area_aluno/simulados" },
  { icon: "bx-book-open", label: "Biblioteca", to: "/area_aluno/biblioteca" },
  { icon: "bx-broadcast", label: "Transmissões", to: "/area_aluno/transmissoes" },
  { icon: "bxr bx-calendar", label: "Cronograma", to: "/area_aluno/cronograma" },
  { icon: "bx-layout", label: "Kanban", to: "/area_aluno/kanban" },
  { icon: "bxr bx-bar-chart-big", label: "Desempenho", to: "/area_aluno/desempenho" },
  { icon: "bx-medal", label: "Conquistas", to: "/area_aluno/conquistas" },
  { icon: "bx-chat", label: "Chat", to: "/area_aluno/chat" },
  { icon: "bxr bx-headphone-mic", label: "Suporte", to: "/area_aluno/suporte" },
  // { icon: "bx-cog", label: "Configuração", to: "/area_aluno/configuracoes" },
];

const Sidebar = ({ open, onClose }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Overlay para mobile
  const overlay = (
    <div
      className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    ></div>
  );

  return (
    <>
      {isMobile && open && overlay}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full bg-white shadow-lg flex flex-col transition-transform duration-200
          w-64
          ${isMobile
            ? open
              ? 'translate-x-0'
              : '-translate-x-full'
            : 'translate-x-0'}
        `}
        style={{ minWidth: 0 }}
      >
        <div className="p-6 border-b border-gray-100 flex-shrink-0" style={{ position: 'sticky', top: 0, zIndex: 10, background: 'inherit' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <i className="bx bxs-education text-white text-xl"></i>
            </div>
            <div>
              <span className="font-bold text-lg text-slate-800">Lumina Academy</span>
              <div className="text-xs text-slate-400">Students</div>
            </div>
          </div>
        </div>
        <nav className="p-4 flex-1 flex flex-col gap-2 overflow-y-auto" style={{ minHeight: 0 }}>
          {menuItems.map((item) => {
            let active = false;
            if (item.label === "Matérias") {
              active = location.pathname.startsWith("/area_aluno/materias");
            } else if (item.label === "Exercícios") {
              active = location.pathname.startsWith("/area_aluno/exercicios");
            } else if (item.label === "Transmissões") {
              active = location.pathname.startsWith("/area_aluno/transmissoes");
            } else if (item.label === "Biblioteca") {
              active = location.pathname.startsWith("/area_aluno/biblioteca");
            } else if (item.label === "Simulados") {
              active = location.pathname.startsWith("/area_aluno/simulados");
            } else if (item.label === "Conquistas") {
              active = location.pathname === "/area_aluno/conquistas";
            // } else if (item.label === "Configuração") {
            //   active = location.pathname === "/area_aluno/configuracoes";
            } else {
              active = location.pathname === item.to;
            }
            return (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                to={item.to}
                active={active}
                onClick={isMobile ? onClose : undefined}
              />
            );
          })}
        </nav>
      </aside>
    </>
  );
};

function SidebarItem({ icon, label, to, active, onClick }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-3 rounded-xl font-medium text-base transition-all
        ${active ? 'bg-blue-600 text-white shadow' : 'text-slate-700 hover:bg-slate-100'}
      `}
      onClick={onClick}
    >
      <i className={`${icon} text-xl`} style={{ width: 20, textAlign: 'center' }}></i>
      <span>{label}</span>
    </Link>
  );
}

export default Sidebar;
