import React from "react";

const Contato = () => {
  // Funções para botões de ação rápida
  const openWhatsApp = () => {
    window.open("https://wa.me/5511999998888?text=Olá! Gostaria de saber mais sobre os planos da Lumina Academy 🎓", "_blank");
  };
  const openEmail = () => {
    window.location.href = "mailto:contato@luminaacademy.com.br?subject=Interesse nos planos da Lumina Academy";
  };

  return (
    <section id="contato" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center px-4 py-1 bg-white bg-opacity-20 rounded-full mb-6">
              <span className="text-white text-sm font-medium">💬 Vamos conversar!</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para começar sua jornada rumo à aprovação?</h2>
            <p className="text-white text-opacity-90 mb-8">Entre em contato conosco! Nossa equipe está pronta para te ajudar a escolher o melhor plano e tirar todas suas dúvidas. 🚀</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <a href="mailto:contato@luminaacademy.com.br?subject=Interesse nos planos da Lumina Academy" className="text-white font-medium hover:text-blue-300 transition-colors cursor-pointer">contato@luminaacademy.com.br</a>
                  <p className="text-white text-opacity-75 text-sm">Resposta em até 2 horas</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <a href="https://wa.me/5511999998888?text=Olá! Gostaria de saber mais sobre os planos da Lumina Academy 🎓" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-green-300 transition-colors cursor-pointer">(11) 99999-8888</a>
                  <p className="text-white text-opacity-75 text-sm">WhatsApp disponível 24h</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">São Paulo - SP</p>
                  <p className="text-white text-opacity-75 text-sm">Atendimento presencial e online</p>
                </div>
              </div>
            </div>
            {/* Botões de ação rápida */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={openWhatsApp} className="flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>Falar no WhatsApp</span>
              </button>
              <button onClick={openEmail} className="flex items-center justify-center px-6 py-3 bg-white bg-opacity-20 text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-30 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 border border-white border-opacity-20">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Enviar Email</span>
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Fale conosco agora! 📞</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome completo</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" placeholder="Seu nome aqui..." />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" placeholder="seu@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" placeholder="(11) 99999-9999" />
              </div>
              <div>
                <label htmlFor="vestibular" className="block text-sm font-medium text-gray-700 mb-2">Qual vestibular você quer passar?</label>
                <select id="vestibular" name="vestibular" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                  <option value="">Selecione...</option>
                  <option value="enem">ENEM</option>
                  <option value="fuvest">FUVEST (USP)</option>
                  <option value="unicamp">UNICAMP</option>
                  <option value="unesp">UNESP</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" placeholder="Conte-nos sobre seus objetivos..."></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center">
                <span>Enviar mensagem</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
