import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    q: "Para quem é este material?",
    a: "Para acupunturistas, nutricionistas, fisioterapeutas, terapeutas integrativos e estudantes que desejam aplicar a Dietoterapia Chinesa nos atendimentos com segurança clínica.",
  },
  {
    q: "Preciso já dominar Medicina Chinesa?",
    a: "Não. O conteúdo parte dos fundamentos e avança até as condutas aplicadas, com linguagem didática para quem está começando e profundidade para quem já atende.",
  },
  {
    q: "Como recebo o material?",
    a: "Logo após a confirmação do pagamento você recebe o acesso por e-mail e pode baixar todos os materiais imediatamente.",
  },
  {
    q: "O acesso expira?",
    a: "Não. O acesso é vitalício e inclui as atualizações futuras sem custo adicional.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim. Os materiais são em PDF e funcionam no celular, tablet e computador.",
  },
  {
    q: "Quais formas de pagamento?",
    a: "Cartão de crédito com parcelamento em até 12x, Pix e boleto.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Basta solicitar o reembolso e devolvemos 100% do valor investido.",
  },
  {
    q: "Existe suporte?",
    a: "Sim. A equipe da aurora med responde suas dúvidas sobre acesso e materiais por e-mail.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white">
      <div className="shell section-y">
        <h2 className="mx-auto max-w-2xl text-center font-serif text-3xl leading-tight text-forest sm:text-4xl lg:text-[2.75rem]">
          Perguntas frequentes
        </h2>

        <div className="mx-auto mt-12 max-w-3xl">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-sage/30">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="min-w-0 text-sm font-medium text-forest sm:text-base">
                      {f.q}
                    </span>
                    <span className="shrink-0 text-sage" aria-hidden="true">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  hidden={!isOpen}
                  className="grid overflow-hidden transition-all duration-200"
                >
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-ink-soft sm:text-base">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
