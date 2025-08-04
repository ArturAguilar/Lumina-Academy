import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#2563eb" />
                <path d="M2 17L12 22L22 17" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xl font-bold">Lumina <span className="text-blue-600">Academy</span></span>
            </a>
            <p className="text-gray-400 text-sm mb-6">Sua plataforma completa para aprovação nos melhores vestibulares do país. Junte-se aos milhares de aprovados! 🎓</p>
            {/* Redes sociais */}
            <div className="flex space-x-4">
              <a href="https://twitter.com/luminaacademy" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="https://facebook.com/luminaacademy" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="https://instagram.com/luminaacademy" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/luminaacademy" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Links úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-blue-600 transition-colors">Início</a></li>
              <li><a href="#materias" className="hover:text-blue-600 transition-colors">Matérias</a></li>
              <li><a href="#planos" className="hover:text-blue-600 transition-colors">Planos</a></li>
              <li><a href="#recursos" className="hover:text-blue-600 transition-colors">Recursos</a></li>
              <li><a href="#depoimentos" className="hover:text-blue-600 transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-blue-600 transition-colors">Contato</a></li>
            </ul>
          </div>
          {/* Matérias */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Matérias</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#matematica" className="hover:text-blue-600 transition-colors">Matemática</a></li>
              <li><a href="#fisica" className="hover:text-blue-600 transition-colors">Física</a></li>
              <li><a href="#quimica" className="hover:text-blue-600 transition-colors">Química</a></li>
              <li><a href="#biologia" className="hover:text-blue-600 transition-colors">Biologia</a></li>
              <li><a href="#literatura" className="hover:text-blue-600 transition-colors">Literatura</a></li>
              <li><a href="#historia" className="hover:text-blue-600 transition-colors">História</a></li>
            </ul>
          </div>
          {/* Suporte */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#suporte" className="hover:text-blue-600 transition-colors">Central de Ajuda</a></li>
              <li><a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a></li>
              <li><a href="#privacidade" className="hover:text-blue-600 transition-colors">Política de Privacidade</a></li>
              <li><a href="#termos" className="hover:text-blue-600 transition-colors">Termos de Uso</a></li>
              <li><a href="#cancelamento" className="hover:text-blue-600 transition-colors">Cancelamento</a></li>
              <li><a href="#reembolso" className="hover:text-blue-600 transition-colors">Reembolso</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Lumina Academy. Todos os direitos reservados. Feito com ❤️ para estudantes brasileiros.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Aceitamos:</span>
              <div className="flex space-x-2">
                <div className="bg-gray-800 px-3 py-1 rounded text-xs">PIX</div>
                <div className="bg-gray-800 px-3 py-1 rounded text-xs">Cartão</div>
                <div className="bg-gray-800 px-3 py-1 rounded text-xs">Boleto</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
