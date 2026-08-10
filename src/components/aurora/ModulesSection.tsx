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
    <section className="bg-mint px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-14 text-center font-serif text-3xl text-forest-deep sm:text-5xl">
          Conteúdo por dentro do guia
        </h2>

        <div className="space-y-4">
          {modules.map((m, i) => (
            <div
              key={m.title}
              className="flex gap-5 rounded-2xl border border-mint bg-white p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest font-serif text-xl text-cream">
                {i + 1}
              </div>
              <div className="min-w-0">
                <h3 className="mb-1 font-serif text-xl text-forest-deep">{m.title}</h3>
                <p className="text-ink-soft">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
