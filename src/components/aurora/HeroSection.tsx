import {
  ShieldCheck,
  Infinity as InfinityIcon,
  MonitorSmartphone,
  Zap,
} from "lucide-react";

import heroMockup from "@/assets/japao-hero-mockup.jpg";
import { CtaButton, Eyebrow, Logo } from "./brand";

const micro = [
  { icon: ShieldCheck, label: "Garantia de 7 dias" },
  { icon: InfinityIcon, label: "Acesso vitalício" },
  { icon: Zap, label: "Acesso imediato" },
  { icon: MonitorSmartphone, label: "Em qualquer dispositivo" },
];

export function HeroSection() {
  return (
    <header className="bg-white">
      <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-5 pb-16 pt-10 md:px-6 md:pb-20 md:pt-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
        <div>
          <Logo className="mb-2" />

          <p className="mb-7 text-xs text-ink-soft">
            Conhecimento que amplia sua prática
          </p>

          <Eyebrow>Guia profissional · Saúde &amp; Longevidade</Eyebrow>

          <h1 className="mt-3 max-w-[590px] text-[2.45rem] font-semibold leading-[1.08] tracking-[-0.025em] text-forest sm:text-[3rem] lg:text-[3.35rem]">
            Código Japonês da Longevidade
          </h1>

          <p className="mt-5 max-w-[610px] text-base leading-[1.65] text-ink sm:text-[1.05rem]">
            O guia profissional de alimentação, hábitos e princípios de saúde
            do Japão para ampliar seu repertório e sua atuação.
          </p>

          <p className="mt-4 max-w-[610px] text-sm leading-[1.7] text-ink-soft sm:text-base">
            Descubra como alimentação, movimento, rotina, comportamento e
            conexão social se combinam no estilo de vida japonês — organizados
            em um material objetivo para profissionais que desejam ampliar sua
            visão sobre saúde e longevidade.
          </p>

          <div className="mt-7">
            <CtaButton variant="gold" className="w-full sm:w-auto">
              Quero conhecer o Código Japonês
            </CtaButton>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs text-ink-soft sm:text-sm">
            {micro.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-terracotta" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={heroMockup}
            alt="Guia Código Japonês da Longevidade — aurora med"
            width={1200}
            height={1200}
            className="w-full max-w-[500px] object-contain"
          />
        </div>
      </div>
    </header>
  );
}
