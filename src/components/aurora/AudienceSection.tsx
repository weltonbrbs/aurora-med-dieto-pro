import { Check } from "lucide-react";
import { CtaButton } from "./brand";

const items = [
  "Já estudou Medicina Chinesa, mas ainda sente insegurança para orientar pacientes na prática.",
  "Não sabe quais alimentos indicar para cada síndrome energética.",
  "Tem dificuldade para transformar teoria em direcionamentos clínicos objetivos.",
  "Deseja agregar mais valor aos seus atendimentos.",
  "Quer entregar condutas práticas e personalizadas aos pacientes.",
  "Busca se destacar como um profissional mais completo.",
  "Quer aumentar a adesão e os resultados dos seus tratamentos.",
  "Procura um material de consulta rápida para usar no dia a dia.",
];

export function AudienceSection() {
  return (
    <section className="bg-cream">
      <div className="shell section-y">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl leading-tight text-forest sm:text-4xl lg:text-[2.75rem]">
            Este material é para você que…
          </h2>
          <p className="mt-4 text-base text-ink-soft">
            Profissionais que buscam transformar teoria em prática clínica de verdade.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-4 rounded-2xl border border-mint bg-white p-5 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-soft sm:p-6"
            >
              <span
                className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-mint text-forest"
                aria-hidden="true"
              >
                <Check className="h-4 w-4" />
              </span>
              <p className="min-w-0 text-sm leading-relaxed text-ink sm:text-base">{item}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <CtaButton className="max-w-xl">
            Quero acessar agora e tratar meus pacientes com Dietoterapia Chinesa
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
