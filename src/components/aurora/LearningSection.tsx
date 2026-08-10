import { Eyebrow } from "./brand";

const movements = [
  {
    name: "Madeira",
    color: "bg-sage",
    path: "M16 28V8m0 6c0-3.4 2.4-6 6.5-6.6C22 11.2 19.8 13.6 16 14Zm0 6c0-3-2.2-5.4-5.8-6 .4 3.4 2.4 5.6 5.8 6Z",
  },
  {
    name: "Fogo",
    color: "bg-terracotta",
    path: "M16 5c5 5.5 7 8.4 7 12a7 7 0 1 1-14 0c0-2.4 1.2-4.6 3.5-7 .3 2 1.2 3.2 2.4 3.6C15.3 11 15.5 8 16 5Z",
  },
  { name: "Terra", color: "bg-gold", path: "M5 22h22M8 22c1.6-5.6 4.4-8.4 8-8.4s6.4 2.8 8 8.4M16 8v3" },
  {
    name: "Metal",
    color: "bg-ink-soft",
    path: "M16 6a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 5.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z",
  },
  {
    name: "Água",
    color: "bg-forest",
    path: "M4 13c3-2.6 5-2.6 8 0s5 2.6 8 0 5-2.6 8 0M4 21c3-2.6 5-2.6 8 0s5 2.6 8 0 5-2.6 8 0",
  },
];

const learnings = [
  "Como classificar os alimentos segundo natureza térmica e sabor.",
  "Como relacionar alimentos aos Cinco Movimentos.",
  "Como identificar os melhores alimentos para cada síndrome.",
  "Como evitar alimentos que agravam o quadro energético.",
  "Como montar orientações dietéticas práticas.",
  "Como orientar o paciente com linguagem simples.",
  "Como usar a alimentação para potencializar a acupuntura.",
  "Como adaptar a dieta às estações do ano.",
  "Como utilizar receitas terapêuticas prontas.",
  "Como transformar a Dietoterapia em diferencial clínico.",
];

export function LearningSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Eyebrow className="mb-3 text-center">O que você vai aprender</Eyebrow>
        <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl text-forest-deep sm:text-5xl">
          Os Cinco Movimentos aplicados à clínica diária
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-5">
          {movements.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-mint bg-white p-6 text-center"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${m.color}`}
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-7 w-7 text-cream"
                >
                  <path d={m.path} />
                </svg>
              </div>
              <span className="font-serif text-xl text-forest-deep">{m.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {learnings.map((item, i) => (
            <div key={item} className="flex gap-4 rounded-xl border border-mint bg-white p-5">
              <span className="w-8 shrink-0 font-serif text-2xl text-gold tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 text-ink">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
