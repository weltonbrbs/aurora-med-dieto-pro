import {
  ShieldCheck,
  Infinity as InfinityIcon,
  MonitorSmartphone,
} from "lucide-react";

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
      <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-5 pb-16 pt-10 md:px-6 md:pb-20 md:pt-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
        <div>
          <Logo className="mb-7" />

          <Eyebrow>
            Alimente o seu Qi · Transforme vidas
          </Eyebrow>

          <h1 className="mt-3 max-w-[590px] text-[2.45rem] font-semibold leading-[1.08] tracking-[-0.025em] text-forest sm:text-[3rem] lg:text-[3.35rem]">
            Aprenda a usar a Dietoterapia Chinesa para tratar seus pacientes
          </h1>

          <p className="mt-5 max-w-[610px] text-base leading-[1.65] text-ink-soft sm:text-[1.05rem]">
            Tenha acesso a direcionamentos clínicos práticos para tratar e
            indicar alimentos de acordo com o diagnóstico energético e
            potencializar os resultados dos seus pacientes.
          </p>

          <div className="mt-7">
            <CtaButton className="w-full sm:w-auto">
              Quero ter acesso agora
            </CtaButton>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs text-ink-soft sm:text-sm">
            {micro.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon
                  className="h-4 w-4 text-sage"
                  aria-hidden="true"
                />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={heroMockup}
            alt="E-book Dietoterapia Chinesa"
            width={1200}
            height={1200}
            className="w-full max-w-[500px] object-contain"
          />
        </div>
      </div>
    </header>
  );
}
