import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Clock, ShieldCheck, Leaf, BookOpen, CheckCircle2, Check } from 'lucide-react';

export interface QuizFunnelProps {
  initialStep?: 'welcome' | 'quiz' | 'analyzing' | 'result' | 'article';
}

interface Question {
  id: number;
  question: string;
  options: {
    letter: string;
    text: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Como tem sido a qualidade das suas noites de sono ultimamente?",
    options: [
      { letter: "A", text: "Durmo de forma profunda e acordo revigorada." },
      { letter: "B", text: "Acordo algumas vezes durante a noite, mas consigo voltar a dormir." },
      { letter: "C", text: "Penso muito antes de dormir e acordo com frequência sentindo calor ou cansaço." },
      { letter: "D", text: "Minhas noites são muito interrompidas e sinto exaustão pela manhã." }
    ]
  },
  {
    id: 2,
    question: "Com que frequência você sente ondas de calor repentinas ou alterações na sua temperatura interna ao longo do dia?",
    options: [
      { letter: "A", text: "Quase nunca sinto nada disso." },
      { letter: "B", text: "Às vezes, especialmente em dias mais quentes ou abafados." },
      { letter: "C", text: "Frequentemente, o que acaba me gerando certo desconforto na rotina." },
      { letter: "D", text: 'Diariamente, parecem "gatilhos" que surgem do nada e me desregulam.' }
    ]
  },
  {
    id: 3,
    question: "Você tem notado mudanças no seu metabolismo, inchaço ou retenção de peso na cintura?",
    options: [
      { letter: "A", text: "Meu metabolismo continua ativo e não sinto inchaço significativo." },
      { letter: "B", text: "Sinto inchaço leve após refeições ou dias mais estressantes." },
      { letter: "C", text: "Sinto o metabolismo visivelmente mais lento e dificuldade para manter a cintura fina." },
      { letter: "D", text: "Ganho peso com facilidade, inchaço diário e sensação de que nada faz emagrecer." }
    ]
  },
  {
    id: 4,
    question: "Qual das seguintes alternativas mais se alinha com o que você busca para o seu bem-estar atual?",
    options: [
      { letter: "A", text: "Eliminar ondas de calor (fogachos) e voltar a dormir a noite toda com sono profundo." },
      { letter: "B", text: "Reativar o metabolismo acelerado e manter a cintura fina mesmo após os 50 anos." },
      { letter: "C", text: "Entender melhor como alinhar a alimentação e a respiração para ter mais leveza e energia." },
      { letter: "D", text: "Encontrar um método prático e guiado para recuperar o equilíbrio hormonal e do corpo." }
    ]
  }
];

