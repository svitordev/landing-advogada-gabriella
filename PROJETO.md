# PROJETO.md — Maria Gabriella — Advocacia Personalizada

Visão, escopo e filosofia deste projeto. Este repositório foi criado a partir do **Svitordev UI Lab** e agora é um projeto independente.

## O que é

Landing page institucional da advogada **Maria Gabriella** — apresentação profissional, áreas de atuação, forma de atendimento e canais de contato.

## Objetivo

Comunicação **informativa, sóbria, discreta, profissional, objetiva e verdadeira**, em conformidade com o Estatuto da Advocacia, o Código de Ética e Disciplina da OAB e o Provimento 205/2021 (vigência a verificar antes da publicação).

## Público

Pessoas e empresas atendidas pela profissional. Região indicada nas referências visuais: **Surubim — PE**, **Caruaru — PE** e região próxima (`PENDENTE_CONFIRMACAO_CLIENTE`).
## Escopo

**Inclui (planejamento — ainda não implementado):**

- Landing page pública de uma página (seções abaixo);
- Reaproveitamento dos componentes herdados do template;
- Identidade visual própria (proposta em `docs/DESIGN-SYSTEM.md`, ainda não aplicada);
- Conteúdo informativo/educativo e FAQ, sujeitos à aprovação da profissional.

**Não inclui (por ora):** blog ativo com conteúdo da cliente (existe no código como herança do template, com conteúdo de demonstração), área logada, formulário com backend, multilíngue.

## Seções propostas (estrutura preliminar)

1. **Header** — identidade da marca, navegação e contato.
2. **Hero institucional** — foto profissional, apresentação objetiva, título e ações de navegação/contato.
3. **Áreas de atuação** — atividades profissionais confirmadas (lista preliminar no README; validar com a profissional).
4. **Sobre a advogada** — apresentação profissional, formação e OAB após confirmação.
5. **Atendimento** — informações sobre o atendimento e a região atendida.
6. **Conteúdo informativo** — artigos/conteúdos jurídicos educativos, quando disponibilizados e aprovados.
7. **FAQ** — perguntas frequentes com respostas informativas, sujeitas à revisão da profissional.
8. **Contato** — canais oficiais confirmados e informações de atendimento.
9. **Footer** — identificação profissional, inscrição na OAB, contatos e links necessários.

## Requisitos

- Ética OAB: sem promessa de resultado, sem garantia de vitória, sem alegação de superioridade, sem comparação com outros profissionais, sem ofertas/descontos, sem mercantilização, sem divulgação indevida de clientes/processos/resultados, sem estatísticas não verificadas, sem depoimentos sem avaliação ética e autorização.
- A peça visual que compara uma área imobiliária com o Vaticano é **referência de design**, não case público: uso de caso concreto exige avaliação de sigilo, autorização e adequação normativa.
- Responsividade, acessibilidade e performance conforme `docs/DEFINITION-OF-DONE.md`.
- SEO básico por página (ver finding QLT-002).
- LGPD no tratamento de dados de contato.

## Critérios de aceite

- Nenhum dado profissional inventado: informação não confirmada permanece marcada como `PENDENTE_CONFIRMACAO_CLIENTE`.
- Conteúdo jurídico e publicitário revisado e **aprovado pela advogada** antes da publicação.
- Gates técnicos da `docs/DEFINITION-OF-DONE.md` verdes (lint, build, testes, responsividade, acessibilidade).
- Identidade visual aplicada conforme aprovada (tokens/fontes), sem alterar componentes genéricos com dados da cliente.

## Limitações

- Paleta e tipografia atuais são **estimativas visuais** das referências enviadas, não valores oficiais da marca.
- Logotipo/monograma e fotografia profissional ainda não estão no workspace.
- A landing está em fase de planejamento; nada foi implementado nesta etapa.

## Pendências da cliente (`PENDENTE_CONFIRMACAO_CLIENTE`)

- Inscrição na OAB (número/seccional);
- Endereço profissional;
- E-mail profissional;
- Telefone oficial;
- Anos de experiência;
- Formação acadêmica e títulos;
- Certificações/qualificações;
- Lista definitiva de áreas de atuação;
- Região atendida;
- Depoimentos/estatísticas (somente com autorização e avaliação ética);
- Assets oficiais: logotipo/monograma e fotografia profissional.

## Roadmap inicial

Roadmap ativo: `docs/ROADMAP-LANDING.md` (sem estimativas de prazo). O `docs/ROADMAP-1000-EVOLUTIONS.md` é do UI Lab — preservado como referência histórica, com arquivamento a propor futuramente.

## Relação com o Svitordev UI Lab

O UI Lab foi a **fonte inicial** de componentes e arquitetura. Este repositório é independente: não há sincronização automática. Convenção de classificação (documentada, não implementada): `PROJECT_ONLY` (deste projeto), `LAB_CANDIDATE` (potencialmente reutilizável), `LAB_PROMOTED` (incorporado ao UI Lab em trabalho separado). Ver `memory-bank/DECISIONS.md` (DEC-011).
