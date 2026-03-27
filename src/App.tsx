/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

function Quiz({ onComplete }: { onComplete: (data: { name: string; answers: string[] }) => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [userName, setUserName] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [analysisText, setAnalysisText] = useState('Analisando respostas...');

  const handleNextStep = (step: number, answer?: string) => {
    if (step === 1 && userName.trim() === '') {
      alert('Por favor, digite seu nome.');
      return;
    }
    if (answer) {
      setAnswers((prev) => [...prev, answer]);
    }
    setCurrentStep(step + 1);
  };

  const startAnalysis = (answer: string) => {
    const finalAnswers = [...answers, answer];
    setAnswers(finalAnswers);
    setCurrentStep(7); // Analysis step
    const texts = [
      "Verificando nível de biofilme...",
      "Comparando com microbiota centenária...",
      "Calculando protocolo de 14 dias...",
      "Diagnóstico Pronto!"
    ];

    let i = 0;
    const interval = setInterval(() => {
      setAnalysisText(texts[i]);
      i++;
      if (i === texts.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete({ name: userName, answers: finalAnswers });
        }, 1000);
      }
    }, 1200);
  };

  const progress = currentStep <= 6 ? currentStep * 16.6 : 100;

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <span className="text-green-600 font-bold text-xs uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full">
            Protocolo de Bama
          </span>
          <div className="w-full bg-gray-200 h-1.5 mt-4 rounded-full overflow-hidden">
            <div
              className="bg-green-500 h-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {currentStep === 1 && (
          <div>
            <div className="mb-8 bg-green-50 p-5 rounded-2xl border border-green-100">
              <h3 className="font-black text-green-800 text-lg mb-2">O Segredo de Bama</h3>
              <p className="text-sm text-green-700 leading-relaxed">
                Nas montanhas isoladas de Bama, na China, vive uma das populações mais longevas do mundo. Lá, centenários mantêm uma saúde digestiva impecável, sem inchaço ou constipação. <strong>O Protocolo de Bama</strong> é uma jornada de 14 dias inspirada nesses hábitos para restaurar a sua vitalidade digestiva ancestral.
              </p>
            </div>
            <h2 className="text-2xl font-black text-gray-800 mb-6 leading-tight">Para começar, qual o seu nome?</h2>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Seu nome aqui..."
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 outline-none text-lg mb-4"
            />
            <button
              onClick={() => handleNextStep(1)}
              className="w-full bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-green-700 transition"
            >
              CONTINUAR
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-black text-gray-800 mb-6">Qual a sua principal queixa hoje?</h2>
            <div className="space-y-3">
              <button onClick={() => handleNextStep(2, 'Barriga inchada (parece grávida)')} className="w-full text-left p-4 border-2 border-gray-100 rounded-xl hover:bg-green-50 hover:border-green-500 transition font-semibold">Barriga inchada (parece grávida)</button>
              <button onClick={() => handleNextStep(2, 'Passo mais de 3 dias sem ir ao banheiro')} className="w-full text-left p-4 border-2 border-gray-100 rounded-xl hover:bg-green-50 hover:border-green-500 transition font-semibold">Passo mais de 3 dias sem ir ao banheiro</button>
              <button onClick={() => handleNextStep(2, 'Gases e desconforto após comer')} className="w-full text-left p-4 border-2 border-gray-100 rounded-xl hover:bg-green-50 hover:border-green-500 transition font-semibold">Gases e desconforto após comer</button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2 className="text-2xl font-black text-gray-800 mb-6">Você sente que seu humor ou cansaço pioram quando o intestino trava?</h2>
            <div className="space-y-3">
              <button onClick={() => handleNextStep(3, 'Sim, fico irritada e sem energia')} className="w-full text-left p-4 border-2 border-gray-100 rounded-xl hover:bg-green-50 hover:border-green-500 transition font-semibold">Sim, fico irritada e sem energia</button>
              <button onClick={() => handleNextStep(3, 'Sinto muito peso nas pernas e corpo')} className="w-full text-left p-4 border-2 border-gray-100 rounded-xl hover:bg-green-50 hover:border-green-500 transition font-semibold">Sinto muito peso nas pernas e corpo</button>
              <button onClick={() => handleNextStep(3, 'Não notei relação ainda')} className="w-full text-left p-4 border-2 border-gray-100 rounded-xl hover:bg-green-50 hover:border-green-500 transition font-semibold">Não notei relação ainda</button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h2 className="text-2xl font-black text-gray-800 mb-6">Com que frequência você usa laxantes ou chás para "ajudar"?</h2>
            <div className="space-y-3">
              <button onClick={() => handleNextStep(4, 'Raramente (tento na alimentação)')} className="w-full text-left p-4 border-2 border-gray-100 rounded-xl hover:bg-green-50 hover:border-green-500 transition font-semibold">Raramente (tento na alimentação)</button>
              <button onClick={() => handleNextStep(4, 'Toda semana (se não usar, não vou)')} className="w-full text-left p-4 border-2 border-gray-100 rounded-xl hover:bg-green-50 hover:border-green-500 transition font-semibold">Toda semana (se não usar, não vou)</button>
              <button onClick={() => handleNextStep(4, 'Diariamente (meu intestino viciou)')} className="w-full text-left p-4 border-2 border-gray-100 rounded-xl hover:bg-green-50 hover:border-green-500 transition font-semibold">Diariamente (meu intestino viciou)</button>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div>
            <h2 className="text-2xl font-black text-gray-800 mb-6">Sabia que o excesso de fibras pode criar um "biofilme de cimento" se o intestino estiver fraco?</h2>
            <div className="space-y-3">
              <button onClick={() => handleNextStep(5, 'Não sabia (achei que fibra sempre ajudava)')} className="w-full text-left p-4 border-2 border-gray-100 rounded-xl hover:bg-green-50 hover:border-green-500 transition font-semibold">Não sabia (achei que fibra sempre ajudava)</button>
              <button onClick={() => handleNextStep(5, 'Já ouvi falar, mas não sei resolver')} className="w-full text-left p-4 border-2 border-gray-100 rounded-xl hover:bg-green-50 hover:border-green-500 transition font-semibold">Já ouvi falar, mas não sei resolver</button>
            </div>
          </div>
        )}

        {currentStep === 6 && (
          <div>
            <h2 className="text-2xl font-black text-gray-800 mb-6">Se houvesse um método de 14 dias para resetar seu sistema, você começaria hoje?</h2>
            <div className="space-y-3">
              <button onClick={() => startAnalysis('Sim! Quero minha leveza de volta')} className="w-full text-left p-4 border-2 border-gray-100 rounded-xl hover:bg-green-50 hover:border-green-500 transition font-semibold uppercase tracking-tight">Sim! Quero minha leveza de volta</button>
              <button onClick={() => startAnalysis('Apenas se for natural e sem remédios')} className="w-full text-left p-4 border-2 border-gray-100 rounded-xl hover:bg-green-50 hover:border-green-500 transition font-semibold">Apenas se for natural e sem remédios</button>
            </div>
          </div>
        )}

        {currentStep === 7 && (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{analysisText}</h2>
            <p className="text-sm text-gray-500 italic">Cruzando dados com o Padrão de Bama</p>
          </div>
        )}
      </div>
    </div>
  );
}

