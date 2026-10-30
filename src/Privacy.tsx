import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2D2A26] flex flex-col font-sans">
      <header className="bg-white border-b border-[#EAE5D9] sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" className="font-serif font-black tracking-tight text-xl sm:text-2xl text-[#1E1E1E]">
            Protocolo de Bama
          </Link>
          <Link to="/" className="text-xs font-semibold uppercase tracking-wider text-[#9E4A3B] hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Teste
          </Link>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-5 py-12 sm:py-20 w-full">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2EDE4] text-[#8C3A2B] text-xs font-semibold tracking-wide uppercase mb-6">
          <ShieldCheck className="w-3.5 h-3.5" /> Segurança & Transparência
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-black mb-6 leading-tight text-[#1E1E1E]">
          Política de Privacidade
        </h1>

        <p className="text-sm text-stone-500 mb-10 pb-4 border-b border-[#EAE5D9]">
          Última atualização: 29 de maio de 2026
        </p>

        <div className="space-y-8 text-base sm:text-lg leading-relaxed text-[#3E3A34]">
          <p>
            Sua privacidade é de extrema importância para nós. É política do <strong>Protocolo de Bama</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar em nosso portal e canais oficiais.
          </p>

          <h2 className="text-2xl font-serif font-black text-[#1E1E1E] mt-8 mb-3">
            1. Informações que Coletamos
          </h2>
          <p>
            As respostas fornecidas durante a realização do teste interativo ("Qual o seu Índice de Serenidade e Equilíbrio?") são processadas no seu próprio navegador para sugerir o conteúdo editorial educativo adequado. Não comercializamos nem compartilhamos suas respostas individuais com terceiros.
          </p>

          <h2 className="text-2xl font-serif font-black text-[#1E1E1E] mt-8 mb-3">
            2. Uso de Dados & Finalidade
          </h2>
          <p>
            Coletamos apenas dados estritamente necessários para permitir o funcionamento regular da plataforma, otimização da experiência de navegação e atendimento via suporte técnico quando solicitado expressamente pelo usuário.
          </p>

          <h2 className="text-2xl font-serif font-black text-[#1E1E1E] mt-8 mb-3">
            3. Cookies e Tecnologias de Medição
          </h2>
          <p>
            Utilizamos cookies primários apenas para memorizar o seu progresso na leitura e preferências de navegação. Eventuais ferramentas analíticas anônimas servem unicamente para avaliar o tempo de carregamento de páginas e aprimorar o desempenho visual.
          </p>

          <h2 className="text-2xl font-serif font-black text-[#1E1E1E] mt-8 mb-3">
            4. Segurança das Informações
          </h2>
          <p>
            Empregamos protocolos de criptografia SSL padrão de mercado para proteger as transmissões na web contra acessos não autorizados, alterações ou divulgações indevidas.
          </p>

          <h2 className="text-2xl font-serif font-black text-[#1E1E1E] mt-8 mb-3">
            5. Contato e Encarregado de Privacidade
          </h2>
          <p>
            Para exercer seus direitos de confirmação, acesso ou exclusão de dados, entre em contato através da nossa página de <Link to="/contato" className="text-[#9E4A3B] underline font-medium">Contato</Link>.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-[#EAE5D9]">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#9E4A3B] uppercase tracking-wider hover:underline">
            <ArrowLeft className="w-4 h-4" /> Voltar para a página inicial
          </Link>
        </div>
      </main>

      <footer className="bg-[#1C1A18] text-[#A69E94] border-t border-[#2E2B27] py-8 px-4 text-center text-xs">
        © 2026 Protocolo de Bama · Todos os direitos reservados.
      </footer>
    </div>
  );
}
