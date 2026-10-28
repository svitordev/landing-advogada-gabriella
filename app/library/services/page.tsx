// app/sections/services/page.tsx
import {
  ServicesGridSimple,
  type ServicesGridSimpleProps,
} from "@/components/sections/services/services-grid-simple";
import { ServicesWithIcons } from "@/components/sections/services/services-with-icons";
import { ServicesSplitWithHighlight } from "@/components/sections/services/services-split-with-highlight";

// Demo genérica da variante data-driven — mesma copy do baseline visual.
const servicesGridSimpleDemo: ServicesGridSimpleProps = {
  title: "Como sua empresa ajuda os clientes",
  description:
    "Uma visão geral dos principais serviços, deixando claro o que o cliente pode esperar ao escolher o seu atendimento.",
  items: [
    {
      title: "Serviços principais",
      description:
        "Destaque os serviços que são o centro do seu trabalho, explicando de forma simples o que cada um resolve.",
    },
    {
      title: "Atendimento personalizado",
      description:
        "Mostre como o atendimento é adaptado à realidade de cada cliente, reforçando proximidade, confiança e clareza.",
    },
    {
      title: "Suporte e acompanhamento",
      description:
        "Explique como funciona o acompanhamento após a contratação: canais de contato, horários e tipo de suporte oferecido.",
    },
  ],
};

export default function ServicesSectionsPage() {
  return (
    <div className="space-y-10 pb-12">
      <section>
        <div className="mx-auto max-w-6xl px-4 pt-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Variação 01 · Grid simples
          </p>
          <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
            <ServicesGridSimple {...servicesGridSimpleDemo} />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Variação 02 · Cards com ícones
          </p>
          <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
            <ServicesWithIcons />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Variação 03 · Serviço principal + lista
          </p>
          <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
            <ServicesSplitWithHighlight />
          </div>
        </div>
      </section>
    </div>
  );
}
