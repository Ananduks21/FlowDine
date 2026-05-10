import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useContactModal } from "../context/ContactModalContext";
import { MessageCircle, Mail, Calendar, Wrench, Users, LifeBuoy, ArrowRight, Loader2, HelpCircle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Section = ({ children, className = "" }) => (
  <section className={`max-w-7xl mx-auto px-5 lg:px-10 ${className}`}>{children}</section>
);
const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e4839]/8 text-[#0e4839] text-xs font-mono uppercase tracking-wider">{children}</span>
);

const cards = [
  { icon: MessageCircle, t: "WhatsApp Support", d: "Fastest channel for live operational issues during service hours.", cta: "Chat now", href: "https://wa.me/919999999999" },
  { icon: Mail, t: "Email Support", d: "For non-urgent queries, billing questions, and feature requests.", cta: "Email us", href: "mailto:support@flowdine.app" },
  { icon: Calendar, t: "Demo Assistance", d: "Walkthroughs tailored to your menu, floor, and shift patterns.", cta: "Book demo", action: true },
  { icon: Wrench, t: "Setup Help", d: "Hardware setup, printer configuration, and first-night standby.", cta: "Get help", action: true },
  { icon: Users, t: "Staff Training", d: "60-minute video session that gets your full team productive.", cta: "Schedule", action: true },
  { icon: LifeBuoy, t: "Technical Support", d: "Internet outages, app errors, performance — we're on call 24/7.", cta: "Open ticket", action: true },
];

const faqs = [
  { q: "How do I set up QR ordering?", a: "We generate unique QR codes for every table after onboarding. Print them, paste them, and you're live. No app install required for guests." },
  { q: "Can I split bills?", a: "Yes — split by item, by guest, or by amount. Combine UPI + cash + card on a single bill in any combination." },
  { q: "Does FlowDine support UPI?", a: "Fully. We integrate with all major UPI apps (GPay, PhonePe, Paytm, BHIM) and your existing payment gateway for cards." },
  { q: "How long does onboarding take?", a: "Most restaurants are live within 48 hours including menu import, table setup, and a 60-minute team training." },
  { q: "Can staff be trained easily?", a: "Yes. Our UI is designed to onboard a new waiter in 30 minutes. We also include a video training module that's role-based." },
  { q: "Does it work on tablets?", a: "Any Android tablet (8\"+) works for waiter and kitchen apps. We can recommend exact models or include hardware as an add-on." },
];

