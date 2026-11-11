# Thallysa Pinheiro — Advocacia e Consultoria Jurídica

Site institucional premium, minimalista e de alta performance desenvolvido para **Thallysa Pinheiro — Advocacia e Consultoria Jurídica**. O projeto prioriza sofisticação visual, generoso respiro em espaço branco, tipografia editorial de alto padrão, total acessibilidade (WCAG AA), SEO completo e arquitetura escalável em React 19, TypeScript e Tailwind CSS.

---

## 🛠 Tecnologias e Bibliotecas

- **React 19** com TypeScript
- **Vite** para build otimizado
- **React Router DOM v7** (Roteamento multi-páginas, navegação limpa e code splitting)
- **Tailwind CSS v4** com variáveis de design tokens institucionais
- **Framer Motion** para animações discretas e microinterações
- **Lucide React** para iconografia elegante
- **React Helmet Async** para gestão robusta de meta tags e SEO

---

## 🚀 Instalação e Execução

### 1. Instalar Dependências
```bash
npm install
```

### 2. Ambiente de Desenvolvimento
Inicia o servidor de desenvolvimento em `http://localhost:3000`:
```bash
npm run dev
```

### 3. Build para Produção
Gera o bundle otimizado com minificação e code-splitting na pasta `dist/`:
```bash
npm run build
```

### 4. Preview da Produção
Executa localmente a versão construída:
```bash
npm run preview
```

---

## 📂 Estrutura do Projeto

```text
/
├── public/                     # Arquivos estáticos servidos na raiz
│   ├── favicon.svg             # Monograma vetorial dourado/verde TP
│   ├── manifest.webmanifest    # Manifesto para PWA e atalhos móveis
│   ├── robots.txt              # Diretrizes para indexadores de busca
│   └── sitemap.xml             # Mapa completo do site para SEO
├── src/
│   ├── assets/
│   │   ├── images/             # Fotografias e ativos gráficos
│   │   └── icons/              # Ícones institucionais
│   ├── components/
│   │   ├── buttons/            # Botões arquitetônicos (Button.tsx)
│   │   ├── cards/              # PracticeCard, InfoCard
│   │   ├── common/             # SEO, ScrollToTop, BackToTop
│   │   ├── layout/             # Header, Footer, WhatsAppButton
│   │   ├── sections/           # HomeHero, PageHero, Timeline, CTA
│   │   └── ui/                 # PageContainer, SectionTitle, Accordion, PhotoPlaceholder
│   ├── config/
│   │   └── siteConfig.ts       # Configuração centralizada do site
│   ├── hooks/                  # useResponsive, useMediaQuery, useScrollPosition
│   ├── layouts/
│   │   └── MainLayout.tsx      # Layout base com Header, Footer e botões flutuantes
│   ├── pages/
│   │   ├── Home/               # Página inicial de apresentação
│   │   ├── Sobre/              # Trajetória, missão e pilares da advogada
│   │   ├── Areas/              # Catálogo de especialidades jurídicas
│   │   ├── AreaDetalhe/        # Páginas ricas para Trabalho, Consumidor e Família
│   │   ├── Atendimento/        # Metodologia em 4 etapas (Timeline)
│   │   ├── FAQ/                # Perguntas frequentes com Accordion acessível
│   │   ├── Contato/            # Canais oficiais sem intermediários
│   │   ├── PoliticaPrivacidade/# Termos alinhados com LGPD e sigilo da OAB
│   │   └── NotFound/           # Página 404 acolhedora e funcional
│   ├── routes/
│   │   └── index.tsx           # Configuração de rotas com React.lazy e Suspense
│   ├── styles/
│   │   └── globals.css         # Variáveis de cor, tipografia e reset
│   ├── utils/                  # Formatadores e construtor de URLs do WhatsApp
│   ├── App.tsx                 # Entrada com HelmetProvider e BrowserRouter
│   └── main.tsx                # Bootstrap da aplicação
```

---

## ⚙️ Personalização do Escritório

Toda a personalização de dados, contatos, mídias e textos é feita de forma simples e centralizada:

### 1. Troca da Fotografia da Advogada
Abra `src/config/siteConfig.ts` e atualize a propriedade `lawyerPhoto`:
```typescript
lawyerPhoto: "/src/assets/images/sua-foto-aqui.jpg",
```
> **Nota de Resiliência:** Caso a foto não exista ou o caminho falhe, o componente `PhotoPlaceholder` exibe automaticamente uma composição editorial exclusiva com o monograma **TP**, fundo verde e assinatura.

### 2. Troca dos Contatos (WhatsApp, Telefone, Instagram e E-mail)
Edite os campos em `src/config/siteConfig.ts`:
```typescript
phone: "+55 11 99999-9999",
whatsapp: "5511999999999",              // Apenas números (com DDI e DDD)
whatsappFormatted: "(11) 99999-9999",
email: "contato@thallysapinheiro.adv.br",
instagram: "@thallysapinheiro.adv",
instagramUrl: "https://instagram.com/thallysapinheiro.adv",
```

### 3. Mensagens Pré-Configuradas do WhatsApp
As mensagens de abertura de conversa com o cliente podem ser customizadas em `siteConfig.whatsappMessages`:
```typescript
whatsappMessages: {
  default: "Olá, Dra. Thallysa! Gostaria de agendar uma consulta jurídica.",
  trabalho: "Olá, Dra. Thallysa! Gostaria de uma consultoria em Direito do Trabalho.",
  consumidor: "Olá, Dra. Thallysa! Gostaria de uma consultoria em Direito do Consumidor.",
  familia: "Olá, Dra. Thallysa! Gostaria de uma consultoria em Direito de Família.",
}
```

### 4. Ajuste da Paleta de Cores
As cores e tokens estão mapeados em `src/styles/globals.css`:
```css
:root {
  --color-bg: #F8F6F2;           /* Fundo Nobre / Off-White */
  --color-green: #244434;        /* Verde Institucional */
  --color-green-dark: #193126;   /* Verde Escuro Profundo */
  --color-gold: #B6945A;         /* Dourado Nobre */
  --color-text: #2D2D2D;         /* Texto Principal */
  --color-white: #FFFFFF;        /* Branco Puro */
}
```

---

## 🛡️ Acessibilidade e SEO

- **Semântica HTML5**: Cada página possui rigorosamente **um único elemento `<h1>`**, seguido de estruturação hierárquica `<h2>`, `<h3>` e `<main>`.
- **Navegação por Teclado**: Foco visível realçado com anel dourado (`focus-visible:outline-2 focus-visible:outline-[#B6945A]`).
- **Respeito à Preferência de Movimento Reduzido**: Suporte nativo a `@media (prefers-reduced-motion: reduce)` em `globals.css`.
- **Microdados Schema.org**: Cada página gera automaticamente JSON-LD estruturado como `LegalService` / `Attorney` para enriquecer snippets nos motores de busca (Google).
