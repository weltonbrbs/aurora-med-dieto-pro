import { Logo } from "./brand";

export function Footer() {
  return (
    <footer className="bg-forest-deep py-12">
      <div className="shell grid gap-6 text-center md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:text-left">
        <Logo tone="cream" className="justify-center md:justify-start" />
        <nav aria-label="Links legais" className="flex justify-center gap-6 text-xs text-cream/70">
          <a href="#" className="transition-colors hover:text-cream">
            Termos
          </a>
          <a href="#" className="transition-colors hover:text-cream">
            Privacidade
          </a>
        </nav>
      </div>
      <div className="shell mt-8 border-t border-cream/15 pt-6 text-center text-[0.72rem] leading-relaxed text-cream/60 md:text-left">
        <p>
          Este material é de caráter educativo e não substitui avaliação, diagnóstico ou tratamento
          individualizado por profissional habilitado.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} aurora med. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
