// app/sections/about/page.tsx
import { AboutSimple } from "@/components/sections/about/about-simple";
import { AboutSplit, type AboutSplitProps } from "@/components/sections/about/about-split";
import { AboutTimeline } from "@/components/sections/about/about-timeline";

// Demo genérica da variante data-driven — mesma copy do baseline visual
// (o rótulo e a nota de rodapé do template saíram com a migração do hardcoded).
const aboutSplitDemo: AboutSplitProps = {
  title: "Uma equipe focada em resolver necessidades reais dos clientes",
  description:
    "Antes de falar em soluções, buscamos entender o que está dificultando o dia a dia: retrabalho, informações dispersas, falhas de comunicação ou processos manuais demais.",
  paragraphs: [
    "A partir desse diagnóstico, são definidos caminhos simples e sustentáveis, alinhados com a forma como o seu negócio funciona e com o resultado que você espera atingir.",
  ],
  points: [
    "Linguagem clara, sem termos técnicos desnecessários.",
    "Atendimento próximo, com foco em entender a realidade de cada cliente.",
    "Transparência em prazos, escopo e investimentos.",
  ],
};

export default function AboutSectionsPage() {
  return (
    <div className="space-y-10 pb-12">
      <section>
        <div className="mx-auto max-w-6xl px-4 pt-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Variação 01 · About simples
          </p>
          <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
            <AboutSimple />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Variação 02 · About em duas colunas
          </p>
          <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
            <AboutSplit {...aboutSplitDemo} />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Variação 03 · Timeline / trajetória
          </p>
          <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
            <AboutTimeline />
          </div>
        </div>
      </section>
    </div>
  );
}
