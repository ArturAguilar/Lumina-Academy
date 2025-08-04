import React, { useState } from 'react';

const Kanban = () => {
  const [tasks, setTasks] = useState({
    'a-fazer': [
      { id: 1, title: 'Revisar Matemática - Funções', subject: 'Matemática', priority: 'alta' },
      { id: 2, title: 'Exercícios de Física - Cinemática', subject: 'Física', priority: 'média' },
      { id: 3, title: 'Leitura: Dom Casmurro - Cap. 1-5', subject: 'Literatura', priority: 'baixa' },
    ],
    'em-andamento': [
      { id: 4, title: 'Simulado ENEM - Linguagens', subject: 'Português', priority: 'alta' },
      { id: 5, title: 'Resolução Lista Química Orgânica', subject: 'Química', priority: 'média' },
    ],
    'concluido': [
      { id: 6, title: 'Assistir aula História - Brasil Colonial', subject: 'História', priority: 'média' },
      { id: 7, title: 'Exercícios Geografia - Climatologia', subject: 'Geografia', priority: 'baixa' },
    ]
  });

  const [newTask, setNewTask] = useState({ title: '', subject: '', priority: 'média' });
  const [showAddForm, setShowAddForm] = useState(false);

  const subjects = [
    'Matemática', 'Física', 'Química', 'Biologia', 'História', 
    'Geografia', 'Português', 'Literatura', 'Inglês', 'Filosofia', 
    'Sociologia', 'Artes', 'Espanhol'
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'alta': return 'bg-red-100 text-red-800 border-red-200';
      case 'média': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'baixa': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSubjectColor = (subject) => {
    const colors = {
      'Matemática': 'bg-blue-50 text-blue-700',
      'Física': 'bg-purple-50 text-purple-700',
      'Química': 'bg-orange-50 text-orange-700',
      'Biologia': 'bg-green-50 text-green-700',
      'História': 'bg-amber-50 text-amber-700',
      'Geografia': 'bg-teal-50 text-teal-700',
      'Português': 'bg-pink-50 text-pink-700',
      'Literatura': 'bg-rose-50 text-rose-700',
      'Inglês': 'bg-indigo-50 text-indigo-700',
      'Filosofia': 'bg-gray-50 text-gray-700',
      'Sociologia': 'bg-cyan-50 text-cyan-700',
      'Artes': 'bg-fuchsia-50 text-fuchsia-700',
      'Espanhol': 'bg-red-50 text-red-700',
    };
    return colors[subject] || 'bg-gray-50 text-gray-700';
  };

  const addTask = () => {
    if (newTask.title.trim() && newTask.subject) {
      const task = {
        id: Date.now(),
        title: newTask.title,
        subject: newTask.subject,
        priority: newTask.priority
      };
      
      setTasks(prev => ({
        ...prev,
        'a-fazer': [...prev['a-fazer'], task]
      }));
      
      setNewTask({ title: '', subject: '', priority: 'média' });
      setShowAddForm(false);
    }
  };

  const moveTask = (taskId, fromColumn, toColumn) => {
    const task = tasks[fromColumn].find(t => t.id === taskId);
    if (task) {
      setTasks(prev => ({
        ...prev,
        [fromColumn]: prev[fromColumn].filter(t => t.id !== taskId),
        [toColumn]: [...prev[toColumn], task]
      }));
    }
  };

  const deleteTask = (taskId, column) => {
    setTasks(prev => ({
      ...prev,
      [column]: prev[column].filter(t => t.id !== taskId)
    }));
  };

  const columns = [
    { id: 'a-fazer', title: 'A Fazer', color: 'bg-red-50 border-red-200' },
    { id: 'em-andamento', title: 'Em Andamento', color: 'bg-yellow-50 border-yellow-200' },
    { id: 'concluido', title: 'Concluído', color: 'bg-green-50 border-green-200' }
  ];

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kanban de Estudos</h1>
          <p className="text-gray-600">Organize suas atividades de estudo</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <i className="bx bx-plus"></i>
          Adicionar Tarefa
        </button>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <i className="bx bx-time text-red-600"></i>
            </div>
            <div>
              <p className="text-sm text-gray-600">A Fazer</p>
              <p className="text-xl font-semibold text-gray-900">{tasks['a-fazer'].length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <i className="bx bx-loader-alt text-yellow-600"></i>
            </div>
            <div>
              <p className="text-sm text-gray-600">Em Andamento</p>
              <p className="text-xl font-semibold text-gray-900">{tasks['em-andamento'].length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <i className="bx bx-check text-green-600"></i>
            </div>
            <div>
              <p className="text-sm text-gray-600">Concluído</p>
              <p className="text-xl font-semibold text-gray-900">{tasks['concluido'].length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Adicionar Tarefa */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Adicionar Nova Tarefa</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Título da Tarefa
                </label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: Revisar capítulo 5 de Matemática"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Matéria
                </label>
                <select
                  value={newTask.subject}
                  onChange={(e) => setNewTask({ ...newTask, subject: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecione uma matéria</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prioridade
                </label>
                <select
                  value={newTask.priority}
                  onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="baixa">Baixa</option>
                  <option value="média">Média</option>
                  <option value="alta">Alta</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={addTask}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Board Kanban */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {columns.map(column => (
          <div key={column.id} className={`${column.color} border-2 rounded-lg p-4`}>
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              {column.title}
              <span className="bg-white text-gray-600 text-sm px-2 py-1 rounded-full">
                {tasks[column.id].length}
              </span>
            </h3>
            
            <div className="space-y-3">
              {tasks[column.id].map(task => (
                <div key={task.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900 text-sm leading-tight">{task.title}</h4>
                    <button
                      onClick={() => deleteTask(task.id, column.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                    >
                      <i className="bx bx-x text-sm"></i>
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${getSubjectColor(task.subject)}`}>
                      {task.subject}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                  
                  <div className="flex gap-1">
                    {column.id !== 'a-fazer' && (
                      <button
                        onClick={() => moveTask(task.id, column.id, column.id === 'em-andamento' ? 'a-fazer' : 'em-andamento')}
                        className="flex-1 px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors"
                      >
                        <i className="bx bx-chevron-left"></i>
                      </button>
                    )}
                    {column.id !== 'concluido' && (
                      <button
                        onClick={() => moveTask(task.id, column.id, column.id === 'a-fazer' ? 'em-andamento' : 'concluido')}
                        className="flex-1 px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors"
                      >
                        <i className="bx bx-chevron-right"></i>
                      </button>
                    )}
                  </div>
                </div>
              ))}
              
              {tasks[column.id].length === 0 && (
                <div className="bg-white p-8 rounded-lg border-2 border-dashed border-gray-300 text-center">
                  <i className="bx bx-package text-2xl text-gray-400 mb-2"></i>
                  <p className="text-gray-500 text-sm">Nenhuma tarefa</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
