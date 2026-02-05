import React from 'react';

const Experience: React.FC = () => {
  const cards = [
    {
      title: "As Massas",
      image: "./massas.png", // Bakery/Sponge cake texture
      description: "Chiffon (Leve), Amanteigada (Intensa), Pão de Ló (Clássica)."
    },
    {
      title: "Os Recheios",
      image: "./recheios.png", // Chocolate/Creamy
      description: "Base 100% Chocolate Sicao, Frutas Vermelhas frescas, Pistache, Nozes."
    },
    {
      title: "Doces Finos",
      image: "./doces finos.png", // Fine sweets
      description: "Pérolas, Confetes Belgas e acabamentos sofisticados para mesa de café."
    }
  ];
  
  const whatsappLink = "https://wa.me/5511974496416?text=Ol%C3%A1!%20Gostaria%20de%20ver%20as%20combina%C3%A7%C3%B5es%20de%20sabores.";

  return (
    <section id="flavors" className="bg-[#C8B6A6] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 text-center mb-12">
          Experiência Gastronômica
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div key={index} className="bg-earth-50 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
              {/* Image Header */}
              <div className="h-64 overflow-hidden relative group">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-4 left-0 w-full text-center">
                   <span className="inline-block px-4 py-1 bg-white/90 text-earth-900 font-bold text-sm uppercase tracking-wider rounded-full shadow-sm">
                     {card.title}
                   </span>
                </div>
              </div>
              
              {/* Content Body */}
              <div className="p-8 flex-grow flex items-center justify-center text-center bg-[#eae0d5]">
                <p className="text-earth-900 font-medium text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-nature-500 hover:bg-nature-600 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 active:scale-95 inline-block"
          >
            Ver todas as combinações no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;