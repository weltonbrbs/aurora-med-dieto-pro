import { ShieldCheck, Clock, Smartphone, Leaf } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import { CtaButton, Logo } from "./brand";

const micro = [
  { icon: ShieldCheck, label: "Garantia 7 dias" },
  { icon: Clock, label: "Acesso vitalício" },
  { icon: Smartphone, label: "Em qualquer dispositivo" },
];

export function HeroSection() {
  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-center px-6 pt-8">
        <Logo size="lg" />
      </header>

      <section className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-16 pt-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-mint bg-cream/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-ink-soft">
          <Leaf className="h-3.5 w-3.5 shrink-0 text-sage" aria-hidden="true" />
          Alimente o seu Qi · Transforme vidas
        </div>

        <h1 className="mt-8 font-serif text-4xl leading-[1.05] text-forest-deep sm:text-5xl lg:text-6xl">
          Aprenda a usar a <span className="text-gold">Dietoterapia Chinesa</span> para tratar seus
          pacientes
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-ink-soft">
          Tenha acesso a direcionamentos clínicos práticos para tratar e indicar alimentos de acordo
          com o diagnóstico energético e potencializar os resultados dos seus pacientes.
        </p>

        <div className="mt-8 w-full max-w-sm">
          <img
            src={heroMockup}
            alt="E-book Dietoterapia Chinesa"
            width={1200}
            height={1200}
            className="h-auto w-full"
          />
        </div>

        <div className="mt-8">
          <CtaButton>Quero ter acesso agora</CtaButton>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-soft">
          {micro.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-1.5">
              <Icon className="h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
