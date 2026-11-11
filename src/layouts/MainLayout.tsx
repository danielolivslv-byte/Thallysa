import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppButton } from '../components/layout/WhatsAppButton';
import { BackToTop } from '../components/common/BackToTop';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F2] text-[#2D2D2D] font-sans antialiased overflow-x-hidden">
      {/* Skip to Main Content Link for Keyboard Accessibility (WCAG 2.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#193126] focus:text-white focus:outline-2 focus:outline-[#B6945A] focus:shadow-xl text-xs uppercase tracking-widest font-sans font-semibold rounded-[2px]"
      >
        Pular para o conteúdo principal
      </a>

      <Header />
      <div id="main-content" className="flex-1 flex flex-col" tabIndex={-1}>
        <Outlet />
      </div>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};
