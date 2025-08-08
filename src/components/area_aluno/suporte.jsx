import React, { useState } from "react";

const Suporte = () => {
  const [selectedCategory, setSelectedCategory] = useState("geral");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [ticketForm, setTicketForm] = useState({
    assunto: "",
    categoria: "tecnico",
    prioridade: "media",
    descricao: ""
  });
  const [showNewTicket, setShowNewTicket] = useState(false);

  // FAQ Categories
  const faqCategories = [
    { id: "geral", name: "Geral", icon: "bx-help-circle", count: 15 },
    { id: "tecnico", name: "Técnico", icon: "bx-cog", count: 12 },
    { id: "conta", name: "Conta", icon: "bx-user", count: 10 },
    { id: "pagamento", name: "Pagamento", icon: "bx-credit-card", count: 8 },
    { id: "estudos", name: "Estudos", icon: "bx-book", count: 18 },
    { id: "mobile", name: "App Mobile", icon: "bx-mobile", count: 7 },
    { id: "professores", name: "Professores", icon: "bx-user-voice", count: 6 }
  ];

  // FAQ Data
  const faqData = {
    geral: [
      {
        pergunta: "Como funciona a plataforma Lumina Academy?",
        resposta: "A Lumina Academy é uma plataforma completa de estudos online que oferece videoaulas de alta qualidade, exercícios interativos, simulados personalizados, cronograma de estudos adaptativo e acompanhamento individual. Nossa metodologia combina tecnologia avançada com pedagogia comprovada para maximizar seu aprendizado e preparação para vestibulares e ENEM.",
        tags: ["plataforma", "funcionamento", "metodologia"]
      },
      {
        pergunta: "Quais são os horários de funcionamento do suporte?",
        resposta: "Nosso suporte está disponível de segunda a sexta-feira, das 8h às 20h, e aos sábados das 9h às 17h. Fora desse horário, você pode enviar tickets ou usar nosso chat automático para questões básicas. Garantimos resposta em até 24 horas para tickets não urgentes e até 4 horas para questões críticas.",
        tags: ["horários", "atendimento", "disponibilidade"]
      },
      {
        pergunta: "Posso acessar o conteúdo offline?",
        resposta: "Sim! Oferecemos download de materiais em PDF, listas de exercícios e resumos para estudo offline. As videoaulas podem ser baixadas no app mobile para visualização sem internet. O download está disponível para assinantes Premium e pode ser feito em até 3 dispositivos por conta.",
        tags: ["offline", "download", "mobile"]
      },
      {
        pergunta: "Como funciona o período de teste gratuito?",
        resposta: "Oferecemos 7 dias de teste gratuito com acesso completo a todas as funcionalidades da plataforma. Não é necessário cartão de crédito para ativar. Durante o período, você pode assistir videoaulas, fazer exercícios, usar simulados e conversar com professores. Após o período, você pode escolher o plano que melhor se adequa às suas necessidades.",
        tags: ["teste", "gratuito", "período"]
      },
      {
        pergunta: "A plataforma funciona em quais dispositivos?",
        resposta: "A Lumina Academy funciona em computadores (Windows, Mac, Linux), tablets e smartphones (iOS e Android). Temos app nativo para dispositivos móveis com funcionalidades exclusivas como download offline e notificações personalizadas. A versão web é compatível com Chrome, Firefox, Safari e Edge.",
        tags: ["dispositivos", "compatibilidade", "app"]
      },
      {
        pergunta: "Como acompanho meu progresso de estudos?",
        resposta: "Temos um dashboard completo com estatísticas detalhadas: tempo de estudo, matérias estudadas, performance em exercícios, evolução em simulados, metas cumpridas e muito mais. Você recebe relatórios semanais por email e pode configurar alertas personalizados para manter o foco nos estudos.",
        tags: ["progresso", "dashboard", "estatísticas"]
      },
      {
        pergunta: "Posso estudar em grupo na plataforma?",
        resposta: "Sim! Temos funcionalidades de estudo colaborativo: grupos de estudo, salas virtuais, competições amigáveis, compartilhamento de anotações e fóruns de discussão por matéria. Você pode criar grupos privados com amigos ou participar de grupos públicos da comunidade Lumina.",
        tags: ["grupo", "colaborativo", "comunidade"]
      }
    ],
    tecnico: [
      {
        pergunta: "Estou tendo problemas para fazer login",
        resposta: "Se você não consegue fazer login, verifique: 1) Email e senha corretos 2) Conexão com internet estável 3) Cache do navegador limpo 4) Cookies habilitados. Se usar login social (Google/Facebook), verifique se sua conta está ativa. Para redefinir senha, clique em 'Esqueci minha senha' na tela de login. Se o problema persistir, entre em contato conosco informando seu email e dispositivo usado.",
        tags: ["login", "senha", "acesso"]
      },
      {
        pergunta: "Os vídeos não estão carregando ou travando",
        resposta: "Para resolver problemas de vídeo: 1) Teste sua velocidade de internet (mínimo 5 Mbps) 2) Limpe cache e cookies do navegador 3) Desative extensões de bloqueio 4) Tente em modo incógnito 5) Verifique se JavaScript está habilitado 6) Use navegador atualizado. No app mobile, feche e reabra o aplicativo. Para internet lenta, diminua a qualidade do vídeo nas configurações.",
        tags: ["vídeos", "carregamento", "streaming"]
      },
      {
        pergunta: "Erro 'Sessão expirada' aparece constantemente",
        resposta: "Esse erro indica problemas de autenticação. Soluções: 1) Faça logout completo e login novamente 2) Limpe dados do site nas configurações do navegador 3) Verifique se data/hora do dispositivo estão corretas 4) Desative VPN se estiver usando 5) Teste em navegador diferente. Se usar múltiplos dispositivos, faça login em apenas um por vez inicialmente.",
        tags: ["sessão", "autenticação", "erro"]
      },
      {
        pergunta: "App mobile fechando ou com erro",
        resposta: "Para problemas no app: 1) Atualize para versão mais recente 2) Reinicie o dispositivo 3) Libere espaço de armazenamento (mínimo 2GB livres) 4) Verifique se iOS 13+ ou Android 8+ 5) Desinstale e reinstale o app se necessário. Para sincronização, verifique se está logado com a mesma conta em todos os dispositivos.",
        tags: ["app", "mobile", "crash"]
      },
      {
        pergunta: "Problemas de sincronização entre dispositivos",
        resposta: "A sincronização acontece automaticamente quando conectado à internet. Se houver divergências: 1) Verifique conexão em todos dispositivos 2) Force sincronização puxando a tela para baixo no app 3) Faça logout/login em dispositivos dessincronizados 4) Aguarde até 10 minutos para propagação completa. Progresso de exercícios e anotações são sincronizados em tempo real.",
        tags: ["sincronização", "dispositivos", "dados"]
      },
      {
        pergunta: "Como atualizar o navegador corretamente?",
        resposta: "Para melhor experiência, mantenha seu navegador atualizado: Chrome: Menu > Ajuda > Sobre; Firefox: Menu > Ajuda > Sobre; Safari: Menu Apple > Atualizações; Edge: Menu > Ajuda > Sobre. Recomendamos sempre a versão mais recente. Se estiver em ambiente corporativo, contate TI para atualizações. Desabilite extensões conflitantes se houver problemas.",
        tags: ["navegador", "atualização", "compatibilidade"]
      }
    ],
    conta: [
      {
        pergunta: "Como altero minha senha?",
        resposta: "Para alterar sua senha: 1) Acesse Configurações > Segurança 2) Clique em 'Alterar Senha' 3) Digite senha atual 4) Informe nova senha (mínimo 8 caracteres, incluindo maiúscula, número e símbolo) 5) Confirme nova senha 6) Clique em Salvar. Você receberá email de confirmação. Se esqueceu a senha atual, use 'Esqueci minha senha' na tela de login.",
        tags: ["senha", "segurança", "alteração"]
      },
      {
        pergunta: "Como atualizo meus dados pessoais?",
        resposta: "Vá em Configurações > Perfil para atualizar: nome, email, telefone, data de nascimento, endereço, foto de perfil e preferências de estudo. Alterações no email requerem verificação. Para mudar CPF ou documentos, entre em contato com suporte pois requer verificação manual. Mantenha seus dados atualizados para receber comunicações importantes.",
        tags: ["dados", "perfil", "atualização"]
      },
      {
        pergunta: "Como adiciono ou removo dispositivos autorizados?",
        resposta: "Em Configurações > Dispositivos você vê todos aparelhos com acesso à sua conta. Pode usar até 5 dispositivos simultâneos. Para remover: clique no dispositivo > Revogar Acesso. Para adicionar novo dispositivo quando limite atingido, remova um inativo primeiro. Dispositivos inativos por 30 dias são removidos automaticamente.",
        tags: ["dispositivos", "autorização", "limite"]
      },
      {
        pergunta: "Posso ter múltiplas contas ou transferir progresso?",
        resposta: "Permitimos apenas uma conta por pessoa para manter integridade acadêmica. Para transferir progresso entre contas (fusão), entre em contato com suporte com justificativa válida. Não é possível compartilhar conta entre usuários. Se criou conta duplicada acidentalmente, podemos migrar dados em até 7 dias após criação.",
        tags: ["múltiplas", "transferência", "fusão"]
      },
      {
        pergunta: "Como configuro notificações e lembretes?",
        resposta: "Personalize notificações em Configurações > Notificações: emails de progresso, lembretes de estudo, novos conteúdos, mensagens de professores, atualizações de cronograma. No app mobile, configure notificações push. Você pode definir horários específicos, frequência e tipos de lembrete. Recomendamos manter ativas para melhor acompanhamento.",
        tags: ["notificações", "lembretes", "configuração"]
      },
      {
        pergunta: "Posso pausar temporariamente minha conta?",
        resposta: "Sim, oferecemos pausa de conta por motivos válidos (viagem, problemas familiares, etc.) por até 60 dias por ano. Durante pausa, sua assinatura fica suspensa sem cobrança e conteúdo permanece salvo. Para pausar, acesse Configurações > Assinatura > Pausar Conta. Reativação é instantânea. Histórico e progresso são mantidos integralmente.",
        tags: ["pausar", "suspender", "reativar"]
      },
      {
        pergunta: "Como excluir definitivamente minha conta?",
        resposta: "Para excluir conta permanentemente: 1) Acesse Configurações > Conta 2) Role até o final 3) Clique 'Excluir Conta' 4) Confirme com senha 5) Informe motivo (opcional) 6) Confirme exclusão. ATENÇÃO: Esta ação é irreversível! Todos dados, progresso e assinatura serão perdidos. Aguarde email de confirmação. Para apenas cancelar assinatura, use opção 'Cancelar Plano'.",
        tags: ["excluir", "deletar", "permanente"]
      }
    ],
    pagamento: [
      {
        pergunta: "Quais formas de pagamento são aceitas?",
        resposta: "Aceitamos: Cartão de Crédito (Visa, Mastercard, Elo, American Express), Cartão de Débito, PIX (aprovação instantânea), Boleto Bancário (vencimento em 3 dias úteis), PayPal e PicPay. Para assinaturas, recomendamos cartão ou PIX recorrente. Boleto disponível apenas para pagamento à vista anual. Parcelamento em até 12x sem juros no cartão de crédito.",
        tags: ["pagamento", "cartão", "pix", "boleto"]
      },
      {
        pergunta: "Como funciona a cobrança recorrente?",
        resposta: "Planos mensais são cobrados automaticamente todo dia do mês em que você assinou. Planos anuais renovam na data de aniversário. Você recebe email 7 dias antes da cobrança. Se pagamento falhar, tenta novamente em 3 dias. Após 7 dias sem sucesso, conta é suspensa temporariamente. Para evitar problemas, mantenha dados de pagamento atualizados em Configurações > Pagamento.",
        tags: ["recorrente", "cobrança", "renovação"]
      },
      {
        pergunta: "Como cancelo minha assinatura?",
        resposta: "Para cancelar: 1) Acesse Configurações > Assinatura 2) Clique 'Cancelar Plano' 3) Informe motivo (opcional) 4) Confirme cancelamento. Você mantém acesso até final do período pago. Não há multas ou taxas. Pode reativar a qualquer momento. Se cancelar por engano, tem 24h para reverter sem nova cobrança. Oferecemos desconto de retenção em alguns casos.",
        tags: ["cancelar", "assinatura", "plano"]
      },
      {
        pergunta: "Política de reembolso e garantias",
        resposta: "Oferecemos garantia incondicional de 30 dias para novos usuários. Se não ficar satisfeito, reembolsamos 100% sem perguntas. Para usuários antigos, analisamos caso a caso por problemas técnicos ou insatisfação justificada. Reembolso de assinatura anual é proporcional ao tempo não utilizado. Processamento em 3-7 dias úteis. Entre em contato pelo suporte para solicitar.",
        tags: ["reembolso", "garantia", "devolução"]
      },
      {
        pergunta: "Como emito nota fiscal ou recibo?",
        resposta: "Nota fiscal é gerada automaticamente para pessoa jurídica. Para pessoa física, emitimos recibo de prestação de serviços. Acesse Configurações > Faturas para baixar documentos ou solicitar segunda via. Para nota fiscal retroativa ou dados incorretos, entre em contato com suporte. Empresas devem informar CNPJ e razão social antes do pagamento.",
        tags: ["nota fiscal", "recibo", "documentos"]
      },
      {
        pergunta: "Desconto para estudantes e promoções",
        resposta: "Oferecemos 50% desconto para estudantes de baixa renda (renda familiar até 3 salários mínimos) mediante comprovação. Também temos descontos para: grupos de 5+ pessoas (20%), indicação de amigos (1 mês grátis), planos anuais (2 meses grátis). Promoções sazonais em datas especiais. Desconto estudantil renovável anualmente com nova comprovação.",
        tags: ["desconto", "estudante", "promoção"]
      }
    ],
    estudos: [
      {
        pergunta: "Como criar um cronograma de estudos eficiente?",
        resposta: "Nossa IA cria cronograma personalizado baseado em: tempo disponível, vestibular desejado, nível atual, matérias de dificuldade e data da prova. Para otimizar: 1) Defina horários fixos de estudo 2) Intercale matérias difíceis com fáceis 3) Inclua pausas e revisões 4) Ajuste semanalmente conforme progresso. O sistema sugere modificações automáticas baseadas em performance.",
        tags: ["cronograma", "planejamento", "IA"]
      },
      {
        pergunta: "Como funcionam os simulados adaptativos?",
        resposta: "Simulados adaptativos ajustam dificuldade conforme suas respostas, focando em pontos fracos. Sistema analisa: tempo de resposta, temas com dificuldade, padrões de erro. Oferecemos simulados por matéria, vestibular específico ou ENEM completo. Após cada simulado, recebe relatório detalhado com plano de estudos direcionado para melhorar performance.",
        tags: ["simulados", "adaptativo", "avaliação"]
      },
      {
        pergunta: "Como baixar materiais para estudo offline?",
        resposta: "No app mobile: toque no ícone download ao lado do conteúdo. Na web: clique no botão download em PDFs e resumos. Videoaulas podem ser baixadas apenas no app (limite de 100 vídeos simultâneos). Materiais ficam salvos por 30 dias offline. Para renovar, conecte à internet. Downloads ilimitados no plano Premium.",
        tags: ["download", "offline", "materiais"]
      },
      {
        pergunta: "Como usar o sistema de anotações inteligentes?",
        resposta: "Durante videoaulas, clique no ícone de anotação para fazer marcações sincronizadas com tempo do vídeo. Use hashtags para categorizar (#importante #revisar #dúvida). Sistema permite: destaque de texto em PDFs, anotações por voz (transcritas automaticamente), desenhos em exercícios, compartilhamento com colegas. Tudo sincroniza entre dispositivos.",
        tags: ["anotações", "notas", "sincronização"]
      },
      {
        pergunta: "Como funcionam as metas de estudo?",
        resposta: "Defina metas diárias, semanais e mensais: horas de estudo, exercícios resolvidos, videoaulas assistidas, simulados realizados. Sistema acompanha progresso em tempo real com gráficos e estatísticas. Gamificação com pontos, badges e ranking (opcional). Meta não cumprida gera sugestão de recuperação. Pode ajustar metas conforme necessidade.",
        tags: ["metas", "objetivos", "gamificação"]
      },
      {
        pergunta: "Como interpretar relatórios de desempenho?",
        resposta: "Relatórios mostram: % acertos por matéria, tempo médio por questão, evolução temporal, comparação com outros alunos, previsão de nota ENEM, matérias prioritárias para estudo. Cores indicam performance: verde (boa), amarelo (atenção), vermelho (foco urgente). Gráficos de radar mostram perfil de conhecimento. Relatórios atualizados semanalmente.",
        tags: ["relatórios", "desempenho", "análise"]
      },
      {
        pergunta: "Como usar o chat com professores efetivamente?",
        resposta: "Para melhor atendimento: 1) Seja específico na dúvida 2) Envie foto da questão se necessário 3) Informe contexto (matéria, assunto) 4) Tente resolver antes de perguntar 5) Use horário de pico (19h-21h) para dúvidas rápidas. Professores respondem em até 30 minutos durante expediente. Para dúvidas complexas, agende videoconferência individual.",
        tags: ["professores", "chat", "dúvidas"]
      },
      {
        pergunta: "Como aproveitar melhor as videoaulas?",
        resposta: "Dicas para otimizar aprendizado: 1) Assista em velocidade confortável (1.25x-1.5x) 2) Faça anotações durante explicações 3) Pause para refletir sobre conceitos 4) Revise anotações depois 5) Pratique exercícios na sequência 6) Use legendas se necessário 7) Assista novamente se não entendeu. Videoaulas têm marcadores de tempo para navegação rápida.",
        tags: ["videoaulas", "aprendizado", "técnicas"]
      }
    ],
    mobile: [
      {
        pergunta: "Como baixar e instalar o app oficial?",
        resposta: "Baixe gratuitamente: iOS (App Store) ou Android (Google Play). Busque 'Lumina Academy' (verifique desenvolvedor oficial). Requer iOS 13+ ou Android 8+, 2GB RAM, 1GB espaço livre. Após instalar, faça login com mesma conta da web. Primeira sincronização pode demorar alguns minutos. App tem funcionalidades exclusivas como estudo offline e notificações inteligentes.",
        tags: ["app", "instalação", "download"]
      },
      {
        pergunta: "Funcionalidades exclusivas do app mobile",
        resposta: "App oferece: download de vídeos/materiais para offline, notificações push personalizadas, modo noturno automático, gravação de áudio para anotações, scanner de questões com IA, cronômetro integrado para estudos, widgets para home screen, sincronização em background. Interface otimizada para touch com navegação por gestos e acesso rápido às funcionalidades mais usadas.",
        tags: ["mobile", "exclusivas", "recursos"]
      },
      {
        pergunta: "Como configurar notificações push?",
        resposta: "Nas configurações do app: 1) Ative notificações gerais 2) Escolha tipos: lembretes de estudo, novas aulas, mensagens de professores, simulados disponíveis 3) Defina horários (evite madrugada) 4) Configure frequência 5) Personalize som/vibração. Para Android, garanta que app não está em modo economia de bateria. Notificações respeitam modo 'Não Perturbe' do sistema.",
        tags: ["notificações", "push", "configuração"]
      },
      {
        pergunta: "Problemas de sincronização no mobile",
        resposta: "Se dados não sincronizam: 1) Verifique conexão internet 2) Force fechamento e reabertura do app 3) Faça logout/login 4) Em configurações do app, toque 'Sincronizar Agora' 5) Para problemas persistentes, limpe cache do app (Android) ou reinstale. Sincronização automática acontece: ao abrir app, a cada 30 minutos em uso, e ao fechar app.",
        tags: ["sincronização", "dados", "mobile"]
      },
      {
        pergunta: "Como otimizar consumo de bateria?",
        resposta: "Para economizar bateria: 1) Baixe conteúdo em Wi-Fi para uso offline 2) Diminua brilho da tela 3) Use modo noturno 4) Desative localização desnecessária 5) Configure sincronização para Wi-Fi apenas 6) Feche app quando não usar por muito tempo 7) Atualize app regularmente (otimizações de performance). App otimizado para baixo consumo energético.",
        tags: ["bateria", "otimização", "economia"]
      }
    ],
    professores: [
      {
        pergunta: "Como funciona o agendamento de aulas particulares?",
        resposta: "Assinantes Premium podem agendar aulas 1:1 com professores. Acesse Professores > Agendar Aula, escolha matéria, professor disponível, data/horário. Sessões de 30-60 minutos via videoconferência. Incluso: gravação da aula, material compartilhado, lista de exercícios personalizados. Agende com 24h antecedência. Cancelamento sem cobrança até 2h antes. Limite de 2 aulas/mês no Premium.",
        tags: ["aulas", "particulares", "agendamento"]
      },
      {
        pergunta: "Horários de atendimento dos professores",
        resposta: "Chat com professores: Segunda a sexta 9h-22h, Sábados 9h-18h. Plantões de dúvidas ao vivo: Terça e quinta 20h-21h. Aulas particulares: Segunda a sábado 8h-20h (conforme disponibilidade). Domingos: apenas chat para dúvidas urgentes 14h-18h. Feriados têm horário reduzido. Professores especialistas por matéria garantem atendimento qualificado.",
        tags: ["horários", "atendimento", "disponibilidade"]
      },
      {
        pergunta: "Como enviar questões específicas para resolução?",
        resposta: "Para dúvidas em exercícios: 1) Tire foto nítida da questão 2) Envie via chat indicando matéria 3) Explique onde travou 4) Aguarde resposta (geralmente 15-30 min) 5) Professor envia resolução passo-a-paso. Para questões complexas, pode ser agendada explicação ao vivo. Mantenha enunciado completo visível na foto para melhor atendimento.",
        tags: ["questões", "resolução", "dúvidas"]
      },
      {
        pergunta: "Posso solicitar correção de redação?",
        resposta: "Sim! Assinantes Premium têm direito a correção de redação mensal. Envie em PDF/foto legível via plataforma. Correção segue critérios ENEM: competências 1-5, nota detalhada, comentários para melhoria, sugestões de repertório. Prazo: 5-7 dias úteis. Professor pode solicitar reescrita de trechos. Assinantes Premium+ têm correções ilimitadas com feedback por áudio.",
        tags: ["redação", "correção", "feedback"]
      }
    ]
  };

  // Support Tickets (mock data)
  const supportTickets = [
    {
      id: "TK001",
      assunto: "Problema no carregamento de vídeos",
      categoria: "Técnico",
      status: "Em Andamento",
      prioridade: "Alta",
      data: "2024-08-03",
      dataResposta: "2024-08-03",
      responsavel: "João Silva",
      resposta: "Identificamos o problema. Estamos trabalhando na correção."
    },
    {
      id: "TK002",
      assunto: "Dúvida sobre reembolso",
      categoria: "Pagamento",
      status: "Resolvido",
      prioridade: "Média",
      data: "2024-08-01",
      dataResposta: "2024-08-02",
      responsavel: "Maria Santos",
      resposta: "Reembolso processado. Valor estornado em 3-5 dias úteis."
    },
    {
      id: "TK003",
      assunto: "Como baixar certificado de conclusão",
      categoria: "Estudos",
      status: "Resolvido",
      prioridade: "Baixa",
      data: "2024-07-28",
      dataResposta: "2024-07-28",
      responsavel: "Carlos Mendes",
      resposta: "Certificado disponível na seção Conquistas > Certificados."
    },
    {
      id: "TK004",
      assunto: "Sincronização entre app e web",
      categoria: "Técnico",
      status: "Aguardando",
      prioridade: "Média",
      data: "2024-08-04",
      dataResposta: "-",
      responsavel: "Ana Costa",
      resposta: "Análise em andamento. Aguarde resposta em até 24h."
    },
    {
      id: "TK005",
      assunto: "Desconto estudante não aplicado",
      categoria: "Pagamento",
      status: "Resolvido",
      prioridade: "Alta",
      data: "2024-07-25",
      dataResposta: "2024-07-26",
      responsavel: "Roberto Lima",
      resposta: "Desconto aplicado retroativamente. Valor ajustado na próxima fatura."
    }
  ];

  const filteredFAQ = faqData[selectedCategory]?.filter(item =>
    item.pergunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.resposta.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  ) || [];

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    // Here you would send the ticket to your backend
    console.log("Novo ticket:", ticketForm);
    alert("Ticket enviado com sucesso! Você receberá uma resposta em breve.");
    setTicketForm({ assunto: "", categoria: "tecnico", prioridade: "media", descricao: "" });
    setShowNewTicket(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Aguardando": return "bg-yellow-100 text-yellow-800";
      case "Em Andamento": return "bg-blue-100 text-blue-800";
      case "Resolvido": return "bg-green-100 text-green-800";
      case "Fechado": return "bg-gray-100 text-gray-800";
      case "Cancelado": return "bg-red-100 text-red-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Alta": return "bg-red-100 text-red-800";
      case "Média": return "bg-yellow-100 text-yellow-800";
      case "Baixa": return "bg-green-100 text-green-800";
      case "Crítica": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="h-screen flex flex-col p-2 sm:p-4 lg:p-6 bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex-1 min-h-0">
        <div className="flex h-full relative">
          {/* Mobile Overlay */}
          {showSidebar && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setShowSidebar(false)}
            />
          )}

          {/* Sidebar */}
          <div className={`${
            showSidebar ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:relative top-0 left-0 z-50 lg:z-auto w-80 sm:w-96 lg:w-80 border-r border-gray-200 flex flex-col bg-white h-full transition-transform duration-300 ease-in-out`}>
            <div className="p-4 lg:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-xl lg:text-2xl font-bold text-slate-800">
                  Central de Suporte
                </h1>
                <button
                  onClick={() => setShowSidebar(false)}
                  className="lg:hidden w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <i className="bx bx-x text-lg"></i>
                </button>
              </div>
              <p className="text-slate-600 text-sm">Como podemos ajudar você hoje?</p>
            </div>

            {/* Quick Actions */}
            <div className="p-3 lg:p-4 border-b border-gray-200">
              <button
                onClick={() => {
                  setShowNewTicket(!showNewTicket);
                  setShowSidebar(false);
                }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors mb-3"
              >
                <i className="bx bx-plus text-lg"></i>
                Novo Ticket
              </button>
              
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-green-50 hover:bg-green-100 text-green-700 px-3 py-2 rounded-lg flex items-center justify-center gap-1 transition-colors text-sm">
                  <i className="bx bx-chat text-sm sm:text-base"></i>
                  <span className="hidden sm:inline">Chat</span>
                </button>
                <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 px-3 py-2 rounded-lg flex items-center justify-center gap-1 transition-colors text-sm">
                  <i className="bx bx-video text-sm sm:text-base"></i>
                  <span className="hidden sm:inline">Vídeo</span>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex-1 overflow-y-auto p-3 lg:p-4">
              <h3 className="font-semibold text-slate-800 mb-3 text-sm lg:text-base">Categorias FAQ</h3>
              <div className="space-y-1">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setShowSidebar(false);
                    }}
                    className={`w-full text-left px-3 py-3 rounded-lg transition-colors flex items-center justify-between text-sm lg:text-base ${
                      selectedCategory === category.id
                        ? "bg-blue-50 text-blue-700 border-l-4 border-l-blue-500"
                        : "text-slate-600 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-2 lg:gap-3">
                      <i className={`bx ${category.icon} text-base lg:text-lg`}></i>
                      <span className="truncate">{category.name}</span>
                    </div>
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full flex-shrink-0">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Recent Tickets */}
              <div className="mt-6">
                <h3 className="font-semibold text-slate-800 mb-3 flex items-center justify-between text-sm lg:text-base">
                  Meus Tickets
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {supportTickets.length}
                  </span>
                </h3>
                <div className="space-y-2">
                  {supportTickets.slice(0, 3).map((ticket) => (
                    <div key={ticket.id} className="bg-gray-50 p-2 lg:p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-gray-600">{ticket.id}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                      </div>
                      <p className="text-xs lg:text-sm text-slate-800 truncate mb-1">{ticket.assunto}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">{ticket.data}</p>
                        <span className={`text-xs px-1.5 py-0.5 rounded ${getPriorityColor(ticket.prioridade)}`}>
                          {ticket.prioridade}
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  {supportTickets.length > 3 && (
                    <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 py-2">
                      Ver todos ({supportTickets.length})
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col min-w-0">
            {showNewTicket ? (
              /* New Ticket Form */
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <button
                      onClick={() => setShowNewTicket(false)}
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <i className="bx bx-arrow-left text-lg"></i>
                    </button>
                    <button
                      onClick={() => setShowSidebar(true)}
                      className="lg:hidden w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <i className="bx bx-menu text-lg"></i>
                    </button>
                    <h2 className="text-xl lg:text-2xl font-bold text-slate-800">Novo Ticket</h2>
                  </div>

                  <form onSubmit={handleSubmitTicket} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Assunto
                      </label>
                      <input
                        type="text"
                        value={ticketForm.assunto}
                        onChange={(e) => setTicketForm({...ticketForm, assunto: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Descreva brevemente o problema..."
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Categoria
                        </label>
                        <select
                          value={ticketForm.categoria}
                          onChange={(e) => setTicketForm({...ticketForm, categoria: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        >
                          <option value="tecnico">Técnico</option>
                          <option value="conta">Conta</option>
                          <option value="pagamento">Pagamento</option>
                          <option value="estudos">Estudos</option>
                          <option value="mobile">App Mobile</option>
                          <option value="professores">Professores</option>
                          <option value="geral">Geral</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Prioridade
                        </label>
                        <select
                          value={ticketForm.prioridade}
                          onChange={(e) => setTicketForm({...ticketForm, prioridade: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        >
                          <option value="baixa">Baixa</option>
                          <option value="media">Média</option>
                          <option value="alta">Alta</option>
                          <option value="critica">Crítica</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Descrição Detalhada
                      </label>
                      <textarea
                        value={ticketForm.descricao}
                        onChange={(e) => setTicketForm({...ticketForm, descricao: e.target.value})}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Descreva o problema em detalhes, incluindo quando ocorreu e quais passos você já tentou..."
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors order-2 sm:order-1"
                      >
                        Enviar Ticket
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowNewTicket(false)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition-colors order-1 sm:order-2"
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              /* FAQ Content */
              <>
                {/* Header */}
                <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <button
                      onClick={() => setShowSidebar(true)}
                      className="lg:hidden w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <i className="bx bx-menu text-lg"></i>
                    </button>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 flex-1">
                      FAQ - {faqCategories.find(c => c.id === selectedCategory)?.name}
                    </h2>
                  </div>
                  
                  {/* Search */}
                  <div className="relative">
                    <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <input
                      type="text"
                      placeholder="Buscar na FAQ..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* FAQ Content */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6">
                  <div className="max-w-4xl mx-auto">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 lg:mb-8">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-3 sm:p-4 text-white">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-blue-100 text-xs sm:text-sm">Tempo Médio</p>
                            <p className="text-xl sm:text-2xl font-bold">15 min</p>
                          </div>
                          <i className="bx bx-time text-xl sm:text-2xl text-blue-200"></i>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-3 sm:p-4 text-white">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-green-100 text-xs sm:text-sm">Taxa Resolução</p>
                            <p className="text-xl sm:text-2xl font-bold">98%</p>
                          </div>
                          <i className="bx bx-check-circle text-xl sm:text-2xl text-green-200"></i>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-3 sm:p-4 text-white sm:col-span-1 col-span-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-purple-100 text-xs sm:text-sm">Satisfação</p>
                            <p className="text-xl sm:text-2xl font-bold">4.9/5</p>
                          </div>
                          <i className="bx bx-star text-xl sm:text-2xl text-purple-200"></i>
                        </div>
                      </div>
                    </div>

                    {filteredFAQ.length > 0 ? (
                      <div className="space-y-4 lg:space-y-6">
                        {filteredFAQ.map((item, index) => (
                          <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-slate-800 mb-3 lg:mb-4 flex items-start gap-2 lg:gap-3 text-base lg:text-lg">
                              <i className="bx bx-help-circle text-blue-500 text-lg lg:text-xl flex-shrink-0 mt-0.5 lg:mt-1"></i>
                              <span className="leading-relaxed">{item.pergunta}</span>
                            </h3>
                            <div className="ml-6 lg:ml-8 text-slate-600 leading-relaxed mb-3 lg:mb-4 text-sm lg:text-base">
                              {item.resposta}
                            </div>
                            {item.tags && (
                              <div className="ml-6 lg:ml-8 flex flex-wrap gap-1 lg:gap-2">
                                {item.tags.map((tag, tagIndex) => (
                                  <span 
                                    key={tagIndex}
                                    className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <i className="bx bx-search-alt text-4xl text-gray-400 mb-4"></i>
                        <h3 className="text-lg font-medium text-gray-600 mb-2">Nenhum resultado encontrado</h3>
                        <p className="text-gray-500">Tente usar termos diferentes ou navegue pelas categorias.</p>
                      </div>
                    )}

                    {/* Contact Support */}
                    <div className="mt-8 lg:mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 lg:p-8 text-white text-center">
                      <i className="bx bx-support text-3xl lg:text-4xl mb-4"></i>
                      <h3 className="text-lg lg:text-xl font-bold mb-2">Não encontrou o que procurava?</h3>
                      <p className="mb-4 lg:mb-6 opacity-90 text-sm lg:text-base">Nossa equipe está aqui para ajudar você!</p>
                      <div className="flex flex-col sm:flex-row justify-center gap-3 lg:gap-4">
                        <button
                          onClick={() => {
                            setShowNewTicket(true);
                            setShowSidebar(false);
                          }}
                          className="bg-white text-blue-600 hover:bg-gray-50 px-4 lg:px-6 py-3 rounded-lg font-medium transition-colors text-sm lg:text-base"
                        >
                          Abrir Ticket
                        </button>
                        <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 lg:px-6 py-3 rounded-lg font-medium transition-colors text-sm lg:text-base">
                          Chat ao Vivo
                        </button>
                      </div>
                    </div>

                    {/* Additional Resources */}
                    <div className="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                      <div className="bg-white border border-gray-200 rounded-xl p-4 lg:p-6">
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2 text-sm lg:text-base">
                          <i className="bx bx-book text-blue-500"></i>
                          Guias e Tutoriais
                        </h4>
                        <ul className="space-y-2 text-xs lg:text-sm text-slate-600">
                          <li>• Como começar seus estudos</li>
                          <li>• Guia do cronograma personalizado</li>
                          <li>• Dicas para usar simulados</li>
                          <li>• Como aproveitar aulas ao vivo</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-xl p-4 lg:p-6">
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2 text-sm lg:text-base">
                          <i className="bx bx-video text-green-500"></i>
                          Status do Sistema
                        </h4>
                        <div className="space-y-2 text-xs lg:text-sm">
                          <div className="flex items-center justify-between">
                            <span>Plataforma Web</span>
                            <span className="flex items-center gap-1 text-green-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Online
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>App Mobile</span>
                            <span className="flex items-center gap-1 text-green-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Online
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Chat Professores</span>
                            <span className="flex items-center gap-1 text-green-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Online
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suporte;
