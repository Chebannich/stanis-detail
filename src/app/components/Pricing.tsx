import Link from "next/link"
import Container from "./Container"
import { pricingTiers } from "@/data/pricingTiers";


export default function Pricing () {
  return (
    <section className="py-12 md:py-22">
      <Container>
        <div className="px-8">
          <div className="max-w-140 mb-12">
            <h3 className="font-heading text-xs font-semibold tracking-[0.16em] uppercase text-accent">Leistungen</h3>
            <h2 className="font-heading text-3xl font-semibold leading-[1.6] text-silver-100 mt-3.5">Drei Pakete, klar kalkuliert</h2>
            <p className="text-[15px] leading-[1.6] text-silver-400 mt-3">
              Der Preis richtet sich nach Fahrzeuggröße — hier die Einstiegspreise je Paket. Fest, transparent, ohne Überraschungen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pricingTiers.map((tier) => (
              <div className="bg-surface border border-line rounded-xl py-8 px-6.5 flex flex-col" key={tier.name}>
                <h4 className="text-[19px] font-semibold text-silver-100">{tier.name}</h4>
                <div className="font-heading text-[28px] font-semibold mt-3.5 mb-1.5 text-silver-100">
                  ab {tier.price}&nbsp;€
                  <span className="text-[13px] text-silver-400"> / Fahrzeug</span>
                </div>
                <ul className="my-6.5 flex flex-col gap-2.5 flex-1 text-sm leading-[1.6] text-silver-300">
                  {tier.benefits.map((benefit) => (
                    <li className="flex gap-2.5 items-start before:content-['—'] before:text-accent" key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <Link href={'#contact'} className="border border-line-strong text-silver-100 bg-transparent flex items-center justify-center py-2.75 px-5.5 mt-4.5 rounded-md font-heading text-[13px] font-semibold tracking-[0.02em]">Auswählen</Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}