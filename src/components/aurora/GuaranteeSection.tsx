import { Eyebrow } from "./brand";

export function GuaranteeSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-[920px] items-center gap-8 px-5 py-14 md:grid-cols-[190px_1fr] md:px-6 md:py-20">

        <div className="mx-auto flex h-[170px] w-[170px] flex-col items-center justify-center rounded-full border-2 border-gold bg-white text-center">
          <strong className="text-5xl font-bold leading-none text-forest">
            7
          </strong>

          <span className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            dias
          </span>

          <span className="mt-2 text-[0.65rem] uppercase tracking-[0.12em] text-ink-soft">
            garantia
          </span>
        </div>


        <div className="text-center md:text-left">

          <Eyebrow>Garantia incondicional</Eyebrow>


          <h2 className="mt-3 text-3xl font-semibold leading-tight text-forest sm:text-[2.4rem]">
            7 dias de garantia total
          </h2>


          <p className="mt-4 text-sm leading-[1.75] text-ink-soft sm:text-base">
            Você poderá acessar o Código Japonês da Longevidade e seus
            materiais complementares com tranquilidade. Caso perceba que o
            conteúdo não corresponde ao que esperava, poderá solicitar o
            reembolso dentro do prazo de 7 dias.
          </p>

          <p className="mt-4 text-sm leading-[1.75] text-ink-soft sm:text-base">
            Você conhece o material primeiro e decide depois se ele merece
            permanecer na sua biblioteca profissional.
          </p>

        </div>

      </div>
    </section>
  );
}
