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

          <Eyebrow>
            Garantia incondicional
          </Eyebrow>


          <h2 className="mt-3 text-3xl font-semibold leading-tight text-forest sm:text-[2.4rem]">
            7 dias de garantia total
          </h2>


          <p className="mt-4 text-sm leading-[1.75] text-ink-soft sm:text-base">
            Você pode acessar todo o material, analisar o conteúdo e aplicar
            na sua prática. Caso perceba que a Dietoterapia Chinesa não é o
            que você esperava, basta solicitar o reembolso dentro do prazo de
            7 dias e devolveremos 100% do seu investimento.
          </p>

          <p className="mt-4 text-sm leading-[1.75] text-ink-soft sm:text-base">
            Você não assume nenhum risco. O objetivo é que você tenha
            segurança para conhecer o método e decidir se ele faz sentido para
            sua prática profissional.
          </p>

        </div>

      </div>
    </section>
  );
}
