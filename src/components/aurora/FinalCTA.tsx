import { CtaButton } from "./brand";

export function FinalCTA() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 font-serif text-4xl text-forest-deep sm:text-5xl">
          Comece hoje a usar a Dietoterapia Chinesa na sua clínica
        </h2>
        <p className="mb-10 text-lg text-ink-soft">
          Acesso imediato. Garantia de 7 dias. Sem riscos.
        </p>
        <div className="flex justify-center">
          <CtaButton variant="gold">Eu quero meu acesso agora!</CtaButton>
        </div>
      </div>
    </section>
  );
}
