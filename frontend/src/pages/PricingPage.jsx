import { useState } from "react";
import { Check, Sparkles, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { useContactModal } from "../context/ContactModalContext";

const tiers = [
  {
    name: "Base",
    badge: "Starter",
    monthly: 999,
    description: "Perfect for cafés and small kitchens just getting started with digital ordering.",
    features: [
      "QR ordering",
      "Order management",
      "Basic billing",
      "Up to 10 tables",
      "Email support",
    ],
    accent: false,
  },
  {
    name: "Core",
    badge: "Most Popular",
    monthly: 1999,
    description: "Everything you need to run a full-service restaurant, end to end.",
    features: [
      "Everything in Base",
      "KOT system",
      "Table management",
      "Staff management & roles",
      "Split payments (UPI + cash)",
      "Up to 30 tables",
    ],
    accent: true,
  },
  {
    name: "Max",
    badge: "Pro",
    monthly: 2999,
    description: "For multi-brand groups and restaurants that obsess over data.",
    features: [
      "Everything in Core",
      "Live analytics & dashboards",
      "Reservations & token system",
      "Priority 24/7 support",
      "Unlimited tables",
      "Multi-outlet ready",
    ],
    accent: false,
  },
];

const PricingPage = () => {
  const [yearly, setYearly] = useState(false);
  const { setOpen } = useContactModal();

  const price = (m) => yearly ? Math.round(m * 12 * 0.8) : m;
  const sub = yearly ? "/year (save 20%)" : "/month";

  return (
    <main data-testid="pricing-page" className="pt-32 lg:pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e4839]/8 text-[#0e4839] text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> Pricing
          </span>
          <h1 className="mt-5 font-display text-5xl lg:text-6xl font-bold text-[#08291f] leading-[1.05]">
            One price.<br /><span className="text-[#0e4839]">Zero surprises.</span>
          </h1>
          <p className="mt-6 text-lg text-[#2a3e36]/85">No setup fees. Cancel anytime. Includes hardware setup support.</p>

          <div className="mt-9 inline-flex items-center gap-4 bg-white border border-[#0e4839]/15 rounded-full px-5 py-3 shadow-[0_8px_24px_-12px_rgba(8,41,31,0.15)]">
            <span className={`text-sm font-medium ${!yearly ? 'text-[#08291f]' : 'text-[#2a3e36]/50'}`}>Monthly</span>
            <Switch data-testid="billing-toggle" checked={yearly} onCheckedChange={setYearly} className="data-[state=checked]:bg-[#0e4839]" />
            <span className={`text-sm font-medium flex items-center gap-2 ${yearly ? 'text-[#08291f]' : 'text-[#2a3e36]/50'}`}>
              Yearly <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f59e0b]/20 text-[#a16207]">SAVE 20%</span>
            </span>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5 lg:gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              data-testid={`pricing-card-${tier.name.toLowerCase()}`}
              className={`relative rounded-3xl p-8 lg:p-10 border transition-all duration-300 ${
                tier.accent
                  ? "bg-[#08291f] text-[#faf8f3] border-[#08291f] shadow-[0_30px_60px_-20px_rgba(8,41,31,0.45)] lg:-translate-y-4"
                  : "bg-white border-[#0e4839]/10 hover:border-[#0e4839]/30 hover:-translate-y-1 shadow-[0_20px_40px_-25px_rgba(8,41,31,0.2)]"
              }`}
            >
              {tier.accent && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#f59e0b] text-[#08291f] text-xs font-mono uppercase tracking-wider font-bold">
                  ★ {tier.badge}
                </div>
              )}
              <div className="flex items-baseline justify-between mb-1">
                <span className={`font-mono text-xs uppercase tracking-widest ${tier.accent ? 'text-[#f59e0b]' : 'text-[#0e4839]'}`}>{tier.badge}</span>
              </div>
              <h3 className={`font-display text-3xl font-bold mb-3 ${tier.accent ? 'text-[#faf8f3]' : 'text-[#08291f]'}`}>{tier.name}</h3>
              <p className={`text-sm mb-6 min-h-[3rem] ${tier.accent ? 'text-[#e9e3d2]/80' : 'text-[#2a3e36]/75'}`}>{tier.description}</p>

              <div className="flex items-baseline gap-1 mb-7">
                <span className={`font-display text-5xl font-bold ${tier.accent ? 'text-[#faf8f3]' : 'text-[#08291f]'}`}>₹{price(tier.monthly).toLocaleString('en-IN')}</span>
                <span className={`text-sm ${tier.accent ? 'text-[#e9e3d2]/70' : 'text-[#2a3e36]/60'}`}>{sub}</span>
              </div>

              <Button
                data-testid={`pricing-cta-${tier.name.toLowerCase()}`}
                onClick={() => setOpen(true)}
                className={`w-full rounded-full h-12 font-semibold ${
                  tier.accent
                    ? "bg-[#f59e0b] hover:bg-[#fbbf24] text-[#08291f]"
                    : "bg-[#0e4839] hover:bg-[#08291f] text-[#faf8f3]"
                }`}
              >
                Get Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className={`my-7 h-px ${tier.accent ? 'bg-[#faf8f3]/15' : 'bg-[#0e4839]/10'}`} />

              <ul className="space-y-3">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${tier.accent ? 'bg-[#f59e0b]' : 'bg-[#0e4839]'}`}>
                      <Check className={`w-3 h-3 ${tier.accent ? 'text-[#08291f]' : 'text-[#f59e0b]'}`} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${tier.accent ? 'text-[#e9e3d2]' : 'text-[#2a3e36]'}`}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div data-testid="pricing-faq" className="mt-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e4839]/8 text-[#0e4839] text-xs font-mono uppercase tracking-wider">
              <HelpCircle className="w-3 h-3" /> FAQ
            </span>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#08291f] leading-tight">Questions, answered.</h2>
            <p className="mt-5 text-[#2a3e36]/80">Still unsure? Drop us a message — we reply within 24 hours.</p>
            <Button data-testid="faq-contact-btn" onClick={() => setOpen(true)} className="mt-6 bg-[#0e4839] hover:bg-[#08291f] text-[#faf8f3] rounded-full px-6 h-11 font-semibold">
              Talk to us →
            </Button>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "Is there a setup fee or contract lock-in?",
                  a: "No setup fees and no lock-in. You pay month to month and can cancel anytime. Annual plans get a 20% discount but are still cancellable mid-cycle (we refund unused months pro-rata).",
                },
                {
                  q: "How long does onboarding take?",
                  a: "Most restaurants are live within 48 hours. We import your menu, configure tables, train your staff over a 60-minute video session, and stay on standby for the first weekend.",
                },
                {
                  q: "Does FlowDiner work without internet?",
                  a: "Yes. The waiter and kitchen apps queue orders locally and sync the moment connectivity returns. You will never lose an order to a network drop.",
                },
                {
                  q: "Which payment methods are supported?",
                  a: "All Indian payment methods — UPI (any app), cash, debit/credit cards via your existing payment gateway, and split payments combining any of the above on a single bill.",
                },
                {
                  q: "Can I switch plans later?",
                  a: "Anytime. Upgrade with a single click — billing pro-rates automatically. Downgrades take effect at the next billing cycle.",
                },
                {
                  q: "Do you support multiple outlets?",
                  a: "Yes, on the Max plan and above. You get a consolidated dashboard across all outlets with role-based access for managers and central-kitchen support.",
                },
                {
                  q: "What hardware do I need?",
                  a: "Any Android tablet or phone for waiters and kitchen, plus a thermal printer for KOT. We can recommend exact models or include pre-configured hardware as an add-on.",
                },
                {
                  q: "Is my data safe?",
                  a: "Your data is encrypted in transit and at rest, hosted on Indian data centres, and exportable as CSV at any time. We never share or sell customer data.",
                },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  data-testid={`faq-item-${i}`}
                  className="bg-white border border-[#0e4839]/10 rounded-2xl px-6 data-[state=open]:border-[#0e4839]/30 data-[state=open]:shadow-[0_15px_30px_-15px_rgba(8,41,31,0.15)] transition-all"
                >
                  <AccordionTrigger className="font-display text-base lg:text-lg font-semibold text-[#08291f] py-5 hover:no-underline text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#2a3e36]/85 text-base leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="mt-24 bg-[#08291f] rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#f59e0b]/15 rounded-full blur-3xl" />
          <div className="relative">
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-[#faf8f3]">Running a chain or franchise?</h3>
            <p className="mt-4 text-[#e9e3d2]/85 max-w-xl mx-auto">We have custom plans for multi-outlet groups with consolidated dashboards and central kitchen support.</p>
            <Button data-testid="enterprise-cta" onClick={() => setOpen(true)} className="mt-7 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#08291f] rounded-full px-7 h-12 font-semibold">
              Talk to sales →
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PricingPage;

