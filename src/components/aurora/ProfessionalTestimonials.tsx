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
    <section className="bg-forest">
      <div className="shell section-y">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="gold">Depoimentos reais</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
            O que dizem os profissionais que já aplicam
          </h2>
          <p className="mt-4 text-base text-cream/75">
            Centenas de profissionais da saúde já transformaram seus atendimentos com a
            Dietoterapia Chinesa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl bg-cream p-7 transition-transform duration-200 hover:-translate-y-[3px]"
            >
              <span className="font-serif text-5xl leading-none text-sage" aria-hidden="true">
                “
              </span>
              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-ink sm:text-base">
                {t.quote}
              </blockquote>
              <div className="mt-5 flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <figcaption className="mt-3">
                <span className="block font-serif text-lg text-forest">{t.name}</span>
                <span className="block text-xs uppercase tracking-[0.14em] text-ink-soft">
                  {t.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
