# ARQUITETURA.md — Maria Gabriella (landing page)

Arquitetura real atual do repositório. Este projeto é independente e foi criado a partir do código do Svitordev UI Lab (origem histórica).

## Legenda de estado

- **Implementado (código real):** tudo que este documento descreve — App Router, route group `(site)`, `/library`, componentes, Playwright.
- **Personalizado para a cliente (já aplicado):** identidade visual nos tokens `:root` (Entrega A — tema claro padrão, Inter/Playfair, metadata institucional) e a composição inicial da home pública — `HeaderBasic` + `HeroPrimary` data-driven alimentados por `lib/site-config.ts` (Entrega B). Conteúdo da hero ainda **provisório** (`PENDENTE_CONFIRMACAO_CLIENTE`).
- **Herdado do template:** `/library`, blog com conteúdo de demonstração, componentes genéricos (contratos data-driven quando migrados; conteúdo hardcoded nas variantes não migradas).
- **Planejado (não implementado):** demais seções da landing com conteúdo da cliente (áreas de atuação, sobre, atendimento, FAQ, contato, footer definitivo). Ver `docs/ROADMAP-LANDING.md`.

Não tratar funcionalidades planejadas como prontas.

## Stack

- Next.js 16.0.3 (App Router)
- React 19.2.0 / React DOM 19.2.0
- TypeScript 5 (strict)
- Tailwind CSS 4 (config **inline** em `app/globals.css`, sem `tailwind.config.ts`)
- shadcn/ui (style new-york)
- `tw-animate-css` 1.4.0
- lucide-react
- class-variance-authority, clsx, tailwind-merge
- ESLint 9 (flat config)

## Estrutura oficial (DEC-002)

```
app/
components/
lib/
public/
```

- **`src/` NÃO será introduzido.** A estrutura atual é a oficial.
- Categorias novas (`layouts/`, `patterns/`, `compositions/`) só serão adicionadas quando houver necessidade real, nunca vazias.

## `app/`

- `app/layout.tsx` — layout raiz (metadata, `lang="pt-br"`, dark por padrão via classe `dark`).
- `app/globals.css` — import do Tailwind + `tw-animate-css`, `@theme inline`, tokens light/dark.
- `app/page.tsx` — página inicial.
- `app/(site)/` — **route group** de rotas do site (parênteses = sem segmento de URL):
  - `layout.tsx` — layout do site: `HeaderBasic` consumindo `siteBrand`/`siteNavLinks` de `lib/site-config.ts`, main e rodapé mínimo institucional (sem contatos/OAB inventados; `FooterCta` não é mais renderizado aqui).
  - `page.tsx` — home institucional: `HeroPrimary` consumindo `siteHero` de `lib/site-config.ts` (composição mínima da Entrega B; demais seções em entregas futuras).
  - `blog/page.tsx` — listagem de posts.
  - `blog/[slug]/page.tsx` — rota dinâmica de post (hoje vazia — ver problema conhecido).
- `app/library/` — showcase oficial (ver DEC-001):
  - `layout.tsx` — wrapper com `SectionsShell`.
  - `page.tsx` — índice/redirect.
  - `[categoria]/page.tsx` — uma página por grupo (headers, footers, hero, about, services, testimonials, pricing, contact, cta).

## `components/`

- `components/ui/` — **6** componentes base shadcn/ui/primitives (`button`, `card`, `input`, `textarea`, `badge`, `avatar`).
- `components/site/` — **7** componentes de site:
  - `headers/` (4, incl. `mobile-nav`), `footers/` (3).
- `components/sections/` — **26** seções:
  - `hero/` (4), `about/` (3), `services/` (3), `testimonials/` (4), `pricing/` (3), `contact/` (3), `cta/` (4), `logos/` (1), `stats/` (1).
  - `library-shell.tsx` — wrapper de navegação do `/library`.
- Inventário completo: `docs/COMPONENT-CATALOG.md`.

## `lib/`

- `lib/utils.ts` — `cn()` (clsx + tailwind-merge), utilitário padrão shadcn/ui.
- `lib/blog.ts` — fonte compartilhada de posts do blog (listagem + rota dinâmica).
- `lib/site-config.ts` — **dados específicos do projeto (PROJECT_ONLY)**: marca, navegação e conteúdo provisório da hero da cliente. É configuração, não componente React — não entra na contagem do catálogo.

## Fluxo de dados do projeto (Entrega B)

```
lib/site-config.ts
       |
       +----> layout público ((site)/layout.tsx)
       |        |
       |        +----> HeaderBasic
       |
       +----> home ((site)/page.tsx)
                |
                +----> HeroPrimary
```

- Componentes genéricos (`HeaderBasic`, `HeroPrimary`) recebem tudo por props (contratos data-driven) — nenhum dado da cliente embutido neles.
- Separação: conteúdo da cliente em `lib/site-config.ts` (e nas páginas consumidoras); apresentação reutilizável em `components/`.
- A `/library` mantém demos próprias com dados genéricos — não consome `site-config`.
- Sem CMS, backend, banco ou APIs; não existe sistema de sincronização com o UI Lab.

## `public/`

- Assets estáticos (imagens, fontes, ícones).

## App Router / route groups

- Uso de **route groups** com `(site)` para organizar rotas sem influenciar a URL.
- Layouts aninhados (`app/(site)/layout.tsx`, `app/library/layout.tsx`).
- Rutas dinâmicas (`[slug]`) para conteúdo variável.

## Componentes / sections

- Seções como blocos reutilizáveis que compõem páginas.
- Componentes de site (headers/footers) reaproveitados em layouts.
- `ui/` como base temática (CSS variables, sem conteúdo hardcoded).

## Fluxo de imports

- Alias `@/*` → raiz do projeto (via `tsconfig.json`).
- Exemplo: `import { HeaderCentered } from "@/components/site/headers/header-centered"`.
- Componentes UI importados de `@/components/ui/*` e utilitários de `@/lib/utils`.

## Testes

- **Playwright** (`@playwright/test` 1.64.1, devDependency) — infraestrutura e2e/smoke mínima (DEC-006, implementada 2026-10-14).
- `playwright.config.ts` — `testDir: ./tests`, `baseURL: http://localhost:3000`, `webServer` iniciando `npm run dev`.
- `tests/smoke.spec.ts` — **15 smoke tests**: `/`, `/blog` (listagem, post válido, slug inexistente/404), `/library` (redirect, headers, footers), navegação home → blog, home institucional (Entrega B), mobile nav, review cards/Avatar e hero data-driven. Contagem confirmada: 15 casos × 2 projetos = 30 execuções.
- **Projects:** desktop (1280×720) e mobile (375×667), **Chromium** somente.
- **Execução:** `npm run test:e2e`.
- Visual regression: ainda não configurada (posterior).

## Organização atual

- Separação clara: `app/` (páginas/routing), `components/` (reutilizável), `lib/` (utilitários).
- `docs/` e `memory-bank/` para documentação e memória do projeto.
- Nenhuma reorganização nesta fase.
