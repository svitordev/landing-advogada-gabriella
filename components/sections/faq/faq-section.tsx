// components/sections/faq/faq-section.tsx
import { ChevronDown } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: FaqItem[];
};

export function FaqSection({ id, eyebrow, title, description, items }: FaqSectionProps) {
  // Sem itens não há conteúdo útil — a seção não é renderizada.
  if (!items || items.length === 0) return null;

  return (
    <section id={id} className="w-full bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <div className="space-y-2">
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {eyebrow}
            </p>
          )}
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>

        {/* disclosures nativos — estado e operação pelo próprio HTML (sem JS) */}
        <div className="mt-8 divide-y border-y">
          {items.map((item) => (
            <details key={item.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
                {item.question}
                {/* rotacao sempre aplicada (estado visivel tambem sob reduced motion); transicao apenas quando ha movimento permitido */}
                <ChevronDown
                  aria-hidden="true"
                  className="size-4 shrink-0 text-muted-foreground group-open:rotate-180 motion-safe:transition-transform motion-safe:duration-150"
                />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
