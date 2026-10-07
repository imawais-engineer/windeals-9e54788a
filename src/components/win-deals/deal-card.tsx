import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, AlertTriangle, Mail } from "lucide-react";
import type { Deal } from "@/data/deals";
import { money } from "@/data/deals";
import { HealthBadge } from "./health-badge";
import { WinScore } from "./score";
import { Button } from "@/components/ui/button";

export function DealCard({ deal, onDraft }: { deal: Deal; onDraft?: (deal: Deal) => void }) {
  return <article className="rounded-lg border border-border bg-card p-5 shadow-card">
    <div className="flex flex-wrap items-start justify-between gap-4"><div><Link to="/app/deals/$id" params={{id: deal.id}} className="text-base font-semibold hover:text-primary">{deal.name}</Link><div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"><strong className="text-foreground">{money(deal.value)}</strong><span>·</span><span>{deal.stage}</span></div></div><div className="flex items-center gap-3"><WinScore score={deal.score} /><HealthBadge health={deal.health} /></div></div>
    <div className="mt-5 grid gap-3 lg:grid-cols-2"><ul className="space-y-2">{deal.positiveSignals.slice(0,2).map(s=><li key={s} className="flex gap-2 text-sm text-secondary-foreground"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-healthy" />{s}</li>)}</ul><ul className="space-y-2">{deal.risks.slice(0,2).map(r=><li key={r} className="flex gap-2 text-sm text-secondary-foreground"><AlertTriangle className="mt-0.5 size-4 shrink-0 text-risk" />{r}</li>)}</ul></div>
    <div className="mt-5 flex flex-col gap-3 rounded-lg bg-brand-soft p-3 sm:flex-row sm:items-center"><div className="min-w-0 flex-1"><div className="text-[10px] font-bold uppercase text-primary">Next best action</div><div className="mt-0.5 text-sm font-medium text-foreground">{deal.nextAction}</div></div><div className="flex shrink-0 gap-2"><Button size="sm" variant="outline" onClick={() => onDraft?.(deal)}><Mail />Draft Email</Button><Button size="sm" asChild><Link to="/app/deals/$id" params={{id: deal.id}}>View Deal<ArrowRight /></Link></Button></div></div>
  </article>;
}
