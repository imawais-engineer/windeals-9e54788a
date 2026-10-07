import { cn } from "@/lib/utils";
export function WinScore({ score, large = false }: { score: number; large?: boolean }) {
  const tone = score >= 70 ? "text-healthy" : score >= 45 ? "text-risk" : "text-critical";
  return <div aria-label={`WIN Score™: ${score} out of 100`} title="WIN Score™" className={cn("font-semibold tabular-nums", tone, large ? "text-4xl" : "text-sm")}><span>{score}</span><span className={cn("text-muted-foreground", large ? "text-base" : "text-xs")}>/100</span></div>;
}
