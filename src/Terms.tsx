import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

export default function Terms() {
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
          <FileText className="w-3.5 h-3.5" /> Condições Gerais
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-black mb-6 leading-tight text-[#1E1E1E]">
          Termos de Uso
        </h1>

        <p className="text-sm text-stone-500 mb-10 pb-4 border-b border-[#EAE5D9]">
          Última atualização: 29 de maio de 2026
        </p>

        <div className="space-y-8 text-base sm:text-lg leading-relaxed text-[#3E3A34]">
          <p>
            Ao acessar o portal e participar do questionário interativo oferecido pelo <strong>Protocolo da Serenidade</strong>, você declara estar de acordo com as diretrizes e termos aqui estabelecidos.
          </p>

          <h2 className="text-2xl font-serif font-black text-[#1E1E1E] mt-8 mb-3">
            1. Caráter Exclusivamente Educativo e Informativo
          </h2>
          <p>
            Todo o conteúdo disponibilizado — incluindo o resultado do teste, o artigo explicativo sobre os vilarejos de longevidade e as sugestões de hábitos naturais — tem objetivo exclusivamente informativo e pedagógico. Em nenhuma circunstância constitui aconselhamento médico individualizado, diagnóstico clínico ou prescrição de qualquer medicamento.
          </p>
          <p>
            Qualquer alteração na rotina nutricional ou de exercícios deve ser sempre acompanhada por um médico ou profissional de saúde qualificado.
          </p>

          <h2 className="text-2xl font-serif font-black text-[#1E1E1E] mt-8 mb-3">
            2. Propriedade Intelectual
          </h2>
          <p>
            Os textos, imagens autorais, fluxos interativos e identidade visual do Protocolo da Serenidade são protegidos pelas leis de direitos autorais. É proibida a reprodução, cópia integral ou distribuição não autorizada para fins comerciais.
          </p>

          <h2 className="text-2xl font-serif font-black text-[#1E1E1E] mt-8 mb-3">
            3. Limitações de Responsabilidade
          </h2>
          <p>
            Os resultados decorrentes da aplicação de práticas e hábitos descritos podem variar de organismo para organismo, dependendo do histórico de saúde, predisposições individuais e constância de cada pessoa.
          </p>
        </div>

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
