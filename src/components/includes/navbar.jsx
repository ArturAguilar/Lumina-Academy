import React from "react";
import { useLocation, Link } from "react-router-dom";

const MATERIAS = [
  {
    key: "matematica",
    path: "/area_aluno/materias/matematica",
    nome: "Matemática",
    icone: <i className="bx bx-calculator" style={{ fontSize: 26, color: "#e74c3c" }}></i>
  },
  {
    key: "portugues",
    path: "/area_aluno/materias/portugues",
    nome: "Português",
    icone: <i className='bx bx-pencil' style={{ fontSize: 26, color: '#a855f7' }}></i>
  },
  {
    key: "ingles",
    path: "/area_aluno/materias/ingles",
    nome: "Inglês",
    icone: <i className='bx bx-globe' style={{ fontSize: 26, color: '#a855f7' }}></i>
  },
  {
    key: "espanhol",
    path: "/area_aluno/materias/espanhol",
    nome: "Espanhol",
    icone: <i className='bx bx-book-open' style={{ fontSize: 26, color: '#a855f7' }}></i>
  },
  {
    key: "literatura",
    path: "/area_aluno/materias/literatura",
    nome: "Literatura",
    icone: <i className='bx bxs-book' style={{ fontSize: 26, color: '#a855f7' }}></i>
  },
  {
    key: "artes",
    path: "/area_aluno/materias/artes",
    nome: "Artes",
    icone: <i className='bx bx-palette' style={{ fontSize: 26, color: '#a855f7' }}></i>
  },
  {
    key: "fisica",
    path: "/area_aluno/materias/fisica",
    nome: "Física",
    icone: <i className='bx bx-bolt' style={{ fontSize: 26, color: '#22c55e' }}></i>
  },
  {
    key: "quimica",
    path: "/area_aluno/materias/quimica",
    nome: "Química",
    icone: <i className='bx bx-medical-flask' style={{ fontSize: 26, color: '#22c55e' }}></i>
  },
  {
    key: "biologia",
    path: "/area_aluno/materias/biologia",
    nome: "Biologia",
    icone: <i className='bx bx-leaf' style={{ fontSize: 26, color: '#22c55e' }}></i>
  },
  {
    key: "historia",
    path: "/area_aluno/materias/historia",
    nome: "História",
    icone: <i className='bx bx-landmark' style={{ fontSize: 26, color: '#f59e42' }}></i>
  },
  {
    key: "sociologia",
    path: "/area_aluno/materias/sociologia",
    nome: "Sociologia",
    icone: <i className='bx bx-group' style={{ fontSize: 26, color: '#f59e42' }}></i>
  },
  {
    key: "filosofia",
    path: "/area_aluno/materias/filosofia",
    nome: "Filosofia",
    icone: <i className='bx bx-brain' style={{ fontSize: 26, color: '#f59e42' }}></i>
  },
  {
    key: "geografia",
    path: "/area_aluno/materias/geografia",
    nome: "Geografia",
    icone: <i className='bx bx-globe-alt' style={{ fontSize: 26, color: '#f59e42' }}></i>
  }
];

