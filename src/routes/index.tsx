import { createFileRoute } from "@tanstack/react-router";
import { TopUrgencyBar } from "@/components/aurora/TopUrgencyBar";
import { HeroSection } from "@/components/aurora/HeroSection";
import { AudienceSection } from "@/components/aurora/AudienceSection";
import { LearningSection } from "@/components/aurora/LearningSection";
import { ModulesSection } from "@/components/aurora/ModulesSection";
import { JapaneseModelSection } from "@/components/aurora/JapaneseModelSection";
import { ProfessionalTestimonials } from "@/components/aurora/ProfessionalTestimonials";

import { BonusSection } from "@/components/aurora/BonusSection";
import { PricingSection } from "@/components/aurora/PricingSection";
import { DeliverablesSection } from "@/components/aurora/DeliverablesSection";
import { GuaranteeSection } from "@/components/aurora/GuaranteeSection";
import { FAQSection } from "@/components/aurora/FAQSection";
import { AboutAuroraMed } from "@/components/aurora/AboutAuroraMed";
import { FinalCTA } from "@/components/aurora/FinalCTA";
import { Footer } from "@/components/aurora/Footer";
import { MobileStickyCTA } from "@/components/aurora/MobileStickyCTA";

const title = "Código Japonês da Longevidade | Aurora Med";
const description =
  "Conheça princípios de alimentação, hábitos e saúde do Japão em um guia objetivo desenvolvido para ampliar o repertório de profissionais da saúde.";
const ogTitle = "Código Japonês da Longevidade";
const ogDescription =
  "Alimentação, hábitos e princípios de saúde do Japão organizados em um guia profissional, objetivo e visual.";
const url = "https://auroramed.aurorarecursosdigitais.com.br/";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: ogDescription },
      { property: "og:type", content: "product" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Código Japonês da Longevidade — aurora med",
          brand: { "@type": "Brand", name: "aurora med" },
          description: ogDescription,
          offers: {
            "@type": "Offer",
            price: "47.90",
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
            url: "https://pay.cakto.com.br/erv4w89_1033454",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="bg-white text-ink">
      <TopUrgencyBar />
      <main className="pb-24 lg:pb-0">
        <HeroSection />
        <AudienceSection />
        <LearningSection />
        <JapaneseModelSection />
        <ModulesSection />
        <ProfessionalTestimonials />
        <BonusSection />
        <PricingSection />
        <DeliverablesSection />
        <GuaranteeSection />
        <FAQSection />
        <AboutAuroraMed />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
