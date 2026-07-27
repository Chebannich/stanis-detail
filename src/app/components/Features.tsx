import Container from "./Container"
import { features } from "@/data/features";

export default function Features () {
  return (
    <section className="py-22">
      <Container>
        <div className="px-8">
          <h3 className="font-heading text-xs font-semibold tracking-[0.16em] uppercase text-accent">Warum StanisDetail</h3>
          <h2 className="font-heading text-3xl font-semibold leading-[1.6] text-silver-100 mt-3.5 mb-14">Kein Studio. Kein Warten.</h2>
          <div className="grid grid-cols-2 gap-px bg-line border border-line rounded-xl overflow-hidden">
            {features.map((feature) => (
              <div className="bg-surface p-7" key={feature.title}>
                <h4 className="font-heading font-semibold text-base text-silver-100 mb-2">{feature.title}</h4>
                <p className="text-[14px] text-silver-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}