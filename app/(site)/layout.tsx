// app/(site)/layout.tsx
import type { ReactNode } from "react";
import { HeaderBasic } from "@/components/site/headers/header-basic";
import { siteBrand, siteNavLinks } from "@/lib/site-config";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderBasic brand={siteBrand} links={siteNavLinks} />
      <main className="flex-1">{children}</main>
      {/* Rodapé mínimo e verdadeiro — sem contatos/OAB inventados.
          O footer definitivo será implementado em entrega futura. */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-sm text-foreground">
            {siteBrand.name}
            {siteBrand.subtitle ? ` — ${siteBrand.subtitle}` : ""}
          </p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
