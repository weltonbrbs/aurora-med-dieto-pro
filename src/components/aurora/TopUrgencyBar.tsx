import { useEffect, useState } from "react";

export function TopUrgencyBar() {
  const [seconds, setSeconds] = useState(14 * 60 + 56);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSeconds((current) =>
        current <= 1 ? 14 * 60 + 56 : current - 1
      );
    }, 1000);

    return () => window.clearInterval(id);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="bg-forest-deep">
      <div className="mx-auto flex min-h-[38px] max-w-[1120px] items-center justify-center gap-2 px-5 text-center text-[0.72rem] text-white sm:text-xs">
        <span>Esta oferta sai do ar em breve</span>
        <span className="opacity-50">·</span>
        <strong className="font-semibold tabular-nums text-gold">
          {mm}:{ss}
        </strong>
      </div>
    </div>
  );
}
