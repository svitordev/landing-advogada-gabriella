# CHANGELOG — Maria Gabriella — Advocacia Personalizada

Registro de mudanças importantes ao longo da evolução. Formato inspirado em Keep a Changelog.

---

## [2026-10-29] — Entrega E: FAQ Reutilizável (VERIFIED)

- Criado `components/sections/faq/faq-section.tsx` — `FaqSection`, Server Component, data-driven, seguindo o contrato de props já documentado; nenhum conteúdo da cliente hardcoded.
- Contrato: `FaqItem`/`FaqSectionProps` (tipos locais); `title` obrigatório; `id?`/`eyebrow?`/`description?` opcionais; `items` via array — `items=[]` → a seção não é renderizada.
- `details`/`summary` nativos — sem primitive Accordion criado, sem estado React, sem `"use client"`, sem dependência nova; pergunta com hierarquia visual de título diretamente no `summary` (previsibilidade semântica); resposta fora do `summary`; múltiplos itens podem ficar abertos independentemente.
- Acessibilidade: teclado (Enter/Space), foco visível, `ChevronDown` decorativo `aria-hidden` com rotação no estado aberto — transição apenas `motion-safe` (reduced motion = rotação instantânea); nenhum ARIA desnecessário.
- Criada `app/library/faq/page.tsx` (showcase com demo tipada de serviço fictício) e adicionado o link "FAQ" ao `library-shell` — demais categorias intocadas.
- Home preservada: nenhuma FAQ publicada (conteúdo jurídico depende de aprovação da profissional); navegação e seções existentes intactas.
- Testes: 2 novos Playwright (FAQ na library com teclado/sem controles duplicados; home sem FAQ com navegação preservada). Suíte: 21 casos × 2 projetos = 42 execuções — **40 passed + 2 skipped**.
- Responsividade: uma coluna em 375×667, 768×1024 e 1280×720 — zero overflow.
- Gates: lint **0/0** · build **PASS** (17 rotas) · `git diff --check` limpo.
- **Nenhuma dependência nova; nenhum primitive criado** (componente novo único; contagem do catálogo de 41 para 42). Classificação: `FaqSection` → `LAB_CANDIDATE`; dados jurídicos futuros → `PROJECT_ONLY`.
- Documentação atualizada: `docs/COMPONENT-CATALOG.md`, `docs/ROADMAP-LANDING.md`, `memory-bank/CURRENT-STATE.md`, `memory-bank/CHANGELOG.md`.

---

## [2026-10-28] — Entrega D: ContactDetails Data-Driven (VERIFIED)

- `ContactDetails` migrado para contrato data-driven (`ContactChannel`/`ContactDetailsProps` — tipos locais; `title` obrigatório; `id?`/`eyebrow?`/`description?`/`channels?` opcionais); Server Component; nenhum conteúdo da cliente hardcoded.
- Canais opcionais: `channels` ausente/vazio → seção não renderizada; `href` válido → link sublinhado; sem `href` → texto simples; protocolos suportados por validação local: `mailto:`, `tel:`, `http(s)://`, caminho `/`; links vazios nunca são gerados; `hint` opcional.
- Formulário inerte removido **somente** do `ContactDetails` — o componente passa a ser só canais, sem captura de dados. `ContactSimple` e `ContactSplit` permanecem templates com formulários demonstrativos sem envio funcional (problema global não resolvido).
- Demonstração da `/library/contact` atualizada com dados fictícios cobrindo os três casos do contrato (mailto, sem href, HTTPS).
- Home preservada: nenhuma seção de contato publicada (dados oficiais pendentes); navegação Início/Áreas/Sobre intacta; nenhum CTA de contato inventado.
- Acessibilidade: `ul[role=list]`, links reais, foco visível por teclado confirmado. Responsividade: 375×667 (1 coluna), 768×1024 (2 colunas), 1280×720 (3 colunas) — zero overflow.
- Testes: 2 novos Playwright (canais com/sem link sem formulário na library; home sem seção de contato com navegação preservada). Suíte: 19 casos × 2 projetos = 38 execuções — **36 passed + 2 skipped**.
- Gates: lint **0/0** · build **PASS** (16 rotas) · `git diff --check` limpo.
- **Nenhuma dependência nova; nenhum componente React novo criado** (migração de componente existente; contagem do catálogo preservada em 41). Classificação: `ContactDetails` → `LAB_CANDIDATE`; dados da advogada → `PROJECT_ONLY`.
- Documentação atualizada: `docs/COMPONENT-CATALOG.md`, `docs/ROADMAP-LANDING.md`, `memory-bank/CURRENT-STATE.md`, `memory-bank/CHANGELOG.md`.

