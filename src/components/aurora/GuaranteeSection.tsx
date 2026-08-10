import { ShieldCheck } from "lucide-react";
import { Eyebrow } from "./brand";

export function GuaranteeSection() {
  return (
    <section className="bg-mint px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gold">
          <ShieldCheck className="h-11 w-11 text-forest-deep" aria-hidden="true" />
        </div>
        <Eyebrow className="mb-3">Garantia incondicional</Eyebrow>
        <h2 className="mb-4 font-serif text-4xl text-forest-deep">7 dias de garantia total</h2>
        <p className="text-lg text-ink-soft">
          Você pode adquirir o material, acessar todo o conteúdo e, se entender que ele não agrega
          valor à sua prática clínica, basta solicitar o reembolso em até 7 dias e devolvemos 100% do
          seu investimento. Sem riscos para você.
        </p>
      </div>
    </section>
  );
}
