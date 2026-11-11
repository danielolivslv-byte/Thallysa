import React from 'react';
import { motion } from 'motion/react';
import { PageContainer } from '../ui/PageContainer';
import { Button } from '../buttons/Button';
import { PhotoPlaceholder } from '../ui/PhotoPlaceholder';
import { buildWhatsAppUrl, siteConfig } from '../../config/siteConfig';

export const HomeHero: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl('Olá, Dra. Thallysa! Gostaria de agendar uma consulta jurídica.');

  return (
    <section className="relative min-h-[calc(100vh-92px)] flex items-center py-12 lg:py-16 bg-[#F8F6F2] overflow-hidden border-b border-[#2D2D2D]/6">
      {/* Subtle ambient gradient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#B6945A]/8 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LADO ESQUERDO: Conteúdo Textual */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Texto pequeno */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#B6945A]" aria-hidden="true" />
              <span className="font-sans text-xs sm:text-[13px] font-semibold uppercase tracking-[0.25em] text-[#8E6D34]">
                Advocacia próxima de você
              </span>
            </div>

            {/* Título Grande */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-medium tracking-tight text-[#193126] leading-[1.08] mb-6 text-balance">
              Seus direitos.
              <br />
              Sua história.
              <br />
              <span className="text-[#B6945A] italic font-normal">
                Nosso compromisso.
              </span>
            </h1>

            {/* Texto Descritivo */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-[#2D2D2D]/80 leading-relaxed font-normal mb-8 sm:mb-10 max-w-xl text-balance">
              Orientação jurídica para os momentos que importam. Um olhar atento à sua realidade, com clareza e responsabilidade em cada decisão.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <Button
                href={whatsappUrl}
                isExternal
                variant="primary"
                size="lg"
                showArrow
              >
                Agendar Consulta
              </Button>
              <Button
                to="/sobre"
                variant="secondary"
                size="lg"
              >
                Conheça a Advogada
              </Button>
            </div>

            {/* Informação Adicional Abaixo */}
            <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#2D2D2D]/70 font-sans tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#244434]" aria-hidden="true" />
              <span>Atendimento online em todo o Brasil</span>
              <span aria-hidden="true" className="text-[#B6945A]">·</span>
              <span>Presencial com hora marcada</span>
            </div>
          </motion.div>

          {/* LADO DIREITO: Espaço configurável para fotografia */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[440px]">
              <PhotoPlaceholder
                src={siteConfig.lawyerPhoto}
                alt="Dra. Thallysa Pinheiro — Advogada e Consultora Jurídica"
                priority
              />
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
};

export default HomeHero;
