// components/sections/services/services-grid-simple.tsx
export type ServiceItem = {
  title: string;
  description: string;
};

export type ServicesGridSimpleProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: ServiceItem[];
};

export function ServicesGridSimple({ id, eyebrow, title, description, items }: ServicesGridSimpleProps) {
  return (
    <section id={id} className="w-full bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8 space-y-2 text-center">
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {eyebrow}
            </p>
          )}
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>

        {items.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border bg-background p-4 text-left text-sm shadow-sm"
              >
                <h3 className="mb-2 text-base font-semibold">{service.title}</h3>
                <p className="text-xs text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
