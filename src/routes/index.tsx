import { createFileRoute } from "@tanstack/react-router";
import { TopUrgencyBar } from "@/components/aurora/TopUrgencyBar";
import { HeroSection } from "@/components/aurora/HeroSection";
import { AudienceSection } from "@/components/aurora/AudienceSection";
import { LearningSection } from "@/components/aurora/LearningSection";
import { ModulesSection } from "@/components/aurora/ModulesSection";
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

const title = "Dietoterapia Chinesa para Profissionais | aurora med";
const description =
  "Guia prático de Dietoterapia Chinesa: indique alimentos conforme o diagnóstico energético, aplique os Cinco Movimentos e potencialize os resultados dos seus pacientes.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Dietoterapia Chinesa — aurora med",
          brand: { "@type": "Brand", name: "aurora med" },
          description,
          offers: {
            "@type": "Offer",
            price: "47.90",
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
            url: "https://payt.site/mNCDOgJ",
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
