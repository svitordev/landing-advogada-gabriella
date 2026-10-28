// components/sections/about/about-split.tsx
import Image from "next/image";

export type AboutSplitProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  paragraphs?: string[];
  points?: string[];
  image?: {
    src: string;
    alt: string;
  };
};

export function AboutSplit({ id, eyebrow, title, description, paragraphs, points, image }: AboutSplitProps) {
  // Coluna direita: imagem real > lista de pontos > nada (coluna textual única, sem placeholder).
  const hasSideColumn = Boolean(image || (points && points.length > 0));

  return (
    <section id={id} className="w-full bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className={hasSideColumn ? "grid gap-10 md:grid-cols-2 md:items-start" : "max-w-3xl space-y-4"}>
          {/* Coluna editorial */}
          <div className="space-y-4">
            {eyebrow && (
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {eyebrow}
              </p>
            )}
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
            {paragraphs?.map((paragraph) => (
              <p key={paragraph} className="text-sm text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Coluna direita — imagem real (next/image) > lista de pontos > nada */}
          {image && (
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border bg-muted">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
          {!image && points && points.length > 0 && (
            <div className="space-y-3 rounded-2xl border bg-background p-4 text-sm shadow-sm">
              <ul className="space-y-2 text-xs text-muted-foreground">
                {points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
