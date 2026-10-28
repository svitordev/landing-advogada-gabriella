// app/library/contact/page.tsx
import { ContactSimple } from "@/components/sections/contact/contact-simple";
import { ContactSplit } from "@/components/sections/contact/contact-split";
import { ContactDetails, type ContactDetailsProps } from "@/components/sections/contact/contact-details";

// Demo genérica da variante data-driven — dados fictícios, sem informações da cliente.
// Cobre os três casos do contrato: canal com href, canal sem href (texto) e hint opcional.
const contactDetailsDemo: ContactDetailsProps = {
  title: "Canais de contato",
  description: "Demonstração fictícia — os dados abaixo são exemplos genéricos.",
  channels: [
    {
      label: "E-mail",
      value: "contato@suaempresa.com",
      href: "mailto:contato@suaempresa.com",
      hint: "Canal com link mailto.",
    },
    {
      label: "Telefone",
      value: "(00) 00000-0000",
      hint: "Canal sem href — exibido como texto.",
    },
    {
      label: "Site",
      value: "www.suaempresa.com",
      href: "https://www.suaempresa.com",
      hint: "Canal com link HTTPS.",
    },
  ],
};

export default function ContactSectionsPage() {
  return (
    <div className="space-y-10 pb-12">
      <section>
        <div className="mx-auto max-w-6xl px-4 pt-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Variação 01 · Formulário centralizado
          </p>
          <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
            <ContactSimple />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Variação 02 · Texto + formulário em card
          </p>
          <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
            <ContactSplit />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Variação 03 · Contatos + formulário resumido
          </p>
          <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
            <ContactDetails {...contactDetailsDemo} />
          </div>
        </div>
      </section>
    </div>
  );
}
