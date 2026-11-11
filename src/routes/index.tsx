import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';

// Lazy loading with code splitting for optimal performance
const HomePage = React.lazy(() => import('../pages/Home'));
const SobrePage = React.lazy(() => import('../pages/Sobre'));
const AreasPage = React.lazy(() => import('../pages/Areas'));
const AreaDetalhePage = React.lazy(() => import('../pages/AreaDetalhe'));
const AtendimentoPage = React.lazy(() => import('../pages/Atendimento'));
const FAQPage = React.lazy(() => import('../pages/FAQ'));
const ContatoPage = React.lazy(() => import('../pages/Contato'));
const PoliticaPrivacidadePage = React.lazy(() => import('../pages/PoliticaPrivacidade'));
const NotFoundPage = React.lazy(() => import('../pages/NotFound'));

const PageLoadingFallback: React.FC = () => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center py-24 bg-[#F8F6F2]" role="status" aria-label="Carregando conteúdo">
    <div className="w-10 h-10 border-2 border-[#193126]/20 border-t-[#B6945A] rounded-full animate-spin mb-4" />
    <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#193126]/60">
      Carregando...
    </span>
  </div>
);

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageLoadingFallback />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Home */}
          <Route index element={<HomePage />} />

          {/* Sobre */}
          <Route path="sobre" element={<SobrePage />} />

          {/* Áreas de Atuação */}
          <Route path="areas" element={<AreasPage />} />
          <Route
            path="areas/trabalho"
            element={<AreaDetalhePage areaSlug="trabalho" forcedTitle="Direito do Trabalho" />}
          />
          <Route
            path="areas/consumidor"
            element={<AreaDetalhePage areaSlug="consumidor" forcedTitle="Direito do Consumidor" />}
          />
          <Route
            path="areas/familia"
            element={<AreaDetalhePage areaSlug="familia" forcedTitle="Direito de Família" />}
          />
          {/* Dynamic fallback for any additional practice area */}
          <Route path="areas/:slug" element={<AreaDetalhePage />} />

          {/* Como funciona / Atendimento */}
          <Route path="atendimento" element={<AtendimentoPage />} />

          {/* Perguntas Frequentes */}
          <Route path="faq" element={<FAQPage />} />

          {/* Contato */}
          <Route path="contato" element={<ContatoPage />} />

          {/* Política de Privacidade */}
          <Route path="politica-de-privacidade" element={<PoliticaPrivacidadePage />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