export function QuizFunnel({ initialStep = 'welcome' }: QuizFunnelProps) {
  const [step, setStep] = useState<'welcome' | 'quiz' | 'analyzing' | 'result' | 'article'>(initialStep);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [symptomFocus, setSymptomFocus] = useState<'calorao' | 'metabolismo'>('calorao');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step, currentQuestion]);

  const handleStart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedOption(null);
    setStep('quiz');
  };

  const handleAnswer = (letter: string) => {
    setSelectedOption(letter);
    const updatedAnswers = { ...answers, [currentQuestion]: letter };
    setAnswers(updatedAnswers);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        // Determine primary symptom focus
        if (letter === 'B') {
          setSymptomFocus('metabolismo');
        } else if (letter === 'A') {
          setSymptomFocus('calorao');
        } else {
          const q3Ans = updatedAnswers[2];
          if (q3Ans === 'C' || q3Ans === 'D') {
            setSymptomFocus('metabolismo');
          } else {
            setSymptomFocus('calorao');
          }
        }

        setStep('analyzing');
        startAnalysis();
      }
    }, 380);
  };

  const startAnalysis = () => {
    setAnalysisProgress(15);
    const t1 = setTimeout(() => setAnalysisProgress(55), 450);
    const t2 = setTimeout(() => setAnalysisProgress(94), 1000);
    const t3 = setTimeout(() => {
      setAnalysisProgress(100);
      setStep('result');
    }, 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  };

  const handleGoToArticle = () => {
    setStep('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2D2A26] flex flex-col font-sans selection:bg-[#E8DCC4] selection:text-[#1F2937]">
      {/* Top Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-[#EAE5D9] sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9E4A3B] animate-pulse" />
            <span className="font-serif font-black tracking-tight text-xl sm:text-2xl text-[#1E1E1E]">
              Protocolo de Bama
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-stone-500 uppercase tracking-wider">
            {step === 'article' ? (
              <span className="hidden sm:inline-flex items-center gap-1.5 text-stone-600 bg-stone-100 px-3 py-1 rounded-full text-[11px]">
                <BookOpen className="w-3.5 h-3.5 text-[#9E4A3B]" /> Leitura Exclusiva
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-[11px] font-semibold border border-emerald-100">
                <CheckCircle2 className="w-3.5 h-3.5" /> Avaliação Gratuita
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Main Funnel Body */}
      <main className="flex-grow flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {/* STEP 1: WELCOME SCREEN */}
          {step === 'welcome' && (
            <motion.section
              key="welcome"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="w-full max-w-2xl px-5 py-12 sm:py-20 flex flex-col items-center text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2EDE4] text-[#8C3A2B] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 border border-[#E4DCCE]/50">
                <Sparkles className="w-3.5 h-3.5" />
                Qual o seu Índice de Serenidade e Equilíbrio?
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black text-[#1E1E1E] leading-[1.18] mb-6 tracking-tight">
                Como está o seu equilíbrio nesta fase de transição?
              </h1>

              <p className="text-lg sm:text-xl text-[#5A554E] leading-relaxed mb-10 max-w-xl">
                Responda a 4 perguntas rápidas e descubra como o seu estilo de vida atual está influenciando a sua disposição e o seu bem-estar.
              </p>

              <button
                onClick={handleStart}
                className="w-full sm:w-auto px-10 py-5 bg-[#9E4A3B] hover:bg-[#863B2E] text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Começar Teste Gratuito</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#7A746B]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#9E4A3B]" />
                  <span>Leva menos de 1 minuto</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#9E4A3B]" />
                  <span>100% Anônimo & Seguro</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-[#9E4A3B]" />
                  <span>Método Natural</span>
                </div>
              </div>
            </motion.section>
          )}

          {/* STEP 2: QUESTIONS */}
          {step === 'quiz' && (
            <motion.section
              key={`q-${currentQuestion}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.28 }}
              className="w-full max-w-2xl px-5 py-8 sm:py-16 flex flex-col"
            >
              {/* Progress Bar */}
              <div className="w-full mb-8">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#7A746B] mb-2 uppercase tracking-wider">
                  <span>
                    Pergunta {currentQuestion + 1} de {questions.length}
                  </span>
                  <span className="text-[#9E4A3B]">
                    {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full h-2 bg-[#EAE5D9] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#9E4A3B] rounded-full"
                    initial={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-[#1E1E1E] leading-snug mb-8">
                {questions[currentQuestion].question}
              </h2>

              <div className="flex flex-col gap-3.5">
                {questions[currentQuestion].options.map((opt) => {
                  const isSelected = selectedOption === opt.letter;
                  return (
                    <button
                      key={opt.letter}
                      onClick={() => handleAnswer(opt.letter)}
                      className={`text-left p-4 sm:p-5 rounded-xl border-2 transition-all duration-150 flex items-start gap-4 cursor-pointer group ${
                        isSelected
                          ? 'border-[#9E4A3B] bg-[#FAF2F0] shadow-sm scale-[0.99]'
                          : 'border-[#EAE5D9] bg-white hover:border-[#C9BEAA] hover:bg-[#FDFBF7]'
                      }`}
                    >
                      <span
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#9E4A3B] text-white'
                            : 'bg-[#F2EDE4] text-[#6E675D] group-hover:bg-[#E5DDCF]'
                        }`}
                      >
                        {opt.letter}
                      </span>
                      <span className="text-base sm:text-lg text-[#2D2A26] font-medium leading-relaxed pt-0.5">
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.section>
          )}

          {/* STEP 3: ANALYZING TRANSITION */}
          {step === 'analyzing' && (
            <motion.section
              key="analyzing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-lg px-6 py-20 flex flex-col items-center text-center"
            >
              <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 border-4 border-[#EAE5D9] rounded-full" />
                <div className="absolute inset-0 border-4 border-[#9E4A3B] border-t-transparent rounded-full animate-spin" />
                <Sparkles className="w-10 h-10 text-[#9E4A3B] animate-pulse" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#1E1E1E] mb-4">
                Calculando seu perfil...
              </h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold border border-emerald-200 shadow-xs mb-6 max-w-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Identificamos compatibilidade de 94% com o método de Bama.</span>
              </div>
              <div className="w-full bg-[#EAE5D9] h-2.5 rounded-full overflow-hidden max-w-md mb-2">
                <motion.div
                  className="bg-gradient-to-r from-[#BA3726] to-[#9E4A3B] h-full rounded-full transition-all duration-300"
                  style={{ width: `${analysisProgress}%` }}
                />
              </div>
              <span className="text-xs font-semibold text-stone-500">
                {analysisProgress}% concluído
              </span>
            </motion.section>
          )}

          {/* STEP 4: RESULT SCREEN */}
          {step === 'result' && (
            <motion.section
              key="result"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="w-full max-w-2xl px-5 py-12 sm:py-16 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-6 shadow-sm">
                <Check className="w-9 h-9" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
                ✓ Compatibilidade de 94% com o Método de Bama
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#1E1E1E] leading-tight mb-8">
                Análise Concluída!
              </h1>

              <div className="bg-white border-2 border-[#EAE5D9] rounded-2xl p-6 sm:p-8 mb-8 text-left shadow-sm">
                <p className="text-base sm:text-lg text-[#3E3A34] leading-relaxed mb-4">
                  "Com base nas suas respostas, notamos que o seu organismo pode se beneficiar muito de pequenos ajustes na rotina (como o uso de fitoestrógenos naturais e técnicas de desaceleração).
                </p>
                <p className="text-base sm:text-lg text-[#3E3A34] leading-relaxed mb-0 font-medium">
                  Antes de mais nada, preparamos um artigo especial revelando os hábitos que pesquisadores descobriram em mulheres que passam por essa fase com total leveza. Vale a pena a leitura!"
                </p>
              </div>

              <button
                onClick={handleGoToArticle}
                className="w-full sm:w-auto px-10 py-5 bg-[#9E4A3B] hover:bg-[#863B2E] text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Ler Artigo Exclusivo Agora →</span>
              </button>

              <p className="text-xs text-stone-500 mt-4 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Acesso liberado sem custo · Artigo completo
              </p>
            </motion.section>
          )}

          {/* STEP 5: ARTICLE */}
          {step === 'article' && (
            <motion.article
              key="article"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-3xl px-4 sm:px-6 py-10 sm:py-16"
            >
              {/* Personalized compatibility alert */}
              <div className="bg-[#FAF2F0] border border-[#E5DAC6] rounded-xl p-4 sm:p-5 mb-8 flex items-start gap-3.5 text-left">
                <div className="w-9 h-9 rounded-full bg-[#9E4A3B]/10 border border-[#9E4A3B]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#9E4A3B]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#9E4A3B] mb-1">
                    Análise Concluída · Compatibilidade de 94% com o Método de Bama
                  </div>
                  <div className="text-xs sm:text-sm text-[#4A453F] leading-relaxed">
                    {symptomFocus === 'metabolismo'
                      ? 'Identificamos que seu foco prioritário é o metabolismo desacelerado e a retenção de peso. O artigo a seguir revela as práticas diárias que mantêm a cintura fina na vila de Bama sem dietas restritivas.'
                      : 'Identificamos que seu foco prioritário é o alívio das ondas de calor (fogachos) e a insônia. O artigo a seguir detalha o segredo ancestral que devolve o sono profundo e o controle da temperatura interna.'}
                  </div>
                </div>
              </div>

              {/* Categories badge bar */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {['Saúde & Bem-Estar Feminino', 'Disposição', 'Bem-Estar', 'Qualidade de Vida', 'Longevidade'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F0EBE1] text-[#6E675D] uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#9E4A3B] mb-3 flex items-center gap-1.5">
                ✦ Saúde Feminina · Longevidade
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#1E1E1E] leading-[1.2] mb-6">
                {symptomFocus === 'metabolismo'
                  ? 'Análise Concluída: Como as mulheres da tribo de Bama, na China, mantêm o metabolismo acelerado e a cintura fina mesmo após os 50 anos (Sem repor hormônios).'
                  : 'Análise Concluída: O segredo milenar de Bama: Por que as mulheres dessa região da China passam pela menopausa sem sofrer com fogachos ou insônia.'}
              </h1>

              <p className="text-xl sm:text-2xl text-[#5A554E] font-serif leading-relaxed mb-6 font-normal">
                {symptomFocus === 'metabolismo'
                  ? 'Pesquisadores foram até um vilarejo remoto na China e encontraram hábitos surpreendentes que mantêm a taxa metabólica ativa e a vitalidade na maturidade'
                  : 'Pesquisadores foram até um vilarejo remoto na China e encontraram hábitos surpreendentes que chamaram a atenção da comunidade científica'}
              </p>

              {/* Byline */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-stone-500 pb-8 mb-8 border-b border-[#EAE5D9]">
                <span className="font-semibold text-stone-700">Redação Saúde & Bem-Estar</span>
                <span>•</span>
                <span>29 de maio de 2026</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Leitura: ~5 min
                </span>
              </div>

              {/* Cover Image */}
              <figure className="mb-12">
                <div className="aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md border border-[#EAE5D9] bg-stone-100">
                  <img
                    src="/mulher_asiatica_bama.jpg"
                    alt="Mulher asiática sorridente em paisagem natural"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="text-xs sm:text-sm text-[#7A746B] italic mt-3 text-center">
                  Região de Bama, Guangxi — uma das áreas com maior concentração de centenários saudáveis do mundo
                </figcaption>
              </figure>

              {/* Article Content */}
              <div className="prose prose-stone max-w-none text-lg leading-relaxed text-[#33302B]">
                <p className="mb-6">
                  Quando pesquisadores começaram a estudar as populações mais longevas do mundo, um padrão curioso chamou a atenção: em certas regiões da Ásia, as mulheres relatam uma transição para a maturidade muito mais tranquila do que a média observada no Ocidente.
                </p>

                <p className="mb-8">
                  Na província de Bama, no sul da China, por exemplo, a proporção de centenárias ativas é extraordinariamente alta. E o mais intrigante para os estudiosos não é apenas a longevidade em si — mas a qualidade de vida dessas mulheres ao longo do processo.
                </p>

                <blockquote className="my-10 p-6 sm:p-8 bg-[#F5EFE6] border-l-4 border-[#9E4A3B] rounded-r-xl">
                  <p className="text-xl sm:text-2xl font-serif italic text-[#2D2A26] leading-relaxed mb-0">
                    "A diferença não está em um único segredo mágico. Está na soma de pequenos hábitos do dia a dia que, juntos, criam um ambiente interno mais equilibrado."
                  </p>
                </blockquote>

                <p className="mb-8">
                  Cientistas levantam hipóteses sobre o que poderia explicar isso. A alimentação local, rica em vegetais, sementes e raízes específicas, aparece como um fator relevante nos estudos. A rotina física natural — caminhar, trabalhar na terra, se mover constantemente — é outro elemento que pesquisadores apontam com frequência.
                </p>

                <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#1E1E1E] mt-12 mb-5">
                  O Que a Ciência Observou Nessas Populações
                </h2>

                <p className="mb-6">
                  Estudos populacionais publicados em periódicos de nutrição e saúde pública identificaram alguns padrões alimentares e comportamentais que diferenciam essas comunidades. Não se trata de soluções instantâneas, mas de práticas acumuladas ao longo da vida.
                </p>

                <div className="bg-[#FAF5EC] border-2 border-[#E5DAC6] rounded-2xl p-6 sm:p-8 my-10 shadow-sm">
                  <div className="flex items-center gap-2 text-xl font-serif font-black text-[#2A2621] mb-5">
                    <span className="text-2xl">🌿</span>
                    <span>O que os pesquisadores notaram</span>
                  </div>
                  <ul className="space-y-3.5 text-base sm:text-lg text-[#3E3A34] pl-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[#9E4A3B] font-bold text-lg leading-tight">•</span>
                      <span>Consumo de alimentos ricos em nutrientes funcionais e antioxidantes (sementes de linhaça, grão-de-bico, folhas verdes e raízes selecionadas)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#9E4A3B] font-bold text-lg leading-tight">•</span>
                      <span>Rotinas de movimento contínuo ao longo do dia, sem a necessidade de academias ou treinos extenuantes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#9E4A3B] font-bold text-lg leading-tight">•</span>
                      <span>Práticas respiratórias e momentos de quietude integrados naturalmente ao ciclo diário</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#9E4A3B] font-bold text-lg leading-tight">•</span>
                      <span>Uso de infusões botânicas e chás ricos em polifenóis protetores antes do repouso noturno</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#9E4A3B] font-bold text-lg leading-tight">•</span>
                      <span>Relações comunitárias sólidas e senso de pertencimento que reduzem os níveis crônicos de cortisol</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#1E1E1E] mt-12 mb-6">
                  Três Hábitos Que Aparecem Com Consistência Nos Estudos
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="bg-white border border-[#EAE5D9] p-6 rounded-xl shadow-xs">
                    <h3 className="text-xl font-serif font-bold text-[#1E1E1E] mb-2 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#9E4A3B] text-white text-xs flex items-center justify-center font-bold">1</span>
                      Fitoestrógenos Naturais e Modulação Alimentar
                    </h3>
                    <p className="text-base sm:text-lg text-[#4A453F] leading-relaxed mb-0">
                      Alimentos como sementes e leguminosas selecionadas contêm compostos de origem vegetal com estrutura semelhante aos hormônios naturais femininos, auxiliando na regulação da temperatura e suavizando os calores repentinos de forma suave e sem efeitos colaterais.
                    </p>
                  </div>

                  <div className="bg-white border border-[#EAE5D9] p-6 rounded-xl shadow-xs">
                    <h3 className="text-xl font-serif font-bold text-[#1E1E1E] mb-2 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#9E4A3B] text-white text-xs flex items-center justify-center font-bold">2</span>
                      Respiração Diafragmática e Desaceleração Noturna
                    </h3>
                    <p className="text-base sm:text-lg text-[#4A453F] leading-relaxed mb-0">
                      Técnicas de respiração ritmada ativam o sistema nervoso parassimpático, reduzindo os batimentos cardíacos e enviando ao cérebro o sinal de que o corpo está seguro, facilitando o início de um sono profundo e sem interrupções.
                    </p>
                  </div>

                  <div className="bg-white border border-[#EAE5D9] p-6 rounded-xl shadow-xs">
                    <h3 className="text-xl font-serif font-bold text-[#1E1E1E] mb-2 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#9E4A3B] text-white text-xs flex items-center justify-center font-bold">3</span>
                      Gerenciamento do Estresse e Proteção Contra o Cortisol
                    </h3>
                    <p className="text-base sm:text-lg text-[#4A453F] leading-relaxed mb-0">
                      O estresse crônico desequilibra os receptores celulares e piora tanto a insônia quanto a fadiga. As centenárias mantêm rotinas de desaceleração que impedem picos contínuos de cortisol, preservando a energia ao longo do dia.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#1E1E1E] mt-12 mb-4">
                  Isso Se Aplica a Mulheres Brasileiras?
                </h2>
                <p className="mb-8">
                  Muitas pessoas se perguntam se hábitos observados em vilarejos do oriente podem ser adaptados à rotina acelerada das cidades ocidentais. A resposta de nutricionistas e especialistas em medicina integrativa é que os princípios biológicos são universais. O corpo feminino responde de forma semelhante aos mesmos estímulos nutricionais e de relaxamento, independentemente de onde você vive. O segredo está em adaptar esses pilares para ingredientes e rotinas acessíveis no nosso cotidiano.
                </p>

                <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#1E1E1E] mt-12 mb-4">
                  O Que Isso Tem a Ver Com a Fase da Maturidade Feminina?
                </h2>
                <p className="mb-10">
                  Durante a transição da perimenopausa e menopausa, a oscilação nos níveis de estrogênio impacta diretamente a regulação do sono, o controle de temperatura no hipotálamo e a tolerância ao estresse. Quando combinamos modulação nutricional adequada com técnicas comprovadas de desaceleração, o corpo encontra uma nova forma de autorregulação, permitindo que essa fase seja vivida com vitalidade, leveza e confiança.
                </p>

                {/* Social Proof / Reader Feedback */}
                <div className="my-14 pt-10 border-t border-[#EAE5D9]">
                  <div className="flex items-center gap-2 text-2xl font-serif font-black text-[#1E1E1E] mb-8">
                    <span>💬</span>
                    <span>Leitoras comentam</span>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white border border-[#EAE5D9] p-6 rounded-xl shadow-xs">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-base text-[#1E1E1E]">Mariana V. (52 anos, São Paulo - SP)</span>
                        <div className="flex text-amber-500 text-xs">★★★★★</div>
                      </div>
                      <p className="text-base text-[#4A453F] italic leading-relaxed mb-0">
                        "Depois de meses dormindo mal e acordando no meio da noite com calor, comecei a aplicar os hábitos simples ensinados. Em menos de três semanas senti a diferença na minha energia matinal. Recomendo demais!"
                      </p>
                    </div>

                    <div className="bg-white border border-[#EAE5D9] p-6 rounded-xl shadow-xs">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-base text-[#1E1E1E]">Clotilde P. (56 anos, Belo Horizonte - MG)</span>
                        <div className="flex text-amber-500 text-xs">★★★★★</div>
                      </div>
                      <p className="text-base text-[#4A453F] italic leading-relaxed mb-0">
                        "O que mais me chamou a atenção foi como tudo é prático e natural. Sem complicação, sem fórmulas mirabolantes. Faz todo o sentido biológico e minha disposição mudou completamente."
                      </p>
                    </div>

                    <div className="bg-white border border-[#EAE5D9] p-6 rounded-xl shadow-xs">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-base text-[#1E1E1E]">Sandra G. (49 anos, Curitiba - PR)</span>
                        <div className="flex text-amber-500 text-xs">★★★★★</div>
                      </div>
                      <p className="text-base text-[#4A453F] italic leading-relaxed mb-0">
                        "Achei que o cansaço constante fazia parte da idade e que não tinha jeito. Entender o papel do cortisol e da alimentação me deu uma nova perspectiva. Me sinto muito mais tranquila e no controle."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bridge to the E-book Offer */}
                <div className="my-10 p-6 sm:p-8 bg-[#FBF7F0] border-l-4 border-[#9E4A3B] rounded-r-2xl text-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9E4A3B] block mb-2">
                    Da Pesquisa Científica Para a Sua Cozinha
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-[#1E1E1E] mb-3">
                    Como Adaptamos Esse Segredo Chinês em um Passo a Passo Prático
                  </h3>
                  <p className="text-base sm:text-lg text-[#3E3A34] leading-relaxed mb-0">
                    Para que você não precise decifrar centenas de páginas de estudos nem buscar ingredientes inacessíveis, traduzimos e organizamos todos os hábitos, receitas e infusões ancestrais de Bama em um guia digital simples e direto ao ponto: o <strong>Protocolo de Bama</strong>.
                  </p>
                </div>

                {/* Final Call To Action Box (Hotmart - Mini Sales Page) */}
                <div className="my-14 bg-gradient-to-b from-[#231E1A] via-[#1E1915] to-[#14110F] text-white rounded-3xl p-6 sm:p-10 md:p-12 text-center shadow-2xl border border-[#44382E] relative overflow-hidden">
                  {/* Subtle decorative glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#C45543]/15 rounded-full blur-3xl pointer-events-none" />

                  {/* Top Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B2C23] border border-[#E5B583]/40 text-[#F5CBA7] text-xs font-bold uppercase tracking-widest mb-6">
                    <Sparkles className="w-3.5 h-3.5 text-[#E5B583]" />
                    <span>Acesso Exclusivo · Oferta Especial</span>
                  </div>

                  {/* Headline */}
                  <h3
                    className="text-2xl sm:text-4xl font-serif font-black !text-white text-white leading-tight mb-4 max-w-2xl mx-auto"
                    style={{ color: "#ffffff" }}
                  >
                    Quer Explorar Esses Hábitos de Forma Organizada?
                  </h3>

                  {/* Subtitle / Lead */}
                  <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
                    Reunimos todo o passo a passo detalhado, receitas práticas, guia de infusões calmantes e o método diário de respiração e equilíbrio em um material completo e acessível.
                  </p>

                  {/* Deliverables / Value Stack */}
                  <div className="bg-[#181412]/80 border border-[#3A3027] rounded-2xl p-5 sm:p-7 mb-8 text-left max-w-2xl mx-auto">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#E5B583] mb-4 text-center sm:text-left">
                      O Que Você Vai Receber:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="flex items-start gap-3 bg-[#241E1A] p-3.5 rounded-xl border border-[#332A22]">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-white text-sm font-semibold mb-0.5">O Método de Bama Passo a Passo</strong>
                          <span className="text-stone-400 text-xs leading-relaxed">Guia digital completo em PDF para ler no celular, tablet ou computador.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-[#241E1A] p-3.5 rounded-xl border border-[#332A22]">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-white text-sm font-semibold mb-0.5">Planilha de Acompanhamento de Humor e Energia</strong>
                          <span className="text-stone-400 text-xs leading-relaxed">Uma planilha simples para registrar seu progresso diário e identificar padrões — ajuda a perceber as mudanças que acontecem gradualmente.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-[#241E1A] p-3.5 rounded-xl border border-[#332A22]">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-white text-sm font-semibold mb-0.5">Ritual Noturno Anti-Cortisol</strong>
                          <span className="text-stone-400 text-xs leading-relaxed">Técnicas de respiração e relaxamento para noites de sono profundo.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-[#241E1A] p-3.5 rounded-xl border border-[#332A22]">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-white text-sm font-semibold mb-0.5">Plano de Equilíbrio de 14 Dias</strong>
                          <span className="text-stone-400 text-xs leading-relaxed">Alimentos ricos em fitoestrógenos naturais fáceis de incluir na sua rotina.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price Box */}
                  <div className="max-w-md mx-auto mb-8 bg-gradient-to-b from-[#2B231D] to-[#201A15] p-6 rounded-2xl border-2 border-[#D4824B]/50 shadow-inner text-center">
                    <span className="inline-block text-stone-400 text-xs uppercase tracking-widest line-through mb-1">
                      De R$ 97,00
                    </span>
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-stone-300 text-sm font-medium">Por apenas</span>
                      <span className="text-4xl sm:text-5xl font-black text-[#F8E7D1] tracking-tight">
                        R$ 37,90
                      </span>
                    </div>
                    <span className="inline-block text-emerald-400 text-xs font-semibold bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
                      ✓ Pagamento único · Sem mensalidades · Acesso imediato
                    </span>
                  </div>

                  {/* CTA Button */}
                  <div className="max-w-md mx-auto mb-7">
                    <a
                      href="https://pay.hotmart.com/Y98549636E?checkoutMode=10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-5 px-6 bg-gradient-to-r from-[#D94F3D] to-[#BA3726] hover:from-[#E65846] hover:to-[#C63E2D] !text-white text-white text-lg sm:text-xl font-bold rounded-2xl shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-3 cursor-pointer no-underline group"
                      style={{ color: "#ffffff" }}
                    >
                      <span className="!text-white text-white font-black tracking-wide" style={{ color: "#ffffff" }}>
                        QUERO O PROTOCOLO POR R$ 37,90 →
                      </span>
                    </a>
                  </div>

                  {/* Guarantee Box (7 Dias) */}
                  <div className="max-w-xl mx-auto bg-[#171310] border border-[#3E342B] rounded-2xl p-5 mb-6 text-left flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-7 h-7 text-[#E5B583]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold mb-1" style={{ color: "#f9f2f2" }}>
                        Garantia Incondicional de 7 Dias
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-0">
                        Experimente o material por 7 dias. Se você aplicar os hábitos e sentir que eles não fizeram diferença no seu bem-estar, disposição e tranquilidade, basta solicitar o reembolso que devolveremos 100% do seu investimento.
                      </p>
                    </div>
                  </div>

                  {/* Security and Trust Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-stone-400 pt-2 border-t border-[#332A22]">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" /> Compra 100% Segura
                    </span>
                    <span className="hidden sm:inline text-stone-600">•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-emerald-400" /> Acesso Imediato por E-mail
                    </span>
                    <span className="hidden sm:inline text-stone-600">•</span>
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-emerald-400" /> Leitura no Celular e Computador
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </main>

      {/* Pop-up Checkout Modal (if opened) */}
      <AnimatePresence>
        {showCheckoutModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative overflow-hidden"
            >
              <button
                onClick={() => setShowCheckoutModal(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 text-2xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors"
                aria-label="Fechar"
              >
                ✕
              </button>

              <div className="text-xs font-bold uppercase tracking-widest text-[#9E4A3B] mb-2">
                Acesso Imediato
              </div>
              <h3 className="text-2xl font-serif font-black text-stone-900 mb-3">
                Protocolo de Bama: O Guia Completo
              </h3>
              <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                Você terá acesso ao método prático passo a passo, cardápio de modulação natural, receitas calmantes e áudios guiados de desaceleração noturna.
              </p>

              <div className="bg-[#FAF5EC] border border-[#E5DAC6] rounded-xl p-4 mb-6 space-y-2 text-xs sm:text-sm text-stone-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>E-book Digital Completo em PDF para celular e tablet</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Guia de Fitoestrógenos Naturais e Chás Funcionais</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Protocolo de 3 Etapas para Noites Profundas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Garantia incondicional de 7 dias ou seu dinheiro de volta</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://pay.hotmart.com/Y98549636E?checkoutMode=10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#9E4A3B] hover:bg-[#863B2E] !text-white text-white font-bold rounded-xl text-center shadow-lg block transition-colors no-underline"
                  style={{ color: "#ffffff" }}
                >
                  Acessar Protocolo por R$ 37,90
                </a>
                <button
                  onClick={() => setShowCheckoutModal(false)}
                  className="w-full py-2.5 text-xs text-stone-500 hover:text-stone-800 transition-colors"
                >
                  Continuar lendo o artigo
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-stone-400 border-t border-stone-100 pt-3">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" /> Compra 100% Segura
                </span>
                <span>•</span>
                <span>Acesso Imediato por E-mail</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#1C1A18] text-[#A69E94] border-t border-[#2E2B27] py-12 px-4 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium mb-8">
            <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">
              Privacidade
            </Link>
            <span className="text-stone-600">•</span>
            <Link to="/termos-de-uso" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <span className="text-stone-600">•</span>
            <Link to="/contato" className="hover:text-white transition-colors">
              Contato
            </Link>
          </nav>

          <div className="text-xs leading-relaxed max-w-2xl text-stone-400 mb-6">
            <strong className="text-stone-300">Aviso Legal:</strong> As informações contidas neste site têm finalidade estritamente informativa e educativa. Não substituem o diagnóstico, orientação ou tratamento médico profissional. Consulte sempre seu médico ou profissional de saúde qualificado antes de iniciar qualquer mudança em sua rotina de saúde.
          </div>

          <div className="text-xs leading-relaxed max-w-2xl text-stone-500 mb-8">
            Este site não é afiliado ao Facebook nem a qualquer entidade da Meta Inc. Uma vez que você sai do Facebook, a responsabilidade não é deles, mas do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usar resultados reais.
          </div>

          <div className="text-xs text-stone-500 border-t border-stone-800/60 pt-6 w-full text-center">
            © 2026 Protocolo de Bama · Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
