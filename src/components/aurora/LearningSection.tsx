import { Eyebrow } from "./brand";

const movements = [
  {
    name: "Madeira",
    color: "text-element-wood",
    path: "M16 28V8m0 6c0-3.4 2.4-6 6.5-6.6C22 11.2 19.8 13.6 16 14Zm0 6c0-3-2.2-5.4-5.8-6 .4 3.4 2.4 5.6 5.8 6Z",
  },
  {
    name: "Fogo",
    color: "text-element-fire",
    path: "M16 5c5 5.5 7 8.4 7 12a7 7 0 1 1-14 0c0-2.4 1.2-4.6 3.5-7 .3 2 1.2 3.2 2.4 3.6C15.3 11 15.5 8 16 5Z",
  },
  {
    name: "Terra",
    color: "text-element-earth",
    path: "M5 22h22M8 22c1.6-5.6 4.4-8.4 8-8.4s6.4 2.8 8 8.4M16 8v3",
  },
  {
    name: "Metal",
    color: "text-element-metal",
    path: "M16 6a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 5.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z",
  },
  {
    name: "Água",
    color: "text-element-water",
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
    <section className="bg-white">
      <div className="mx-auto max-w-[1040px] px-5 py-16 md:px-6 md:py-20">
        <div className="text-center">
          <Eyebrow>O que você vai aprender</Eyebrow>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold leading-tight text-forest sm:text-[2.5rem]">
            Os Cinco Movimentos aplicados à clínica diária
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-5">
          {movements.map((movement) => (
            <li
              key={movement.name}
              className="flex flex-col items-center text-center"
            >
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-sage"
                aria-hidden="true"
              >
                <path d={movement.path} />
              </svg>

              <span className="mt-3 text-lg font-medium text-forest">
                {movement.name}
              </span>
            </li>
          ))}
        </ul>

        <ol className="mx-auto mt-11 max-w-[820px]">
          {learnings.map((item, index) => (
            <li
              key={item}
              className="grid grid-cols-[44px_1fr] gap-4 border-b border-mint py-4"
            >
              <span className="text-xl font-medium tabular-nums text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-sm leading-relaxed text-ink sm:text-base">
                {item}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
