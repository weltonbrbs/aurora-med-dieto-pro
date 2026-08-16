import { Utensils, Footprints, Clock, Target, Users } from "lucide-react";
import { Eyebrow } from "./brand";

const pillars = [
  { icon: Utensils, label: "Alimentação" },
  { icon: Footprints, label: "Movimento" },
  { icon: Clock, label: "Rotina" },
  { icon: Target, label: "Propósito" },
  { icon: Users, label: "Conexão social" },
];

export function JapaneseModelSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1000px] px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Uma visão mais completa</Eyebrow>

          <h2 className="mt-3 text-3xl font-semibold leading-tight text-forest sm:text-[2.5rem]">
            Entenda o sistema, não apenas alimentos isolados.
          </h2>

          <p className="mt-5 text-sm leading-[1.7] text-ink-soft sm:text-base">
            Quando se fala em longevidade japonesa, é comum reduzir todo o
            assunto a peixe, chá-verde ou algum suposto “segredo” de Okinawa.
            O Código Japonês da Longevidade propõe uma visão mais completa.
          </p>
        </div>

        <ul className="mt-11 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {pillars.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center border border-mint bg-cream px-4 py-6 text-center"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-terracotta/10 text-terracotta">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>

              <span className="mt-3 text-sm font-medium text-forest sm:text-base">
                {label}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center">
          <span className="text-2xl text-terracotta">=</span>

          <p className="mt-2 text-xl font-semibold uppercase tracking-[0.14em] text-forest">
            Modelo japonês
          </p>

          <p className="mt-3 max-w-md text-center text-sm text-ink-soft">
            Diferentes elementos trabalhando em conjunto dentro de um estilo de
            vida.
          </p>
        </div>
      </div>
    </section>
  );
}
