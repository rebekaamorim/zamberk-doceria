import React from 'react';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/5511974496416?text=Ol%C3%A1!%20Gostaria%20de%20receber%20o%20card%C3%A1pio%20de%20sabores.";
  const googleReviewsLink = "https://share.google/LAfvg2wzaBLXVj6at";

  return (
    <section className="relative pt-32 pb-32 md:py-48 px-6 md:px-16 overflow-hidden min-h-[85vh] flex items-center justify-center md:justify-start">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./hero-bg.webp" 
          alt="Mesa de Doces Finos Zamberk" 
          className="w-full h-full object-cover"
          fetchPriority="high"         
  loading="eager"
        />
        {/* Sombra Clara (Light Overlay) para contraste suave com o texto escuro */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
      </div>

      <div id="home" className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Content - Floating over background */}
        <div>
          <div className="inline-block bg-earth-900/5 backdrop-blur-sm px-4 py-1 rounded-full mb-6 border border-earth-900/10">
             <span className="text-earth-900 font-semibold text-sm uppercase tracking-widest">Confeitaria Artesanal Premium</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-earth-900 leading-[1.1] mb-8 drop-shadow-sm">
            O Verdadeiro Sabor <br/>da Sua Festa: <br/>
            <span className="font-light italic">Bolos de Corte <br/>& Doces de Servir.</span>
          </h1>
          
          <p className="text-earth-800 text-lg md:text-2xl mb-10 leading-relaxed max-w-xl font-medium">
            Massa amanteigada ou chiffon com Chocolate Sicao. 
            A solução elegante e inteligente para servir seus convidados com sofisticação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-earth-700 hover:bg-earth-800 text-white text-base md:text-lg font-bold py-4 px-10 rounded-full shadow-xl transition-transform transform hover:-translate-y-1 ring-4 ring-white/50 text-center inline-block"
            >
              BAIXAR CARDÁPIO DE SABORES
            </a>
           
          </div>
        </div>

              {/* Right Side - Floating Badge (Clickable Google Reviews) */}
        <div className="hidden md:flex justify-end">
           <a 
              href={googleReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/95 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl border border-white/50 animate-bounce-slow hover:scale-105 transition-transform duration-300 cursor-pointer group flex flex-col items-center gap-2"
           >
              {/* Google Header */}
              <div className="flex items-center gap-2 mb-1 opacity-90 group-hover:opacity-100 transition-opacity">
                 <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                 </svg>
                 <span className="font-sans font-bold text-gray-500 text-xs uppercase tracking-wide">Google</span>
              </div>

              <div className="text-center">
                <span className="block text-4xl font-serif font-bold text-earth-900 leading-none">5.0</span>
                <div className="flex justify-center gap-1 my-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs uppercase tracking-wide text-earth-600 font-bold group-hover:text-nature-500 transition-colors">Ver Avaliações</span>
              </div>
           </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;