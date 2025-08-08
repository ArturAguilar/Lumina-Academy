import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Mapeamento de rotas para títulos dinâmicos
const TITLES = [
  { path: "/", title: "Lumina Academy — Vestibular" },
  { path: "/login", title: "Lumina Academy — Login" },
  { path: "/cadastro", title: "Lumina Academy — Cadastro" },
  { path: "/area_aluno/dashboard", title: "Lumina Academy Students — Dashboard" },
  { path: "/area_aluno/materias", title: "Lumina Academy Students — Matérias" },
  { path: "/area_aluno/exercicios", title: "Lumina Academy Students — Exercícios" },
  { path: "/area_aluno/simulados", title: "Lumina Academy Students — Simulados" },
  { path: "/area_aluno/biblioteca", title: "Lumina Academy Students — Biblioteca" },
  { path: "/area_aluno/transmissoes", title: "Lumina Academy Students — Ao Vivo" },
  { path: "/area_aluno/cronograma", title: "Lumina Academy Students — Cronograma" },
  { path: "/area_aluno/kanban", title: "Lumina Academy Students — Kanban" },
  { path: "/area_aluno/desempenho", title: "Lumina Academy Students — Desempenho" },
  { path: "/area_aluno/conquistas", title: "Lumina Academy Students — Conquistas" },
  { path: "/area_aluno/chat", title: "Lumina Academy Students — Chat" },
  { path: "/area_aluno/suporte", title: "Lumina Academy Students — Suporte" },
  { path: "/area_aluno/configuracao", title: "Lumina Academy Students — Configuração" },
];

// Função auxiliar para matérias
function getMateriaTitle(pathname) {
  const match = pathname.match(/\/area_aluno\/materias\/(\w+)/);
  if (match) {
    const nome = match[1];
    return `Lumina Academy Students — ${nome.charAt(0).toUpperCase() + nome.slice(1)}`;
  }
  return null;
}

export default function DocumentTitle() {
  const location = useLocation();

  useEffect(() => {
    // Procura título exato
    const found = TITLES.find(t => t.path === location.pathname);
    if (found) {
      document.title = found.title;
      return;
    }
    // Matérias
    const materiaTitle = getMateriaTitle(location.pathname);
    if (materiaTitle) {
      document.title = materiaTitle;
      return;
    }
    // Exercícios por matéria
    if (location.pathname.startsWith("/area_aluno/exercicios/")) {
      const nome = location.pathname.split("/").pop();
      document.title = `Lumina Academy Students — Exercícios de ${nome.charAt(0).toUpperCase() + nome.slice(1)}`;
      return;
    }
    // Transmissões por matéria
    if (location.pathname.startsWith("/area_aluno/transmissoes/")) {
      const nome = location.pathname.split("/").pop();
      const materiaNormalizada = nome.charAt(0).toUpperCase() + nome.slice(1).replace('_', ' ');
      document.title = `Lumina Academy Students — Transmissões de ${materiaNormalizada}`;
      return;
    }
    // Fallback
    document.title = "Lumina Academy";
  }, [location.pathname]);

  return null;
}
