import { ShieldCheck, Sparkles } from "lucide-react";
import { CtaButton } from "./brand";

const lines = [
  { label: "E-book Dietoterapia Chinesa", value: "R$ 197,00" },
  { label: "Bônus 1 — Cards de Consulta Rápida", value: "R$ 67,00" },
  { label: "Bônus 2 — Guia de Receitas Terapêuticas", value: "R$ 47,00" },
];

export function PricingSection() {
  return (
    <section id="oferta" className="bg-forest px-6 py-20">
      <div className="mx-auto max-w-3xl text-center text-cream">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-gold">
          <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          Últimas vagas com condição exclusiva
        </p>
        <h2 className="mb-10 font-serif text-4xl sm:text-5xl">
          Tudo isso por um único investimento
        </h2>

        <div className="space-y-3 rounded-3xl border border-cream/10 bg-cream/5 p-8 text-left">
          {lines.map((l) => (
            <div
              key={l.label}
              className="flex items-center justify-between gap-4 border-b border-cream/10 py-3"
            >
              <span className="min-w-0 text-cream/85">{l.label}</span>
              <span className="shrink-0 font-medium text-gold">{l.value}</span>
            </div>
          ))}
          <div className="flex items-center justify-between gap-4 pt-4">
            <span className="font-semibold">Valor total</span>
            <span className="font-serif text-2xl line-through opacity-60">R$ 311,00</span>
          </div>
        </div>

        <div className="mt-10 space-y-2">
          <p className="text-cream/70">Hoje por apenas</p>
          <p className="font-serif text-6xl text-gold sm:text-7xl">R$ 47,90</p>
          <p className="text-cream/70">à vista ou 12x de R$ 4,96</p>
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton variant="gold">Eu quero meu acesso agora!</CtaButton>
        </div>

        <p className="mt-6 inline-flex items-center justify-center gap-2 text-sm opacity-70">
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          Compra 100% segura · Acesso imediato
        </p>
      </div>
    </section>
  );
}
