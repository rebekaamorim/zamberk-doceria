import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-900 text-earth-200 py-16 px-6 border-t-4 border-gold-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Brand Area - Light Logo */}
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center">
             {/* Logo Claro - Caminho Absoluto */}
             <img 
               src="./logoclaro.webp" 
               alt="Zamberk Confeitaria" 
               className="h-12 md:h-16 w-auto object-contain opacity-90"
             />
          </div>
          <p className="text-earth-300 leading-relaxed">
            Especialistas em bolos de corte e doces finos para casamentos e eventos corporativos na Zona Oeste de SP.
          </p>
          <p className="text-sm text-earth-400 mt-4">
            © {new Date().getFullYear()} Zamberk Doceria. Todos os direitos reservados.
          </p>
        </div>

        {/* Links Area */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-lg uppercase tracking-wider border-b border-earth-700 pb-2 mb-2">Contato</h4>
          <a href="https://www.instagram.com/zamberkdoceria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-gold-400 transition-colors flex items-center gap-2">
            <Instagram className="w-5 h-5"/> @zamberkdoceria
          </a>
          <a href="https://www.facebook.com/p/Zamberk-61579546028897/" className="hover:text-gold-400 transition-colors flex items-center gap-2">
            <Facebook className="w-5 h-5"/> /zamberkdoceria
          </a>
          <a href="#" className="hover:text-gold-400 transition-colors flex items-center gap-2">
            <Mail className="w-5 h-5"/> contato@zamberkdoceria.com.br
          </a>
        </div>
      </div>
      
      {/* SEO Tagline */}
      <div className="mt-16 text-center border-t border-earth-800 pt-8 text-earth-500 text-sm">
        <p>Bolos de Corte e Doces Finos na Zona Oeste de SP • Perdizes • Lapa • Vila Leopoldina</p>
      </div>
    </footer>
  );
};

export default Footer;