---

## [2026-10-28] — Entrega C: Áreas de Atuação + Sobre (VERIFIED)

- `ServicesGridSimple` migrado para contrato data-driven (`ServiceItem`; `title`/`items` obrigatórios; `id?`/`eyebrow?`/`description?`): seis cards puramente informativos (h2/h3, sem links/botões falsos), `items` vazio sem grade, grid 1/3 colunas preservado, Server Component.
- `AboutSplit` migrado para contrato data-driven (`title` obrigatório; `id?`/`eyebrow?`/`description?`/`paragraphs?`/`points?`/`image?`): coluna direita com prioridade imagem (`next/image`) > lista > nada; a landing usa o caso textual (sem fotografia oficial); suporte a imagem implementado, não validado com asset real; Server Component.
- `lib/site-config.ts` (PROJECT_ONLY) ganhou `sitePracticeAreas` (seis atividades preliminares com descrições neutras) e `siteAbout` (copy institucional provisória) — `PENDENTE_CONFIRMACAO_CLIENTE` apenas em comentários; nada inventado (sem formação/OAB/experiência declaradas).
- Navegação pública atualizada: Início `/` · Áreas de atuação `/#areas-de-atuacao` · Sobre `/#sobre` (IDs conferidos com as sections); "Conteúdo" saiu da nav pública — rota `/blog` e artigos genéricos preservados.
- `HeaderBasic`: correção mínima de active state — links com hash não são destacados apenas pelo pathname (sem scroll spy); `MobileNav` intacto.
- Home passou a compor Hero → Áreas de atuação → Sobre (header/footer do layout; h1 único; sem CTA falso; footer não duplicado).
- Demos da `/library` (`/library/services`, `/library/about`) adaptadas para receber props com dados genéricos — visual do baseline preservado; demais grupos intocados.
- Testes: 2 existentes ajustados (navegação home → âncora `#areas-de-atuacao` com seção visível; links reais da home) + 2 novos (seis áreas + hierarquia de títulos; Sobre textual sem placeholder de imagem). Suíte: 17 casos × 2 projetos = 34 execuções — **32 passed + 2 skipped**.
- Responsividade validada em 375×667 (1 coluna), 768×1024 e 1280×720 (3 colunas) — zero overflow; breakpoint original preservado (validação não identificou problema).
- Gates: lint **0/0** · build **PASS** (16 rotas) · `git diff --check` limpo.
- **Nenhuma dependência nova; nenhum componente novo criado** (migrações de componentes existentes; contagem do catálogo preservada em 41).

---

## [2026-10-27] — Entrega B: Header + Hero institucional (VERIFIED)

- `HeaderBasic` migrado para contrato data-driven (`brand`/`links`/`action?`): marca tipográfica da cliente via props (logo oficial pendente), CTA condicional (CTA ausente → sem botão falso), links internos/externos conforme contrato, `MobileNav` e navegação por teclado preservados.
- `HeroPrimary` migrado para contrato data-driven (`title` obrigatório; `eyebrow?`/`description?`/`actions?`/`image?`): suporte a `next/image` com `alt` e `sizes` responsivo; ausência de imagem → fallback visual neutro; Server Component preservado.
- Criado `lib/site-config.ts` (PROJECT_ONLY — configuração, não componente React): marca, subtítulo, navegação e conteúdo provisório da hero (`PENDENTE_CONFIRMACAO_CLIENTE`).
- Integração da marca no layout público: `app/(site)/layout.tsx` consome `siteBrand`/`siteNavLinks`; `FooterCta` genérico deixou de ser renderizado publicamente (componente preservado); rodapé mínimo institucional.
- Home institucional inicial: `app/(site)/page.tsx` renderiza apenas a `HeroPrimary` da cliente; seções genéricas de demonstração não são mais renderizadas na home (componentes permanecem no repositório/catálogo).
- Demos da `/library` preservadas, adaptadas para fornecer props com dados genéricos.
- Testes: 1 ajuste legítimo (navegação home → blog abre o menu mobile no project mobile) + 1 teste novo da home institucional. Suíte: 15 casos × 2 projetos = 30 execuções — **28 passed + 2 skipped**.
- Responsividade validada em 375×667 e 1280×720 (zero overflow em `/`, `/library/headers`, `/library/hero`).
- Gates: lint **0/0** · build **PASS** (16 rotas) · `git diff --check` limpo.
- **Nenhuma dependência nova; nenhum asset criado** (logo/fotografia seguem `PENDENTE_CONFIRMACAO_CLIENTE`).

