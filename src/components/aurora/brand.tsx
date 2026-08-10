export const CHECKOUT_URL = "https://payt.site/mNCDOgJ";

export function LeafMark({
  className = "h-7 w-7",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M16 29V11" />
      <path d="M16 17c0-4 2.6-7.2 7.2-8.2C22.6 13.4 20.4 16.4 16 17Z" />
      <path d="M16 22c0-3.2 2.1-5.8 5.8-6.6C21.3 19.2 19.5 21.6 16 22Z" />
      <path d="M16 13.5c0-3.6-2.3-6.6-6.5-7.5C10 10.2 12 13 16 13.5Z" />
      <path d="M16 19.5c-3 0-5.4-2-6.1-5.2C13 15 15.2 16.8 16 19.5Z" />
    </svg>
  );
}

export function Logo({
  tone = "forest",
  className = "",
}: {
  tone?: "forest" | "cream";
  className?: string;
}) {
  const color = tone === "cream" ? "text-cream" : "text-forest";

  return (
    <div className={`flex items-center gap-2 ${color} ${className}`}>
      <LeafMark className="h-7 w-7 shrink-0" />
      <span className="font-serif text-[1.45rem] leading-none">
        aurora med
      </span>
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "sage",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "sage" | "gold";
  className?: string;
}) {
  return (
    <p
      className={`text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${
        tone === "gold" ? "text-gold" : "text-sage"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export function CtaButton({
  children,
  className = "",
  full = false,
}: {
  children: React.ReactNode;
  className?: string;
  full?: boolean;
}) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[52px] items-center justify-center rounded-lg bg-forest px-7 py-3.5 text-center text-sm font-semibold leading-snug text-white transition-colors duration-150 hover:bg-forest-hover sm:text-base ${
        full ? "w-full" : ""
      } ${className}`}
    >
      {children}
    </a>
  );
}

export function GoldRule({
  className = "",
}: {
  className?: string;
}) {
  return <span className={`block h-px w-16 bg-gold/70 ${className}`} />;
}
