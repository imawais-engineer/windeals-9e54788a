import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, BarChart3, Briefcase, Compass, Crosshair, Database, Gauge, Lightbulb, ListChecks, Radar, Rocket, ShieldCheck, Sparkles, Target, TrendingUp, UserCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/components/win-deals/page-meta";
import { PageHero, PublicPage } from "@/components/marketing/public-page";
import { Heading, section, wrap } from "@/components/marketing/home-sections";
import { Reveal } from "@/components/marketing/reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => pageMeta("About WIN DEALS — AI Deal Intelligence", "Learn why WIN DEALS is building AI-powered deal intelligence for modern B2B sales teams.", true, "/about"),
  component: About,
});

const beliefs = [
  { icon: Lightbulb, t: "Intelligence should be actionable", d: "Information is useful when it helps someone make a better decision." },
  { icon: Radar, t: "AI should work from evidence", d: "AI should interpret real business signals rather than produce vague recommendations." },
  { icon: UserCheck, t: "Salespeople should stay in control", d: "Technology should help salespeople make better decisions, not remove them from the process." },
  { icon: ShieldCheck, t: "Your CRM should remain yours", d: "WIN DEALS is designed to add intelligence to your existing sales systems, not force teams to replace them." },
];
const flow = [
  { icon: Database, t: "CRM Data", d: "Deals, contacts, emails, meetings, stages" },
  { icon: Radar, t: "Signals", d: "Buying signals, risk signals, momentum" },
  { icon: Sparkles, t: "AI Interpretation", d: "What the evidence means for this deal", ai: true },
  { icon: Gauge, t: "Deal Priority", d: "Which opportunities need attention first" },
  { icon: Target, t: "Next Best Action", d: "One clear recommended step", focus: true },
  { icon: Briefcase, t: "Sales Action", d: "The salesperson decides and acts" },
  { icon: TrendingUp, t: "Outcome", d: "Results inform future recommendations" },
];
const principles = [
  { icon: ListChecks, t: "Prioritize, don't overwhelm", d: "Salespeople should quickly know which opportunities deserve attention." },
  { icon: Compass, t: "Explain, don't just score", d: "A score is useful, but understanding why a deal is at risk is more valuable." },
  { icon: Crosshair, t: "Recommend, don't take over", d: "WIN DEALS can recommend the next action while keeping the salesperson in control." },
];
const audiences = [
  { icon: Target, t: "Account Executives", d: "Know which opportunities need attention and what action to take next." },
  { icon: Users, t: "Sales Managers", d: "See where pipeline risk is concentrated without manually inspecting every deal." },
  { icon: BarChart3, t: "Revenue Operations", d: "Turn CRM data into actionable pipeline intelligence." },
  { icon: Rocket, t: "B2B Founders", d: "Understand where revenue opportunities are moving — and where they are getting stuck." },
];

function Card({ icon: Icon, t, d }: { icon: typeof Target; t: string; d: string }) {
  return <div className="h-full rounded-xl border border-border bg-card p-6 shadow-card">
    <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary"><Icon className="size-5" aria-hidden /></span>
    <h3 className="mt-5 text-lg font-semibold">{t}</h3>
    <p className="mt-2 leading-relaxed text-secondary-foreground">{d}</p>
  </div>;
}

