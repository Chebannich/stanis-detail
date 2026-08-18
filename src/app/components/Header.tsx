import Link from "next/link"
import Container from "./Container";

export default function Header () {
  return (
    <header className="sticky top-0 z-10 border-b border-line backdrop-blur-xs bg-black/60">
     <Container>
      <div className="flex justify-between items-center py-4.5 px-8">
        <div className="flex items-center uppercase font-heading gap-2.5">
          <div className="flex items-center justify-center w-9 h-9 border border-line-strong rounded-lg bg-black leading-[1.6] text-sm font-bold bg-linear-145 from-[#0e0f11] to-[#000000]">
            <span className="text-transparent bg-clip-text bg-linear-145 from-silver-100 via-silver-600 via-60% to-silver-300">SD</span>
          </div>
          <div className="text-[15px] tracking-[0.04em] font-semibold text-silver-100">
            Stanis <b className="text-accent font-semibold">Detail</b>
          </div>
        </div>
        <ul className="hidden lg:flex gap-8 text-sm text-silver-400">
          <li><Link href={'#pricing'} className="relative hover:text-silver-100 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full">Leistungen</Link></li>
          <li><Link href={'#howItWorks'} className="relative hover:text-silver-100 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full">Ablauf</Link></li>
          <li><Link href={'#features'} className="relative hover:text-silver-100 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full">Warum wir</Link></li>
          <li><Link href={'#contact'} className="relative hover:text-silver-100 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full">Kontakt</Link></li>
        </ul>
        <Link href={'#contact'} className="hidden lg:block py-2.75 px-5.5 font-heading border border-transparent tracking-[0.02em] leading-[1.6] text-[13px] font-semibold text-on-accent bg-linear-110 from-accent-light to-accent rounded-md bg-[length:220%_100%] bg-[linear-gradient(110deg,var(--color-accent)_0%,var(--color-accent-light)_50%,var(--color-accent)_100%)] hover:animate-sweep-fast hover:border-accent">Termin anfragen</Link>
      </div>
     </Container>
    </header>
  );
}