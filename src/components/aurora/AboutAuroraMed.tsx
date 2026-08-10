import { Logo, Eyebrow } from "./brand";

const paragraphs = [
  "Um canal de conteúdos e uma comunidade de Medicina Chinesa que prima pela boa formação de profissionais.",
  "Nosso objetivo é transformar conhecimento complexo em materiais práticos, didáticos e aplicáveis à rotina clínica.",
  "Criamos recursos que ajudam profissionais da saúde a se sentirem mais seguros, confiantes e preparados para entregar atendimentos de alto nível.",
  "Se você deseja aprofundar seus conhecimentos e utilizar a Medicina Chinesa com mais estratégia e consistência, você está no lugar certo.",
];

export function AboutAuroraMed() {
  return (
    <section className="bg-forest px-6 py-20">
      <div className="mx-auto max-w-4xl text-center text-cream">
        <Logo tone="cream" size="lg" className="mb-6" />
        <Eyebrow tone="gold" className="mb-4">
          Somos a aurora med
        </Eyebrow>
        <h2 className="mb-6 font-serif text-3xl sm:text-4xl">
          Formação séria para profissionais da Medicina Chinesa
        </h2>
        <div className="space-y-4 text-lg leading-relaxed text-cream/85">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
