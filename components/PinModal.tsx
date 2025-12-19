
import React, { useState } from 'react';
import { Translations } from '../types';

interface PinModalProps {
  onClose: () => void;
  onSubmit: (pin: string) => void;
  error: string;
  translations: Translations;
}

const PinModal: React.FC<PinModalProps> = ({ onClose, onSubmit, error, translations }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{translations.modalTitle}</h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <input
              autoFocus
              type="password"
              placeholder={translations.pinPlaceholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-slate-600"
            />
          </div>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium animate-pulse text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-purple-900/20 active:scale-[0.98]"
          >
            {translations.submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PinModal;