---

## [2026-10-27] — Design Foundation institucional (VERIFIED)

- **Tema claro como padrão:** classe `dark` fixa removida do root layout; bloco `.dark` de `globals.css` preservado (não adaptado à nova identidade); sem toggle/theme provider.
- **Paleta vinho/bege aplicada** nos tokens `:root` de `app/globals.css` (OKLCH calibrado a partir das referências visuais — brand `oklch(0.302 0.09 27)`, background off-white, secondary/brand-soft bege, foreground marrom; `--muted-foreground` escurecido p/ 5.69:1; `--input` escurecido p/ ≈3.04:1 — WCAG 1.4.11; `--ring` vinho; sidebar tokens derivados).
- **Fontes via `next/font/google`** (sem dependência nova): Inter 400/500/600 (corpo) + Playfair Display 500/600 (títulos), `display: swap`, variáveis `--font-inter`/`--font-playfair` ligadas no `@theme inline` (`--font-sans`/`--font-serif`); `h1,h2,h3` com `font-serif` via `@layer base` (afeta headings de todo o site, incl. `/library` e `/blog`); `--font-mono` preservado.
- **Metadata institucional** no root layout (título + descrição informativa; nada inventado).
- **Contraste medido** (Chromium): fg/bg 11.84 · primary-fg/primary 12.99 · secondary-fg/secondary 10.35 · muted-fg/bg 5.69 · muted-fg/muted 5.21 · bs-fg/bs 10.35 · input/bg 3.04 · ring/bg 12.99 · border/bg 1.41 (decorativo).
- **Validação responsiva:** 375×667 e 1280×720 em `/`, `/library/headers`, `/library/hero`, `/blog` — tema claro ativo, fontes carregadas, zero overflow.
- **Gates:** lint **0/0** · build **PASS** (16 rotas) · Playwright **26 passed + 2 skipped** (baseline preservado).
- **Arquivos funcionais afetados:** `app/globals.css`, `app/layout.tsx` — somente eles.
- **Nenhuma dependência nova; nenhum componente criado; nenhum asset criado** (logotipo/fotografia seguem `PENDENTE_CONFIRMACAO_CLIENTE`). Header/Hero da cliente ainda não implementados (Entrega B).

---

## [2026-10-27] — Bootstrap documental do novo projeto (documental — nenhuma mudança funcional)

- Repositório passa a ser o projeto **independente** da landing **Maria Gabriella — Advocacia Personalizada**, criado a partir do código do Svitordev UI Lab (sem sincronização automática).
- Documentos atualizados: `README.md`, `PROJETO.md`, `AGENTS.md`, `.github/copilot-instructions.md`, `docs/ARQUITETURA.md`, `docs/DESIGN-SYSTEM.md`, `docs/COMPONENT-CATALOG.md`, `docs/DEFINITION-OF-DONE.md`, `memory-bank/CURRENT-STATE.md`, `memory-bank/DECISIONS.md` (DEC-011; DEC-010 marcada como histórica), `docs/ROADMAP-1000-EVOLUTIONS.md` (nota de origem) e `QUALITY-REVIEW.md` (nota de origem).
- Documento criado: `docs/ROADMAP-LANDING.md` (roadmap ativo).
- Identidade visual (paleta/tipografia) registrada como **PROPOSTA** — `app/globals.css` não foi alterado; nenhuma fonte instalada; nenhum componente criado; nenhuma página criada.
- Dados não confirmados da cliente usam a marcação `PENDENTE_CONFIRMACAO_CLIENTE`. A landing **não** está implementada.
- Sem mudanças em `app/`, `components/`, `lib/`, `public/`, configs, testes ou dependências. Sem commit nesta sessão.

---

## Histórico do Svitordev UI Lab (origem do código — preservado como referência)

## [2026-10-26] — Evolução 010: HeroCenterCta data-driven (VERIFIED)

