import { Check } from "lucide-react";
import pacote from "@/assets/mockup-completo.png.asset.json";

const items = [
  "Código Japonês da Longevidade — guia completo",
  "Alimentação tradicional japonesa",
  "Hábitos e estilo de vida",
  "Movimento e envelhecimento",
  "Propósito e rotina",
  "Conexão social",
  "Mapa Visual do Modelo Japonês",
  "Guia de 15 Alimentos Japoneses Essenciais",
  "Materiais digitais com acesso vitalício",
  "Acesso pelo celular, tablet e computador",
];

export function DeliverablesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1060px] px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-forest sm:text-[2.5rem]">
            O que você recebe imediatamente
          </h2>

          <p className="mt-3 text-base text-ink-soft">
            Um pacote objetivo de conhecimento profissional sobre o modelo
            japonês de saúde e longevidade.
          </p>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_.85fr] lg:gap-14">
          <ul className="space-y-5">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint text-forest">
                  <Check className="h-3.5 w-3.5" />
                </span>

                <p className="text-sm leading-relaxed text-ink sm:text-base">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex justify-center">
            <img
              src={pacote.url}
              alt="Materiais do Código Japonês da Longevidade — aurora med"
              loading="lazy"
              width={1200}
              height={1008}
              className="w-full max-w-[430px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
