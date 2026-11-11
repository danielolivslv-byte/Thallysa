import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Compass, CheckCircle2, Globe2, PhoneCall } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { PageContainer } from '../../components/ui/PageContainer';
import { PageHero } from '../../components/sections/PageHero';
import { PhotoPlaceholder } from '../../components/ui/PhotoPlaceholder';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { InfoCard } from '../../components/cards/InfoCard';
import { CTA } from '../../components/sections/CTA';
import { Button } from '../../components/buttons/Button';
import { buildWhatsAppUrl, siteConfig } from '../../config/siteConfig';

export const SobrePage: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl('Olá, Dra. Thallysa! Gostaria de conversar sobre meu caso.');

  return (
    <>
      <SEO
        title="Sobre a Advogada"
        description="Conheça a trajetória, valores éticos e método de atuação da Dra. Thallysa Pinheiro. Advocacia humanizada e estratégica com atendimento digital em todo o Brasil."
        canonical="https://thallysapinheiro.adv.br/sobre"
      />

      <main className="w-full bg-[#F8F6F2]">
        {/* Page Hero */}
        <PageHero
          kicker="Trajetória & Propósito"
          title="Dra. Thallysa Pinheiro"
          description="Dedicação integral ao exercício de uma advocacia técnica, transparente e verdadeiramente próxima da realidade dos clientes."
          parentPath="/"
          parentLabel="Início"
        />

        {/* 2-COLUMN SECTION PRINCIPAL */}
        <section className="py-20 sm:py-28 border-b border-[#2D2D2D]/8 bg-white">
          <PageContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* LADO ESQUERDO: GRANDE COMPOSIÇÃO VISUAL */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                {/* Imagem / Monograma */}
                <PhotoPlaceholder
                  src={siteConfig.lawyerPhoto}
                  alt="Dra. Thallysa Pinheiro — Advocacia e Consultoria"
                  className="shadow-[0_16px_40px_-10px_rgba(25,49,38,0.2)]"
                />

                {/* Composição Editorial de Valores */}
                <div className="p-8 sm:p-10 bg-[#193126] text-white rounded-[2px] border border-[#B6945A]/40 relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                    <div className="w-12 h-12 rounded-full border border-[#B6945A] flex items-center justify-center font-serif text-xl text-[#B6945A] bg-[#244434]">
                      TP
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-white font-medium">Pilares do Escritório</h3>
                      <p className="text-[11px] uppercase tracking-widest text-[#B6945A]">Essência e Princípios</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#B6945A]" />
                        <h4 className="font-serif text-lg text-white font-medium">Compromisso</h4>
                      </div>
                      <p className="text-xs text-white/75 leading-relaxed pl-4 font-sans">
                        Atuação ativa, leal e diligente em cada processo, zelando pela melhor estratégia para os seus objetivos.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#B6945A]" />
                        <h4 className="font-serif text-lg text-white font-medium">Responsabilidade</h4>
                      </div>
                      <p className="text-xs text-white/75 leading-relaxed pl-4 font-sans">
                        Transparência irrestrita quanto à viabilidade jurídica, custos e riscos, sem promessas ilusórias.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#B6945A]" />
                        <h4 className="font-serif text-lg text-white font-medium">Ética</h4>
                      </div>
                      <p className="text-xs text-white/75 leading-relaxed pl-4 font-sans">
                        Respeito estrito aos preceitos da advocacia, sigilo profissional inegociável e defesa firme das prerrogativas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LADO DIREITO: TEXTO INSTITUCIONAL, MISSÃO, ATUAÇÃO, ATENDIMENTO */}
              <div className="lg:col-span-7 flex flex-col justify-start">
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#8E6D34] mb-3">
                  Apresentação Institucional
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#193126] leading-[1.14] mb-8 text-balance">
                  Construindo soluções jurídicas com lucidez, empatia e solidez técnica.
                </h2>

                <div className="prose prose-slate max-w-none text-base sm:text-lg text-[#2D2D2D]/85 leading-relaxed space-y-6 font-normal">
                  <p>
                    A advocacia contemporânea exige mais do que o conhecimento rigoroso da legislação; ela demanda escuta sensível e capacidade analítica para interpretar a realidade por trás de cada conflito.
                  </p>
                  <p>
                    Sob a liderança da <strong>Dra. Thallysa Pinheiro</strong>, nosso escritório nasceu com o firme propósito de desmistificar o universo jurídico, traduzindo normas complexas em orientações práticas, acessíveis e eficazes.
                  </p>
                </div>

                {/* Bloco Missão */}
                <div className="my-10 p-6 sm:p-8 bg-[#F8F6F2] border-l-2 border-[#B6945A] rounded-[2px]">
                  <div className="flex items-center gap-2 mb-2 text-[#193126]">
                    <Compass className="w-5 h-5 text-[#8E6D34]" aria-hidden="true" />
                    <h3 className="font-serif text-xl sm:text-2xl font-medium">Nossa Missão</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed font-sans">
                    Oferecer um porto seguro de consultoria e contencioso jurídico, resguardando direitos fundamentais do cidadão no trabalho, nas relações de consumo e no âmbito familiar com ética inabalável.
                  </p>
                </div>

                {/* Forma de Atuação */}
                <div className="mb-10">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#193126] font-medium mb-4">
                    Forma de Atuação
                  </h3>
                  <div className="space-y-4 text-sm sm:text-base text-[#2D2D2D]/80">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8E6D34] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-[#193126] font-medium">Prevenção e Negociação Estratégica:</strong>{' '}
                        Sempre que possível, priorizamos a resolução consensual e extrajudicial para economizar tempo, desgaste emocional e recursos.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8E6D34] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-[#193126] font-medium">Contencioso Combativo:</strong>{' '}
                        Quando a via judicial se faz necessária, agimos com firmeza documental, redação técnica precisa e acompanhamento diligente em todas as instâncias.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8E6D34] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-[#193126] font-medium">Comunicação Sem Jargões:</strong>{' '}
                        Você é informado sobre cada andamento em linguagem humana, compreendendo exatamente o que está acontecendo no seu processo.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Atendimento Online em todo o Brasil */}
                <div className="p-6 sm:p-8 border border-[#2D2D2D]/10 rounded-[2px] bg-white mb-10">
                  <div className="flex items-center gap-3 mb-3 text-[#193126]">
                    <Globe2 className="w-6 h-6 text-[#244434]" aria-hidden="true" />
                    <h3 className="font-serif text-2xl font-medium">Atendimento Digital em Todo o Brasil</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed font-sans mb-4">
                    Graças aos processos eletrônicos e ferramentas seguras de comunicação, atendemos clientes em qualquer estado brasileiro e no exterior, com reuniões por videoconferência e assinatura digital de procurações.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8E6D34]">
                    <span>100% Digital</span>
                    <span aria-hidden="true">·</span>
                    <span>Segurança da Informação</span>
                    <span aria-hidden="true">·</span>
                    <span>Validade Jurídica</span>
                  </div>
                </div>

                {/* CTA da seção */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button href={whatsappUrl} isExternal variant="primary" size="lg" showArrow>
                    Agendar Consulta com a Dra. Thallysa
                  </Button>
                  <Button to="/atendimento" variant="secondary" size="lg">
                    Conhecer Etapas de Atendimento
                  </Button>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* SEÇÃO DIFERENCIAIS */}
        <section className="py-20 sm:py-28 border-b border-[#2D2D2D]/8 bg-[#F8F6F2]">
          <PageContainer>
            <SectionTitle
              align="center"
              kicker="Diferenciais"
              title="Por que confiar a sua demanda ao nosso escritório"
              description="A combinação entre rigor acadêmico, agilidade tecnológica e tratamento individualizado."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <InfoCard
                number="01"
                subtitle="Atendimento Pessoal"
                title="Atenção Direta da Advogada"
                description="Seu caso não é delegado a intermediários ou estagiários anônimos. A Dra. Thallysa Pinheiro conduz pessoalmente a estratégia da sua causa."
              />
              <InfoCard
                number="02"
                subtitle="Segurança Tecnológica"
                title="Processos 100% Digitais"
                description="Protocolos em nuvem, assinatura eletrônica com validade da ICP-Brasil e comunicação ágil via canais protegidos e dedicados."
              />
              <InfoCard
                number="03"
                subtitle="Previsibilidade"
                title="Contratos Claros e Sem Surpresas"
                description="Contrato de honorários pormenorizado, detalhamento prévio de custas processuais e sem cobranças imprevistas."
              />
            </div>
          </PageContainer>
        </section>

        {/* CTA FINAL */}
        <CTA
          kicker="Primeiro Passo"
          title="Conte sua história e tire suas dúvidas com segurança."
          description="Agende uma consulta para avaliar detalhadamente sua questão jurídica com a Dra. Thallysa Pinheiro."
        />
      </main>
    </>
  );
};

export default SobrePage;
