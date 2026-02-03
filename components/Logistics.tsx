import React from 'react';
import { MapPin, Truck, AlertCircle } from 'lucide-react';

const Logistics: React.FC = () => {
  const locations = [
    "Perdizes",
    "Lapa",
    "Vila Leopoldina",
    "Freguesia do Ó",
    "Vila Ipojuca"
  ];

  return (
    <section id="delivery" className="bg-[#f0ece6] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text and List */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-6">
            Levamos a Confeitaria <br/>até sua Festa
          </h2>
          
          <p className="text-earth-700 text-lg mb-8 leading-relaxed">
            Nossa estrutura logística garante que seu pedido chegue impecável. Atendemos com exclusividade a Zona Oeste de São Paulo.
          </p>

          <div className="space-y-4 mb-10">
            {locations.map((loc, index) => (
              <div key={index} className="flex items-center gap-3 text-earth-800 font-medium">
                <MapPin className="w-5 h-5 text-gold-500 fill-gold-300" />
                <span>{loc}</span>
              </div>
            ))}
          </div>
          
          <div className="text-sm text-earth-600 italic flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>Valores de frete calculados individualmente conforme a distância.</span>
          </div>
        </div>

        {/* Right: Special Conditions Box */}
        <div className="relative">
             {/* Decorative Map Image (Placeholder for aesthetic) */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=600&auto=format&fit=crop')] opacity-10 rounded-2xl grayscale bg-cover bg-center"></div>

             <div className="relative bg-white/80 backdrop-blur-sm border-2 border-gold-400 p-8 rounded-2xl shadow-xl">
                <div className="absolute -top-6 -right-6 bg-gold-400 text-white p-3 rounded-full shadow-lg">
                    <Truck className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-earth-900 mb-4 font-serif">
                    Condição Especial para Grandes Eventos
                </h3>
                
                <p className="text-earth-700 text-lg mb-6">
                    Para trazer ainda mais tranquilidade para o seu grande dia:
                </p>
                
                <div className="bg-earth-50 border-l-4 border-earth-900 p-4">
                    <p className="font-bold text-earth-900 text-lg">
                        Frete Grátis
                    </p>
                    <p className="text-earth-700">
                        Para encomendas acima de 1.000 doces.
                    </p>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Logistics;