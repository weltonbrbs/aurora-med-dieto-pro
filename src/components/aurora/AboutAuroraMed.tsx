import { Logo } from "./brand";

export function AboutAuroraMed() {
  return (
    <section className="bg-mint">
      <div className="mx-auto max-w-[820px] px-5 py-16 text-center md:px-6 md:py-20">

        <Logo className="mb-7 justify-center" />


        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
          Conheça a aurora med
        </p>


        <h2 className="mt-4 text-3xl font-semibold leading-tight text-forest sm:text-[2.5rem]">
          Conhecimento em saúde transformado em materiais claros e aplicáveis
        </h2>


        <div className="mx-auto mt-6 max-w-[700px] space-y-4 text-sm leading-[1.75] text-ink-soft sm:text-base">

          <p>
            A aurora med nasceu para transformar temas relevantes da saúde em
            materiais claros, organizados e agradáveis de consultar.
          </p>


          <p>
            Criamos conteúdos para profissionais e estudantes que desejam
            ampliar seu repertório, conhecer novas perspectivas e continuar
            evoluindo em sua área.
          </p>


          <p>
            Nosso objetivo é unir conhecimento, didática e organização visual
            em materiais que realmente mereçam ocupar espaço na sua biblioteca
            digital.
          </p>

        </div>

      </div>
    </section>
  );
}
