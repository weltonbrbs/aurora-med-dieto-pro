import { CHECKOUT_URL } from "./brand";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-mint bg-white shadow-[0_-6px_20px_rgba(23,61,39,0.08)] lg:hidden">
      <div className="flex items-center px-4 py-3">
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-xl bg-forest px-5 py-3.5 text-center text-sm font-semibold text-cream transition-colors hover:bg-forest-hover"
        >
          Eu quero meu acesso agora!
        </a>
      </div>
    </div>
  );
}
