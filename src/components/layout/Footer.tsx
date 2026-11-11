import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Instagram, Phone, Mail, ShieldCheck } from 'lucide-react';
import { PageContainer } from '../ui/PageContainer';
import { buildWhatsAppUrl, siteConfig } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <footer className="w-full bg-[#193126] text-[#F8F6F2] border-t border-[#B6945A]/25 relative overflow-hidden">
      {/* Top ambient gold accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B6945A] to-transparent"
        aria-hidden="true"
      />

      <PageContainer>
        {/* Main Footer Grid */}
        <div className="py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* COLUNA 1: LOGO, APRESENTAÇÃO E CONTATO RÁPIDO (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Brand Lockup */}
              <Link to="/" className="flex items-center gap-3.5 group inline-flex mb-6 select-none">
                <div className="w-11 h-11 flex items-center justify-center border border-[#B6945A]/50 bg-[#244434] text-[#F8F6F2] font-serif text-2xl font-light tracking-wide shadow-sm group-hover:border-[#B6945A] group-hover:bg-[#193126] transition-colors duration-300">
                  TP
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-semibold text-white tracking-tight leading-none group-hover:text-[#B6945A] transition-colors">
                    Thallysa Pinheiro
                  </span>
                  <span className="font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-[#B6945A] mt-1.5 leading-none">
                    Advocacia e Consultoria Jurídica
                  </span>
                </div>
              </Link>

              <p className="text-sm text-[#F8F6F2]/75 leading-relaxed max-w-md font-normal mb-8">
                {siteConfig.description} Atuação focada na excelência técnica, ética inegociável e defesa estratégica de seus direitos com atendimento digital em todo o território nacional.
              </p>

              {/* Badges de Contato Rápido */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-sans">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir conversa no WhatsApp oficial"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[2px] bg-white/5 border border-white/10 hover:border-[#B6945A] hover:bg-white/10 transition-colors text-white"
                >
                  <MessageCircle className="w-4 h-4 text-[#B6945A]" aria-hidden="true" />
                  <span>{siteConfig.whatsappFormatted}</span>
                </a>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Acessar perfil no Instagram"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[2px] bg-white/5 border border-white/10 hover:border-[#B6945A] hover:bg-white/10 transition-colors text-white"
                >
                  <Instagram className="w-4 h-4 text-[#B6945A]" aria-hidden="true" />
                  <span>{siteConfig.instagram}</span>
                </a>
              </div>
            </div>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO / LINKS RÁPIDOS (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#B6945A] mb-6">
              Navegação
            </h4>
            <ul className="space-y-3.5 text-sm font-sans">
              <li>
                <Link to="/" className="text-white/80 hover:text-[#B6945A] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-white/80 hover:text-[#B6945A] transition-colors">
                  Sobre a Advogada
                </Link>
              </li>
              <li>
                <Link to="/areas" className="text-white/80 hover:text-[#B6945A] transition-colors">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link to="/atendimento" className="text-white/80 hover:text-[#B6945A] transition-colors">
                  Como Funciona o Atendimento
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-[#B6945A] transition-colors">
                  Perguntas Frequentes (FAQ)
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-white/80 hover:text-[#B6945A] transition-colors">
                  Canais de Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUNA 3: ÁREAS DE ATUAÇÃO (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#B6945A] mb-6">
              Especialidades
            </h4>
            <ul className="space-y-4 text-sm font-sans">
              <li>
                <Link
                  to="/areas/trabalho"
                  className="group flex items-center justify-between text-white/80 hover:text-[#B6945A] transition-colors"
                >
                  <div>
                    <span className="font-medium text-white group-hover:text-[#B6945A] transition-colors block">
                      Direito do Trabalho
                    </span>
                    <span className="text-xs text-white/50">Rescisões, horas extras e assédio</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#B6945A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/areas/consumidor"
                  className="group flex items-center justify-between text-white/80 hover:text-[#B6945A] transition-colors"
                >
                  <div>
                    <span className="font-medium text-white group-hover:text-[#B6945A] transition-colors block">
                      Direito do Consumidor
                    </span>
                    <span className="text-xs text-white/50">Negativação indevida, voos e fraudes</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#B6945A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/areas/familia"
                  className="group flex items-center justify-between text-white/80 hover:text-[#B6945A] transition-colors"
                >
                  <div>
                    <span className="font-medium text-white group-hover:text-[#B6945A] transition-colors block">
                      Direito de Família
                    </span>
                    <span className="text-xs text-white/50">Divórcios, guarda, alimentos e partilha</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#B6945A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR: AVISO LEGAL & COPYRIGHT */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/60 font-sans">
          {/* Aviso Legal Obrigatório */}
          <div className="text-center md:text-left max-w-xl">
            <p className="leading-relaxed">
              <span className="text-[#B6945A] font-medium">Aviso Legal: </span>
              Este site possui caráter exclusivamente informativo e não substitui consulta jurídica.
            </p>
            <p className="text-[11px] text-white/40 mt-1">
              Inscrição profissional: {siteConfig.oab} · Atendimento em conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>

          {/* Links e Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-right shrink-0">
            <Link
              to="/politica-de-privacidade"
              className="text-white/60 hover:text-[#B6945A] transition-colors underline-offset-4 hover:underline"
            >
              Política de Privacidade
            </Link>
            <span aria-hidden="true" className="hidden sm:inline text-white/20">|</span>
            <p>
              &copy; {currentYear} {siteConfig.lawyerName}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
};

export default Footer;
