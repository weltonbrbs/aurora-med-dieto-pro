import { ArrowRight } from "lucide-react";

export const CHECKOUT_URL = "https://payt.site/mNCDOgJ";

export function LeafMark({ className = "h-7 w-7" }: { className?: string }) {
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
  size = "md",
  className = "",
}: {
  tone?: "forest" | "cream";
  size?: "md" | "lg";
  className?: string;
}) {
  const color = tone === "cream" ? "text-cream" : "text-forest-deep";
  return (
    <div className={`inline-flex items-center gap-2.5 ${color} ${className}`}>
      <LeafMark className={size === "lg" ? "h-12 w-12 shrink-0" : "h-9 w-9 shrink-0"} />
      <span
        className={`font-serif leading-none tracking-tight ${
          size === "lg" ? "text-4xl" : "text-3xl"
        }`}
      >
        aurora med
      </span>
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "muted",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "muted" | "gold";
  className?: string;
}) {
  return (
    <p
      className={`text-xs uppercase tracking-[0.3em] ${
        tone === "gold" ? "text-gold" : "text-ink-soft"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export function CtaButton({
  children,
  variant = "forest",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "forest" | "gold";
  className?: string;
}) {
  const tone =
    variant === "gold"
      ? "bg-gold text-forest-deep hover:bg-gold/90"
      : "bg-forest text-cream hover:bg-forest-hover";
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-colors sm:text-lg ${tone} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
    </a>
  );
}
