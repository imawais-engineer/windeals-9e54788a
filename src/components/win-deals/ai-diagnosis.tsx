import { useState } from "react";
import { AlertTriangle, Check, Copy, Sparkles } from "lucide-react";
import type { Deal } from "@/data/deals";
import { Button } from "@/components/ui/button";

/** AI Deal Diagnosis panel: shows AI interpretation alongside the structured signals it was based on. */
export function AIDiagnosis({ deal }: { deal: Deal }) {
  const [copied, setCopied] = useState(false);
  const first = deal.stakeholders[0]?.name.split(" ")[0] ?? "there";
  const draft = `Hi ${first},\n\nI wanted to check in on where things stand for ${deal.name}. ${deal.nextAction}\n\nWould a short call this week work to confirm the decision timeline?\n\nBest,\n${deal.owner.split(" ")[0]}`;
  const copy = async () => { try { await navigator.clipboard.writeText(draft); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); } };
  return <section className="rounded-xl border border-ai/20 bg-ai-soft p-5" aria-labelledby="ai-diagnosis-title">
    <div className="flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-2 text-ai"><Sparkles className="size-4" aria-hidden /><h2 id="ai-diagnosis-title" className="text-xs font-bold uppercase tracking-wider">AI Deal Diagnosis</h2></div><span className="rounded-full border border-ai/20 bg-card px-2.5 py-0.5 text-[11px] font-semibold text-ai">AI Insight</span></div>
    <p className="mt-2 text-sm font-semibold">{deal.health === "Healthy" ? "What is driving this deal" : "Why this deal needs attention"}</p>
    <div className="mt-4 space-y-4">
      <div className="hero-enter"><div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{deal.health === "Healthy" ? "Assessment" : "Risk detected"}</div><p className="mt-1.5 text-sm leading-7 text-foreground">{deal.diagnosis}</p></div>
      <div className="hero-enter"><div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What changed</div><ul className="mt-2 space-y-1.5">{deal.risks.map((r) => <li key={r} className="flex gap-2 text-sm text-secondary-foreground"><AlertTriangle className="mt-0.5 size-4 shrink-0 text-risk" aria-hidden />{r}</li>)}</ul></div>
      <div className="hero-enter"><div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Recommended next action</div><p className="mt-1.5 text-sm font-semibold">{deal.nextAction}</p></div>
      <div className="hero-enter rounded-lg border border-ai/15 bg-card p-4"><div className="flex items-center justify-between gap-2"><div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Suggested outreach</div><Button size="sm" variant="outline" onClick={copy}>{copied ? <Check /> : <Copy />}{copied ? "Copied" : "Copy draft"}</Button></div><pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-6 text-secondary-foreground">{draft}</pre></div>
    </div>
    <p className="mt-4 text-xs text-ai">AI-generated analysis based on {deal.positiveSignals.length + deal.risks.length} structured signals. Review before acting — nothing is sent automatically.</p>
  </section>;
}
