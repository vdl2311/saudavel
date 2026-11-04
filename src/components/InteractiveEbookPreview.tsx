import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Moon,
  Heart,
  Activity
} from 'lucide-react';

interface EbookPage {
  pageNumber: number;
  chapter: string;
  title: string;
  subtitle?: string;
  badge?: string;
  content: React.ReactNode;
}

export function InteractiveEbookPreview() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages: EbookPage[] = [
    // Page 2: Biological Basis
    {
      pageNumber: 2,
      chapter: 'Capítulo 1',
      badge: 'Fundamento Biológico',
      title: 'Menos Estrogênio, Mais Poder?',
      subtitle: 'O paradoxo que os consultórios convencionais raramente explicam',
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>
            Na menopausa, o estrogênio ovariano cai — isso é um fato biológico natural. Mas o paradoxo está no que poucos contam: <strong>seu corpo não desiste tão fácil</strong>.
          </p>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#9E4A3B]" /> As Usinas Secundárias do Corpo:
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600">
              <li>• <strong>Glândulas Adrenais:</strong> continuam produzindo precursores hormonais que o tecido converte.</li>
              <li>• <strong>Receptores Beta:</strong> respondem com altíssima afinidade a fitoestrógenos vegetais.</li>
              <li>• <strong>Hipotálamo:</strong> o "termostato central", só precisa de pequenos estímulos para recalibrar.</li>
            </ul>
          </div>
          <p className="text-stone-600 italic text-xs sm:text-sm">
            Pense assim: é como fornecer ao seu sistema um "atalho biológico inteligente". Não é sobre inundar o corpo com hormônios sintéticos, mas sobre reacender as vias naturais que já existem em você.
          </p>
        </div>
      )
    },

    // Page 3: The 4 Pillars
    {
      pageNumber: 3,
      chapter: 'Capítulo 1',
      badge: 'Mapa do Equilíbrio',
      title: 'Por Que o Estrogênio Importa',
      subtitle: 'E como ele ainda pode agir em você através de 4 frentes principais',
      content: (
        <div className="space-y-3.5">
          <p className="text-xs sm:text-sm text-stone-600 mb-2">
            O estrogênio atua em múltiplos órgãos. Através do Paradoxo, você estimula cada um desses quatro pilares:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/60">
              <div className="flex items-center gap-2 font-bold text-orange-950 text-sm mb-1">
                <Flame className="w-4 h-4 text-orange-600" />
                <span>1. Regulação Térmica</span>
              </div>
              <p className="text-xs text-stone-600 leading-snug">
                Controle das ondas de calor súbitas recalibrando o hipotálamo com compostos botânicos.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200/60">
              <div className="flex items-center gap-2 font-bold text-indigo-950 text-sm mb-1">
                <Moon className="w-4 h-4 text-indigo-600" />
                <span>2. Qualidade do Sono</span>
              </div>
              <p className="text-xs text-stone-600 leading-snug">
                Proteção do sono REM e melhora do descanso noturno sem acordar com suores.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60">
              <div className="flex items-center gap-2 font-bold text-emerald-950 text-sm mb-1">
                <Heart className="w-4 h-4 text-emerald-600" />
                <span>3. Equilíbrio do Humor</span>
              </div>
              <p className="text-xs text-stone-600 leading-snug">
                Redução da irritabilidade súbita através da modulação do eixo cortisol-adrenais.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60">
              <div className="flex items-center gap-2 font-bold text-amber-950 text-sm mb-1">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>4. Densidade & Vitalidade</span>
              </div>
              <p className="text-xs text-stone-600 leading-snug">
                Proteção celular e manutenção da densidade mineral óssea através de micronutrientes.
              </p>
            </div>
          </div>
        </div>
      )
    },

    // Page 5: Natural Strategies
    {
      pageNumber: 5,
      chapter: 'Capítulo 2',
      badge: 'Protocolo Prático',
      title: 'Estratégias Naturais Imediatas',
      subtitle: 'Passos simples que você pode começar a aplicar ainda hoje',
      content: (
        <div className="space-y-3.5 text-stone-700 text-xs sm:text-sm">
          <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl">
            <span className="font-bold text-stone-900 block mb-0.5 text-sm">
              🌱 1. Aposte nos Fitoestrógenos Selecionados
            </span>
            <p className="text-stone-600 leading-relaxed mb-1">
              Linhaça moída dourada, gergelim e leguminosas fermentadas possuem lignanas que se conectam aos receptores celulares.
            </p>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
              Dica: 1 colher de sopa de linhaça no café da manhã reduz picos térmicos em até 40%.
            </span>
          </div>

          <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl">
            <span className="font-bold text-stone-900 block mb-0.5 text-sm">
              💃 2. Desperte as Adrenais com Movimento Suave
            </span>
            <p className="text-stone-600 leading-relaxed mb-0">
              Exercícios suaves de 15 a 20 minutos (caminhada ou dança livre) estimulam a conversão de DHEA em estrona sem sobrecarregar o coração.
            </p>
          </div>

          <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl">
            <span className="font-bold text-stone-900 block mb-0.5 text-sm">
              🌿 3. O Poder dos Sentidos para o Hipotálamo
            </span>
            <p className="text-stone-600 leading-relaxed mb-0">
              Essências botânicas (como gerânio e sálvia) sinalizam segurança ao sistema límbico, acalmando o "termostato interno" antes de dormir.
            </p>
          </div>
        </div>
      )
    }
  ];

  const currentPageData = pages[currentPage];

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 bg-[#1B1613] border border-[#3E342B] rounded-3xl p-4 sm:p-7 shadow-2xl text-left">
      {/* Top Header with Badge (Botão Ver PDF Original removido) */}
      <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-[#332A22]">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#E5B583]">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E5B583]">
                Degustação Interativa
              </span>
              <span className="text-[10px] bg-emerald-950/80 text-emerald-400 font-semibold px-2 py-0.5 rounded-full border border-emerald-800/60">
                Amostra Gratuita
              </span>
            </div>
            <h4 className="text-white !text-white font-serif font-bold text-base sm:text-lg mb-0" style={{ color: '#ffffff' }}>
              Folheie o E-book: Protocolo de Bama
            </h4>
          </div>
        </div>
      </div>

      {/* Chapter shortcuts navigation */}
      <div className="flex items-center gap-2 pb-3 mb-4 text-xs">
        {pages.map((p, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            className={`px-3.5 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer text-xs ${
              currentPage === idx
                ? 'bg-[#E5B583] text-stone-950 font-bold shadow-xs'
                : 'bg-[#251E19] text-stone-400 hover:text-stone-200 hover:bg-[#312720]'
            }`}
          >
            Pág {p.pageNumber}
          </button>
        ))}
      </div>

      {/* Simulated Book Container */}
      <div className="relative bg-[#FAF8F5] text-stone-900 rounded-2xl p-5 sm:p-7 shadow-xl border border-stone-300/80 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between overflow-hidden">
        {/* Subtle page spine effect on the left */}
        <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-stone-400/25 to-transparent pointer-events-none" />

        {/* Top Page Meta */}
        <div>
          <div className="flex items-center justify-between text-xs text-stone-500 pb-3 mb-4 border-b border-stone-200">
            <span className="font-semibold uppercase tracking-wider text-[#9E4A3B]">
              {currentPageData.chapter} · {currentPageData.badge}
            </span>
            <span className="font-mono text-xs font-bold text-stone-600 bg-stone-200/80 px-2.5 py-0.5 rounded-full">
              Página {currentPageData.pageNumber} de 36
            </span>
          </div>

          {/* Page Animated Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.22 }}
              className="space-y-4"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-black text-stone-900 leading-snug">
                  {currentPageData.title}
                </h3>
                {currentPageData.subtitle && (
                  <p className="text-stone-600 text-xs sm:text-sm font-medium mt-1">
                    {currentPageData.subtitle}
                  </p>
                )}
              </div>

              {currentPageData.content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Reader Navigation */}
        <div className="pt-5 mt-6 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              currentPage === 0
                ? 'opacity-40 cursor-not-allowed text-stone-400'
                : 'bg-stone-200 hover:bg-stone-300 text-stone-800 cursor-pointer'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Página Anterior</span>
          </button>

          <span className="text-xs text-stone-500 font-medium hidden sm:inline">
            Amostra digital interativa
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === pages.length - 1}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              currentPage === pages.length - 1
                ? 'opacity-40 cursor-not-allowed text-stone-400'
                : 'bg-[#9E4A3B] hover:bg-[#863B2E] text-white shadow-xs cursor-pointer'
            }`}
          >
            <span>Próxima Página</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reader footer note */}
      <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-stone-400 px-1">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#E5B583]" />
          Clique nos botões para folhear a amostra
        </span>
        <span className="text-stone-500">
          PDF Completo: 36 páginas com cardápios e infusões
        </span>
      </div>
    </div>
  );
}
