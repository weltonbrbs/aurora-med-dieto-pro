import { Check } from "lucide-react";
import { CtaButton } from "./brand";

const items = [
  "Trabalha com saúde e deseja ampliar seu repertório sobre alimentação, hábitos e longevidade.",
  
  "Quer compreender o que realmente existe por trás dos hábitos associados à longevidade no Japão.",
  "Busca referências que possam enriquecer sua atuação profissional, diferenciando-se da concorrência.",
  "Quer conhecer princípios da alimentação japonesa que vão muito além de sushi, peixe e chá-verde.",
  "Deseja compreender como alimentação, movimento, rotina e vida social se relacionam dentro do modelo japonês.",
  "Busca conteúdos objetivos, organizados e agradáveis de consultar.",
  "Quer oferecer uma visão mais ampla sobre hábitos e promoção da saúde dentro de sua atuação profissional.",
  "Procura se destacar através de conhecimento pouco explorado por outros profissionais da sua área.",
];

export function AudienceSection() {
  return (
    <section className="bg-forest">
      <div className="mx-auto max-w-[1060px] px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-[2.5rem]">
            Este material é para você que…
          </h2>

          <p className="mt-3 text-base text-white/80">
            Profissionais que não querem limitar seu repertório ao convencional
            e buscam novas referências sobre saúde e longevidade.
          </p>
        </div>

        <ul className="mt-10 grid gap-x-12 gap-y-6 md:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[2px] grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-forest">
                <Check className="h-3.5 w-3.5" />
              </span>

              <p className="text-sm leading-[1.65] text-white/90 sm:text-base">
                {item}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <CtaButton variant="gold" className="max-w-[650px] float-pulse">
            Quero ampliar meu repertório
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
