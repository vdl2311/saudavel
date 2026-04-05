import React from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
      <p className="mb-4">Sua privacidade é importante para nós. É política do Protocolo de Bama respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://www.protocolodebama.com.br/" className="hover:underline">www.protocolodebama.com.br</a>, e outros sites que possuímos e operamos.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Informações que coletamos</h2>
      <p className="mb-4">Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Uso das informações</h2>
      <p className="mb-4">Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookies</h2>
      <p className="mb-4">Usamos cookies para coletar informações sobre sua atividade em nosso site. Isso nos ajuda a entender como você usa o site e a melhorar sua experiência. Também utilizamos cookies de terceiros, como o Pixel do Facebook, para entender o desempenho de nossas campanhas e oferecer conteúdo relevante.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Links para sites de terceiros</h2>
      <p className="mb-4">Nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Consentimento</h2>
      <p className="mb-4">O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato pelo e-mail: suporte@protocolodebama.com.br</p>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link to="/" className="text-[#16a34a] font-bold hover:underline">← Voltar para a página inicial</Link>
      </div>
    </div>
  );
}
