import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Privacy from './Privacy';
import Terms from './Terms';

const questions = [
  {
    id: 'q1_balance',
    question: 'Como você descreveria a busca por equilíbrio na sua rotina atual?',
    options: [
      'Consigo manter uma rotina harmoniosa e equilibrada.',
      'Busco formas de lidar melhor com o ritmo intenso do dia a dia.',
      'Sinto que é o momento de priorizar minha energia e bem-estar.'
    ]
  },
  {
    id: 'q2_interaction',
    question: 'Ao interagir com as pessoas próximas, qual aspecto você mais deseja fortalecer?',
    options: [
      'Desejo manter a conexão positiva que já cultivamos.',
      'Gostaria de ter mais disposição para momentos de qualidade.',
      'Busco resgatar a admiração e a troca genuína no cotidiano.'
    ]
  },
  {
    id: 'q3_energy',
    question: 'Com que frequência você busca renovar suas energias para evitar o desgaste da semana?',
    options: [
      'Regularmente, priorizo meus momentos de pausa.',
      'Às vezes, sinto que preciso de ferramentas melhores para relaxar.',
      'Frequentemente sinto que o peso da rotina exige um novo método de cuidado.'
    ]
  },
  {
    id: 'q4_tranquility',
    question: 'Qual é a sua facilidade em cultivar momentos de tranquilidade e presença?',
    options: [
      'Tenho facilidade em criar pausas revigorantes.',
      'O ritmo acelerado tem me feito adiar esses momentos de cuidado.',
      'Busco aprender técnicas que facilitem essa reconexão diária.'
    ]
  },
  {
    id: 'q5_longevity',
    question: 'Pensando na sua longevidade e bem-estar, qual é o seu foco principal agora?',
    options: [
      'Preservar minha saúde e os resultados que já conquistei.',
      'Encontrar formas naturais de elevar minha vitalidade e disposição.',
      'Adotar um método comprovado que traga mais harmonia física e mental.'
    ]
  },
  {
    id: 'q6_mindbody',
    question: 'Você acredita que o equilíbrio entre corpo e mente é a chave para uma vida mais leve?',
    options: [
      'Sim, acredito que métodos integrativos trazem resultados duradouros.',
      'Estou aberto a descobrir como o sistema nervoso influencia meu bem-estar.',
      'Busco soluções que vão além do comum para transformar minha rotina.'
    ]
  }
];

function SalesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // Quiz State
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [userName, setUserName] = useState('');
  const [diagnosis, setDiagnosis] = useState({ severity: '', impact: '' });
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleAnswer = async (questionId: string, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    if (quizStep < questions.length) {
      setQuizStep(quizStep + 1);
    }
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) return;

    // Calcular o nível de alerta baseado nas respostas
    let score = 0;
    Object.keys(answers).forEach((qId) => {
      const q = questions.find(q => q.id === qId);
      if (q) {
        const optionIndex = q.options.indexOf(answers[qId]);
        score += optionIndex;
      }
    });

    let severityLevel = "";
    let impactText = "";

    if (score < 4) {
      severityLevel = "Alerta Leve de Distanciamento";
      impactText = "um acúmulo de tensões iniciais, que já começou a esfriar um pouco a sua conexão a dois";
    } else if (score < 9) {
      severityLevel = "Desgaste Moderado na Rotina";
      impactText = "uma sobrecarga de rotina que está limitando as suas demonstrações de carinho e dificultando uma convivência mais leve no relacionamento";
    } else {
      severityLevel = "Sinal Máximo: Risco Crítico de Desgaste Relacional";
      impactText = "uma forte exaustão interna acumulada, o que frequentemente resulta em respostas ríspidas, perda de intimidade e um forte distanciamento emocional do parceiro";
    }

    setDiagnosis({ severity: severityLevel, impact: impactText });

    setIsGenerating(true);
    setLoadingMessage('Analisando momento do relacionamento...');
    
    setTimeout(() => {
      setLoadingMessage('Verificando os níveis de desgaste da rotina...');
    }, 1500);

    setTimeout(() => {
      setLoadingMessage(`Gerando o protocolo de reconexão para ${userName}...`);
    }, 3000);

    setTimeout(() => {
      setIsGenerating(false);
      setShowResult(true);
    }, 4500);
  };

  useEffect(() => {
    if (showContent) {
      window.scrollTo(0, 0);
    }
  }, [showContent]);

  useEffect(() => {
    const handleScroll = () => {
      if (showContent && window.scrollY > 800) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showContent]);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="font-sans text-[#111] bg-white min-h-screen relative overflow-x-hidden">
      {!showContent && !isGenerating && !showResult && (
        <div className="max-w-[800px] mx-auto px-4 py-12">
          {!quizStarted ? (
            <div className="text-center bg-white p-8 md:p-12 border-4 border-gray-200 rounded-xl shadow-xl">
              <h1 className="text-3xl md:text-5xl font-serif font-black text-cb-red leading-tight mb-6">
                Descubra Novos Caminhos para sua Vitalidade e Conexão
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 font-bold mb-8">
                Responda a 6 perguntas rápidas e entenda como o equilíbrio do seu sistema nervoso pode elevar sua energia e harmonia diária.
              </p>
              
              <button
                onClick={() => setQuizStarted(true)}
                className="btn-cta-cb"
              >
                COMEÇAR TESTE AGORA &raquo;
              </button>
              <p className="mt-4 text-sm text-gray-500 font-bold">100% Gratuito e Seguro.</p>
            </div>
          ) : (
            <div className="bg-white p-8 md:p-12 border-4 border-gray-200 rounded-xl shadow-xl">
              <div className="mb-8">
                <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cb-red transition-all duration-500"
                    style={{ width: `${Math.min((quizStep + 1) * (100 / (questions.length + 1)), 100)}%` }}
                  ></div>
                </div>
                <div className="text-center mt-2 font-bold text-gray-500">
                  {quizStep < questions.length ? `Pergunta ${quizStep + 1} de ${questions.length}` : 'Etapa Final'}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {quizStep < questions.length ? (
                  <motion.div
                    key={quizStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8 text-black">
                      {questions[quizStep].question}
                    </h2>

                    <div className="flex flex-col gap-4">
                      {questions[quizStep].options?.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleAnswer(questions[quizStep].id, option)}
                          className="w-full text-left p-4 border-2 border-gray-300 rounded-lg text-xl font-bold bg-gray-50 hover:bg-yellow-50 hover:border-yellow-400 transition-all"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="name-step"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-6 text-black">
                      Para finalizar e gerar seu diagnóstico personalizado, qual o seu primeiro nome?
                    </h2>
                    <form onSubmit={handleNameSubmit} className="flex flex-col gap-4">
                      <input 
                        type="text" 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} 
                        placeholder="Digite seu nome aqui" 
                        className="w-full p-4 border-2 border-gray-300 rounded-lg text-xl font-bold focus:border-cb-red focus:outline-none text-center"
                        required
                      />
                      <button type="submit" className="btn-cta-cb mt-4">
                        GERAR MEU DIAGNÓSTICO &raquo;
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      )}

      {isGenerating && (
        <div className="max-w-[600px] mx-auto px-4 py-32 text-center">
          <div className="bg-white p-12 border-4 border-gray-200 rounded-xl shadow-xl">
            <div className="text-6xl mb-6 animate-spin">⏳</div>
            <h2 className="text-3xl font-serif font-black text-black mb-4">Analisando...</h2>
            <p className="text-xl font-bold text-cb-red">{loadingMessage}</p>
          </div>
        </div>
      )}

      {showResult && !showContent && (
        <div className="max-w-[800px] mx-auto px-4 py-12">
          <div className="bg-white p-8 md:p-12 border-4 border-red-600 rounded-xl shadow-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-600 mb-2 uppercase">Atenção {userName ? `${userName}, ` : ''}Resultado Concluído</h2>
            <h1 className="text-3xl md:text-5xl font-serif font-black text-cb-red leading-tight mb-8">
              Identificamos um {diagnosis.severity || 'Risco de Desgaste Relacional'}
            </h1>
            
            <div className="text-left text-xl space-y-6 mb-10 bg-yellow-50 p-6 border-l-4 border-yellow-400">
              <p>
                <strong>{userName || 'Você'}</strong>, o cruzamento das suas respostas confirmou a verdadeira causa raiz.
              </p>
              <p>
                O seu sistema indicou <strong>{diagnosis.impact || "o efeito do acúmulo de tensão diária"}</strong>.
              </p>
              <p>
                A boa notícia é que você não precisa de mais cobranças, discussões desgastantes ou terapias intermináveis. O que você precisa é agir na base da sua convivência.
              </p>
              <p className="font-bold text-cb-red">
                Preparamos uma apresentação urgente que revela como você pode começar a reverter isso ainda hoje aplicando pequenos hábitos de harmonia.
              </p>
            </div>

            <button
              onClick={() => setShowContent(true)}
              className="btn-cta-cb"
            >
              LER A APRESENTAÇÃO AGORA &raquo;
            </button>
          </div>
        </div>
      )}

      {showContent && (
        <div className="relative z-10 pb-20">
          {/* ─── TITLE SECTION ─────────────────────────────── */}
          <section className="pt-10 pb-8 px-4 bg-white">
            <div className="container-custom text-center">
              <h1 className="text-4xl md:text-6xl font-serif font-black text-cb-red leading-tight mb-4">
                O Segredo de Bama: Como Casais Centenários Mantêm a Admiração e a Vitalidade por Décadas
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
                Descubra os hábitos de convivência e bem-estar de uma das vilas mais longevas do mundo para renovar a conexão e a leveza no seu relacionamento.
              </h2>
              
              <div className="mt-10">
                <a href="https://pay.hotmart.com/L105426143X?checkoutMode=10" className="btn-cta-cb text-2xl py-6">
                  QUERO CONHECER O PROTOCOLO DE BAMA
                </a>
                <img src="https://cdn.clickbank.net/custom/images/trust_seals/secure_checkout.png" alt="Secure Checkout" className="mx-auto mt-4 h-12 opacity-50 grayscale" />
              </div>
            </div>
          </section>

          {/* ─── TEXT SALES LETTER ───────────────────────────── */}
          <section className="py-12 bg-gray-50 border-t border-gray-200">
            <div className="container-custom text-lg md:text-xl leading-relaxed space-y-8">
              
              <h2 className="text-3xl md:text-4xl font-serif font-black text-black text-center mb-10">
                O Resgate da Admiração Mútua
              </h2>

              <p>
                Muitas vezes, o desgaste da rotina e o acúmulo de tensões diárias acabam esfriando a admiração entre o casal. Parece que a pressa do dia a dia deixa pouco espaço para a paciência, o olhar atento e os momentos de verdadeira conexão a dois.
              </p>
              <p>
                É comum sentir que a falta de disposição individual reflete diretamente na harmonia da casa. Quando não nos sentimos bem com nossa própria vitalidade, torna-se mais difícil cultivar a leveza necessária para um relacionamento duradouro.
              </p>

              <hr className="my-12 border-gray-300" />

              <h2 className="text-3xl md:text-4xl font-serif font-black text-cb-red text-center mb-8">
                A Sabedoria dos Casais de Bama
              </h2>

              <p>
                No topo das montanhas, na isolada Vila de Bama, pesquisadores encontraram algo que vai além da longevidade física: o verdadeiro código da convivência harmoniosa. Lá, casais centenários vivem com uma energia e uma cumplicidade que parecem imunes ao tempo.
              </p>

              <p>
                O segredo desses relacionamentos está no equilíbrio biológico e social. Eles cultivam pequenos hábitos diários de autocuidado que preservam a serenidade e a autoconfiança. Ao cuidar da harmonia interna, o semblante responde de forma favorável, permitindo interações muito mais leves e magnéticas.
              </p>

              <hr className="my-12 border-gray-300" />

              <h2 className="text-3xl md:text-4xl font-serif font-black text-cb-red text-center mb-8">
                O Impacto do Bem-Estar na Relação
              </h2>

              <p>
                Quando priorizamos o equilíbrio do nosso organismo, os benefícios transbordam para quem amamos:
              </p>

              <div className="bg-white p-8 border-l-8 border-cb-red shadow-md my-8">
                <ul className="pain-list space-y-4">
                  <li><strong>Presença e Alegria:</strong> Uma disposição renovada permite aproveitar melhor o tempo juntos.</li>
                  <li><strong>Leveza no Olhar:</strong> O autocuidado ajuda a reduzir a tensão que muitas vezes gera conflitos desnecessários.</li>
                  <li><strong>Confiança Natural:</strong> Sentir-se bem consigo mesma é o primeiro passo para resgatar o magnetismo no relacionamento.</li>
                </ul>
              </div>

              <hr className="my-12 border-gray-300" />

              <h2 className="text-3xl md:text-4xl font-serif font-black text-black text-center mb-8">
                O Protocolo de Bama Para Casais
              </h2>

              <p>
                Este manual prático de harmonização da rotina ensina você a equilibrar seu ambiente e cultivar a admiração de dentro para fora.
              </p>

              <ul className="check-list bg-white p-8 border border-green-500 rounded-lg shadow-sm my-8 space-y-4">
                <li><strong>O Ritual Matinal de Conexão:</strong> Como despertar sua sensação de bem-estar para começar o dia com mais paciência e disposição.</li>
                <li><strong>Suporte à Vitalidade Natural:</strong> Hábitos ancestrais que favorecem o conforto do organismo e a leveza do corpo.</li>
                <li><strong>A Linguagem da Convivência:</strong> Como sua nova energia vai se refletir naturalmente na sua presença e no seu relacionamento.</li>
              </ul>

              <div className="text-center my-12">
                <a href="https://pay.hotmart.com/L105426143X?checkoutMode=10" className="btn-cta-cb">
                  QUERO O PROTOCOLO DE BAMA AGORA
                </a>
              </div>

              <hr className="my-12 border-gray-300" />

              <h2 className="text-3xl md:text-4xl font-serif font-black text-black text-center mb-8">
                Histórias de Quem Transformou a Rotina
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-3 text-yellow-500 text-2xl">★★★★★</div>
                  <p className="italic text-gray-700 mb-4">"Eu achava que meu relacionamento estava esfriando pela rotina. Depois que passei a aplicar os hábitos de Bama, acordei com uma leveza que há muito tempo não sentia. Meu parceiro notou a mudança na minha disposição e nossa conexão melhorou muito!"</p>
                  <p className="font-bold text-black">— Márcia T.</p>
                </div>
              </div>

              <div className="text-center my-12">
                <a href="https://pay.hotmart.com/L105426143X?checkoutMode=10" className="btn-cta-cb">
                  SIM! QUERO OS MESMOS RESULTADOS
                </a>
              </div>

              <hr className="my-12 border-gray-300" />

              <h2 className="text-3xl md:text-4xl font-serif font-black text-black text-center mb-8">
                Bônus Exclusivos (Apenas Hoje)
              </h2>

              <div className="bonus-card">
                <h3 className="text-2xl font-black text-cb-red mb-2">BÔNUS #1: Checklist - A Geladeira Magnética</h3>
                <p>O que nunca pode faltar na sua cozinha para manter o brilho e a energia.</p>
              </div>

              <div className="bonus-card">
                <h3 className="text-2xl font-black text-cb-red mb-2">BÔNUS #2: Guia - Linguagem Corporal de Bama</h3>
                <p>O poder do olhar e da presença calma para atrair e manter a conexão.</p>
              </div>

              <hr className="my-12 border-gray-300" />

              <div className="guarantee-box my-12 flex flex-col md:flex-row items-center gap-8 text-left">
                <div className="w-32 h-32 flex-shrink-0 bg-yellow-400 rounded-full flex flex-col items-center justify-center border-4 border-black shadow-lg">
                  <span className="text-5xl font-black text-black leading-none">7</span>
                  <span className="text-sm font-bold text-black uppercase tracking-widest mt-1">Dias</span>
                </div>
                <div>
                  <h2 className="text-3xl font-black text-black mb-4">Experiência de 7 Dias</h2>
                  <p className="text-xl">
                    Explore o Protocolo de Bama e sinta os benefícios na sua rotina. Se em uma semana você não perceber uma melhora na sua sensação de bem-estar e na harmonia do seu dia a dia, devolvemos 100% do seu investimento.
                  </p>
                </div>
              </div>

              <div className="text-center bg-yellow-50 p-10 border-4 border-yellow-400 rounded-xl my-12">
                <p className="text-2xl line-through text-gray-500 mb-2">Preço Normal: R$ 197,00</p>
                <p className="text-3xl font-bold mb-4">Preço Hoje:</p>
                <p className="text-6xl md:text-8xl font-black text-cb-red mb-8">R$ 37,90</p>
                
                <a href="https://pay.hotmart.com/L105426143X?checkoutMode=10" className="btn-cta-cb text-2xl py-6">
                  SIM! QUERO ACESSAR O PROTOCOLO &raquo;
                </a>
                <p className="mt-4 font-bold text-gray-600">Pagamento Único. Acesso Imediato.</p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl md:text-4xl font-serif font-black text-black text-center mb-8 mt-16">
                Perguntas Frequentes
              </h2>
              <div className="space-y-4">
                {[
                  { q: "O protocolo é difícil de seguir?", a: "Não. Ele foi desenhado para rotinas modernas e ocupadas, focado em pequenos ajustes diários." },
                  { q: "Preciso comprar suplementos caros?", a: "Não. É totalmente focado em ações simples e em um estilo de vida natural." },
                  { q: "Em quanto tempo vejo resultados?", a: "A melhoria da harmonia na convivência e da própria disposição muitas vezes se inicia logo nos primeiros dias de mudança, mas vale lembrar que cada organismo e cada relacionamento reage no próprio ritmo." },
                  { q: "Como recebo o material?", a: "Imediatamente após a confirmação do pagamento, você recebe um e-mail especial com o link para baixar o manual completo e seus bônus." }
                ].map((item, i) => (
                  <div key={i} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => toggleFaq(i)}
                      className="w-full text-left p-6 font-bold text-xl flex justify-between items-center hover:bg-gray-50"
                    >
                      {item.q}
                      <span className="text-cb-red text-2xl font-black">{openFaq === i ? '−' : '+'}</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6 text-lg text-gray-700">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </section>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm font-sans relative z-10">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="mb-4 font-bold text-white tracking-widest uppercase">
            Protocolo de Bama
          </p>
          <p className="mb-6 leading-relaxed">
            Isenção de Responsabilidade: Este conteúdo promove hábitos de estilo de vida e bem-estar inspirados em culturas longevas. Não substitui aconselhamento médico, psicológico ou terapias de casal. Os resultados podem variar entre indivíduos. Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. A Hotmart é a plataforma de pagamentos e não endossa as declarações ou promessas deste produto.
          </p>
          <div className="flex justify-center gap-6 font-bold uppercase tracking-widest">
            <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-white transition-colors">Termos</Link>
          </div>
          <p className="mt-8">© 2024 Protocolo de Bama. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Sticky CTA */}
      {showSticky && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t-4 border-cb-red p-4 z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
          <div className="max-w-[800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-black text-xl text-black">Acesse o Protocolo de Bama</p>
              <p className="text-cb-red font-bold">Apenas R$ 37,90</p>
            </div>
            <a href="https://pay.hotmart.com/L105426143X?checkoutMode=10" className="btn-cta-cb m-0 py-4 px-8 text-xl w-full md:w-auto">
              QUERO MEU ACESSO AGORA &raquo;
            </a>
          </div>
        </div>
      )}

    </div>
  );
}

export default function App() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
      setCookieConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setCookieConsent(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalesPage />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/termos-de-uso" element={<Terms />} />
      </Routes>

      {/* Cookie Banner */}
      {!cookieConsent && (
        <div 
          style={{ 
            position: 'fixed', 
            bottom: 0, 
            left: 0,
            right: 0,
            width: '100%', 
            background: '#111', 
            color: '#fff', 
            padding: '20px', 
            textAlign: 'center', 
            zIndex: 10000, 
            borderTop: '4px solid #cc0000'
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
            <p style={{ margin: 0, lineHeight: '1.5' }}>
              Este site utiliza cookies para melhorar sua experiência. 
              Ao continuar, você concorda com nossa <Link to="/privacidade" style={{ color: '#fff200', textDecoration: 'underline', fontWeight: 'bold' }}>Política de Privacidade</Link>.
            </p>
            <button 
              onClick={acceptCookies} 
              style={{ 
                background: '#cc0000', 
                color: 'white', 
                border: 'none', 
                padding: '10px 30px', 
                cursor: 'pointer', 
                borderRadius: '4px',
                fontWeight: 'bold',
                fontSize: '16px',
                textTransform: 'uppercase'
              }}
            >
              Aceitar
            </button>
          </div>
        </div>
      )}
    </Router>
  );
}
