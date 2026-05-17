import { useContactModal } from "../context/ContactModalContext";
import { Button } from "../components/ui/button";
import { ArrowRight, ArrowUpRight, ScanLine, Bell, Receipt, ChefHat, BarChart3, LayoutGrid, AlertTriangle, Zap, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

import DASH from "../assets/dashboard-preview.png";
import ORDER from "../assets/order-preview.png";
import PRODUCT from "../assets/product-preview.png";
import TABLE from "../assets/table-preview.png";
import HEADERIMG from "../assets/headerimg.png";

const Section = ({ children, className = "", id }) => (
  <section id={id} className={`max-w-7xl mx-auto px-5 lg:px-10 ${className}`}>{children}</section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e4839]/8 text-[#0e4839] text-xs font-mono uppercase tracking-wider">{children}</span>
);

// 1. HERO
const Hero = ({ openModal }) => (
  <Section className="pt-32 lg:pt-40 pb-16 lg:pb-24 relative overflow-hidden">
    <div className="absolute -top-32 -right-40 w-[640px] h-[640px] rounded-full bg-[#0e4839]/8 blur-[120px] pointer-events-none" />
    <div className="absolute top-40 -left-32 w-[400px] h-[400px] rounded-full bg-[#f59e0b]/15 blur-[100px] pointer-events-none" />

    <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative">
      <div className="lg:col-span-6 reveal">
        <Pill><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" /> Restaurant Operating System · v3</Pill>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-[#08291f]">
          Run Your Entire<br />Restaurant From<br />
          <span className="relative inline-block">
            One System
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M2 9C 80 2, 220 2, 298 9" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <p className="mt-7 text-lg lg:text-xl text-[#2a3e36] max-w-xl leading-relaxed">
          Orders, kitchen, billing, tables, and staff — all connected in real time. Built for restaurants that don't have time for chaos.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button data-testid="hero-demo-btn" onClick={openModal} className="bg-[#0e4839] hover:bg-[#08291f] text-[#faf8f3] rounded-full px-7 h-13 py-3.5 text-base font-semibold shadow-[0_18px_40px_-14px_rgba(14,72,57,0.55)] hover:shadow-[0_22px_50px_-12px_rgba(14,72,57,0.65)] transition-all">
            Get Demo <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Link to="/pricing">
            <Button data-testid="hero-pricing-btn" variant="outline" className="border-2 border-[#0e4839]/20 hover:border-[#0e4839] hover:bg-transparent text-[#08291f] rounded-full px-7 h-13 py-3.5 text-base font-semibold bg-transparent">
              View Pricing
            </Button>
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#2a3e36]/70">
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#0e4839]" /> Live in 48 hours</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#f59e0b]" /> No setup fees</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#0e4839]" /> 24/7 support</div>
        </div>
      </div>

      <div className="lg:col-span-6 relative reveal">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-[#0e4839]/10 via-transparent to-[#f59e0b]/15 rounded-[2rem] blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-[#0e4839]/10 shadow-[0_40px_80px_-30px_rgba(8,41,31,0.35)] bg-gradient-to-br from-[#eff7f0] via-[#ffffff] to-[#f7f3ea] animate-float">
            <img src={HEADERIMG} alt="FlowDiner header" className="w-full h-[420px] object-cover" />
          </div>
          <div className="hidden md:block absolute -bottom-8 -left-6 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(8,41,31,0.25)] border border-[#0e4839]/10 p-4 animate-float-slow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0e4839] flex items-center justify-center"><TrendingUp className="w-5 h-5 text-[#f59e0b]" /></div>
              <div>
                <p className="font-mono text-[10px] text-[#2a3e36]/60 uppercase">Today's revenue</p>
                <p className="font-display text-lg font-bold text-[#08291f]">₹84,212</p>
              </div>
              <span className="ml-2 text-xs font-bold text-[#0e4839] bg-[#0e4839]/10 px-2 py-1 rounded-full">+28%</span>
            </div>
          </div>
          <div className="hidden md:block absolute -top-5 -right-5 bg-[#08291f] text-[#faf8f3] rounded-2xl shadow-[0_20px_40px_-15px_rgba(8,41,31,0.4)] p-4 animate-float">
            <p className="font-mono text-[10px] text-[#f59e0b] uppercase mb-1">Active queue</p>
            <p className="font-display text-2xl font-bold">3 orders</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

// 2. PROBLEM
const Problem = () => {
  const items = [
    { icon: Clock, label: "Slow service during peak hours" },
    { icon: AlertTriangle, label: "Manual order errors" },
    { icon: ChefHat, label: "Poor kitchen coordination" },
    { icon: Receipt, label: "Billing delays & confusion" },
    { icon: BarChart3, label: "No real-time visibility" },
  ];
  return (
    <Section className="py-24 lg:py-32">
      <div className="max-w-3xl">
        <Pill>The reality</Pill>
        <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#08291f] leading-tight">Why Restaurants Struggle Today</h2>
        <p className="mt-4 text-lg text-[#2a3e36]/80 max-w-2xl">Five problems show up in almost every restaurant we visit. Each one quietly steals revenue.</p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map((it, i) => (
          <div key={i} className="group relative bg-white rounded-2xl p-6 border border-[#0e4839]/8 hover:border-[#f59e0b]/40 hover:-translate-y-1 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#f59e0b]/15 flex items-center justify-center mb-4 group-hover:bg-[#f59e0b]/25 transition-colors">
              <it.icon className="w-5 h-5 text-[#0e4839]" strokeWidth={2.2} />
            </div>
            <p className="font-display text-base font-semibold text-[#08291f] leading-snug">{it.label}</p>
            <span className="absolute top-4 right-4 font-mono text-[10px] text-[#2a3e36]/40">0{i+1}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

// 3. SOLUTION
const Solution = () => {
  const steps = [
    { label: "Customer scans QR", icon: ScanLine },
    { label: "Places order", icon: LayoutGrid },
    { label: "Kitchen receives instantly", icon: ChefHat },
    { label: "Status updates live", icon: Zap },
    { label: "Billing & closure", icon: Receipt },
  ];
  return (
    <Section className="py-24 lg:py-32">
      <div className="bg-[#08291f] rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#0e4839]/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#f59e0b]/15 blur-3xl" />
        <div className="relative">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f59e0b]/15 text-[#f59e0b] text-xs font-mono uppercase tracking-wider">The fix</span>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#faf8f3] leading-tight">One System. Complete Control.</h2>
            <p className="mt-4 text-lg text-[#e9e3d2]/85">From scan to settle — every step connected, in under a heartbeat.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="bg-[#0e4839]/40 backdrop-blur-md border border-[#faf8f3]/10 rounded-2xl p-5 text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-[#f59e0b] flex items-center justify-center mb-3">
                    <s.icon className="w-6 h-6 text-[#08291f]" strokeWidth={2.5} />
                  </div>
                  <p className="font-mono text-[10px] text-[#f59e0b] mb-1">STEP 0{i+1}</p>
                  <p className="font-display text-sm font-semibold text-[#faf8f3] leading-tight">{s.label}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 items-center justify-center text-[#f59e0b] z-10">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

// 4. FEATURE SHOWCASE
const Feature = ({ image, eyebrow, headline, description, points, reverse, accent }) => (
  <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reverse ? 'lg:[direction:rtl]' : ''}`}>
    <div className={`lg:col-span-6 lg:[direction:ltr] reveal`}>
      <span className="font-mono text-xs uppercase tracking-widest text-[#f59e0b]">{eyebrow}</span>
      <h3 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-[#08291f] leading-[1.05]">{headline}</h3>
      <p className="mt-5 text-lg text-[#2a3e36]/85 leading-relaxed max-w-xl">{description}</p>
      <ul className="mt-7 space-y-3">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-1.5 w-5 h-5 rounded-full bg-[#0e4839] flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
            </div>
            <span className="text-[#2a3e36] font-medium">{p}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="lg:col-span-6 lg:[direction:ltr]">
      <div className="relative group">
        <div className={`absolute -inset-3 ${accent} rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition`} />
            <div className="relative rounded-3xl overflow-hidden border border-[#0e4839]/10 shadow-[0_30px_60px_-25px_rgba(8,41,31,0.3)] bg-white">
          {image ? (
            <img src={image} alt={headline} className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500" />
          ) : (
            <div className="w-full h-[360px] bg-[#f4f7f3] flex items-center justify-center text-[#0e4839]/70 text-sm font-medium">
              Visual preview unavailable
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const FeatureShowcase = () => (
  <Section className="py-24 lg:py-32 space-y-32">
    <div className="text-center max-w-2xl mx-auto">
      <Pill>Built from real workflows</Pill>
      <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#08291f] leading-tight">Real screens. Real workflows. Real results.</h2>
    </div>

    <Feature
      image={TABLE}
      eyebrow="Tables · Floor plan"
      headline="Track Every Table in Real-Time"
      description="A live floor plan that shows every table's status — busy, free, reserved, bill requested, waiter called. Your manager sees the entire restaurant at a glance, from anywhere."
      points={["5 status types: Busy, Free, Reserved, Bill Requested, Waiter Called", "One-tap assign and free", "Reserved tables auto-mark on arrival"]}
      accent="bg-[#0e4839]/15"
    />
    <Feature
      image={ORDER}
      eyebrow="Billing · Order bills"
      headline="Close Bills Faster, Without Errors"
      description="Active invoices, print-ready bills, and split-payment support — UPI, cash, card, partial payments. Closing a bill takes 90 seconds, not 9 minutes."
      points={["Mark Paid in one tap", "Print-ready KOT and customer bill", "Live total dues and payment status"]}
      reverse
      accent="bg-[#f59e0b]/20"
    />
    <Feature
      image={PRODUCT}
      eyebrow="Menu · Catalog"
      headline="Manage Your Menu Effortlessly"
      description="Add, edit, hide, or 86 a dish in real time. Add-ons, portion sizes, and live availability — all aligned with your POS catalog without any retraining."
      points={["Add-ons & portion variants", "Live / sold-out toggles", "Search and bulk update"]}
      accent="bg-[#0e4839]/15"
    />
    <Feature
      image={DASH}
      eyebrow="Analytics · Live"
      headline="See Your Restaurant Performance Live"
      description="Net revenue, today's orders, active queue, stock alerts, kitchen floor — every number you need on one screen, updated every second."
      points={["Live KPIs with daypart trends", "Best-seller volume tracking", "Stock alerts before you run out"]}
      reverse
      accent="bg-[#f59e0b]/20"
    />
  </Section>
);

// 5. BUILT FOR REAL PROBLEMS
const BuiltFor = () => {
  const items = [
    { n: "01", t: "Handle peak hour rush", d: "Throughput up 25% on Friday nights." },
    { n: "02", t: "Reduce staff dependency", d: "Onboard a new waiter in 30 minutes." },
    { n: "03", t: "Increase table turnover", d: "8 fewer minutes per table, every cover." },
    { n: "04", t: "Eliminate billing errors", d: "Disputes drop from 4% to under 0.5%." },
    { n: "05", t: "Improve service speed", d: "Order-to-kitchen in under 10 seconds." },
  ];
  return (
    <Section className="py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Pill>Real challenges</Pill>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#08291f] leading-tight">Designed for Real Restaurant Challenges</h2>
          <p className="mt-5 text-lg text-[#2a3e36]/80">Not a generic POS. A system shaped by the actual problems we saw on real floors.</p>
        </div>
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
          {items.map((it, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[#0e4839]/8 hover:bg-[#08291f] hover:text-[#faf8f3] hover:border-[#08291f] transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-xs text-[#0e4839] group-hover:text-[#f59e0b]">{it.n}</span>
                <ArrowUpRight className="w-4 h-4 text-[#0e4839]/40 group-hover:text-[#f59e0b] group-hover:rotate-12 transition-all" />
              </div>
              <h4 className="font-display text-xl font-bold mb-2">{it.t}</h4>
              <p className="text-sm text-[#2a3e36]/75 group-hover:text-[#e9e3d2]/85">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// 6. HOW IT WORKS
const HowItWorks = () => {
  const steps = ["Scan QR", "Place Order", "Kitchen prepares", "Serve", "Bill & close"];
  return (
    <Section className="py-24 lg:py-32">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <Pill>How it works</Pill>
        <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#08291f] leading-tight">Five steps. Zero chaos.</h2>
      </div>
      <div className="relative">
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-[#0e4839]/20" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-3 relative">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-[#faf8f3] border-2 border-[#0e4839]/15 flex items-center justify-center relative shadow-[0_12px_30px_-15px_rgba(8,41,31,0.3)]">
                <span className="font-display text-3xl font-bold text-[#0e4839]">{i+1}</span>
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#f59e0b] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#08291f]" />
                </div>
              </div>
              <p className="mt-5 font-display text-lg font-semibold text-[#08291f]">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// 7. ONE PLATFORM (single image)
const ProductGrid = () => (
  <Section className="py-24 lg:py-32">
    <div className="text-center max-w-2xl mx-auto mb-14">
      <Pill>One platform</Pill>
      <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#08291f] leading-tight">One Platform. Full Control.</h2>
      <p className="mt-5 text-lg text-[#2a3e36]/80">From the floor to the kitchen to the bill — everything you run, in one place.</p>
    </div>
    <div className="relative group">
      <div className="absolute -inset-6 bg-gradient-to-tr from-[#0e4839]/15 via-[#f59e0b]/15 to-[#0e4839]/10 rounded-[2.5rem] blur-2xl opacity-70 group-hover:opacity-100 transition" />
      <div className="relative rounded-[2.5rem] overflow-hidden border border-[#0e4839]/10 shadow-[0_40px_80px_-30px_rgba(8,41,31,0.35)]">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=2000&q=85"
          alt="FlowDine — one platform, full control"
          className="w-full h-[320px] sm:h-[460px] lg:h-[600px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08291f]/80 via-[#08291f]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f59e0b] text-[#08291f] text-xs font-mono uppercase tracking-wider font-bold mb-4">All-in-one</span>
              <h3 className="font-display text-3xl lg:text-5xl font-bold text-[#faf8f3] leading-[1.1]">From scan to settle.<br />One unified system.</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {["QR Ordering", "Live Tables", "KOT", "Billing", "Analytics"].map(t => (
                <span key={t} className="px-4 py-2 rounded-full bg-[#faf8f3]/15 backdrop-blur-md border border-[#faf8f3]/20 text-[#faf8f3] text-xs font-mono uppercase tracking-wider">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

// 8. CTA
const FinalCTA = ({ openModal }) => (
  <Section className="py-24 lg:py-32">
    <div className="bg-gradient-to-br from-[#0e4839] to-[#08291f] rounded-[2.5rem] p-10 lg:p-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#f59e0b]/20 rounded-full blur-3xl" />
      <div className="relative">
        <Pill><span className="text-[#f59e0b]">Stop managing</span></Pill>
        <h2 className="mt-6 font-display text-5xl lg:text-7xl font-bold text-[#faf8f3] leading-[1.02]">
          Stop Managing.<br /><span className="text-[#f59e0b]">Start Controlling.</span>
        </h2>
        <p className="mt-7 text-xl text-[#e9e3d2]/85 max-w-xl mx-auto">This is not just software. This is how restaurants run.</p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Button data-testid="cta-demo-btn" onClick={openModal} className="bg-[#f59e0b] hover:bg-[#fbbf24] text-[#08291f] rounded-full px-8 h-14 text-base font-bold shadow-[0_20px_40px_-12px_rgba(245,158,11,0.5)]">
            Get Demo <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button data-testid="cta-contact-btn" onClick={openModal} variant="outline" className="border-2 border-[#faf8f3]/30 hover:border-[#faf8f3] hover:bg-[#faf8f3]/10 text-[#faf8f3] rounded-full px-8 h-14 text-base font-semibold bg-transparent">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  </Section>
);

const HomePage = () => {
  const { setOpen } = useContactModal();
  return (
    <main data-testid="home-page">
      <Hero openModal={() => setOpen(true)} />
      <Problem />
      <Solution />
      <FeatureShowcase />
      <BuiltFor />
      <HowItWorks />
      <ProductGrid />
      <FinalCTA openModal={() => setOpen(true)} />
    </main>
  );
};

export default HomePage;

