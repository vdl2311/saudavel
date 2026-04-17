import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Privacy from './Privacy';
import Terms from './Terms';

const questions = [
  {
    id: 'morning_feeling',
    question: 'Como você se sente nos primeiros 15 minutos após acordar?',
    options: [
      'Disposta e com a mente clara.',
      'Pesada, como se precisasse de mais 5 horas de sono.',
      'Irritada com o barulho ou com as obrigações do dia.'
    ]
  },
  {
    id: 'vitality_signal',
    question: 'Ao se olhar no espelho, o que você mais nota no seu rosto ultimamente?',
    options: [
      'Um brilho natural e olhar descansado.',
      'Olheiras persistentes ou pele sem viço ("opaca").',
      'Inchaço matinal que demora a passar.'
    ]
  },
  {
    id: 'belly_knot',
    question: 'Com que frequência você sente que sua região abdominal fica "estufada" ou desconfortável após as refeições?',
    options: [
      'Raramente, me sinto leve.',
      'Às vezes, dependendo do que eu como.',
      'Quase sempre; sinto que meu corpo está "brigando" com a comida.'
    ]
  },
  {
    id: 'relationship_thermometer',
    question: 'Como está sua disposição para momentos de intimidade e toque com seu parceiro?',
    options: [
      'Sinto desejo e conexão natural.',
      'Sinto que o cansaço apaga qualquer vontade que eu tenha.',
      'Sinto uma barreira invisível (prefiro ficar no meu canto).'
    ]
  },
  {
    id: 'emotional_reactivity',
    question: 'Quando surge um imprevisto ou uma pequena falha do parceiro, qual sua reação?',
    options: [
      'Lido com calma e bom humor.',
      'Fico impaciente, mas tento disfarçar.',
      'Explodo ou guardo ressentimento (meus nervos estão à flor da pele).'
    ]
  },
  {
    id: 'ancestral_knowledge',
    question: 'Você já tentou dietas ou conversas difíceis para melhorar sua energia e o seu relacionamento, sem sucesso duradouro?',
    options: [
      'Sim, já tentei de tudo e nada mudou.',
      'Tentei algumas coisas, mas o efeito passou rápido.',
      'Nunca tentei nada específico, apenas aceitei que "é assim mesmo".'
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
      severityLevel = "Alerta Primário de Desequilíbrio Interno";
      impactText = "um acúmulo de tensões iniciais, que pode começar a afetar o seu bem-estar diário";
    } else if (score < 9) {
      severityLevel = "Bloqueio Moderado de Energia";
      impactText = "uma sobrecarga de rotina que está limitando a sua vitalidade e dificultando uma conexão mais leve e natural";
    } else {
      severityLevel = "Sinal Máximo: Restrição de Magnetismo";
      impactText = "uma forte sobrecarga interna acumulada, o que frequentemente resulta na sensação de exaustão constante e no distanciamento nas relações";
    }

    setDiagnosis({ severity: severityLevel, impact: impactText });

    setIsGenerating(true);
    setLoadingMessage('Analisando suas respostas...');
    
    setTimeout(() => {
      setLoadingMessage('Verificando níveis de inflamação...');
    }, 1500);

    setTimeout(() => {
      setLoadingMessage(`Gerando protocolo personalizado para ${userName}...`);
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
                Descubra o que está bloqueando seu magnetismo
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 font-bold mb-8">
                Responda a 6 perguntas rápidas e veja se o seu Nervo Vago está operando em modo de 'Sobrecarga' ou 'Brilho'.
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
              Identificamos um {diagnosis.severity || 'Bloqueio Grave de Magnetismo'}
            </h1>
            
            <div className="text-left text-xl space-y-6 mb-10 bg-yellow-50 p-6 border-l-4 border-yellow-400">
              <p>
                <strong>{userName || 'Você'}</strong>, o cruzamento das suas respostas confirmou a verdadeira causa raiz.
              </p>
              <p>
                O seu sistema indicou <strong>{diagnosis.impact || "o efeito do acúmulo de tensão diária"}</strong>.
              </p>
              <p>
                A boa notícia é que você não precisa de mais cobranças ou de dietas restritivas. O que você precisa é reativar as vias bloqueadas do seu corpo.
              </p>
              <p className="font-bold text-cb-red">
                Preparamos uma apresentação urgente que revela como você pode começar a reverter isso ainda hoje, em apenas 30 segundos.
              </p>
            </div>

            <button
              onClick={() => setShowContent(true)}
              className="btn-cta-cb"
            >
              ASSISTIR AO VÍDEO AGORA &raquo;
            </button>
          </div>
        </div>
      )}

      {showContent && (
        <div className="relative z-10 pb-20">
          {/* ─── VSL SECTION ─────────────────────────────── */}
          <section className="pt-10 pb-16 px-4 bg-white">
            <div className="container-custom text-center">
              <h1 className="text-4xl md:text-6xl font-serif font-black text-cb-red leading-tight mb-4">
                O Segredo Simples Para Estimular Seu Magnetismo Natural...
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
                E a adoção de pequenos <span className="highlight-yellow">hábitos matinais</span> que ajudam a renovar o seu bem-estar.
              </h2>
              
              <p className="text-lg font-bold text-gray-600 mb-4">
                Recomendamos que assista com o som ativado para aproveitar melhor a apresentação. Aguarde alguns segundos para o carregamento do vídeo.
              </p>

              {/* VSL Video Player */}
              <div className="vsl-container overflow-hidden rounded-lg relative">
                <iframe
                  src="https://player.mediadelivery.net/play/639325/3f840c7e-919e-4ba8-9bf7-413fe909d4b5?autoplay=true"
                  loading="lazy"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                  allowFullScreen={true}
                ></iframe>
                {/* Overlay transparente para bloquear a barra de progresso e controles inferiores */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-16 md:h-20 z-20 bg-transparent cursor-not-allowed"
                  title="O vídeo não pode ser adiantado."
                  style={{ userSelect: 'none' }}
                ></div>
              </div>

              <div className="mt-10">
                <a href="https://pay.hotmart.com/L105426143X?checkoutMode=10" className="btn-cta-cb text-2xl py-6">
                  SIM! QUERO DESBLOQUEAR MEU MAGNETISMO AGORA
                </a>
                <img src="https://cdn.clickbank.net/custom/images/trust_seals/secure_checkout.png" alt="Secure Checkout" className="mx-auto mt-4 h-12 opacity-50 grayscale" />
              </div>
            </div>
          </section>

          {/* ─── TEXT SALES LETTER ───────────────────────────── */}
          <section className="py-12 bg-gray-50 border-t border-gray-200">
            <div className="container-custom text-lg md:text-xl leading-relaxed space-y-8">
              
              <h2 className="text-3xl md:text-4xl font-serif font-black text-black text-center mb-10">
                A Busca Por Mais Leveza e Conexão Real
              </h2>

              <p>
                Muitas vezes, a rotina corrida pode gerar uma sensação de desgaste. Fica parecendo que há um obstáculo limitando a forma de aproveitar as relações diárias.
              </p>
              <p>
                Ainda que exista o desejo por um dia a dia mais tranquilo e conexões mais profundas, a sobrecarga de tarefas muitas vezes toma a frente.
              </p>

              <ul className="pain-list bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
                <li>O acúmulo de tensões diárias, que impacta na sensação de vitalidade ao final do dia.</li>
                <li>A busca constante por resgatar a autoconfiança de quando a vida parecia fluir em um ritmo mais calmo.</li>
                <li>A vontade de cuidar melhor do próprio corpo e mente, estimulando tudo de positivo que já existe dentro de cada pessoa.</li>
              </ul>

              <p className="text-center font-bold text-2xl mt-8">
                Lidar com essas demandas é comum. <span className="highlight-yellow">É um reflexo natural do estresse contemporâneo.</span>
              </p>

              <hr className="my-12 border-gray-300" />

              <h2 className="text-3xl md:text-4xl font-serif font-black text-cb-red text-center mb-8">
                O Segredo das Mulheres Magnéticas Centenárias de Bama
              </h2>

              <p>
                Nas montanhas isoladas da China na Vila de Bama em Guangxi, existe um lugar onde o tempo parece não ter poder sobre o desejo. Cientistas descobriram algo que vai muito além da longevidade: eles encontraram o segredo do magnetismo feminino inesgotável.
              </p>

              <p>
                Enquanto em centros urbanos muitas vezes o estresse dita a vitalidade, as mulheres de Bama exibem uma atenção aos cuidados que promovem uma pele bem cuidada, olhar expressivo e uma sensação de energia positiva no ambiente de forma muito natural.
              </p>

              <p>
                O que pesquisadores relatam sobre os relacionamentos dessa cultura é o grande foco no equilíbrio.
              </p>

              <p>
                No estilo de vida de Bama, o conforto nas relações parece ser constante. Por quê? Porque muito dessa cultura está atrelada à adoção de atitudes biológicas e sociais voltadas para o próprio autocuidado, algo que a pressa ocidental deixou de lado.
              </p>

              <p>
                Isso não se resume a buscar fórmulas mágicas, mas em encontrar a harmonia biológica básica — um ciclo saudável de um organismo funcionando confortavelmente — que naturalmente ajuda na autoconfiança.
              </p>

              <p>
                O foco consiste na busca pelo distanciamento do excesso de estresse diário. Ao adotar hábitos mais serenos, todo o semblante responde de forma favorável, deixando de transparecer aquela tensão e exaustão que pesam no dia a dia.
              </p>

              <p>
                Acredita-se que as tradições dessa região usem <strong>pequenos hábitos matinais diários</strong> para ajudar a preservar e cultivar essa mesma harmonia corporal. É como limpar uma lente: a cor verdadeira do ambiente volta a ficar evidente.
              </p>

              <p>
                O foco em hábitos de bem-estar saudáveis apoia diariamente o objetivo de se sentir bem com o próprio reflexo, promovendo assim mais interações e conexões muito mais leves.
              </p>

              <hr className="my-12 border-gray-300" />

              <h2 className="text-3xl md:text-4xl font-serif font-black text-cb-red text-center mb-8">
                O Impacto do Acúmulo de Tensões e Impurezas
              </h2>

              <p>
                Com o passar do tempo, nosso corpo pode acumular resíduos e tensões invisíveis, que dificultam o funcionamento ideal do nosso equilíbrio biológico.
              </p>

              <div className="bg-white p-8 border-l-8 border-cb-red shadow-md my-8">
                <ul className="pain-list">
                  <li><strong>Dificulta a vitalidade natural</strong>, afetando a aparência descansada da pele e a sensação de renovação.</li>
                  <li><strong>Desequilibra as emoções</strong>, limitando a sensação de alegria, presença e leveza no dia a dia.</li>
                  <li><strong>Sobrecarrega o bem-estar</strong>, abafando aquela confiança natural e a linguagem corporal magnética.</li>
                </ul>
              </div>

              <p className="text-center text-2xl font-bold">
                As pessoas ao redor não veem esse desgaste. <strong className="text-cb-red">Mas elas sentem.</strong>
              </p>

              <hr className="my-12 border-gray-300" />

              <h2 className="text-3xl md:text-4xl font-serif font-black text-black text-center mb-8">
                A Solução: O Protocolo de Bama
              </h2>

              <p>
                Este não é um livro de dicas comuns. É um manual de harmonização corporal. Em 7 capítulos práticos, você vai aprender a equilibrar seu corpo e reativar a sua confiança de dentro para fora.
              </p>

              <ul className="check-list bg-white p-8 border border-green-500 rounded-lg shadow-sm my-8">
                <li><strong>O Hábito Matinal de Revitalização:</strong> O passo a passo exato para despertar a sua sensação de bem-estar logo cedo.</li>
                <li><strong>A Fórmula de Suporte Digestivo:</strong> Como preparar o composto ancestral que ajuda a evitar resíduos acumulados e trazer leveza.</li>
                <li><strong>A Linguagem do Corpo:</strong> Como sua nova disposição vai se refletir em sua presença e olhar naturalmente e sem esforço.</li>
              </ul>

              <div className="text-center my-12">
                <a href="https://pay.hotmart.com/L105426143X?checkoutMode=10" className="btn-cta-cb">
                  QUERO O PROTOCOLO DE BAMA AGORA
                </a>
              </div>

              <hr className="my-12 border-gray-300" />

              <h2 className="text-3xl md:text-4xl font-serif font-black text-black text-center mb-8">
                Histórias Reais de Mulheres que Recuperaram o Magnetismo
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-3 text-yellow-500 text-2xl">★★★★★</div>
                  <p className="italic text-gray-700 mb-4">"Eu achava que meu relacionamento estava esfriando e já não tinha a mesma paciência. Depois que passei a aplicar o ritual, acordei com uma leveza que há muito tempo não sentia. Meu parceiro notou na hora e a nossa conexão melhorou muito!"</p>
                  <p className="font-bold text-black">— Márcia T.</p>
                </div>

                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-3 text-yellow-500 text-2xl">★★★★★</div>
                  <p className="italic text-gray-700 mb-4">"Aquela sensação de cansaço extremo que me acompanhava o dia todo diminuiu demais. Sinto-me muito mais disposta, atraente e dona de mim novamente. Uma mudança que trouxe minha autoconfiança de volta."</p>
                  <p className="font-bold text-black">— Helena R.</p>
                </div>

                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-3 text-yellow-500 text-2xl">★★★★★</div>
                  <p className="italic text-gray-700 mb-4">"Eu já não sabia mais o que fazer para melhorar meu humor e minha presença. Focar na limpeza interna e no equilíbrio foi a melhor decisão que tomei. Indico para todas as mulheres que querem recuperar seu brilho."</p>
                  <p className="font-bold text-black">— Silvia M.</p>
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
                  <h2 className="text-3xl font-black text-black mb-4">Garantia Incondicional de 7 Dias</h2>
                  <p className="text-xl">
                    Eu confio tanto no Protocolo de Bama que eu tiro todo o risco das suas costas. Aplique o método por 7 dias. Se você não sentir seu corpo mais leve, sua mente mais clara e seu magnetismo voltando… Eu devolvo 100% do seu dinheiro, sem perguntas e sem burocracia.
                  </p>
                </div>
              </div>

              <div className="text-center bg-yellow-50 p-10 border-4 border-yellow-400 rounded-xl my-12">
                <p className="text-2xl line-through text-gray-500 mb-2">Preço Normal: R$ 197,00</p>
                <p className="text-3xl font-bold mb-4">Preço Hoje:</p>
                <p className="text-6xl md:text-8xl font-black text-cb-red mb-8">R$ 37,90</p>
                
                <a href="https://pay.hotmart.com/L105426143X?checkoutMode=10" className="btn-cta-cb text-2xl py-6">
                  SIM! QUERO DESBLOQUEAR MEU MAGNETISMO &raquo;
                </a>
                <p className="mt-4 font-bold text-gray-600">Pagamento Único. Acesso Imediato.</p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl md:text-4xl font-serif font-black text-black text-center mb-8 mt-16">
                Perguntas Frequentes
              </h2>
              <div className="space-y-4">
                {[
                  { q: "O protocolo é difícil de seguir?", a: "Não. Ele foi desenhado para mulheres modernas e ocupadas, focado em pequenos ajustes matinais." },
                  { q: "Preciso comprar suplementos caros?", a: "Não. Todos os ingredientes são naturais e encontrados em qualquer supermercado ou feira." },
                  { q: "Em quanto tempo vejo resultados?", a: "Muitas mulheres relatam uma sensação de leveza e clareza mental pouco tempo após mudarem seus hábitos diários, mas vale lembrar que cada corpo responde no seu próprio ritmo." },
                  { q: "Como recebo o material?", a: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com o link para baixar o e-book e todos os bônus." }
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
            Isenção de Responsabilidade: Os resultados podem variar e este método não substitui o acompanhamento médico. Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. A Hotmart é a plataforma de pagamentos e não endossa as declarações ou promessas deste produto.
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
              <p className="font-black text-xl text-black">Desbloqueie Seu Magnetismo Hoje!</p>
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
