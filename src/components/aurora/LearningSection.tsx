import { Eyebrow } from "./brand";

const learnings = [
  "Por que o Japão se tornou uma das grandes referências mundiais quando o assunto é longevidade.",
  "Como a estrutura tradicional das refeições japonesas influencia variedade, quantidade e qualidade alimentar.",
  "O princípio do Hara Hachi Bu e sua relação com saciedade e comportamento alimentar.",
  "O papel dos alimentos fermentados dentro da cultura alimentar japonesa.",
  "Como peixes, algas, soja, vegetais, chá e outros alimentos aparecem no padrão alimentar tradicional.",
  "Por que o movimento cotidiano faz parte de um estilo de vida ativo.",
  "Como propósito, rotina e participação social aparecem no contexto do envelhecimento japonês.",
  "O papel das pequenas porções, variedade e apresentação das refeições.",
  "O que mudou no Japão moderno e por que nem tudo que vem do Japão deve ser automaticamente considerado saudável.",
  "Como organizar esses princípios em um repertório útil para sua atuação profissional.",
];

export function LearningSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1040px] px-5 py-16 md:px-6 md:py-20">
        <div className="text-center">
          <Eyebrow>O que você vai descobrir</Eyebrow>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold leading-tight text-forest sm:text-[2.5rem]">
            A lógica por trás do modelo japonês de longevidade
          </h2>
        </div>

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
