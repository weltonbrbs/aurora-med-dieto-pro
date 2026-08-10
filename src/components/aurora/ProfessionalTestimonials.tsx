import { Star } from "lucide-react";
import { Eyebrow } from "./brand";

const testimonials = [
  {
    quote:
      "Um material extremamente didático e aplicável na prática clínica. Passei a orientar meus pacientes com muito mais segurança.",
    name: "Dra. Mariana Alves",
    role: "Acupunturista · SP",
  },
  {
    quote:
      "Finalmente consegui entender como indicar alimentos conforme as síndromes da Medicina Chinesa. Mudou minha prática.",
    name: "Carolina Mendes",
    role: "Nutricionista · RJ",
  },
  {
    quote:
      "Conteúdo direto ao ponto e com alto valor clínico. Recomendo para todo profissional integrativo.",
    name: "Dr. Rafael Tanaka",
    role: "Fisioterapeuta · PR",
  },
];

export function ProfessionalTestimonials() {
  return (
    <section className="bg-mint/40 px-6 pb-10 pt-20">
      <div className="mx-auto max-w-6xl">
        <Eyebrow className="mb-3 text-center">Depoimentos reais</Eyebrow>
        <h2 className="mb-4 text-center font-serif text-3xl text-forest-deep sm:text-5xl">
          O que dizem os profissionais que já aplicam
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-ink-soft">
          Centenas de profissionais da saúde já transformaram seus atendimentos com a Dietoterapia
          Chinesa.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col gap-4 rounded-2xl border border-mint bg-white p-7 shadow-sm"
            >
              <div
                className="absolute -top-3 left-6 font-serif text-5xl leading-none text-gold"
                aria-hidden="true"
              >
                “
              </div>
              <div className="mt-2 flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-lg italic leading-relaxed text-ink/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto border-t border-mint pt-4">
                <p className="font-semibold text-forest-deep">{t.name}</p>
                <p className="text-sm text-ink-soft">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
