import React from 'react';
import { ShieldCheck, Video, Laptop, FileCheck, Lock, Clock } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { PageContainer } from '../../components/ui/PageContainer';
import { PageHero } from '../../components/sections/PageHero';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Timeline } from '../../components/sections/Timeline';
import { InfoCard } from '../../components/cards/InfoCard';
import { CTA } from '../../components/sections/CTA';
import { Button } from '../../components/buttons/Button';
import { buildWhatsAppUrl } from '../../config/siteConfig';

export const AtendimentoPage: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl('Olá, Dra. Thallysa! Gostaria de entender mais sobre o atendimento e agendar uma consulta.');

  return (
    <>
      <SEO
        title="Como Funciona o Atendimento"
        description="Conheça as 4 etapas do atendimento jurídico de Thallysa Pinheiro: Contato, Análise, Orientação e Próximos Passos. Atendimento online em todo o Brasil com total sigilo."
        canonical="https://thallysapinheiro.adv.br/atendimento"
      />

      <main className="w-full bg-[#F8F6F2]">
        {/* Page Hero */}
        <PageHero
          kicker="Metodologia & Transparência"
          title="Como Funciona o Atendimento"
          description="Um processo claro e organizado em 4 etapas fundamentais para que você tome decisões jurídicas com segurança e total previsibilidade."
          parentPath="/"
          parentLabel="Início"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button href={whatsappUrl} isExternal variant="primary" size="lg" showArrow>
              Agendar Primeiro Contato
            </Button>
            <Button to="/faq" variant="secondary" size="lg">
              Ver Dúvidas Frequentes
            </Button>
          </div>
        </PageHero>

        {/* TIMELINE PRINCIPAL (Horizontal no Desktop, Vertical no Mobile) */}
        <section className="py-20 sm:py-28 border-b border-[#2D2D2D]/8 bg-white">
          <PageContainer>
            <SectionTitle
              align="center"
              kicker="Passo a Passo"
              title="A Jornada do Seu Atendimento"
              description="Estrutura pensada para oferecer tranquilidade, eficiência e comunicação contínua."
            />

            <Timeline className="mt-12 sm:mt-16" />
          </PageContainer>
        </section>

        {/* MODALIDADES DE ATENDIMENTO (ONLINE & PRESENCIAL) */}
        <section className="py-20 sm:py-28 border-b border-[#2D2D2D]/8 bg-[#F8F6F2]">
          <PageContainer>
            <SectionTitle
              kicker="Formatos"
              title="Atendimento Digital e Presencial"
              description="Tecnologia a serviço da conveniência e da segurança jurídica do cliente."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* Card Atendimento Digital */}
              <div className="p-8 sm:p-10 bg-white border border-[#2D2D2D]/10 rounded-[2px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-[#193126]">
                    <Laptop className="w-7 h-7 text-[#B6945A]" />
                    <h3 className="font-serif text-2xl font-medium">Atendimento 100% Online</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed font-normal mb-6">
                    Realizado por videoconferência com horário reservado, envio seguro de documentos digitalizados e assinatura eletrônica com validade jurídica pelo celular ou computador.
                  </p>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#2D2D2D]/75 font-sans">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B6945A]" />
                      <span>Reuniões pelo Google Meet ou WhatsApp corporativo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B6945A]" />
                      <span>Assinatura eletrônica de procurações e contratos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B6945A]" />
                      <span>Atendimento para residentes em qualquer cidade ou país</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card Atendimento Presencial */}
              <div className="p-8 sm:p-10 bg-white border border-[#2D2D2D]/10 rounded-[2px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-[#193126]">
                    <Clock className="w-7 h-7 text-[#B6945A]" />
                    <h3 className="font-serif text-2xl font-medium">Atendimento Presencial</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed font-normal mb-6">
                    Destinado a demandas que exigem reunião física ou por preferência do cliente, com agendamento prévio em ambiente reservado, discreto e confortável.
                  </p>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#2D2D2D]/75 font-sans">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B6945A]" />
                      <span>Sala de reuniões privativa com sigilo resguardado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B6945A]" />
                      <span>Exame direto de documentos físicos e contratos originais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B6945A]" />
                      <span>Horários flexíveis mediante reserva prévia</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* DIRETRIZES DE SIGILO E SEGURANÇA */}
        <section className="py-20 sm:py-28 border-b border-[#2D2D2D]/8 bg-white">
          <PageContainer>
            <div className="p-8 sm:p-12 bg-[#193126] text-white rounded-[2px] border border-[#B6945A]/40 relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="w-5 h-5 text-[#B6945A]" />
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#B6945A] font-semibold">
                      Garantia de Confidencialidade
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-4">
                    Sigilo profissional e proteção integral de dados (LGPD)
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                    Todas as informações compartilhadas durante o atendimento inicial, bem como documentos e conversas, estão rigorosamente protegidas pelo dever legal de sigilo profissional do Estatuto da OAB e pela Lei Geral de Proteção de Dados.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <Button href={whatsappUrl} isExternal variant="gold" size="lg" showArrow>
                    Fale em Ambiente Seguro
                  </Button>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* CTA FINAL */}
        <CTA
          kicker="Inicie Seu Atendimento"
          title="Dê o primeiro passo para solucionar sua questão jurídica."
          description="Envie uma mensagem e nossa equipe responderá com a indicação dos horários disponíveis para sua consulta."
          buttonText="Iniciar Atendimento no WhatsApp"
        />
      </main>
    </>
  );
};

export default AtendimentoPage;
