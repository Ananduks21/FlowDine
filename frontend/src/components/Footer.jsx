import { Link } from "react-router-dom";
import { Sparkles, Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";

export const Footer = () => {
  const { setOpen } = useContactModal();
  return (
    <footer data-testid="site-footer" className="relative bg-[#08291f] text-[#e9e3d2] mt-24">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#0e4839] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#f59e0b]" strokeWidth={2.5} />
              </div>
              <span className="font-display text-2xl font-bold text-[#faf8f3]">FlowDine</span>
            </div>
            <p className="font-display text-3xl lg:text-4xl font-semibold leading-tight text-[#faf8f3] max-w-md">
              This is not just software.<br />
              <span className="text-[#f59e0b]">This is how restaurants run.</span>
            </p>
            <button
              data-testid="footer-demo-btn"
              onClick={() => setOpen(true)}
              className="mt-7 inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#08291f] rounded-full px-6 h-12 font-semibold transition"
            >
              Book a Demo →
            </button>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-[#f59e0b] mb-4 font-mono">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-[#f59e0b] transition">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-[#f59e0b] transition">Pricing</Link></li>
              <li><button onClick={() => setOpen(true)} className="hover:text-[#f59e0b] transition">Demo</button></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-[#f59e0b] mb-4 font-mono">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/blog" className="hover:text-[#f59e0b] transition">Blog</Link></li>
              <li><button onClick={() => setOpen(true)} className="hover:text-[#f59e0b] transition">Contact</button></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#f59e0b] mb-4 font-mono">Stay in the loop</h4>
            <p className="text-sm text-[#e9e3d2]/80 mb-4">Restaurant operations notes, every other Tuesday.</p>
            <div className="flex gap-2">
              <Mail className="w-4 h-4 text-[#f59e0b]" />
              <a href="mailto:hello@flowdine.app" className="text-sm hover:text-[#f59e0b] transition">hello@flowdine.app</a>
            </div>
            <div className="mt-5 flex gap-3">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" data-testid={`social-${i}`} className="w-10 h-10 rounded-full border border-[#e9e3d2]/20 flex items-center justify-center hover:bg-[#0e4839] hover:border-[#0e4839] transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#e9e3d2]/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#e9e3d2]/60 font-mono">© 2026 FlowDine. Built for restaurants that don't compromise.</p>
          <p className="text-xs text-[#e9e3d2]/60">Crafted with precision in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
