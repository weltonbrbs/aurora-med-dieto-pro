import materials from "@/assets/materials.jpg";
import { Eyebrow, Logo } from "./brand";

export function AboutAuroraMed() {
  return (
    <section className="bg-mint">
      <div className="shell section-y grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <Logo className="mb-7" />
          <Eyebrow>Somos a aurora med</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-forest sm:text-4xl">
            Conteúdo clínico transformado em ferramentas que você realmente consegue usar
          </h2>
          <div className="mt-6 grid gap-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            <p>
              A aurora med produz materiais de saúde integrativa para profissionais que querem
              aplicar o que estudam, com rigor e clareza.
            </p>
            <p>
              Nosso objetivo é transformar conhecimento complexo em materiais práticos, didáticos e
              aplicáveis à rotina clínica.
            </p>
            <p>
              Criamos recursos que ajudam profissionais da saúde a se sentirem mais seguros,
              confiantes e preparados para entregar atendimentos de alto nível.
            </p>
            <p>
              Se você deseja aprofundar seus conhecimentos e utilizar a Medicina Chinesa com mais
              estratégia e consistência, você está no lugar certo.
            </p>
          </div>
        </div>

        <img
          src={materials}
          alt="Materiais editoriais da aurora med organizados sobre fundo creme"
          loading="lazy"
          width={1200}
          height={912}
          className="w-full rounded-3xl border border-white/70 shadow-soft"
        />
      </div>
    </section>
  );
}
