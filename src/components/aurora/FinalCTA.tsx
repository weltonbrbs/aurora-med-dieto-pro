import { CtaButton } from "./brand";

export function FinalCTA() {
  return (
    <section className="bg-forest">
      <div className="mx-auto max-w-[820px] px-5 py-14 text-center md:px-6 md:py-16">

        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-[2.6rem]">
          Conheça uma nova perspectiva sobre saúde e longevidade
        </h2>


        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
          Explore princípios de alimentação, movimento, rotina e estilo de vida
          encontrados no contexto japonês — organizados em um material
          desenvolvido para ampliar seu repertório profissional.
        </p>


        <div className="mt-7 flex justify-center">
          <CtaButton variant="gold">
            Quero acessar o Código Japonês
          </CtaButton>
        </div>


        <p className="mt-5 text-xs text-white/60">
          Acesso imediato · Garantia de 7 dias · Compra segura
        </p>

      </div>
    </section>
  );
}
