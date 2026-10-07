import { cn } from "@/lib/utils";

/** Apex W: two sharp valleys around an ascending central arrow. */
export function Logo({ compact = false, atmospheric = false, className }: {
  compact?: boolean;
  atmospheric?: boolean;
  className?: string;
}) {
  return <span className={cn("inline-flex shrink-0 items-center gap-2.5", className)} role="img" aria-label="WIN DEALS — AI Deal Intelligence">
    <svg viewBox="0 0 40 40" aria-hidden="true" className={cn("size-9 shrink-0", atmospheric ? "text-lime" : "text-primary")} fill="currentColor">
      <path d="M2 9h6l5 19 4-14h-5L20 3l8 11h-5l4 14 5-19h6l-9 28h-5l-4-15-4 15h-5Z" />
    </svg>
    {!compact && <span className="min-w-0 text-left">
      <strong className={cn("block whitespace-nowrap text-sm font-extrabold leading-5", atmospheric ? "text-hero-foreground" : "text-foreground")}>WIN DEALS</strong>
      <span className={cn("block whitespace-nowrap text-[8px] font-semibold leading-4", atmospheric ? "text-hero-muted" : "text-muted-foreground")}>AI DEAL INTELLIGENCE</span>
    </span>}
  </span>;
}