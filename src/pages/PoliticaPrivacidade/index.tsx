import React from 'react';
import { SEO } from '../../components/common/SEO';
import { PageContainer } from '../../components/ui/PageContainer';
import { PageHero } from '../../components/sections/PageHero';
import { siteConfig } from '../../config/siteConfig';

export const PoliticaPrivacidadePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Política de Privacidade"
        description="Diretrizes de privacidade, segurança da informação e tratamento de dados pessoais (LGPD) do escritório Thallysa Pinheiro Advocacia e Consultoria Jurídica."
        canonical="https://thallysapinheiro.adv.br/politica-de-privacidade"
      />

      <main className="w-full bg-[#F8F6F2]">
        <PageHero
          kicker="Transparência & LGPD"
          title="Política de Privacidade"
          description="Nosso compromisso inegociável com a proteção dos seus dados pessoais e o sigilo profissional da advocacia."
          parentPath="/"
          parentLabel="Início"
        />

        <section className="py-16 sm:py-24 border-b border-[#2D2D2D]/8 bg-white">
          <PageContainer size="narrow">
            <div className="prose prose-slate max-w-none text-[#2D2D2D]/85 space-y-8 font-sans leading-relaxed">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#193126] font-medium mb-4">
                  1. Informações Gerais e Compromisso Ético
                </h2>
                <p className="text-base text-[#2D2D2D]/80">
                  O escritório <strong>{siteConfig.name}</strong>, sob a responsabilidade profissional da advogada <strong>{siteConfig.lawyerName}</strong> ({siteConfig.oab}), tem como premissa basilar a preservação da intimidade, da honra e dos dados pessoais de seus clientes, consulentes e visitantes deste sítio eletrônico.
                </p>
                <p className="text-base text-[#2D2D2D]/80 mt-2">
                  Esta Política de Privacidade foi elaborada em estrita observância à Lei Geral de Proteção de Dados Pessoais (Lei Federal nº 13.709/2018 - LGPD), ao Marco Civil da Internet (Lei nº 12.965/2014) e aos deveres éticos de sigilo profissional impostos pelo Estatuto da Advocacia e da OAB (Lei nº 8.906/1994) e pelo Código de Ética e Disciplina da OAB.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#193126] font-medium mb-4">
                  2. Dados Coletados e Finalidade do Tratamento
                </h2>
                <p className="text-base text-[#2D2D2D]/80">
                  Os dados pessoais são fornecidos espontaneamente pelo titular ao entrar em contato conosco através dos canais oficiais (WhatsApp, ligação telefônica ou e-mail), compreendendo:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-[#2D2D2D]/80 mt-2 pl-2">
                  <li><strong>Dados de identificação e contato:</strong> Nome completo, número de telefone/WhatsApp, e-mail e cidade/estado. Finalidade: identificação do interessado, retorno de solicitações e agendamento de consultas.</li>
                  <li><strong>Dados fáticos e processuais:</strong> Breve descrição dos fatos, documentos trabalhistas, contratuais, fiscais ou familiares compartilhados voluntariamente. Finalidade: estudo de viabilidade jurídica preliminar e exercício regular de direitos em processos judiciais ou administrativos.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#193126] font-medium mb-4">
                  3. Sigilo Profissional Inviolável
                </h2>
                <p className="text-base text-[#2D2D2D]/80">
                  Todas as comunicações, documentos, relatos e estratégias compartilhados com a advogada estão acobertados pela garantia da inviolabilidade do segredo profissional (art. 7º, II, da Lei 8.906/94). Nenhuma informação confiada ao escritório será divulgada, comercializada ou compartilhada sem a expressa autorização do titular ou determinação legal cogente.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#193126] font-medium mb-4">
                  4. Armazenamento Seguro e Criptografia
                </h2>
                <p className="text-base text-[#2D2D2D]/80">
                  Adotamos medidas técnicas e administrativas aptas a proteger os dados pessoais contra acessos não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração ou comunicação. Os arquivos eletrônicos são guardados em servidores seguros em nuvem com criptografia de ponta e controles estritos de acesso.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#193126] font-medium mb-4">
                  5. Direitos dos Titulares de Dados
                </h2>
                <p className="text-base text-[#2D2D2D]/80">
                  Em conformidade com o artigo 18 da LGPD, o titular dos dados pessoais pode, a qualquer momento e mediante requisição formal, solicitar a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou a revogação de consentimentos previamente concedidos.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#193126] font-medium mb-4">
                  6. Contato com a Responsável pelo Tratamento
                </h2>
                <p className="text-base text-[#2D2D2D]/80">
                  Para dirimir quaisquer dúvidas a respeito desta Política de Privacidade ou para o exercício dos seus direitos enquanto titular de dados, entre em contato através do e-mail: <strong className="text-[#193126]">{siteConfig.email}</strong> ou pelo WhatsApp institucional: <strong className="text-[#193126]">{siteConfig.whatsappFormatted}</strong>.
                </p>
              </div>

              <div className="pt-6 border-t border-[#2D2D2D]/10 text-xs text-[#2D2D2D]/60 font-sans">
                Última atualização desta política: Novembro de 2026.
              </div>
            </div>
          </PageContainer>
        </section>
      </main>
    </>
  );
};

export default PoliticaPrivacidadePage;
