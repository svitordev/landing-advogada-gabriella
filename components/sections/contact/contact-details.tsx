// components/sections/contact/contact-details.tsx
export type ContactChannel = {
  label: string;
  value: string;
  href?: string;
  hint?: string;
};

export type ContactDetailsProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  channels?: ContactChannel[];
};

// Validação local simples de protocolo — sem abstração global.
function isLinkableHref(href?: string) {
  if (!href) return false;
  return /^(mailto:|tel:|https?:\/\/|\/)/.test(href);
}

export function ContactDetails({ id, eyebrow, title, description, channels }: ContactDetailsProps) {
  // Sem canais não há conteúdo útil — a seção não é renderizada.
  if (!channels || channels.length === 0) return null;

  return (
    <section id={id} className="w-full bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="max-w-3xl space-y-2">
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {eyebrow}
            </p>
          )}
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>

        <ul role="list" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel) => (
            <li key={channel.label} className="rounded-2xl border bg-muted/30 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                {channel.label}
              </p>
              {isLinkableHref(channel.href) ? (
                <a
                  href={channel.href}
                  className="mt-1 block break-words text-sm underline decoration-border underline-offset-4 hover:decoration-foreground"
                >
                  {channel.value}
                </a>
              ) : (
                <p className="mt-1 break-words text-sm">{channel.value}</p>
              )}
              {channel.hint && (
                <p className="mt-1 text-[11px] text-muted-foreground">{channel.hint}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
