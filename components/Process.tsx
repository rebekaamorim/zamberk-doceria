import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      image: "./mensagem.webp", // Planning/Menu
      text: "Defina sabores e quantidade (ajudamos a calcular)."
    },
    {
      image: "./data.webp", // Calendar
      text: "Confirme disponibilidade (Mínimo 30 dias antes)."
    },
    {
      image: "./reserva.webp", // Payment
      text: "Pagamento do sinal para bloquear a data."
    },
    {
      image: "./presente.webp", // Receiving/Gift
      text: "Receba no dia e hora marcados."
    }
  ];

  return (
    <section className="bg-earth-100 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 text-center mb-16">
          Como garantir sua data
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-earth-300 shadow-md group-hover:border-nature-500 transition-colors duration-300 relative">
                <img 
                  src={step.image} 
                  alt={`Passo ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              
              </div>
              <p className="text-earth-900 font-medium text-lg max-w-[200px] leading-snug">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;