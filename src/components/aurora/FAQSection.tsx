import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center font-serif text-3xl text-forest-deep sm:text-4xl">
          Perguntas frequentes
        </h2>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-xl border border-mint bg-white">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="min-w-0 font-serif text-lg text-forest-deep">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gold transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  hidden={!isOpen}
                  className="px-6 pb-5"
                >
                  <p className="leading-relaxed text-ink-soft">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
