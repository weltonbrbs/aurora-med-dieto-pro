import { CHECKOUT_URL } from "./brand";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-mint bg-white lg:hidden">
      <div className="px-4 py-3">
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full bg-gold px-5 py-3.5 text-center text-sm font-semibold text-forest-deep transition-all duration-200 ease-out hover:bg-gold-deep hover:scale-[1.02] hover:shadow-[0_12px_28px_-12px_var(--gold-deep)]"
        >
          Eu quero meu acesso agora!
        </a>
      </div>
    </div>
  );
}
