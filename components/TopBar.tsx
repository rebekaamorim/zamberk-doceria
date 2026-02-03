import React from 'react';
import { CalendarClock } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#3e2d26] text-white py-2 px-4 text-center text-xs md:text-sm font-medium flex items-center justify-center gap-2">
      <CalendarClock className="w-4 h-4 text-yellow-500" />
      <span>Agenda Limitada: Encomendas requerem mínimo de 30 dias de antecedência.</span>
    </div>
  );
};

export default TopBar;