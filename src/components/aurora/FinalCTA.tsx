import { CtaButton } from "./brand";

export function FinalCTA() {
  return (
    <section className="bg-forest">
      <div className="shell section-y text-center">
        <h2 className="mx-auto max-w-3xl font-serif text-3xl leading-tight text-cream sm:text-4xl lg:text-[3rem]">
          Comece hoje a usar a Dietoterapia Chinesa na sua clínica
        </h2>
        <p className="mt-5 text-base text-cream/75">
          Acesso imediato. Garantia de 7 dias. Sem riscos.
        </p>
        <div className="mt-9 flex justify-center">
          <CtaButton className="border border-gold/40 bg-cream text-forest hover:bg-white">
            Eu quero meu acesso agora!
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
