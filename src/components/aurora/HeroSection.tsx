import { ShieldCheck, Infinity as InfinityIcon, MonitorSmartphone } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import { CtaButton, Eyebrow, Logo } from "./brand";

const micro = [
  { icon: ShieldCheck, label: "Garantia 7 dias" },
  { icon: InfinityIcon, label: "Acesso vitalício" },
  { icon: MonitorSmartphone, label: "Em qualquer dispositivo" },
];

export function HeroSection() {
  return (
    <header className="bg-white">
      <div className="shell section-y grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <Logo className="mb-8" />
          <Eyebrow>Alimente o seu Qi · Transforme vidas</Eyebrow>
          <h1 className="mt-4 font-serif text-[2.25rem] leading-[1.08] tracking-tight text-forest sm:text-5xl lg:text-[3.9rem]">
            Aprenda a usar a{" "}
            <span className="italic text-sage">Dietoterapia Chinesa</span> para tratar seus
            pacientes
          </h1>
          <p className="mt-6 max-w-[650px] text-base leading-relaxed text-ink-soft sm:text-lg">
            Tenha acesso a direcionamentos clínicos práticos para tratar e indicar alimentos de
            acordo com o diagnóstico energético e potencializar os resultados dos seus pacientes.
          </p>
          <div className="mt-9">
            <CtaButton className="w-full sm:w-auto">Quero ter acesso agora</CtaButton>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-3 text-sm text-ink-soft sm:grid-cols-3">
            {micro.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                <span className="min-w-0">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-mint blur-2xl" aria-hidden="true" />
          <img
            src={heroMockup}
            alt="E-book Dietoterapia Chinesa da aurora med apresentado em capa impressa e tablet"
            width={1200}
            height={1200}
            className="mx-auto w-full max-w-[560px] rounded-3xl"
          />
        </div>
      </div>
    </header>
  );
}
