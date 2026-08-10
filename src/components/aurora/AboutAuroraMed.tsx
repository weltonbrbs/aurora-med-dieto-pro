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
          Conteúdo clínico transformado em materiais práticos e aplicáveis
        </h2>


        <div className="mx-auto mt-6 max-w-[700px] space-y-4 text-sm leading-[1.75] text-ink-soft sm:text-base">

          <p>
            A aurora med nasceu com o propósito de transformar conhecimentos
            complexos da saúde integrativa em materiais claros, organizados e
            fáceis de aplicar.
          </p>


          <p>
            Criamos conteúdos pensados para profissionais que desejam
            aprofundar sua prática clínica e oferecer orientações mais
            completas aos seus pacientes.
          </p>


          <p>
            Nosso objetivo é unir conhecimento técnico, didática e aplicação
            prática para que você tenha mais segurança no atendimento.
          </p>


          <p>
            Mais do que informação, entregamos ferramentas para ajudar você a
            evoluir profissionalmente.
          </p>

        </div>

      </div>
    </section>
  );
}
