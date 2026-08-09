import { Eyebrow } from "./brand";

const movements = [
  {
    name: "Madeira",
    path: "M16 28V8m0 6c0-3.4 2.4-6 6.5-6.6C22 11.2 19.8 13.6 16 14Zm0 6c0-3-2.2-5.4-5.8-6 .4 3.4 2.4 5.6 5.8 6Z",
  },
  { name: "Fogo", path: "M16 5c5 5.5 7 8.4 7 12a7 7 0 1 1-14 0c0-2.4 1.2-4.6 3.5-7 .3 2 1.2 3.2 2.4 3.6C15.3 11 15.5 8 16 5Z" },
  { name: "Terra", path: "M5 22h22M8 22c1.6-5.6 4.4-8.4 8-8.4s6.4 2.8 8 8.4M16 8v3" },
  { name: "Metal", path: "M16 6a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 5.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" },
  { name: "Água", path: "M4 13c3-2.6 5-2.6 8 0s5 2.6 8 0 5-2.6 8 0M4 21c3-2.6 5-2.6 8 0s5 2.6 8 0 5-2.6 8 0" },
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
    <section className="bg-white">
      <div className="shell section-y">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>O que você vai aprender</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-forest sm:text-4xl lg:text-[2.75rem]">
            Os Cinco Movimentos aplicados à clínica diária
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {movements.map((m) => (
            <li
              key={m.name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-mint bg-cream/60 px-4 py-7 transition-transform duration-200 hover:-translate-y-[3px]"
            >
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-9 w-9 text-sage"
              >
                <path d={m.path} />
              </svg>
              <span className="font-serif text-xl text-forest">{m.name}</span>
            </li>
          ))}
        </ul>

        <ol className="mx-auto mt-14 max-w-4xl">
          {learnings.map((item, i) => (
            <li
              key={item}
              className="flex items-start gap-5 border-b border-mint py-5 last:border-b-0"
            >
              <span className="font-serif text-2xl leading-none text-gold tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="min-w-0 text-sm leading-relaxed text-ink sm:text-base">{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
