// app/library/faq/page.tsx
import type { Metadata } from "next";
import { FaqSection, type FaqSectionProps } from "@/components/sections/faq/faq-section";

export const metadata: Metadata = {
  title: "Library · FAQ",
  description: "Perguntas frequentes em disclosures acessíveis para landings institucionais.",
};

type FaqVariant = {
  id: string;
  name: string;
  description: string;
  props: FaqSectionProps;
};

// Demo genérica de prestação de serviços fictícia — sem conteúdo da cliente,
// sem orientações jurídicas, sem prazos garantidos, valores ou promessas.
const faq: FaqVariant[] = [
  {
    id: "faq-section",
    name: "FAQ section",
    description:
      "Perguntas frequentes em disclosures nativos (details/summary). Uma coluna, mobile-first, operável por teclado.",
    props: {
      eyebrow: "Dúvidas",
      title: "Perguntas frequentes",
      description: "Exemplo genérico — as perguntas e respostas abaixo são fictícias.",
      items: [
        {
          question: "Como funciona o primeiro contato?",
          answer:
            "Você envia sua mensagem pelos canais de atendimento com uma breve descrição da sua necessidade. As informações são analisadas e um retorno é enviado com os próximos passos.",
        },
        {
          question: "Em quanto tempo recebo uma resposta?",
          answer:
            "O tempo de resposta varia conforme o volume de demandas recebidas. Cada contato é analisado individualmente antes do retorno.",
        },
        {
          question: "Posso pedir ajustes depois de iniciar?",
          answer:
            "Sim. Ajustes podem ser solicitados durante o andamento do trabalho e são reavaliados junto com as etapas seguintes.",
        },
      ],
    },
  },
];

export default function FaqLibraryPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-10">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">FAQ / Perguntas frequentes</h1>
          <p className="text-sm text-muted-foreground">
            Perguntas e respostas em disclosures acessíveis. Os textos abaixo são de exemplo —
            troque pelos dados do seu projeto.
          </p>
        </header>

        <section className="space-y-4">
          {faq.map(({ id, name, description, props }) => (
            <div
              key={id}
              className="space-y-3 rounded-2xl border bg-muted/20 p-4 text-sm shadow-sm"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-base font-semibold">{name}</h2>
                  <p className="text-xs text-muted-foreground">{description}</p>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  Componente: <code className="font-mono text-[10px]">{id}</code>
                </p>
              </div>

              {/* Preview */}
              <div className="overflow-hidden rounded-xl border bg-background">
                <FaqSection {...props} />
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
