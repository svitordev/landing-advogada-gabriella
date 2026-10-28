// lib/site-config.ts — dados específicos do projeto Maria Gabriella (PROJECT_ONLY).
// Componentes genéricos recebem estes dados pelos consumidores — nada da cliente
// deve ser embutido nos componentes. Textos provisórios, sujeitos à aprovação da
// profissional (PENDENTE_CONFIRMACAO_CLIENTE).

import type { HeaderBasicProps } from "@/components/site/headers/header-basic";
import type { HeroPrimaryProps } from "@/components/sections/hero/hero-primary";
import type { ServicesGridSimpleProps } from "@/components/sections/services/services-grid-simple";
import type { AboutSplitProps } from "@/components/sections/about/about-split";

export const siteBrand = {
  name: "Maria Gabriella",
  subtitle: "Advocacia Personalizada",
  href: "/",
} satisfies HeaderBasicProps["brand"];

// Somente destinos reais: âncoras das seções implementadas na home.
// O blog (rota preservada) saiu da navegação pública por enquanto — ainda contém
// conteúdo de demonstração do template, não conteúdo jurídico da cliente.
export const siteNavLinks = [
  { label: "Início", href: "/" },
  { label: "Áreas de atuação", href: "/#areas-de-atuacao" },
  { label: "Sobre", href: "/#sobre" },
] satisfies HeaderBasicProps["links"];

// CTA de contato omitido até existir canal oficial confirmado — sem WhatsApp/e-mail fictícios.

export const siteHero = {
  eyebrow: "Advocacia Personalizada",
  title: "Advocacia personalizada, com atenção a cada detalhe.",
  description:
    "Atuação jurídica pautada pela responsabilidade, clareza e atendimento individualizado.",
  actions: [],
  // image: caminho futuro quando a fotografia profissional oficial for disponibilizada
} satisfies HeroPrimaryProps;

// Lista preliminar de áreas de atuação (referências visuais da cliente) — copy
// descritiva e provisória, sujeita à aprovação da profissional
// (PENDENTE_CONFIRMACAO_CLIENTE — a marcação não aparece na interface).
// Sem promessas de resultado, sem estatísticas, sem especialização formal declarada.
export const sitePracticeAreas = {
  id: "areas-de-atuacao",
  title: "Áreas de atuação",
  description: "Atuação em demandas de família, sucessórias e imobiliárias.",
  items: [
    {
      title: "Inventário e partilha",
      description: "Procedimento judicial ou extrajudicial para levantamento e divisão do patrimônio comum.",
    },
    {
      title: "Testamento e planejamento sucessório",
      description: "Manifestação de última vontade e organização antecipada da sucessão de bens.",
    },
    {
      title: "Usucapião extrajudicial e judicial",
      description: "Reconhecimento de propriedade de quem detém a posse pelo tempo e nas condições previstos em lei.",
    },
    {
      title: "Regularização de imóveis urbanos e rurais",
      description: "Organização da situação documental e registral de imóveis.",
    },
    {
      title: "Elaboração e revisão de contratos",
      description: "Redação, análise e ajuste de cláusulas contratuais.",
    },
    {
      title: "Divórcio extrajudicial",
      description: "Dissolução consensual do casamento por escritura pública, quando cabível.",
    },
  ],
} satisfies ServicesGridSimpleProps;

// Apresentação institucional provisória — sem formação, OAB, titulação ou
// experiência declaradas (PENDENTE_CONFIRMACAO_CLIENTE). Sem fotografia até o
// asset oficial existir (coluna textual única até lá).
export const siteAbout = {
  id: "sobre",
  title: "Sobre a advogada",
  description: "Atendimento próximo e individualizado, com explicações claras sobre cada etapa.",
  paragraphs: [
    "Cada demanda é analisada em sua particularidade, considerando documentos, prazos e caminhos possíveis.",
    "O trabalho prioriza organização, clareza na comunicação e respeito ao contexto de cada cliente.",
  ],
} satisfies AboutSplitProps;
