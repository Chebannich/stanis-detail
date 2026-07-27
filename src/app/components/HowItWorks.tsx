import Container from "./Container"
import { steps } from "@/data/steps";

export default function HowItWorks () {
  return (
   <section className="py-22">
      <Container>
        <div className="px-8">
          <div>
            <h3 className="font-heading text-xs font-semibold tracking-[0.16em] uppercase text-accent">Ablauf</h3>
            <h2 className="font-heading text-3xl font-semibold leading-[1.6] text-silver-100 mt-3.5 mb-14">Vier Schritte bis zum Termin</h2>
          </div>
          <div className="grid grid-cols-4 gap-0">
            {steps.map((step) => (
              <div className="py-6 pr-5.5" key={step.name}>
                <div className="font-heading font-semibold text-[13px] text-accent mb-2.5 tracking-[0.04em]">0{step.number}</div>
                <h4 className="font-heading font-semibold text-base text-silver-100 mb-2">{step.name}</h4>
                <p className="text-[13.5px] text-silver-400">{step.description}</p>
              </div>
            ))}
         </div>
        </div>
        
      </Container>
    </section>
  );
}