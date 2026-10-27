// components/sections/hero/hero-primary.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export type HeroPrimaryAction = {
  label: string;
  href: string;
  variant?: "default" | "outline";
};

export type HeroPrimaryProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: HeroPrimaryAction[];
  image?: {
    src: string;
    alt: string;
  };
};

function isInternalHref(href: string) {
  return href.startsWith("/");
}

export function HeroPrimary({ eyebrow, title, description, actions, image }: HeroPrimaryProps) {
  return (
    <section className="w-full border-b bg-linear-to-b from-background to-muted/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-24">
        {/* Coluna texto */}
        <div className="flex-1 space-y-6">
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {eyebrow}
            </span>
          )}

          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>

          {description && (
            <p className="max-w-xl text-balance text-sm text-muted-foreground sm:text-base">
              {description}
            </p>
          )}

          {actions && actions.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              {actions.map((action) => (
                <Button key={action.href + action.label} size="lg" variant={action.variant ?? "default"} asChild>
                  {isInternalHref(action.href) ? (
                    <Link href={action.href}>{action.label}</Link>
                  ) : (
                    <a href={action.href}>{action.label}</a>
                  )}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Coluna visual — fotografia via next/image ou área neutra de espera */}
        <div className="w-full flex-1">
          {image ? (
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border bg-muted">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div
              aria-hidden="true"
              className="mx-auto aspect-[4/5] w-full max-w-md rounded-2xl border bg-muted"
            />
          )}
        </div>
      </div>
    </section>
  );
}
