import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Database, LoaderCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/components/win-deals/page-meta";

export const Route = createFileRoute("/app/connect")({
  head: () => pageMeta("Connect HubSpot", "Connect and sync a CRM with WIN DEALS.", false, "/app/connect"),
  component: Connect,
});

function Connect() {
  const [state, setState] = useState<"idle" | "syncing" | "done">("idle");
  const navigate = useNavigate();
  const sync = () => {
    setState("syncing");
    setTimeout(() => setState("done"), 1300);
  };

  return (
    <div className="mx-auto max-w-2xl py-8">
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <span className="grid size-5 place-items-center rounded-full bg-primary text-xs text-primary-foreground">2</span>
          Connect your CRM
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary"><div className="h-full w-full bg-primary" /></div>
      </div>
      <h1 className="text-3xl font-bold">Bring your pipeline into focus</h1>
      <p className="mt-2 text-secondary-foreground">This demo connection imports deals, contacts, and recent activity.</p>
      <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-card">
        <div className="flex items-center gap-4">
          <span className="grid size-12 place-items-center rounded-xl bg-hubspot-soft text-hubspot"><Database /></span>
          <div className="flex-1"><h2 className="font-semibold">HubSpot</h2><p className="text-sm text-muted-foreground">Deals, contacts, email and meeting activity</p></div>
          {state === "done" && <span className="flex items-center gap-1 text-sm font-semibold text-healthy"><Check className="size-4" />Connected</span>}
        </div>
        <div className="mt-6 rounded-lg bg-muted p-4 text-sm text-secondary-foreground">WIN DEALS uses read-only demo data in this MVP. No changes will be made to your CRM.</div>
        <Button className="mt-6 w-full" onClick={state === "done" ? () => navigate({ to: "/app/dashboard" }) : sync}>
          {state === "syncing" ? <LoaderCircle className="animate-spin" /> : state === "done" ? <Check /> : <RefreshCw />}
          {state === "syncing" ? "Syncing 25 deals..." : state === "done" ? "Open dashboard" : "Connect & Sync"}
        </Button>
      </div>
    </div>
  );
}