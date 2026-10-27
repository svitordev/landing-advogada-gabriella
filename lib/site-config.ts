// lib/site-config.ts — dados específicos do projeto Maria Gabriella (PROJECT_ONLY).
// Componentes genéricos recebem estes dados pelos consumidores — nada da cliente
// deve ser embutido nos componentes. Textos provisórios, sujeitos à aprovação da
// profissional (PENDENTE_CONFIRMACAO_CLIENTE).

import type { HeaderBasicProps } from "@/components/site/headers/header-basic";
import type { HeroPrimaryProps } from "@/components/sections/hero/hero-primary";

export const siteBrand = {
  name: "Maria Gabriella",
  subtitle: "Advocacia Personalizada",
  href: "/",
} satisfies HeaderBasicProps["brand"];

// Renderizar somente links com destinos existentes no projeto.
// O blog ainda contém conteúdo de demonstração do template (não é conteúdo
// jurídico publicado pela cliente) — o link é funcional, não uma promessa editorial.
export const siteNavLinks = [
  { label: "Início", href: "/" },
  { label: "Conteúdo", href: "/blog" },
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