function About() {
  return <PublicPage>
    <PageHero eyebrow="About WIN DEALS" title={<>Sales teams don't need more data. <span className="font-editorial font-normal italic tracking-normal text-lime">They need to know what matters.</span></>} body="WIN DEALS exists to help sales teams turn the information already sitting inside their CRM into clear deal intelligence and actionable next steps." />

    <section className={section}><div className={cn(wrap, "grid gap-10 lg:grid-cols-[1fr_1.2fr]")}>
      <Heading eyebrow="Our mission" title="Our mission" />
      <Reveal className="space-y-5 text-lg leading-relaxed text-secondary-foreground">
        <p className="font-semibold text-foreground">WIN DEALS is building a smarter way for sales teams to understand their pipeline.</p>
        <p>Modern sales teams already have enormous amounts of information across their CRM, emails, meetings, contacts, activities, and deal stages. The challenge isn't collecting more data. It's understanding what that data means.</p>
        <p>WIN DEALS turns those signals into deal intelligence — helping salespeople identify risk, recognize buying signals, prioritize the right opportunities, and decide what to do next.</p>
      </Reveal>
    </div></section>

    <section className={cn(section, "premium-hero")}><div className={wrap}>
      <Heading dark title="The CRM tells you what happened. We want to help explain what it means." />
      <div className="mt-12 grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
        {[{ k: "Traditional CRM", q: "What happened?", items: ["Deals", "Contacts", "Activities", "Emails", "Stages", "Notes", "Reports"] }, null, { k: "WIN DEALS", q: "What should I do?", items: ["Signals", "Risk", "Momentum", "Stakeholder engagement", "Diagnosis", "Priority", "Next Best Action"], focus: true }].map((c, i) => c === null
          ? <div key="arrow" className="flex justify-center text-dark-muted"><ArrowRight className="hidden size-6 lg:block" aria-hidden /><ArrowDown className="size-6 lg:hidden" aria-hidden /></div>
          : <Reveal key={c.k} delay={i * 100}><div className={cn("rounded-xl border p-6", c.focus ? "border-primary bg-primary/10 ring-1 ring-primary/40" : "border-dark-border bg-dark-surface")}>
            <div className={cn("text-xs font-bold uppercase tracking-wider", c.focus ? "text-dark-accent" : "text-dark-muted")}>{c.k}</div>
            <div className="mt-2 text-xl font-semibold text-dark-foreground">{c.q}</div>
            <ul className="mt-5 flex flex-wrap gap-2">{c.items.map((t) => <li key={t} className="rounded-md border border-dark-border px-2.5 py-1 text-sm text-dark-foreground/90">{t}</li>)}</ul>
          </div></Reveal>)}
      </div>
    </div></section>

    <section className={section}><div className={wrap}>
      <Heading title="What we believe" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{beliefs.map((b, i) => <Reveal key={b.t} delay={i * 80}><Card {...b} /></Reveal>)}</div>
    </div></section>

    <section className={cn(section, "border-y border-border bg-card")}><div className={wrap}>
      <Heading eyebrow="How WIN DEALS works" title="From pipeline data to a plan of action." />
      <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">{flow.map((f, i) => <Reveal key={f.t} delay={i * 60}><li className={cn("flex h-full flex-col rounded-lg border p-4", f.focus ? "border-primary bg-brand-soft" : f.ai ? "border-ai/20 bg-ai-soft" : "border-border bg-background")}>
        <div className="flex items-center justify-between"><f.icon className={cn("size-4", f.ai ? "text-ai" : "text-primary")} aria-hidden /><span className="text-xs font-semibold tabular-nums text-muted-foreground">0{i + 1}</span></div>
        <div className="mt-4 text-sm font-bold uppercase tracking-wide">{f.t}</div>
        <p className="mt-1.5 text-sm leading-snug text-secondary-foreground">{f.d}</p>
      </li></Reveal>)}</ol>
    </div></section>

    <section className={section}><div className={wrap}>
      <Heading title="Built around the way sales teams actually work." />
      <div className="mt-10 grid gap-4 md:grid-cols-3">{principles.map((p, i) => <Reveal key={p.t} delay={i * 80}><Card {...p} /></Reveal>)}</div>
    </div></section>

    <section className={cn(section, "border-t border-border bg-card")}><div className={wrap}>
      <Heading title="Built for modern B2B sales teams." />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{audiences.map((a, i) => <Reveal key={a.t} delay={i * 80}><Card {...a} /></Reveal>)}</div>
    </div></section>

    <section className={section}><div className={cn(wrap, "max-w-3xl")}>
      <Heading eyebrow="Where we are today" title="We're building WIN DEALS one capability at a time." />
      <Reveal className="mt-6 space-y-4 text-lg leading-relaxed text-secondary-foreground">
        <p>WIN DEALS is being developed as an intelligence layer for modern sales teams, starting with pipeline analysis, deal health, buying signals, AI diagnosis, and next-best actions.</p>
        <p>The product will evolve as we learn from real sales teams and the outcomes of the deals they work every day.</p>
      </Reveal>
    </div></section>

    <section className={cn(section, "premium-hero")}><div className={cn(wrap, "text-center")}>
      <Reveal><h2 className="mx-auto max-w-3xl text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-hero-foreground sm:text-[44px]">See what WIN DEALS can find <span className="font-editorial font-normal italic tracking-normal text-lime">in your pipeline.</span></h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-hero-muted">Turn your CRM data into a clearer picture of where to focus next.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button size="lg" asChild><Link to="/signup">Get started <ArrowRight /></Link></Button><Button size="lg" variant="outline" asChild><Link to="/" hash="how-it-works">See how it works</Link></Button></div></Reveal>
    </div></section>
  </PublicPage>;
}