- `components/sections/hero/hero-center-cta.tsx` migrada para o contrato — mesmo componente, sem redesign; toda a copy e os CTAs hardcoded saíram do componente.
- Contrato: `HeroCenterAction`/`HeroCenterCtaProps` (tipos locais, sem shared type); `title` obrigatório; `description?`, `supportingText?` e `actions?` opcionais; sem eyebrow; sem `className` público; sem props cosméticas.
- Server Component preservado; `Button asChild` com links reais — internos via `next/link`, protocolos/externos via `<a>` (convenção 001/003); uso típico de 1–2 actions (ausente/vazio → sem bloco).
- Demo movida para `/library/hero` (consumer real, constante tipada); os dois botões falsos da Hero viraram links reais; CTA interno da demo ajustado para "Ver conteúdos" → `/blog` (coerência de destino).
- Adicionado 1 teste Playwright focado (Hero renderizada via contrato: heading + CTA `mailto:` + CTA `/blog`). Suíte: 14 testes / 28 execuções — **26 passed + 2 skipped** (skips intencionais mobile-only da 007).
- Validação live: 375×667 (title, description, 2 CTAs como links, wrapping correto, supporting text, zero elementos vazios, zero overflow) e 1280×720 (layout central, typography/spacing preservados, zero overflow).
- Lint **0/0**; build **PASS** (16 rotas); `git diff --check` limpo.
- Findings: QLT-003 recebe correção real (hero-center-cta removida da evidência — 11→10 ocorrências, permanece aberto); QLT-005 recebe mais uma contribuição (permanece aberto); QLT-010 intocado (reservado para a 019).
- Documentação atualizada: `QUALITY-REVIEW.md` (evidência do QLT-003), `docs/COMPONENT-CATALOG.md` (entrada HeroCenterCta → data-driven), `docs/ROADMAP-1000-EVOLUTIONS.md` (010 VERIFIED), `memory-bank/CURRENT-STATE.md` (próxima execução: 011).

---

## [2026-10-25] — Evolução 009: Review cards com rating (VERIFIED)

- Criado `components/sections/testimonials/testimonials-rating-cards.tsx` — `TestimonialsRatingCards`, Server Component, data-driven, quarta variante do grupo testimonials e estruturalmente distinta das três legadas (rating + avatar + review cards).
- Contrato: `ReviewItem`/`ReviewAvatar`/`TestimonialsRatingCardsProps` (tipos locais); `items` obrigatório; `avatar` obrigatório por item (`src` opcional, `fallback` obrigatório, sem geração automática de initials); `role` opcional; sem `className` público.
- Rating inteiro 1–5 com normalização defensiva; exatamente 5 estrelas Lucide; accessible name no container `N de 5 estrelas`; ícones `aria-hidden`; semântica `article`/`blockquote`/`footer`; layout 1 coluna mobile / 3 colunas desktop; sem motion; sem ações interativas.
- Primeiro consumer real do `Avatar` (008), sem alterar sua API: imagem válida (data URL SVG inline) carregou; src quebrado acionou `AvatarFallback`; sem src renderizou `AvatarFallback` direto. **Avatar 008 — validação visual image/fallback concluída pela Evolução 009.**
- Variação 04 adicionada à `/library/testimonials` no padrão atual da página (sem antecipar a migração da 019), com demo tipada na página cobrindo os três casos do Avatar.
- Adicionados 3 testes Playwright focados ao smoke (rating acessível; fallback por src quebrado; imagem válida carregada). Suíte: 13 testes / 26 execuções — **24 passed + 2 skipped** (skips intencionais mobile-only da 007), confirmado em duas execuções consecutivas.
- Validação live: 375×667 (3 cards em 1 coluna, ratings íntegros, Avatar válido, fallback por erro, fallback sem src, role opcional, zero overflow) e 1280×720 (3 colunas, cards/ratings/Avatar íntegros, zero overflow).
- Lint **0/0**; build **PASS** (16 rotas); `git diff --check` limpo.
- Findings: nenhum. 009 contribui para a estratégia de migração gradual de QLT-005 (permanece aberto); QLT-010 segue reservado para a Evolução 019.
- Documentação atualizada: `docs/COMPONENT-CATALOG.md` (entrada + contagem 41), `docs/ROADMAP-1000-EVOLUTIONS.md` (009 VERIFIED), `memory-bank/CURRENT-STATE.md` (próxima execução: 010).

---

## [2026-10-23] — Evolução 008: Avatar (VERIFIED)

