import { test, expect } from '@playwright/test';

test('home carrega com main, banner e um heading nivel 1', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('main')).toBeVisible();
  await expect(page.getByRole('banner')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
});

test('blog lista os posts existentes', async ({ page }) => {
  await page.goto('/blog');

  await expect(page.getByRole('heading', { level: 1, name: 'Blog' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Por que sua empresa precisa de um site hoje' }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Quando é hora de sair da planilha e ir para um sistema web' }),
  ).toBeVisible();
});

test('blog exibe post de slug valido', async ({ page }) => {
  await page.goto('/blog/por-que-sua-empresa-precisa-de-um-site-hoje');

  await expect(
    page.getByRole('heading', { level: 1, name: 'Por que sua empresa precisa de um site hoje' }),
  ).toBeVisible();
});

test('blog retorna 404 para slug inexistente', async ({ page }) => {
  const response = await page.goto('/blog/slug-inexistente');

  expect(response?.status()).toBe(404);
});

test('library redireciona para /library/headers', async ({ page }) => {
  await page.goto('/library');

  await expect(page).toHaveURL(/\/library\/headers$/);
});

test('library headers exibe a categoria com previews', async ({ page }) => {
  await page.goto('/library/headers');

  await expect(
    page.getByRole('heading', { level: 1, name: 'Headers / Cabeçalhos' }),
  ).toBeVisible();
  await expect(page.getByRole('heading', { level: 2 }).first()).toBeVisible();
});

test('library footers exibe a categoria com previews', async ({ page }) => {
  await page.goto('/library/footers');

  await expect(
    page.getByRole('heading', { level: 1, name: 'Footers / Rodapés' }),
  ).toBeVisible();
  await expect(page.getByRole('heading', { level: 2 }).first()).toBeVisible();
});

test('navegacao home -> areas de atuacao pelo header', async ({ page }, testInfo) => {
  await page.goto('/');

  const banner = page.getByRole('banner');
  if (testInfo.project.name === 'mobile') {
    await banner.getByRole('button', { name: 'Abrir menu' }).click();
  }

  await banner.getByRole('link', { name: 'Áreas de atuação', exact: true }).click();

  await expect(page).toHaveURL(/#areas-de-atuacao$/);

  // A URL sozinha nao prova acessibilidade — a secao-alvo precisa estar visivel.
  const areas = page.locator('#areas-de-atuacao');
  await expect(areas.getByRole('heading', { level: 2, name: 'Áreas de atuação' })).toBeVisible();
});

test('home exibe marca institucional, H1 da hero e apenas links com destino real', async ({ page }, testInfo) => {
  await page.goto('/');

  const banner = page.getByRole('banner');
  await expect(banner.getByRole('link', { name: /Maria Gabriella/ })).toBeVisible();
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Advocacia personalizada, com atenção a cada detalhe.',
    }),
  ).toBeVisible();

  if (testInfo.project.name === 'mobile') {
    await banner.getByRole('button', { name: 'Abrir menu' }).click();
  }

  await expect(banner.getByRole('link', { name: 'Início' })).toHaveAttribute('href', '/');
  await expect(banner.getByRole('link', { name: 'Áreas de atuação' })).toHaveAttribute('href', '/#areas-de-atuacao');
  await expect(banner.getByRole('link', { name: 'Sobre' })).toHaveAttribute('href', '/#sobre');

  // CTA de contato ainda sem destino oficial — nenhum botão de contato deve ser renderizado
  await expect(banner.getByRole('button', { name: 'Entrar em contato' })).toHaveCount(0);
});

test('menu mobile do header basico abre pelo teclado e fecha com Escape devolvendo o foco', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile', 'menu mobile existe apenas abaixo do breakpoint md');

  await page.goto('/library/headers');

  const button = page.locator('button[aria-expanded]').first();
  await expect(button).toBeVisible();
  await expect(button).toHaveAttribute('aria-expanded', 'false');
  await expect(button).toHaveAttribute('aria-label', 'Abrir menu');

  await button.focus();
  await page.keyboard.press('Enter');

  await expect(button).toHaveAttribute('aria-expanded', 'true');
  await expect(button).toHaveAttribute('aria-label', 'Fechar menu');

  const panelId = await button.getAttribute('aria-controls');
  expect(panelId).toBeTruthy();

  const panel = page.locator(`nav[id="${panelId}"]`);
  await expect(panel).toBeVisible();
  await expect(panel).toHaveAttribute('aria-label', 'Navegação principal');
  await expect(panel.getByRole('link', { name: 'Início' })).toBeVisible();
  await expect(panel.getByRole('link', { name: 'Contato' })).toBeVisible();

  await page.keyboard.press('Escape');

  await expect(button).toHaveAttribute('aria-expanded', 'false');
  await expect(button).toHaveAttribute('aria-label', 'Abrir menu');
  await expect(button).toBeFocused();
});

test('menu mobile do header com topbar abre pelo botao e fecha com clique fora', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile', 'menu mobile existe apenas abaixo do breakpoint md');

  await page.goto('/library/headers');

  const button = page.locator('button[aria-expanded]').nth(1);
  await button.click();

  await expect(button).toHaveAttribute('aria-expanded', 'true');

  const panelId = await button.getAttribute('aria-controls');
  expect(panelId).toBeTruthy();

  const panel = page.locator(`nav[id="${panelId}"]`);
  await expect(panel).toBeVisible();
  await expect(panel.getByRole('link', { name: 'Blog' })).toBeVisible();

  await page.mouse.click(20, 600);

  await expect(button).toHaveAttribute('aria-expanded', 'false');
});

