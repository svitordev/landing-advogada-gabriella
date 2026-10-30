import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:3000',
  },
  projects: [
    {
      name: 'desktop',
      testIgnore: /production-gate/,
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'mobile',
      testIgnore: /production-gate/,
      use: {
        browserName: 'chromium',
        viewport: { width: 375, height: 667 },
      },
    },
    {
      // F3-C — projeto dedicado ao gate fail-closed: roda apenas o spec de produção
      // contra o build compilado (next start na porta 3100, flag ausente).
      name: 'production-gate',
      testMatch: /production-gate/,
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
        baseURL: 'http://localhost:3100',
      },
    },
  ],
  webServer: [
    {
      command: 'npm run dev',
      url: 'http://localhost:3000',
      reuseExistingServer: !process.env.CI,
      timeout: 120000,
    },
    {
      // Servidor de produção próprio — nunca reutilizado silenciosamente
      // (poderia estar servindo outra build ou outra configuração de ambiente).
      command: 'npm run build && npm run start -- -p 3100',
      url: 'http://localhost:3100',
      reuseExistingServer: false,
      timeout: 180000,
    },
  ],
});
