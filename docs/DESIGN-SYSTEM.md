# DESIGN-SYSTEM.md — Maria Gabriella

Sistema de design real atual (herdado do Svitordev UI Lab, ainda não personalizado). A identidade da nova marca está documentada abaixo como **PROPOSTA** — `app/globals.css` ainda não foi alterado.

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

- `--brand` — roxo (light: `oklch(0.55 0.20 280)`, dark: `oklch(0.70 0.18 280)`)
- `--brand-foreground` — texto sobre o brand
- `--brand-soft`, `--brand-soft-foreground` — variantes suaves do brand

### Radius

- `--radius` (base 0.625rem) + `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`

### Fontes

- `--font-sans` (Geist Sans), `--font-mono` (Geist Mono)

### Sidebar tokens (Tailwind 4 sidebar API)

- `--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, `--sidebar-primary-foreground`, `--sidebar-accent`, `--sidebar-accent-foreground`, `--sidebar-border`, `--sidebar-ring`

### Light/dark

- `@custom-variant dark` define o suporte a dark mode via classe `dark`.
- Layout raiz aplica `className="dark"` (dark por padrão).

## Nova identidade visual — PROPOSTA (não aplicada)

> Estado: **proposta documental**. Nenhum valor abaixo está no CSS hoje — `globals.css` continua com os tokens do template (brand roxo, fontes Geist). Aplicação será tarefa própria do roadmap (`docs/ROADMAP-LANDING.md`, fase 4).

Paleta estimada a partir das referências visuais da marca — valores aproximados, sujeitos a validação:

| Papel | Cor aproximada |
|---|---|
| Vinho principal | `#3D1717` |
| Marrom profundo | `#412726` |
| Bege | `#EEE5DB` |
| Off-white | `#FBF6F3` |
| Taupe | `#9E8277` |

Direção tipográfica preliminar:

- **Títulos:** serifada elegante (ex.: Playfair Display ou Cormorant Garamond);
- **Corpo:** sans-serif limpa (ex.: Inter).

**Nenhuma fonte foi instalada e nenhum token foi alterado nesta fase.**

Direção geral: elegância, sobriedade, legibilidade, tipografia editorial, boa hierarquia visual, fotografia profissional, identidade coerente com o monograma existente, responsividade e acessibilidade.

**Assets:** logotipo/monograma e fotografia profissional ainda **não estão no workspace** — precisarão ser disponibilizados (`PENDENTE_CONFIRMACAO_CLIENTE`).

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