function SalesPage({ quizData }: { quizData: { name: string; answers: string[] } }) {
  const [timeLeft, setTimeLeft] = useState(21 * 3600 + 29 * 60 + 57); // 21:29:57 in seconds
  const [diagnosisTitle, setDiagnosisTitle] = useState<string>("Inércia Intestinal Nível 2");
  const [diagnosis, setDiagnosis] = useState<string>("Detectamos o acúmulo de Biofilme Adeso (O efeito \"Cimento\").");
  const [loadingDiagnosis, setLoadingDiagnosis] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    async function fetchDiagnosis() {
      // Fallback diagnosis in case of failure
      const fallbackTitle = "Inércia Intestinal Identificada";
      const fallbackText = "Seu perfil indica um acúmulo de resíduos nas paredes do cólon, o que dificulta a absorção de nutrientes e causa o inchaço abdominal relatado.";

      try {
        const openRouterKey = process.env.OPENROUTER_API_KEY || (import.meta as any).env?.VITE_OPENROUTER_API_KEY;
        const geminiKey = process.env.GEMINI_API_KEY;

        if (!openRouterKey && !geminiKey) {
          console.warn("Nenhuma chave de API encontrada (OpenRouter ou Gemini), usando diagnóstico padrão.");
          setDiagnosisTitle(fallbackTitle);
          setDiagnosis(fallbackText);
          setLoadingDiagnosis(false);
          return;
        }

        const prompt = `Atue como um especialista em saúde intestinal (Protocolo de Bama).
Baseado nas seguintes respostas de um quiz de um paciente chamado ${quizData.name}:
1. Queixa: ${quizData.answers[0]}
2. Humor/Cansaço: ${quizData.answers[1]}
3. Uso de laxantes: ${quizData.answers[2]}
4. Conhecimento sobre fibras: ${quizData.answers[3]}
5. Disposição: ${quizData.answers[4]}

Crie um diagnóstico curto, impactante e personalizado explicando o problema intestinal do paciente e como o acúmulo de biofilme ou inércia intestinal está causando isso. Use um tom empático mas de alerta.

Retorne APENAS um objeto JSON válido com as seguintes propriedades (sem formatação markdown, sem crases):
{
  "title": "Um título curto e impactante para o diagnóstico",
  "diagnosis": "O texto do diagnóstico em si (máximo de 3 frases)"
}`;

        // Create a timeout promise
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error("Timeout")), 10000)
        );

        let responseText = "";

        if (openRouterKey) {
          // Chamada para OpenRouter (usando GPT-4o-mini por padrão)
          const fetchPromise = fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${openRouterKey}`,
              "Content-Type": "application/json",
              "HTTP-Referer": window.location.origin,
              "X-Title": "Protocolo de Bama"
            },
            body: JSON.stringify({
              model: "openai/gpt-4o-mini",
              messages: [{ role: "user", content: prompt }]
            })
          }).then(res => res.json());

          const data = await Promise.race([fetchPromise, timeoutPromise]) as any;
          if (data && data.choices && data.choices.length > 0) {
            responseText = data.choices[0].message.content;
          }
        } else if (geminiKey) {
          // Chamada para Gemini
          const ai = new GoogleGenAI({ apiKey: geminiKey });
          const response = await Promise.race([
            ai.models.generateContent({
              model: "gemini-3-flash-preview",
              contents: prompt,
              config: {
                responseMimeType: "application/json",
              }
            }),
            timeoutPromise
          ]) as any;
          
          if (response && response.text) {
            responseText = response.text;
          }
        }
        
        if (responseText) {
          try {
            // Limpar possíveis crases de markdown
            const cleanedText = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
            const result = JSON.parse(cleanedText);
            setDiagnosisTitle(result.title || fallbackTitle);
            setDiagnosis(result.diagnosis || fallbackText);
          } catch (e) {
            setDiagnosis(responseText.substring(0, 250));
            setDiagnosisTitle(fallbackTitle);
          }
        } else {
          setDiagnosisTitle(fallbackTitle);
          setDiagnosis(fallbackText);
        }
      } catch (error) {
        console.error("Error generating diagnosis:", error);
        setDiagnosisTitle(fallbackTitle);
        setDiagnosis(fallbackText);
      } finally {
        setLoadingDiagnosis(false);
      }
    }
    
    if (quizData && quizData.answers.length > 0) {
      setLoadingDiagnosis(true);
      fetchDiagnosis();
    } else {
      setLoadingDiagnosis(false);
    }
  }, [quizData]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="font-serif text-[#1a1a1a] bg-[#faf9f6] leading-[1.8] pb-24">
      {/* Barra Alerta */}
      <div className="bg-[#b91c1c] text-white text-center p-3 font-sans text-[13px] font-bold uppercase tracking-[1px]">
        ⚠️ OFERTA LIMITADA — Preço especial de lançamento expira em: {formatTime(timeLeft)}
      </div>

      {/* Header Diagnóstico */}
      <div className="bg-[#1c3557] text-white text-center py-[60px] px-5 border-b-[5px] border-[#f6c445]">
        <div className="max-w-[680px] mx-auto px-6">
          <div className="inline-block bg-[#16a34a] py-1.5 px-[15px] rounded-full text-[11px] uppercase font-sans mb-[15px] font-bold">
            Análise de Microbiota Concluída
          </div>
          <p className="text-[#9cb3cc] text-[15px] font-sans">Padrão Identificado para {quizData.name || 'você'}:</p>
          <h2 className="text-[#f6c445] text-[38px] my-2.5 border-none p-0 leading-tight font-bold">
            {loadingDiagnosis ? "Analisando..." : diagnosisTitle}
          </h2>
          <div className="text-[#7ea3be] font-sans text-[16px] min-h-[48px]">
            {loadingDiagnosis ? (
              <span className="animate-pulse">Gerando diagnóstico...</span>
            ) : (
              diagnosis
            )}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-[60px] bg-white">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <p className="text-[#16a34a] font-sans font-bold text-[14px] uppercase tracking-widest mb-4">
            Descoberto nos confins da China · Validado pela ciência
          </p>
          <h1 className="text-[clamp(32px,6vw,48px)] leading-[1.1] mb-[25px] font-extrabold text-[#111]">
            Seu Intestino Não Está <br/><span className="text-[#b91c1c]">Quebrado.</span>
          </h1>
          <p className="text-[20px] mb-[40px] text-[#444] leading-relaxed">
            Ele está apenas esperando as instruções certas — as mesmas que mantêm centenários de 100 anos em Bama, China, mais leves do que você se sente hoje.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 font-sans">
            <div className="bg-[#f3f4f6] p-4 rounded-xl">
              <div className="text-3xl font-black text-[#16a34a]">14</div>
              <div className="text-xs font-bold text-gray-600 uppercase mt-1">Dias de protocolo</div>
            </div>
            <div className="bg-[#f3f4f6] p-4 rounded-xl">
              <div className="text-3xl font-black text-[#16a34a]">7</div>
              <div className="text-xs font-bold text-gray-600 uppercase mt-1">Capítulos práticos</div>
            </div>
            <div className="bg-[#f3f4f6] p-4 rounded-xl">
              <div className="text-3xl font-black text-[#16a34a]">100+</div>
              <div className="text-xs font-bold text-gray-600 uppercase mt-1">Anos de sabedoria</div>
            </div>
            <div className="bg-[#f3f4f6] p-4 rounded-xl">
              <div className="text-3xl font-black text-[#16a34a]">30"</div>
              <div className="text-xs font-bold text-gray-600 uppercase mt-1">Ritual matinal</div>
            </div>
          </div>

          <a href="https://pay.hotmart.com/M105084214G" className="inline-block w-full bg-[#16a34a] text-white no-underline py-5 px-8 rounded-2xl text-[22px] font-black font-sans transition-all duration-300 border-b-[6px] border-[#15803d] shadow-xl hover:translate-y-[2px] hover:border-b-[4px]">
            QUERO MINHA LEVEZA ANCESTRAL →
          </a>
          <p className="text-[13px] text-gray-500 font-sans mt-4">
            🔒 Garantia incondicional de 7 dias · Acesso imediato
          </p>
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-[80px] bg-[#f8fafc]">
        <div className="max-w-[680px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#b91c1c] font-sans font-bold text-[14px] uppercase tracking-widest mb-2">A realidade que ninguém fala</p>
            <h2 className="text-[32px] font-extrabold text-[#111] leading-tight">Você está travado num ciclo que não é sua culpa</h2>
          </div>

          <p className="text-[19px] mb-[30px] text-[#333]">
            Se você tem mais de 50 anos e sente que seu corpo simplesmente parou de cooperar com você, existe uma razão científica para isso. E ela nada tem a ver com fraqueza, falta de disciplina ou "envelhecimento normal".
          </p>

          <ul className="space-y-4 mb-10 font-sans text-[16px] text-[#444]">
            <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <span className="text-[#b91c1c] font-bold mt-1">✕</span>
              <p className="m-0"><b>Você acorda já com inchaço</b> — antes mesmo de comer a primeira refeição do dia</p>
            </li>
            <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <span className="text-[#b91c1c] font-bold mt-1">✕</span>
              <p className="m-0"><b>Fibras pioram tudo</b> — quanto mais salada e farelo, mais gases e pressão</p>
            </li>
            <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <span className="text-[#b91c1c] font-bold mt-1">✕</span>
              <p className="m-0"><b>Laxantes viram dependência</b> — o intestino "esquece" como funcionar sozinho</p>
            </li>
            <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <span className="text-[#b91c1c] font-bold mt-1">✕</span>
              <p className="m-0"><b>O cansaço não vai embora</b> — mesmo dormindo 8 horas, você acorda exausto</p>
            </li>
            <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <span className="text-[#b91c1c] font-bold mt-1">✕</span>
              <p className="m-0"><b>A roupa aperta diferente</b> — não é peso; é distensão abdominal crônica</p>
            </li>
            <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <span className="text-[#b91c1c] font-bold mt-1">✕</span>
              <p className="m-0"><b>A mente fica turva</b> — concentração, memória e humor todos prejudicados</p>
            </li>
          </ul>

          <div className="bg-[#1c3557] text-white p-8 rounded-2xl shadow-lg mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#f6c445]"></div>
            <p className="text-[22px] font-bold italic leading-snug m-0">
              "O problema não é que você come errado. É que há um inimigo invisível colado nas paredes do seu intestino — e nenhuma dieta do mundo funciona enquanto ele estiver lá."
            </p>
          </div>

          <p className="text-[19px] mb-[20px] text-[#333]">
            Esse inimigo tem nome: <b>Biofilme Adeso</b>. É uma matriz criada por bactérias patogênicas que literalmente cola os resíduos às paredes do seu cólon, cria gases tóxicos, bloqueia a absorção de nutrientes e desliga o sistema nervoso que controla o movimento intestinal.
          </p>
          <p className="text-[19px] text-[#333] bg-[#fee2e2] p-5 rounded-xl border border-[#fca5a5]">
            <b>E a pior notícia?</b> Quanto mais fibras secas você come sem primeiro remover esse biofilme, mais você alimenta o problema — o que os especialistas chamam de <b>Efeito Cimento</b>.
          </p>
        </div>
      </div>

      {/* Discovery Section */}
      <div className="py-[80px] bg-white">
        <div className="max-w-[680px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#16a34a] font-sans font-bold text-[14px] uppercase tracking-widest mb-2">A descoberta que mudou tudo</p>
            <h2 className="text-[32px] font-extrabold text-[#111] leading-tight">Nas montanhas remotas da China, o envelhecimento tem outra cara</h2>
          </div>

          <p className="text-[19px] mb-[20px] text-[#333]">
            Na vila de Bama, província de Guangxi, existe a maior concentração de centenários por metro quadrado do planeta. Homens e mulheres de 100, 110 anos que carregam a lenha, caminham pelas trilhas e dormem como crianças.
          </p>
          <p className="text-[19px] mb-[20px] text-[#333]">
            O que intriga gastroenterologistas do mundo inteiro não é apenas a longevidade — é a qualidade da saúde digestiva dessas pessoas. Elas não conhecem constipação. Não conhecem inchaço. Não conhecem o "peso" abdominal que para você parece normal.
          </p>
          <p className="text-[19px] mb-[20px] text-[#333]">
            A resposta está em uma herança invisível preservada pelo isolamento geográfico: a <b>Microbiota Ancestral</b>. Uma "floresta tropical" de micro-organismos — especialmente o <i>Lactobacillus reuteri</i> — que a civilização moderna destruiu com ultraprocessados, antibióticos e estresse crônico.
          </p>
          <p className="text-[19px] mb-[20px] text-[#333]">
            Estudos genômicos com esses centenários revelaram que o intestino deles produz quantidades extraordinárias de butirato — o "combustível premium" que lubrifica o trânsito, fortalece a barreira intestinal e mantém o Nervo Vago tônico e ativo.
          </p>
          
          <div className="bg-[#f0fdf4] p-6 rounded-2xl border border-[#bbf7d0] my-8">
            <h3 className="font-bold text-[#166534] text-[20px] mb-3">O Nervo Vago:</h3>
            <p className="text-[#15803d] m-0">
              O cabo de fibra ótica entre seu cérebro e seu intestino. Quando ele está ativo, o intestino se move. Quando o estresse e o biofilme o sufocam — a estagnação que você conhece tão bem.
            </p>
          </div>

          <p className="text-[22px] font-bold text-[#111] leading-snug text-center mt-10">
            O Protocolo de Bama é a tradução prática desse segredo milenar: 14 dias estruturados para dissolver o biofilme, recolonizar a microbiota ancestral e reativar o Nervo Vago — devolvendo ao seu sistema a inteligência biológica que ele nunca deveria ter perdido.
          </p>
        </div>
      </div>

      {/* Chapters Section */}
      <div className="py-[80px] bg-[#1c3557] text-white">
        <div className="max-w-[680px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#f6c445] font-sans font-bold text-[14px] uppercase tracking-widest mb-2">O que você vai aprender</p>
            <h2 className="text-[32px] font-extrabold leading-tight">Sete capítulos. Uma transformação completa e definitiva.</h2>
            <p className="text-[#9cb3cc] mt-4 text-[18px]">Cada capítulo termina com um "Resumo de Ação" — passos concretos que você implementa no mesmo dia. Sem teoria sem fim. Sem promessas vazias.</p>
          </div>

          <div className="space-y-6 font-sans">
            {[
              { num: "1", title: "O Segredo das Montanhas de Bama", desc: "A história dos centenários que esqueceram o que é constipação — e a ciência por trás da Microbiota Ancestral que os mantém jovens por dentro." },
              { num: "2", title: "O Inimigo Invisível", desc: "Por que o intestino vira \"cimento\" — e como o Biofilme Adeso sabota qualquer dieta. O erro fatal das fibras secas revelado." },
              { num: "3", title: "A Conexão Intestino-Cérebro", desc: "Como o estresse \"tranca\" a chave do peristaltismo — e os rituais de Bama que reativam o Nervo Vago em menos de 60 segundos." },
              { num: "4", title: "O Ritual de 30 Segundos", desc: "A técnica matinal de hidratação que dispara o Reflexo Gastrocólico adormecido — exatamente como os anciãos de Bama fazem ao amanhecer." },
              { num: "5", title: "Alimentos Vivos vs. Mortos", desc: "A distinção que os centenários fazem intuitivamente — e que você pode aplicar em qualquer supermercado. As bactérias da juventude e o que elas comem." },
              { num: "6", title: "O Lubrificante Natural", desc: "As gorduras inteligentes que mantêm o cólon escorregadio — e por que eliminar os óleos errados muda tudo em menos de 48 horas." },
              { num: "7", title: "Postura e Pressão", desc: "O erro de design do vaso sanitário moderno — e o ajuste de 15 segundos que elimina esforço, hemorroidas e a sensação de \"sobrou algo\"." },
            ].map((chapter, i) => (
              <div key={i} className="flex gap-4 bg-[#2a4a73] p-6 rounded-2xl">
                <div className="text-[#f6c445] font-black text-[40px] leading-none opacity-80">{chapter.num}</div>
                <div>
                  <h3 className="font-bold text-[20px] mb-2">{chapter.title}</h3>
                  <p className="text-[#cbd5e1] text-[15px] m-0 leading-relaxed">{chapter.desc}</p>
                </div>
              </div>
            ))}
            
            <div className="flex gap-4 bg-[#16a34a] p-6 rounded-2xl mt-8">
              <div className="text-white font-black text-[40px] leading-none opacity-80">+</div>
              <div>
                <h3 className="font-bold text-[20px] mb-2 text-white">Plano Prático de 14 Dias</h3>
                <p className="text-green-100 text-[15px] m-0 leading-relaxed">Lista de compras, 3 receitas-chave, cronograma fase a fase e checklist diário. Tudo para você começar amanhã de manhã.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Science Section */}
      <div className="py-[80px] bg-[#f8fafc]">
        <div className="max-w-[680px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#16a34a] font-sans font-bold text-[14px] uppercase tracking-widest mb-2">Fundamentação científica</p>
            <h2 className="text-[32px] font-extrabold text-[#111] leading-tight">Não é crença. É biologia comprovada.</h2>
            <p className="text-[#666] mt-4 text-[18px]">O Protocolo de Bama une sabedoria ancestral com evidências publicadas nos periódicos mais respeitados do mundo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            {[
              { icon: "🧬", title: "Lactobacillus Reuteri", desc: "Regulador mestre da motilidade intestinal que reduz o tempo de trânsito fecal e alivia dor visceral crônica.", ref: "Nature Reviews Gastroenterology" },
              { icon: "⚡", title: "Nervo Vago", desc: "90% das fibras do nervo vago levam informação do intestino ao cérebro — não o contrário. Sua microbiota controla seu humor.", ref: "Nature Reviews Neuroscience" },
              { icon: "🛡️", title: "Biofilme Bacteriano", desc: "LPS liberados por biofilmes inflamam a mucosa e reduzem drasticamente a motilidade — criando ciclo vicioso.", ref: "Frontiers in Microbiology" },
              { icon: "💧", title: "Reflexo Gastrocólico", desc: "Água morna em jejum aumenta significativamente as contrações colônicas de alta pressão — as únicas que movem o bolo fecal com eficiência.", ref: "European J. of Gastroenterology" },
              { icon: "🌿", title: "Psicobióticos", desc: "Certas cepas produzem GABA diretamente no intestino, reduzindo cortisol e mantendo o peristaltismo mesmo sob pressão.", ref: "Biological Psychiatry" },
              { icon: "📐", title: "Postura de Agachamento", desc: "Relaxa o músculo puborretal completamente, reduz esforço, previne hemorroidas e garante esvaziamento muito mais completo.", ref: "Digestive Diseases and Sciences" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[18px] text-[#111] mb-2">{item.title}</h3>
                <p className="text-[#444] text-[14px] mb-4 leading-relaxed">{item.desc}</p>
                <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider border-t border-gray-100 pt-3">{item.ref}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-[80px] bg-white">
        <div className="max-w-[680px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#16a34a] font-sans font-bold text-[14px] uppercase tracking-widest mb-2">Resultados reais</p>
            <h2 className="text-[32px] font-extrabold text-[#111] leading-tight">O que as pessoas estão sentindo</h2>
          </div>

          <div className="space-y-6 font-sans">
            {[
              { initial: "M", name: "MARIA HELENA, 57 anos", role: "São Paulo", text: "No terceiro dia já senti diferença. Acordei sem aquela pressão abdominal que me perseguia faz anos. Pensei que jamais voltaria a me sentir leve assim." },
              { initial: "R", name: "ROBERTO ALVES, 63 anos", role: "Porto Alegre", text: "Tentei de tudo: fibras, laxantes, probióticos de farmácia. Nada durava. Com o protocolo entendi finalmente o porquê. O cap. 2 sobre o biofilme virou minha vida de cabeça para baixo." },
              { initial: "C", name: "CLÁUDIA MENDES, 54 anos", role: "Recife", text: "O ritual dos 30 segundos parece simples demais para funcionar. Mas funciona. Na segunda semana já estava regulada como relógio — pela primeira vez em mais de 10 anos." },
              { initial: "A", name: "ANA LUCIA COSTA, 59 anos", role: "Belo Horizonte", text: "Meu marido notou a mudança antes de mim. Disse que eu estava com outra energia, outro brilho. Perdi 4cm de circunferência abdominal em 14 dias — sem mudar quantidade de comida." },
              { initial: "J", name: "JORGE SANTOS, 66 anos", role: "Curitiba", text: "Cético por natureza. Li o material esperando mais do mesmo. Mas as referências científicas são reais — fui verificar. Segui o plano na íntegra e os resultados falaram por si." },
              { initial: "F", name: "FÁTIMA OLIVEIRA, 52 anos", role: "Florianópolis", text: "Minha pele mudou junto com o intestino. As olheiras diminuíram, o inchaço no rosto sumiu. Não esperava esse efeito. O livro explica o motivo — e faz todo sentido." },
            ].map((review, i) => (
              <div key={i} className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
                <div className="text-[#f59e0b] text-xl mb-3">★★★★★</div>
                <p className="text-[#333] italic text-[16px] mb-4">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#1c3557] rounded-full flex items-center justify-center text-white font-bold">{review.initial}</div>
                  <div>
                    <div className="font-bold text-[14px] text-[#111]">{review.name}</div>
                    <div className="text-[12px] text-gray-500">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bonuses */}
      <div className="py-[80px] bg-[#f0fdf4] border-y border-[#bbf7d0]">
        <div className="max-w-[680px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#16a34a] font-sans font-bold text-[14px] uppercase tracking-widest mb-2">Bônus exclusivos</p>
            <h2 className="text-[32px] font-extrabold text-[#111] leading-tight">Tudo o que você recebe hoje</h2>
          </div>

          <div className="space-y-6 font-sans">
            {[
              { num: "1", title: "Guia Prático de 14 Dias — Lista de Compras + Receitas", desc: "Tudo o que você precisa comprar, as 3 receitas-chave (Gel Vassoura, Caldo de Limpeza e Chucrute de Ouro) e o cronograma completo fase a fase. Imprima e cole na geladeira." },
              { num: "2", title: "Checklist Diário de Recalibragem", desc: "Um checklist simples para marcar cada hábito diário do protocolo. Não deixa você esquecer nenhum passo — e dá a satisfação visual de ver seu progresso crescer dia a dia." },
              { num: "3", title: "Dicas de Ouro para Fixar na Geladeira", desc: "Os 3 mandamentos ancestrais condensados em um card visual que você coloca na geladeira: Água Morna SEMPRE · Relaxe a Mandíbula · Azeite é Remédio." },
            ].map((bonus, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-green-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#16a34a] text-white text-[10px] font-bold uppercase py-1 px-3 rounded-bl-lg">GRÁTIS</div>
                <div className="text-[#16a34a] font-black text-[14px] mb-1 uppercase tracking-wider">BÔNUS #{bonus.num}</div>
                <h3 className="font-bold text-[20px] text-[#111] mb-2">{bonus.title}</h3>
                <p className="text-[#444] text-[15px] m-0 leading-relaxed">{bonus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Offer Section */}
      <div className="py-[80px] bg-white">
        <div className="max-w-[680px] mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#16a34a] font-sans font-bold text-[14px] uppercase tracking-widest mb-2">Sua decisão</p>
            <h2 className="text-[32px] font-extrabold text-[#111] leading-tight">Escolha sua transformação</h2>
            <p className="text-[#666] mt-4 text-[18px]">Por um valor menor do que uma consulta médica, você acessa a ciência que os centenários vivem há milênios.</p>
          </div>

          <div className="bg-white border-[4px] border-[#16a34a] rounded-[24px] p-[40px] shadow-2xl relative font-sans">
            <div className="text-center mb-8 border-b border-gray-100 pb-8">
              <div className="text-[20px] text-gray-400 line-through font-bold">De R$ 197,00</div>
              <div className="text-[80px] text-[#16a34a] font-black leading-none tracking-[-2px] my-2">R$ 37,90</div>
              <div className="text-[14px] font-bold text-gray-500 uppercase tracking-wider">PAGAMENTO ÚNICO · ACESSO IMEDIATO</div>
            </div>

            <ul className="space-y-4 mb-8 text-[16px] text-[#333]">
              <li className="flex items-start gap-3"><span className="text-[#16a34a] font-bold">✓</span> E-book completo: O Código Oculto da Longevidade (7 capítulos)</li>
              <li className="flex items-start gap-3"><span className="text-[#16a34a] font-bold">✓</span> Protocolo Prático de 14 Dias passo a passo</li>
              <li className="flex items-start gap-3"><span className="text-[#16a34a] font-bold">✓</span> Lista de Compras Essencial</li>
              <li className="flex items-start gap-3"><span className="text-[#16a34a] font-bold">✓</span> As 3 Receitas-Chave de Bama</li>
              <li className="flex items-start gap-3"><span className="text-[#16a34a] font-bold">✓</span> Checklist Diário de Recalibragem</li>
              <li className="flex items-start gap-3"><span className="text-[#16a34a] font-bold">✓</span> Card "Dicas de Ouro para a Geladeira"</li>
              <li className="flex items-start gap-3"><span className="text-[#16a34a] font-bold">✓</span> Suporte por e-mail incluso</li>
              <li className="flex items-start gap-3"><span className="text-[#16a34a] font-bold">✓</span> Garantia incondicional de 7 dias</li>
            </ul>

            <a href="https://pay.hotmart.com/M105084214G" className="block text-center w-full bg-[#16a34a] text-white no-underline py-5 px-6 rounded-2xl text-[22px] font-black transition-all duration-300 border-b-[6px] border-[#15803d] shadow-xl hover:translate-y-[2px] hover:border-b-[4px]">
              SIM — QUERO MINHA LEVEZA ANCESTRAL →
            </a>
            
            <div className="text-center mt-6 text-[12px] text-gray-400 font-bold uppercase tracking-wider flex items-center justify-center gap-2">
              <span>🔒 Pagamento 100% seguro</span>
              <span>·</span>
              <span>SSL criptografado</span>
              <span>·</span>
              <span>Acesso imediato</span>
            </div>
          </div>
        </div>
      </div>

      {/* Guarantee */}
      <div className="py-[80px] bg-[#1c3557] text-white">
        <div className="max-w-[680px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3 text-center">
            <div className="w-32 h-32 mx-auto border-4 border-[#f6c445] rounded-full flex flex-col items-center justify-center p-2">
              <span className="text-[40px] font-black leading-none text-[#f6c445]">7</span>
              <span className="text-[12px] font-bold uppercase tracking-widest text-white">DIAS DE<br/>GARANTIA<br/>TOTAL</span>
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-[28px] font-extrabold mb-4 text-[#f6c445]">Risco zero para você</h2>
            <p className="text-[18px] font-bold mb-4">Se não funcionar, você não paga. Simples assim.</p>
            <p className="text-[16px] text-[#cbd5e1] mb-4">
              Aplique o Protocolo de Bama. Se ao final você não sentir uma diferença real — menos inchaço, mais leveza, digestão mais fluida — basta nos enviar um e-mail em até 7 dias após a compra e devolvemos 100% do seu investimento, sem perguntas, sem burocracia.
            </p>
            <p className="text-[16px] text-white font-bold">Você tem 7 dias para provar que funciona. O risco é todo nosso.</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-[80px] bg-[#f8fafc]">
        <div className="max-w-[680px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#16a34a] font-sans font-bold text-[14px] uppercase tracking-widest mb-2">Dúvidas frequentes</p>
            <h2 className="text-[32px] font-extrabold text-[#111] leading-tight">Perguntas que você provavelmente tem</h2>
          </div>

          <div className="space-y-4 font-sans">
            {[
              { q: "Para quem este protocolo é indicado?", a: "Para adultos — especialmente acima dos 40 anos — que sofrem com constipação crônica, inchaço abdominal persistente, sensação de esvaziamento incompleto, fadiga pós-refeição ou que simplesmente percebem que o intestino \"parou de ouvir\". O protocolo é seguro para a maioria das pessoas, mas recomendamos consultar seu médico se você tiver condições inflamatórias intestinais graves." },
              { q: "Preciso comprar produtos caros ou exóticos?", a: "Não. A lista de compras do protocolo usa ingredientes facilmente encontrados em qualquer mercado ou feirinha: abóbora, salsão, limão, gengibre, sementes de chia, linhaça, azeite extravirgem e vinagre de maçã. Os únicos \"suplementos\" mencionados são opcionais (Magnésio Bisglicinato — disponível em farmácias por menos de R$30)." },
              { q: "Em quanto tempo vejo resultado?", a: "Muitas pessoas relatam diferença perceptível nos primeiros 3 dias da Fase 1 (Limpeza de Choque). A transformação mais significativa — com a recolonização da microbiota — ocorre entre os dias 4 e 10. Ao final dos 14 dias, o objetivo é que o seu intestino funcione no \"piloto automático\", sem dependência de laxantes ou rituais elaborados." },
              { q: "É um e-book ou tem acesso a aulas/vídeos?", a: "O Protocolo de Bama é entregue como e-book digital (PDF) — compatível com celular, tablet e computador. Você pode ler, salvar offline e imprimir. O formato foi escolhido intencionalmente: o protocolo é direto ao ponto, sem horas de vídeo para assistir antes de começar." },
              { q: "Como funciona a garantia de 7 dias?", a: "Simples: se em até 7 dias após a compra você não estiver satisfeito com os resultados — por qualquer motivo — basta enviar um e-mail para nosso suporte solicitando o reembolso. Devolvemos 100% do valor pago, sem questionamentos. Não precisamos de justificativa. Sua satisfação é a única condição." },
              { q: "Este protocolo substitui tratamento médico?", a: "Não. O Protocolo de Bama é um guia de hábitos baseado em sabedoria ancestral e respaldado por pesquisas científicas. Ele não substitui o acompanhamento de um gastroenterologista ou médico, especialmente em casos de doenças diagnosticadas. Se você tiver dúvidas sobre a adequação do protocolo ao seu estado de saúde, consulte seu médico antes de começar." },
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-5 font-bold text-[16px] text-[#111] flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  {faq.q}
                  <span className="text-[#16a34a] text-xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="p-5 pt-0 text-[#444] text-[15px] leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-[80px] bg-white text-center">
        <div className="max-w-[680px] mx-auto px-6">
          <p className="text-[#b91c1c] font-sans font-bold text-[14px] uppercase tracking-widest mb-4">Última chance</p>
          <h2 className="text-[32px] font-extrabold text-[#111] leading-tight mb-6">
            Você pode continuar lutando contra seu corpo.<br/>
            Ou pode dar a ele as instruções que ele está pedindo.
          </h2>
          <p className="text-[19px] text-[#444] mb-10">
            Os centenários de Bama não fazem nada extraordinário. Eles apenas respeitam o ritmo biológico que a modernidade nos fez esquecer. Em 14 dias, você pode reaprender esse ritmo.
          </p>
          <a href="https://pay.hotmart.com/M105084214G" className="inline-block w-full bg-[#16a34a] text-white no-underline py-5 px-8 rounded-2xl text-[22px] font-black font-sans transition-all duration-300 border-b-[6px] border-[#15803d] shadow-xl hover:translate-y-[2px] hover:border-b-[4px] mb-4">
            COMEÇAR MEU PROTOCOLO DE 14 DIAS →
          </a>
          <p className="text-[14px] text-gray-500 font-sans font-bold">
            Apenas R$ 37,90 · Garantia de 7 dias · Acesso imediato
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0f1f33] text-[#4a6278] py-[60px] px-[20px] text-center text-[13px] font-sans">
        <div className="max-w-[680px] mx-auto px-6">
          <p className="mb-4">© 2025 O Código Oculto da Longevidade — Todos os direitos reservados</p>
          <p className="mb-6 opacity-70">Este produto não substitui consulta médica. Resultados individuais podem variar.</p>
          <div className="flex justify-center gap-4 text-[12px] opacity-70">
            <a href="#" className="text-[#4a6278] hover:text-white transition-colors">Política de Privacidade</a>
            <span>·</span>
            <a href="#" className="text-[#4a6278] hover:text-white transition-colors">Termos de Uso</a>
            <span>·</span>
            <a href="#" className="text-[#4a6278] hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <div className={`fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.15)] p-3 md:p-4 z-50 transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="max-w-[680px] mx-auto flex flex-col items-center gap-2">
          <a href="https://pay.hotmart.com/M105084214G" className="w-full bg-[#16a34a] text-white text-center no-underline py-3 px-4 rounded-xl text-[16px] md:text-[18px] font-black font-sans transition-all duration-300 border-b-[4px] border-[#15803d] hover:translate-y-[2px] hover:border-b-[2px] flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
            <span>SIM — QUERO MINHA LEVEZA ANCESTRAL →</span>
            <span className="bg-white text-[#16a34a] px-2 py-0.5 rounded text-[14px] md:text-[15px] ml-0 md:ml-2">R$ 37,90</span>
          </a>
          <div className="text-center text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-wider flex flex-wrap items-center justify-center gap-1 md:gap-2">
            <span>🔒 Pagamento 100% seguro</span>
            <span>·</span>
            <span>SSL criptografado</span>
            <span>·</span>
            <span>Acesso imediato</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [showQuiz, setShowQuiz] = useState(true);
  const [quizData, setQuizData] = useState<{ name: string; answers: string[] }>({ name: '', answers: [] });

  const handleQuizComplete = (data: { name: string; answers: string[] }) => {
    setQuizData(data);
    setShowQuiz(false);
  };

  return (
    <>
      {showQuiz ? (
        <Quiz onComplete={handleQuizComplete} />
      ) : (
        <SalesPage quizData={quizData} />
      )}
    </>
  );
}
