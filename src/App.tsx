import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Layout, AdSenseDisclaimer } from './components/MainLayout';
import Privacy from './Privacy';
import Terms from './Terms';

// --- Page Components ---

// --- Home Page ---
function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-black py-32 md:py-48 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1546587348-d12660c30c50?auto=format&fit=crop&q=80&w=2000" alt="Paisagem serena nas montanhas" className="w-full h-full object-cover" />
        </div>
        <header className="max-w-4xl mx-auto relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-white font-semibold tracking-[0.2em] uppercase text-xs mb-6"
          >
            Longevidade Sistêmica
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif font-black text-white leading-[1.1] mb-8"
          >
            O Protocolo de Bama
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-16 max-w-2xl mx-auto"
          >
            Descubra os segredos biológicos da vila centenária mais famosa do mundo em um método prático e moderno para restaurar sua vitalidade.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/sobre" className="bg-brand-red text-white text-sm font-semibold tracking-widest uppercase px-10 py-5 rounded-sm hover:bg-white hover:text-black transition-all inline-block">
              EXPLORAR O MÉTODO
            </Link>
          </motion.div>
        </header>
      </section>

      {/* Pillars Grid */}
      <section className="py-24 px-4 bg-white" id="pilares">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Alimentação", color: "bg-green-50", text: "text-green-900", icon: "🥗", desc: "A dieta anti-inflamatória e o poder dos nutrientes ancestrais.", path: "/alimentacao" },
              { title: "Movimento", color: "bg-blue-50", text: "text-blue-900", icon: "🏃‍♀️", desc: "Mobilidade e exercícios funcionais para longevidade articular.", path: "/movimento" },
              { title: "Mente", color: "bg-purple-50", text: "text-purple-900", icon: "🧘‍♀️", desc: "Gestão do estresse e blindagem contra o cortisol elevado.", path: "/mente" },
              { title: "Sono", color: "bg-orange-50", text: "text-orange-900", icon: "🌙", desc: "Higiene do sono para reparo profundo e limpeza celular.", path: "/sono" },
            ].map((pillar, i) => (
              <Link 
                key={i} 
                to={pillar.path}
                className={`p-10 ${pillar.color} rounded-sm transition-all group hover:shadow-lg`}
              >
                <div className="text-4xl mb-6">{pillar.icon}</div>
                <h3 className={`text-2xl font-serif font-bold mb-4 ${pillar.text}`}>{pillar.title}</h3>
                <p className="text-sm text-text-muted mb-8 leading-relaxed">{pillar.desc}</p>
                <div className="font-semibold text-xs uppercase tracking-widest border-b border-black inline-block">
                  Ler Guia
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24 px-4 bg-brand-bg" aria-labelledby="featured-articles-title">
        <div className="max-w-7xl mx-auto">
          <h2 id="featured-articles-title" className="text-4xl font-serif font-black mb-16 text-center">Artigos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { cat: "Alimentação", title: "5 Alimentos essenciais para combater o envelhecimento celular", path: "/alimentacao", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" },
              { cat: "Movimento", title: "Exercícios de 15 minutos para quem trabalha sentado", path: "/movimento", img: "/mulher-movimento.png" },
              { cat: "Sono", title: "Por que você acorda às 3 da manhã e como evitar isso", path: "/sono", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800" },
            ].map((art, idx) => (
              <article key={idx}>
                <Link to={art.path} className="group block">
                  <div className="aspect-[3/2] bg-gray-200 mb-6 overflow-hidden">
                     <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <span className="text-brand-red font-bold text-xs uppercase tracking-widest">{art.cat}</span>
                  <h3 className="text-2xl font-serif font-bold mt-2 leading-tight group-hover:underline">
                    {art.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

// --- Pilar Nutrition ---

function PillarNutrition() {
  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Pilar 1: Alimentação</span>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-black leading-tight mt-2 mb-6">
              O Protocolo de Bama: Guia Completo da Alimentação para Viver 100 Anos
            </h1>
            <div className="aspect-video w-full overflow-hidden my-8">
               <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200" alt="Tigela com salada fresca e orgânica" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:mb-8 prose-p:mb-8 prose-li:mb-4">
            <p className="lead text-2xl text-gray-600 mb-12">
               Descubra o segredo biológico da longevidade celular através da dieta anti-inflamatória praticada pelos centenários da Vila de Bama.
            </p>
            
            <h2 className="text-3xl md:text-4xl font-serif font-black mt-20 mb-10">A Ciência da Longevidade no Prato</h2>
            <p>
              Como especialista em saúde preventiva, observo que a maior causa do envelhecimento precoce na sociedade moderna não é a genética, mas a inflamação de baixo grau, frequentemente chamada de <em>"inflammaging"</em>. Na Vila de Bama, na China, a alimentação atua como um escudo biológico contra esse processo.
            </p>
            <p>
              O segredo não está em contar calorias, mas em consumir densidade nutricional que sinaliza segurança para as suas células. Quando você come os alimentos certos, seu corpo entra em modo de reparo, não em modo de sobrevivência.
            </p>

            <h2 className="text-3xl md:text-4xl font-serif font-black mt-24 mb-10">5 Alimentos Essenciais para Combater o Envelhecimento Celular</h2>
            <p className="mb-8">Estes ingredientes são a base do Protocolo de Bama e devem estar presentes na sua rotina semanal:</p>
            <ul className="list-disc pl-6 space-y-6 mb-12">
                <li>
                    <strong>Folhas Verdes Escuras (Clorofila Pura):</strong> Alimentos como espinafre e couve são ricos em magnésio, essencial para mais de 300 reações enzimáticas, incluindo a produção de energia nas mitocôndrias.
                </li>
                <li>
                    <strong>Batata-Doce Roxa (Antocianinas):</strong> Diferente dos carboidratos refinados, a batata-doce de Bama fornece energia de liberação lenta e antioxidantes potentes que protegem o DNA contra o estresse oxidativo.
                </li>
                <li>
                    <strong>Sementes de Cânhamo e Abóbora:</strong> Fontes incríveis de zinco e gorduras boas que mantém a integridade das membranas celulares.
                </li>
                <li>
                    <strong>Cúrcuma e Gengibre (Anti-inflamatórios Ativos):</strong> A curcumina é um dos compostos naturais mais potentes para reduzir a carga inflamatória no sangue.
                </li>
                <li>
                    <strong>Água Mineralizada (O Hidratante Celular):</strong> Em Bama, a água passa por rochas vulcânicas, tornando-se fracamente alcalina e rica em minerais que otimizam a hidratação intracelular.
                </li>
            </ul>

            <h2 className="text-3xl font-serif font-black">O que é a Dieta das Zonas Azuis e como aplicar no Brasil</h2>
            <p>
              As "Zonas Azuis" são regiões onde as pessoas vivem comprovadamente mais de 100 anos. Embora Bama seja nossa principal inspiração, os princípios são Universais. No Brasil, podemos adaptar essa sabedoria usando alimentos locais:
            </p>
            <ul className="list-disc pl-6">
                <li>Substitua o arroz branco por arroz integral ou quinoa.</li>
                <li>Use o azeite de oliva extra virgem em vez de óleos vegetais refinados.</li>
                <li>Aumente o consumo de leguminosas (feijão, lentilha, grão-de-bico) que são ricas em fibras e proteínas vegetais.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold">Resumo Estratégico: O Prato de Bama</h3>
            <p>Divida seu prato da seguinte forma:</p>
            <ul className="list-none space-y-2">
                <li>✅ 50% de vegetais crus ou cozidos no vapor.</li>
                <li>✅ 25% de carboidratos complexos (raízes e tubérculos).</li>
                <li>✅ 25% de proteínas limpas (preferencialmente vegetais ou ovos caipiras).</li>
            </ul>

            <div className="bg-green-50 p-8 rounded-3xl my-12 border border-green-100 shadow-sm">
                <h3 className="text-green-800 mt-0 flex items-center gap-2">
                    <span>🍲</span> Receita Prática: O Bowl da Longevidade
                </h3>
                <p className="font-medium text-green-900 mb-4 italic">Uma refeição completa, anti-inflamatória e fácil de preparar com ingredientes de mercado.</p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-green-800 border-b border-green-200 mb-2 invisible">Ingredientes</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>1 xícara de batata-doce cozida em cubos</li>
                            <li>2 punhados de folhas de couve rasgadas</li>
                            <li>1/2 abacate maduro</li>
                            <li>1 colher de sopa de sementes de girassol</li>
                            <li>Molho: Limão, azeite, sal marinho e cúrcuma em pó</li>
                        </ul>
                    </div>
                    <div className="text-sm">
                        <h4 className="font-bold text-green-800 border-b border-green-200 mb-2">Modo de Preparo</h4>
                        <p className="leading-relaxed">
                            Cozinhe a batata-doce até ficar macia. Em uma tigela grande, coloque a couve por baixo. Adicione a batata-doce morna para murchar levemente as folhas. Coloque o abacate fatiado por cima e finalize com as sementes. Regue com o molho anti-inflamatório e aproveite a energia celular.
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-serif font-black">Chás e Ervas Naturais: A Hidratação de Bama</h2>
            <p>
              O consumo de ervas como o <em>Chá Verde</em> ou a <em>Gynostemma</em> (conhecida como a erva da imortalidade em Bama) é contínuo ao longo do dia. Estas ervas ajudam na digestão e fornecem um fluxo constante de antioxidantes para o cérebro.
            </p>

            <h2 className="text-3xl font-serif font-black">Conclusão: Alimentação é Comunicação</h2>
            <p>
                Cada garfada é uma instrução para seus genes. Escolha instruir seu corpo para a saúde e a longevidade. O Protocolo de Bama não é uma restrição, mas uma libertação para que você viva sua melhor versão.
            </p>

            <AdSenseDisclaimer />
          </div>
        </div>
      </section>
    </Layout>
  );
}

// --- Pilar Movement ---

function PillarMovement() {
  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Pilar 2: Exercício</span>
            <h2 className="text-3xl md:text-4xl font-serif font-black mt-24 mb-10">Protocolo de Movimento: Como Manter o Corpo Jovem</h2>
            <p className="lead text-2xl text-gray-600 mb-12">
               Esqueça o castigo físico e as horas exaustivas na academia. O movimento em Bama é uma celebração da mobilidade e da saúde das articulações.
            </p>

            <div className="aspect-video w-full overflow-hidden my-12 rounded-sm shadow-lg">
               <img src="/mulher-yoga.png" alt="Mulher sênior praticando yoga ao ar livre" className="w-full h-full object-cover" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-black mt-20 mb-10">Movimento Funcional vs. Exercício Punitivo</h2>
            <p>
              Como especialista em medicina preventiva, observo um erro comum: acreditar que o exercício deve ser doloroso para ser eficaz. Na Vila de Bama, você não vê pessoas "malhando". Você vê pessoas se movimentando de forma integrada ao meio ambiente até os 100 anos.
            </p>
            <p>
               O segredo da longevidade física está na <strong>lubrificação das articulações</strong> e na manutenção da massa muscular funcional através de movimentos de baixo impacto, mas de alta frequência.
            </p>

            <h2 className="text-3xl font-serif font-black">A Saúde das Articulações: O Verdadeiro Indicador de Idade</h2>
            <p>
               Sua idade biológica é medida pela flexibilidade da sua coluna e pela mobilidade do seu quadril. Quando perdemos o arco de movimento, o corpo começa a calcificar e a inflamar. O Protocolo de Bama prioriza:
            </p>
            <ul className="list-disc pl-6 space-y-4">
                <li><strong>Mobilização de Quadril:</strong> Fundamental para evitar dores lombares e manter a independência física.</li>
                <li><strong>Fluidez da Coluna:</strong> Movimentos de torção e extensão que nutrem os discos intervertebrais.</li>
                <li><strong>Pés Descalços (Earthing):</strong> Caminhar descalço na terra para neutralizar cargas elétricas e fortalecer a base do corpo.</li>
            </ul>

            <h2 className="text-3xl font-serif font-black">Guia: Exercícios de 15 Minutos para quem Trabalha Sentado</h2>
            <p className="text-xl font-serif italic text-brand-red mb-6">Melhore sua postura, reduza dores e aumente sua disposição!</p>
            
            <div className="my-10 rounded-sm overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center p-8">
              <img 
                src="/infografico-movimento.png" 
                alt="Infográfico: Exercícios de 15 minutos para quem trabalha sentado" 
                className="max-w-full h-auto shadow-2xl" 
              />
            </div>

            <p>
               O sedentarismo é a nova "doença silenciosa". Se você passa o dia sentado, sua fáscia (o tecido que envolve os músculos) começa a encurtar e a circulação fica comprometida. Aqui está o roteiro prático do Protocolo de Bama para reverter esses efeitos em apenas 15 minutos:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <h4 className="font-bold text-blue-900 m-0 text-lg">Alongamento do Pescoço</h4>
                </div>
                <p className="text-sm mb-2 font-medium text-blue-800 italic">Duração: 2 minutos</p>
                <p className="text-sm">Incline a cabeça para os lados, para frente e para trás, de forma suave. Isso alivia a tensão acumulada no trapézio e ombros.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <h4 className="font-bold text-blue-900 m-0 text-lg">Rotação de Ombros</h4>
                </div>
                <p className="text-sm mb-2 font-medium text-blue-800 italic">Duração: 2 minutos</p>
                <p className="text-sm">Gire os ombros para frente e depois para trás, lentamente. Melhora a mobilidade escapular e reduz a rigidez.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <h4 className="font-bold text-blue-900 m-0 text-lg">Alongamento dos Braços</h4>
                </div>
                <p className="text-sm mb-2 font-medium text-blue-800 italic">Duração: 2 minutos</p>
                <p className="text-sm">Estenda os braços à frente com as mãos entrelaçadas e depois acima da cabeça. Estimula a circulação e alonga os membros superiores.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <h4 className="font-bold text-blue-900 m-0 text-lg">Alongamento das Costas</h4>
                </div>
                <p className="text-sm mb-2 font-medium text-blue-800 italic">Duração: 2 minutos</p>
                <p className="text-sm">Arqueie as costas para frente e depois para trás de forma suave (movimento gato-vaca modificado). Melhora a postura e alivia dores lombares.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
                  <h4 className="font-bold text-blue-900 m-0 text-lg">Agachamento</h4>
                </div>
                <p className="text-sm mb-2 font-medium text-blue-800 italic">Duração: 3 minutos</p>
                <p className="text-sm">Levante-se e faça agachamentos controlados, mantendo as costas retas. Ativa o metabolismo basal e fortalece os membros inferiores.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">6</span>
                  <h4 className="font-bold text-blue-900 m-0 text-lg">Caminhada no Lugar</h4>
                </div>
                <p className="text-sm mb-2 font-medium text-blue-800 italic">Duração: 4 minutos</p>
                <p className="text-sm">Caminhe no lugar em um ritmo confortável, movimentando braços e pernas. Aumenta a disposição mental e o foco.</p>
              </div>
            </div>

            <div className="bg-green-900 text-white p-8 rounded-sm my-10">
               <h4 className="text-white font-serif font-black text-xl mb-4 uppercase tracking-widest">Dica Extra de Longevidade</h4>
               <p className="m-0 leading-relaxed">
                  Beba água, mantenha-se hidratado e, sempre que possível, levante-se e movimente-se durante o dia! Pequenas pausas geram grandes mudanças sistêmicas na sua saúde.
               </p>
            </div>

            <h2 className="text-3xl font-serif font-black">A Importância da Caminhada Diária para o Coração</h2>
            <p>
               Caminhar não é apenas cardio; é um processo de reciclagem hormonal. Ao caminhar ao ar livre, você sincroniza seu ritmo cardíaco com a respiração, reduzindo o cortisol matinal e fortalecendo o miocárdio de forma suave.
            </p>
            <p>
               <strong>Dica do Especialista:</strong> O movimento deve ser prazeroso, não um castigo. Se você odeia correr, caminhe. Se odeia musculação, pratique Yoga funcional. O importante é a consistência, não a intensidade extrema.
            </p>

            <h2 className="text-3xl font-serif font-black">Alongamentos Matinais: Eliminando Dores nas Costas</h2>
            <p>
               Acordar com o corpo rígido é um sinal de estagnação. Ao dedicar 5 minutos a alongamentos que "despertam a fáscia", você garante uma distribuição de energia mais eficiente ao longo do dia. Foque em movimentos lentos e respiração profunda.
            </p>

            <AdSenseDisclaimer />
          </div>
        </div>
      </section>
    </Layout>
  );
}

// --- Pilar Mind ---

function PillarMind() {
  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-purple-600 font-bold tracking-widest uppercase text-sm">Pilar 3: Mente</span>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-black leading-tight mt-2 mb-6">
              Mente Blindada: O Protocolo de Gestão de Stress e Saúde Mental
            </h1>
            <div className="aspect-video w-full overflow-hidden my-8">
               <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200" alt="Pessoa meditando em um ambiente calmo na natureza" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:mb-10 prose-p:mb-8 prose-li:mb-4">
            <p className="lead text-2xl text-gray-600 mb-12">
               Descubra como o equilíbrio emocional e a redução do cortisol são os verdadeiros pilares por trás do magnetismo e da longevidade.
            </p>
            
            <h2 className="text-3xl md:text-4xl font-serif font-black mt-24 mb-10 text-black uppercase tracking-widest text-sm">O Inimigo Invisível: Cortisol e Stress Crônico</h2>
            <p>
               Como especialista em saúde preventiva, vejo que o maior preditor de doenças degenerativas não é apenas o tabagismo ou a má alimentação, mas o estresse emocional contínuo. Em Bama, a vida transcorre em um ritmo natural, o que permite que o Nervo Vago atue plenamente na regeneração do corpo.
            </p>
            <p>
               O estresse crônico mantém o corpo em um estado de "luta ou fuga", onde a digestão pára, a imunidade cai e as células envelhecem mais rápido. "Mente Blindada" é o nosso guia para reverter esse processo.
            </p>

            <h2 className="text-3xl font-serif font-black">Como a Meditação de 5 Minutos pode Mudar sua Produtividade</h2>
            <p>
               Muitos acreditam que meditar exige horas e silêncio absoluto. Na verdade, a meditação de micro-reset (5 minutos) é o segredo para manter o foco e a calma no meio do caos corporativo.
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Redução de Ruído:</strong> 5 minutos de respiração consciente diminuem a atividade da amígdala cerebral (centro do medo).</li>
                <li><strong>Otimização de Dopamina:</strong> Ao silenciar o ruído externo, você recupera a sensibilidade aos prazeres simples e ao foco produtivo.</li>
                <li><strong>Ação Imediata:</strong> Pode ser feita em qualquer lugar — no carro, entre reuniões ou ao acordar.</li>
            </ul>

            <h2 className="text-3xl font-serif font-black">Técnicas de Respiração para Acalmar a Mente antes de Dormir</h2>
            <p>
               Sua respiração é o controle remoto do seu sistema nervoso. Através do Protocolo de Respiração de Bama, você sinaliza ao cérebro que é hora de descansar.
            </p>
            <h3 className="text-2xl font-serif font-bold">A Técnica 4-7-8 (O Calmante Natural)</h3>
            <ol className="list-decimal pl-6 space-y-2">
                <li>Inspire pelo nariz por 4 segundos.</li>
                <li>Segure a respiração por 7 segundos.</li>
                <li>Expire pela boca, fazendo um som de vento, por 8 segundos.</li>
            </ol>
            <p>Repita este ciclo 4 vezes antes de apagar as luzes para induzir um estado de relaxamento profundo.</p>

            <h2 className="text-3xl font-serif font-black">O Impacto das Redes Sociais no Envelhecimento Mental</h2>
            <p>
               O "Scroll Infinito" é um sequestrador de atenção que gera picos constantes de cortisol e ansiedade. No Protocolo de Bama, defendemos o <strong>Detox Digital</strong> como uma ferramenta de higiene mental. A comparação constante e o excesso de estímulos visuais envelhecem a nossa percepção e drenam nossa vitalidade psíquica.
            </p>

            <div className="bg-purple-50 p-8 rounded-3xl my-12 border border-purple-100">
                <h3 className="text-purple-800 mt-0">Dica de Ouro: O Detox Digital de Bama</h3>
                <p className="mb-4">Tente implementar estas 3 regras simples nesta semana:</p>
                <ul className="list-none space-y-2 font-medium">
                    <li>🚫 <strong>Zero Telas</strong> nos primeiros 60 minutos após acordar.</li>
                    <li>🚫 <strong>Zero Telas</strong> nos últimos 60 minutos antes de dormir.</li>
                    <li>🚫 <strong>Domingo Off-line:</strong> Dedique metade do seu domingo a atividades analógicas e contato com a natureza.</li>
                </ul>
            </div>

            <h2 className="text-3xl font-serif font-black">Conclusão: Uma Mente Calma é uma Mente Magnética</h2>
            <p>
               Quando você domina suas reações internas, o mundo externo perde o poder de desequilibrar você. O equilíbrio mental é o que permite que todos os outros pilares do Protocolo de Bama funcionem em harmonia. Preserve sua paz, preserve sua vida.
            </p>

            <AdSenseDisclaimer />
          </div>
        </div>
      </section>
    </Layout>
  );
}

// --- Pilar Sleep ---

function PillarSleep() {
  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Pilar 4: Sono</span>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-black leading-tight mt-2 mb-6">
              Higiene do Sono: O Protocolo para uma Noite de Descanso Profundo
            </h1>
            <div className="aspect-video w-full overflow-hidden my-8">
               <img src="https://images.unsplash.com/photo-1455642305367-68834a1da7ab?auto=format&fit=crop&q=80&w=1200" alt="Quarto sereno e minimalista preparado para o sono" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:mb-10 prose-p:mb-8 prose-li:mb-4">
            <p className="lead text-2xl text-gray-600 mb-12">
               O sono é o momento sagrado da reconstrução sistêmica. Saiba como configurar sua rotina noturna para acordar com vitalidade total.
            </p>
            
            <h2 className="text-3xl md:text-4xl font-serif font-black mt-24 mb-10">A Ciência do Sono Centenário</h2>
            <p>
               Dormir não é um luxo, é uma necessidade biológica para a limpeza glinfática do cérebro. Em Bama, o sono não é interrompido por luzes artificiais ou ruídos constantes. Os centenários seguem o ritmo circadiano perfeitamente adaptado ao sol.
            </p>
            <p>
               Quando você dorme profundamente, seu corpo realiza reparos no DNA, consolida a memória e equilibra os hormônios da fome e do estresse. O Protocolo de Bama foca em como otimizar cada ciclo de sono.
            </p>

            <h2 className="text-3xl font-serif font-black">Por que você acorda às 3 da manhã?</h2>
            <p>
               Para muitos, o despertar noturno às 3h é um sinal de alerta do corpo. Como especialista, identifico que isso geralmente é causado por um "Sugar Crash" (queda brusca de glicose) ou por picos residuais de cortisol devido ao estresse do dia anterior.
            </p>
            <h3 className="text-2xl font-serif font-bold">Como Evitar o Despertar Noturno:</h3>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Ceia Terapêutica:</strong> Consuma uma pequena porção de gordura boa ou carboidrato complexo antes de dormir para estabilizar a glicose.</li>
                <li><strong>Bloqueio de Luz Azul:</strong> A exposição à luz de telas após as 20h bloqueia a produção de melatonina, o hormônio do sono.</li>
                <li><strong>Gestão de Temperatura:</strong> O corpo precisa de uma queda de 1°C na temperatura interna para entrar em sono profundo.</li>
            </ul>

            <h2 className="text-3xl font-serif font-black">Melhores Alimentos para Comer à Noite e Dormir Melhor</h2>
            <p>
               Certos nutrientes facilitam a entrada no estado alfa de relaxamento. Integre estes no seu jantar:
            </p>
            <ul className="list-disc pl-6">
               <li><strong>Amêndoas e Nozes:</strong> Ricas em magnésio, que relaxa a musculatura.</li>
               <li><strong>Chá de Camomila e Valeriana:</strong> Sedativos naturais que reduzem a ansiedade.</li>
               <li><strong>Kiwi ou Bananas:</strong> Precursores naturais de serotonina e melatonina.</li>
            </ul>

            <h2 className="text-3xl font-serif font-black">Como configurar seu quarto para um sono reparador</h2>
            <p>
               Seu quarto deve ser uma "Caverna da Recuperação":
            </p>
            <ul className="list-disc pl-6 space-y-4">
               <li><strong>Escuridão Absoluta:</strong> Use cortinas blackout. Até um pequeno LED de carregador pode interferir na sua glândula pineal.</li>
               <li><strong>Temperatura Ideal:</strong> O ambiente deve estar fresco (em torno de 18°C a 22°C).</li>
               <li><strong>Silêncio Total ou Ruído Branco:</strong> Sons constantes ajudam a mente a não se sobressaltar com ruídos externos.</li>
            </ul>

            <div className="bg-indigo-50 p-8 rounded-3xl my-12 border border-indigo-100">
                <h3 className="text-indigo-800 mt-0">Dica de Ouro: O Gatilho da Luz Matinal</h3>
                <p>
                   A qualidade do seu sono começa no momento em que você acorda. Exponha seus olhos à <strong>luz natural</strong> nos primeiros 15 minutos do dia. Isso calibra o seu relógio biológico para que a melatonina seja liberada exatamente 16 horas depois.
                </p>
            </div>

            <h2 className="text-3xl font-serif font-black">Conclusão: Sono é o Melhor Biohack</h2>
            <p>
               Nenhuma dieta ou exercício pode compensar uma noite mal dormida. Trate seu sono como o compromisso mais importante da sua agenda. Ao alinhar seus hábitos noturnos com o Protocolo de Bama, você resgata a capacidade natural do seu corpo de se curar todas as noites.
            </p>

            <AdSenseDisclaimer />
          </div>
        </div>
      </section>
    </Layout>
  );
}

// --- About Page ---

function AboutPage() {
  return (
    <Layout>
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <span className="block text-red-600 font-bold uppercase tracking-widest text-sm mb-4 text-center">Nossa História & Missão</span>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-black mb-12 text-center leading-tight">Sobre o Protocolo de Bama</h1>
          
          <div className="aspect-[21/9] w-full overflow-hidden mb-12">
            <img src="https://images.unsplash.com/photo-1543326162-8e1da4fd77da?auto=format&fit=crop&q=80&w=1600" alt="Casal de idosos saudáveis caminhando no parque" className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-lg md:prose-xl prose-slate max-w-none bg-white p-10 md:p-16 rounded-[40px] shadow-sm border border-gray-100 prose-headings:mb-10 prose-p:mb-8 prose-li:mb-6">
             <p className="lead text-2xl text-gray-700 italic border-l-4 border-red-600 pl-8 mb-12">
                "Não buscamos apenas adicionar anos à vida, mas vida aos anos através da sabedoria ancestral e da ciência preventiva."
             </p>

             <h2 className="text-3xl md:text-4xl font-serif font-black mt-16 mb-8">Por que Bama?</h2>
             <p>
                Bama é mais do que um local geográfico na China; é um símbolo de resistência biológica. Em um mundo onde o envelhecimento precoce e as doenças do estilo de vida se tornaram a norma, a Vila de Bama permanece como uma prova viva de que o corpo humano possui uma capacidade incrível de regeneração quando alinhado com a natureza.
             </p>
             <p>
                Este portal nasceu do desejo de democratizar essa sabedoria. Traduzimos as práticas centenárias em guias práticos, fundamentados em evidências de saúde preventiva, para que você possa resgatar sua vitalidade no meio da correria moderna.
             </p>

             <h2 className="text-3xl md:text-4xl font-serif font-black mt-16 mb-8">Nossa Filosofia E-E-A-T</h2>
             <p>Acreditamos que a autoridade em saúde é construída através de quatro pilares fundamentais:</p>
             <ul className="list-disc pl-6 space-y-4">
                <li><strong>Experiência (Experience):</strong> Nossa curadoria é baseada no estudo direto das Zonas Azuis e na observação clínica de especialistas em estilo de vida longevo.</li>
                <li><strong>Especialidade (Expertise):</strong> Cada pilar do Protocolo — Alimentação, Movimento, Mente e Sono — é estruturado para fornecer informações tecnicamente precisas e biologicamente coerentes.</li>
                <li><strong>Autoridade (Authoritativeness):</strong> O Protocolo de Bama é reconhecido como uma fonte de referência para quem busca um estilo de vida preventivo e sistêmico.</li>
                <li><strong>Confiança (Trustworthiness):</strong> Somos transparentes sobre nossas fontes e sempre incentivamos o acompanhamento médico profissional. Sua saúde é nosso maior valor.</li>
             </ul>

             <h2 className="text-3xl font-serif font-black">Quem Somos</h2>
             <p>
                Somos um coletivo de entusiastas da longevidade, pesquisadores de saúde preventiva e educadores de bem-estar. Nossa missão é ser o seu guia definitivo na jornada de retorno à sua essência biológica.
             </p>

             <div className="mt-16 p-10 bg-red-50 rounded-3xl border border-red-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <h3 className="text-red-900 font-serif font-black text-2xl mb-4 relative z-10">O Futuro da Sua Saúde Começa Hoje</h3>
                <p className="text-red-800 text-lg leading-relaxed relative z-10">
                   Convidamos você a explorar cada pilar do nosso protocolo. Este não é um destino, mas uma jornada contínua. Seja bem-vindo à comunidade Protocolo de Bama.
                </p>
             </div>

             <AdSenseDisclaimer />
          </div>
        </div>
      </section>
    </Layout>
  );
}

// --- Main App Entry ---

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/alimentacao" element={<PillarNutrition />} />
        <Route path="/movimento" element={<PillarMovement />} />
        <Route path="/mente" element={<PillarMind />} />
        <Route path="/sono" element={<PillarSleep />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/termos-de-uso" element={<Terms />} />
      </Routes>
    </Router>
  );
}
