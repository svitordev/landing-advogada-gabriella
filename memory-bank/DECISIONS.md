# DECISIONS — Maria Gabriella (decisões herdadas do Svitordev UI Lab + decisões deste projeto)

Decisões arquiteturais aprovadas. Uma decisão por entrada: o que foi decidido, por quê, quando e o impacto.

DEC-001 a DEC-010 são do UI Lab (origem do código). As que seguem estruturalmente válidas para este repositório (estrutura, tokens, Playwright, memory bank, instruções) continuam aplicáveis; decisões exclusivas do UI Lab estão identificadas como **históricas** — preservadas, não apagadas.

---

## DEC-001 — Showcase

- **Decisão:** Manter `/library` como showcase oficial do Svitordev UI Lab. Não criar `/showcase`.
- **Motivo:** `/library` já possui estrutura de rotas e navegação de showcase. Criar `/showcase` duplicaria finalidade e fragmentaria a navegação.
- **Data:** 2026-09-30
- **Impacto:** `/library` será evoluído futuramente (índice, filtros, preview de código). Nenhuma alteração funcional em `/library` na FASE 2.

## DEC-002 — Estrutura

- **Decisão:** Manter a estrutura oficial `app/`, `components/`, `lib/`, `public/`. Não criar `src/`, não mover arquivos, não reorganizar.
- **Motivo:** 33 componentes não justificam migração; `src/` exigiria `src/app/` + reconfiguração de `tsconfig`/`paths`, reduzindo simplicidade e compatibilidade com Next.js.
- **Data:** 2026-09-30
- **Impacto:** Novas categorias (`layouts/`, `patterns/`, `compositions/`) só serão adicionadas quando houver necessidade real, nunca vazias.

## DEC-003 — Design Tokens

- **Decisão:** O sistema atual de CSS variables + Tailwind 4 + shadcn é a base oficial. Não recriar, não adicionar biblioteca externa. Nesta fase apenas DOCUMENTAR.
- **Motivo:** O sistema já existe (~39 CSS variables). Recriar desperdiçaria trabalho e criaria duplicação.
- **Data:** 2026-09-30
- **Impacto:** Expansão dos tokens (escala de cinza, tipografia) é tarefa técnica posterior, não nesta fase. Não alterar `globals.css`.

## DEC-004 — Light/Dark

- **Decisão:** Manter infraestrutura existente (`@custom-variant dark` + classe `dark`). Theme switching e toggle visual NÃO implementados agora.
- **Motivo:** Suporte técnico já existe. Toggle é opcional e nem todo projeto derivado precisa. Priorizar facilidade de customização da identidade visual.
- **Data:** 2026-09-30
- **Impacto:** Projetos derivados poderão ser apenas light, apenas dark, ou light/dark, conforme necessidade.

## DEC-005 — Animações

- **Decisão:** `tw-animate-css` + Tailwind/CSS como solução base. Motion/GSAP só futuramente ON-DEMAND.
- **Motivo:** `tw-animate-css` já cobre transições/hover. Motion aumenta bundle e complexidade sem ganho real para animações simples.
- **Data:** 2026-09-30
- **Impacto:** Nenhuma biblioteca de animação instalada nesta fase.

## DEC-006 — Playwright

- **Decisão:** Playwright entra como P1 **antes** do início da rotina das 1000 evoluções. Visual regression completo permanece posterior.
- **Motivo:** Qualidade automática é chão para evolução em escala; sem catálogo estável, os testes seriam frágeis.
- **Data:** 2026-09-30
- **Impacto:** Não instalar Playwright nesta fase. Apenas documentado.

## DEC-007 — Memory Bank

- **Decisão:** Criar memory-bank mínimo e versionado: `memory-bank/CURRENT-STATE.md`, `DECISIONS.md`, `CHANGELOG.md`.
- **Motivo:** Com centenas de evoluções, memória persistente evita repetir erros e mantém consistência. Barato e de alto valor.
- **Data:** 2026-09-30
- **Impacto:** Evitar duplicar documentação existente (não usar `memory-bank/` local em vez de `/memories/` quando aplicável à skill de memória).

## DEC-008 — Instruções do Agent

- **Decisão:** Não criar `.clinerules/`. Criar `AGENTS.md` e `.github/copilot-instructions.md` (ambiente principal = GitHub Copilot).
- **Motivo:** O repositório usa GitHub Copilot, não Claude/Clinerules. `AGENTS.md` concentra o conteúdo; o arquivo do Copilot mantém instruções curtas e específicas sem duplicar integralmente o `AGENTS.md`.
- **Data:** 2026-09-30
- **Impacto:** Dois arquivos complementares, não duplicados.

## DEC-009 — Catálogo

- **Decisão:** Catálogo composto por `/library` (visual) + `docs/COMPONENT-CATALOG.md` (índice documental). Registry estruturado (JSON/YAML) será criado posteriormente.
- **Motivo:** Catálogo vivo (navegável) + documento de referência se complementam; um não substitui o outro.
- **Data:** 2026-09-30
- **Impacto:** Não criar JSON/YAML registry nesta fase.

## DEC-010 — Roadmap de 1000 evoluções (histórica — exclusiva do UI Lab, não se aplica a este projeto)

- **Decisão:** 1000 objetivos macro; detalhar apenas os próximos 25; reavaliar antes de cada novo lote; auditoria a cada 100.
- **Motivo:** Detalhar 25 por vez mantém foco, permite reavaliação e evita component inflation e duplicações.
- **Data:** 2026-09-30
- **Impacto:** Não criar o roadmap nem desafios nesta fase.
- **Nota (2026-10-27):** decisão exclusiva do UI Lab. Neste repositório, o roadmap ativo é `docs/ROADMAP-LANDING.md`; o roadmap das 1000 evoluções fica preservado como referência histórica, com arquivamento a propor para aprovação futura.

## DEC-011 — Repositório independente da landing Maria Gabriella

- **Decisão:** Este repositório é um projeto independente (landing da advogada Maria Gabriella), criado a partir do código do UI Lab. Não há sincronização automática com o repositório original. Dados da cliente ficam nas páginas/arquivos de configuração do projeto, nunca em componentes genéricos. Convenção futura documentada (não implementada): `PROJECT_ONLY` / `LAB_CANDIDATE` / `LAB_PROMOTED`; componentes promovidos ao UI Lab serão generalizados em trabalho separado. Não criar registry, monorepo ou pacote npm nesta fase.
- **Motivo:** Separar o produto final da cliente do laboratório de origem, preservando os componentes reutilizáveis e evitando acoplamento entre repositórios.
- **Data:** 2026-10-27
- **Impacto:** Documentação adaptada (README, PROJETO, AGENTS, docs/). Código permanece herdado e ainda não personalizado. Identidade visual registrada como proposta, sem alterar `globals.css`.
