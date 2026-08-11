import { Check } from "lucide-react";
import materials from "@/assets/materials-novo.png.asset.json";

const items = [
  "E-book completo com tudo que você precisa para saber tratar seus pacientes com Dietoterapia Chinesa",
  "Ferramentas práticas para utilizar nos seus atendimentos",
  "Cards de consulta rápida em PDF",
  "Guia de receitas terapêuticas da Medicina Chinesa",
  "Acesso vitalício ao material",
  "Atualizações futuras sem custo adicional",
  "Acesso pelo celular, tablet ou computador",
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
            Tudo organizado para você começar a aplicar na prática.
          </p>
        </div>


        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_.85fr] lg:gap-14">

          <ul className="space-y-5">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3"
              >
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
              src={materials.url}
              alt="Materiais aurora med"
              loading="lazy"
              width={900}
              height={900}
              className="w-full max-w-[430px] object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
