import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QuizFunnel } from './components/QuizFunnel';
import Privacy from './Privacy';
import Terms from './Terms';
import Contato from './Contato';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizFunnel initialStep="welcome" />} />
        <Route path="/artigo-exclusivo" element={<QuizFunnel initialStep="article" />} />
        <Route path="/artigo" element={<QuizFunnel initialStep="article" />} />
        <Route path="/politica-de-privacidade" element={<Privacy />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/termos-de-uso" element={<Terms />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
