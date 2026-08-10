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
      <div className="mx-auto max-w-[920px] px-5 py-16 md:px-6 md:py-20">
        <h2 className="text-center text-3xl font-semibold leading-tight text-forest sm:text-[2.5rem]">
          Conteúdo por dentro do guia
        </h2>

        <div className="mt-10 border-t border-sage/30">
          {modules.map((module, index) => (
            <article
              key={module.title}
              className="grid grid-cols-[50px_1fr] gap-5 border-b border-sage/30 py-6 sm:grid-cols-[70px_1fr]"
            >
              <span className="text-4xl font-medium leading-none text-forest/80">
                {index + 1}
              </span>

              <div>
                <h3 className="text-xl font-semibold leading-snug text-forest sm:text-[1.4rem]">
                  {module.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {module.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
