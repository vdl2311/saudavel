import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-serif font-black text-brand-red tracking-tighter">
            PROTOCOLO de BAMA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600 uppercase text-xs tracking-widest">
          <Link to="/" className="hover:text-brand-red transition-colors">Início</Link>
          <Link to="/alimentacao" className="hover:text-brand-red transition-colors">Alimentação</Link>
          <Link to="/movimento" className="hover:text-brand-red transition-colors">Movimento</Link>
          <Link to="/mente" className="hover:text-brand-red transition-colors">Mente</Link>
          <Link to="/sono" className="hover:text-brand-red transition-colors">Sono</Link>
          <Link to="/sobre" className="hover:text-brand-red transition-colors font-bold text-brand-red">Sobre</Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-50 border-b border-gray-200"
          >
            <nav className="flex flex-col p-6 gap-6 font-bold text-gray-800 uppercase text-sm tracking-widest">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Início</Link>
              <Link to="/alimentacao" onClick={() => setIsMenuOpen(false)}>Alimentação</Link>
              <Link to="/movimento" onClick={() => setIsMenuOpen(false)}>Movimento</Link>
              <Link to="/mente" onClick={() => setIsMenuOpen(false)}>Mente</Link>
              <Link to="/sono" onClick={() => setIsMenuOpen(false)}>Sono</Link>
              <Link to="/sobre" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-800 py-20 px-4 text-gray-400">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
      <div className="col-span-1 md:col-span-1">
        <span className="text-2xl font-serif font-black text-white block mb-6">
          Protocolo de Bama
        </span>
        <p className="text-sm leading-relaxed max-w-xs">
          Portal focado em longevidade, vitalidade e segredos da saúde natural inspirados nas Zonas Azuis do mundo.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 uppercase text-[10px] tracking-[0.2em]">Navegação</h4>
        <ul className="space-y-3 text-sm">
          <li><Link to="/alimentacao" className="hover:text-white transition-colors">Alimentação</Link></li>
          <li><Link to="/movimento" className="hover:text-white transition-colors">Exercícios</Link></li>
          <li><Link to="/mente" className="hover:text-white transition-colors">Mente & Foco</Link></li>
          <li><Link to="/sono" className="hover:text-white transition-colors">Saúde do Sono</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 uppercase text-[10px] tracking-[0.2em]">Institucional</h4>
        <ul className="space-y-3 text-sm">
          <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
          <li><Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link></li>
          <li><Link to="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 uppercase text-[10px] tracking-[0.2em]">Importante</h4>
        <p className="text-xs italic leading-relaxed opacity-60">
          Este conteúdo faz parte do Protocolo de Bama, uma curadoria de hábitos para longevidade. Consulte sempre um profissional de saúde antes de mudar sua rotina.
        </p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800/50 text-center text-[10px] tracking-widest uppercase">
      © 2024 Protocolo de Bama. Todos os direitos reservados.
    </div>
  </footer>
);

export const AdSenseDisclaimer = () => (
    <div className="mt-20 p-10 border border-gray-100 rounded-sm text-center bg-gray-50/50">
        <p className="text-xs text-text-muted uppercase tracking-[0.1em] leading-relaxed max-w-2xl mx-auto">
            Este conteúdo faz parte do <strong>Protocolo de Bama</strong>, uma curadoria de hábitos para longevidade. 
            O conteúdo deste site é Meramente Informativo. Consulte sempre um profissional de saúde antes de mudar sua rotina ou iniciar qualquer protocolo.
        </p>
    </div>
);

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="font-sans text-text-main leading-relaxed bg-brand-bg selection:bg-red-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
