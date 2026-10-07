import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
export function PublicHeader({ atmospheric = false }: { atmospheric?: boolean }){return <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"><Link to="/" className="flex items-center gap-2.5"><Logo atmospheric={atmospheric} /></Link><nav className="flex items-center gap-2"><Button variant="ghost" asChild><Link to="/login">Log in</Link></Button><Button asChild><Link to="/signup">Get Started</Link></Button></nav></header>}
