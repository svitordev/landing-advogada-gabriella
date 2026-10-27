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

## Fase 3 — Preparação dos assets

- Receber assets oficiais: logotipo/monograma em formato web, fotografia profissional (hero e seção sobre), favicon/OG image.
- Hoje o workspace tem apenas os SVGs padrão do template — nada da marca foi disponibilizado.
- Otimizar formatos (WebP/AVIF/SVG) no momento da implementação.

## Fase 4 — Identidade visual e tokens

- Validar a paleta proposta (estimativas visuais — ver `docs/DESIGN-SYSTEM.md`) e confirmar valores oficiais.
- Aplicar tokens em `app/globals.css` (brand, cores semânticas, claro/escuro a decidir) e tipografia (títulos serifada editorial; corpo sans-serif) — decisão de fontes na sessão de implementação.
- Decidir tema padrão da landing (provavelmente claro/off-white — a definir com a profissional).

## Fase 5 — Composição da landing com componentes existentes

- Montar a página com o mapeamento do `docs/COMPONENT-CATALOG.md` (header, hero, áreas de atuação, sobre, atendimento, conteúdo informativo, FAQ*, contato, footer) — *FAQ não possui componente ainda.
- Dados da cliente nas páginas/arquivos de configuração do projeto; componentes genéricos permanecem genéricos.

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
