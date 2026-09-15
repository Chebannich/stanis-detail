// src/app/impressum/page.tsx

import Container from "../components/Container"
import { impressumHtml } from "@/data/legal/impressum-content"

export default function Impressum() {
  return (
    <section className="py-12 md:py-22">
      <Container>
        <div
          className="
            px-8 max-w-160 mx-auto
            text-[15px] leading-[1.7] text-silver-400
            [&_h1]:font-heading [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:text-silver-100 [&_h1]:mb-8
            [&_h2]:font-heading [&_h2]:text-sm [&_h2]:font-semibold [&_h2]:text-silver-100 [&_h2]:mt-8 [&_h2]:mb-2
            [&_p]:mb-3
            [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-accent-light
          "
          dangerouslySetInnerHTML={{ __html: impressumHtml }}
        />
      </Container>
    </section>
  );
}
