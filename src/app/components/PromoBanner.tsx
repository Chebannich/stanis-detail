import { promoConfig } from "@/data/promo";

export function PromoBanner() {
  const { totalSpots, remainingSpots, urgencyThreshold } = promoConfig;
  const isUrgent = remainingSpots <= urgencyThreshold;
  const progressPct = Math.round(((totalSpots - remainingSpots) / totalSpots) * 100);

  return (
    <div className="mx-auto overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex-1">
          <p className="mb-1 font-heading text-xs tracking-[0.16em] font-semibold uppercase text-accent">Einführungsangebot</p>
          <h3 className="mb-2 font-heading text-2xl font-semibold leading-[1.6] text-silver-100">-30% auf dein erstes Paket</h3>
          <p className="mb-5 text-[15px] leading-[1.6] text-silver-400">Für die ersten {totalSpots} Kunden — gilt für Basic, Standard und Premium.</p>
          <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-silver-600">
            <div className="h-full rounded-full bg-linear-to-r from-silver-400 to-silver-100" style={{ width: `${progressPct}%` }} />
          </div>
          <p className="mb-6 text-xs text-neutral-500">{isUrgent ? `Nur noch ${remainingSpots} Plätze` : `${remainingSpots} von ${totalSpots} Plätzen frei`}</p>
          <a href="#pricing" className="inline-block font-heading font-semibold tracking-[0.02em] text-sm border border-transparent py-2.5 px-6 rounded-md bg-linear-135 from-accent-light to-accent text-on-accent bg-[length:220%_100%] bg-[linear-gradient(110deg,var(--color-accent)_0%,var(--color-accent-light)_50%,var(--color-accent)_100%)] hover:animate-sweep-fast hover:border-accent">Jetzt buchen</a>
          <p className="mt-3 text-xs text-silver-600">Gilt nur bei Buchung über dieses Formular. Nicht kombinierbar mit dem Visitenkarten-Rabatt.</p>
        </div>

        <div className="flex shrink-0 flex-col items-center rounded-xl border border-line bg-black/40 px-8 py-5 sm:self-stretch sm:justify-center">
          <span
            className={`font-oswald text-5xl font-semibold leading-none tabular-nums ${isUrgent ? "text-urgent" : "text-silver-100"}`}>
            {remainingSpots}
            <span className="text-2xl text-silver-600">/{totalSpots}</span>
          </span>
          <span className="mt-2 text-[11px] uppercase tracking-wider text-silver-600">
            Plätze frei
          </span>
        </div>
      </div>
    </div>
  );
}
