const modules = [
  {
    title: "Fundamentos da Dietoterapia Chinesa",
    text: "Entenda os princípios que regem a ação terapêutica dos alimentos.",
  },
  {
    title: "Cinco Movimentos, Sabores e Natureza Térmica",
    text: "Aprenda a classificar e selecionar alimentos com lógica clínica.",
  },
  {
    title: "Diagnóstico Energético e Orientação Dietética",
    text: "Veja como transformar o diagnóstico em direcionamentos alimentares objetivos.",
  },
  {
    title: "Receitas Terapêuticas e Casos Clínicos",
    text: "Protocolos prontos para uso imediato na clínica.",
  },
  {
    title: "Planejamento e Orientações ao Paciente",
    text: "Modelos práticos para aumentar adesão e resultados.",
  },
];

export function ModulesSection() {
  return (
    <section className="bg-cream">
      <div className="shell section-y">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl leading-tight text-forest sm:text-4xl lg:text-[2.75rem]">
            Conteúdo por dentro do guia
          </h2>
          <p className="mt-4 text-base text-ink-soft">
            Cinco blocos construídos para levar você do fundamento à conduta aplicada no
            atendimento.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {modules.map((m, i) => (
            <article
              key={m.title}
              className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 rounded-2xl border border-mint bg-white p-6 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-soft sm:gap-7 sm:p-8"
            >
              <span className="font-serif text-4xl leading-none text-forest sm:text-5xl">
                {i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="font-serif text-xl text-forest sm:text-2xl">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">{m.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
