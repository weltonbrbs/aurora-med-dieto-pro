import dep1 from "@/assets/depoimento-1.jpg";
import dep2 from "@/assets/depoimento-2.jpg";
import dep3 from "@/assets/depoimento-3.jpg";
import { CtaButton } from "./brand";

const prints = [
  { src: dep1, alt: "Depoimento de paciente 1" },
  { src: dep2, alt: "Depoimento de paciente 2" },
  { src: dep3, alt: "Depoimento de paciente 3" },
];

export function PatientTestimonials() {
  return (
    <section className="bg-mint/40 px-6 pb-20 pt-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-3 text-center font-serif text-2xl text-forest-deep sm:text-4xl">
          Veja só o que os pacientes tratados com a Dietoterapia Chinesa estão falando
        </h2>
        <p className="mb-10 text-center text-ink-soft">
          Mensagens reais de pacientes acompanhados na prática clínica.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prints.map((p) => (
            <div
              key={p.alt}
              className="overflow-hidden rounded-2xl border border-mint bg-white shadow-sm"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={704}
                height={1104}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <CtaButton>Quero tratar meus pacientes com a Dietoterapia Chinesa</CtaButton>
        </div>
      </div>
    </section>
  );
}
