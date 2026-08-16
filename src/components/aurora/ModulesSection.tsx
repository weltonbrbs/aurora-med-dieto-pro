const modules = [
  {
    title: "Japão e o fenômeno da longevidade",
    text: "Contextualização do país e dos fatores relacionados ao envelhecimento da população.",
  },
  {
    title: "O padrão alimentar japonês",
    text: "Estrutura das refeições, variedade, ingredientes e princípios alimentares.",
  },
  {
    title: "Alimentos que ajudam a compreender o modelo",
    text: "Peixes, algas, soja, fermentados, vegetais, chá e outros alimentos relevantes.",
  },
  {
    title: "Hara Hachi Bu",
    text: "Saciedade, pequenas porções e comportamento alimentar.",
  },
  {
    title: "Movimento incorporado à rotina",
    text: "Caminhada, deslocamentos, independência funcional e atividade cotidiana.",
  },
  {
    title: "Ikigai, propósito e envelhecimento",
    text: "A relação entre propósito, rotina e continuidade das atividades ao longo da vida.",
  },
  {
    title: "Comunidade e conexão social",
    text: "Convívio, suporte social, pertencimento e participação comunitária.",
  },
  {
    title: "Ambiente e estilo de vida",
    text: "Como diferentes comportamentos se combinam em um sistema mais amplo.",
  },
  {
    title: "Japão tradicional versus Japão moderno",
    text: "Transformações recentes e os limites de uma visão romantizada sobre longevidade japonesa.",
  },
  {
    title: "Aplicação ao repertório profissional",
    text: "Como organizar esses conhecimentos e utilizá-los como referências dentro da atuação profissional.",
  },
];

export function ModulesSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[920px] px-5 py-16 md:px-6 md:py-20">
        <h2 className="text-center text-3xl font-semibold leading-tight text-forest sm:text-[2.5rem]">
          Conteúdo por dentro do guia
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-ink-soft sm:text-base">
          Um caminho objetivo para compreender o modelo japonês sem transformar
          o material em uma enciclopédia.
        </p>

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

        <p className="mt-8 text-center text-sm text-ink-soft">
          Aproximadamente 60 páginas · conteúdo objetivo, com alta densidade de
          conhecimento útil.
        </p>
      </div>
    </section>
  );
}
