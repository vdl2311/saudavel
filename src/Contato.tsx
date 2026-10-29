import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Mail, Clock, CheckCircle2 } from 'lucide-react';

export default function Contato() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2D2A26] flex flex-col font-sans">
      <header className="bg-white border-b border-[#EAE5D9] sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" className="font-serif font-black tracking-tight text-xl sm:text-2xl text-[#1E1E1E]">
            Protocolo da Serenidade
          </Link>
          <Link to="/" className="text-xs font-semibold uppercase tracking-wider text-[#9E4A3B] hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Teste
          </Link>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-5 py-12 sm:py-20 w-full">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2EDE4] text-[#8C3A2B] text-xs font-semibold tracking-wide uppercase mb-6">
          <MessageSquare className="w-3.5 h-3.5" /> Fale Conosco
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-black mb-4 leading-tight text-[#1E1E1E]">
          Atendimento & Suporte
        </h1>

        <p className="text-base sm:text-lg text-[#5A554E] leading-relaxed mb-10">
          Dúvidas sobre o questionário, acesso ao material educativo ou sugestões? Nossa equipe está à disposição para auxiliar você.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-[#EAE5D9] p-6 rounded-xl shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#FAF2F0] text-[#9E4A3B] flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1E1E1E] mb-1">
              E-mail Direto
            </h3>
            <p className="text-xs text-stone-500 mb-2">
              Para dúvidas gerais e pós-venda
            </p>
            <a href="mailto:contato@protocolodaserenidade.com" className="text-sm font-semibold text-[#9E4A3B] hover:underline">
              contato@protocolodaserenidade.com
            </a>
          </div>

          <div className="bg-white border border-[#EAE5D9] p-6 rounded-xl shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#FAF2F0] text-[#9E4A3B] flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1E1E1E] mb-1">
              Horário de Atendimento
            </h3>
            <p className="text-xs text-stone-500 mb-2">
              Segunda a Sexta-feira
            </p>
            <p className="text-sm font-medium text-stone-700">
              09:00 às 18:00 (Horário de Brasília)
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="bg-white border border-emerald-200 p-8 rounded-xl text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
              Mensagem enviada com sucesso!
            </h3>
            <p className="text-stone-600 text-sm max-w-md mx-auto mb-6">
              Agradecemos o seu contato. Nossa equipe responderá no seu e-mail cadastrado em até 1 dia útil.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-[#9E4A3B] font-bold uppercase tracking-wider hover:underline"
            >
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-[#EAE5D9] p-6 sm:p-8 rounded-xl shadow-xs space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                Seu Nome
              </label>
              <input
                type="text"
                required
                placeholder="Como prefere ser chamada?"
                className="w-full px-4 py-3 rounded-lg border border-[#EAE5D9] focus:outline-none focus:border-[#9E4A3B] text-base"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                Seu E-mail
              </label>
              <input
                type="email"
                required
                placeholder="seuemail@exemplo.com"
                className="w-full px-4 py-3 rounded-lg border border-[#EAE5D9] focus:outline-none focus:border-[#9E4A3B] text-base"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                Mensagem
              </label>
              <textarea
                required
                rows={4}
                placeholder="Como podemos te ajudar hoje?"
                className="w-full px-4 py-3 rounded-lg border border-[#EAE5D9] focus:outline-none focus:border-[#9E4A3B] text-base resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#9E4A3B] hover:bg-[#863B2E] text-white text-base font-bold rounded-lg transition-colors cursor-pointer shadow-md"
            >
              Enviar Mensagem
            </button>
          </form>
        )}

        <div className="mt-16 pt-8 border-t border-[#EAE5D9]">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#9E4A3B] uppercase tracking-wider hover:underline">
            <ArrowLeft className="w-4 h-4" /> Voltar para a página inicial
          </Link>
        </div>
      </main>

      <footer className="bg-[#1C1A18] text-[#A69E94] border-t border-[#2E2B27] py-8 px-4 text-center text-xs">
        © 2026 Protocolo da Serenidade · Todos os direitos reservados.
      </footer>
    </div>
  );
}
