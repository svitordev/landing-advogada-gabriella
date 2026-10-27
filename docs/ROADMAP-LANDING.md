# ROADMAP-LANDING.md — Maria Gabriella — Advocacia Personalizada

Roadmap **ativo** deste projeto. Sem estimativas de prazo (dados insuficientes). Cada fase depende de aprovação quando houver risco.

> O `docs/ROADMAP-1000-EVOLUTIONS.md` é do Svitordev UI Lab (origem histórica do código) — não é o roadmap deste projeto. Preservado como referência; arquivamento a propor para aprovação futura.

## Fase 1 — Discovery e documentação ✅

- Análise do repositório real (código, componentes, tokens, rotas, testes).
- Bootstrap documental: README, PROJETO, AGENTS, docs/ e memory-bank adaptados ao novo projeto.
- Conclusão: 2026-10-27.

## Fase 2 — Validação dos dados da cliente

- Coletar/confirmar com a profissional: OAB (número/seccional), formação, títulos, anos de experiência, endereço, e-mail, telefone, região atendida, lista definitiva de áreas de atuação.
- Definir política de conteúdo informativo e FAQ (somente conteúdo educativo, aprovado; depoimentos/estatísticas apenas com avaliação ética e autorização — ver `AGENTS.md`).
- Enquanto não confirmado: manter marcação `PENDENTE_CONFIRMACAO_CLIENTE`.
- **Status: pendente.**

## Fase 3 — Preparação dos assets

- Receber assets oficiais: logotipo/monograma em formato web, fotografia profissional (hero e seção sobre), favicon/OG image.
- Hoje o workspace tem apenas os SVGs padrão do template — nada da marca foi disponibilizado.
- Otimizar formatos (WebP/AVIF/SVG) no momento da implementação.
- **Status: pendente.**

## Fase 4 — Identidade visual e tokens ✅ (Entrega A — VERIFIED 2026-10-27)

Implementado e validado (ver detalhes e contrastes medidos em `docs/DESIGN-SYSTEM.md`):

- **Tema claro como padrão** — classe `dark` fixa removida do root layout; bloco `.dark` preservado (não adaptado); sem toggle/theme provider.
- **Tokens aplicados** em `app/globals.css` (`:root`): paleta vinho/marrom/bege/off-white via OKLCH calibrado; `--input` ajustado por acessibilidade (≈3.04:1).
- **Fontes implementadas** via `next/font/google`: Inter (400/500/600, corpo) + Playfair Display (500/600, títulos h1–h3 via `@layer base`); `display: swap`; sem dependência nova.
- **Metadata institucional** aplicada no root layout.
- **Contraste verificado** nos pares documentados; **responsividade validada** em 375×667 e 1280×720 (zero overflow).
- **Gates:** lint 0/0 · build PASS (16 rotas) · Playwright 26 passed + 2 skipped.
- Pendente da fase: validação **oficial** da paleta com a cliente (valores atuais são aproximações calibradas — fase 2).

Arquivos funcionais afetados: `app/globals.css`, `app/layout.tsx`.

**Entrega B executada e VERIFIED — ver Fase 5.**

## Fase 5 — Composição da landing com componentes existentes (parcialmente executada)

- Montar a página com o mapeamento do `docs/COMPONENT-CATALOG.md` (header, hero, áreas de atuação, sobre, atendimento, conteúdo informativo, FAQ*, contato, footer) — *FAQ não possui componente ainda.
- Dados da cliente nas páginas/arquivos de configuração do projeto; componentes genéricos permanecem genéricos.

### Entrega B — Header + Hero institucional — implementação funcional VERIFIED (2026-10-27)

- `HeaderBasic` migrado para contrato data-driven (`brand`/`links`/`action?`), consumido pelo layout público via `lib/site-config.ts`; `MobileNav` e navegação por teclado preservados.
- `HeroPrimary` migrado para contrato data-driven (`title` obrigatório; `eyebrow?`/`description?`/`actions?`/`image?`), com suporte a `next/image` e fallback neutro sem imagem; Server Component preservado.
- Configuração central da cliente criada em `lib/site-config.ts` (PROJECT_ONLY); conteúdo da hero provisório (`PENDENTE_CONFIRMACAO_CLIENTE`).
- Home institucional inicial: apenas a hero da cliente; seções genéricas de demo deixaram de ser renderizadas na home (componentes seguem no catálogo); `FooterCta` saiu da composição pública; rodapé mínimo institucional.
- Demos da `/library` preservadas, adaptadas para receber props com dados genéricos.
- Gates: lint 0/0 · build PASS (16 rotas) · Playwright 28 passed + 2 skipped (15 casos × 2 projetos) · zero overflow em 375×667 e 1280×720.
- A landing inteira ainda **não** está pronta — demais seções da fase seguem pendentes.

**Próxima entrega funcional sugerida: Entrega C — Áreas de atuação + Sobre a advogada (não iniciada).**

## Fase 6 — Criação de componentes realmente necessários

- Criar apenas o que a composição exigir e não existir (ex.: FAQ), seguindo o contrato de props data-driven já documentado em `docs/DESIGN-SYSTEM.md`.
- Classificar conforme convenção: `PROJECT_ONLY` / `LAB_CANDIDATE` (`LAB_PROMOTED` só em trabalho separado no UI Lab).

## Fase 7 — Conteúdo e SEO

- Redigir conteúdo final com a profissional (sem promessas de resultado, sem mercantilização — OAB).
- Metadata por página (título, descrição, OG), dados estruturados quando aplicável (finding QLT-002).
- Revisar conteúdo jurídico antes da publicação.

## Fase 8 — Responsividade e acessibilidade

- Verificar todas as seções em mobile/tablet/desktop (incl. os headers com `MobileNav`).
- Acessibilidade: contraste (paleta escura sobre off-white), teclado, ordem de leitura, `alt` real nas fotos, `prefers-reduced-motion`.

## Fase 9 — Testes e revisão

- `npm run lint`, `npm run build` e `npm run test:e2e` verdes (Playwright — Chromium, desktop + mobile).
- Revisar findings pendentes do `QUALITY-REVIEW.md` que a implementação tocar (ex.: QLT-013 — datas/timezone).
- Revisão de `git diff` antes de commit.

## Fase 10 — Preparação para publicação

- Checklist final da `docs/DEFINITION-OF-DONE.md`, incluindo LGPD e critérios específicos da landing.
- **Aprovação formal da advogada** de todo o conteúdo (jurídico e publicitário) antes de publicar.
- Nenhum dado `PENDENTE_CONFIRMACAO_CLIENTE` pode permanecer no ar.
