import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function TopUrgencyBar() {
  const [seconds, setSeconds] = useState(14 * 60 + 56);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSeconds((s) => (s <= 1 ? 14 * 60 + 56 : s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="sticky top-0 z-40 bg-forest-deep">
      <div className="shell flex items-center justify-center gap-2 py-2.5 text-center text-[0.72rem] tracking-wide text-cream sm:text-sm">
        <Clock className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
        <span>Esta oferta sai do ar em breve</span>
        <span className="text-cream/40" aria-hidden="true">
          ·
        </span>
        <span
          className="font-semibold tabular-nums text-gold"
          aria-label={`Tempo restante: ${mm} minutos e ${ss} segundos`}
        >
          {mm}:{ss}
        </span>
      </div>
    </div>
  );
}
