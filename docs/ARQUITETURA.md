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

- `app/layout.tsx` — layout raiz (metadata institucional + `robots` noindex/nofollow **temporário** — ver Política de indexação; `lang="pt-br"`; tema claro como padrão).
- `app/globals.css` — import do Tailwind + `tw-animate-css`, `@theme inline`, tokens light/dark.
- `app/page.tsx` — página inicial.
- `app/(site)/` — **route group** de rotas do site (parênteses = sem segmento de URL):
  - `layout.tsx` — layout do site: `HeaderBasic` consumindo `siteBrand`/`siteNavLinks` de `lib/site-config.ts`, main e rodapé mínimo institucional (sem contatos/OAB inventados; `FooterCta` não é mais renderizado aqui).
  - `page.tsx` — home institucional: `HeroPrimary` consumindo `siteHero` de `lib/site-config.ts` (composição mínima da Entrega B; demais seções em entregas futuras).
  - `blog/layout.tsx` — **criado na F3-A**: metadata `robots` noindex/nofollow para o segmento real do blog (route group `(site)` — não existe `app/blog/`).
  - `blog/page.tsx` — listagem de posts.
  - `blog/[slug]/page.tsx` — rota dinâmica de post (hoje vazia — ver problema conhecido).
- `app/library/` — showcase oficial (ver DEC-001):
  - `layout.tsx` — wrapper com `SectionsShell` + metadata `robots` noindex/nofollow (F3-A).
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

## Política de indexação (F3-A — temporária)

A política atual é de **pré-publicação**: as rotas afetadas emitem `noindex, nofollow` via metadata Next.js (merge por segmento — nenhuma página define `robots` próprio, todas herdam do layout do seu segmento).

### Metadata global — `app/layout.tsx`

- `robots: { index: false, follow: false }` na metadata existente do layout raiz — **TEMPORÁRIO**.
- Motivo: a Home ainda possui conteúdo pendente de aprovação profissional e não está autorizada para lançamento definitivo.

### Blog — `app/(site)/blog/layout.tsx` (criado na F3-A)

- O blog vive no **route group `(site)`** — o segmento real é `app/(site)/blog/`; um layout em `app/blog/` não existiria na cadeia de rotas e seria inerte.
- Metadata `noindex, nofollow` herda por `/blog` e por `/blog/[slug]` (artigos dinâmicos protegidos pelo layout; `blog/page.tsx` e `blog/[slug]/page.tsx` não definem metadata própria).
- Artigos demonstrativos preservados; nenhuma rota removida; o layout apenas repassa `children` (sem mudança visual).

### Library — `app/library/layout.tsx`

- Metadata `noindex, nofollow` exportada no layout — herda por `/library` (redirect) e por todas as categorias filhas; as páginas com metadata própria (headers, footers, logos, stats, faq) definem apenas título/descrição e **não** sobrescrevem `robots`.
- Biblioteca continua acessível diretamente por URL; showcases preservados; nenhuma autenticação adicionada; nenhum componente removido.

### Limitações do noindex

- `noindex` **não é autenticação** nem controle de acesso: não bloqueia acesso por URL e não protege informações confidenciais.
- Não impede necessariamente a indexação por mecanismos que ignorem a diretiva.
- Não corrige formulários demonstrativos sem backend (`ContactSimple`/`ContactSplit`).
- Não substitui a revisão de conteúdo antes da publicação.

### Robots e sitemap

- Nenhum `robots.ts` foi criado na F3-A; nenhum sitemap foi criado; nenhum domínio é presumido (sem `metadataBase`).
- A eventual política de `robots.txt` (F3-B) deverá ser planejada sem impedir que os crawlers consigam ler o `noindex` das páginas demonstrativas.

### Gate obrigatório de go-live

- A liberação pública da Home deverá remover o `noindex` global **somente** após aprovação do conteúdo e das informações profissionais pela advogada.
- As regras específicas de blog e library deverão permanecer enquanto essas rotas contiverem demonstrações.

## Isolamento das demonstrações (F3-C)

A F3-A cuida da **indexação**; a F3-C acrescenta **restrição de acesso HTTP** na produção padrão. As duas políticas são complementares.

### Proxy Next.js 16 — `proxy.ts` (raiz)

- Utiliza a **convenção Proxy do Next.js 16** (o build o registra como `ƒ Proxy (Middleware)`).
- Matcher limitado a `["/library/:path*", "/blog/:path*"]` — caminhos parecidos (`/blogger`, `/library-extra`) **não** são interceptados; rotas futuras desses prefixos serão abrangidas automaticamente.
- A Home e os demais recursos/rotas **não** passam pelo gate.
- Nenhuma rota ou componente foi removido; nenhuma autenticação foi criada.

### Comportamento fail-closed — `ENABLE_DEMO_ROUTES`

