import { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
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

        <div className="mt-20 bg-[#faf8f3] border border-[#0e4839]/10 rounded-3xl p-10 lg:p-14 text-center">
          <h3 className="font-display text-3xl lg:text-4xl font-bold text-[#08291f]">Running a chain or franchise?</h3>
          <p className="mt-4 text-[#2a3e36]/80 max-w-xl mx-auto">We have custom plans for multi-outlet groups with consolidated dashboards and central kitchen support.</p>
          <Button data-testid="enterprise-cta" onClick={() => setOpen(true)} className="mt-7 bg-[#0e4839] hover:bg-[#08291f] text-[#faf8f3] rounded-full px-7 h-12 font-semibold">
            Talk to sales →
          </Button>
        </div>
      </div>
    </main>
  );
};

export default PricingPage;
