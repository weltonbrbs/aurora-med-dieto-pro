import { Gift } from "lucide-react";
import { Eyebrow } from "./brand";

const bonuses = [
  {
    badge: "Bônus 1",
    title: "Cards de Consulta Rápida: Síndromes e Alimentos",
    text: "Cards em formato A6 com as principais síndromes da MTC e seus alimentos indicados e contraindicados.",
    price: "R$ 67,00",
  },
  {
    badge: "Bônus 2",
    title: "Guia de Receitas Terapêuticas da Medicina Chinesa",
    text: "Receitas práticas de sopas, caldos e chás para diferentes padrões energéticos.",
    price: "R$ 47,00",
  },
];

export function BonusSection() {
  return (
    <section id="bonus" className="scroll-mt-16 bg-mint px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Eyebrow className="mb-3 text-center">Bônus exclusivos</Eyebrow>
        <h2 className="mb-14 text-center font-serif text-3xl text-forest-deep sm:text-5xl">
          Você ainda recebe estes presentes
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {bonuses.map((b) => (
            <article
              key={b.badge}
              className="relative overflow-hidden rounded-2xl border-2 border-gold bg-white p-7"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/20"
                aria-hidden="true"
              />
              <div className="mb-4 flex items-center gap-2">
                <Gift className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {b.badge}
                </span>
              </div>
              <h3 className="mb-2 font-serif text-2xl text-forest-deep">{b.title}</h3>
              <p className="mb-4 text-ink-soft">{b.text}</p>
              <p className="text-sm">
                <span className="text-ink-soft">Valor individual: </span>
                <span className="text-gold line-through">{b.price}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
