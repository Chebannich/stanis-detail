// src/app/datenschutz/page.tsx

import Container from "../components/Container"
import { datenschutzHtml } from "@/data/legal/datenschutz-content"

export default function Datenschutz() {
  return (
    <section className="py-12 md:py-22">
      <Container>
        <div
          className="
            px-8 max-w-160 mx-auto
            text-[15px] leading-[1.7] text-silver-400
            [&_h1]:font-heading [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:text-silver-100 [&_h1]:mb-8
            [&_h2]:font-heading [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-silver-100 [&_h2]:mt-10 [&_h2]:mb-3
            [&_h3]:font-heading [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-silver-200 [&_h3]:mt-6 [&_h3]:mb-2
            [&_p]:mb-3
            [&_ul]:list-disc [&_ul]:list-inside [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1 [&_ul]:mb-4
            [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-accent-light
            [&_.index]:list-none [&_.index]:flex [&_.index]:flex-col [&_.index]:gap-1 [&_.index]:mb-10 [&_.index]:p-4 [&_.index]:rounded-lg [&_.index]:border [&_.index]:border-line [&_.index]:bg-surface
            [&_.seal]:mt-10 [&_.seal]:text-xs [&_.seal]:text-silver-600
            [&_.seal_a]:text-silver-600
          "
          dangerouslySetInnerHTML={{ __html: datenschutzHtml }}
        />
      </Container>
    </section>
  );
}
