import React from 'react';
import { CheckSquare } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="bg-[#FAF7F2] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
        
        {/* Left Image (Replacing the dark square) */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="components/fotos/bolocorte.png" 
              alt="Fatia de bolo de corte de chocolate com recheio cremoso e ganache" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
             {/* Overlay removed to keep the chocolate color vivid */}
            <div className="absolute inset-0 bg-earth-900/0"></div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-earth-900 mb-8 font-serif">
            Por que escolher o "Bolo de Copa"?
          </h2>

          <div className="space-y-6">
            
            <FeatureItem 
              title="Foco no Paladar:" 
              description="Sem pasta americana, apenas ingredientes nobres e cobertura cremosa." 
            />
            
            <FeatureItem 
              title="Praticidade:" 
              description="Entregue pronto para o serviço dos garçons. Ideal para acompanhar bolos cenográficos (fake)." 
            />
            
            <FeatureItem 
              title="Custo-Benefício:" 
              description="Você investe em chocolate belga/Sicao, não em decoração artística." 
            />

          </div>
        </div>

      </div>
    </section>
  );
};

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 shrink-0">
        <div className="bg-nature-500 rounded text-white p-0.5">
            <CheckSquare className="w-5 h-5" />
        </div>
    </div>
    <div>
      <p className="text-earth-900 text-base md:text-lg leading-snug">
        <span className="font-bold">{title}</span> {description}
      </p>
    </div>
  </div>
);

export default Features;