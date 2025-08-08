import React, { useState, useEffect } from "react";

const Conquistas = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    nivel: 0,
    xp: 0,
    conquistas: 0
  });
  const [selectedCategory, setSelectedCategory] = useState("todas");

  // Dados simulados - em um projeto real, isso viria do backend
  const progressoUsuario = {
    nivel: 12,
    tituloNivel: "Estudante Dedicado",
    xpAtual: 847,
    xpProximoNivel: 1000,
    conquistasDesbloqueadas: 8,
    totalConquistas: 24,
    progressoGeral: 33,
    streak: 15,
    ranking: 3
  };

  const conquistas = [
    {
      id: 1,
      nome: "Primeiro Passo",
      descricao: "Complete seu primeiro exercício",
      categoria: "estudos",
      icone: "bx bx-target-lock",
      desbloqueada: true,
      dataDesbloqueio: "2024-01-15",
      xp: 50,
      raridade: "comum"
    },
    {
      id: 2,
      nome: "Dedicação Diária",
      descricao: "Estude por 7 dias consecutivos",
      categoria: "frequencia",
      icone: "bx bx-trending-up",
      desbloqueada: true,
      dataDesbloqueio: "2024-01-22",
      xp: 150,
      raridade: "raro"
    },
    {
      id: 3,
      nome: "Matemático Iniciante",
      descricao: "Complete 10 exercícios de matemática",
      categoria: "materias",
      icone: "bx bx-calculator",
      desbloqueada: true,
      dataDesbloqueio: "2024-02-03",
      xp: 100,
      raridade: "comum"
    },
    {
      id: 4,
      nome: "Maratonista",
      descricao: "Estude por mais de 3 horas em um dia",
      categoria: "tempo",
      icone: "bx bx-time-five",
      desbloqueada: true,
      dataDesbloqueio: "2024-02-10",
      xp: 200,
      raridade: "raro"
    },
    {
      id: 5,
      nome: "Ninja dos Exercícios",
      descricao: "Complete 100 exercícios",
      categoria: "estudos",
      icone: "bx bx-run",
      desbloqueada: true,
      dataDesbloqueio: "2024-02-15",
      xp: 300,
      raridade: "epico"
    },
    {
      id: 6,
      nome: "Speedrun Acadêmico",
      descricao: "Complete um simulado em menos de 2 horas",
      categoria: "tempo",
      icone: "bx bx-fast-forward",
      desbloqueada: true,
      dataDesbloqueio: "2024-02-20",
      xp: 150,
      raridade: "raro"
    },
    {
      id: 7,
      nome: "Explorador Curioso",
      descricao: "Acesse todas as matérias disponíveis",
      categoria: "materias",
      icone: "bx bx-world",
      desbloqueada: true,
      dataDesbloqueio: "2024-02-25",
      xp: 200,
      raridade: "raro"
    },
    {
      id: 8,
      nome: "Meta Alcançada",
      descricao: "Complete 50% do seu cronograma mensal",
      categoria: "metas",
      icone: "bx bx-check-circle",
      desbloqueada: true,
      dataDesbloqueio: "2024-03-01",
      xp: 250,
      raridade: "epico"
    },
    {
      id: 9,
      nome: "Simulado Master",
      descricao: "Complete 5 simulados com nota acima de 80%",
      categoria: "simulados",
      icone: "bx bx-trophy",
      progresso: 60,
      desbloqueada: false,
      xp: 400,
      raridade: "lendario"
    },
    {
      id: 10,
      nome: "Constância de Ferro",
      descricao: "Mantenha uma sequência de 30 dias estudando",
      categoria: "frequencia",
      icone: "bx bx-dumbbell",
      progresso: 43,
      desbloqueada: false,
      xp: 500,
      raridade: "lendario"
    }
  ];

  // Sistema completo de metas
  const metas = [
    // Metas de Matérias
    {
      id: 1,
      categoria: "materias",
      tipo: "Matemática",
      titulo: "Mestre da Matemática",
      descricao: "Complete 50 exercícios de matemática",
      progresso: 32,
      meta: 50,
      prazo: "2025-08-31",
      recompensa: 300,
      icone: "bx bx-calculator",
      cor: "from-blue-500 to-purple-600",
      status: "ativa"
    },
    {
      id: 2,
      categoria: "materias",
      tipo: "Português",
      titulo: "Expert em Português",
      descricao: "Acerte 40 questões de português consecutivas",
      progresso: 23,
      meta: 40,
      prazo: "2025-09-15",
      recompensa: 280,
      icone: "bx bx-book-open",
      cor: "from-green-500 to-emerald-600",
      status: "ativa"
    },
    {
      id: 3,
      categoria: "materias",
      tipo: "Física",
      titulo: "Físico Iniciante",
      descricao: "Resolva 25 problemas de física",
      progresso: 15,
      meta: 25,
      prazo: "2025-08-25",
      recompensa: 250,
      icone: "bx bx-atom",
      cor: "from-yellow-500 to-orange-600",
      status: "ativa"
    },
    {
      id: 4,
      categoria: "materias",
      tipo: "Química",
      titulo: "Alquimista Moderno",
      descricao: "Complete 30 experimentos virtuais",
      progresso: 18,
      meta: 30,
      prazo: "2025-09-01",
      recompensa: 320,
      icone: "bx bx-test-tube",
      cor: "from-purple-500 to-pink-600",
      status: "ativa"
    },
    {
      id: 5,
      categoria: "materias",
      tipo: "História",
      titulo: "Historiador Expert",
      descricao: "Estude 20 períodos históricos",
      progresso: 12,
      meta: 20,
      prazo: "2025-09-10",
      recompensa: 290,
      icone: "bx bx-buildings",
      cor: "from-amber-500 to-red-600",
      status: "ativa"
    },

    // Metas de Exercícios
    {
      id: 6,
      categoria: "exercicios",
      tipo: "Quantidade",
      titulo: "Maratonista dos Exercícios",
      descricao: "Complete 200 exercícios este mês",
      progresso: 127,
      meta: 200,
      prazo: "2025-08-31",
      recompensa: 500,
      icone: "bx bx-run",
      cor: "from-red-500 to-pink-600",
      status: "ativa"
    },
    {
      id: 7,
      categoria: "exercicios",
      tipo: "Precisão",
      titulo: "Atirador de Elite",
      descricao: "Mantenha 90% de acertos em 50 exercícios",
      progresso: 28,
      meta: 50,
      prazo: "2025-09-05",
      recompensa: 400,
      icone: "bx bx-bullseye",
      cor: "from-indigo-500 to-blue-600",
      status: "ativa"
    },
    {
      id: 8,
      categoria: "exercicios",
      tipo: "Velocidade",
      titulo: "Flash dos Estudos",
      descricao: "Resolva 100 exercícios em menos de 2 horas",
      progresso: 65,
      meta: 100,
      prazo: "2025-08-20",
      recompensa: 350,
      icone: "bx bx-fast-forward",
      cor: "from-yellow-400 to-yellow-600",
      status: "ativa"
    },
    {
      id: 9,
      categoria: "exercicios",
      tipo: "Diversidade",
      titulo: "Explorador Universal",
      descricao: "Faça exercícios de todas as 12 matérias",
      progresso: 9,
      meta: 12,
      prazo: "2025-09-30",
      recompensa: 600,
      icone: "bx bx-world",
      cor: "from-teal-500 to-cyan-600",
      status: "ativa"
    },

    // Metas de Simulados
    {
      id: 10,
      categoria: "simulados",
      tipo: "Performance",
      titulo: "Simulado Perfeito",
      descricao: "Tire nota 10 em um simulado completo",
      progresso: 0,
      meta: 1,
      prazo: "2025-09-15",
      recompensa: 1000,
      icone: "bx bx-trophy",
      cor: "from-gold-500 to-yellow-500",
      status: "ativa"
    },
    {
      id: 11,
      categoria: "simulados",
      tipo: "Consistência",
      titulo: "Constância nos Simulados",
      descricao: "Complete 15 simulados com nota acima de 7",
      progresso: 8,
      meta: 15,
      prazo: "2025-10-01",
      recompensa: 750,
      icone: "bx bx-line-chart",
      cor: "from-emerald-500 to-green-600",
      status: "ativa"
    },
    {
      id: 12,
      categoria: "simulados",
      tipo: "Rapidez",
      titulo: "Speedrun dos Simulados",
      descricao: "Complete 5 simulados em menos de 1h30",
      progresso: 2,
      meta: 5,
      prazo: "2025-08-30",
      recompensa: 450,
      icone: "bx bx-stopwatch",
      cor: "from-sky-500 to-blue-600",
      status: "ativa"
    },

    // Metas de Tempo de Estudo
    {
      id: 13,
      categoria: "tempo",
      tipo: "Diário",
      titulo: "Estudante Dedicado",
      descricao: "Estude 2 horas por dia durante 30 dias",
      progresso: 18,
      meta: 30,
      prazo: "2025-09-03",
      recompensa: 600,
      icone: "bx bx-time-five",
      cor: "from-purple-500 to-indigo-600",
      status: "ativa"
    },
    {
      id: 14,
      categoria: "tempo",
      tipo: "Semanal",
      titulo: "Maratonista Semanal",
      descricao: "Complete 20 horas de estudo por semana",
      progresso: 12,
      meta: 20,
      prazo: "2025-08-11",
      recompensa: 400,
      icone: "bx bx-calendar-week",
      cor: "from-rose-500 to-pink-600",
      status: "ativa"
    },
    {
      id: 15,
      categoria: "tempo",
      tipo: "Intensivo",
      titulo: "Sessão Épica",
      descricao: "Estude 8 horas seguidas sem parar",
      progresso: 0,
      meta: 1,
      prazo: "2025-08-25",
      recompensa: 800,
      icone: "bx bx-trending-up",
      cor: "from-orange-500 to-red-600",
      status: "ativa"
    },

    // Metas de Frequência
    {
      id: 16,
      categoria: "frequencia",
      tipo: "Sequência",
      titulo: "Sequência Perfeita",
      descricao: "Estude 60 dias consecutivos",
      progresso: 15,
      meta: 60,
      prazo: "2025-10-15",
      recompensa: 1200,
      icone: "bx bx-link-alt",
      cor: "from-violet-500 to-purple-600",
      status: "ativa"
    },
    {
      id: 17,
      categoria: "frequencia",
      tipo: "Consistência",
      titulo: "Estudante Assíduo",
      descricao: "Não perca nenhum dia de estudo este mês",
      progresso: 4,
      meta: 31,
      prazo: "2025-08-31",
      recompensa: 500,
      icone: "bx bx-trending-up",
      cor: "from-cyan-500 to-teal-600",
      status: "ativa"
    },

    // Metas de Ranking
    {
      id: 18,
      categoria: "ranking",
      tipo: "Posição",
      titulo: "Top 10 Nacional",
      descricao: "Alcance o top 10 do ranking nacional",
      progresso: 3,
      meta: 10,
      prazo: "2025-12-31",
      recompensa: 2000,
      icone: "bx bx-medal",
      cor: "from-amber-400 to-orange-500",
      status: "ativa"
    },
    {
      id: 19,
      categoria: "ranking",
      tipo: "Escalada",
      titulo: "Subindo no Ranking",
      descricao: "Suba 50 posições no ranking geral",
      progresso: 23,
      meta: 50,
      prazo: "2025-09-30",
      recompensa: 700,
      icone: "bx bx-up-arrow-alt",
      cor: "from-lime-500 to-green-600",
      status: "ativa"
    },

    // Metas Especiais
    {
      id: 20,
      categoria: "especial",
      tipo: "Desafio",
      titulo: "Desafio do Milhão",
      descricao: "Acumule 1.000.000 de XP total",
      progresso: 245678,
      meta: 1000000,
      prazo: "2025-12-31",
      recompensa: 5000,
      icone: "bx bx-diamond",
      cor: "from-indigo-600 to-purple-700",
      status: "ativa"
    }
  ];

  const categoriasMetas = [
    { id: "todas", nome: "Todas", icone: "bx bx-target-lock", cor: "from-purple-500 to-pink-500" },
    { id: "materias", nome: "Matérias", icone: "bx bx-book-open", cor: "from-blue-500 to-cyan-500" },
    { id: "exercicios", nome: "Exercícios", icone: "bx bx-run", cor: "from-red-500 to-pink-600" },
    { id: "simulados", nome: "Simulados", icone: "bx bx-trophy", cor: "from-yellow-500 to-orange-500" },
    { id: "tempo", nome: "Tempo", icone: "bx bx-time-five", cor: "from-green-500 to-teal-500" },
    { id: "frequencia", nome: "Frequência", icone: "bx bx-trending-up", cor: "from-orange-500 to-red-500" },
    { id: "ranking", nome: "Ranking", icone: "bx bx-medal", cor: "from-amber-500 to-yellow-600" },
    { id: "especial", nome: "Especiais", icone: "bx bx-diamond", cor: "from-indigo-500 to-purple-600" }
  ];

  const categorias = [
    { id: "todas", nome: "Todas", icone: "bx bx-trophy", cor: "from-purple-500 to-pink-500" },
    { id: "estudos", nome: "Estudos", icone: "bx bx-book-open", cor: "from-blue-500 to-cyan-500" },
    { id: "frequencia", nome: "Frequência", icone: "bx bx-trending-up", cor: "from-orange-500 to-red-500" },
    { id: "materias", nome: "Matérias", icone: "bx bx-graduation", cor: "from-green-500 to-teal-500" },
    { id: "tempo", nome: "Tempo", icone: "bx bx-time", cor: "from-yellow-500 to-orange-500" },
    { id: "simulados", nome: "Simulados", icone: "bx bx-check-circle", cor: "from-indigo-500 to-purple-500" }
  ];

  const getRaridadeColor = (raridade) => {
    switch (raridade) {
      case "comum": return "from-gray-400 to-gray-500";
      case "raro": return "from-blue-400 to-blue-600";
      case "epico": return "from-purple-400 to-purple-600";
      case "lendario": return "from-yellow-400 to-orange-500";
      default: return "from-gray-400 to-gray-500";
    }
  };

  // Animação dos números
  useEffect(() => {
    const animateNumber = (target, key, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    animateNumber(progressoUsuario.nivel, 'nivel', 1500);
    animateNumber(progressoUsuario.xpAtual, 'xp', 2000);
    animateNumber(progressoUsuario.conquistasDesbloqueadas, 'conquistas', 1800);
  }, []);

  const conquistasFiltradas = selectedCategory === "todas" 
    ? conquistas 
    : conquistas.filter(conquista => conquista.categoria === selectedCategory);

  const metasFiltradas = selectedCategory === "todas" 
    ? metas 
    : metas.filter(meta => meta.categoria === selectedCategory);

  const calcularProgressoPorcentagem = (progresso, meta) => {
    return Math.min((progresso / meta) * 100, 100);
  };

  const calcularDiasRestantes = (prazo) => {
    const hoje = new Date();
    const dataLimite = new Date(prazo);
    const diffTime = dataLimite - hoje;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const formatarNumero = (numero) => {
    if (numero >= 1000000) {
      return (numero / 1000000).toFixed(1) + 'M';
    } else if (numero >= 1000) {
      return (numero / 1000).toFixed(1) + 'K';
    }
    return numero.toString();
  };

  const calcularProgressoNivel = () => {
    return (progressoUsuario.xpAtual / progressoUsuario.xpProximoNivel) * 100;
  };

  const calcularProgressoConquistas = () => {
    return (progressoUsuario.conquistasDesbloqueadas / progressoUsuario.totalConquistas) * 100;
  };

  const xpRestante = progressoUsuario.xpProximoNivel - progressoUsuario.xpAtual;

  return (
    <div className="min-h-screen pt-4 px-4 sm:px-8" style={{ minHeight: "100vh" }}>

    {/* Cards de Progresso */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Card do Nível */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Nível {progressoUsuario.nivel}</h2>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg">{progressoUsuario.tituloNivel}</p>
            </div>
            <div className="text-yellow-300 text-3xl">
              <i className="bx bx-star"></i>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-xs sm:text-sm mb-2">
              <span>Progresso para Nível {progressoUsuario.nivel + 1}</span>
              <span>{progressoUsuario.xpAtual}/{progressoUsuario.xpProximoNivel} XP</span>
            </div>
            <div className="w-full bg-blue-400 rounded-full h-3">
              <div
                className="bg-white h-3 rounded-full transition-all duration-500"
                style={{ width: `${calcularProgressoNivel()}%` }}
              ></div>
            </div>
          </div>
          
          <p className="text-blue-100 text-xs sm:text-sm">
            Faltam apenas {xpRestante} XP para o próximo nível!
          </p>
        </div>

        {/* Card das Conquistas */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{progressoUsuario.conquistasDesbloqueadas}/{progressoUsuario.totalConquistas}</h2>
              <p className="text-orange-100 text-sm sm:text-base md:text-lg">Conquistas</p>
            </div>
            <div className="text-yellow-300 text-3xl">
              <i className="bx bx-trophy"></i>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-xs sm:text-sm mb-2">
              <span>Progresso Geral</span>
              <span>{progressoUsuario.progressoGeral}%</span>
            </div>
            <div className="w-full bg-orange-400 rounded-full h-3">
              <div
                className="bg-white h-3 rounded-full transition-all duration-500"
                style={{ width: `${calcularProgressoConquistas()}%` }}
              ></div>
            </div>
          </div>
          
          <p className="text-orange-100 text-xs sm:text-sm">
            Continue assim para desbloquear mais!
          </p>
        </div>
      </div>

      {/* Lista de Conquistas */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-6">Suas Conquistas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {conquistas.map((conquista) => (
            <div
              key={conquista.id}
              className={`border rounded-xl p-4 transition-all duration-200 ${
                conquista.desbloqueada 
                  ? "border-green-200 bg-green-50 hover:bg-green-100" 
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              {/* Ícone e Status */}
              <div className="flex items-center justify-between mb-3">
                <div className={`text-3xl ${conquista.desbloqueada ? "text-blue-600" : "grayscale opacity-50 text-gray-400"}`}>
                  <i className={conquista.icone}></i>
                </div>
                {conquista.desbloqueada ? (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    ✓ Desbloqueada
                  </span>
                ) : (
                  <span className="bg-gray-400 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Bloqueada
                  </span>
                )}
              </div>

              {/* Nome e Descrição */}
              <h3 className="font-bold text-slate-800 mb-1 text-sm sm:text-base">{conquista.nome}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-3">{conquista.descricao}</p>

              {/* Barra de Progresso para conquistas não desbloqueadas */}
              {!conquista.desbloqueada && conquista.progresso && (
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>Progresso</span>
                    <span>{conquista.progresso}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${conquista.progresso}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Recompensa XP e Data */}
              <div className="flex justify-between items-center text-xs">
                <span className="flex items-center gap-1 text-amber-600 font-semibold">
                  <i className="bx bx-star"></i> {conquista.xp} XP
                </span>
                {conquista.desbloqueada && conquista.dataDesbloqueio && (
                  <span className="text-slate-500">
                    {new Date(conquista.dataDesbloqueio).toLocaleDateString('pt-BR')}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Metas */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-6">Suas Metas Ativas</h2>
        
        {/* Filtros de Metas */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categoriasMetas.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setSelectedCategory(categoria.id)}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 text-xs sm:text-sm ${
                  selectedCategory === categoria.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-slate-700 hover:bg-gray-200"
                }`}
              >
                <i className={categoria.icone}></i>
                <span>{categoria.nome}</span>
              </button>
            ))}
          </div>
        </div>

          {/* Grid de Metas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {metasFiltradas.map((meta) => {
              const progressoPorcentagem = calcularProgressoPorcentagem(meta.progresso, meta.meta);
              const diasRestantes = calcularDiasRestantes(meta.prazo);
              const isCompleta = progressoPorcentagem >= 100;
              const isPrazoApertado = diasRestantes <= 7;

              return (
                <div
                  key={meta.id}
                  className={`border rounded-xl p-4 transition-all duration-200 ${
                    isCompleta 
                      ? "border-green-200 bg-green-50 hover:bg-green-100" 
                      : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  {/* Ícone e Status */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`text-3xl ${isCompleta ? "text-green-600" : "opacity-75 text-blue-600"}`}>
                      <i className={meta.icone}></i>
                    </div>
                    {isCompleta ? (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        ✓ Concluída
                      </span>
                    ) : isPrazoApertado ? (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        ⚠️ Urgente
                      </span>
                    ) : (
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        Em Andamento
                      </span>
                    )}
                  </div>

                  {/* Nome e Descrição */}
                  <h3 className="font-bold text-slate-800 mb-1 text-sm sm:text-base">{meta.titulo}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3">{meta.descricao}</p>

                  {/* Barra de Progresso */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                      <span>Progresso: {formatarNumero(meta.progresso)}/{formatarNumero(meta.meta)}</span>
                      <span>{Math.round(progressoPorcentagem)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          isCompleta ? 'bg-green-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${Math.min(progressoPorcentagem, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Recompensa XP e Prazo */}
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-1 text-amber-600 font-semibold">
                      <i className="bx bx-star"></i> {meta.recompensa} XP
                    </span>
                    <span className={`text-slate-500 ${isPrazoApertado ? 'text-red-600 font-semibold' : ''}`}>
                      {diasRestantes === 0 ? 'Hoje!' : `${diasRestantes} dias`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
      </div>

      {/* Seção Motivacional */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Continue sua jornada de aprendizado! <i className="bx bx-rocket"></i>
        </h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90 mb-6">
          Cada conquista desbloqueada te aproxima mais do seu objetivo acadêmico.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold">{progressoUsuario.totalConquistas - progressoUsuario.conquistasDesbloqueadas}</div>
            <div className="text-xs sm:text-sm opacity-80">Conquistas restantes</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold">{xpRestante}</div>
            <div className="text-xs sm:text-sm opacity-80">XP até próximo nível</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold">{conquistas.filter(c => c.desbloqueada).reduce((total, c) => total + c.xp, 0)}</div>
            <div className="text-xs sm:text-sm opacity-80">XP total conquistado</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conquistas;
