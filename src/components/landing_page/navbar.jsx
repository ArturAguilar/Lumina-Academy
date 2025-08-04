import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../App.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#2563eb" />
                  <path d="M2 17L12 22L22 17" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xl font-bold">
                  Lumina <span className="text-blue-600">Academy</span>
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="nav-link px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">Início</a>
            <a href="#materias" className="nav-link px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">Matérias</a>
            <a href="#planos" className="nav-link px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">Planos</a>
            <a href="#recursos" className="nav-link px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">Recursos</a>
            <a href="#depoimentos" className="nav-link px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">Depoimentos</a>
            <a href="#contato" className="nav-link px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">Contato</a>
          </div>
          <div className="flex items-center space-x-3">
            <Link
              to="/login"
              className="hidden md:inline-block px-4 py-2 text-blue-600 border border-blue-600 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Entrar
            </Link>
            <Link
              to="/registro"
              className="hidden md:inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Cadastre-se
            </Link>
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={handleMobileMenuToggle}
              aria-label="Abrir menu mobile"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white shadow-lg rounded-b-lg transition-all duration-300 ${mobileMenuOpen ? '' : 'hidden'}`}
        id="mobileMenu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300">Início</a>
          <a href="#materias" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300">Matérias</a>
          <a href="#planos" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300">Planos</a>
          <a href="#recursos" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300">Recursos</a>
          <a href="#depoimentos" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300">Depoimentos</a>
          <a href="#contato" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300">Contato</a>
          <div className="flex flex-col gap-2 mt-3">
            <Link
              to="/login"
              className="block w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-full text-sm font-medium text-center hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Entrar
            </Link>
            <Link
              to="/registro"
              className="block w-full px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium text-center hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
