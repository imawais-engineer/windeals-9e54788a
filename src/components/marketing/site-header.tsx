import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/win-deals/logo";

export const marketingNav = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#early-access", label: "Pricing" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border bg-card/85 backdrop-blur-md">
    <div className="mx-auto flex h-[70px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
      <Link to="/" aria-label="WIN DEALS home"><Logo /></Link>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main">{marketingNav.map((n) => <a key={n.href} href={n.href} className="text-sm font-medium text-secondary-foreground transition-colors hover:text-foreground">{n.label}</a>)}</nav>
      <div className="hidden items-center gap-2 md:flex"><Button variant="ghost" asChild><Link to="/login">Log in</Link></Button><Button asChild><Link to="/signup">Get started <ArrowRight /></Link></Button></div>
      <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <div className="border-t border-border bg-card px-5 pb-5 md:hidden">
      <nav className="flex flex-col py-2" aria-label="Mobile">{marketingNav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium">{n.label}</a>)}</nav>
      <div className="grid gap-2 border-t border-border pt-4"><Button variant="outline" asChild><Link to="/login">Log in</Link></Button><Button asChild><Link to="/signup">Get started <ArrowRight /></Link></Button></div>
    </div>}
  </header>;
}
