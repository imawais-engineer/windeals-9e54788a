import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SiteHeader } from "./site-header";
import { Footer, wrap } from "./home-sections";

export interface PublicPageProps { children: ReactNode }

/** Shared shell for public pages: same navbar and footer as the homepage. */
export function PublicPage({ children }: PublicPageProps) {
  return <div className="min-h-screen bg-background">
    <SiteHeader />
    <main id="main">{children}</main>
    <Footer />
  </div>;
}

export interface PageHeroProps { eyebrow: string; title: ReactNode; body?: ReactNode; center?: boolean; children?: ReactNode }

export function PageHero({ eyebrow, title, body, center, children }: PageHeroProps) {
  return <section className="premium-hero border-b border-hero-border">
    <div className={cn(wrap, "py-16 sm:py-20 lg:py-24", center && "text-center")}>
      <p className="text-xs font-semibold uppercase tracking-wider text-mint">{eyebrow}</p>
      <h1 className={cn("mt-4 max-w-3xl text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-hero-foreground sm:text-[52px]", center && "mx-auto")}>{title}</h1>
      {body && <p className={cn("mt-5 max-w-2xl text-lg leading-relaxed text-hero-muted", center && "mx-auto")}>{body}</p>}
      {children}
    </div>
  </section>;
}
