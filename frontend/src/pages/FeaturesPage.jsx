import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useContactModal } from "../context/ContactModalContext";
import {
  ArrowRight, ArrowUpRight, ScanLine, Receipt, ChefHat, LayoutGrid,
  Users, CalendarClock, BarChart3, Bell, CreditCard, BookOpen, Check, X, TrendingUp
} from "lucide-react";

const DASH = "https://customer-assets.emergentagent.com/job_order-sync-54/artifacts/mwz0jzms_ROS-Dashboard.jpeg";
const ORDER = "https://customer-assets.emergentagent.com/job_order-sync-54/artifacts/cpq3h3ap_ROS-Order.jpeg";
const PRODUCT = "https://customer-assets.emergentagent.com/job_order-sync-54/artifacts/r6iesk4t_ROS-Product.jpeg";
const TABLE = "https://customer-assets.emergentagent.com/job_order-sync-54/artifacts/1kmyxwga_ROS-Table.jpeg";

const Section = ({ children, className = "" }) => (
  <section className={`max-w-7xl mx-auto px-5 lg:px-10 ${className}`}>{children}</section>
);
const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e4839]/8 text-[#0e4839] text-xs font-mono uppercase tracking-wider">{children}</span>
);

const featureCards = [
  { icon: ScanLine, title: "QR Ordering", desc: "Customers self-order from their table — fewer mistakes, faster service." },
  { icon: Receipt, title: "Billing System", desc: "Split payments across UPI, cash, and card. Close bills in 90 seconds." },
  { icon: ChefHat, title: "KOT Management", desc: "Orders flow live to the kitchen. Stations stay coordinated, not chaotic." },
  { icon: LayoutGrid, title: "Table Management", desc: "Live floor plan with 5 status types — busy, free, reserved, and more." },
  { icon: Users, title: "Staff Management", desc: "Roles, permissions, and attendance — onboard a new waiter in 30 minutes." },
  { icon: CalendarClock, title: "Reservations", desc: "Reservations and a token system that auto-mark on arrival." },
  { icon: BarChart3, title: "Analytics", desc: "Live KPIs, best-sellers, and revenue trends in real time." },
  { icon: Bell, title: "Waiter Call", desc: "Guests tap once. Staff respond instantly. No raised hands." },
  { icon: CreditCard, title: "Multi-Payment Support", desc: "UPI, cash, card, partial — all on one bill, all reconciled automatically." },
  { icon: BookOpen, title: "Menu Management", desc: "Add-ons, portions, 86 items live — no reprints, no apologies." },
];

