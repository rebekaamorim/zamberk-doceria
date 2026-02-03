import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = "https://wa.me/5511974496416?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20bolos%20e%20doces%20da%20Zamberk.";

  return (
    <nav className="bg-earth-50 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      {/* Logo Area - Dark Logo */}
      <div className="flex items-center">
        {/* Logo Escuro - Caminho absoluto */}
        <img 
          src="components/fotos/logoescuro.png" 
          alt="Zamberk Confeitaria" 
          className="h-10 md:h-12 w-auto object-contain"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-earth-900">
        <a href="#home" className="hover:text-nature-600 transition-colors">O que Fazemos</a>
        <span className="text-earth-300">|</span>
        <a href="#flavors" className="hover:text-nature-600 transition-colors">Sabores</a>
        <span className="text-earth-300">|</span>
        <a href="#delivery" className="hover:text-nature-600 transition-colors">Onde Entregamos</a>
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-nature-500 hover:bg-nature-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all transform hover:scale-105 active:scale-95 text-sm inline-block"
        >
          WhatsApp Direto
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-earth-900" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

         {/* Mobile Dropdown with Smooth Animation */}
      <div 
        className={`absolute top-full left-0 w-full bg-earth-50 shadow-lg md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center py-6 gap-4 border-t border-earth-200">
           <a href="#about" className="text-earth-900 font-semibold" onClick={() => setIsOpen(false)}>O que Fazemos</a>
           <a href="#flavors" className="text-earth-900 font-semibold" onClick={() => setIsOpen(false)}>Sabores</a>
           <a href="#delivery" className="text-earth-900 font-semibold" onClick={() => setIsOpen(false)}>Onde Entregamos</a>
           <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-nature-500 text-white font-bold py-3 px-8 rounded-full"
           >
            WhatsApp Direto
          </a>
        </div>
      </div>
  
    </nav>
  );
};

export default Navbar;