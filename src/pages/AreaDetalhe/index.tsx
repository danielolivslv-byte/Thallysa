import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { PageContainer } from '../../components/ui/PageContainer';
import { PageHero } from '../../components/sections/PageHero';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Accordion } from '../../components/ui/Accordion';
import { CTA } from '../../components/sections/CTA';
import { Button } from '../../components/buttons/Button';
import { buildWhatsAppUrl, siteConfig } from '../../config/siteConfig';

interface AreaDetailsData {
  slug: string;
  title: string;
  kicker: string;
  subtitle: string;
  description: string;
  whatsappMsg: string;
  situations: {
    title: string;
    description: string;
  }[];
  howItWorks: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const areaDetailsRegistry: Record<string, AreaDetailsData> = {
  trabalho: {
    slug: 'trabalho',
    title: 'Direito do Trabalho',
    kicker: 'Especialidade Trabalhista',
    subtitle: 'Defesa vigorosa dos direitos do trabalhador e conformidade jurídica preventiva.',
    description:
      'Garantir a dignidade no trabalho e o recebimento justo de todas as verbas estabelecidas pela CLT e pelas Convenções Coletivas. Atuamos com rigor técnico tanto em rescisões complexas quanto em indenizações por violações de direitos fundamentais.',
    whatsappMsg: siteConfig.whatsappMessages.trabalho,
    situations: [
      {
        title: 'Rescisão Indireta do Contrato de Trabalho',
        description:
          'Quando o empregador comete falta grave (não recolhe FGTS, atrasa salários reiteradamente ou comete assédio moral), permitindo ao trabalhador sair com todos os direitos da demissão sem justa causa.',
      },
      {
        title: 'Horas Extras, Intervalos e Adicional Noturno',
        description:
          'Cobrança de horas trabalhadas além da jornada legal, intervalos para refeição e descanso suprimidos e horas extras habituais não quitadas.',
      },
      {
        title: 'Assédio Moral e Danos Morais',
        description:
          'Reparação civil por humilhações públicas, cobranças abusivas, isolamento forçado do empregado ou metas inatingíveis no ambiente laboral.',
      },
      {
        title: 'Acidentes de Trabalho e Doenças Ocupacionais',
        description:
          'Garantia de estabilidade provisória no emprego, indenização por danos materiais (despesas médicas e perda de capacidade laborativa) e danos morais.',
      },
      {
        title: 'Equiparação Salarial e Desvio de Função',
        description:
          'Cobrança da diferença salarial para colaboradores que exercem a mesma função de colegas que recebem remuneração superior com produtividade similar.',
      },
      {
        title: 'Reconhecimento de Vínculo Empregatício (PJ Fraudulento)',
        description:
          'Reconhecimento judicial dos direitos trabalhistas de profissionais contratados como pessoa jurídica (pejotização) que cumprem subordinação, habitualidade e pessoalidade.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Análise de Documentos e Cálculo Prévio',
        description:
          'Exame da carteira de trabalho, holerites, extrato analítico do FGTS e cartões de ponto para apuração prévia e fundamentada das verbas devidas.',
      },
      {
        step: '02',
        title: 'Construção da Petição Inicial Artesanal',
        description:
          'Redação individualizada dos fatos e pedidos, alinhada à jurisprudência atual do TRT e do TST, reunindo provas documentais e testemunhais.',
      },
      {
        step: '03',
        title: 'Audiência e Negociação de Acordos',
        description:
          'Acompanhamento pessoal nas audiências iniciais, de instrução e julgamento, buscando as melhores condições de conciliação ou sentença favorável.',
      },
    ],
    faqs: [
      {
        question: 'Qual é o prazo para entrar com uma ação trabalhista?',
        answer:
          'O trabalhador tem até 2 anos após o término do contrato de trabalho para ingressar com a reclamatória trabalhista, podendo cobrar os direitos dos últimos 5 anos contados da data de distribuição da ação.',
      },
      {
        question: 'Preciso pagar para dar entrada na ação trabalhista?',
        answer:
          'A maioria das ações trabalhistas para pessoas físicas é conduzida com base em cláusula quota litis (honorários no êxito) e pedido de Justiça Gratuita, dispensando custos iniciais aos trabalhadores hipossuficientes.',
      },
      {
        question: 'Como posso comprovar que fazia horas extras se a empresa não registrava?',
        answer:
          'As horas extras podem ser comprovadas por mensagens de WhatsApp, e-mails enviados fora do expediente, registros de catraca, relatórios de login em sistemas e testemunhas idôneas.',
      },
      {
        question: 'O que é a rescisão indireta?',
        answer:
          'A rescisão indireta é a "demissão da empresa pelo empregado". Ocorre quando o patrão descumpre obrigações legais, garantindo ao trabalhador sacar o FGTS com a multa de 40%, aviso prévio e seguro-desemprego.',
      },
    ],
  },
  consumidor: {
    slug: 'consumidor',
    title: 'Direito do Consumidor',
    kicker: 'Defesa do Consumidor',
    subtitle: 'Proteção assertiva nas relações de consumo contra abusos e fraudes corporativas.',
    description:
      'O Código de Defesa do Consumidor garante equilíbrio nas relações entre clientes e grandes empresas. Atuamos com celeridade para cessar abusos, cancelar negativações indevidas e buscar indenizações justas por danos materiais e morais.',
    whatsappMsg: siteConfig.whatsappMessages.consumidor,
    situations: [
      {
        title: 'Negativação Indevida no SPC / Serasa',
        description:
          'Inclusão do nome do consumidor em cadastros de inadimplentes por dívidas já pagas, nunca contraídas, fraudulentas ou após cancelamento tempestivo do serviço.',
      },
      {
        title: 'Golpes Bancários, Empréstimos Não Contratados e PIX',
        description:
          'Responsabilidade objetiva das instituições financeiras por falhas de segurança sistêmica em transações atípicas, abertura de contas fraudulentas e roubo de dados.',
      },
      {
        title: 'Problemas com Companhias Aéreas (Voos e Bagagens)',
        description:
          'Indenização por cancelamento unilateral de voos, atrasos superiores a 4 horas com perda de conexões, overbooking e extravio temporário ou definitivo de bagagem.',
      },
      {
        title: 'Produtos com Defeito e Recusa de Troca',
        description:
          'Garantia legal não respeitada para conserto em até 30 dias de eletrodomésticos, eletrônicos ou veículos, assegurando troca, cancelamento da compra ou restituição do valor pago.',
      },
      {
        title: 'Abusos de Planos de Saúde',
        description:
          'Negativa arbitrária de cirurgias, internações, medicamentos de alto custo ou terapias essenciais (como TEA/Autismo) prescritas pelo médico assistente.',
      },
      {
        title: 'Cobranças Abusivas e Juros Ilegais',
        description:
          'Revisão de contratos com venda casada, taxas não autorizadas em contas telefônicas ou de energia, e repetição de indébito (devolução em dobro do valor pago indevidamente).',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Triagem Documental Imediata',
        description:
          'Coleta de comprovantes de pagamento, protocolos de atendimento, prints de telas e contratos para comprovar a falha na prestação do serviço.',
      },
      {
        step: '02',
        title: 'Pedido de Liminar de Urgência',
        description:
          'Em casos de nome negativado indevidamente ou negativa de saúde, solicitamos tutela de urgência (liminar) ao juiz para cessar o dano no menor prazo possível.',
      },
      {
        step: '03',
        title: 'Pleito Indenizatório e Reparação',
        description:
          'Requerimento de restituição dos valores corrigidos e indenização condizente por danos morais para compensar o transtorno e desrespeito sofridos.',
      },
    ],
    faqs: [
      {
        question: 'Quem teve o nome negativado indevidamente tem direito a danos morais?',
        answer:
          'Sim. O Superior Tribunal de Justiça (STJ) entende que a negativação indevida gera dano moral in re ipsa (presumido), ou seja, não é necessário provar sofrimento psicológico para ter direito à indenização.',
      },
      {
        question: 'Fui vítima de golpe do PIX. O banco tem responsabilidade?',
        answer:
          'Na maioria dos casos em que ocorrem transações que fogem totalmente ao perfil do cliente ou em horários atípicos sem bloqueio preventivo pelo sistema antifraude, a jurisprudência reconhece a responsabilidade da instituição financeira.',
      },
      {
        question: 'Quanto tempo a empresa tem para consertar um produto na garantia?',
        answer:
          'O fornecedor tem até 30 dias para sanar o vício do produto. Passado esse prazo sem conserto, o consumidor pode exigir a substituição do produto por outro novo, a restituição imediata da quantia paga ou o abatimento proporcional do preço.',
      },
      {
        question: 'O que fazer se a companhia aérea cancelar meu voo de última hora?',
        answer:
          'A empresa é obrigada a fornecer assistência material (alimentação e hospedagem conforme o tempo de espera) e reacomodação imediata. Dependendo do prejuízo (como perda de diárias, compromissos ou férias), cabe indenização por danos morais e materiais.',
      },
    ],
  },
  familia: {
    slug: 'familia',
    title: 'Direito de Família',
    kicker: 'Direito Familiar & Sucessório',
    subtitle: 'Condução sensível, segura e estratégica de relações familiares e partilha de bens.',
    description:
      'Tratamos as demandas do Direito de Família com a delicadeza que os laços afetivos exigem e a firmeza técnica necessária para resguardar o patrimônio e a integridade de crianças e familiares. Buscamos soluções de consenso sempre que possível.',
    whatsappMsg: siteConfig.whatsappMessages.familia,
    situations: [
      {
        title: 'Divórcio Consensual e Litigioso',
        description:
          'Realização de divórcio em cartório (quando preenchidos os requisitos) em questão de dias, ou condução judicial estratégica quando há divergência de partilha ou filhos menores.',
      },
      {
        title: 'Guarda dos Filhos e Convivência Parental',
        description:
          'Regulamentação de guarda compartilhada, plano pedagógico e regime de convivência que assegurem o melhor interesse e a estabilidade emocional dos filhos.',
      },
      {
        title: 'Pensão Alimentícia (Fixação, Revisão e Exoneração)',
        description:
          'Determinação justa de alimentos observando o binômio necessidade do beneficiário versus possibilidade financeira do pagador, com revisão quando houver alteração de renda.',
      },
      {
        title: 'Partilha e Proteção Patrimonial',
        description:
          'Levantamento detalhado e divisão equilibrada de imóveis, empresas, investimentos e dívidas do casal de acordo com o regime de bens aplicável.',
      },
      {
        title: 'Inventário e Sucessão (Judicial e Extrajudicial)',
        description:
          'Abertura e processamento de inventários em cartório com economia tributária (ITCMD) e agilidade, bem como resolução de inventários contenciosos complexos.',
      },
      {
        title: 'Reconhecimento e Dissolução de União Estável',
        description:
          'Formalização jurídica da entidade familiar com definição de datas de início e fim para assegurar direitos patrimoniais, meação e previdenciários.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Consulta Acolhedora e Sigilosa',
        description:
          'Reunião com acolhimento humanizado para entender a dinâmica familiar, as preocupações com os filhos e o patrimônio acumulado.',
      },
      {
        step: '02',
        title: 'Tentativa de Composição Amigável',
        description:
          'Elaboração de minutas de acordo que prevejam todas as nuances cotidianas, evitando desgastes emocionais prolongados e custos desnecessários.',
      },
      {
        step: '03',
        title: 'Homologação Rápida ou Ação Judicial Firme',
        description:
          'Formalização ágil em cartório ou protocolo judicial com acompanhamento discreto e proteção cautelar de bens quando houver risco de dissipação.',
      },
    ],
    faqs: [
      {
        question: 'É possível fazer o divórcio rapidamente em cartório?',
        answer:
          'Sim. Quando o casal está em comum acordo sobre a separação e partilha de bens, e não há filhos menores ou incapazes (ou havendo, as questões de guarda e pensão já foram previamente resolvidas na via judicial), o divórcio pode ser lavrado em cartório em poucos dias.',
      },
      {
        question: 'Como é calculada a pensão alimentícia dos filhos?',
        answer:
          'A legislação não fixa uma porcentagem automática de 30%. O juiz analisa a proporção entre as despesas reais do filho (escola, saúde, moradia, alimentação) e a capacidade financeira comprovada de ambos os pais.',
      },
      {
        question: 'O que é a guarda compartilhada?',
        answer:
          'A guarda compartilhada é a regra no ordenamento jurídico brasileiro. Ela não significa necessariamente que a criança mora metade do tempo com cada genitor, mas sim que ambos tomam juntos todas as decisões relevantes sobre a vida dos filhos.',
      },
      {
        question: 'Qual é o prazo para abrir o inventário após o falecimento?',
        answer:
          'O prazo legal previsto pelo Código de Processo Civil é de 60 dias contados a partir da data do óbito, sob pena de incidência de multa sobre o imposto de transmissão (ITCMD) estipulada por cada Estado.',
      },
    ],
  },
};

interface AreaDetalheProps {
  areaSlug?: string;
  forcedTitle?: string;
}

export const AreaDetalhePage: React.FC<AreaDetalheProps> = ({ areaSlug: propSlug, forcedTitle }) => {
  const params = useParams<{ slug?: string }>();
  const location = useLocation();

  // Normalize slug
  const slugFromPath = location.pathname.split('/').filter(Boolean).pop();
  const currentSlug = propSlug || params.slug || slugFromPath || 'trabalho';

  const areaData = areaDetailsRegistry[currentSlug] || areaDetailsRegistry.trabalho;
  const pageTitle = forcedTitle || areaData.title;

  const whatsappUrl = buildWhatsAppUrl(areaData.whatsappMsg);

  return (
    <>
      <SEO
        title={pageTitle}
        description={areaData.description}
        canonical={`https://thallysapinheiro.adv.br/areas/${currentSlug}`}
      />

      <main className="w-full bg-[#F8F6F2]">
        {/* 1. HERO PRÓPRIO DA ÁREA */}
        <PageHero
          kicker={areaData.kicker}
          title={pageTitle}
          description={areaData.subtitle}
          parentPath="/areas"
          parentLabel="Áreas de Atuação"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button href={whatsappUrl} isExternal variant="primary" size="lg" showArrow>
              Consultar sobre {pageTitle}
            </Button>
            <Button to="/contato" variant="secondary" size="lg">
              Tirar Dúvidas
            </Button>
          </div>
        </PageHero>

        {/* 2. DESCRIÇÃO DA ESPECIALIDADE */}
        <section className="py-16 sm:py-24 border-b border-[#2D2D2D]/8 bg-white">
          <PageContainer>
            <div className="max-w-3xl">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#B6945A] mb-3 block">
                Visão Especializada
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#193126] font-medium leading-[1.18] mb-6 text-balance">
                Assessoria e consultoria jurídica dedicada para proteger o que é seu por direito.
              </h2>
              <p className="text-base sm:text-lg text-[#2D2D2D]/80 leading-relaxed font-normal">
                {areaData.description}
              </p>
            </div>
          </PageContainer>
        </section>

        {/* 3. PRINCIPAIS SITUAÇÕES ATENDIDAS */}
        <section className="py-20 sm:py-28 border-b border-[#2D2D2D]/8 bg-[#F8F6F2]">
          <PageContainer>
            <SectionTitle
              kicker="Casos Práticos"
              title="Principais Situações Atendidas"
              description="Veja em quais cenários nosso escritório pode atuar ativamente na resolução da sua demanda:"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
              {areaData.situations.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-white border border-[#2D2D2D]/10 rounded-[2px] hover:border-[#B6945A]/60 transition-all duration-300 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B6945A]" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#B6945A]">
                        Situação 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#193126] font-medium mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#2D2D2D]/75 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </PageContainer>
        </section>

        {/* 4. COMO FUNCIONA NESTA ÁREA */}
        <section className="py-20 sm:py-28 border-b border-[#2D2D2D]/8 bg-white">
          <PageContainer>
            <SectionTitle
              align="center"
              kicker="Etapas"
              title="Como Conduzimos a Sua Causa"
              description="Do acolhimento inicial até a resolução com máximo zelo técnico e acompanhamento passo a passo."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {areaData.howItWorks.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="p-8 bg-[#F8F6F2] border border-[#2D2D2D]/8 rounded-[2px] flex flex-col justify-between"
                >
                  <div>
                    <span className="font-serif text-4xl text-[#B6945A] font-light block mb-4">
                      {step.step}
                    </span>
                    <h3 className="font-serif text-2xl text-[#193126] font-medium mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#2D2D2D]/75 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </PageContainer>
        </section>

        {/* 5. FAQ ESPECÍFICO */}
        <section className="py-20 sm:py-28 border-b border-[#2D2D2D]/8 bg-[#F8F6F2]">
          <PageContainer size="narrow">
            <SectionTitle
              align="center"
              kicker="Tire Suas Dúvidas"
              title="Perguntas Frequentes Sobre Esta Área"
              description="Respostas claras para os questionamentos mais comuns que recebemos dos nossos clientes."
            />

            <Accordion items={areaData.faqs} defaultOpenIndex={0} className="mt-12" />
          </PageContainer>
        </section>

        {/* 6. CTA COM WHATSAPP ESPECÍFICO */}
        <CTA
          kicker={`Atendimento em ${pageTitle}`}
          title={`Precisa de suporte jurídico especializado em ${pageTitle}?`}
          description="Fale diretamente com a Dra. Thallysa Pinheiro para uma triagem inicial do seu caso com total sigilo."
          buttonText="Agendar Consulta no WhatsApp"
          whatsappMessage={areaData.whatsappMsg}
        />
      </main>
    </>
  );
};

export default AreaDetalhePage;
