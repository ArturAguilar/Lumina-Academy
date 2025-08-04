import React, { useState } from "react";

import Sidebar from "../includes/sidebar";
import NavbarAluno from "../includes/navbar";



import { useLocation } from "react-router-dom";

const TITULOS = {
  "/area_aluno/dashboard": "Dashboard",
  "/area_aluno/materias": "Matérias",
  "/area_aluno/exercicios": "Exercícios",
  "/area_aluno/cronograma": "Cronograma",
  "/area_aluno/desempenho": "Desempenho",
  "/area_aluno/suporte": "Suporte"
};

const AlunoLayout = ({ children }) => {
  const location = useLocation();
  const titulo = TITULOS[location.pathname] || "Área do Aluno";
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Detecta se é desktop (lg: 1024px+)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar responsiva */}
      <Sidebar open={sidebarOpen || isDesktop} onClose={() => setSidebarOpen(false)} />
      {/* Navbar com botão de menu no mobile */}
      <div className={`fixed top-0 left-0 right-0 z-30 transition-all ${isDesktop ? 'lg:pl-64' : ''}`}>
        <NavbarAluno
          titulo={titulo}
          left={
            <button
              className="block lg:hidden mr-4 p-2 rounded-lg"
              onClick={() => setSidebarOpen(true)}
              aria-label="Abrir menu"
            >
              <i className="bx bx-menu text-2xl"></i>
            </button>
          }
        />
      </div>
      {/* Conteúdo principal */}
      <main className={`transition-all pt-6 px-4 ${isDesktop ? 'lg:pl-64' : ''} mt-20`} style={{ minHeight: 'calc(100vh - 80px)' }}>
        {children}
      </main>
    </div>
  );
};

export default AlunoLayout;