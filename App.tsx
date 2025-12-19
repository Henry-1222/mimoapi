
import React, { useState, useCallback } from 'react';
import { Language } from './types';
import { TRANSLATIONS, VALID_PINS } from './constants';
import PinModal from './components/PinModal';
import ActionCard from './components/ActionCard';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('EN');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const t = TRANSLATIONS[lang];

  const toggleLanguage = () => {
    setLang(prev => (prev === 'EN' ? 'ZH' : 'EN'));
  };

  const handlePinSubmit = (pin: string) => {
    if (VALID_PINS.includes(pin)) {
      setIsUnlocked(true);
      setIsModalOpen(false);
      setErrorMessage('');
    } else {
      setErrorMessage(t.errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-slate-800 transition-colors duration-500">
      {/* Language Toggle Header */}
      <div className="absolute top-6 right-6">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm"
        >
          {t.toggleLang}
        </button>
      </div>

      {/* Main Heading Section */}
      <div className="text-center mb-16 space-y-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
          {t.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-400 font-light italic">
          {t.subtitle}
        </p>
      </div>

      {/* Central Content */}
      <div className="w-full max-w-6xl">
        {isUnlocked ? (
          <div className="flex flex-col items-center justify-center space-y-8 animate-in zoom-in duration-500">
            <div className="p-12 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl shadow-2xl text-center max-w-lg">
              <h2 className="text-3xl font-semibold text-emerald-400 mb-4">
                Access Granted
              </h2>
              <p className="text-slate-300 text-lg">
                {t.successMessage}
              </p>
              <button 
                onClick={() => setIsUnlocked(false)}
                className="mt-8 text-sm text-slate-500 hover:text-white transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {/* Left Card */}
            <ActionCard
              title={t.pinlessCard}
              onClick={() => window.open('https://aistudio.xiaomimimo.com', '_blank')}
              className="bg-blue-600/20 hover:bg-blue-600/30 border-blue-500/30"
            />

            {/* Middle Card */}
            <ActionCard
              title={t.pinRequiredCard}
              onClick={() => setIsModalOpen(true)}
              className="bg-purple-600/20 hover:bg-purple-600/30 border-purple-500/30"
            />

            {/* Right Card */}
            <ActionCard
              title={t.developersCard}
              onClick={() => window.open('https://platform.xiaomimimo.com', '_blank')}
              className="bg-amber-600/20 hover:bg-amber-600/30 border-amber-500/30"
            />
          </div>
        )}
      </div>

      {/* PIN Modal */}
      {isModalOpen && (
        <PinModal
          onClose={() => {
            setIsModalOpen(false);
            setErrorMessage('');
          }}
          onSubmit={handlePinSubmit}
          error={errorMessage}
          translations={t}
        />
      )}

      {/* Footer Info */}
      <footer className="mt-20 text-slate-500 text-sm opacity-50">
        &copy; {new Date().getFullYear()} MiMo API. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