const NavbarAluno = ({ titulo = "Dashboard", left }) => {
  const location = useLocation();
  // Detecta se está em página de matéria ou de exercícios por matéria
  let materia = MATERIAS.find(m => m.path === location.pathname);
  let isExercicioMateria = false;
  let exercicioMateriaObj = null;
  let isSimulados = false;
  let isBiblioteca = false;
  let isTransmissoes = false;
  if (location.pathname === "/area_aluno/simulados") {
    isSimulados = true;
  }
  if (location.pathname === "/area_aluno/biblioteca") {
    isBiblioteca = true;
  }
  if (location.pathname === "/area_aluno/aulas" || location.pathname === "/area_aluno/transmissoes") {
    isTransmissoes = true;
  }
  if (!materia && location.pathname.startsWith("/area_aluno/exercicios/")) {
    // Exemplo: /area_aluno/exercicios/matematica
    const parts = location.pathname.split("/");
    const materiaKey = parts[parts.length - 1];
    exercicioMateriaObj = MATERIAS.find(m => m.key === materiaKey);
    if (exercicioMateriaObj) {
      isExercicioMateria = true;
    }
  }
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {left}
          {materia ? (
            windowWidth <= 700 ? (
              <div className="flex items-center">
                <button
                  onClick={() => window.history.back()}
                  className="mr-2 p-2 rounded-full"
                  style={{ display: "flex", alignItems: "center" }}
                  aria-label="Voltar"
                >
                  <i className="bx bx-arrow-left-stroke" style={{ fontSize: 30, color: "#A0A4AB" }}></i>
                </button>
                <h2 className="text-2xl font-bold text-gray-800">{materia.nome}</h2>
              </div>
            ) : (
              <>
                <button
                  onClick={() => window.history.back()}
                  className="mr-2 p-2 rounded-full"
                  style={{ display: "flex", alignItems: "center" }}
                  aria-label="Voltar"
                >
                  <i className="bx bx-arrow-left-stroke" style={{ fontSize: 30, color: "#A0A4AB" }}></i>
                </button>
                <span
                  className="rounded-lg flex items-center justify-center"
                  style={{
                    width: 40,
                    height: 40,
                    background: materia.icone.props.style && materia.icone.props.style.color
                      ? materia.icone.props.style.color + '22'
                      : '#f3f3f3'
                  }}
                >
                  {/* Ícone dinâmico da matéria */}
                  {materia.icone}
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{materia.nome}</h2>
                  {/* Breadcrumb abaixo do título */}
                  <nav aria-label="breadcrumb" style={{ marginTop: 2 }}>
                    <ol style={{ display: 'flex', alignItems: 'center', fontSize: 15, color: '#888', gap: 6, margin: 0, padding: 0, listStyle: 'none' }}>
                      <li>
                        <Link to="/area_aluno/materias" style={{ color: '#888', textDecoration: 'none', fontWeight: 500 }}>Matérias</Link>
                      </li>
                      <li style={{ color: '#bbb', margin: '0 4px' }}>/</li>
                      <li>
                        <span style={{ color: '#888', fontWeight: 500 }}>{materia.nome}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
              </>
            )
          ) : isExercicioMateria && exercicioMateriaObj ? (
            windowWidth <= 700 ? (
              <div className="flex items-center">
                <button
                  onClick={() => window.history.back()}
                  className="mr-2 p-2 rounded-full"
                  style={{ display: "flex", alignItems: "center" }}
                  aria-label="Voltar"
                >
                  <i className="bx bx-arrow-left-stroke" style={{ fontSize: 30, color: "#A0A4AB" }}></i>
                </button>
                <h2 className="text-2xl font-bold text-gray-800"> {exercicioMateriaObj.nome}</h2>
              </div>
            ) : (
              <>
                <button
                  onClick={() => window.history.back()}
                  className="mr-2 p-2 rounded-full"
                  style={{ display: "flex", alignItems: "center" }}
                  aria-label="Voltar"
                >
                  <i className="bx bx-arrow-left-stroke" style={{ fontSize: 30, color: "#A0A4AB" }}></i>
                </button>
                <span
                  className="rounded-lg flex items-center justify-center"
                  style={{
                    width: 40,
                    height: 40,
                    background: exercicioMateriaObj.icone.props.style && exercicioMateriaObj.icone.props.style.color
                      ? exercicioMateriaObj.icone.props.style.color + '22'
                      : '#f3f3f3'
                  }}
                >
                  {/* Ícone dinâmico da matéria */}
                  {exercicioMateriaObj.icone}
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{exercicioMateriaObj.nome}</h2>
                  {/* Breadcrumb abaixo do título */}
                  <nav aria-label="breadcrumb" style={{ marginTop: 2 }}>
                    <ol style={{ display: 'flex', alignItems: 'center', fontSize: 15, color: '#888', gap: 6, margin: 0, padding: 0, listStyle: 'none' }}>
                      <li>
                        <Link to="/area_aluno/exercicios" style={{ color: '#888', textDecoration: 'none', fontWeight: 500 }}>Exercícios</Link>
                      </li>
                      <li style={{ color: '#bbb', margin: '0 4px' }}>/</li>
                      <li>
                        <span style={{ color: '#888', fontWeight: 500 }}>{exercicioMateriaObj.nome}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
              </>
            )
          ) : isSimulados ? (
            <h2 className="text-2xl font-bold text-gray-800">Simulados</h2>
          ) : isBiblioteca ? (
            <h2 className="text-2xl font-bold text-gray-800">Biblioteca</h2>
          ) : isTransmissoes ? (
            <h2 className="text-2xl font-bold text-gray-800">Aulas & Transmissões</h2>
          ) : (
            <h2 className="text-2xl font-bold text-gray-800">{titulo}</h2>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
            <i className='bx bx-bell' style={{ fontSize: 25 }}></i>
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">IG</span>
            </div>
            {/* Só mostra nome e tipo no desktop */}
            <div className="hidden lg:block">
              <p className="text-sm font-medium text-gray-800">Izabela Galantini</p>
              <p className="text-xs text-gray-500">Aluna</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarAluno;