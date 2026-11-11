import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { buildWhatsAppUrl, siteConfig } from '../../config/siteConfig';

interface NavItem {
  label: string;
  path: string;
  end?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Início', path: '/', end: true },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Áreas de atuação', path: '/areas' },
  { label: 'Atendimento', path: '/atendimento' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contato', path: '/contato' },
];

const WHATSAPP_CONSULTATION_MSG = 'Olá, Thallysa! Gostaria de informações sobre uma consulta.';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Monitor scroll threshold (40px)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll and handle ESC key for accessibility
  useEffect(() => {
    if (!isMobileOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    const timer = setTimeout(() => {
      firstFocusableRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
      }

      // Simple focus trap
      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
          const first = focusableElements[0];
          const last = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileOpen]);

  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_CONSULTATION_MSG);

  return (
    <>
      {/* Fixed Header with smooth 300ms transition on scroll */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-[18px] border-b border-[#2D2D2D]/8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-[74px] md:h-[82px] lg:h-[92px] flex items-center justify-between gap-6">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 sm:gap-3.5 group select-none shrink-0"
            aria-label="Thallysa Pinheiro — Página Inicial"
          >
            {/* Elegant Monogram */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border border-[#B6945A]/50 bg-[#193126] text-[#F8F6F2] font-serif text-xl sm:text-2xl font-light tracking-wide shadow-sm group-hover:border-[#B6945A] group-hover:bg-[#244434] transition-colors duration-300">
              TP
            </div>
            {/* Brand Typography */}
            <div className="flex flex-col">
              <span className="font-serif text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-[#193126] tracking-tight leading-none group-hover:text-[#244434] transition-colors">
                Thallysa Pinheiro
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.16em] uppercase text-[#8E6D34] mt-1 leading-none">
                Advocacia e Consultoria Jurídica
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-8"
            aria-label="Navegação principal"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `relative py-2 text-[14px] xl:text-[15px] tracking-wide transition-colors duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#193126] font-semibold'
                      : 'text-[#2D2D2D]/75 hover:text-[#B6945A] font-normal'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeHeaderUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B6945A]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT ACTION: CTA BUTTON (DESKTOP) + HAMBURGER (MOBILE) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 sm:py-2.5 bg-[#193126] text-[#FFFFFF] text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.14em] rounded-[2px] border border-[#B6945A]/30 hover:bg-[#244434] hover:border-[#B6945A] hover:shadow-[0_4px_16px_rgba(25,49,38,0.18)] transition-all duration-200 group whitespace-nowrap shrink-0"
              aria-label="Agendar Consulta via WhatsApp"
            >
              <span>Agendar Consulta</span>
              <ArrowUpRight className="w-4 h-4 text-[#B6945A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={isMobileOpen}
              className="lg:hidden p-2 text-[#193126] hover:text-[#B6945A] transition-colors focus-visible:outline-2 focus-visible:outline-[#B6945A] rounded-sm"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Structural Spacer keeping document flow aligned with responsive header height */}
      <div
        className="h-[74px] md:h-[82px] lg:h-[92px] w-full shrink-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* MOBILE DRAWER (Framer Motion Lateral Panel) */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
              onClick={() => setIsMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-out White Panel (100% width) */}
            <motion.div
              ref={drawerRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação mobile"
              className="absolute top-0 right-0 bottom-0 w-full bg-[#FFFFFF] flex flex-col justify-between p-6 sm:p-8 overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#2D2D2D]/10">
                <Link
                  to="/"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-3 select-none"
                >
                  <div className="w-9 h-9 flex items-center justify-center border border-[#B6945A]/50 bg-[#193126] text-[#F8F6F2] font-serif text-lg font-light">
                    TP
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-[17px] font-semibold text-[#193126] leading-none">
                      Thallysa Pinheiro
                    </span>
                    <span className="font-sans text-[8px] font-semibold tracking-[0.14em] uppercase text-[#8E6D34] mt-1 leading-none">
                      Advocacia e Consultoria
                    </span>
                  </div>
                </Link>
                <button
                  ref={firstFocusableRef}
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Fechar menu"
                  className="p-2 text-[#193126] hover:text-[#B6945A] transition-colors focus-visible:outline-2 focus-visible:outline-[#B6945A] rounded-sm"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Vertical Menu Navigation with Staggered Fade */}
              <nav className="my-auto py-8 flex flex-col gap-5 sm:gap-6" aria-label="Links do menu mobile">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index + 0.1, duration: 0.3 }}
                  >
                    <NavLink
                      to={item.path}
                      end={item.end}
                      onClick={() => setIsMobileOpen(false)}
                      className={({ isActive }) =>
                        `group flex items-center justify-between text-2xl sm:text-3xl font-serif py-1 transition-colors ${
                          isActive
                            ? 'text-[#193126] font-semibold'
                            : 'text-[#2D2D2D]/75 hover:text-[#B6945A]'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{item.label}</span>
                          {isActive ? (
                            <span className="w-2 h-2 rounded-full bg-[#B6945A]" aria-hidden="true" />
                          ) : (
                            <span className="text-xs font-sans text-[#2D2D2D]/35 group-hover:text-[#B6945A] transition-colors">
                              0{index + 1}
                            </span>
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Bottom CTA */}
              <div className="pt-6 border-t border-[#2D2D2D]/10 flex flex-col gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#193126] text-[#FFFFFF] text-xs sm:text-sm font-medium uppercase tracking-[0.14em] rounded-[2px] border border-[#B6945A]/30 hover:bg-[#244434] hover:border-[#B6945A] transition-all duration-200"
                >
                  <span>Agendar Consulta</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B6945A]" />
                </a>
                <p className="text-[11px] text-center text-[#2D2D2D]/60 tracking-wider">
                  {siteConfig.address.formatted}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
