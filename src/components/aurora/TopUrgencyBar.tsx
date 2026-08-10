import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export function TopUrgencyBar() {
  const [seconds, setSeconds] = useState(14 * 60 + 50);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSeconds((s) => (s <= 1 ? 14 * 60 + 50 : s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="w-full bg-forest py-2 text-center text-sm text-cream">
      <span className="inline-flex items-center gap-2">
        <Sparkles className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
        Esta oferta sai do ar em breve · <span className="tabular-nums">{mm}:{ss}</span>
      </span>
    </div>
  );
}
