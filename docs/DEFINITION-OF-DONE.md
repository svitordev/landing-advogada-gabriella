# DEFINITION-OF-DONE.md — Maria Gabriella

Critérios para uma evolução (componente, seção, layout, página, infraestrutura, documentação) ser considerada concluída. Gates técnicos preservados do UI Lab; critérios de landing adicionados conforme contexto.

## Crítico (obrigatório)

- [ ] **TypeScript** — sem erros de tipo; tipagem explícita onde faz sentido.
- [ ] **Lint** — `npm run lint` sem erros.
- [ ] **Build** — `npm run build` compila sem erros.
- [ ] **Responsividade** — funciona em mobile, tablet e desktop.
- [ ] **Acessibilidade** — HTML semântico, rótulos, navegação por teclado, ARIA onde necessário.
- [ ] **Keyboard** — interações acessíveis por teclado.
- [ ] **Reduced-motion** — respeita `prefers-reduced-motion` (quando há animação).
- [ ] **Overflow** — sem quebras de layout / scroll indesejado.
- [ ] **Documentação** — `docs/` e `memory-bank/` atualizados quando impactados.
- [ ] **Catálogo** — `docs/COMPONENT-CATALOG.md` atualizado (nome, path, status).
- [ ] **Library** — `/library` atualizado quando aplicável (preview da evolução).
- [ ] **Git diff** — revisado antes de commit.
- [ ] **Dependências** — nenhuma dependência nova sem justificativa e registro.

## Importante (quando aplicável)

- [ ] **Testes** — cobertura proporcional à mudança.
- [ ] **Performance** — sem regressão de bundle/rendimento.
- [ ] **Design tokens** — uso de cores/espaçamento temáticos, sem hardcoded.

## Critérios específicos da landing (proporcionais ao contexto)

- [ ] **Responsividade** — todas as seções da landing corretas em mobile, tablet e desktop.
- [ ] **Acessibilidade** — WCAG na prática: contraste, rótulos, teclado, ordem de leitura, `alt` real nas fotos.
- [ ] **Performance** — imagens otimizadas, sem regressão de bundle; fontes carregadas sem flash indevido.
- [ ] **SEO** — metadata por página (título, descrição, OG), dados estruturados quando aplicável (ver QLT-002).
- [ ] **Conteúdo profissional revisado** — todo texto jurídico/publicitário revisado e **aprovado pela advogada** antes da publicação.
- [ ] **Identidade visual** — paleta/tipografia aplicadas conforme aprovadas (ver proposta em `docs/DESIGN-SYSTEM.md`).
- [ ] **Dados de contato confirmados** — nada publicado com `PENDENTE_CONFIRMACAO_CLIENTE` pendente.
- [ ] **LGPD** — tratamento de dados de contato/ formulários com base legal e política adequada.
- [ ] **Ética OAB** — sem promessa de resultado, comparação, mercantilização ou caso publicado sem autorização (ver `AGENTS.md`).

## Registro de qualidade

- **Playwright** — infraestrutura mínima **disponível e verificada** (Chromium, desktop + mobile, smoke). Para mudanças que possam afetar rotas, navegação ou a estrutura coberta pelo smoke, `npm run test:e2e` deve permanecer verde. Alterações triviais sem impacto nessa cobertura não exigem testes e2e novos.
- **Visual regression** — avançado, posterior (ainda não é requisito).
