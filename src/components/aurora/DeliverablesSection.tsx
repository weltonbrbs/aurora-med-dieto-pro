import { Check } from "lucide-react";
import materials from "@/assets/materials.jpg";

const items = [
  "E-book completo com tudo que você precisa para saber tratar seus pacientes com dietoterapia chinesa",
  "Ferramentas incríveis para você baixar e usar nos seus atendimentos",
  "Cards de consulta rápida em PDF",
  "Guia de receitas terapêuticas",
  "Acesso vitalício",
  "Atualizações futuras sem custo adicional",
  "Acesso pelo celular, tablet ou computador",
];

export function DeliverablesSection() {
  return (
    <section className="bg-white">
      <div className="shell section-y">
        <h2 className="mx-auto max-w-2xl text-center font-serif text-3xl leading-tight text-forest sm:text-4xl lg:text-[2.75rem]">
          O que você recebe imediatamente
        </h2>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ul className="grid gap-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span
                  className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sage/20 text-forest"
                  aria-hidden="true"
                >
                  <Check className="h-4 w-4" />
                </span>
                <p className="min-w-0 text-sm leading-relaxed text-ink sm:text-base">{item}</p>
              </li>
            ))}
          </ul>

          <img
            src={materials}
            alt="Composição com os materiais da aurora med: e-book, cards e guia de receitas"
            loading="lazy"
            width={1200}
            height={912}
            className="w-full rounded-3xl border border-mint"
          />
        </div>
      </div>
    </section>
  );
}
