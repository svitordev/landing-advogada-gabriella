# Maria Gabriella — Advocacia Personalizada

Landing page institucional da advogada **Maria Gabriella**. Este repositório é um projeto **independente**, criado a partir do código do **Svitordev UI Lab** (origem histórica do template — ver `memory-bank/`).

## Estado atual

- **Fase:** bootstrap documental concluído — a landing **ainda não está implementada**.
- **Código:** herdado do template, ainda **não personalizado** para a cliente (rotas, `/library`, blog de demonstração, tokens e tema atuais são os do UI Lab).
- **Roadmap ativo deste projeto:** `docs/ROADMAP-LANDING.md`.
- `docs/ROADMAP-1000-EVOLUTIONS.md` é referência histórica do UI Lab, **não** é o roadmap deste projeto.

## Objetivo

Apresentação profissional sóbria e informativa: áreas de atuação, apresentação da advogada, forma de atendimento e canais de contato — em conformidade com o Estatuto da Advocacia, o Código de Ética e Disciplina da OAB e o Provimento 205/2021 (verificar vigência antes da publicação).

## Público e região (preliminar)

Advocacia personalizada, com atendimento indicado nas referências visuais para **Surubim — PE**, **Caruaru — PE** e região próxima (`PENDENTE_CONFIRMACAO_CLIENTE`).

## Stack real

- Next.js 16.0.3 (App Router)
- React 19.2.0 / React DOM 19.2.0
- TypeScript 5 (strict)
- Tailwind CSS 4 (configuração inline em `app/globals.css`)
- shadcn/ui (style new-york)
- `tw-animate-css`, lucide-react
- ESLint 9 (flat config)
- Playwright 1.64.1 (smoke e2e)

## Como executar

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

Outros comandos:

- `npm run build` — build de produção.
- `npm run start` — servir o build de produção.
- `npm run lint` — verificar qualidade com ESLint.
- `npm run test:e2e` — testes Playwright (smoke).

## Estrutura geral

```
app/              # Páginas + layouts (App Router) — conteúdo ainda é o do template
components/
  ui/             # Componentes base shadcn/ui
  site/           # Headers + footers
  sections/       # Seções reutilizáveis
lib/              # Utilitários
public/           # Assets (apenas SVGs padrão do template por enquanto)
docs/             # Documentação
memory-bank/      # Memória do projeto
tests/            # Smoke tests Playwright
```

Estrutura oficial: `app/`, `components/`, `lib/`, `public/`. `src/` **não** será introduzido.

## Identidade visual (PROPOSTA — ainda não aplicada)

Paleta estimada a partir das referências visuais da marca (valores aproximados, sujeitos a validação — o CSS atual ainda usa os tokens do template):

| Papel | Cor aproximada |
|---|---|
| Vinho principal | `#3D1717` |
| Marrom profundo | `#412726` |
| Bege | `#EEE5DB` |
| Off-white | `#FBF6F3` |
| Taupe | `#9E8277` |

Direção tipográfica preliminar: títulos em serifada elegante (ex.: Playfair Display ou Cormorant Garamond); corpo em sans-serif limpa (ex.: Inter). **Nenhuma fonte foi instalada ainda.** Detalhes em `docs/DESIGN-SYSTEM.md`.

**Assets:** o logotipo/monograma e a fotografia profissional da marca **ainda não estão no workspace** e precisarão ser disponibilizados (`PENDENTE_CONFIRMACAO_CLIENTE`).

## Áreas de atuação (preliminar — validar com a profissional)

1. Inventário e partilha;
2. Testamento e planejamento sucessório;
3. Usucapião extrajudicial e judicial;
4. Regularização de imóveis urbanos e rurais;
5. Elaboração e revisão de contratos;
6. Divórcio extrajudicial.

## O que falta para produção

- Validação dos dados da cliente (OAB, contatos, endereço, formação) — nada foi inventado; ver `PROJETO.md`.
- Assets oficiais (logotipo/monograma e fotografia).
- Aplicação da identidade visual (tokens + fontes) — hoje o site ainda usa a identidade do template.
- Composição da landing com os componentes existentes (`docs/ROADMAP-LANDING.md`).
- Conteúdo jurídico revisado e aprovado pela advogada (inclusive FAQ e conteúdos informativos).
- SEO, acessibilidade, responsividade, performance e LGPD conforme `docs/DEFINITION-OF-DONE.md`.

## Documentos importantes

- `AGENTS.md` — instruções para agentes (inclui publicidade jurídica).
- `PROJETO.md` — visão, escopo, critérios de aceite e pendências.
- `docs/ROADMAP-LANDING.md` — roadmap ativo deste projeto.
- `docs/ARQUITETURA.md`, `docs/DESIGN-SYSTEM.md`, `docs/COMPONENT-CATALOG.md`, `docs/DEFINITION-OF-DONE.md`.
- `memory-bank/` — estado, decisões e changelog.

> **Problema conhecido herdado:** `docs/QUALITY-REVIEW.md` registra findings abertos do template (ex.: QLT-013 — datas com timezone). Verificados contra o código atual.
