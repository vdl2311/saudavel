import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './components/MainLayout';

export default function Privacy() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-serif font-black mb-12">Política de Privacidade</h1>
        <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:mt-16 prose-headings:mb-8 prose-p:mb-8 leading-loose">
          <p className="mb-10 italic text-text-muted text-xl border-l-4 border-brand-red pl-6">Última atualização: 15 de Maio de 2024</p>
          <p className="mb-8">Sua privacidade é importante para nós. É política do Protocolo de Bama respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://www.protocolodebama.com.br/" className="hover:underline text-brand-red font-bold">www.protocolodebama.com.br</a>, e outros sites que possuímos e operamos.</p>
          
          <h2 className="text-3xl font-serif font-black text-black">1. Informações que coletamos</h2>
          <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
          
          <h2 className="text-3xl font-serif font-black text-black">2. Uso das informações</h2>
          <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
          
          <h2 className="text-3xl font-serif font-black text-black">3. Cookies</h2>
          <p>Usamos cookies para coletar informações sobre sua atividade em nosso site. Isso nos ajuda a entender como você usa o site e a melhorar sua experiêntia. Também utilizamos cookies de terceiros, como o Pixel do Facebook, para entender o desempenho de nossas campanhas e oferecer conteúdo relevante.</p>
          
          <h2 className="text-3xl font-serif font-black text-black">4. Links para sites de terceiros</h2>
          <p>Nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
          
          <h2 className="text-3xl font-serif font-black text-black">5. Consentimento</h2>
          <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato pelo e-mail: <span className="text-brand-red font-bold">suporte@protocolodebama.com.br</span></p>
        </div>
        <div className="mt-20 pt-10 border-t border-gray-100">
          <Link to="/" className="text-brand-red font-bold uppercase tracking-widest text-xs hover:underline">← Voltar para a página inicial</Link>
        </div>
      </div>
    </Layout>
  );
}
