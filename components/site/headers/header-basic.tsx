// components/site/headers/header-basic.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/site/headers/mobile-nav";
import { cn } from "@/lib/utils";

export type HeaderNavItem = {
  label: string;
  href: string;
};

export type HeaderBasicProps = {
  brand: {
    name: string;
    subtitle?: string;
    href?: string;
  };
  links: HeaderNavItem[];
  action?: {
    label: string;
    href: string;
  };
};

function isInternalHref(href: string) {
  return href.startsWith("/");
}

export function HeaderBasic({ brand, links, action }: HeaderBasicProps) {
  const pathname = usePathname();
  const brandHref = brand.href ?? "/";

  return (
    <header className="border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / Marca — representação tipográfica (logotipo oficial pendente) */}
        <Link href={brandHref} className="text-sm font-semibold tracking-tight">
          <span className="font-bold">{brand.name}</span>
          {brand.subtitle && <span className="text-muted-foreground"> {brand.subtitle}</span>}
        </Link>

        {/* Navegação */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-4 text-xs font-medium text-muted-foreground md:flex"
        >
          {links.map((item) => {
            const baseHref = item.href.split("#")[0] || "/";
            // Links com âncora não recebem destaque: usePathname() não considera o
            // fragmento e todos os anchors da home compartilhariam o pathname "/".
            const isActive =
              !item.href.includes("#") && (baseHref === "/" ? pathname === "/" : pathname === baseHref);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-1 hover:bg-muted hover:text-foreground",
                  isActive && "bg-muted text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + Menu mobile */}
        <div className="flex items-center gap-2">
          {action && (
            <Button size="sm" asChild>
              {isInternalHref(action.href) ? (
                <Link href={action.href}>{action.label}</Link>
              ) : (
                <a href={action.href}>{action.label}</a>
              )}
            </Button>
          )}
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
}
