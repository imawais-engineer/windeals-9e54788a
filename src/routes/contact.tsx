import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle, ArrowRight, CheckCircle2, Mail, MessageSquare, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { pageMeta } from "@/components/win-deals/page-meta";
import { PageHero, PublicPage } from "@/components/marketing/public-page";
import { section, wrap } from "@/components/marketing/home-sections";
import { CONTACT_EMAIL } from "@/data/legal";
import { contactSchema, contactTopics, submitContact, type ContactInput } from "@/lib/contact";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta("Contact WIN DEALS", "Get in touch with WIN DEALS about the product, early access, partnerships, or feedback.", true),
  component: Contact,
});

const faqs: [string, string][] = [
  ["What is WIN DEALS?", "WIN DEALS is an AI Deal Intelligence platform that analyzes your CRM pipeline to identify deal risk, buying signals, and recommended next actions."],
  ["Can I get early access?", "Yes. Use the contact form and select Early Access, or use the Get Started CTA."],
  ["Which CRM do you support?", "WIN DEALS is initially focused on HubSpot."],
  ["Can I give product feedback?", "Absolutely. Select Feedback in the contact form and tell us what you think."],
];

type Status = "idle" | "sending" | "success" | "error";

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const form = useForm<ContactInput>({ resolver: zodResolver(contactSchema), defaultValues: { name: "", email: "", company: "", topic: "Product question", message: "" } });
  const onSubmit = async (v: ContactInput) => {
    setStatus("sending");
    try { await submitContact(v); setStatus("success"); } catch { setStatus("error"); }
  };
  if (status === "success") return <div role="status" className="rounded-xl border border-healthy-border bg-healthy-soft p-6">
    <div className="flex items-center gap-2 font-semibold text-healthy"><CheckCircle2 className="size-5" aria-hidden />Your message is ready to send</div>
    <p className="mt-2 text-secondary-foreground">We opened your email app with your message filled in. Send it from there and we'll get back to you as soon as possible. If nothing opened, email us at <a className="font-medium text-primary underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    <Button variant="outline" className="mt-5" onClick={() => { form.reset(); setStatus("idle"); }}>Write another message</Button>
  </div>;
  return <Form {...form}><form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
    {status === "error" && <div role="alert" className="rounded-lg border border-critical-border bg-critical-soft p-4 text-sm">
      <div className="flex items-center gap-2 font-semibold text-critical"><AlertTriangle className="size-4" aria-hidden />Something went wrong</div>
      <p className="mt-1 text-secondary-foreground">We couldn't send your message. Please try again or email us directly at <a className="font-medium text-primary hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    </div>}
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField control={form.control} name="name" render={({ field }) => <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your name" autoComplete="name" {...field} /></FormControl><FormMessage /></FormItem>} />
      <FormField control={form.control} name="email" render={({ field }) => <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="you@company.com" autoComplete="email" {...field} /></FormControl><FormMessage /></FormItem>} />
    </div>
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField control={form.control} name="company" render={({ field }) => <FormItem><FormLabel>Company <span className="font-normal text-muted-foreground">(optional)</span></FormLabel><FormControl><Input placeholder="Your company" autoComplete="organization" {...field} /></FormControl><FormMessage /></FormItem>} />
      <FormField control={form.control} name="topic" render={({ field }) => <FormItem><FormLabel>What can we help with?</FormLabel><Select value={field.value} onValueChange={field.onChange}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent>{contactTopics.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent></Select><FormMessage /></FormItem>} />
    </div>
    <FormField control={form.control} name="message" render={({ field }) => <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea rows={6} placeholder="Tell us how we can help..." {...field} /></FormControl><FormMessage /></FormItem>} />
    <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">{status === "sending" ? "Sending..." : <>Send message <ArrowRight /></>}</Button>
  </form></Form>;
}

function Contact() {
  return <PublicPage>
    <PageHero eyebrow="Contact WIN DEALS" title={<>Have a question? <span className="font-editorial font-normal italic tracking-normal text-lime">Let's talk.</span></>} body="Whether you're interested in WIN DEALS, early access, partnerships, or simply want to learn more, we'd like to hear from you." />
    <section className={section}><div className={cn(wrap, "grid gap-10 lg:grid-cols-[0.8fr_1.2fr]")}>
      <div>
        <h2 className="text-2xl font-bold">Get in touch</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card"><div className="flex items-center gap-2 font-semibold"><Rocket className="size-4 text-primary" aria-hidden />Product & Sales</div><p className="mt-2 text-secondary-foreground">Interested in trying WIN DEALS or joining early access?</p><Link to="/signup" className="mt-3 inline-flex items-center gap-1.5 font-medium text-primary hover:underline">Get started <ArrowRight className="size-4" aria-hidden /></Link></div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-card"><div className="flex items-center gap-2 font-semibold"><MessageSquare className="size-4 text-primary" aria-hidden />General questions</div><p className="mt-2 text-secondary-foreground">Have a question about WIN DEALS?</p><a href={`mailto:${CONTACT_EMAIL}`} className="mt-3 inline-flex items-center gap-1.5 font-medium text-primary hover:underline"><Mail className="size-4" aria-hidden />{CONTACT_EMAIL}</a></div>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8"><h2 className="mb-6 text-2xl font-bold">Send us a message</h2><ContactForm /></div>
    </div></section>
    <section className={cn(section, "border-t border-border bg-card pt-16")}><div className={cn(wrap, "max-w-3xl")}>
      <h2 className="text-center text-[32px] font-bold tracking-[-0.03em]">Common questions</h2>
      <Accordion type="single" collapsible className="mt-8">{faqs.map(([q, a]) => <AccordionItem key={q} value={q}><AccordionTrigger className="text-left text-base font-semibold">{q}</AccordionTrigger><AccordionContent className="text-[15px] leading-relaxed text-secondary-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion>
    </div></section>
  </PublicPage>;
}
