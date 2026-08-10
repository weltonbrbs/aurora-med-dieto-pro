import { CtaButton } from "./brand";

export function FinalCTA() {
  return (
    <section className="bg-forest">
      <div className="mx-auto max-w-[820px] px-5 py-14 text-center md:px-6 md:py-16">

        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-[2.6rem]">
          Comece hoje a usar a Dietoterapia Chinesa na sua clínica
        </h2>


        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
          Tenha acesso imediato ao material completo, aos bônus exclusivos e
          transforme seu atendimento com mais segurança.
        </p>


        <div className="mt-7 flex justify-center">
          <CtaButton variant="gold">
            Eu quero meu acesso agora!
          </CtaButton>
        </div>


        <p className="mt-5 text-xs text-white/60">
          Acesso imediato · Garantia de 7 dias · Compra segura
        </p>

      </div>
    </section>
  );
}