- Criado `components/ui/avatar.tsx` — `Avatar`, UI primitive baseado em `@radix-ui/react-avatar` (^1.3.1, dependência nova aprovada no Plan — decisão localizada do primitive, sem DEC global), Client Component ("use client"), API composicional com exatamente 3 exports: `Avatar` (Root), `AvatarImage`, `AvatarFallback`.
- Tamanho base único (`size-10` no Root); `className` + `data-slot` (`avatar`/`avatar-image`/`avatar-fallback`) nos três — padrões reais dos primitives locais (`cn()`, tokens); sem CVA, sem size variants.
- Imagem com `object-cover`; fallback com tokens existentes (`bg-muted`, `text-muted-foreground`) — comportamento image/fallback fornecido pelo Radix (sem máquina de estado própria no projeto); conteúdo do fallback e `alt` fornecidos pelo consumer; sem geração automática de iniciais; sem status/group; sem interatividade própria.
- Sem consumer artificial — nenhuma página/demo criada; a validação visual image → fallback será realizada na Evolução 009, primeiro consumer real do Avatar.
- Lint **0/0**; build **PASS** (16 rotas); e2e **18 passed + 2 skipped**; `git diff --check` limpo.
- Findings: nenhum.
- Documentação atualizada: `docs/COMPONENT-CATALOG.md` (entrada + contagem 40), `docs/ROADMAP-1000-EVOLUTIONS.md` (008 VERIFIED), `memory-bank/CURRENT-STATE.md` (próxima execução: 009).

---

## [2026-10-20] — Evolução 007: Mobile nav acessível (VERIFIED — QLT-006)

- Criado `components/site/headers/mobile-nav.tsx` — `MobileNav`, Client Component (`useState`/`useId`/`useRef`/`useEffect` com cleanup), contrato `MobileNavLink`/`MobileNavProps` (somente `links` obrigatório) — primeiro componente interativo compartilhado do laboratório.
- Toggle: `Button` real (ghost, icon-lg) com lucide `Menu`/`X`, `aria-label` dinâmico ("Abrir menu"/"Fechar menu"), `aria-expanded`, `aria-controls` via `useId` (ids únicos por instância, sem duplicar no DOM).
- Painel: landmark `<nav aria-label="Navegação principal">` condicional com `ul[role="list"]` (decisão do Plan — painel preserva semântica de navegação); fecha pelo botão, `Escape` (devolve foco ao botão) e clique fora; sem focus trap, sem Sheet, sem portal; visível somente abaixo de `md`.
- Modificados `header-basic.tsx` (MobileNav no grupo direito, depois do CTA — hamburger é o elemento mais à direita, garantindo o painel dentro da viewport em 375px; CTA permanece fora do menu) e `header-with-topbar.tsx` (MobileNav na linha principal; topbar intacta). `header-centered` reavaliado e intencionalmente mantido (flex-wrap funciona; sem hamburger).
- Adicionados 2 testes Playwright focados ao `tests/smoke.spec.ts` (mobile-only, pulam o project desktop): abrir por teclado → `aria-expanded`/`aria-controls` → painel landmark com links → `Escape` fecha e devolve foco; abrir por clique → clique fora fecha. Suíte: 10 testes / 20 execuções.
- Validação live: 375×667 (painel dentro da viewport — left 87→right 311 no Basic, left 86→right 310 no Topbar; ids únicos; independência de estado entre instâncias; link fecha menu e navega; active state preservado; zero overflow) e 1280×720 (botão mobile invisível, painel inexistente, nav desktop preservada, zero overflow).
- Lint **0/0**; build **PASS** (16 rotas); e2e **18 passed + 2 skipped** (20 execuções; skips intencionais dos testes mobile-only no project desktop).
- **QLT-006 → VERIFIED** no `QUALITY-REVIEW.md` (seção + tabela de prioridade P2 + total).
- Documentação atualizada: `QUALITY-REVIEW.md`, `docs/ROADMAP-1000-EVOLUTIONS.md` (007 VERIFIED), `docs/COMPONENT-CATALOG.md` (MobileNav + contagem 39), `memory-bank/CURRENT-STATE.md` (próxima execução: 008).

---

## [2026-10-19] — Evolução 006: `aria-label` nas navegações (VERIFIED — QLT-007)

- `aria-label="Navegação principal"` adicionado nos `<nav>` dos 3 headers (`header-basic`, `header-centered`, `header-with-topbar`); `aria-label="Navegação da biblioteca"` no `<nav>` do `library-shell` — exatamente os 4 `<nav>` do escopo, rótulos em pt-BR aprovados no Plan.
- `<nav>` já é landmark nativo — apenas o nome acessível faltava; nenhum outro ARIA adicionado; nada visual mudou; tab order inalterado.
- Rótulos confirmados na árvore de acessibilidade em `/` (HeaderCentered ativo), `/library/headers` (os 3 previews) e `/library/stats` (shell ativo).
- Lint **0/0**; build **PASS** (16 rotas); e2e **16/16** (suíte inalterada — smoke de navegação por role/texto continua verde).
- **QLT-007 → VERIFIED** no `QUALITY-REVIEW.md` (seção + tabela de prioridade P3 + total).
- Documentação atualizada: `QUALITY-REVIEW.md`, `docs/ROADMAP-1000-EVOLUTIONS.md` (006 VERIFIED), `memory-bank/CURRENT-STATE.md` (próxima execução: 007).

