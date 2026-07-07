import React from 'react';
import { MessageCircle, Globe, MapPin, Menu as MenuIcon, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

type LinkItem = {
  title: string;
  subtitle: string;
  url: string;
  icon?: React.ElementType;
  image?: string;
  isExternal: boolean;
  highlight: boolean;
};

const linkItems: LinkItem[] = [
  {
    title: 'Faça sua Encomenda',
    subtitle: 'Atendimento via WhatsApp',
    url: 'https://wa.me/5511974496416?text=Ol%C3%A1!%20Vim%20pelo%20instagram%20e%20gostaria%20de%20fazer%20uma%20encomenda.',
    icon: MessageCircle,
    isExternal: true,
    highlight: true,
  },
  {
    title: 'Peça no iFood',
    subtitle: 'Entrega rápida na sua porta',
    url: 'https://www.ifood.com.br/delivery/sao-paulo-sp/zamberk-doceria---lapa-lapa/c324ad63-43e6-4c07-b099-b4abced47fdf',
    image: './ifood.png',
    isExternal: true,
    highlight: false,
  },
  {
    title: 'Peça no 99Food',
    subtitle: 'Aproveite nossos cupons',
    url: 'https://oia.99app.com/dlp9/2oKK9Z?share_media=WHATSAPP',
    image: './99.png',
    isExternal: true,
    highlight: false,
  },
  {
    title: 'Peça no Keeta',
    subtitle: 'Novidade com descontos',
    url: 'https://url-eu.mykeeta.com/DQ1mFE9z',
    image: './keeta.png',
    isExternal: true,
    highlight: false,
  },
  {
    title: 'Como Chegar',
    subtitle: 'Nossa localização',
    url: 'https://maps.app.goo.gl/SuJ3WGcCdiYVoXrD8',
    icon: MapPin,
    isExternal: true,
    highlight: false,
  }
];

const Links: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-earth-50 flex flex-col items-center py-12 px-4 font-sans selection:bg-gold-300 selection:text-earth-900 !m-0">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        
        {/* Profile Image/Logo */}
        <div className="w-24 h-24 mb-6 rounded-full overflow-hidden bg-white shadow-lg border-4 border-white flex items-center justify-center">
          <img 
            src="/perfil.png" 
            alt="Zamberk Doceria" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to text if image fails to load
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-3xl font-serif text-earth-800">Z</span>';
            }}
          />
        </div>

        {/* Profile Info */}
        <h1 className="text-2xl font-serif text-earth-900 font-bold mb-2">
          Zamberk Doceria
        </h1>
        <p className="text-earth-600 mb-8 text-center px-4">
          Doceria artesanal. Transformando momentos especiais em memórias doces.
        </p>

        {/* Links Container */}
        <div className="w-full flex flex-col gap-4">
          {linkItems.map((item, index) => {
            const Icon = item.icon;
            
            const content = (
              <div className={`relative flex items-center p-4 w-full rounded-2xl transition-all duration-300 box-border ${
                item.highlight 
                  ? 'bg-nature-500 text-white shadow-md hover:bg-nature-600 hover:shadow-lg hover:-translate-y-1' 
                  : 'bg-white text-earth-800 shadow-sm border border-earth-200 hover:border-nature-500 hover:shadow-md hover:-translate-y-1'
              }`}>
                <div className={`flex items-center justify-center shrink-0 w-12 h-12 rounded-full mr-4 overflow-hidden relative ${
                  item.highlight ? 'bg-white/20' : 'bg-earth-100 text-nature-600'
                }`}>
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover bg-white" />
                  ) : item.icon && Icon ? (
                    <Icon className="w-6 h-6" />
                  ) : null}
                </div>
                <div className="flex flex-col flex-grow text-left">
                  <span className="font-semibold text-lg leading-tight mb-1">{item.title}</span>
                  <span className={`text-sm ${item.highlight ? 'text-white/80' : 'text-earth-500'}`}>
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );

            if (item.isExternal) {

              return (
                <a 
                  key={index}
                  href={item.url}
                  target={item.url !== '#' ? "_blank" : undefined}
                  rel={item.url !== '#' ? "noopener noreferrer" : undefined}
                  className="w-full block focus:outline-none focus:ring-2 focus:ring-nature-500 focus:ring-offset-2 focus:ring-offset-earth-50 rounded-2xl no-underline !text-left"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link 
                key={index}
                to={item.url}
                className="w-full block focus:outline-none focus:ring-2 focus:ring-nature-500 focus:ring-offset-2 focus:ring-offset-earth-50 rounded-2xl no-underline !text-left"
              >
                {content}
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-earth-400 flex flex-col items-center">
          <div className="flex gap-4 mb-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-earth-100 rounded-full hover:bg-earth-200 hover:text-earth-700 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Zamberk Doceria
          </p>
        </div>

      </div>
    </div>
  );
};

export default Links;
