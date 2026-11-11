import React from 'react';
import { SEO } from '../../components/common/SEO';
import { PageContainer } from '../../components/ui/PageContainer';
import { PageHero } from '../../components/sections/PageHero';
import { Accordion, AccordionItem } from '../../components/ui/Accordion';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { CTA } from '../../components/sections/CTA';
import { Button } from '../../components/buttons/Button';
import { buildWhatsAppUrl } from '../../config/siteConfig';

const faqItems: AccordionItem[] = [
  {
    category: 'Atendimento Online',
    question: 'Como funciona a consulta jurídica online e ela é segura?',
    answer: (
      <div className="space-y-3">
        <p>
          A consulta online ocorre por meio de videoconferência individual em plataforma segura (Google Meet) ou via WhatsApp corporativo protegido.
        </p>
        <p>
          A segurança da informação e o sigilo profissional são absolutos, em estrita conformidade com o Código de Ética e Disciplina da OAB e a Lei Geral de Proteção de Dados (LGPD). Todos os documentos e dados compartilhados são armazenados em ambiente criptografado.
        </p>
      </div>
    ),
  },
  {
    category: 'Agendamento',
    question: 'Como agendar uma consulta com a Dra. Thallysa Pinheiro?',
    answer: (
      <div className="space-y-3">
        <p>
          O agendamento é realizado de forma ágil e descomplicada diretamente pelo nosso WhatsApp oficial.
        </p>
        <p>
          Você envia uma breve descrição do seu caso e nossa equipe informará os dias e horários disponíveis. As consultas podem ser agendadas em horários flexíveis para melhor adequar à sua rotina.
        </p>
      </div>
    ),
  },
  {
    category: 'Documentos',
    question: 'Quais documentos são necessários para a análise inicial do caso?',
    answer: (
      <div className="space-y-3">
        <p>
          Para uma avaliação precisa, os documentos básicos incluem:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 text-sm">
          <li>Documento de identificação com foto (RG ou CNH) e CPF;</li>
          <li>Comprovante de residência atualizado;</li>
          <li>Documentos específicos da sua área (ex.: carteira de trabalho e holerites para demandas trabalhistas; notas fiscais, contratos e protocolos para consumidor; certidão de casamento/nascimento para família).</li>
        </ul>
        <p>
          Os documentos podem ser enviados como fotos nítidas ou em formato PDF diretamente pelo WhatsApp ou e-mail.
        </p>
      </div>
    ),
  },
  {
    category: 'Áreas de Atuação',
    question: 'Quais são as principais áreas e situações atendidas pelo escritório?',
    answer: (
      <div className="space-y-3">
        <p>
          Atuamos com foco e especialização em três grandes frentes jurídicas:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 text-sm">
          <li><strong>Direito do Trabalho:</strong> Rescisões contratuais, rescisão indireta, horas extras, equiparação salarial, acidentes e assédio moral.</li>
          <li><strong>Direito do Consumidor:</strong> Negativações indevidas no SPC/Serasa, golpes bancários e PIX, problemas aéreos (atrasos/cancelamentos de voos), produtos com defeito e planos de saúde.</li>
          <li><strong>Direito de Família:</strong> Divórcio consensual e litigioso, partilha de bens, pensão alimentícia, guarda de filhos e inventários.</li>
        </ul>
      </div>
    ),
  },
  {
    category: 'Honorários',
    question: 'Como são estabelecidos os honorários advocatícios e formas de pagamento?',
    answer: (
      <div className="space-y-3">
        <p>
          A fixação dos honorários obedece aos parâmetros éticos da Tabela de Honorários da OAB e à complexidade individual de cada demanda.
        </p>
        <p>
          Trabalhamos com total transparência: todos os valores, condições de parcelamento e eventuais honorários de êxito (pagos somente ao final da causa ganha, quando aplicável) são detalhados por escrito em contrato de prestação de serviços antes de qualquer iniciativa judicial.
        </p>
      </div>
    ),
  },
  {
    category: 'Localização & Abrangência',
    question: 'Moro em outro estado ou no exterior. Posso ser atendido pelo escritório?',
    answer: (
      <div className="space-y-3">
        <p>
          Sim! O processo judicial brasileiro é hoje 100% eletrônico (PJe, e-SAJ, Projudi). Isso possibilita que a Dra. Thallysa Pinheiro atue e protocole ações em qualquer Tribunal de Justiça e Tribunal Regional do Trabalho do país.
        </p>
        <p>
          A assinatura da procuração e do contrato é feita digitalmente pelo celular com total validade jurídica (ICP-Brasil).
        </p>
      </div>
    ),
  },
];

export const FAQPage: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl('Olá, Dra. Thallysa! Estive na página de FAQ e gostaria de tirar uma dúvida específica sobre meu caso.');

  return (
    <>
      <SEO
        title="Perguntas Frequentes (FAQ)"
        description="Respostas para as principais dúvidas sobre atendimento online, agendamento de consultas, documentação, honorários e áreas de atuação de Thallysa Pinheiro Advocacia."
        canonical="https://thallysapinheiro.adv.br/faq"
      />

      <main className="w-full bg-[#F8F6F2]">
        {/* Page Hero */}
        <PageHero
          kicker="Esclarecimentos"
          title="Perguntas Frequentes"
          description="Transparência e clareza desde o primeiro instante. Encontre respostas para as perguntas mais comuns sobre o nosso modelo de trabalho."
          parentPath="/"
          parentLabel="Início"
        />

        {/* Accordion Section */}
        <section className="py-20 sm:py-28 border-b border-[#2D2D2D]/8 bg-white">
          <PageContainer size="narrow">
            <SectionTitle
              align="center"
              kicker="Tire Suas Dúvidas"
              title="Perguntas Mais Comuns"
              description="Clique em cada tópico para visualizar a resposta completa elaborada pela nossa equipe jurídica."
            />

            <Accordion items={faqItems} defaultOpenIndex={0} className="mt-12" />

            {/* Suporte Direto */}
            <div className="mt-16 p-8 bg-[#F8F6F2] border border-[#B6945A]/30 rounded-[2px] text-center">
              <h3 className="font-serif text-2xl text-[#193126] font-medium mb-2">
                Não encontrou a resposta para o seu caso?
              </h3>
              <p className="text-sm sm:text-base text-[#2D2D2D]/75 max-w-xl mx-auto mb-6">
                Cada situação jurídica possui particularidades únicas. Fale diretamente conosco para uma análise individualizada.
              </p>
              <Button href={whatsappUrl} isExternal variant="primary" showArrow>
                Fazer Pergunta no WhatsApp
              </Button>
            </div>
          </PageContainer>
        </section>

        {/* CTA */}
        <CTA
          kicker="Atendimento Humanizado"
          title="Pronto para esclarecer suas dúvidas com a Dra. Thallysa Pinheiro?"
          description="Agende uma consulta online com sigilo e total comodidade."
          buttonText="Agendar Consulta Agora"
        />
      </main>
    </>
  );
};

export default FAQPage;
