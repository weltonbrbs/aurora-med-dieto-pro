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
    alt: "Mockup dos cards impressos de consulta rápida da aurora med",
  },
  {
    badge: "Bônus 2",
    title: "Guia de Receitas Terapêuticas da Medicina Chinesa",
    text: "Receitas práticas de sopas, caldos e chás para diferentes padrões energéticos.",
    price: "Valor individual: R$ 47,00",
    img: bonusRecipes,
    alt: "Mockup do guia de receitas terapêuticas ao lado de um caldo e ervas frescas",
  },
];

export function BonusSection() {
  return (
    <section id="bonus" className="bg-cream">
      <div className="shell section-y">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Bônus exclusivos</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-forest sm:text-4xl lg:text-[2.75rem]">
            Você ainda recebe estes presentes
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {bonuses.map((b) => (
            <article
              key={b.badge}
              className="grid gap-6 rounded-3xl border border-sage/30 bg-white p-6 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-soft sm:grid-cols-[40%_minmax(0,1fr)] sm:items-center sm:p-8"
            >
              <img
                src={b.img}
                alt={b.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="w-full rounded-2xl object-cover"
              />
              <div className="min-w-0">
                <span className="inline-block rounded-full border border-gold/60 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  {b.badge}
                </span>
                <h3 className="mt-4 font-serif text-xl leading-snug text-forest sm:text-2xl">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">{b.text}</p>
                <p className="mt-4 text-sm font-semibold text-terracotta">{b.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
