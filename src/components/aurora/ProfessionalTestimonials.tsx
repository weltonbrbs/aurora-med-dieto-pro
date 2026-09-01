import { Eyebrow } from "./brand";

const testimonials = [
  {
    quote:
      "Pelo preço achei que seria básico, mas me surpreendi. O conteúdo é bem organizado e muito mais completo do que eu esperava. O guia de 15 Alimentos é o que mais uso!",
    name: "Dra. Juliana Ferraz",
    role: "Médica · MG",
  },
  {
    quote:
      "Com tudo que aprendi com o Código Japonês consegui me diferenciar MUITO da concorrência. Os outros nutricionistas da minha região nem imaginam como adquiri tudo o que aplico em minhas consultas.",
name: "Beatriz Nogueira",
    role: "Fisioterapeuta · SC",
  },
  {
    quote:
      "As orientações ficaram muito mais simples de explicar. As receitas ajudam bastante a tornar tudo mais prático para o paciente.",
name: "Eduardo Salgado",
    role: "Nutricionista · BA",
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
