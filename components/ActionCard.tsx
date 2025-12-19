
import React from 'react';

interface ActionCardProps {
  title: string;
  onClick: () => void;
  className?: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ title, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative group h-48 flex items-center justify-center p-8 
        rounded-2xl border transition-all duration-300 transform 
        hover:-translate-y-1 hover:shadow-2xl active:scale-95
        backdrop-blur-md overflow-hidden ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="text-xl font-medium text-center leading-tight drop-shadow-md">
        {title}
      </span>
      <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </button>
  );
};

export default ActionCard;
