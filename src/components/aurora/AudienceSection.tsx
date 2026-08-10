import { Check } from "lucide-react";
import { CtaButton } from "./brand";

const items = [
  "Já estudou Medicina Chinesa, mas ainda sente insegurança para orientar pacientes na prática.",
  "Não sabe quais alimentos indicar para cada síndrome energética.",
  "Tem dificuldade para transformar teoria em direcionamentos clínicos objetivos.",
  "Deseja agregar mais valor aos seus atendimentos.",
  "Quer entregar condutas práticas e personalizadas aos pacientes.",
  "Busca se destacar como um profissional mais completo.",
  "Quer aumentar a adesão e os resultados dos seus tratamentos.",
  "Procura um material de consulta rápida para usar no dia a dia.",
];

export function AudienceSection() {
  return (
    <section className="bg-forest px-6 py-20">
      <div className="mx-auto max-w-5xl text-cream">
        <h2 className="mb-4 text-center font-serif text-3xl sm:text-4xl">
          Este material é para você que…
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-cream/70">
          Profissionais que buscam transformar teoria em prática clínica de verdade.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-xl border border-cream/10 bg-cream/5 p-4"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span className="min-w-0 text-cream/90">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton variant="gold">
            Quero acessar agora e tratar meus pacientes com Dietoterapia Chinesa
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
