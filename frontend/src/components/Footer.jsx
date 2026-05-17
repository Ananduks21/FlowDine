import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";
import FooterLogo from "../assets/Footerlogo.png";

const Col = ({ heading, items }) => (
  <div>
    <h4 className="text-xs uppercase tracking-widest text-[#f59e0b] mb-4 font-mono">{heading}</h4>
    <ul className="space-y-3 text-sm">
      {items.map((it, i) => (
        <li key={i}>
          {it.action ? (
            <button onClick={it.action} className="hover:text-[#f59e0b] transition text-left">{it.label}</button>
          ) : (
            <Link to={it.to} className="hover:text-[#f59e0b] transition">{it.label}</Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  const { setOpen } = useContactModal();
  return (
    <footer data-testid="site-footer" className="relative bg-[#08291f] text-[#e9e3d2] mt-24">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-4">
            <div className="flex items-center mb-5">
              <img src={FooterLogo} alt="FlowDine logo" className="h-14 w-auto" />
            </div>
            <p className="font-display text-2xl lg:text-3xl font-semibold leading-tight text-[#faf8f3] max-w-md">
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
            <div className="mt-6 flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-[#f59e0b]" />
              <a href="mailto:hello@FlowDine.app" className="hover:text-[#f59e0b] transition">hello@FlowDine.app</a>
            </div>
            <div className="mt-5 flex gap-3">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" data-testid={`social-${i}`} className="w-10 h-10 rounded-full border border-[#e9e3d2]/20 flex items-center justify-center hover:bg-[#0e4839] hover:border-[#0e4839] transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <Col heading="Company" items={[
              { to: "/about", label: "About" },
              { action: () => setOpen(true), label: "Contact" },
            ]} />
          </div>

          <div className="lg:col-span-2">
            <Col heading="Product" items={[
              { to: "/features", label: "Features" },
              { to: "/pricing", label: "Pricing" },
              { to: "/blog", label: "Blog" },
              { to: "/support", label: "Support" },
            ]} />
          </div>

          <div className="lg:col-span-4">
            <Col heading="Legal" items={[
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/terms-of-service", label: "Terms of Service" },
              { to: "/refund-policy", label: "Refund Policy" },
              { to: "/cookie-policy", label: "Cookie Policy" },
            ]} />
          </div>
        </div>

        <div className="pt-8 border-t border-[#e9e3d2]/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#e9e3d2]/60 font-mono">© 2026 Flowdine. Built for restaurants that don't compromise.</p>
          <p className="text-xs text-[#e9e3d2]/60">Crafted with precision in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

