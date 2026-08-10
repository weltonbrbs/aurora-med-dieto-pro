import bonusCards from "@/assets/bonus-cards.jpg";
import bonusRecipes from "@/assets/bonus-recipes.jpg";

import { Eyebrow } from "./brand";

const bonuses = [
  {
    badge: "Bônus 1",
    title: "Cards de Consulta Rápida: Síndromes e Alimentos",
    text: "Cards em formato A6 com as principais síndromes da MTC e seus alimentos indicados e contraindicados.",
    price: "Valor individual: R$ 67,00",
    img: bonusCards,
    alt: "Cards de consulta rápida",
  },
  {
    badge: "Bônus 2",
    title: "Guia de Receitas Terapêuticas da Medicina Chinesa",
    text: "Receitas práticas de sopas, caldos e chás para diferentes padrões energéticos.",
    price: "Valor individual: R$ 47,00",
    img: bonusRecipes,
    alt: "Guia de receitas terapêuticas",
  },
];

export function BonusSection() {
  return (
    <section id="bonus" className="bg-cream">
      <div className="mx-auto max-w-[1060px] px-5 py-16 md:px-6 md:py-20">
        <div className="text-center">
          <Eyebrow>Bônus exclusivos</Eyebrow>

          <h2 className="mt-3 text-3xl font-semibold leading-tight text-forest sm:text-[2.5rem]">
            Você ainda recebe estes presentes
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {bonuses.map((bonus) => (
            <article
              key={bonus.badge}
              className="overflow-hidden border border-sage/25 bg-white"
            >
              <img
                src={bonus.img}
                alt={bonus.alt}
                loading="lazy"
                className="h-[260px] w-full object-cover"
              />

              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                  {bonus.badge}
                </span>

                <h3 className="mt-3 text-xl font-semibold leading-snug text-forest">
                  {bonus.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {bonus.text}
                </p>

                <p className="mt-4 text-sm font-semibold text-terracotta">
                  {bonus.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