---

## [2026-10-19] — Evolução 005: Stats / métricas (VERIFIED)

- Criado `components/sections/stats/stats-grid.tsx` — `StatsGrid`, Server Component (sem `"use client"`), data-driven, seguindo o contrato exemplar da Evolução 001.
- Contrato: `StatItem = { value, label, description? }` (tipo local) + `StatsGridProps = { eyebrow?, title?, description?, items }` — `items` obrigatório; sem `className` público; sem props cosméticas.
- Primeiro consumo real do `Badge` (004): `eyebrow` renderiza via `<Badge variant="secondary">` centralizado no header — requisito explícito do roadmap.
- Lista: `ul[role="list"]` em `grid grid-cols-2 gap-8 md:grid-cols-4`; `li` por item com value (`text-3xl/4xl font-bold tabular-nums`) + label + description opcional; key `value-label`; tokens apenas; sem motion (reservado para a 012).
- Criada `app/library/stats/page.tsx` no padrão atual do showcase (metadata, array tipado, preview, label code) — demo fornecida pela página com 4 métricas conceituais; inclui value longo `R$ 2 mi` para validar o grid de 2 colunas em 375px.
- Modificado `components/sections/library-shell.tsx` — link "Stats" adicionado ao menu após "Logos" (+1 linha).
- Responsivo (375×667: grid 2×2, value longo sem truncamento, gap 32px, sem overflow; 1280×720: 4 colunas, sem overflow); acessível (h2, `ul[role=list]`, Badge nativo, tokens, sem ARIA gratuito).
- Lint **0/0**; build **PASS** (16 rotas); e2e **16/16** (suíte inalterada).
- Findings: nenhum.
- Documentação atualizada: `docs/COMPONENT-CATALOG.md` (entrada + contagem 38), `docs/ROADMAP-1000-EVOLUTIONS.md` (005 VERIFIED), `memory-bank/CURRENT-STATE.md` (próxima execução: 006). `docs/DESIGN-SYSTEM.md`: não alterado.

---

## [2026-10-18] — Evolução 004: Badge (VERIFIED)

- Criado `components/ui/badge.tsx` — `Badge`, UI primitive, Server Component (sem `"use client"`), `<span>` não interativo por conceito.
- API: `React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>`; `defaultVariants: { variant: "default" }`; `data-slot="badge"`; `className` combinado via `cn()` — padrões reais dos primitives locais (button/card/input/textarea), sem cópia da web.
- Variantes (decisão do Plan): `default`, `secondary`, `outline` — somente tokens, sem cor hardcoded; sem `destructive` por enquanto.
- Sem sizes, sem `asChild`/Radix Slot, sem hover próprio, sem motion (reservado para a 012); sem dependência nova; sem shadcn CLI.
- Sem página no `/library` — igual aos demais primitives; verificação visual quando consumido pela 005/009.
- Lint **0/0**; build **PASS** (15 rotas); e2e **16/16** (suíte inalterada).
- Findings: nenhum.
- Documentação atualizada: `docs/COMPONENT-CATALOG.md` (entrada + contagem 37), `docs/ROADMAP-1000-EVOLUTIONS.md` (004 VERIFIED), `memory-bank/CURRENT-STATE.md` (próxima execução: 005). `docs/DESIGN-SYSTEM.md`: não alterado.

---

## [2026-10-17] — Evolução 003: Hero Media Showcase (VERIFIED)

