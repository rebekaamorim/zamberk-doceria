import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const whatsappLink = "https://wa.me/5511974496416?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista.";

  // Função que avisa o Google sobre a conversão
  const registrarConversao = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17976830977/hfwQCNqQloIcEIHYgvxC',
        'value': 1.0,
        'currency': 'BRL'
      });
    }
  };

  return (
    <a 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={registrarConversao} // <-- AQUI É ONDE A MÁGICA ACONTECE
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-nature-500 hover:bg-nature-600 text-white rounded-full shadow-2xl transition-transform transform hover:scale-110 hover:-translate-y-1 animate-bounce-slow"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-white stroke-nature-500" />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;