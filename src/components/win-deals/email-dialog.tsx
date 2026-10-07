import { useState } from "react";
import { Check, Copy, Pencil } from "lucide-react";
import type { Deal } from "@/data/deals";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export function EmailDialog({ deal, open, onOpenChange }: { deal?: Deal; open: boolean; onOpenChange: (open: boolean) => void }) {
  const [editing, setEditing] = useState(false); const [copied, setCopied] = useState(false);
  if (!deal) return null;
  const subject = `Next steps for ${deal.name}`;
  const body = `Hi ${deal.stakeholders[0]?.name.split(" ")[0] ?? "there"},\n\nThanks again for the conversation. Based on your priorities, I wanted to make the next step simple. ${deal.nextAction}\n\nWould Thursday work for a quick alignment?\n\nBest,\nAwais`;
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="max-w-2xl"><DialogHeader><DialogTitle>AI-drafted follow-up</DialogTitle><DialogDescription>Tailored to recent signals and risks in {deal.name}.</DialogDescription></DialogHeader><div className="space-y-4"><div><label className="mb-1.5 block text-xs font-semibold text-secondary-foreground">Subject</label><Input defaultValue={subject} readOnly={!editing} /></div><div><label className="mb-1.5 block text-xs font-semibold text-secondary-foreground">Message</label><Textarea defaultValue={body} readOnly={!editing} className="min-h-64 leading-relaxed" /></div></div><DialogFooter className="gap-2"><Button variant="outline" onClick={() => setEditing(v=>!v)}><Pencil />{editing ? "Done editing" : "Edit"}</Button><Button onClick={async()=>{ await navigator.clipboard?.writeText(`${subject}\n\n${body}`); setCopied(true); }}><>{copied ? <Check /> : <Copy />}{copied ? "Copied" : "Copy email"}</></Button></DialogFooter></DialogContent></Dialog>;
}
