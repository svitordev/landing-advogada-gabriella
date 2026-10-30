// app/(site)/blog/layout.tsx
// Segmento real do blog (route group (site)) — protege /blog e /blog/[slug]
// enquanto o conteúdo for demonstrativo. noindex é mitigação de indexação,
// não controle de acesso — as rotas continuam acessíveis por URL.
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
