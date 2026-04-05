import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-8">Termos de Uso</h1>
      <p className="mb-4">Ao acessar o site <a href="https://www.protocolodebama.com.br/" className="hover:underline">www.protocolodebama.com.br</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Licença de Uso</h2>
      <p className="mb-4">É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site <a href="https://www.protocolodebama.com.br/" className="hover:underline">www.protocolodebama.com.br</a>, apenas para visualização transitória pessoal e não comercial.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Isenção de Responsabilidade</h2>
      <p className="mb-4">Os materiais no site do Protocolo de Bama são fornecidos 'como estão'. Protocolo de Bama não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos. As informações contidas neste site são apenas para fins informativos e não substituem o conselho, diagnóstico ou tratamento médico profissional.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Limitações</h2>
      <p className="mb-4">Em nenhum caso o Protocolo de Bama ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Protocolo de Bama.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Precisão dos materiais</h2>
      <p className="mb-4">Os materiais exibidos no site do Protocolo de Bama podem incluir erros técnicos, tipográficos ou fotográficos. Protocolo de Bama não garante que qualquer material em seu site seja preciso, completo ou atual.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Links</h2>
      <p className="mb-4">O Protocolo de Bama não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Protocolo de Bama do site.</p>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link to="/" className="text-[#16a34a] font-bold hover:underline">← Voltar para a página inicial</Link>
      </div>
    </div>
  );
}
