# AGENTS.md — Maria Gabriella — Advocacia Personalizada

Ponto de entrada principal para qualquer Agent. Leia antes de agir.

## O que é

Landing page institucional da advogada **Maria Gabriella** — projeto **independente**, criado a partir do código do **Svitordev UI Lab** (origem histórica; não há sincronização automática entre repositórios).

Objetivo: apresentação profissional sóbria e informativa (áreas de atuação, formação, atendimento e contato), respeitando as restrições de publicidade jurídica da OAB.

Stack confirmada: **Next.js 16.0.3 (App Router) + React 19.2 + TypeScript 5 + Tailwind CSS 4 + shadcn/ui + ESLint 9 + Playwright.**

## Arquitetura resumida

```
app/              # Next.js App Router (páginas + layouts) — conteúdo herdado do template
components/
  ui/             # 6 componentes base shadcn/ui
  site/           # 7 componentes (headers + footers)
  sections/       # 27 seções + shell da /library
lib/              # utils (cn) + fonte de dados do blog
public/           # assets (apenas SVGs padrão do template)
docs/             # documentação
memory-bank/      # memória do projeto
tests/            # smoke tests Playwright
```

Inventário real completo em `docs/COMPONENT-CATALOG.md` (42 componentes relevantes). O código herdado ainda não foi personalizado para a cliente.

Estrutura oficial é `app/`, `components/`, `lib/`, `public/`. **`src/` não será introduzido.** Categorias novas (`layouts/`, `patterns/`, `compositions/`) só quando houver necessidade real.

## Documentos importantes

- `PROJETO.md` — visão, escopo, critérios de aceite e pendências da cliente.
- `docs/ROADMAP-LANDING.md` — roadmap ativo deste projeto.
- `docs/ARQUITETURA.md` — arquitetura real (implementada × herdada × planejada).
- `docs/DESIGN-SYSTEM.md` — tokens existentes + identidade proposta (PROPOSTA, não aplicada).
- `docs/COMPONENT-CATALOG.md` — inventário de componentes.
- `docs/DEFINITION-OF-DONE.md` — critérios de evolução concluída.
- `memory-bank/` — estado, decisões, changelog.

## Regras operacionais

1. **Código atual é a fonte de verdade** (acima de documentação antiga).
2. **Não ampliar escopo.** Cumprir exatamente o pedido.
3. **Reutilizar antes de duplicar.** Antes de criar, consultar `docs/COMPONENT-CATALOG.md` e `/library`.
4. **Manter a estrutura atual.** Não reorganizar, não mover, não renomear arquivos.
5. **Seguir a Definition of Done** para qualquer evolução.
6. **Não instalar dependências sem necessidade.**
7. **Idioma:** português-BR para respostas e documentação.
8. **Não inventar dados da cliente.** Informação não confirmada usa a marcação `PENDENTE_CONFIRMACAO_CLIENTE`.

## Restrições de publicidade jurídica (OAB)

O projeto deve considerar o Estatuto da Advocacia, o Código de Ética e Disciplina da OAB e o Provimento 205/2021 (https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021) — verificar alterações normativas antes da publicação.

A comunicação deve ser: informativa, sóbria, discreta, profissional, objetiva e verdadeira.

Evitar: promessas de resultados; garantias de vitória; alegações de superioridade; comparações com outros profissionais; ofertas e descontos; publicidade mercantilista; divulgação indevida de clientes, processos ou resultados; estatísticas não verificadas; depoimentos ou casos reais publicados sem avaliação ética e autorização apropriada.

A versão destinada à produção deverá ser aprovada pela advogada, inclusive o conteúdo jurídico e publicitário.

## Convenção de componentes (documentada, não implementada)

- Dados da advogada ficam nas **páginas ou arquivos de configuração próprios do projeto**, nunca embutidos em componentes genéricos.
- Componentes verdadeiramente reutilizáveis criados futuramente poderão ser generalizados e promovidos ao UI Lab em **trabalho separado**.
- Classificações futuras: `PROJECT_ONLY` (deste projeto), `LAB_CANDIDATE` (potencialmente reutilizável), `LAB_PROMOTED` (incorporado ao UI Lab após validação e versionamento próprios).
- Não criar registry, monorepo ou pacote npm nesta fase.

## Fluxo de trabalho

Plan → implementação → testes → documentação → revisão de Git. Mudanças relevantes passam por aprovação quando houver risco.

## Uso das Skills

- `project-bootstrap` — discovery/plan e fundação.
- `quality-review` — inspeção de qualidade e geração de findings.
- `safe-implementation` — execução controlada de planos aprovados.
- `security-audit` — auditorias de segurança.

## Qualidade

Toda evolução deve satisfazer a `docs/DEFINITION-OF-DONE.md` (TypeScript, lint, build, responsividade, acessibilidade, teclado, reduced-motion, overflow, SEO, LGPD, documentação, catálogo, aprovação da profissional).

**Playwright disponível (`npm run test:e2e`) — deve permanecer verde quando a mudança afetar rotas/navegação.**

## Política de dependências

- Não atualizar/remover/adicinar dependências fora do escopo.
- Documentar qualquer dependência nova (finalidade + onde é usada).

## Política de alterações

- Mudanças relevantes primeiro: analisar → explicar → plano mínimo → implementar (se autorizado) → validar → revisar diff.
- Não refatorar amplamente para resolver um bug pequeno.

## Política de Git

- Preferir `git add` explícito por arquivo.
- NUNCA sem autorização explícita: `git reset --hard`, `git clean`, `git push --force`, remoção de branches, exclusão de histórico, `git add .`.
- Sem `commit`/`push` a menos que explicitamente pedido. Revisar `git status`, `git diff`, `git diff --cached` antes de qualquer commit.

## Regra de parada

Quando a missão terminar (ou quando houver dúvida/risco), **PARE** e apresente o estado + próximos passos para aprovação. Não executar `commit`/`push` por conta própria.

## Obrigação de atualizar documentação

Qualquer alteração que impacte arquitetura, design tokens, estrutura de componentes ou comportamento **deve** atualizar o(s) documento(s) correspondente(s) em `docs/` e `memory-bank/`.
