import Link from "next/link"
import Container from "./Container"

export default function Hero () {
  return (
    <section className="pt-24 pb-21.5">
      <Container>
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div className="flex flex-col flex-1">
            <h3 className="font-heading text-xs font-semibold tracking-[0.16em] uppercase text-accent">Mobile Innenraum-Aufbereitung · Versmold & Umgebung</h3>
            <h1 className="font-heading text-[56px] font-semibold leading-[1.12] tracking-[-0.01em] mt-4.5 mb-5.5
                          text-transparent bg-clip-text bg-[linear-gradient(110deg,var(--color-silver-400)_0%,var(--color-silver-100)_25%,#ffffff_32%,var(--color-silver-100)_40%,var(--color-silver-600)_60%)]
                          bg-[length:220%_100%] animate-sweep">
              Dein Innenraum.<br />
              Neu veredelt.
            </h1>
            <p className="text-[17px] text-silver-400 max-w-115 mb-8 leading-[1.6]">Professionelle Fahrzeugaufbereitung mit Koch-Chemie-Produkten — wir kommen zu dir nach Hause oder zur Arbeit. Kein Werkstattbesuch, kein Zeitverlust.</p>
            <div className="flex gap-3.5 flex-wrap mb-11 font-heading font-semibold tracking-[0.02em] text-[14px]">
              <Link href={'#contact'} className="border border-transparent py-3.5 px-6.5 rounded-md bg-linear-135 from-accent-light to-accent text-on-accent">Termin anfragen</Link>
              <Link href={'#pricing'} className="border border-line-strong py-3.5 px-6.5 rounded-md">Leistungen ansehen</Link>
            </div>
            <ul className="flex flex-col gap-3 max-w-105 leading-[1.6] text-[14px] text-silver-300">
              <li className="flex items-baseline gap-2.5"><span className="text-[10px] text-accent">●</span>Kein Anfahrtsweg für dich — wir kommen vorbei</li>
              <li className="flex items-baseline gap-2.5"><span className="text-[10px] text-accent">●</span>Profi-Chemie von Koch Chemie</li>
              <li className="flex items-baseline gap-2.5"><span className="text-[10px] text-accent">●</span>Erster mobiler Aufbereiter in Versmold</li>
            </ul>
          </div>
          <div className="flex items-center justify-center aspect-square border border-line rounded-2xl bg-[radial-gradient(circle_at_30%_25%,#1c1f24,#0a0b0d_70%)]">
            <div className="flex items-center justify-center aspect-square border border-line-strong rounded-full w-[70%]">
              <div className="relative flex flex-col items-center justify-center text-[88px] leading-none font-bold text-transparent bg-clip-text bg-linear-145 from-silver-100 via-silver-600 via-60% to-silver-300 
                              after:content-['']
                              after:absolute
                              after:left-1/2
                              after:-translate-x-1/2
                              after:bottom-3.25
                              after:w-14
                              after:h-px
                              after:bg-silver-600/30">
                SD<br />
                <span className="text-[8px] leading-none tracking-[0.25em] uppercase mt-2.5">Stanis Detail</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}