const SupportPage = () => {
  const { setOpen } = useContactModal();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", restaurant: "", phone: "", email: "", issueType: "", message: "" });

  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in name, phone, and email.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      toast.success("Support request received. We'll respond within 4 hours.");
      setForm({ name: "", restaurant: "", phone: "", email: "", issueType: "", message: "" });
      setTimeout(() => setSuccess(false), 3500);
    }, 900);
  };

  return (
    <main data-testid="support-page" className="pt-32 lg:pt-40 pb-24">
      {/* Hero */}
      <Section className="relative overflow-hidden pb-12">
        <div className="absolute -top-32 -right-40 w-[500px] h-[500px] rounded-full bg-[#0e4839]/8 blur-[120px]" />
        <div className="relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Pill><span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" /> Support team online</Pill>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-[#08291f]">
              We're Here When Your Restaurant Needs <span className="text-[#0e4839]">Help</span>
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-[#2a3e36] max-w-2xl leading-relaxed">
              Get support for onboarding, operations, billing, setup, and technical assistance — typically within 4 hours, often within minutes during service.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 text-sm">
              <div className="px-4 py-2 rounded-full bg-white border border-[#0e4839]/10 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#22c55e]" /> Avg response: 18 min</div>
              <div className="px-4 py-2 rounded-full bg-white border border-[#0e4839]/10 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#f59e0b]" /> 24/7 service hours</div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#08291f] rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#f59e0b]/15 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#f59e0b] flex items-center justify-center"><LifeBuoy className="w-5 h-5 text-[#08291f]" /></div>
                  <div>
                    <p className="font-mono text-[10px] text-[#f59e0b] uppercase tracking-widest">Live status</p>
                    <p className="font-display text-lg font-bold text-[#faf8f3]">All systems operational</p>
                  </div>
                </div>
                <div className="space-y-2 mt-5">
                  {[["Platform", "Operational"], ["Payments", "Operational"], ["Notifications", "Operational"]].map(([n, s], i) => (
                    <div key={i} className="flex items-center justify-between bg-[#0e4839]/40 rounded-lg px-3 py-2">
                      <span className="text-sm text-[#e9e3d2]">{n}</span>
                      <span className="flex items-center gap-2 text-xs text-[#22c55e]"><span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" /> {s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Support options */}
      <Section className="py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Pill>Pick a channel</Pill>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#08291f] leading-tight">Six ways to reach us.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <div key={i} data-testid={`support-card-${i}`} className="group bg-white rounded-2xl p-7 border border-[#0e4839]/8 hover:border-[#f59e0b]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0e4839] flex items-center justify-center mb-4 group-hover:bg-[#f59e0b] transition-colors">
                <c.icon className="w-5 h-5 text-[#f59e0b] group-hover:text-[#08291f]" strokeWidth={2.2} />
              </div>
              <h4 className="font-display text-xl font-bold text-[#08291f]">{c.t}</h4>
              <p className="mt-2 text-sm text-[#2a3e36]/75 leading-relaxed min-h-[3rem]">{c.d}</p>
              {c.action ? (
                <button onClick={() => setOpen(true)} className="mt-5 inline-flex items-center gap-1 text-[#0e4839] font-semibold text-sm group-hover:gap-2 transition-all">{c.cta} <ArrowRight className="w-4 h-4" /></button>
              ) : (
                <a href={c.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-[#0e4839] font-semibold text-sm group-hover:gap-2 transition-all">{c.cta} <ArrowRight className="w-4 h-4" /></a>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Pill><HelpCircle className="w-3 h-3" /> Quick help</Pill>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#08291f] leading-tight">Common questions.</h2>
            <p className="mt-5 text-[#2a3e36]/80">Most issues are resolved in seconds. Browse below or send us a message.</p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} data-testid={`support-faq-${i}`} className="bg-white border border-[#0e4839]/10 rounded-2xl px-6 data-[state=open]:border-[#0e4839]/30 data-[state=open]:shadow-[0_15px_30px_-15px_rgba(8,41,31,0.15)] transition-all">
                  <AccordionTrigger className="font-display text-base lg:text-lg font-semibold text-[#08291f] py-5 hover:no-underline text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-[#2a3e36]/85 text-base leading-relaxed pb-5">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Support form */}
      <Section className="py-16">
        <div className="bg-white rounded-3xl border border-[#0e4839]/10 overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-5 bg-[#08291f] p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#f59e0b]/15 rounded-full blur-3xl" />
            <div className="relative">
              <Pill><span className="text-[#f59e0b]">Direct line</span></Pill>
              <h2 className="mt-5 font-display text-3xl lg:text-4xl font-bold text-[#faf8f3] leading-tight">Send us a support request.</h2>
              <p className="mt-4 text-[#e9e3d2]/85">Real human reads every request. Most are answered within 4 hours.</p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-[#e9e3d2]"><Mail className="w-4 h-4 text-[#f59e0b]" /> support@flowdine.app</div>
                <div className="flex items-center gap-3 text-sm text-[#e9e3d2]"><MessageCircle className="w-4 h-4 text-[#f59e0b]" /> WhatsApp +91 99999 99999</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 p-10">
            {success ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#0e4839] flex items-center justify-center mb-5"><CheckCircle2 className="w-8 h-8 text-[#f59e0b]" /></div>
                <h3 className="font-display text-2xl font-bold text-[#08291f]">Got it.</h3>
                <p className="mt-2 text-[#2a3e36]">Our team will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Input data-testid="support-name" placeholder="Your name *" value={form.name} onChange={update("name")} className="h-11 rounded-xl bg-[#faf8f3] border-[#0e4839]/15" />
                  <Input data-testid="support-restaurant" placeholder="Restaurant name" value={form.restaurant} onChange={update("restaurant")} className="h-11 rounded-xl bg-[#faf8f3] border-[#0e4839]/15" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Input data-testid="support-phone" placeholder="Phone *" value={form.phone} onChange={update("phone")} className="h-11 rounded-xl bg-[#faf8f3] border-[#0e4839]/15" />
                  <Input data-testid="support-email" type="email" placeholder="Email *" value={form.email} onChange={update("email")} className="h-11 rounded-xl bg-[#faf8f3] border-[#0e4839]/15" />
                </div>
                <Select value={form.issueType} onValueChange={(v) => setForm(f => ({ ...f, issueType: v }))}>
                  <SelectTrigger data-testid="support-issue-type" className="h-11 rounded-xl bg-[#faf8f3] border-[#0e4839]/15">
                    <SelectValue placeholder="Issue type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="onboarding">Onboarding</SelectItem>
                    <SelectItem value="billing">Billing</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="training">Staff training</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea data-testid="support-message" placeholder="Describe your issue…" value={form.message} onChange={update("message")} rows={4} className="rounded-xl bg-[#faf8f3] border-[#0e4839]/15 resize-none" />
                <Button data-testid="support-submit" type="submit" disabled={submitting} className="w-full bg-[#0e4839] hover:bg-[#08291f] text-[#faf8f3] rounded-full h-12 font-semibold">
                  {submitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending…</> : <>Submit Support Request <ArrowRight className="w-4 h-4 ml-2" /></>}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <div className="bg-gradient-to-br from-[#0e4839] to-[#08291f] rounded-[2.5rem] p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-15" />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#f59e0b]/15 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-[#faf8f3] leading-[1.05]">Need Help Getting Started?</h2>
            <div className="mt-9 flex flex-wrap gap-3 justify-center">
              <Button data-testid="support-cta-demo" onClick={() => setOpen(true)} className="bg-[#f59e0b] hover:bg-[#fbbf24] text-[#08291f] rounded-full px-7 h-13 py-3.5 font-bold">Book Demo <ArrowRight className="w-4 h-4 ml-2" /></Button>
              <Button data-testid="support-cta-contact" onClick={() => setOpen(true)} variant="outline" className="border-2 border-[#faf8f3]/30 hover:border-[#faf8f3] hover:bg-[#faf8f3]/10 text-[#faf8f3] rounded-full px-7 h-13 py-3.5 font-semibold bg-transparent">Contact Support</Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default SupportPage;
