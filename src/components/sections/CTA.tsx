import React from 'react';
import { PageContainer } from '../ui/PageContainer';
import { Button } from '../buttons/Button';
import { buildWhatsAppUrl, siteConfig } from '../../config/siteConfig';

interface CTAProps {
  kicker?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  whatsappMessage?: string;
  className?: string;
}

export const CTA: React.FC<CTAProps> = ({
  kicker = 'Atendimento Personalizado',
  title = 'Pronto para esclarecer suas dúvidas com segurança jurídica?',
  description = 'Converse diretamente com a Dra. Thallysa Pinheiro e tenha uma análise detalhada e humanizada da sua situação.',
  buttonText = 'Agendar Consulta no WhatsApp',
  whatsappMessage,
  className = '',
}) => {
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage || siteConfig.whatsappMessages.general);

  return (
    <section className={`py-16 sm:py-24 bg-[#193126] text-white relative overflow-hidden ${className}`}>
      {/* Subtle gold accent frame line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-[#B6945A]/50"
        aria-hidden="true"
      />

      <PageContainer size="narrow">
        <div className="text-center flex flex-col items-center">
          <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#B6945A] mb-4">
            {kicker}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.18] text-balance">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mb-10 text-balance font-normal">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Button
              href={whatsappUrl}
              isExternal
              variant="gold"
              size="lg"
              showArrow
            >
              {buttonText}
            </Button>
            <Button
              to="/atendimento"
              variant="outline"
              size="lg"
              className="text-white border-white/30 hover:border-white hover:bg-white/10"
            >
              Entenda como funciona
            </Button>
          </div>

          <p className="mt-8 text-xs text-white/50 tracking-wider font-sans">
            Atendimento digital seguro para todo o Brasil e presencial com hora marcada.
          </p>
        </div>
      </PageContainer>
    </section>
  );
};

export default CTA;
