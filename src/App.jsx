import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DocumentTitle from "./components/includes/DocumentTitle";
import { AuthProvider } from "./components/auth/AuthContext";
import Navbar from "./components/landing_page/navbar";
import HeroSection from "./components/landing_page/hero_section";
import Materias from "./components/landing_page/materias";
import Planos from "./components/landing_page/planos";
import Recursos from "./components/landing_page/recursos";
import Depoimentos from "./components/landing_page/depoimentos";
import Contato from "./components/landing_page/contato";
import Footer from "./components/landing_page/footer";
import Login from "./components/auth/login";
import Registro from "./components/auth/registro";

import Dashboard from "./components/area_aluno/dashboard";
import MateriasAluno from "./components/area_aluno/materias";
import MateriaPage from "./components/area_aluno/materias/MateriaPage";
import Exercicios from "./components/area_aluno/exercicios";
import ExerciciosPage from "./components/area_aluno/exercicios/ExerciciosPage";
import Cronograma from "./components/area_aluno/cronograma";
import Desempenho from "./components/area_aluno/desempenho";
import Simulados from "./components/area_aluno/simulados";
import AlunoLayout from "./components/area_aluno/AlunoLayout";
import PrivateRoute from "./components/auth/PrivateRoute";
import BibliotecaAluno from "./components/area_aluno/biblioteca";
import TransmissoesAluno from "./components/area_aluno/transmissoes";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Materias />
      <Planos />
      <Recursos />
      <Depoimentos />
      <Contato />
      <Footer />
    </>
  );
}

function MainContent() {
  const protectedRoutes = [
    { path: "/area_aluno/dashboard", element: <Dashboard /> },
    { path: "/area_aluno/materias", element: <MateriasAluno /> },
    { path: "/area_aluno/materias/:materia", element: <MateriaPage /> },
    { path: "/area_aluno/exercicios", element: <Exercicios /> },
    { path: "/area_aluno/exercicios/:materia", element: <ExerciciosPage /> },
    { path: "/area_aluno/cronograma", element: <Cronograma /> },
    { path: "/area_aluno/desempenho", element: <Desempenho /> },
    { path: "/area_aluno/simulados", element: <Simulados /> },
    { path: "/area_aluno/biblioteca", element: <BibliotecaAluno /> },
    { path: "/area_aluno/transmissoes", element: <TransmissoesAluno /> },
  ];

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      {protectedRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <PrivateRoute>
              <AlunoLayout>
                {element}
              </AlunoLayout>
            </PrivateRoute>
          }
        />
      ))}
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <DocumentTitle />
        <MainContent />
      </Router>
    </AuthProvider>
  );
}

export default App;