const Detail = ({ image, eyebrow, headline, problem, solution, outcome, points, reverse, accent }) => (
  <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reverse ? 'lg:[direction:rtl]' : ''}`}>
    <div className="lg:col-span-6 lg:[direction:ltr]">
      <span className="font-mono text-xs uppercase tracking-widest text-[#f59e0b]">{eyebrow}</span>
      <h3 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-[#08291f] leading-[1.05]">{headline}</h3>
      <div className="mt-6 space-y-4">
        <div className="flex gap-3">
          <span className="flex-shrink-0 mt-0.5 w-1 rounded-full bg-[#f59e0b]" />
          <div><span className="font-mono text-[10px] uppercase tracking-widest text-[#0e4839]">Problem</span><p className="text-[#2a3e36] leading-relaxed">{problem}</p></div>
        </div>
        <div className="flex gap-3">
          <span className="flex-shrink-0 mt-0.5 w-1 rounded-full bg-[#0e4839]" />
          <div><span className="font-mono text-[10px] uppercase tracking-widest text-[#0e4839]">Solution</span><p className="text-[#2a3e36] leading-relaxed">{solution}</p></div>
        </div>
        <div className="flex gap-3">
          <span className="flex-shrink-0 mt-0.5 w-1 rounded-full bg-[#08291f]" />
          <div><span className="font-mono text-[10px] uppercase tracking-widest text-[#0e4839]">Outcome</span><p className="text-[#2a3e36] leading-relaxed font-semibold">{outcome}</p></div>
        </div>
      </div>
      <ul className="mt-7 grid sm:grid-cols-2 gap-2">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#2a3e36]"><Check className="w-4 h-4 text-[#0e4839] flex-shrink-0 mt-0.5" /> {p}</li>
        ))}
      </ul>
    </div>
    <div className="lg:col-span-6 lg:[direction:ltr]">
      <div className="relative group">
        <div className={`absolute -inset-3 ${accent} rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition`} />
        <div className="relative rounded-3xl overflow-hidden border border-[#0e4839]/10 shadow-[0_30px_60px_-25px_rgba(8,41,31,0.3)] bg-white">
          <img src={image} alt={headline} className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500" />
        </div>
      </div>
    </div>
  </div>
);

const FeaturesPage = () => {
  const { setOpen } = useContactModal();
  return (
    <main data-testid="features-page" className="pt-32 lg:pt-40 pb-24">
      {/* Hero */}
      <Section className="relative overflow-hidden pb-12">
        <div className="absolute -top-32 -right-40 w-[640px] h-[640px] rounded-full bg-[#0e4839]/8 blur-[120px]" />
        <div className="absolute top-20 -left-32 w-[400px] h-[400px] rounded-full bg-[#f59e0b]/15 blur-[100px]" />
        <div className="relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Pill><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" /> Operating system features</Pill>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-[#08291f]">
              Everything Your Restaurant Needs to <span className="text-[#0e4839]">Operate Smoothly</span>
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-[#2a3e36] max-w-2xl leading-relaxed">
              From QR ordering to billing and kitchen operations — FlowDiner keeps your entire restaurant connected in real time.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button data-testid="features-hero-demo" onClick={() => setOpen(true)} className="bg-[#0e4839] hover:bg-[#08291f] text-[#faf8f3] rounded-full px-7 h-13 py-3.5 font-semibold shadow-[0_18px_40px_-14px_rgba(14,72,57,0.55)]">Get Demo <ArrowRight className="w-4 h-4 ml-2" /></Button>
              <Link to="/pricing"><Button variant="outline" className="border-2 border-[#0e4839]/20 hover:border-[#0e4839] hover:bg-transparent text-[#08291f] rounded-full px-7 h-13 py-3.5 font-semibold bg-transparent">View Pricing</Button></Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0e4839]/15 to-[#f59e0b]/15 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-[#0e4839]/10 shadow-[0_30px_60px_-25px_rgba(8,41,31,0.3)]">
                <img src={DASH} alt="Live dashboard" className="w-full h-auto" />
              </div>
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-4 bg-white rounded-2xl border border-[#0e4839]/10 p-4 shadow-[0_20px_40px_-15px_rgba(8,41,31,0.25)] animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#f59e0b] flex items-center justify-center"><TrendingUp className="w-4 h-4 text-[#08291f]" /></div>
                <div>
                  <p className="font-mono text-[10px] text-[#2a3e36]/60 uppercase">Live orders</p>
                  <p className="font-display text-lg font-bold text-[#08291f]">+28%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Feature category grid */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Pill>The full toolkit</Pill>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#08291f] leading-tight">10 modules. One connected system.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {featureCards.map((f, i) => (
            <div key={i} data-testid={`feature-card-${i}`} className="group relative bg-white rounded-2xl p-6 border border-[#0e4839]/8 hover:border-[#f59e0b]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#0e4839] flex items-center justify-center mb-4 group-hover:bg-[#f59e0b] transition-colors">
                <f.icon className="w-5 h-5 text-[#f59e0b] group-hover:text-[#08291f]" strokeWidth={2.2} />
              </div>
              <h4 className="font-display text-base font-bold text-[#08291f] mb-1">{f.title}</h4>
              <p className="text-xs text-[#2a3e36]/75 leading-relaxed">{f.desc}</p>
              <span className="absolute top-4 right-4 font-mono text-[10px] text-[#2a3e36]/30">0{i+1 < 10 ? i+1 : i+1}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Detailed sections */}
      <Section className="py-20 space-y-28">
        <div className="text-center max-w-2xl mx-auto">
          <Pill>Real workflows</Pill>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#08291f] leading-tight">Six features that change how the floor runs.</h2>
        </div>

        <Detail image={PRODUCT} eyebrow="Feature 01 · QR Ordering" headline="Customers Order Instantly From Their Table"
          problem="Servers spend 90+ seconds per table just taking orders — multiplied across a Friday night, that's hours lost."
          solution="A QR code on every table opens a live menu. Guests browse, customize, and order in 60 seconds — without flagging anyone down."
          outcome="14–22% higher average order value, near-zero order errors."
          points={["Multilingual menus", "Photo-rich items", "Add-ons & portions", "Live availability"]} accent="bg-[#f59e0b]/20" />

        <Detail image={TABLE} eyebrow="Feature 02 · Table Management" headline="Track Table Activity in Real Time"
          problem="Managers don't know which tables are paying, paid, or just lingering — turnover takes a hit during peak hours."
          solution="A live floor plan shows every table's status with five colour-coded states. One tap to assign, free, or check guest count."
          outcome="8 fewer minutes per table, every cover."
          points={["5 status types", "One-tap assign/free", "Auto-mark on reservation", "Guest count tracking"]} reverse accent="bg-[#0e4839]/15" />

        <Detail image={ORDER} eyebrow="Feature 03 · Billing System" headline="Close Bills Faster Without Confusion"
          problem="Split payments, UPI, cash, partials — billing becomes a 9-minute headache at the counter."
          solution="The active-bills view shows total dues, payment status, and lets staff close any bill in under 90 seconds."
          outcome="Billing disputes drop from 4% to under 0.5%."
          points={["Mark Paid in one tap", "Print-ready bills", "Split payment support", "Live total dues"]} accent="bg-[#f59e0b]/20" />

        <Detail image={DASH} eyebrow="Feature 04 · Kitchen Management" headline="Orders Reach the Kitchen Instantly"
          problem="Paper KOTs get lost, misread, or arrive late — kitchen reacts instead of preparing."
          solution="Orders appear at the right station the moment they're placed. Chefs mark items ready in real time."
          outcome="Order-to-kitchen time drops from minutes to under 10 seconds."
          points={["Station-wise routing", "Live preparation status", "Audio alerts", "Re-fire on demand"]} reverse accent="bg-[#0e4839]/15" />

        <Detail image={PRODUCT} eyebrow="Feature 05 · Menu Management" headline="Update Menus Without Operational Delays"
          problem="86 the salmon at 8pm? Manual menus mean reprints, waiter announcements, and apologies."
          solution="Hide, update, or add an item live. The change reflects on every QR menu within seconds."
          outcome="Zero awkward 'sorry, that's unavailable' moments."
          points={["Add-ons & portion variants", "Live / sold-out toggles", "Bulk price updates", "Category management"]} accent="bg-[#f59e0b]/20" />

        <Detail image={DASH} eyebrow="Feature 06 · Analytics" headline="See What Actually Drives Revenue"
          problem="Most dashboards drown owners in numbers without showing what to do with them."
          solution="Six numbers that matter — revenue, cover count, best-sellers, turnover, comp rate, RevPASH — live and trended."
          outcome="Owners spot drops within days, not weeks."
          points={["Daypart trends", "Best-seller velocity", "Revenue per seat hour", "Stock alerts"]} reverse accent="bg-[#0e4839]/15" />
      </Section>

      {/* Operational benefits — dark */}
      <Section className="py-20">
        <div className="bg-[#08291f] rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#0e4839]/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#f59e0b]/15 blur-3xl" />
          <div className="relative">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f59e0b]/15 text-[#f59e0b] text-xs font-mono uppercase tracking-wider">Under pressure</span>
              <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#faf8f3] leading-tight">Built for Real Restaurant Pressure</h2>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { v: "−40%", l: "Peak-hour chaos" },
                { v: "10s", l: "Order to kitchen" },
                { v: "+25%", l: "Table turnover" },
                { v: "0.5%", l: "Billing errors" },
                { v: "100%", l: "Live visibility" },
              ].map((m, i) => (
                <div key={i} className="bg-[#0e4839]/40 backdrop-blur-md border border-[#faf8f3]/10 rounded-2xl p-6 hover:bg-[#0e4839]/60 transition-colors">
                  <p className="font-display text-4xl lg:text-5xl font-bold text-[#f59e0b] leading-none">{m.v}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-widest text-[#e9e3d2]/85">{m.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Comparison */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Pill>Side by side</Pill>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#08291f] leading-tight">Traditional ops vs FlowDiner</h2>
        </div>
        <div className="bg-white rounded-3xl border border-[#0e4839]/10 overflow-hidden">
          <div className="grid grid-cols-3 bg-[#faf8f3] border-b border-[#0e4839]/10">
            <div className="p-5 font-mono text-xs uppercase tracking-widest text-[#2a3e36]/60">Operation</div>
            <div className="p-5 font-mono text-xs uppercase tracking-widest text-[#2a3e36]/60 text-center">Traditional</div>
            <div className="p-5 font-mono text-xs uppercase tracking-widest text-[#f59e0b] text-center bg-[#08291f]">FlowDiner</div>
          </div>
          {[
            ["Manual billing", "Paper bills, manual totals, frequent disputes", "Live bills, auto-totals, split payments"],
            ["Order delays", "Waiters key in orders 5–10 min later", "Orders reach kitchen in under 10 seconds"],
            ["Kitchen coordination", "Lost paper KOTs, miscommunication", "Station-wise live routing with status"],
            ["Table tracking", "Mental notes & shouts across the floor", "Live floor plan, 5 status types"],
            ["Revenue visibility", "End-of-day spreadsheets", "Real-time KPIs, every second"],
            ["Customer experience", "Wait, wave, repeat, wait", "Tap, order, eat, settle"],
          ].map((row, i) => (
            <div key={i} className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-[#faf8f3]/40' : 'bg-white'} border-b border-[#0e4839]/8 last:border-b-0`}>
              <div className="p-5 font-display font-semibold text-[#08291f] text-sm lg:text-base">{row[0]}</div>
              <div className="p-5 text-sm text-[#2a3e36]/75 flex items-center gap-2"><X className="w-4 h-4 text-[#dc2626] flex-shrink-0" /> {row[1]}</div>
              <div className="p-5 text-sm text-[#08291f] font-medium flex items-center gap-2 bg-[#0e4839]/5"><Check className="w-4 h-4 text-[#0e4839] flex-shrink-0" /> {row[2]}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-20">
        <div className="bg-gradient-to-br from-[#0e4839] to-[#08291f] rounded-[2.5rem] p-10 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#f59e0b]/20 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-5xl lg:text-7xl font-bold text-[#faf8f3] leading-[1.02]">Operate Smarter.<br /><span className="text-[#f59e0b]">Serve Faster.</span></h2>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Button data-testid="features-cta-demo" onClick={() => setOpen(true)} className="bg-[#f59e0b] hover:bg-[#fbbf24] text-[#08291f] rounded-full px-8 h-14 font-bold">Book Demo <ArrowUpRight className="w-4 h-4 ml-2" /></Button>
              <Button data-testid="features-cta-contact" onClick={() => setOpen(true)} variant="outline" className="border-2 border-[#faf8f3]/30 hover:border-[#faf8f3] hover:bg-[#faf8f3]/10 text-[#faf8f3] rounded-full px-8 h-14 font-semibold bg-transparent">Contact Us</Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default FeaturesPage;

