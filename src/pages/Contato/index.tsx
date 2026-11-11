import React from 'react';
import { MessageCircle, Phone, Instagram, Globe2, ShieldCheck, Clock, ArrowUpRight } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { PageContainer } from '../../components/ui/PageContainer';
import { PageHero } from '../../components/sections/PageHero';
import { Button } from '../../components/buttons/Button';
import { buildWhatsAppUrl, siteConfig } from '../../config/siteConfig';

export const ContatoPage: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl('Olá, Dra. Thallysa! Vim pelo site e gostaria de agendar uma consulta jurídica.');

  return (
    <>
      <SEO
        title="Contato"
        description="Fale diretamente com a Dra. Thallysa Pinheiro. Canais oficiais de atendimento via WhatsApp, telefone e Instagram. Atendimento online em todo o Brasil."
        canonical="https://thallysapinheiro.adv.br/contato"
      />

      <main className="w-full bg-[#F8F6F2]">
        {/* Page Hero */}
        <PageHero
          kicker="Canais Oficiais"
          title="Fale Conosco"
          description="Estamos prontos para ouvir sua história e orientar seus próximos passos com atenção, técnica e sigilo absoluto."
          parentPath="/"
          parentLabel="Início"
        />

        {/* 2-COLUMN CONTACT SECTION */}
        <section className="py-20 sm:py-28 border-b border-[#2D2D2D]/8 bg-white">
          <PageContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
              {/* LADO ESQUERDO: TÍTULO, TEXTO INSTITUCIONAL E CONTATOS CLICÁVEIS */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#B6945A] mb-3 block">
                    Comunicação Direta
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#193126] leading-[1.15] mb-6 text-balance">
                    Orientação jurídica humanizada ao alcance de uma mensagem.
                  </h2>

                  <p className="text-base sm:text-lg text-[#2D2D2D]/80 leading-relaxed font-normal mb-10 text-balance">
                    Acreditamos que o acesso à orientação jurídica especializada deve ser ágil, seguro e sem intermediários desnecessários. Escolha o canal de sua preferência para iniciar o contato:
                  </p>

                  {/* Canais Clicáveis */}
                  <div className="space-y-5">
                    {/* WhatsApp */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-5 bg-[#F8F6F2] hover:bg-[#193126] border border-[#2D2D2D]/8 hover:border-[#B6945A] rounded-[2px] transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white group-hover:bg-[#244434] border border-[#B6945A]/40 flex items-center justify-center text-[#193126] group-hover:text-[#B6945A] transition-colors shrink-0">
                          <MessageCircle className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#8E6D34] block">
                            Canal Principal
                          </span>
                          <span className="font-serif text-xl sm:text-2xl font-medium text-[#193126] group-hover:text-white transition-colors">
                            WhatsApp Oficial
                          </span>
                          <span className="text-xs text-[#2D2D2D]/60 group-hover:text-white/70 block mt-0.5 font-mono">
                            {siteConfig.whatsappFormatted}
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[#B6945A] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                    </a>

                    {/* Telefone */}
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                      aria-label={`Ligar para o telefone ${siteConfig.phone}`}
                      className="group flex items-center justify-between p-5 bg-[#F8F6F2] hover:bg-[#193126] border border-[#2D2D2D]/8 hover:border-[#B6945A] rounded-[2px] transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white group-hover:bg-[#244434] border border-[#B6945A]/40 flex items-center justify-center text-[#193126] group-hover:text-[#B6945A] transition-colors shrink-0">
                          <Phone className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#8E6D34] block">
                            Ligação Telefônica
                          </span>
                          <span className="font-serif text-xl sm:text-2xl font-medium text-[#193126] group-hover:text-white transition-colors">
                            {siteConfig.phone}
                          </span>
                          <span className="text-xs text-[#2D2D2D]/60 group-hover:text-white/70 block mt-0.5">
                            Atendimento comercial
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[#B6945A] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                    </a>

                    {/* Instagram */}
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Acessar perfil no Instagram ${siteConfig.instagram}`}
                      className="group flex items-center justify-between p-5 bg-[#F8F6F2] hover:bg-[#193126] border border-[#2D2D2D]/8 hover:border-[#B6945A] rounded-[2px] transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white group-hover:bg-[#244434] border border-[#B6945A]/40 flex items-center justify-center text-[#193126] group-hover:text-[#B6945A] transition-colors shrink-0">
                          <Instagram className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#8E6D34] block">
                            Rede Social
                          </span>
                          <span className="font-serif text-xl sm:text-2xl font-medium text-[#193126] group-hover:text-white transition-colors">
                            {siteConfig.instagram}
                          </span>
                          <span className="text-xs text-[#2D2D2D]/60 group-hover:text-white/70 block mt-0.5">
                            Conteúdo jurídico e atualizações
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[#B6945A] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </div>

                {/* Informação Obrigatória: Atendimento Online em Todo o Brasil */}
                <div className="mt-10 p-5 bg-[#193126]/5 border-l-2 border-[#B6945A] rounded-[2px] flex items-center gap-3 text-[#193126]">
                  <Globe2 className="w-5 h-5 text-[#B6945A] shrink-0" />
                  <span className="font-sans text-sm sm:text-base font-medium">
                    Atendimento online em todo o Brasil e no exterior.
                  </span>
                </div>
              </div>

              {/* LADO DIREITO: GRANDE CTA COM BOTÃO AGENDAR CONSULTA */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="p-8 sm:p-12 md:p-14 bg-gradient-to-br from-[#193126] via-[#244434] to-[#14261e] text-white rounded-[2px] border border-[#B6945A]/50 shadow-[0_20px_50px_-15px_rgba(25,49,38,0.3)] relative overflow-hidden flex flex-col justify-between h-full">
                  {/* Subtle inner decorative border */}
                  <div
                    className="absolute inset-4 sm:inset-6 border border-[#B6945A]/25 pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    {/* Top Seal */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full border border-[#B6945A] flex items-center justify-center font-serif text-lg text-[#B6945A] bg-[#193126]">
                        TP
                      </div>
                      <div>
                        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B6945A] block">
                          Agendamento Prioritário
                        </span>
                        <span className="text-xs text-white/60 font-mono">
                          {siteConfig.oab}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-white mb-6 leading-[1.16]">
                      Agende sua consulta jurídica diretamente com a advogada.
                    </h3>

                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal mb-8">
                      Receba uma análise criteriosa da sua demanda com sigilo e transparência. Sem robôs ou respostas automáticas: nossa conversa é individual e focada no seu problema.
                    </p>

                    <div className="space-y-3 mb-10 text-xs sm:text-sm text-white/75 font-sans">
                      <div className="flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-[#B6945A]" />
                        <span>Sigilo absoluto garantido pelo Código de Ética da OAB</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-[#B6945A]" />
                        <span>Retorno ágil em horário comercial</span>
                      </div>
                    </div>
                  </div>

                  {/* Botão de Agendamento */}
                  <div className="relative z-10 pt-4">
                    <Button
                      href={whatsappUrl}
                      isExternal
                      variant="gold"
                      size="lg"
                      className="w-full text-center justify-center shadow-lg"
                      showArrow
                    >
                      Agendar Consulta no WhatsApp
                    </Button>
                    <p className="text-[11px] text-center text-white/50 tracking-wider mt-4">
                      Clique para abrir o WhatsApp oficial com mensagem pré-configurada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>
    </>
  );
};

export default ContatoPage;
