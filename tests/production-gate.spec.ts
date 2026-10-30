import { test, expect } from '@playwright/test';

// F3-C — roda exclusivamente no projeto "production-gate" (next start na porta 3100,
// flag ausente => comportamento fail-closed). Os projetos desktop/mobile (dev server)
// ignoram este arquivo via testIgnore no playwright.config.ts.

const rotasBloqueadas = [
  '/library',
  '/library/headers',
  '/library/contact',
  '/blog',
  '/blog/por-que-sua-empresa-precisa-de-um-site-hoje',
];

test('rotas demonstrativas respondem 404 na producao sem a flag', async ({ request }) => {
  for (const route of rotasBloqueadas) {
    // maxRedirects 0 garante que o 404 vem da rota pedida, nao de um redirect.
    const response = await request.get(route, { maxRedirects: 0 });

    expect(response.status(), `status de ${route}`).toBe(404);
    expect(response.headers()['x-robots-tag'], `x-robots-tag de ${route}`).toBe('noindex, nofollow');

    const body = await response.text();
    // Sem conteudo demonstrativo na resposta bloqueada.
    expect(body, `conteudo demonstrativo em ${route}`).not.toMatch(/Headers \/ Cabeçalhos/i);
    expect(body, `conteudo demonstrativo em ${route}`).not.toMatch(/Canais de contato/i);
    expect(body, `formulario em ${route}`).not.toMatch(/<form/i);
  }
});

test('home permanece 200 com metadata noindex durante o bloqueio', async ({ request }) => {
  const response = await request.get('/', { maxRedirects: 0 });

  expect(response.status()).toBe(200);

  const body = await response.text();
  expect(body).toContain('Advocacia personalizada, com atenção a cada detalhe.');
  expect(body).toMatch(/<meta name="robots" content="noindex, nofollow"\/>/);
});
