import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, Scale, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { PageContainer } from '../../components/ui/PageContainer';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { HomeHero } from '../../components/sections/HomeHero';
import { PracticeCard } from '../../components/cards/PracticeCard';
import { Timeline } from '../../components/sections/Timeline';
import { CTA } from '../../components/sections/CTA';
import { Button } from '../../components/buttons/Button';
import { siteConfig } from '../../config/siteConfig';

const practiceHighlights: Record<string, string[]> = {
  trabalho: [
    'Rescisão de contrato e verbas devidas',
    'Horas extras e equiparação salarial',
    'Assédio moral e rescisão indireta',
  ],
  consumidor: [
    'Negativação indevida e cobranças abusivas',
    'Cancelamento e atraso de voos / extravio',
    'Golpes bancários, PIX e fraudes virtuais',
  ],
  familia: [
    'Divórcio consensual e litigioso',
    'Guarda, convivência e pensão alimentícia',
    'Inventário, partilha e planejamento sucessório',
  ],
};

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Início"
        description="Thallysa Pinheiro — Advocacia e Consultoria Jurídica. Atendimento próximo, estratégico e humanizado em Direito do Trabalho, Consumidor e Família."
      />

      <main className="w-full bg-[#F8F6F2]">
        {/* 1. HERO SECTION */}
        <HomeHero />

        {/* 2. RESUMO DA ADVOGADA */}
        <section className="py-20 sm:py-28 border-b border-[#2D2D2D]/8 bg-white">
          <PageContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Coluna Visual Esquerda */}
              <div className="lg:col-span-5">
                <div className="p-8 sm:p-12 bg-[#F8F6F2] border border-[#B6945A]/35 rounded-[2px] relative">
                  <div className="w-16 h-16 rounded-full border border-[#B6945A] flex items-center justify-center bg-[#193126] text-[#B6945A] font-serif text-2xl mb-6">
                    TP
                  </div>
                  <blockquote className="font-serif italic text-xl sm:text-2xl text-[#193126] leading-snug mb-6">
                    &ldquo;O direito ganha verdadeiro sentido quando compreende a realidade de quem busca justiça.&rdquo;
                  </blockquote>
                  <div className="pt-4 border-t border-[#2D2D2D]/10">
                    <p className="font-serif text-lg font-semibold text-[#193126]">
                      Dra. Thallysa Pinheiro
                    </p>
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#8E6D34] mt-0.5">
                      Advogada Fundadora
                    </p>
                  </div>
                </div>
              </div>

              {/* Coluna Conteúdo Direita */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <SectionTitle
                  kicker="Sobre a Profissional"
                  title="Advocacia pautada em rigor técnico, empatia e compromisso real."
                  description="Acreditamos que cada demanda jurídica carrega uma história singular. Por isso, nosso escritório afasta o atendimento impessoal e padronizado para oferecer estratégias sob medida com acompanhamento constante."
                  className="mb-8"
                />

                {/* Pilares */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 pt-2 border-t border-[#2D2D2D]/8">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#8E6D34]">
                      <Scale className="w-4 h-4" aria-hidden="true" />
                      <span className="font-serif text-base font-medium text-[#193126]">Técnica Apurada</span>
                    </div>
                    <p className="text-xs text-[#2D2D2D]/70 leading-relaxed font-sans">
                      Análise profunda de teses jurídicas e jurisprudência atualizada.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#8E6D34]">
                      <HeartHandshake className="w-4 h-4" aria-hidden="true" />
                      <span className="font-serif text-base font-medium text-[#193126]">Humanização</span>
                    </div>
                    <p className="text-xs text-[#2D2D2D]/70 leading-relaxed font-sans">
                      Comunicação acessível, escuta atenta e respeito ao seu momento.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#8E6D34]">
                      <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                      <span className="font-serif text-base font-medium text-[#193126]">Transparência</span>
                    </div>
                    <p className="text-xs text-[#2D2D2D]/70 leading-relaxed font-sans">
                      Clareza absoluta sobre riscos, prazos e custos desde o primeiro dia.
                    </p>
                  </div>
                </div>

                <div>
                  <Button to="/sobre" variant="primary" showArrow>
                    Saiba mais sobre a trajetória
                  </Button>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* 3. RESUMO DAS ÁREAS */}
        <section className="py-20 sm:py-28 border-b border-[#2D2D2D]/8 bg-[#F8F6F2]">
          <PageContainer>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
              <SectionTitle
                kicker="Especialidades"
                title="Áreas de Atuação Jurídica"
                description="Soluções preventivas e contenciosas desenvolvidas com foco na proteção integral dos seus direitos."
                className="mb-0"
              />
              <Button to="/areas" variant="secondary" showArrow className="self-start md:self-auto shrink-0">
                Ver todas as áreas
              </Button>
            </div>

            {/* Grid dos Cards de Áreas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteConfig.areas.map((area, index) => (
                <PracticeCard
                  key={area.id}
                  id={area.id}
                  slug={area.slug}
                  title={area.title}
                  description={area.shortDescription}
                  index={index + 1}
                  highlightItems={practiceHighlights[area.slug]}
                />
              ))}
            </div>
          </PageContainer>
        </section>

        {/* 4. COMO FUNCIONA (METODOLOGIA) */}
        <section className="py-20 sm:py-28 border-b border-[#2D2D2D]/8 bg-white">
          <PageContainer>
            <SectionTitle
              align="center"
              kicker="Como Funciona"
              title="Atendimento transparente do primeiro contato à solução"
              description="Um fluxo de trabalho organizado para que você compreenda com segurança cada etapa do seu processo."
            />

            <Timeline className="mt-12 sm:mt-16" />

            <div className="mt-16 text-center">
              <Button to="/atendimento" variant="outline" showArrow>
                Conheça o processo detalhado
              </Button>
            </div>
          </PageContainer>
        </section>

        {/* 5. CTA FINAL */}
        <CTA />
      </main>
    </>
  );
};

export default HomePage;
