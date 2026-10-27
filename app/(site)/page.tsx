// app/(site)/page.tsx
import { HeroPrimary } from "@/components/sections/hero/hero-primary";
import { siteHero } from "@/lib/site-config";

// Composição mínima da entrega atual: apenas a Hero institucional com dados da
// configuração do projeto. As demais seções (áreas de atuação, sobre, atendimento,
// FAQ, contato) serão compostas nas próximas entregas — os componentes reutilizáveis
// do template permanecem no repositório, sem conteúdo fictício da cliente no ar.
export default function SiteHomePage() {
  return <HeroPrimary {...siteHero} />;
}
