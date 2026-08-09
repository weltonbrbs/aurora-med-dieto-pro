import { Lock } from "lucide-react";
import { CtaButton, Eyebrow } from "./brand";

const lines = [
  { label: "E-book Dietoterapia Chinesa", value: "R$ 197,00" },
  { label: "Bônus 1 — Cards de Consulta Rápida", value: "R$ 67,00" },
  { label: "Bônus 2 — Guia de Receitas Terapêuticas", value: "R$ 47,00" },
];

export function PricingSection() {
  return (
    <section id="oferta" className="bg-forest-deep">
      <div className="shell section-y">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="gold">Últimas vagas com condição exclusiva</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
            Tudo isso por um único investimento
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-gold/30 bg-cream p-6 shadow-card sm:p-10">
          <ul>
            {lines.map((l) => (
              <li
                key={l.label}
                className="flex items-start justify-between gap-4 border-b border-sage/25 py-4 text-sm sm:text-base"
              >
                <span className="min-w-0 text-ink">{l.label}</span>
                <span className="shrink-0 text-ink-soft line-through decoration-gold/70">
                  {l.value}
                </span>
              </li>
            ))}
            <li className="flex items-center justify-between gap-4 py-4 text-sm font-semibold sm:text-base">
              <span className="text-forest">Valor total</span>
              <span className="text-ink-soft line-through decoration-gold/70">R$ 311,00</span>
            </li>
          </ul>

          <div className="mt-4 border-t border-sage/25 pt-8 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">Hoje por apenas</p>
            <p className="mt-2 font-serif text-5xl leading-none text-forest sm:text-6xl">
              R$ 47,90
            </p>
            <p className="mt-3 text-sm text-terracotta">à vista ou 12x de R$ 4,96</p>

            <div className="mt-8">
              <CtaButton full>Eu quero meu acesso agora!</CtaButton>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-ink-soft">
              <Lock className="h-3.5 w-3.5 shrink-0 text-sage" aria-hidden="true" />
              Compra 100% segura · Acesso imediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
