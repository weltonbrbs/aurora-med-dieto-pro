import { Eyebrow } from "./brand";

export function GuaranteeSection() {
  return (
    <section className="bg-cream">
      <div className="shell section-y grid items-center gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-14">
        <div className="mx-auto grid h-44 w-44 place-items-center rounded-full border-2 border-gold/60 bg-white text-center shadow-soft sm:h-52 sm:w-52">
          <div>
            <span className="block font-serif text-5xl leading-none text-forest sm:text-6xl">7</span>
            <span className="mt-1 block text-xs uppercase tracking-[0.24em] text-sage">dias</span>
          </div>
        </div>

        <div className="min-w-0 text-center md:text-left">
          <Eyebrow>Garantia incondicional</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-forest sm:text-4xl">
            7 dias de garantia total
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            Você pode adquirir o material, acessar todo o conteúdo e, se entender que ele não agrega
            valor à sua prática clínica, basta solicitar o reembolso em até 7 dias e devolvemos 100%
            do seu investimento. Sem riscos para você.
          </p>
        </div>
      </div>
    </section>
  );
}
