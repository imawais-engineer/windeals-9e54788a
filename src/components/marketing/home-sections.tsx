import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowDown, ArrowRight, Check, Database, FileSearch, Layers, ShieldCheck, Sparkles, Target, UserCheck, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Logo } from "@/components/win-deals/logo";
import { cn } from "@/lib/utils";
import { AIInsightCard, AILabel, DealRow, MetricCard, NextBestAction, RiskCard, StakeholderCard, StatusBadge } from "@/components/product/product-ui";
import { showcaseDeals, showcaseDiagnosis, showcaseNextAction, showcasePipeline, showcaseRisks, showcaseScore, showcaseSignals, showcaseStakeholders } from "@/data/showcase";
import { Reveal } from "./reveal";

const wrap = "mx-auto max-w-[1240px] px-5 sm:px-8";
const section = "py-16 sm:py-20 lg:py-28";

function Heading({ eyebrow, title, body, dark, center }: { eyebrow?: string; title: string; body?: string; dark?: boolean; center?: boolean }) {
  return <Reveal className={cn("max-w-2xl", center && "mx-auto text-center")}>
    {eyebrow && <p className={cn("text-xs font-semibold uppercase tracking-wider", dark ? "text-dark-muted" : "text-primary")}>{eyebrow}</p>}
    <h2 className={cn("mt-3 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[40px]", dark && "text-dark-foreground")}>{title}</h2>
    {body && <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", dark ? "text-dark-muted" : "text-secondary-foreground")}>{body}</p>}
  </Reveal>;
}

export function Hero() {
  return <section className="overflow-hidden border-b border-border">
    <div className={cn(wrap, "grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[45fr_55fr] lg:py-24")}>
      <div className="hero-enter">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">AI Deal Intelligence</p>
        <h1 className="mt-4 text-[40px] font-bold leading-[1.08] tracking-[-0.04em] sm:text-[56px] sm:leading-[1.05] xl:text-[62px]">Know which deals to win before they slip away.</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary-foreground sm:text-lg">WIN DEALS analyzes your CRM activity, buying signals, stakeholder engagement, and deal momentum to show you which opportunities need attention, why they're at risk, and what to do next.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button size="lg" asChild><Link to="/signup">Analyze my pipeline <ArrowRight /></Link></Button><Button size="lg" variant="outline" asChild><a href="#how-it-works">See how it works</a></Button></div>
        <p className="mt-6 flex items-center gap-2 text-sm font-medium text-muted-foreground"><Check className="size-4 text-healthy" />Works with your existing CRM. No CRM replacement required.</p>
      </div>
      <div id="product" className="relative scroll-mt-24 pb-32 sm:pb-28">
        <div className="hero-preview rounded-xl border border-border bg-card p-4 shadow-preview sm:p-5">
          <div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="relative flex size-2"><span className="absolute inline-flex size-full rounded-full bg-healthy opacity-60 motion-safe:animate-ping [animation-iteration-count:3]" /><span className="relative inline-flex size-2 rounded-full bg-healthy" /></span><h2 className="text-sm font-semibold">Pipeline Intelligence</h2></div><span className="text-xs text-muted-foreground">Updated just now</span></div>
          <div className="mt-4 grid grid-cols-2 gap-3"><MetricCard label="Active Deals" value={showcasePipeline.activeDeals} className="bg-background" /><MetricCard label="Pipeline" value={showcasePipeline.pipelineValue} className="bg-background" /></div>
          <div className="mt-4 space-y-2.5">{showcaseDeals.map((d) => <DealRow key={d.id} deal={d} />)}</div>
        </div>
        <NextBestAction text={showcaseNextAction} className="hero-float absolute -bottom-6 right-0 w-[min(320px,88%)] sm:-right-4 lg:-right-6" />
      </div>
    </div>
  </section>;
}

export function Problem() {
  const cards = [
    { icon: Layers, title: "Too much data", body: "CRM activity, emails, meetings, contacts, stages, and notes create a huge amount of information to monitor manually." },
    { icon: AlertTriangle, title: "Hidden risk", body: "A deal can look healthy on the surface while momentum slows, stakeholders disappear, or critical buying steps remain unresolved." },
    { icon: ArrowRight, title: "No clear action", body: "Knowing that a deal needs attention is not enough. Salespeople need to know what to do next." },
  ];
  return <section className={section}><div className={wrap}>
    <Heading title="Your CRM knows everything. It doesn't tell you what matters." body="Sales teams already have the data. The problem is turning that data into a clear decision." />
    <div className="mt-12 grid gap-4 md:grid-cols-3">{cards.map(({ icon: Icon, title, body }, i) => <Reveal key={title} delay={i * 80}><div className="h-full rounded-xl border border-border bg-card p-6"><span className="grid size-10 place-items-center rounded-lg bg-muted text-secondary-foreground"><Icon className="size-5" /></span><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-[15px] leading-relaxed text-secondary-foreground">{body}</p></div></Reveal>)}</div>
  </div></section>;
}

export function IntelligenceLayer() {
  const steps = [
    { title: "CRM DATA", q: "What happened?", items: ["Deals", "Activities", "Emails", "Meetings", "Contacts", "Stages"] },
    { title: "WIN DEALS", q: "What does it mean?", items: ["Signals", "Risk", "Momentum", "Stakeholder engagement", "AI diagnosis"], focus: true },
    { title: "SALES ACTION", q: "What should I do?", items: ["Prioritize", "Contact", "Follow up", "Resolve risk", "Advance deal"] },
  ];
  return <section className={cn(section, "bg-dark")}><div className={wrap}>
    <Heading dark title="Your CRM stores the pipeline. WIN DEALS understands it." body="WIN DEALS adds an intelligence layer between your CRM data and your sales actions." />
    <div className="mt-12 grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">{steps.flatMap((s, i) => {
      const card = <Reveal key={s.title} delay={i * 100}><div className={cn("h-full rounded-xl border p-6", s.focus ? "border-primary bg-primary/10 ring-1 ring-primary/40" : "border-dark-border bg-dark-surface")}>
        <div className={cn("text-xs font-bold tracking-wider", s.focus ? "text-dark-accent" : "text-dark-muted")}>{s.title}</div>
        <div className="mt-2 text-xl font-semibold text-dark-foreground">{s.q}</div>
        <ul className="mt-5 flex flex-wrap gap-2">{s.items.map((t) => <li key={t} className="rounded-md border border-dark-border px-2.5 py-1 text-sm text-dark-foreground/90">{t}</li>)}</ul>
      </div></Reveal>;
      return i < 2 ? [card, <div key={`a${i}`} className="grid place-items-center py-1 text-dark-muted"><ArrowRight className="hidden size-5 lg:block" /><ArrowDown className="size-5 lg:hidden" /></div>] : [card];
    })}</div>
  </div></section>;
}

export function HowAIWorks() {
  const steps = [
    { tag: "Ingest", icon: Database, title: "Understand the pipeline", items: ["CRM data", "Activities", "Emails", "Meetings", "Contacts", "Deal stages"] },
    { tag: "Detect", icon: FileSearch, title: "Detect important signals", items: ["Buying signals", "Risk signals", "Momentum", "Stakeholder engagement", "Timing"] },
    { tag: "Understand", icon: Sparkles, title: "Interpret the evidence", body: "AI combines multiple signals to diagnose what is happening inside each opportunity." },
    { tag: "Recommend", icon: Target, title: "Recommend the next action", body: "WIN DEALS turns the diagnosis into a practical next-best action for the salesperson." },
  ];
  return <section id="how-it-works" className={cn(section, "scroll-mt-16")}><div className={wrap}>
    <Heading eyebrow="How it works" title="From CRM activity to a clear next action." body="WIN DEALS uses deterministic signals to understand what happened, then AI to interpret what those signals mean and what should happen next." />
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{steps.map((s, i) => <Reveal key={s.tag} delay={i * 80}><div className="h-full rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between"><span className={cn("grid size-9 place-items-center rounded-lg", i >= 2 ? "bg-ai-soft text-ai" : "bg-brand-soft text-primary")}><s.icon className="size-4" /></span><span className="text-xs font-semibold text-muted-foreground">0{i + 1} · {s.tag}</span></div>
      <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
      {s.items ? <ul className="mt-3 space-y-1.5">{s.items.map((t) => <li key={t} className="flex items-center gap-2 text-sm text-secondary-foreground"><span className="size-1 rounded-full bg-muted-foreground" />{t}</li>)}</ul> : <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">{s.body}</p>}
    </div></Reveal>)}</div>
    <Reveal><div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-semibold">{["Data", "Signals", "Diagnosis", "Action"].map((t, i) => <span key={t} className="flex items-center gap-3"><span className={cn("rounded-md px-3 py-1.5", i === 3 ? "bg-primary text-primary-foreground" : "bg-muted")}>{t}</span>{i < 3 && <ArrowRight className="size-4 text-muted-foreground" />}</span>)}</div></Reveal>
  </div></section>;
}

export function WinScoreSection() {
  return <section className={cn(section, "border-y border-border bg-card")}><div className={cn(wrap, "grid items-center gap-12 lg:grid-cols-2")}>
    <div>
      <Heading eyebrow="WIN Score" title="Know which deals deserve your attention." body="Every active deal receives a 0–100 WIN Score based on measurable pipeline signals and deal context." />
      <Reveal><div className="mt-8 rounded-lg border border-border bg-background p-4 text-sm leading-relaxed text-secondary-foreground"><strong className="text-foreground">WIN Score ≠ Health.</strong> A deal can have a strong score while still carrying a specific risk that needs action today.</div></Reveal>
    </div>
    <Reveal><div className="rounded-xl border border-border bg-background p-6 shadow-card sm:p-8">
      <div className="flex items-start justify-between gap-4"><div><div className="text-sm font-semibold">Acme Corp</div><div className="text-xs text-muted-foreground">$42K · Proposal</div></div><StatusBadge health="at_risk" /></div>
      <div className="mt-6 grid gap-8 sm:grid-cols-[auto_1fr]">
        <div><div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">WIN Score</div><div className="mt-2 text-8xl font-bold leading-none tracking-tight text-healthy tabular-nums">{showcaseScore.score}</div><div className="mt-3 h-1.5 w-36 overflow-hidden rounded-full bg-muted"><div className="h-full w-[82%] rounded-full bg-healthy" /></div></div>
        <dl className="space-y-2.5">{showcaseScore.dimensions.map(([k, v]) => <div key={k} className="flex items-center justify-between border-b border-border pb-2 text-sm last:border-0"><dt className="text-secondary-foreground">{k}</dt><dd className={cn("font-semibold", v === "Moderate" ? "text-risk" : "text-foreground")}>{v}</dd></div>)}</dl>
      </div>
      <div className="mt-6 rounded-lg border border-risk-border bg-risk-soft p-4"><div className="flex items-center gap-2 text-sm font-semibold text-risk"><AlertTriangle className="size-4" />Why it's at risk</div><ul className="mt-2 space-y-1 text-sm">{showcaseScore.risks.map((r) => <li key={r}>· {r}</li>)}</ul></div>
    </div></Reveal>
  </div></section>;
}

export function SignalsAndRisks() {
  return <section className={section}><div className={wrap}>
    <Heading title="See what is helping the deal — and what could stop it." />
    <div className="mt-12 grid gap-4 md:grid-cols-2"><Reveal><RiskCard kind="signal" title="Buying Signals" items={showcaseSignals} /></Reveal><Reveal delay={80}><RiskCard kind="risk" title="Risks" items={showcaseRisks} /></Reveal></div>
  </div></section>;
}

export function Diagnosis() {
  return <section className={cn(section, "border-y border-border bg-card")}><div className={cn(wrap, "grid items-center gap-12 lg:grid-cols-2")}>
    <Heading title="Don't just see the signal. Understand it." body="Raw CRM activity is not enough. WIN DEALS explains the meaning behind the evidence." />
    <Reveal><AIInsightCard title="AI Diagnosis" className="p-7">
      <p className="text-lg font-medium leading-relaxed">{showcaseDiagnosis.text}</p>
      <div className="mt-6 border-t border-ai/15 pt-5"><div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Based on</div><ul className="mt-3 flex flex-wrap gap-2">{showcaseDiagnosis.basedOn.map((b) => <li key={b} className="rounded-md border border-border bg-card px-2.5 py-1 text-sm">{b}</li>)}</ul></div>
    </AIInsightCard></Reveal>
  </div></section>;
}

export function NextActionSection() {
  return <section className={section}><div className={cn(wrap, "grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]")}>
    <div>
      <Heading title="Know what to do next." body="WIN DEALS turns deal intelligence into a practical action." />
      <Reveal><div className="mt-8 flex flex-col items-start gap-1.5 text-xs font-bold tracking-wider">{["SIGNAL", "DIAGNOSIS", "ACTION"].map((t, i) => <div key={t} className="flex flex-col items-start gap-1.5"><span className={cn("rounded-md px-3 py-1.5", i === 2 ? "bg-primary text-primary-foreground" : "bg-muted text-secondary-foreground")}>{t}</span>{i < 2 && <ArrowDown className="ml-6 size-4 text-muted-foreground" />}</div>)}</div></Reveal>
    </div>
    <Reveal><NextBestAction size="lg" text={showcaseNextAction} /></Reveal>
  </div></section>;
}

export function Stakeholders() {
  return <section className={cn(section, "border-y border-border bg-card")}><div className={wrap}>
    <Heading title="Know who is actually driving the deal." body="A deal is rarely won by one contact. WIN DEALS highlights stakeholder engagement and gaps." />
    <div className="mt-12 grid gap-4 md:grid-cols-3">{showcaseStakeholders.map((s, i) => <Reveal key={s.name} delay={i * 80}><StakeholderCard {...s} /></Reveal>)}</div>
  </div></section>;
}

export function PipelineSection() {
  const p = showcasePipeline;
  const total = p.healthy + p.atRisk + p.critical;
  const rows = [["Healthy", p.healthy, "bg-healthy"], ["At Risk", p.atRisk, "bg-risk"], ["Critical", p.critical, "bg-critical"]] as const;
  return <section className={section}><div className={wrap}>
    <Heading title="See the health of your entire pipeline." />
    <Reveal><div className="mt-12 grid gap-4 rounded-xl border border-border bg-card p-5 shadow-card sm:p-6 lg:grid-cols-[1.3fr_1fr]">
      <div>
        <div className="grid grid-cols-2 gap-3"><MetricCard label="Active Deals" value={p.activeDeals} className="bg-background" /><MetricCard label="Pipeline" value={p.pipelineValue} className="bg-background" /></div>
        <div className="mt-6"><div className="text-sm font-semibold">Pipeline Health</div><div className="mt-3 flex h-3 overflow-hidden rounded-full">{rows.map(([l, n, c]) => <span key={l} className={c} style={{ width: `${(n / total) * 100}%` }} />)}</div>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">{rows.map(([l, n, c]) => <div key={l} className="flex items-center rounded-lg border border-border px-3 py-2.5 text-sm"><span className={cn("mr-2 size-2 rounded-full", c)} /><span className="flex-1 text-secondary-foreground">{l}</span><strong className="tabular-nums">{n}</strong></div>)}</div></div>
      </div>
      <AIInsightCard title="Pipeline Insight">
        <p className="text-lg font-semibold leading-snug">23% of your active pipeline has had no meaningful activity in the last 7 days.</p>
        <p className="mt-2 text-sm text-secondary-foreground">$112K may require attention.</p>
        <Link to="/app/deals" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">View affected deals <ArrowRight className="size-4" /></Link>
      </AIInsightCard>
    </div></Reveal>
  </div></section>;
}

function VerticalFlow({ items, title, accentLast }: { items: string[]; title: string; accentLast?: boolean }) {
  return <div className="rounded-xl border border-border bg-card p-6"><div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
    <ol className="mt-5 space-y-1">{items.map((t, i) => <li key={t} className="flex flex-col items-start"><span className={cn("rounded-md border px-3 py-1.5 text-sm font-medium", accentLast && i === items.length - 1 ? "border-ai/30 bg-ai-soft text-ai" : "border-border bg-background")}>{t}</span>{i < items.length - 1 && <ArrowDown className="my-1 ml-4 size-3.5 text-muted-foreground" />}</li>)}</ol></div>;
}

export function LearningLoop() {
  return <section className={cn(section, "border-y border-border bg-muted/50")}><div className={wrap}>
    <Heading eyebrow="Product direction" title="Every deal makes the system smarter." body="Over time, historical deal outcomes can help WIN DEALS understand patterns across companies, industries, and sales teams." />
    <div className="mt-12 grid gap-4 md:grid-cols-2">
      <Reveal><VerticalFlow title="Today" items={["Connect CRM", "Analyze pipeline", "Identify signals", "Prioritize deals", "Take action", "Learn from outcomes"]} /></Reveal>
      <Reveal delay={80}><VerticalFlow title="Over time" accentLast items={["Recommendation", "Sales Action", "Deal Outcome", "Won / Lost", "Historical Intelligence", "Better Future Recommendations"]} /></Reveal>
    </div>
  </div></section>;
}

export function Integration() {
  return <section id="integrations" className={cn(section, "scroll-mt-16")}><div className={cn(wrap, "grid items-center gap-12 lg:grid-cols-2")}>
    <div>
      <Heading title="Works with the CRM you already use." body="Start with your existing HubSpot pipeline. WIN DEALS analyzes the data you authorize and turns it into actionable deal intelligence." />
      <Reveal><div className="mt-8"><Button asChild><Link to="/signup">Connect HubSpot <ArrowRight /></Link></Button><p className="mt-3 text-sm text-muted-foreground">You'll connect HubSpot during onboarding.</p></div></Reveal>
    </div>
    <Reveal><div className="mx-auto flex w-full max-w-sm flex-col items-center gap-2 rounded-xl border border-border bg-card p-8">
      <div className="flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-background px-4 py-4"><img src="/integrations/hubspot.svg" alt="" className="size-7" /><span className="text-lg font-bold">HubSpot</span></div>
      <ArrowDown className="size-4 text-muted-foreground" />
      <div className="flex w-full justify-center rounded-lg border border-primary/30 bg-brand-soft px-4 py-4"><Logo /></div>
      <ArrowDown className="size-4 text-muted-foreground" />
      <div className="flex w-full items-center justify-center gap-2 rounded-lg border border-ai/20 bg-ai-soft px-4 py-4 font-semibold text-ai"><Sparkles className="size-4" />Deal Intelligence</div>
    </div></Reveal>
  </div></section>;
}

export function Trust() {
  const cards = [
    { icon: UserCheck, title: "Human controlled", body: "WIN DEALS recommends actions. Your salesperson stays in control." },
    { icon: FileSearch, title: "Evidence-backed", body: "Recommendations are based on observable deal signals and context." },
    { icon: Workflow, title: "No CRM replacement", body: "Keep your existing CRM as the system of record. WIN DEALS adds intelligence on top." },
  ];
  return <section className={cn(section, "border-y border-border bg-card")}><div className={wrap}>
    <Heading title="Built for sales teams, not around them." />
    <div className="mt-12 grid gap-4 md:grid-cols-3">{cards.map(({ icon: Icon, title, body }, i) => <Reveal key={title} delay={i * 80}><div className="h-full rounded-xl border border-border bg-background p-6"><Icon className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">{title}</h3><p className="mt-2 text-[15px] leading-relaxed text-secondary-foreground">{body}</p></div></Reveal>)}</div>
    <Reveal><div className="mt-10 flex flex-col gap-4 rounded-xl border border-border bg-background p-6 sm:flex-row sm:items-center"><ShieldCheck className="size-6 shrink-0 text-secondary-foreground" /><div><h3 className="font-semibold">Your CRM remains your system of record.</h3><p className="mt-1 text-sm text-secondary-foreground">WIN DEALS analyzes the information you authorize and presents deal intelligence back to your sales team.</p></div></div></Reveal>
  </div></section>;
}

export function EarlyAccess() {
  const features = ["CRM pipeline intelligence", "WIN Scores", "Deal risk detection", "AI diagnosis", "Next Best Actions", "AI email drafts"];
  return <section id="early-access" className={cn(section, "scroll-mt-16")}><div className={wrap}>
    <Reveal><div className="mx-auto grid max-w-4xl gap-10 rounded-2xl border border-border bg-card p-8 shadow-card sm:p-12 md:grid-cols-[1.1fr_1fr]">
      <div><p className="text-xs font-semibold uppercase tracking-wider text-primary">Early access</p><h2 className="mt-3 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[40px]">Get early access to WIN DEALS.</h2><p className="mt-4 text-secondary-foreground">Turn your existing CRM pipeline into a prioritized plan for what to do next.</p><Button size="lg" className="mt-8" asChild><Link to="/signup">Join early access <ArrowRight /></Link></Button></div>
      <ul className="space-y-3 self-center">{features.map((f) => <li key={f} className="flex items-center gap-3 text-[15px] font-medium"><span className="grid size-5 place-items-center rounded-full bg-healthy-soft text-healthy"><Check className="size-3" /></span>{f}</li>)}</ul>
    </div></Reveal>
  </div></section>;
}

const faqs: [string, string][] = [
  ["What is WIN DEALS?", "WIN DEALS is an AI Deal Intelligence platform that analyzes your CRM pipeline to identify deal risk, uncover buying signals, and recommend the next best action."],
  ["Is WIN DEALS a CRM?", "No. WIN DEALS is an intelligence layer that works on top of your existing CRM. Your CRM remains the system of record."],
  ["Which CRM do you support?", "WIN DEALS is initially focused on HubSpot. Additional CRM integrations may be added as the product evolves."],
  ["Does WIN DEALS automatically send emails?", "Not initially. WIN DEALS can generate an AI-assisted email draft, while the salesperson remains in control of sending it."],
  ["How is the WIN Score calculated?", "The WIN Score combines structured deal signals such as engagement, momentum, stakeholder coverage, activity recency, timing, buying signals, and risk signals."],
  ["Does AI replace the salesperson?", "No. WIN DEALS helps salespeople understand their pipeline faster and decide what to do next. The salesperson remains in control of the action."],
];

export function FAQ() {
  return <section className={cn(section, "border-t border-border bg-card")}><div className={cn(wrap, "max-w-3xl")}>
    <Heading center title="Frequently asked questions" />
    <Accordion type="single" collapsible className="mt-10">{faqs.map(([q, a]) => <AccordionItem key={q} value={q}><AccordionTrigger className="text-left text-base font-semibold">{q}</AccordionTrigger><AccordionContent className="text-[15px] leading-relaxed text-secondary-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion>
  </div></section>;
}

export function FinalCTA() {
  return <section className={cn(section, "bg-dark")}><div className={cn(wrap, "text-center")}>
    <Reveal><h2 className="mx-auto max-w-3xl text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-dark-foreground sm:text-[44px]">Stop wondering which deals need your attention.</h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-dark-muted">Let WIN DEALS turn your CRM pipeline into a clear plan for what to do next.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button size="lg" asChild><Link to="/signup">Analyze my pipeline <ArrowRight /></Link></Button><Button size="lg" variant="outline" className="border-dark-border bg-transparent text-dark-foreground hover:bg-dark-surface hover:text-dark-foreground" asChild><Link to="/app/dashboard">See the product</Link></Button></div></Reveal>
  </div></section>;
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return <div><div className="text-sm font-semibold text-dark-foreground">{title}</div><ul className="mt-4 space-y-2.5 text-sm text-dark-muted">{children}</ul></div>;
}

export function Footer() {
  const a = "transition-colors hover:text-dark-foreground";
  return <footer className="border-t border-dark-border bg-dark"><div className={cn(wrap, "py-14")}>
    <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
      <div><Logo atmospheric /></div>
      <FooterCol title="Product"><li><a className={a} href="#product">Product</a></li><li><a className={a} href="#how-it-works">How it works</a></li><li><a className={a} href="#early-access">Pricing</a></li><li><a className={a} href="#integrations">Integrations</a></li></FooterCol>
      <FooterCol title="Company"><li>About</li><li>Contact</li></FooterCol>
      <FooterCol title="Legal"><li>Privacy</li><li>Terms</li></FooterCol>
    </div>
    <div className="mt-12 flex flex-col justify-between gap-2 border-t border-dark-border pt-6 text-sm text-dark-muted sm:flex-row"><span>© 2026 WIN DEALS</span><span>Built for modern B2B sales teams.</span></div>
  </div></footer>;
}