Variável **server-side** (sem `NEXT_PUBLIC_`), comparada literalmente com `"true"` no código (`process.env.ENABLE_DEMO_ROUTES === "true"`):

| Ambiente | Variável | Resultado |
|---|---|---|
| Desenvolvimento | Qualquer valor (inclusive ausente) | Demonstrações acessíveis |
| Produção | Ausente | **Demonstrações bloqueadas** |
| Produção | `false` | Demonstrações bloqueadas |
| Produção | Qualquer valor diferente de `true` | Demonstrações bloqueadas |
| Produção/preview | `true` | Demonstrações liberadas |

- A ausência da flag em produção **jamais** libera as demonstrações (fail-closed).
- A liberação explícita **não** fornece autenticação.
- **Não** recomendar adicionar `ENABLE_DEMO_ROUTES=true` ao ambiente de produção pública — a flag é o mecanismo de previews autorizados.
- A leitura da flag em runtime foi **validada contra `next start` real** nos três estados (ausente/false/true) sobre o mesmo build — não presumida.

### Resposta de bloqueio

- **HTTP 404 real**, corpo vazio — sem conteúdo demonstrativo, sem redirect para a Home, sem rewrite.
- Headers na resposta bloqueada: `X-Robots-Tag: noindex, nofollow` e `Cache-Control: no-store` (resposta dependente de ambiente).
- Particularidade verificada: `/library/` (barra final) recebe **redirecionamento canônico 308 do próprio framework** para `/library`, chegando em seguida ao 404 do proxy — a cadeia termina em 404 sem conteúdo demonstrativo. Portanto não se pode declarar que absolutamente nenhuma solicitação sofre redirecionamento.

### Limitações do isolamento

- O conteúdo demonstrativo **permanece nos artefatos do build**, apenas inacessível pelas rotas.
- O proxy **não equivale a autenticação**.
- Preview habilitado publicamente permanece acessível por URL.
- RSC/prefetch têm cobertura pelo matcher, mas os cabeçalhos específicos não foram testados individualmente.
- Cache/CDN externos devem respeitar a política de resposta (`no-store`).
- A Home permanece sujeita à aprovação profissional antes do go-live.

## Componentes / sections

- Seções como blocos reutilizáveis que compõem páginas.
- Componentes de site (headers/footers) reaproveitados em layouts.
- `ui/` como base temática (CSS variables, sem conteúdo hardcoded).

## Fluxo de imports

- Alias `@/*` → raiz do projeto (via `tsconfig.json`).
- Exemplo: `import { HeaderCentered } from "@/components/site/headers/header-centered"`.
- Componentes UI importados de `@/components/ui/*` e utilitários de `@/lib/utils`.

## Testes

- **Playwright** (`@playwright/test` 1.64.1, devDependency) — infraestrutura e2e/smoke mínima (DEC-006, implementada 2026-10-14). Arquitetura de dois ambientes no **mesmo** `playwright.config.ts` (F3-C):
  - **Desenvolvimento** — `webServer` com `npm run dev` na porta 3000; projetos **desktop** (1280×720) e **mobile** (375×667) com `testIgnore` do spec de produção; executam os **23 casos originais** de `tests/smoke.spec.ts` (gate do proxy inativo em development por definição).
  - **Produção** — `webServer` com `npm run build && npm run start -- -p 3100` na porta 3100, `reuseExistingServer: false` (servidor nunca reutilizado silenciosamente); projeto **production-gate** com `testMatch` exclusivo em `tests/production-gate.spec.ts` e `baseURL` explícita — configuração de produção **restrita** (flag ausente).
- `tests/smoke.spec.ts` — **23 smoke tests**: `/`, `/blog` (listagem, post válido, slug inexistente/404), `/library` (redirect, headers, footers), navegação home → blog, home institucional (Entregas B–C), mobile nav, review cards/Avatar, hero data-driven, ContactDetails (Entrega D), FAQ (Entrega E) e política de indexação (F3-A — home noindex + rotas demonstrativas noindex). Contagem confirmada: 23 casos × 2 projetos = 46 execuções (44 passed + 2 skipped).
- `tests/production-gate.spec.ts` — **2 testes de produção** (somente no projeto `production-gate`): rotas demonstrativas com HTTP 404 real + `X-Robots-Tag` + sem conteúdo demo/formulário (com `maxRedirects: 0`) e Home preservada (200 + `noindex, nofollow`).
- **Chromium** somente em todos os projetos. **Execução:** `npm run test:e2e` — total 48 execuções (46 passed + 2 skipped).
- Visual regression: ainda não configurada (posterior).

## Organização atual

- Separação clara: `app/` (páginas/routing), `components/` (reutilizável), `lib/` (utilitários).
- `docs/` e `memory-bank/` para documentação e memória do projeto.
- Nenhuma reorganização nesta fase.