test('review cards: rating exibe nome acessível com estrelas preenchidas', async ({ page }) => {
  await page.goto('/library/testimonials');

  const cardAna = page.locator('article').filter({ hasText: 'Ana Souza' });
  await expect(cardAna.getByLabel('5 de 5 estrelas')).toHaveCount(1);

  const cardRicardo = page.locator('article').filter({ hasText: 'Ricardo Almeida Albuquerque' });
  await expect(cardRicardo.getByLabel('4 de 5 estrelas')).toHaveCount(1);
});

test('review cards: avatar com src quebrado exibe o fallback', async ({ page }) => {
  await page.goto('/library/testimonials');

  const card = page.locator('article').filter({ hasText: 'Ricardo Almeida Albuquerque' });
  await expect(card.getByText('RA', { exact: true })).toBeVisible();
});

test('review cards: avatar com imagem válida carrega e fica visível', async ({ page }) => {
  await page.goto('/library/testimonials');

  const card = page.locator('article').filter({ hasText: 'Ana Souza' });
  const image = card.locator('[data-slot="avatar-image"]');
  await expect(image).toBeVisible();

  // alt="" torna a imagem decorativa; naturalWidth > 0 prova que ela carregou de fato.
  await expect
    .poll(async () =>
      image.evaluate((el) => (el as HTMLImageElement).naturalWidth),
    )
    .toBeGreaterThan(0);
});

test('hero centralizada data-driven renderiza heading e CTAs como links reais', async ({ page }) => {
  await page.goto('/library/hero');

  const hero = page
    .locator('section')
    .filter({ hasText: 'Apresentamos sua empresa de forma clara, profissional e confiável.' });

  await expect(
    hero.getByRole('heading', {
      level: 1,
      name: 'Apresentamos sua empresa de forma clara, profissional e confiável.',
    }),
  ).toBeVisible();

  await expect(hero.getByRole('link', { name: 'Falar com a equipe' })).toHaveAttribute(
    'href',
    'mailto:contato@suaempresa.com',
  );
  await expect(hero.getByRole('link', { name: 'Ver conteúdos' })).toHaveAttribute(
    'href',
    '/blog',
  );
});

test('home exibe as seis areas de atuacao com hierarquia de titulos', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);

  const areas = page.locator('#areas-de-atuacao');
  await expect(areas.getByRole('heading', { level: 2, name: 'Áreas de atuação' })).toBeVisible();
  await expect(areas.getByRole('heading', { level: 3 })).toHaveCount(6);
  await expect(areas.getByRole('heading', { level: 3, name: 'Inventário e partilha' })).toBeVisible();
  await expect(areas.getByRole('heading', { level: 3, name: 'Divórcio extrajudicial' })).toBeVisible();

  await expect(page.locator('#sobre').getByRole('heading', { level: 2, name: 'Sobre a advogada' })).toBeVisible();
});

test('secao sobre e textual sem placeholder de imagem', async ({ page }) => {
  await page.goto('/');

  const sobre = page.locator('#sobre');
  await expect(sobre.getByRole('heading', { level: 2, name: 'Sobre a advogada' })).toBeVisible();
  await expect(sobre.getByText('Atendimento próximo e individualizado')).toBeVisible();

  // Sem fotografia oficial ainda — nada de img, placeholder ou elemento falsamente interativo.
  await expect(sobre.locator('img')).toHaveCount(0);
  await expect(sobre.getByRole('link')).toHaveCount(0);
  await expect(sobre.getByRole('button')).toHaveCount(0);
});

test('contact details na library renderiza canais com e sem link sem formulario', async ({ page }) => {
  await page.goto('/library/contact');

  const section = page
    .locator('section')
    .filter({ has: page.getByRole('heading', { level: 2, name: 'Canais de contato' }) });

  await expect(section.getByRole('heading', { level: 2, name: 'Canais de contato' })).toBeVisible();

  // Canais com destino de demonstração válido.
  await expect(section.getByRole('link', { name: 'contato@suaempresa.com' })).toHaveAttribute(
    'href',
    'mailto:contato@suaempresa.com',
  );
  await expect(section.getByRole('link', { name: 'www.suaempresa.com' })).toHaveAttribute(
    'href',
    'https://www.suaempresa.com',
  );

  // Canal sem href e exibido como texto, nao como link.
  await expect(section.getByRole('link', { name: '(00) 00000-0000' })).toHaveCount(0);
  await expect(section.getByText('(00) 00000-0000')).toBeVisible();

  // Sem anchors vazios e sem semântica de formulário no componente migrado.
  await expect(section.locator('a[href=""]')).toHaveCount(0);
  await expect(section.locator('form')).toHaveCount(0);
});

test('home nao renderiza secao de contato e preserva navegacao real', async ({ page }, testInfo) => {
  await page.goto('/');

  // Contato institucional ainda sem dados oficiais — nada é publicado.
  await expect(page.locator('#contato')).toHaveCount(0);
  await expect(page.locator('main form')).toHaveCount(0);
  await expect(page.getByRole('button', { name: /contato/i })).toHaveCount(0);

  const banner = page.getByRole('banner');
  if (testInfo.project.name === 'mobile') {
    await banner.getByRole('button', { name: 'Abrir menu' }).click();
  }

  await expect(banner.getByRole('link', { name: 'Início' })).toHaveAttribute('href', '/');
  await expect(banner.getByRole('link', { name: 'Áreas de atuação' })).toHaveAttribute('href', '/#areas-de-atuacao');
  await expect(banner.getByRole('link', { name: 'Sobre' })).toHaveAttribute('href', '/#sobre');
});
