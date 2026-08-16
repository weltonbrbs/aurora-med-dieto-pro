import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Para quem é o Código Japonês da Longevidade?",
    a: "O material foi desenvolvido principalmente para profissionais e estudantes da área da saúde interessados em alimentação, hábitos, envelhecimento saudável e longevidade.",
  },
  {
    q: "Preciso ser nutricionista?",
    a: "Não. O conteúdo aborda diferentes dimensões do estilo de vida japonês, incluindo alimentação, movimento, rotina, propósito e conexão social. Cada profissional deverá utilizar esses conhecimentos respeitando as atribuições da própria profissão.",
  },
  {
    q: "É uma dieta japonesa?",
    a: "Não. O material não apresenta uma dieta fechada nem um protocolo alimentar. O objetivo é explicar princípios que ajudam a compreender o padrão alimentar e o estilo de vida japonês.",
  },
  {
    q: "O material serve apenas para profissionais?",
    a: "Não. Pessoas interessadas no assunto também podem estudar o material, mas sua construção e linguagem foram pensadas especialmente para profissionais e estudantes da saúde.",
  },
  {
    q: "Quantas páginas possui?",
    a: "O Código Japonês da Longevidade possui aproximadamente 60 páginas e foi desenvolvido para oferecer conteúdo relevante sem transformar a experiência em uma leitura excessivamente longa.",
  },
  {
    q: "Como recebo?",
    a: "O acesso é digital e disponibilizado após a confirmação do pagamento.",
  },
  {
    q: "O acesso expira?",
    a: "Não. O acesso ao material adquirido é vitalício, conforme as condições da oferta.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim. Os materiais digitais podem ser acessados em dispositivos compatíveis como celular, tablet e computador.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "As formas de pagamento disponíveis são exibidas na própria página de checkout no momento da compra.",
  },
  {
    q: "E se eu não gostar?",
    a: "Existe uma garantia de 7 dias conforme as condições apresentadas na oferta.",
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
