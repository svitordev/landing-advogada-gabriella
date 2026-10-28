// app/(site)/page.tsx
import { HeroPrimary } from "@/components/sections/hero/hero-primary";
import { ServicesGridSimple } from "@/components/sections/services/services-grid-simple";
import { AboutSplit } from "@/components/sections/about/about-split";
import { siteAbout, siteHero, sitePracticeAreas } from "@/lib/site-config";

// Composição institucional (Entregas B e C): hero + áreas de atuação + sobre,
// todos alimentados pela configuração do projeto. Atendimento, FAQ e contato
// seguem para entregas futuras — sem conteúdo fictício da cliente no ar.
export default function SiteHomePage() {
  return (
    <>
      <HeroPrimary {...siteHero} />
      <ServicesGridSimple {...sitePracticeAreas} />
      <AboutSplit {...siteAbout} />
    </>
  );
}
