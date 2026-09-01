import { Lock } from "lucide-react";
import pacote from "@/assets/mockup-completo.png.asset.json";
import { CtaButton, Eyebrow } from "./brand";

const items = [
  {
    label: "Código Japonês da Longevidade",
    value: "R$ 97,00",
  },
  {
    label: "Mapa Visual do Modelo Japonês",
    value: "R$ 29,00",
  },
  {
    label: "Guia de 15 Alimentos Japoneses Essenciais",
    value: "R$ 47,00",
  },
];

export function PricingSection() {
  return (
    <section id="oferta" className="bg-forest-deep">
      <div className="mx-auto max-w-[820px] px-5 py-16 text-center md:px-6 md:py-20">
        <Eyebrow tone="gold">Condição especial por tempo limitado</Eyebrow>

        <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-[2.6rem]">
          Tudo isso por um único investimento
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          Tenha acesso ao Código Japonês da Longevidade e aos dois materiais
          complementares desenvolvidos para transformar conhecimento em
          repertório profissional organizado e fácil de consultar.
        </p>

        <img
          src={pacote.url}
          alt="Código Japonês da Longevidade, Mapa Visual e Guia de 15 Alimentos Japoneses"
          loading="lazy"
          width={1200}
          height={1008}
          className="mx-auto mt-9 w-full max-w-[620px] object-contain"
        />

        <div className="mt-10 bg-cream px-6 py-8 sm:px-10 sm:py-10">
          <div className="space-y-0">
            {items.map((item) => (
              <div
                key={item.label}
                className="flex items-start justify-between gap-5 border-b border-sage/25 py-4 text-left"
              >
                <span className="text-sm leading-relaxed text-ink sm:text-base">
                  {item.label}
                </span>

                <span className="shrink-0 text-sm text-ink-soft sm:text-base">
                  {item.value}
                </span>
              </div>
            ))}

            <div className="flex items-center justify-between pt-5 text-left">
              <span className="font-semibold text-forest">Valor total</span>

              <span className="text-lg font-semibold text-ink-soft line-through">
                R$ 173,00
              </span>
            </div>
          </div>

          <div className="mt-8 border-t border-sage/25 pt-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
              Hoje por apenas
            </p>

            <div className="mt-2 text-[4rem] font-bold leading-none tracking-[-0.05em] text-forest sm:text-[5rem]">
              R$ 47,90
            </div>

            <p className="mt-3 text-sm text-terracotta">ou 12x de R$ 4,96</p>

            <div className="mt-7">
              <CtaButton full variant="gold">
                Quero o Código Japonês da Longevidade
              </CtaButton>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-ink-soft">
              <Lock className="h-3.5 w-3.5 text-terracotta" />

              <span>Compra segura · Acesso imediato · Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