- Criado `components/sections/hero/hero-media-showcase.tsx` — `HeroMediaShowcase`, Server Component (sem `"use client"`), data-driven, seguindo o contrato exemplar da Evolução 001.
- Contrato: `HeroAction` (tipo local, sem abstração compartilhada prematura com `CtaAction`) + `HeroMediaShowcaseProps` — `title` obrigatório; `eyebrow`/`description`/`actions`/`mediaCaption` opcionais; sem `className` nem props cosméticas.
- Composição **vertical/showcase** (decisão do Plan, anti-inflação com `hero-primary`): conteúdo editorial centralizado no topo (eyebrow → h1 → descrição → actions) + media frame dominante full-width abaixo + legenda opcional — nenhuma coluna lateral de mídia.
- Media frame estruturalmente fixo: mock de browser/dashboard em HTML + Tailwind + tokens (chrome com dots, sidebar, stat cards, gráfico de barras, linhas) — sem imagem, sem asset, sem vídeo, sem ReactNode/render-prop, sem texto interno, sem `aria-*`/`role` gratuitos; legenda via `figcaption` (filho direto do `figure`).
- Actions via `Button asChild`: internos via `next/link`, protocolos/externos via `<a>` (padrão 001); sem motion (reservado para a Evolução 012).
- Modificado `app/library/hero/page.tsx` — constante local tipada `heroMediaShowcaseDemo` + bloco "Variante 04 · Showcase vertical com media frame" no padrão atual da página (página não reconstruída; QLT-010 segue na 019).
- Responsivo (375×667 e 1280×720 sem overflow, ordem DOM natural; media ≈ 1,9× a altura do conteúdo no desktop); acessível (h1, links reais, `figure`/`figcaption`, tokens, foco nativo do Button).
- Lint **0/0**; build **PASS** (15 rotas); e2e **16/16** (suíte inalterada — opção A, smoke novo na 025).
- Findings: nenhum.
- Documentação atualizada: `docs/COMPONENT-CATALOG.md` (entrada + contagem 36), `docs/ROADMAP-1000-EVOLUTIONS.md` (003 VERIFIED, renomeada para Hero Media Showcase), `memory-bank/CURRENT-STATE.md` (próxima execução: 004). `docs/DESIGN-SYSTEM.md`: não alterado (aplica o padrão já documentado).

---

## [2026-10-16] — Evolução 002: Logos / Social Proof Strip (VERIFIED)

- Criado `components/sections/logos/logos-strip.tsx` — `LogosStrip`, Server Component (sem `"use client"`), data-driven, seguindo o contrato exemplar da Evolução 001.
- Contrato mínimo: `LogoItem = { name }` via `items` obrigatório; `title` opcional; sem imagem, links, motion, `className` ou props cosméticas (suporte a imagem/links fica para evolução futura somente com demanda real).
- Wordmarks tipográficos em `<ul role="list">` com `<li>` por marca; flex-wrap centralizado; tokens apenas.
- Criada `app/library/logos/page.tsx` no padrão atual do showcase (metadata, array tipado, preview, label code) — demo fornecida pela página.
- Modificado `components/sections/library-shell.tsx` — link "Logos" adicionado ao menu (+1 linha).
- Responsivo (375 e 1280 sem overflow); acessível (h2, `ul[role=list]`, texto real, sem ARIA desnecessário).
- Lint **0/0**; build **PASS** (15 rotas); e2e **16/16** (suíte inalterada).
- Findings: nenhum (segundo caso de uso do contrato da 001).
- Documentação atualizada: `docs/COMPONENT-CATALOG.md` (entrada + contagem 35), `docs/ROADMAP-1000-EVOLUTIONS.md` (002 VERIFIED).

---

## [2026-10-15] — Evolução 001: CTA Split Actions data-driven + contrato exemplar (VERIFIED)

- Criado `components/sections/cta/cta-split-actions.tsx` — `CtaSplitActions`, Server Component (sem `"use client"`), data-driven, sem conteúdo hardcoded.
- Primeiro contrato de props do laboratório: `CtaAction` + `CtaSplitActionsProps` (`title` e `actions` obrigatórios; `eyebrow`/`description`/`supportingText` opcionais; `variant` restrito a `default | outline`; sem props cosméticas).
- Coluna editorial + painel de conversão; estruturalmente distinto do `cta-split.tsx` legado (caso de uso: decisão/conversão).
- Links internos via `next/link`; protocolos/externos via `<a>`; key das actions por `href + label`.
- Demo fornecida pela página `app/library/cta/page.tsx` (constante local tipada) — 4º bloco adicionado, página não reconstruída.
- Responsivo (1 coluna em 375, 2 colunas em 1280, sem overflow); acessível (h2, links reais, foco, tokens, sem ARIA desnecessário).
- Lint **0/0**; build **PASS**; e2e **16/16**.
- Findings: QLT-005 **PARCIAL** (início do padrão), QLT-003 **PARCIAL** (actions do exemplar).
- Documentação atualizada: `docs/DESIGN-SYSTEM.md` (padrão de contrato), `docs/COMPONENT-CATALOG.md` (entrada + contagem 34), `docs/ROADMAP-1000-EVOLUTIONS.md` (001 VERIFIED).

