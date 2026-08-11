import { Eyebrow } from "./brand";

const testimonials = [
  {
    quote:
      "Um material extremamente didático e aplicável na prática clínica. Passei a orientar meus pacientes com muito mais segurança.",
    name: "Dra. Juliana Ferraz",
    role: "Acupunturista · MG",
  },
  {
    quote:
      "Com o que aprendi com este guia consegui me diferenciar MUITO da concorrência. Os outros nutricionistas da minha região nem imaginam como aprendi tudo o que aplico em minhas consultas.",
    name: "Beatriz Nogueira",
    role: "Nutricionista · SC",
  },
  {
    quote:
      "Conteúdo direto ao ponto e com alto valor clínico. Recomendo para todo profissional integrativo.",
    name: "Dr. Eduardo Salgado",
    role: "Fisioterapeuta · BA",
  },
];

export function ProfessionalTestimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1060px] px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Depoimentos reais</Eyebrow>

          <h2 className="mt-3 text-3xl font-semibold leading-tight text-forest sm:text-[2.5rem]">
            O que dizem os profissionais que já aplicam
          </h2>

          <p className="mt-3 text-base text-ink-soft">
            Centenas de profissionais da saúde já transformaram seus
            atendimentos com a Dietoterapia Chinesa.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="border border-sage/25 bg-cream p-6"
            >
              <span className="text-5xl leading-none text-sage">“</span>

              <blockquote className="mt-2 text-sm leading-[1.7] text-ink sm:text-base">
                {testimonial.quote}
              </blockquote>

              <figcaption className="mt-5 border-t border-sage/20 pt-4">
                <strong className="block text-base text-forest">
                  {testimonial.name}
                </strong>

                <span className="mt-1 block text-xs text-ink-soft">
                  {testimonial.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
