// proxy.ts — F3-C: isolamento fail-closed das rotas demonstrativas (convenção Next 16).
// Regras (aprovadas no plano F3-C):
// - desenvolvimento: demonstrações sempre acessíveis (dev + testes);
// - produção sem ENABLE_DEMO_ROUTES: BLOQUEIO (a ausência da flag jamais libera);
// - produção com ENABLE_DEMO_ROUTES=true: liberação explícita (preview autorizado);
// - produção com qualquer outro valor: bloqueio.
// A leitura da flag acontece em runtime no servidor Node do proxy — validado contra
// `next start` real (sessão de execução 2026-10-30), não presumida.
// noindex ≠ controle de acesso: o objetivo é restringir a exposição das rotas
// demonstrativas na produção pública, não proteger dados confidenciais.
import { NextResponse } from "next/server";

function demosAllowed(): boolean {
  if (process.env.NODE_ENV === "development") return true;
  return process.env.ENABLE_DEMO_ROUTES === "true";
}

export default function proxy() {
  if (demosAllowed()) {
    return NextResponse.next();
  }

  // 404 direto — sem redirect, sem rewrite para _not-found e sem conteúdo
  // demonstrativo na resposta.
  return new Response(null, {
    status: 404,
    headers: {
      "X-Robots-Tag": "noindex, nofollow",
      // Resposta dependente do ambiente — nunca servir de cache compartilhado.
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  matcher: ["/library/:path*", "/blog/:path*"],
};
