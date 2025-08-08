import React, { useState } from 'react';

const Kanban = () => {
  const [selectedFilter, setSelectedFilter] = useState('Todas');
  const [selectedPriority, setSelectedPriority] = useState('Todas');
  const [draggedTask, setDraggedTask] = useState(null);
  const [draggedFrom, setDraggedFrom] = useState(null);

  const [tasks, setTasks] = useState({
    'A Fazer': [
      {
        id: 1,
        title: 'Resolver Lista de Cálculo',
        description: 'Exercícios 1-15 sobre derivadas',
        subject: 'Matemática',
        priority: 'Alta',
        dueDate: 'Hoje',
        duration: '2h'
      }
    ],
    'Em Progresso': [
      {
        id: 2,
        title: 'Projeto de Estatística',
        description: 'Análise de dados da pesquisa',
        subject: 'Matemática',
        priority: 'Alta',
        dueDate: '20 Dez',
        progress: 60
      }
    ],
    'Revisão': [
      {
        id: 3,
        title: 'Exercícios de pH',
        description: 'Lista completa - aguardando correção',
        subject: 'Química',
        priority: 'Média',
        status: 'Aguardando',
        completed: true
      }
    ]
  });

  const filters = ['Todas', 'Matemática', 'Física', 'Química'];
  const priorities = ['Todas', 'Alta', 'Média', 'Baixa'];

  const getFilteredTasks = (columnTasks) => {
    return columnTasks.filter(task => {
      const matchesFilter = selectedFilter === 'Todas' || task.subject === selectedFilter;
      const matchesPriority = selectedPriority === 'Todas' || task.priority === selectedPriority;
      return matchesFilter && matchesPriority;
    });
  };

  const handleDragStart = (e, task, sourceColumn) => {
    setDraggedTask(task);
    setDraggedFrom(sourceColumn);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    
    if (!draggedTask || !draggedFrom || draggedFrom === targetColumn) {
      return;
    }

    setTasks(prevTasks => {
      const newTasks = { ...prevTasks };
      
      // Remove task from source column
      newTasks[draggedFrom] = newTasks[draggedFrom].filter(task => task.id !== draggedTask.id);
      
      // Add task to target column
      newTasks[targetColumn] = [...newTasks[targetColumn], draggedTask];
      
      return newTasks;
    });

    setDraggedTask(null);
    setDraggedFrom(null);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Baixa': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSubjectColor = (subject) => {
    switch (subject) {
      case 'Matemática': return 'bg-blue-100 text-blue-800';
      case 'Física': return 'bg-purple-100 text-purple-800';
      case 'Química': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getColumnColor = (title) => {
    switch (title) {
      case 'A Fazer': return 'bg-orange-50 border-orange-200';
      case 'Em Progresso': return 'bg-blue-50 border-blue-200';
      case 'Revisão': return 'bg-green-50 border-green-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const TaskCard = ({ task, sourceColumn }) => (
    <div 
      draggable
      onDragStart={(e) => handleDragStart(e, task, sourceColumn)}
      className="bg-white rounded-lg shadow-sm border p-3 sm:p-4 mb-2 sm:mb-3 hover:shadow-md transition-shadow cursor-move"
    >
      <div className="flex justify-between items-start mb-2 sm:mb-3">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSubjectColor(task.subject)}`}>
          {task.subject}
        </span>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm md:text-base">{task.title}</h3>
      <p className="text-gray-600 text-sm mb-2 sm:mb-3">{task.description}</p>
      
      {task.progress && (
        <div className="mb-2 sm:mb-3">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>{task.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
            <div 
              className="bg-blue-500 h-1.5 sm:h-2 rounded-full transition-all duration-300"
              style={{ width: `${task.progress}%` }}
            ></div>
          </div>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 text-sm text-gray-500">
        <div className="flex items-center gap-2 flex-wrap">
          {task.dueDate && (
            <span className="flex items-center gap-1">
              <i className="bx bx-calendar text-sm"></i>
              {task.dueDate}
            </span>
          )}
          {task.duration && (
            <span className="flex items-center gap-1">
              <i className="bx bx-time text-sm"></i>
              {task.duration}
            </span>
          )}
        </div>
        {task.status && (
          <span className={`flex items-center gap-1 ${task.completed ? 'text-green-600' : 'text-orange-600'}`}>
            {task.completed ? 
              <><i className="bx bx-check-circle text-sm"></i> Completo</> : 
              <><i className="bx bx-time-five text-sm"></i> {task.status}</>
            }
          </span>
        )}
      </div>
    </div>
  );

  const Column = ({ title, tasks, count }) => (
    <div 
      className={`rounded-lg border-2 p-3 sm:p-4 min-h-[400px] lg:min-h-[600px] w-full ${getColumnColor(title)}`}
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, title)}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="font-semibold text-gray-900 flex items-center text-sm md:text-base">
          {title === 'A Fazer' && <i className="bx bx-list-ul text-lg mr-2"></i>}
          {title === 'Em Progresso' && <i className="bx bx-loader-circle text-lg mr-2"></i>}
          {title === 'Revisão' && <i className="bx bx-check-double text-lg mr-2"></i>}
          <span>{title}</span>
        </h2>
        <span className="bg-gray-200 text-gray-700 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-sm font-medium">
          {count}
        </span>
      </div>
      <div className="space-y-2 sm:space-y-3">
        {getFilteredTasks(tasks).map(task => (
          <TaskCard key={task.id} task={task} sourceColumn={title} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:pl-12 sm:pr-8 sm:py-8 min-h-screen sm:ml-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Filtros */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm md:text-base font-medium text-gray-700 min-w-max">Filtrar por:</span>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedFilter === filter
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base font-medium text-gray-700 min-w-max">Prioridade:</span>
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {priorities.map(priority => (
                  <option key={priority} value={priority}>{priority}</option>
                ))}
              </select>
            </div>
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm w-full sm:w-auto flex items-center justify-center gap-2">
              <i className="bx bx-plus text-sm"></i>
              Nova Tarefa
            </button>
          </div>
        </div>

        {/* Colunas do Kanban */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-8 overflow-x-auto">
          <div className="lg:hidden">
            <div className="flex gap-4 pb-4 min-w-max">
              <div className="w-80 flex-shrink-0">
                <Column 
                  title="A Fazer" 
                  tasks={tasks['A Fazer']} 
                  count={getFilteredTasks(tasks['A Fazer']).length}
                />
              </div>
              <div className="w-80 flex-shrink-0">
                <Column 
                  title="Em Progresso" 
                  tasks={tasks['Em Progresso']} 
                  count={getFilteredTasks(tasks['Em Progresso']).length}
                />
              </div>
              <div className="w-80 flex-shrink-0">
                <Column 
                  title="Revisão" 
                  tasks={tasks['Revisão']} 
                  count={getFilteredTasks(tasks['Revisão']).length}
                />
              </div>
            </div>
          </div>
          
          <div className="hidden lg:contents">
            <Column 
              title="A Fazer" 
              tasks={tasks['A Fazer']} 
              count={getFilteredTasks(tasks['A Fazer']).length}
            />
            <Column 
              title="Em Progresso" 
              tasks={tasks['Em Progresso']} 
              count={getFilteredTasks(tasks['Em Progresso']).length}
            />
            <Column 
              title="Revisão" 
              tasks={tasks['Revisão']} 
              count={getFilteredTasks(tasks['Revisão']).length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
