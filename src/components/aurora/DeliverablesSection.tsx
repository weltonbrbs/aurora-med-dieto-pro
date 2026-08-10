import { BookOpen, Sparkles, Leaf, Clock, ShieldCheck, Smartphone } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    text: "E-book completo com tudo que você precisa para saber tratar seus pacientes com dietoterapia chinesa",
  },
  { icon: Sparkles, text: "Ferramentas incríveis para você baixar e usar nos seus atendimentos" },
  { icon: Sparkles, text: "Cards de consulta rápida em PDF" },
  { icon: Leaf, text: "Guia de receitas terapêuticas" },
  { icon: Clock, text: "Acesso vitalício" },
  { icon: ShieldCheck, text: "Atualizações futuras sem custo adicional" },
  { icon: Smartphone, text: "Acesso pelo celular, tablet ou computador" },
];

export function DeliverablesSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center font-serif text-3xl text-forest-deep sm:text-4xl">
          O que você recebe imediatamente
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-4 rounded-xl border border-mint bg-white p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold">
                <Icon className="h-5 w-5 text-forest-deep" aria-hidden="true" />
              </div>
              <span className="min-w-0 text-ink">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
