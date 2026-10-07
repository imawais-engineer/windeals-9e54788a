import type { DealHealth } from "@/data/deals";
import { cn } from "@/lib/utils";

export function HealthBadge({ health }: { health: DealHealth }) {
  return <span className={cn("inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-semibold", health === "Healthy" && "bg-healthy-soft text-healthy", health === "At Risk" && "bg-risk-soft text-risk", health === "Critical" && "bg-critical-soft text-critical")}><span className="size-1.5 rounded-full bg-current" />{health}</span>;
}
