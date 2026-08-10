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
      <div className="mx-auto max-w-[1060px] px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-forest sm:text-[2.5rem]">
            Este material é para você que…
          </h2>

          <p className="mt-3 text-base text-ink-soft">
            Profissionais que buscam transformar teoria em prática clínica de
            verdade.
          </p>
        </div>

        <ul className="mt-10 grid gap-x-12 gap-y-6 md:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[2px] grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-forest">
                <Check className="h-3.5 w-3.5" />
              </span>

              <p className="text-sm leading-[1.65] text-ink sm:text-base">
                {item}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <CtaButton className="max-w-[650px] float-pulse">
            Quero acessar agora e tratar meus pacientes com Dietoterapia
            Chinesa
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
