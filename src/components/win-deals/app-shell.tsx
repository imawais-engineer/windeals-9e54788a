import { Link, useRouterState } from "@tanstack/react-router";
import { BarChart3, BriefcaseBusiness, Lightbulb, Settings, RefreshCw, Menu, X, LogOut } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";

const nav = [
  { to: "/app/dashboard", label: "Command Center", icon: BarChart3 },
  { to: "/app/deals", label: "Deals", icon: BriefcaseBusiness },
  { to: "/app/insights", label: "Insights", icon: Lightbulb },
  { to: "/app/settings", label: "Settings", icon: Settings },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  return <div className="min-h-screen bg-background">
    <Button variant="outline" size="icon" aria-label="Open navigation" className="fixed left-4 top-4 z-40 md:hidden" onClick={() => setOpen(true)}><Menu /></Button>
    {open && <button aria-label="Close navigation overlay" className="fixed inset-0 z-40 bg-overlay md:hidden" onClick={() => setOpen(false)} />}
    <aside className={cn("fixed inset-y-0 left-0 z-50 flex w-60 flex-col border-r border-border bg-card transition-transform md:translate-x-0", open ? "translate-x-0" : "-translate-x-full")}>
      <div className="flex h-20 items-center justify-between border-b border-border px-5">
        <Link to="/app/dashboard" className="flex items-center gap-3" onClick={() => setOpen(false)}><Logo /></Link>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Close navigation" onClick={() => setOpen(false)}><X /></Button>
      </div>
      <nav className="flex-1 space-y-1 p-3">{nav.map(({to,label,icon:Icon}) => <Link key={to} to={to} onClick={() => setOpen(false)} className={cn("flex h-10 items-center gap-2.5 rounded-lg px-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent", path.startsWith(to) && "bg-brand-soft text-primary")}><Icon className="size-4" />{label}</Link>)}</nav>
      <div className="border-t border-border p-4"><div className="mb-4 flex items-center gap-2 rounded-lg bg-healthy-soft px-3 py-2 text-xs font-medium text-healthy"><RefreshCw className="size-3.5" /> CRM synced 4m ago</div><div className="flex items-center gap-3"><div className="grid size-9 place-items-center rounded-full bg-secondary text-xs font-bold">AW</div><div className="min-w-0 flex-1"><div className="truncate text-sm font-semibold">Awais</div><div className="truncate text-xs text-muted-foreground">awais@windeals.me</div></div><Link to="/" title="Sign out" aria-label="Sign out"><LogOut className="size-4 text-muted-foreground" /></Link></div></div>
    </aside>
    <main className="min-h-screen md:pl-60"><div className="mx-auto max-w-[1480px] px-4 pb-12 pt-20 sm:px-6 md:px-8 md:pt-8">{children}</div></main>
  </div>;
}