---

## [2026-10-15] — Roadmap oficial das 1000 evoluções (documental)

- Criado `docs/ROADMAP-1000-EVOLUTIONS.md` — fonte de verdade do roadmap evolutivo.
- Distribuição macro por áreas somando exatamente 1000 (direcional, rebalanceável entre lotes).
- Primeiro lote 001–025 detalhado; marcos 100/250/500/750/1000 descritos por maturidade.
- Estratégia de lotes de ~25 com reavaliação ao fim de cada lote e quality review maior a cada ~100 registrada no documento.
- `PROJETO.md` e `memory-bank/CURRENT-STATE.md` atualizados minimamente (referência ao roadmap oficial; lote ativo e próxima execução).
- **Nenhuma evolução implementada nesta mudança** — somente documentação.

---

## [2026-10-14] — Playwright mínimo pré-rotina (VERIFIED)

- `@playwright/test` **1.64.1** instalado (devDependency — única dependência nova).
- Navegador: **Chromium somente**.
- Criado `playwright.config.ts`: `testDir: ./tests`, `baseURL: http://localhost:3000`, `webServer` com `npm run dev` (`reuseExistingServer: !CI`, timeout 120000).
- Criado `tests/smoke.spec.ts`: **8 smoke tests** (`/`, `/blog` listagem, post de slug válido, slug inexistente/404, `/library` redirect, `/library/headers`, `/library/footers`, navegação home → blog).
- **Dois projects:** desktop (1280×720) e mobile (375×667).
- Script `npm run test:e2e` adicionado; `.gitignore` com `/test-results/` e `/playwright-report/`.
- **16/16** (8 testes × 2 projects) em **duas execuções consecutivas**, sem retries.
- Lint **0 errors / 0 warnings**; build **PASS**.
- **Infraestrutura Playwright pré-rotina VERIFIED** (DEC-006 executada).
- Não incluído (posterior): visual regression, CI, Firefox, WebKit.

---

## [0.1.0] — 2026-09-30

### Fundação

- Criada a fundação documental da FASE 2.
- Documentação criada:
  - `AGENTS.md` — ponto de entrada para Agents.
  - `.github/copilot-instructions.md` — instruções para GitHub Copilot.
  - `README.md` — reescrito para GitHub Template.
  - `PROJETO.md` — visão do produto.
  - `docs/ARQUITETURA.md` — arquitetura real atual.
  - `docs/DESIGN-SYSTEM.md` — sistema de design existente.
  - `docs/COMPONENT-CATALOG.md` — inventário de componentes (33).
  - `docs/DEFINITION-OF-DONE.md` — critérios de evolução concluída.
  - `memory-bank/CURRENT-STATE.md`, `DECISIONS.md`, `CHANGELOG.md`.
- Decisões aprovadas: DEC-001 a DEC-010.

### Conhecido (não corrigido nesta fase)

- `app/(site)/blog/[slug]/page.tsx` vazio quebra o `next build`. **RESOLVIDO** via QLT-001 (ver abaixo).

### Correções

- **QLT-001** (P0): Implementação da rota dinâmica `/blog/[slug]`
  - Criado `lib/blog.ts` com fonte de dados compartilhada
  - Implementado busca por slug com `getPostBySlug()`
  - Implementado `notFound()` para slugs inexistentes
  - Corrigido href para formato público `/blog/${slug}`
  - Listagem agora consome fonte compartilhada
  - Rota dinâmica consome mesma fonte compartilhada
  - **Testes:** lint PASS, build PASS, runtime 200/404 verificados

- **QLT-012** (P3): Removidos 5 imports não utilizados
  - `app/(site)/layout.tsx`: `FooterColumns`
  - `app/(site)/page.tsx`: `AboutTimeline`, `CtaBanner`, `HeroCenterCta`, `ServicesSplitWithHighlight`
  - 2 arquivos modificados, 5 linhas removidas, JSX preservado
  - **Testes:** ESLint 0 errors / 0 warnings, build PASS
  - **QLT-012 VERIFIED**

### Novo finding

- **QLT-013** (P2): Datas date-only podem exibir o dia anterior por conversão de timezone
  - Evidência: `2025-11-01` renderizou como `31/10/2025` durante verificação runtime
  - Causa: `new Date(post.date).toLocaleDateString("pt-BR")` interpreta date-only como UTC
  - **Não corrigido** nesta fase — registrado para tratamento futuro
