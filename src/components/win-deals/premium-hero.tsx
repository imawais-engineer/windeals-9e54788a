import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, AudioLines, Check, CircleAlert, Command, Search, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deals, money, pipelineTotal } from "@/data/deals";
import { PublicHeader } from "./public-header";
import aurora from "@/assets/obsidian-emerald.jpg";

const prompts = ["At-Risk Deals", "Acme Corp", "Procurement Stalls", "Next Best Action"];

export function PremiumHero() {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const matches = deals.filter(deal => {
    const text = query.toLowerCase().trim();
    if (text === "at-risk deals") return deal.health !== "Healthy";
    if (text === "procurement stalls") return deal.risks.some(risk => /legal|close date/i.test(risk));
    if (!text || text === "next best action") return deal.health !== "Healthy";
    return `${deal.name} ${deal.stage} ${deal.risks.join(" ")} ${deal.nextAction}`.toLowerCase().includes(text);
  }).slice(0, 3);
  return <section className="premium-hero relative isolate overflow-hidden">
    <img src={aurora} alt="" width={1920} height={1088} className="hero-atmosphere absolute inset-0 -z-10 h-full w-full object-cover" />
    <PublicHeader atmospheric />
    <div className="hero-inner mx-auto max-w-7xl px-5 sm:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-hero-muted"><span className="size-1.5 rounded-full bg-mint" />A clearer signal. A stronger quarter.</div>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.12] sm:text-6xl">Know which deals to win<br /><em className="font-editorial font-normal text-lime">before they slip away.</em></h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-hero-muted sm:text-base">WIN DEALS turns your CRM pipeline into a clear plan to win more deals. Know the risks. See the signals. Make your next move.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3"><Button size="lg" asChild><Link to="/signup">Get Early Access<ArrowUpRight /></Link></Button><Button size="lg" variant="outline" asChild><Link to="/app/dashboard">Explore Interactive Demo<ArrowRight /></Link></Button></div>
      </div>
      <div className="hero-workspace relative mx-auto mt-12 max-w-6xl">
        <div className="hero-stat hero-review frosted-surface"><div className="flex items-center justify-center gap-3"><span className="laurel text-lime" aria-hidden="true">❧</span><div><strong className="text-3xl font-semibold">98<span className="text-lg">%</span></strong><div className="mt-1 text-[11px] text-hero-muted">Recommended by AEs</div></div><span className="laurel -scale-x-100 text-lime" aria-hidden="true">❧</span></div><div className="mt-4 flex justify-center gap-1 text-lime" aria-label="Five stars">★★★★★</div><p className="mt-2 text-center text-[10px] text-hero-muted">WIN DEALS · Demo benchmark</p></div>
        <div className="command-wrap relative z-10 mx-auto max-w-xl">
          <div className="mb-3 flex items-center justify-center gap-2 text-[10px] font-medium uppercase text-hero-muted"><Sparkles className="size-3 text-mint" />Your pipeline. In focus.</div>
          <div className="frosted-surface command-capsule">
            <form className="flex items-center gap-3" onSubmit={event => { event.preventDefault(); setExpanded(true); }}><Command className="size-5 shrink-0 text-mint" /><input aria-label="Analyze your pipeline" placeholder="Analyze your pipeline..." value={query} onChange={event => {setQuery(event.target.value); setExpanded(true);}} className="h-10 min-w-0 flex-1 bg-transparent text-sm text-hero-foreground outline-none placeholder:text-hero-muted" /><Button type="submit" size="icon" aria-label="Analyze pipeline"><ArrowUpRight /></Button></form>
            <div className="mt-3 flex flex-wrap gap-1.5 border-t border-hero-border pt-3">{prompts.map(prompt => <Button key={prompt} variant="ghost" size="sm" className="h-7 px-2 text-[10px]" onClick={() => {setQuery(prompt); setExpanded(true);}}>{prompt === "At-Risk Deals" ? <CircleAlert /> : <Search />}{prompt}</Button>)}</div>
          </div>
          {expanded && <div className="frosted-surface mt-2 p-3"><div className="mb-2 flex items-center justify-between px-1"><span className="text-xs text-hero-muted">{matches.length ? "Pipeline signals" : "No matching deals"}</span><Button variant="ghost" size="icon" className="size-6" aria-label="Close pipeline results" onClick={() => setExpanded(false)}><X /></Button></div>{matches.map(deal => <Link key={deal.id} to="/app/deals/$id" params={{id:deal.id}} className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-hero-glass"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-mint" /><div className="min-w-0 flex-1"><div className="flex justify-between gap-2 text-xs"><strong>{deal.name}</strong><span className="text-hero-muted">{money(deal.value)}</span></div><p className="mt-1 text-[11px] leading-5 text-hero-muted">{deal.nextAction}</p></div><ArrowUpRight className="size-3.5 shrink-0 text-mint" /></Link>)}</div>}
          <div className="mt-5 flex justify-center gap-5 text-[10px] text-hero-muted"><span className="flex items-center gap-1.5"><Check className="size-3 text-mint" />Evidence-backed intelligence</span><span className="flex items-center gap-1.5"><AudioLines className="size-3 text-mint" />Always in sync</span></div>
        </div>
        <Link to="/app/dashboard" className="hero-stat hero-warning frosted-surface block"><div className="flex items-center justify-between"><span className="flex items-center gap-1.5 text-[10px] text-hero-muted"><span className="size-1.5 rounded-full bg-mint" />LIVE PIPELINE</span><ArrowUpRight className="size-3.5 text-hero-muted" /></div><div className="mt-4 flex items-baseline gap-2"><strong className="text-3xl font-semibold text-hero-warning">5</strong><span className="text-xs">Need Attention Today</span></div><div className="mt-3 flex gap-2 border-t border-hero-border pt-3 text-[10px] text-hero-muted"><CircleAlert className="size-3 text-hero-warning" />2 critical opportunities</div></Link>
        <Link to="/app/deals" className="hero-stat hero-pipeline frosted-surface block"><div className="flex items-center justify-between text-[10px] text-hero-muted"><span>PIPELINE MONITORED</span><ArrowUpRight className="size-3.5" /></div><div className="mt-3 text-3xl font-semibold">${Math.round(pipelineTotal / 1000)}K<span className="ml-2 text-xs font-medium text-mint">Live</span></div><div className="mt-3 flex gap-1.5">{deals.slice(0,3).map(deal => <span key={deal.id} className="rounded border border-hero-border bg-hero-glass px-2 py-1 text-[9px] text-hero-muted">{deal.name}</span>)}</div></Link>
      </div>
      <div className="hero-signoff flex flex-wrap items-center justify-between gap-3 border-t border-hero-border py-5 text-[10px] text-hero-muted"><span>AI DEAL INTELLIGENCE, BUILT FOR REVENUE TEAMS</span><Link to="/app/dashboard" className="flex items-center gap-2">Meet your command center<ArrowRight className="size-3 text-mint" /></Link></div>
    </div>
  </section>;
}