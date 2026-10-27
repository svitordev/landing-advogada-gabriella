# DESIGN-SYSTEM.md — Maria Gabriella

Sistema de design real atual. A identidade institucional da marca está **IMPLEMENTADA** nos tokens de `app/globals.css` e no root layout (Entrega A — Design Foundation, VERIFIED 2026-10-27). Componentes específicos da cliente (Header/Hero) ainda não implementados — ver `docs/ROADMAP-LANDING.md`.

## Base

- **Tailwind CSS 4** — framework de estilização.
- **Configuração inline** em `app/globals.css` (estilo Tailwind v4). **Não existe `tailwind.config.ts`.**
- **shadcn/ui** (style new-york) — componentes base, sem dependência de biblioteca de UI.
- **CSS variables** — tokens definidos em `:root` (light) e `.dark` (dark).
- **`@theme inline`** — mapeia CSS variables para tokens do Tailwind (`--color-*`, `--radius-*`, `--font-*`).

## EXISTENTE (documentar, não recriar)

### Tokens de cor (semantic)

- `--background`, `--foreground`
- `--primary` (= `--brand`), `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--accent` (= `--brand-soft`), `--accent-foreground`
- `--muted`, `--muted-foreground`
- `--destructive`
- `--border`, `--input`, `--ring`
- `--card`, `--card-foreground`
- `--popover`, `--popover-foreground`


### Brand (identidade visual)

- `--brand` — **vinho** em `:root` (`oklch(0.302 0.09 27)` ≈ `#531713` em sRGB — aproximação do `#3D1717` de referência). No bloco `.dark` ainda mantém os valores originais do template (roxo) — preservado, **não adaptado** à nova identidade.
- `--brand-foreground` — texto sobre o brand (`:root`: `oklch(0.975 0.012 60)` — off-white)
- `--brand-soft`, `--brand-soft-foreground` — variantes suaves do brand (`:root`: bege/marrom — ver tabela de tokens implementados abaixo)

### Radius

- `--radius` (base 0.625rem) + `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`

### Fontes

- `--font-sans` → `var(--font-inter)` (**Inter**, via `next/font/google` — implementada)
- `--font-serif` → `var(--font-playfair)` (**Playfair Display**, via `next/font/google` — implementada)
- `--font-mono` (Geist Mono) — **preservado como estava**; a variável `--font-geist-mono` nunca foi definida por um loader (legado do template — fallback de sistema)

### Sidebar tokens (Tailwind 4 sidebar API)

- `--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, `--sidebar-primary-foreground`, `--sidebar-accent`, `--sidebar-accent-foreground`, `--sidebar-border`, `--sidebar-ring`

### Light/dark

- `@custom-variant dark` define o suporte a dark mode via classe `dark` — **preservado tecnicamente**.
- O layout raiz **não aplica mais** `className="dark"` — o **tema claro é o padrão** (decisão da Entrega A). O bloco `.dark` existe no CSS, mas não está ativo por padrão e **não foi adaptado** à identidade vinho/bege.
- Sem toggle e sem theme provider nesta versão.

## Identidade visual — IMPLEMENTADA (Entrega A, 2026-10-27)

> Estado: tokens de `:root`, fontes e metadata aplicados e validados (lint 0/0, build PASS, Playwright 26 passed + 2 skipped, verificação visual 375×667 e 1280×720 em `/`, `/library/headers`, `/library/hero`, `/blog` — zero overflow). Header e Hero específicos da cliente **ainda não implementados** (Entrega B). A mudança de tema/tokens **afeta visualmente todas as páginas herdadas**, incluindo `/library` e `/blog`.

### Paleta de referência da marca (valores visuais de origem)

| Papel | Cor de referência | Token técnico implementado (`:root`) | Aproximação sRGB medida |
|---|---|---|---|
| Vinho principal | `#3D1717` | `--brand`/`--primary`/`--ring` = `oklch(0.302 0.09 27)` | `#531713` |
| Marrom profundo | `#412726` | `--foreground`/`--card-foreground`/`--popover-foreground`/`--secondary-foreground`/`--brand-soft-foreground` = `oklch(0.325 0.05 35)` | `#4a2a22` |
| Bege | `#EEE5DB` | `--secondary`/`--brand-soft`/`--accent` = `oklch(0.93 0.022 60)` | `#f3e5da` |
| Off-white | `#FBF6F3` | `--background`/`--card`/`--popover`/`--brand-foreground` = `oklch(0.975 0.012 60)` | `#fdf5ef` |
| Taupe | `#9E8277` | base do `--muted-foreground` escurecido = `oklch(0.50 0.05 45)` (≈ `#7c5a4c`) e `--border` = `oklch(0.865 0.03 55)` (≈ `#e3cec0`) | ver coluna |

