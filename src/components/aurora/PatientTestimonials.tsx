import dep1 from "@/assets/depoimento-1.jpg";
import dep2 from "@/assets/depoimento-2.jpg";
import dep3 from "@/assets/depoimento-3.jpg";

import { CtaButton } from "./brand";

const prints = [
  {
    src: dep1,
    alt: "Depoimento de paciente 1",
  },
  {
    src: dep2,
    alt: "Depoimento de paciente 2",
  },
  {
    src: dep3,
    alt: "Depoimento de paciente 3",
  },
];

export function PatientTestimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1040px] px-5 pb-16 pt-4 md:px-6 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold leading-tight text-forest sm:text-[2rem]">
            Veja só o que os pacientes tratados com a Dietoterapia Chinesa
            estão falando
          </h2>

          <p className="mt-3 text-base text-ink-soft">
            Mensagens reais de pacientes acompanhados na prática clínica.
          </p>
        </div>

        <ul className="mt-9 grid gap-5 md:grid-cols-3">
          {prints.map((print) => (
            <li key={print.alt}>
              <div className="overflow-hidden border border-mint bg-cream">
                <img
                  src={print.src}
                  alt={print.alt}
                  loading="lazy"
                  width={704}
                  height={1104}
                  className="h-full w-full object-cover"
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex justify-center">
          <CtaButton className="float-pulse">
            Quero tratar meus pacientes com a Dietoterapia Chinesa
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
