import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, CheckCircle2, Mail, Sparkles, ListTodo, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ShowcaseDeal, ShowcaseHealth, StakeholderStatus } from "@/data/showcase";

const healthStyle: Record<ShowcaseHealth, { label: string; cls: string; bar: string }> = {
  healthy: { label: "Healthy", cls: "border-healthy-border bg-healthy-soft text-healthy", bar: "bg-healthy" },
  at_risk: { label: "At Risk", cls: "border-risk-border bg-risk-soft text-risk", bar: "bg-risk" },
  critical: { label: "Critical", cls: "border-critical-border bg-critical-soft text-critical", bar: "bg-critical" },
};

export function StatusBadge({ health, className }: { health: ShowcaseHealth; className?: string }) {
  const s = healthStyle[health];
  return <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide", s.cls, className)}><span className="size-1.5 rounded-full bg-current" aria-hidden />{s.label}</span>;
}

export function ScoreValue({ score, size = "sm" }: { score: number; size?: "sm" | "xl" }) {
  const tone = score >= 70 ? "text-healthy" : score >= 45 ? "text-risk" : "text-critical";
  return <div aria-label={`WIN Score ${score} out of 100`} className="text-right">
    <div className={cn("font-semibold uppercase tracking-wider text-muted-foreground", size === "xl" ? "text-xs" : "text-[10px]")}>WIN Score</div>
    <div className={cn("font-bold tabular-nums leading-none", tone, size === "xl" ? "mt-2 text-7xl tracking-tight" : "mt-1 text-xl")}>{score}</div>
  </div>;
}

export function MetricCard({ label, value, className }: { label: string; value: ReactNode; className?: string }) {
  return <div className={cn("rounded-lg border border-border bg-card px-4 py-3", className)}><div className="text-xs font-medium text-muted-foreground">{label}</div><div className="mt-1 text-xl font-bold tabular-nums">{value}</div></div>;
}

export function DealRow({ deal }: { deal: ShowcaseDeal }) {
  const s = healthStyle[deal.health];
  return <Link to="/app/deals/$id" params={{ id: deal.id }} className="group relative flex items-start gap-4 overflow-hidden rounded-lg border border-border bg-card p-4 transition-colors hover:border-border-strong hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
    <span className={cn("absolute inset-y-0 left-0 w-1", s.bar)} aria-hidden />
    <div className="min-w-0 flex-1">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1"><span className="font-semibold">{deal.companyName}</span><span className="text-sm tabular-nums text-secondary-foreground">${Math.round(deal.value / 1000)}K</span><span className="text-xs text-muted-foreground">· {deal.stage}</span></div>
      <div className="mt-2 flex flex-wrap items-center gap-2"><StatusBadge health={deal.health} /><span className="text-sm text-secondary-foreground">{deal.risk}</span></div>
      <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-primary"><ArrowRight className="size-3.5" />{deal.nextAction}</div>
    </div>
    <ScoreValue score={deal.winScore} />
  </Link>;
}

export function SignalList({ kind, items }: { kind: "signal" | "risk"; items: string[] }) {
  const Icon: LucideIcon = kind === "signal" ? CheckCircle2 : AlertTriangle;
  return <ul className="space-y-3">{items.map((t) => <li key={t} className="flex items-center gap-3 text-sm font-medium"><Icon className={cn("size-4 shrink-0", kind === "signal" ? "text-healthy" : "text-risk")} aria-label={kind === "signal" ? "Buying signal" : "Risk"} />{t}</li>)}</ul>;
}

export function RiskCard({ kind, title, items }: { kind: "signal" | "risk"; title: string; items: string[] }) {
  return <div className={cn("rounded-xl border bg-card p-6", kind === "signal" ? "border-healthy-border" : "border-risk-border")}>
    <div className={cn("mb-5 inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-sm font-semibold", kind === "signal" ? "bg-healthy-soft text-healthy" : "bg-risk-soft text-risk")}>{kind === "signal" ? <CheckCircle2 className="size-4" /> : <AlertTriangle className="size-4" />}{title}</div>
    <SignalList kind={kind} items={items} />
  </div>;
}

export function AILabel({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-ai"><Sparkles className="size-3.5" aria-hidden />{children}</div>;
}

export function NextBestAction({ text, size = "sm", className }: { text: string; size?: "sm" | "lg"; className?: string }) {
  return <div className={cn("rounded-xl border border-ai/20 bg-card shadow-preview", size === "lg" ? "p-7" : "p-4", className)}>
    <AILabel>Next Best Action</AILabel>
    <p className={cn("mt-3 font-medium leading-snug", size === "lg" ? "text-xl sm:text-2xl" : "text-sm")}>{text}</p>
    <div className={cn("flex flex-wrap gap-2", size === "lg" ? "mt-6" : "mt-3")}>
      <Button size={size === "lg" ? "default" : "sm"} asChild><Link to="/app/deals/$id" params={{ id: "acme-corp" }}><Mail />Draft Email</Link></Button>
      {size === "lg" && <Button variant="outline" asChild><Link to="/app/deals/$id" params={{ id: "acme-corp" }}><ListTodo />Create Task</Link></Button>}
    </div>
  </div>;
}

export function AIInsightCard({ title, children, className, ...rest }: { title: string; children: ReactNode } & ComponentPropsWithoutRef<"div">) {
  return <div className={cn("rounded-xl border border-ai/20 bg-ai-soft p-6", className)} {...rest}><AILabel>{title}</AILabel><div className="mt-4">{children}</div></div>;
}

const stakeholderStyle: Record<StakeholderStatus, { label: string; cls: string }> = {
  at_risk: { label: "At Risk", cls: "border-risk-border bg-risk-soft text-risk" },
  champion: { label: "Champion", cls: "border-healthy-border bg-healthy-soft text-healthy" },
  not_engaged: { label: "Not Engaged", cls: "border-border-strong bg-muted text-secondary-foreground" },
};

export function StakeholderCard({ name, role, status, lastActivity }: { name: string; role: string; status: StakeholderStatus; lastActivity?: string }) {
  const s = stakeholderStyle[status];
  const initials = name.split(" ").map((p) => p[0]).join("");
  return <div className="rounded-xl border border-border bg-card p-5">
    <div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-full bg-muted text-sm font-bold text-secondary-foreground" aria-hidden>{initials}</div><div className="min-w-0"><div className="font-semibold">{name}</div><div className="text-sm text-muted-foreground">{role}</div></div></div>
    <div className="mt-4 flex items-center justify-between gap-2 border-t border-border pt-4"><span className={cn("rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide", s.cls)}>{s.label}</span><span className="text-xs text-muted-foreground">{lastActivity ? `Last activity: ${lastActivity}` : "No recorded activity"}</span></div>
  </div>;
}
