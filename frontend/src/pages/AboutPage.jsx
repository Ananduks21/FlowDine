import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useContactModal } from "../context/ContactModalContext";
import { ArrowRight, Zap, Shield, Eye, Heart, Sparkles, Check } from "lucide-react";

const Section = ({ children, className = "" }) => (
  <section className={`max-w-7xl mx-auto px-5 lg:px-10 ${className}`}>{children}</section>
);
const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e4839]/8 text-[#0e4839] text-xs font-mono uppercase tracking-wider">{children}</span>
);

const AboutPage = () => {
  const { setOpen } = useContactModal();
  return (
    <main data-testid="about-page" className="pt-32 lg:pt-40 pb-24">
      {/* Hero */}
      <Section className="relative overflow-hidden pb-12">
        <div className="absolute -top-32 -right-40 w-[500px] h-[500px] rounded-full bg-[#0e4839]/8 blur-[120px]" />
        <div className="relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Pill><Sparkles className="w-3 h-3" /> Our story</Pill>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-[#08291f]">
              Built for the Reality of <span className="text-[#0e4839]">Restaurant Operations</span>
            </h1>
            <p className="mt-7 text-lg lg:text-xl text-[#2a3e36] max-w-2xl leading-relaxed">
              FlowDine was created to simplify the chaos restaurants face during busy hours — from ordering and kitchen coordination to billing and table management.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#08291f] rounded-3xl p-10 overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-20" />
              <div className="relative">
                <p className="font-display text-3xl lg:text-4xl font-bold text-[#faf8f3] leading-tight">"We didn't build software for an office."</p>
                <p className="mt-4 text-[#e9e3d2]/85">"We built it for the heat, the rush, and the moment a table needs a bill in 60 seconds."</p>
                <p className="mt-6 font-mono text-xs uppercase tracking-widest text-[#f59e0b]">— Founding team</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem */}
      <Section className="py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Pill>The problem we saw</Pill>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#08291f] leading-tight">Restaurants Deserve Better Systems</h2>
            <p className="mt-5 text-lg text-[#2a3e36]/85">We spent six months in real kitchens before writing a line of code. The same five problems showed up in every restaurant we visited.</p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              { t: "Disconnected operations", d: "Floor, kitchen, and counter run on different signals." },
              { t: "Slow billing", d: "What should take 90 seconds takes 9 minutes at peak." },
              { t: "Communication gaps", d: "Orders get lost between waiter and chef." },
              { t: "Waiter dependency", d: "One slow shift can sink an entire Friday night." },
              { t: "Peak-hour confusion", d: "The exact moments where margin is made get the worst tools." },
            ].map((it, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#0e4839]/8">
                <span className="font-mono text-xs text-[#f59e0b]">0{i+1}</span>
                <h4 className="mt-2 font-display text-lg font-bold text-[#08291f]">{it.t}</h4>
                <p className="mt-1 text-sm text-[#2a3e36]/75">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Approach — workflow timeline */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Pill>Our approach</Pill>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#08291f] leading-tight">Designed Around Real Restaurant Workflows</h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[8%] right-[8%] h-0.5 border-t-2 border-dashed border-[#0e4839]/20" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {[
              { t: "Real-time", d: "Every action propagates everywhere in milliseconds." },
              { t: "Connected", d: "Order, kitchen, bill, and floor speak the same language." },
              { t: "Simple", d: "If a new waiter can't learn it on shift one, we redesign it." },
              { t: "Visible", d: "Owners see everything that matters, on one screen." },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-[#faf8f3] border-2 border-[#0e4839]/15 flex items-center justify-center relative shadow-[0_12px_30px_-15px_rgba(8,41,31,0.3)]">
                  <span className="font-display text-3xl font-bold text-[#0e4839]">{i+1}</span>
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#f59e0b] flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-[#08291f]" /></div>
                </div>
                <p className="mt-5 font-display text-xl font-bold text-[#08291f]">{s.t}</p>
                <p className="mt-2 text-sm text-[#2a3e36]/75 max-w-[14rem] mx-auto">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Pill>What we believe</Pill>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#08291f] leading-tight">Five values that shape every release.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: Zap, t: "Speed", d: "Every interaction must feel instant. Latency kills trust on a busy floor." },
            { icon: Heart, t: "Simplicity", d: "Powerful is easy. If a feature needs a manual, it isn't done." },
            { icon: Shield, t: "Reliability", d: "Restaurants don't get redo's. Our uptime isn't a metric, it's a vow." },
            { icon: Eye, t: "Operational Clarity", d: "Owners shouldn't read reports. They should see the truth, live." },
            { icon: Sparkles, t: "Customer Experience", d: "Tech should disappear. Guests should remember the food, not the wait." },
          ].map((v, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[#0e4839]/8 hover:border-[#f59e0b]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#0e4839] flex items-center justify-center mb-4">
                <v.icon className="w-5 h-5 text-[#f59e0b]" strokeWidth={2.2} />
              </div>
              <h4 className="font-display text-lg font-bold text-[#08291f]">{v.t}</h4>
              <p className="mt-2 text-sm text-[#2a3e36]/75 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why different */}
      <Section className="py-20">
        <div className="bg-[#08291f] rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#f59e0b]/15 blur-3xl" />
          <div className="relative grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f59e0b]/15 text-[#f59e0b] text-xs font-mono uppercase tracking-wider">Why FlowDine</span>
              <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-[#faf8f3] leading-tight">Why we're different.</h2>
            </div>
            <div className="lg:col-span-8 space-y-3">
              {[
                "Built specifically for restaurants — not a generic POS bolted with hacks.",
                "Operational-first design that respects how a real floor moves.",
                "Modern workflows aligned to UPI, QR, and the way Indian restaurants actually run.",
                "Easy staff adoption — onboard a new waiter in 30 minutes, not 3 weeks.",
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#0e4839]/40 backdrop-blur-md border border-[#faf8f3]/10 rounded-2xl p-5">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#f59e0b] flex items-center justify-center flex-shrink-0"><Check className="w-3.5 h-3.5 text-[#08291f]" strokeWidth={3} /></div>
                  <p className="text-[#e9e3d2] text-base lg:text-lg leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-5xl lg:text-7xl font-bold text-[#08291f] leading-[1.02]">This Is Not Just Software.</h2>
          <p className="mt-6 font-display text-2xl lg:text-3xl text-[#0e4839]">This is how modern restaurants operate.</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button data-testid="about-cta-demo" onClick={() => setOpen(true)} className="bg-[#0e4839] hover:bg-[#08291f] text-[#faf8f3] rounded-full px-8 h-14 font-bold">Get Demo <ArrowRight className="w-4 h-4 ml-2" /></Button>
            <Button data-testid="about-cta-contact" onClick={() => setOpen(true)} variant="outline" className="border-2 border-[#0e4839]/20 hover:border-[#0e4839] hover:bg-transparent text-[#08291f] rounded-full px-8 h-14 font-semibold bg-transparent">Contact Us</Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default AboutPage;
