import bonusMapa from "@/assets/japao-bonus-mapa.jpg";
import bonusAlimentos from "@/assets/japao-bonus-alimentos.jpg";

import { Eyebrow } from "./brand";

const bonuses = [
  {
    badge: "Bônus 1",
    tag: null as string | null,
    title: "Mapa Visual do Modelo Japonês",
    text: "Uma visão panorâmica dos principais pilares apresentados no Código Japonês da Longevidade, organizada visualmente para facilitar compreensão, revisão e consulta rápida.",
    highlight: "Veja o modelo completo em uma única visão.",
    price: "Valor individual: R$ 37,00",
    img: bonusMapa,
    alt: "Mapa visual do modelo japonês de longevidade",
  },
  {
    badge: "Bônus 2",
    tag: "Além do convencional",
    title: "Guia de 15 Alimentos Japoneses Essenciais",
    text: "Conheça 15 alimentos presentes na cultura alimentar japonesa que vão além dos ingredientes mais conhecidos no Ocidente, entendendo seu contexto, características e formas tradicionais de consumo.",
    highlight: "Amplie seu repertório além do sushi, salmão e chá-verde.",
    price: "Valor individual: R$ 47,00",
    img: bonusAlimentos,
    alt: "Guia de 15 alimentos japoneses essenciais",
  },
];

export function BonusSection() {
  return (
    <section id="bonus" className="bg-cream">
      <div className="mx-auto max-w-[1060px] px-5 py-16 md:px-6 md:py-20">
        <div className="text-center">
          <Eyebrow>Bônus exclusivos</Eyebrow>

          <h2 className="mt-3 text-3xl font-semibold leading-tight text-forest sm:text-[2.5rem]">
            Você ainda recebe estes materiais complementares
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
                width={1200}
                height={912}
                className="h-[260px] w-full object-cover"
              />

              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                  {bonus.badge}
                </span>

                {bonus.tag ? (
                  <span className="ml-3 inline-block bg-terracotta/10 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-terracotta">
                    {bonus.tag}
                  </span>
                ) : null}

                <h3 className="mt-3 text-xl font-semibold leading-snug text-forest">
                  {bonus.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {bonus.text}
                </p>

                <p className="mt-4 text-sm font-medium text-forest">
                  {bonus.highlight}
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
