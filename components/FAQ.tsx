import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Vocês fazem bolos temáticos ou infantis com desenhos?",
      answer: "Não. Nosso foco é puramente gastronômico: bolos de corte focados na qualidade da massa, recheio e chocolate nobre, sem pasta americana ou modelagens artísticas."
    },
    {
      question: "Tem opção sem glúten ou sem lactose?",
      answer: "No momento não. Todos os nossos produtos são produzidos em cozinha que manipula farinha de trigo e derivados de leite, contendo portanto glúten e lactose."
    },
    {
      question: "Como calculo a quantidade por pessoa?",
      answer: "Para garantir que todos sejam bem servidos, sugerimos o cálculo de 100g de bolo por convidado, acompanhado de 5 a 6 doces finos por pessoa."
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-2 block">Dúvidas Frequentes</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900">
            Perguntas & Respostas
            </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-earth-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-earth-400">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 bg-earth-50 hover:bg-earth-100 transition-colors text-left"
      >
        <span className="font-bold text-earth-900 text-lg pr-4">{question}</span>
        {isOpen ? <ChevronUp className="text-earth-600 shrink-0" /> : <ChevronDown className="text-earth-600 shrink-0" />}
      </button>
      
      <div 
        className={`bg-white px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
      >
        <p className="text-earth-700 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQ;