import dep1 from "@/assets/depoimento-1.jpg";
import dep2 from "@/assets/depoimento-2.jpg";
import dep3 from "@/assets/depoimento-3.jpg";
import { CtaButton } from "./brand";

const prints = [
  { src: dep1, alt: "Mensagem de paciente relatando melhora da digestão e do sono" },
  { src: dep2, alt: "Mensagem de paciente relatando mais energia e menos retenção de líquido" },
  { src: dep3, alt: "Mensagem de paciente relatando redução da ansiedade com as receitas" },
];

export function PatientTestimonials() {
  return (
    <section className="bg-white">
      <div className="shell section-y">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl leading-tight text-forest sm:text-3xl lg:text-[2.4rem]">
            Veja só o que os pacientes tratados com a Dietoterapia Chinesa estão falando
          </h2>
          <p className="mt-4 text-base text-ink-soft">
            Mensagens reais de pacientes acompanhados na prática clínica.
          </p>
        </div>

        <ul className="mt-12 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {prints.map((p, i) => (
            <li
              key={p.alt}
              className="w-[78%] shrink-0 snap-center md:w-auto"
              style={{ rotate: `${i === 1 ? 0 : i === 0 ? -0.6 : 0.6}deg` }}
            >
              <div className="overflow-hidden rounded-2xl border border-mint bg-cream shadow-soft">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  width={704}
                  height={1104}
                  className="h-full w-full object-cover"
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <CtaButton>Quero tratar meus pacientes com a Dietoterapia Chinesa</CtaButton>
        </div>
      </div>
    </section>
  );
}
