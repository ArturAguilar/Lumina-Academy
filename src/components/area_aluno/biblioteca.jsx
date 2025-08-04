import React from "react";
import { Link } from "react-router-dom";

const materiasList = [
  {
    key: 'matematica',
    label: 'Matemática',
    cor: '#ef4444',
    bg: 'bg-red-100',
    icone: <i className='bx bx-calculator' style={{ fontSize: 22, color: '#ef4444' }}></i>,
    descricao: 'Álgebra, Geometria, Cálculo',
    materiais: 8,
  },
  {
    key: 'portugues',
    label: 'Português',
    cor: '#a855f7',
    bg: 'bg-purple-100',
    icone: <i className='bx bx-pencil' style={{ fontSize: 22, color: '#a855f7' }}></i>,
    descricao: 'Gramática, Redação',
    materiais: 6,
  },
  {
    key: 'ingles',
    label: 'Inglês',
    cor: '#a855f7',
    bg: 'bg-purple-100',
    icone: <i className='bx bx-globe' style={{ fontSize: 22, color: '#a855f7' }}></i>,
    descricao: 'Grammar, Conversation',
    materiais: 5,
  },
  {
    key: 'espanhol',
    label: 'Espanhol',
    cor: '#a855f7',
    bg: 'bg-purple-100',
    icone: <i className='bx bx-book-open' style={{ fontSize: 22, color: '#a855f7' }}></i>,
    descricao: 'Gramática, Conversação',
    materiais: 4,
  },
  {
    key: 'literatura',
    label: 'Literatura',
    cor: '#a855f7',
    bg: 'bg-purple-100',
    icone: <i className='bx bx-book' style={{ fontSize: 22, color: '#a855f7' }}></i>,
    descricao: 'Clássicos, Análise',
    materiais: 12,
  },
  {
    key: 'arte',
    label: 'Arte',
    cor: '#a855f7',
    bg: 'bg-purple-100',
    icone: <i className='bx bx-palette' style={{ fontSize: 22, color: '#a855f7' }}></i>,
    descricao: 'História, Técnicas',
    materiais: 8,
  },
  {
    key: 'fisica',
    label: 'Física',
    cor: '#22c55e',
    bg: 'bg-green-100',
    icone: <i className='bx bx-bolt' style={{ fontSize: 22, color: '#22c55e' }}></i>,
    descricao: 'Mecânica, Óptica',
    materiais: 6,
  },
  {
    key: 'quimica',
    label: 'Química',
    cor: '#22c55e',
    bg: 'bg-green-100',
    icone: <i className='bx bx-medical-flask' style={{ fontSize: 22, color: '#22c55e' }}></i>,
    descricao: 'Orgânica, Inorgânica',
    materiais: 5,
  },
  {
    key: 'biologia',
    label: 'Biologia',
    cor: '#22c55e',
    bg: 'bg-green-100',
    icone: <i className='bx bx-leaf' style={{ fontSize: 22, color: '#22c55e' }}></i>,
    descricao: 'Genética, Ecologia',
    materiais: 9,
  },
  {
    key: 'historia',
    label: 'História',
    cor: '#eab308',
    bg: 'bg-yellow-100',
    icone: <i className='bx bx-landmark' style={{ fontSize: 22, color: '#eab308' }}></i>,
    descricao: 'Brasil, Mundo',
    materiais: 7,
  },
  {
    key: 'filosofia',
    label: 'Filosofia',
    cor: '#eab308',
    bg: 'bg-yellow-100',
    icone: <i className='bx bx-brain' style={{ fontSize: 22, color: '#eab308' }}></i>,
    descricao: 'Ética, Lógica',
    materiais: 10,
  },
  {
    key: 'sociologia',
    label: 'Sociologia',
    cor: '#eab308',
    bg: 'bg-yellow-100',
    icone: <i className='bx bx-group' style={{ fontSize: 22, color: '#eab308' }}></i>,
    descricao: 'Sociedade, Cultura',
    materiais: 9,
  },
  {
    key: 'geografia',
    label: 'Geografia',
    cor: '#eab308',
    bg: 'bg-yellow-100',
    icone: <i className='bx bx-globe-alt' style={{ fontSize: 22, color: '#eab308' }}></i>,
    descricao: 'Física, Humana',
    materiais: 13,
  },
];

const BibliotecaAluno = () => {
  return (
    <main className="min-h-screen p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {materiasList.map((materia) => (
          <div key={materia.key} className="bg-white rounded-2xl shadow p-6 flex flex-col gap-2 min-w-[220px]">
            <div className="flex items-center gap-3 mb-2">
              <div className={`${materia.bg} rounded-lg w-10 h-10 flex items-center justify-center`}>
                {materia.icone}
              </div>
              <div>
                <span className="font-bold text-gray-800 text-lg">{materia.label}</span>
                <div className="text-gray-500 text-xs">{materia.descricao}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-lg">{materia.materiais} materiais</span>
              <Link to={"/area_aluno/biblioteca/" + materia.key} className="ml-auto text-blue-600 hover:underline flex items-center gap-1 text-sm font-medium">
                Acessar <i className='bx bx-right-arrow-alt'></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BibliotecaAluno;
