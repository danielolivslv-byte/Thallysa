/**
 * Central Configuration for Thallysa Pinheiro — Advocacia e Consultoria Jurídica
 */

export interface PracticeAreaConfig {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
}

export interface SiteConfig {
  name: string;
  lawyerName: string;
  oab: string;
  title: string;
  description: string;
  phone: string;
  whatsapp: string;
  whatsappFormatted: string;
  email: string;
  instagram: string;
  instagramUrl: string;
  address: {
    city: string;
    state: string;
    formatted: string;
  };
  lawyerPhoto: string;
  logo: {
    monogram: string;
    title: string;
    subtitle: string;
    svgUrl: string;
  };
  whatsappMessages: {
    default: string;
    general: string;
    trabalho: string;
    consumidor: string;
    familia: string;
    consultoria: string;
  };
  areas: PracticeAreaConfig[];
}

export const siteConfig: SiteConfig = {
  name: "Thallysa Pinheiro — Advocacia e Consultoria Jurídica",
  lawyerName: "Thallysa Pinheiro",
  oab: "OAB/XX 000.000",
  title: "Thallysa Pinheiro — Advocacia e Consultoria Jurídica Especializada",
  description: "Advocacia de excelência e consultoria jurídica personalizada, com foco em soluções estratégicas, humanizadas e eficientes.",
  phone: "+55 11 99999-9999",
  whatsapp: "5511999999999",
  whatsappFormatted: "(11) 99999-9999",
  email: "contato@thallysapinheiro.adv.br",
  instagram: "@thallysapinheiro.adv",
  instagramUrl: "https://instagram.com/thallysapinheiro.adv",
  address: {
    city: "São Paulo",
    state: "SP",
    formatted: "Atendimento Presencial e Digital em todo o Brasil",
  },
  // URL or path to lawyer's photo (easily configurable for next stages)
  lawyerPhoto: "/src/assets/images/thallysa_pinheiro_oficial_1794437677899.jpg",
  logo: {
    monogram: "TP",
    title: "Thallysa Pinheiro",
    subtitle: "Advocacia e Consultoria Jurídica",
    svgUrl: "/favicon.svg",
  },
  whatsappMessages: {
    default: "Olá, Dra. Thallysa! Gostaria de agendar uma consulta jurídica.",
    general: "Olá, Dra. Thallysa! Vim pelo site e gostaria de tirar uma dúvida sobre seus serviços jurídicos.",
    trabalho: "Olá, Dra. Thallysa! Gostaria de uma consultoria em Direito do Trabalho.",
    consumidor: "Olá, Dra. Thallysa! Gostaria de uma consultoria em Direito do Consumidor.",
    familia: "Olá, Dra. Thallysa! Gostaria de uma consultoria em Direito de Família.",
    consultoria: "Olá, Dra. Thallysa! Gostaria de mais informações sobre a Consultoria Jurídica.",
  },
  areas: [
    {
      id: "trabalho",
      slug: "trabalho",
      title: "Direito do Trabalho",
      shortDescription: "Assessoria estratégica preventiva e contenciosa trabalhista para pessoas físicas e empresas.",
    },
    {
      id: "consumidor",
      slug: "consumidor",
      title: "Direito do Consumidor",
      shortDescription: "Defesa dos direitos e prerrogativas nas relações de consumo, contratos e resolução de conflitos.",
    },
    {
      id: "familia",
      slug: "familia",
      title: "Direito de Família",
      shortDescription: "Atuação ética, sensível e especializada em causas familiares, sucessórias e patrimoniais.",
    },
  ],
};

/**
 * Builds a direct WhatsApp URL with custom or default message encoded.
 */
export function buildWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || siteConfig.whatsappMessages.default;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
}
