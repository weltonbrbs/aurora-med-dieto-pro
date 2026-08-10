import { CHECKOUT_URL } from "./brand";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-mint bg-white lg:hidden">
      <div className="px-4 py-3">
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full bg-gold px-5 py-3.5 text-center text-sm font-semibold text-forest-deep transition-colors hover:bg-gold/90"
        >
          Eu quero meu acesso agora!
        </a>
      </div>
    </div>
  );
}
