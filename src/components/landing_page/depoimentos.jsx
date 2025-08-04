import React from "react";

const Depoimentos = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 bg-blue-600 bg-opacity-10 rounded-full mb-4">
            <span className="text-blue-600 text-sm font-medium">✨ Conquistas dos nossos alunos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Histórias de Sucesso</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Veja como nossos estudantes alcançaram seus sonhos e conquistaram suas aprovações nos melhores vestibulares! 🎓</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Depoimento 1 */}
          <div className="bg-gray-50 rounded-xl p-8 testimonial-card">
            <div className="flex items-center mb-6">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt="Maria Silva" className="w-16 h-16 rounded-full object-cover mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800">Maria Silva</h4>
                <p className="text-sm text-gray-600">Aprovada em Medicina - USP</p>
                <div className="flex text-blue-600 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"O cronograma personalizado foi fundamental para minha aprovação! Consegui organizar meus estudos de forma eficiente e focar nas minhas dificuldades. A plataforma é incrível! 🚀"</p>
          </div>
          {/* Depoimento 2 */}
          <div className="bg-gray-50 rounded-xl p-8 testimonial-card">
            <div className="flex items-center mb-6">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt="João Santos" className="w-16 h-16 rounded-full object-cover mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800">João Santos</h4>
                <p className="text-sm text-gray-600">Aprovado em Engenharia - UNICAMP</p>
                <div className="flex text-blue-600 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"O suporte da plataforma é incrível! Sempre que tenho dúvidas, recebo ajuda rápida e eficiente. O banco de questões também é excelente para praticar. Recomendo muito! 💪"</p>
          </div>
          {/* Depoimento 3 */}
          <div className="bg-gray-50 rounded-xl p-8 testimonial-card">
            <div className="flex items-center mb-6">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt="Ana Costa" className="w-16 h-16 rounded-full object-cover mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800">Ana Costa</h4>
                <p className="text-sm text-gray-600">Aprovada em Direito - PUC</p>
                <div className="flex text-blue-600 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"A análise de desempenho me ajudou a identificar onde eu precisava melhorar. Em poucos meses consegui aumentar muito minha nota! Obrigada Lumina Academy! 🎯"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
