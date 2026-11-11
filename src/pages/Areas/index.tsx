import React from 'react';
import { SEO } from '../../components/common/SEO';
import { PageContainer } from '../../components/ui/PageContainer';
import { PageHero } from '../../components/sections/PageHero';
import { PracticeCard } from '../../components/cards/PracticeCard';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { InfoCard } from '../../components/cards/InfoCard';
import { CTA } from '../../components/sections/CTA';
import { siteConfig } from '../../config/siteConfig';

const detailedHighlights: Record<string, string[]> = {
  trabalho: [
    'Rescisão indireta por falta grave do empregador',
    'Horas extras, intervalos e adicional noturno',
    'Acidentes de trabalho e doenças ocupacionais',
    'Equiparação salarial e desvio de função',
  ],
  consumidor: [
    'Inscrição indevida no SPC/Serasa e indenizações',
    'Cancelamento, overbooking e atraso de voos',
    'Fraudes bancárias, empréstimos não autorizados e PIX',
    'Produtos com defeito não reparados em garantia',
  ],
  familia: [
    'Divórcio consensual e litigioso com partilha',
    'Fixação, revisão e execução de pensão alimentícia',
    'Guarda compartilhada e regulamentação de convivência',
    'Inventários judiciais e extrajudiciais em cartório',
  ],
};

export const AreasPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Áreas de Atuação"
        description="Conheça as especialidades jurídicas de Thallysa Pinheiro: Direito do Trabalho, Direito do Consumidor e Direito de Família. Atuação preventiva e contenciosa."
        canonical="https://thallysapinheiro.adv.br/areas"
      />

      <main className="w-full bg-[#F8F6F2]">
        {/* Page Hero */}
        <PageHero
          kicker="Soluções Especializadas"
          title="Áreas de Atuação"
          description="Assessoria jurídica precisa, focada nas necessidades individuais e na proteção ativa dos seus direitos perante a Justiça."
          parentPath="/"
          parentLabel="Início"
        />

        {/* Practice Cards Grid Section */}
        <section className="py-20 sm:py-28 border-b border-[#2D2D2D]/8 bg-white">
          <PageContainer>
            <SectionTitle
              kicker="Especialidades"
              title="Áreas Jurídicas em Destaque"
              description="Clique em cada especialidade para entender em detalhes as situações atendidas, como funciona o processo e respostas para dúvidas frequentes."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {siteConfig.areas.map((area, index) => (
                <PracticeCard
                  key={area.id}
                  id={area.id}
                  slug={area.slug}
                  title={area.title}
                  description={area.shortDescription}
                  index={index + 1}
                  highlightItems={detailedHighlights[area.slug]}
                />
              ))}
            </div>
          </PageContainer>
        </section>

        {/* Modalidades de Atuação: Preventiva vs Contenciosa */}
        <section className="py-20 sm:py-28 border-b border-[#2D2D2D]/8 bg-[#F8F6F2]">
          <PageContainer>
            <SectionTitle
              align="center"
              kicker="Abordagem"
              title="Como atuamos na defesa dos seus interesses"
              description="Combinamos inteligência preventiva para evitar conflitos com capacidade contenciosa firme quando a ação judicial é indispensável."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <InfoCard
                subtitle="Abordagem Preventiva"
                title="Consultoria & Resolução Extrajudicial"
                description="Análise prévia de contratos, notificações extrajudiciais, mediação de acordos e orientações preventivas para reduzir custos, mitigar riscos e preservar relações fundamentais."
              />
              <InfoCard
                subtitle="Abordagem Contenciosa"
                title="Processos Judiciais & Acompanhamento Integral"
                description="Propositura de ações judiciais com peças artesanais, produção consistente de provas, sustentação oral e recursos em tribunais até a satisfação definitiva do direito."
              />
            </div>
          </PageContainer>
        </section>

        {/* CTA */}
        <CTA
          kicker="Dúvidas sobre sua demanda?"
          title="Não encontrou sua situação listada ou tem urgência?"
          description="Entre em contato diretamente para que nossa equipe faça uma triagem inicial do seu caso com agilidade."
          buttonText="Falar com a Advogada no WhatsApp"
        />
      </main>
    </>
  );
};

export default AreasPage;
