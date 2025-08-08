import React, { useState, useEffect, useRef } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState("prof-matematica");
  const [searchTerm, setSearchTerm] = useState("");
  const [showConversations, setShowConversations] = useState(true);
  const messagesEndRef = useRef(null);

  // Dados simulados de conversas
  const conversations = [
    {
      id: "prof-matematica",
      name: "Prof. Carlos Mendes",
      subject: "Matemática",
      avatar: "CM",
      avatarColor: "bg-blue-500",
      status: "online",
      lastMessage: "Sobre a questão de derivadas...",
      lastTime: "14:32",
      unread: 2,
      responseTime: "Responde em ~5 min"
    },
    {
      id: "prof-fisica",
      name: "Prof. Ana Rodrigues",
      subject: "Física",
      avatar: "AR",
      avatarColor: "bg-purple-500",
      status: "online",
      lastMessage: "Ótima pergunta! Vou explicar...",
      lastTime: "13:45",
      unread: 0,
      responseTime: "Responde em ~3 min"
    },
    {
      id: "prof-quimica",
      name: "Prof. Roberto Silva",
      subject: "Química",
      avatar: "RS",
      avatarColor: "bg-green-500",
      status: "away",
      lastMessage: "Vou enviar o material completo...",
      lastTime: "12:20",
      unread: 0,
      responseTime: "Ausente"
    },
    {
      id: "prof-portugues",
      name: "Prof. Mariana Costa",
      subject: "Português",
      avatar: "MC",
      avatarColor: "bg-orange-500",
      status: "online",
      lastMessage: "Obrigada pela participação na a...",
      lastTime: "Ontem",
      unread: 0,
      responseTime: "Responde em ~10 min"
    }
  ];

  // Mensagens simuladas
  const messageHistory = {
    "prof-matematica": [
      {
        id: 1,
        sender: "professor",
        senderName: "Prof. Carlos Mendes",
        content: "Olá Izabela! Vi que você teve dúvidas sobre derivadas na última aula. Em que posso ajudar?",
        timestamp: "14:28",
        date: "Hoje, 15 de Novembro"
      },
      {
        id: 2,
        sender: "user",
        senderName: "Izabela",
        content: "Oi professor! Estou com dificuldade para entender a regra da cadeia. Você poderia me explicar com um exemplo prático?",
        timestamp: "14:30",
        date: "Hoje, 15 de Novembro"
      },
      {
        id: 3,
        sender: "professor",
        senderName: "Prof. Carlos Mendes",
        content: "Claro! Vou explicar passo a passo. Primeiro, vamos relembrar o conceito básico:",
        timestamp: "14:32",
        date: "Hoje, 15 de Novembro"
      }
    ]
  };

  const currentConversation = conversations.find(conv => conv.id === selectedConversation);
  const currentMessages = messageHistory[selectedConversation] || [];

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setMessages(currentMessages);
  }, [selectedConversation]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      senderName: "Izabela",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      date: "Hoje, 15 de Novembro"
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");

    // Simular resposta do professor
    setIsTyping(true);
    setTimeout(() => {
      const professorResponse = {
        id: Date.now() + 1,
        sender: "professor",
        senderName: currentConversation?.name || "Professor",
        content: getProfessorResponse(newMessage),
        timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
        date: "Hoje, 15 de Novembro"
      };
      setMessages(prev => [...prev, professorResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const getProfessorResponse = (message) => {
    const responses = [
      "Excelente pergunta! Vou explicar com mais detalhes.",
      "Entendo sua dúvida. Vamos resolver isso juntos passo a passo.",
      "Muito bem! Essa é uma questão importante para o seu aprendizado.",
      "Vou preparar alguns exercícios extras para você praticar.",
      "Perfeito! Continue assim que você vai longe nos estudos."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "away": return "bg-yellow-500";
      case "offline": return "bg-gray-400";
      default: return "bg-gray-400";
    }
  };

  return (
    <div className="h-screen flex flex-col p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex-1 min-h-0">
        <div className="flex h-full">
          {/* Lista de Conversas */}
          <div className={`${showConversations ? 'w-full md:w-80' : 'hidden md:w-80'} border-r border-gray-200 flex flex-col md:block ${!showConversations ? 'md:block' : ''}`}>
            {/* Header da lista */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                  <i className="bx bx-chat text-xl text-blue-600"></i>
                  Conversas
                </h3>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors">
                    <i className="bx bx-plus text-lg"></i>
                  </button>
                  <button 
                    onClick={() => setShowConversations(false)}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg flex items-center justify-center transition-colors md:hidden"
                  >
                    <i className="bx bx-x text-lg"></i>
                  </button>
                </div>
              </div>
              
              {/* Busca */}
              <div className="relative">
                <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Buscar professores..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Lista de conversas */}
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.map((conversation) => (
                  <div
                  key={conversation.id}
                  onClick={() => {
                    setSelectedConversation(conversation.id);
                    setShowConversations(false); // Hide conversations on mobile after selection
                  }}
                  className={`p-4 cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    selectedConversation === conversation.id ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-12 h-12 ${conversation.avatarColor} rounded-full flex items-center justify-center text-white font-bold`}>
                        {conversation.avatar}
                      </div>
                      {/* Status indicator */}
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(conversation.status)} rounded-full border-2 border-white`}></div>
                    </div>

                    {/* Info da conversa */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-slate-800 truncate text-sm">{conversation.name}</h4>
                        <span className="text-xs text-gray-500 flex-shrink-0">{conversation.lastTime}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-xs text-green-600 font-medium">Online</span>
                        <span className="text-xs text-gray-500">{conversation.subject}</span>
                        {conversation.unread > 0 && (
                          <span className="bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5 ml-auto">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm text-slate-500 truncate">{conversation.lastMessage}</p>
                      <p className="text-xs text-green-600 mt-1">{conversation.responseTime}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Área de Chat */}
          <div className={`${showConversations ? 'hidden md:flex' : 'flex'} flex-1 flex-col`}>
            {/* Header do chat */}
            <div className="p-4 border-b border-gray-200 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setShowConversations(true)}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg flex items-center justify-center transition-colors md:hidden"
                  >
                    <i className="bx bx-arrow-back text-lg"></i>
                  </button>
                  <div className="relative">
                    <div className={`w-10 h-10 ${currentConversation?.avatarColor} rounded-full flex items-center justify-center text-white font-bold`}>
                      {currentConversation?.avatar}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(currentConversation?.status)} rounded-full border-2 border-white`}></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-slate-800 truncate">{currentConversation?.name}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-600">Online</span>
                      <span className="text-gray-500 hidden sm:inline">•</span>
                      <span className="text-gray-500 hidden sm:inline">{currentConversation?.subject}</span>
                      <span className="text-gray-500 hidden lg:inline">•</span>
                      <span className="text-green-600 hidden lg:inline">{currentConversation?.responseTime}</span>
                    </div>
                  </div>
                </div>
                
                {/* Ações do chat */}
                <div className="flex items-center gap-1 sm:gap-2">
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center transition-colors">
                    <i className="bx bx-video text-sm sm:text-lg"></i>
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors">
                    <i className="bx bx-phone text-sm sm:text-lg"></i>
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <i className="bx bx-info-circle text-sm sm:text-lg"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Mensagens */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {/* Data separator */}
              <div className="text-center mb-6">
                <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
                  Hoje, 15 de Novembro
                </span>
              </div>

              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-xs sm:max-w-md ${
                      message.sender === "user" 
                        ? "bg-blue-500 text-white rounded-l-2xl rounded-tr-2xl" 
                        : "bg-white text-slate-800 rounded-r-2xl rounded-tl-2xl border"
                    } p-3 sm:p-4 shadow-sm`}>
                      <div className="text-sm leading-relaxed break-words">{message.content}</div>
                      <div className={`text-xs mt-2 ${
                        message.sender === "user" ? "text-blue-100" : "text-gray-500"
                      }`}>
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Indicador de digitação */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-slate-800 rounded-r-2xl rounded-tl-2xl p-3 sm:p-4 shadow-sm border">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div ref={messagesEndRef} />
            </div>

            {/* Input de mensagem */}
            <div className="p-3 sm:p-4 border-t border-gray-200 bg-white">
              <div className="flex gap-2 sm:gap-3 items-end">
                <button className="text-gray-400 hover:text-gray-600 p-2 hidden sm:block">
                  <i className="bx bx-paperclip text-xl"></i>
                </button>
                
                <div className="flex-1">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua mensagem..."
                    rows={1}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    style={{ minHeight: "40px", maxHeight: "120px" }}
                  />
                </div>
                
                <button
                  onClick={sendMessage}
                  disabled={newMessage.trim() === ""}
                  className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white p-2 sm:p-3 rounded-xl transition-colors flex items-center justify-center"
                >
                  <i className="bx bx-send text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;