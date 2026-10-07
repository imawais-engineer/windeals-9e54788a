import type { ReactNode } from "react";
import { ArrowUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { wrap } from "./home-sections";
import { PageHero } from "./public-page";
import { lastUpdatedLabel } from "@/data/legal";

export interface LegalSection { id: string; nav: string; title: string; body: ReactNode }
export interface LegalDocumentProps { title: string; intro: string; sections: LegalSection[] }

export function LegalDocument({ title, intro, sections }: LegalDocumentProps) {
  const toc = <ol className="space-y-1 text-sm">{sections.map((s, i) => <li key={s.id}><a href={`#${s.id}`} className="block rounded-md px-2 py-1.5 text-secondary-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><span className="mr-2 tabular-nums text-muted-foreground">{i + 1}.</span>{s.nav}</a></li>)}</ol>;
  return <>
    <PageHero center eyebrow="Legal" title={title} body={intro}>
      <p className="mt-6 text-sm font-medium text-hero-muted">Last updated: <span className="text-hero-foreground">{lastUpdatedLabel()}</span></p>
    </PageHero>
    <div className={cn(wrap, "py-12 sm:py-16")}>
      <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,800px)] lg:justify-center">
        <nav aria-label="Table of contents" className="hidden lg:block"><div className="sticky top-24"><p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">On this page</p>{toc}</div></nav>
        <details className="group rounded-lg border border-border bg-card lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-sm font-semibold">Table of contents<ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden /></summary>
          <nav aria-label="Table of contents" className="border-t border-border p-2">{toc}</nav>
        </details>
        <article className="min-w-0 text-base leading-[1.6] text-secondary-foreground">
          {sections.map((s, i) => <section key={s.id} id={s.id} className="scroll-mt-24 border-b border-border py-8 first:pt-0 last:border-0">
            <h2 className="text-2xl font-bold text-foreground">{i + 1}. {s.title}</h2>
            <div className="mt-4 space-y-4 [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_ul]:space-y-2 [&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_strong]:text-foreground">{s.body}</div>
          </section>)}
          <a href="#main" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="mt-6 inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ArrowUp className="size-4" aria-hidden />Back to top</a>
        </article>
      </div>
    </div>
  </>;
}