Tokens adicionais ajustados por coerência temática: `--muted` = `oklch(0.945 0.018 55)`; `--input` = `oklch(0.65 0.05 50)` (≈ `#a98774`); sidebar tokens derivados (`--sidebar`/`--sidebar-foreground`/`--sidebar-border`/`--sidebar-ring`). Os valores OKLCH são **aproximações calibradas** das referências visuais — equivalência exata não declarada; validação oficial da paleta com a cliente segue pendente (fase 2 do roadmap).

### Tipografia implementada

- **Corpo:** Inter — pesos **400, 500, 600** (`next/font/google`, `subsets: ["latin"]`, `display: "swap"`, variável `--font-inter`).
- **Títulos:** Playfair Display — pesos **500, 600** (`next/font/google`, `subsets: ["latin"]`, `display: "swap"`, variável `--font-playfair`).
- Integração via `@theme inline`: `--font-sans` → `--font-inter`; `--font-serif` → `--font-playfair`.
- Estratégia explícita no `@layer base`: `h1, h2, h3 { @apply font-serif }` — **afeta todos os headings do site**, incluindo `/library` e `/blog` (registrado no plano da Entrega A).
- `--font-mono` preservado (ver seção Fontes acima).

### Contraste medido (Chromium, 2026-10-27)

| Combinação | Medido |
|---|---|
| foreground/background | 11.84:1 |
| primary-foreground/primary | 12.99:1 |
| secondary-foreground/secondary | 10.35:1 |
| muted-foreground/background | 5.69:1 |
| muted-foreground/muted | 5.21:1 |
| brand-soft-foreground/brand-soft | 10.35:1 |
| input/background | 3.04:1 |
| ring/background | 12.99:1 |
| border/background | 1.41:1 |

- O taupe original (`#9E8277`) falharia como texto secundário sobre off-white; `--muted-foreground` foi **escurecido** para atingir 5.69:1.
- `--input` precisou ser **escurecido** para atingir ≈3.04:1 contra o fundo (WCAG 1.4.11 — fronteira de campo interativo).
- `--border` a 1.41:1 foi mantido para fins **decorativos**; elementos interativos relevantes devem usar contraste apropriado.
- **Não se afirma conformidade WCAG integral de todos os componentes** — apenas os pares e fluxos medidos acima foram verificados.

### Metadata implementada

- Título: `Maria Gabriella | Advocacia Personalizada`; descrição informativa sem promessas. Sem OAB/endereço inventados, sem OG com imagem inexistente.

### Assets

- Logotipo/monograma e fotografia profissional ainda **não estão no workspace** — `PENDENTE_CONFIRMACAO_CLIENTE`. Nenhum asset fictício foi criado.

## A EXPANDIR (tarefa técnica posterior)

- **Escala de cinza completa** (100→900) — hoje só `secondary`/`muted`.
- **Escala de tipografia** (tamanho/weight/leading para h1→h6, body, caption).
- **Tokens de spacing customizados** (hoje usa-se o spacing padrão do Tailwind).

## OPCIONAL (não urgente)

- Chart colors / gradientes customizados.
- Tokens de animação (tempo/easing como token).
- Theme switching / toggle visual de tema (DEC-004).

## Regras de uso

- Preferir cores semânticas (`bg-primary`, `text-muted`, `border-border`) a cores hardcoded.
- Customizar identidade via CSS variables em `globals.css` (brand, cores, radius).
- Não duplicar valores de cor/espaçamento — usar tokens existentes.

## Contratos de props (seções data-driven)

Primeiro contrato exemplar do laboratório (Evolução 001): `CtaSplitActions` (`components/sections/cta/cta-split-actions.tsx`).

- Contrato mínimo e local ao componente: `title` e `actions` obrigatórios; `eyebrow`, `description` e `supportingText` opcionais; `actions[].variant` restrito a `default | outline`.
- Sem props cosméticas (`className`, cor, padding) e sem render-props no contrato.
- Conteúdo vem por props; dados de demo pertencem à página da `/library`, não ao componente.
- Server Component quando não há interação client-side.
- Novas sections data-driven seguem este padrão; componentes legados migram quando forem tocados (estratégia B — sem refatoração em massa).

## Estratégia para projetos derivados (DEC-004)

Projetos criados a partir do template poderão ser:

- **apenas light**;
- **apenas dark**;
- **light/dark** (com toggle opcional).

A facilidade de customização da identidade visual é o requisito principal: trocar cores, fontes e branding é feito alterando as CSS variables, sem mexer na lógica dos componentes.
