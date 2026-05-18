import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "./ui/button";
import { useContactModal } from "../context/ContactModalContext";
import logo from "../assets/flowdiner-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/support", label: "Support" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setOpen } = useContactModal();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (event) => {
    if (location.pathname === "/") {
      event.preventDefault();
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <header
      data-testid="main-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-[#faf8f3]/80 border-b border-[#0e4839]/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <Link to="/" data-testid="logo-link" onClick={handleLogoClick} className="flex items-center gap-3 group">
          <div className="w-14 h-14 rounded-3xl overflow-hidden flex items-center justify-center">
            <img src={logo} alt="FlowDine logo" className="w-12 h-12 object-contain" />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#0e4839] text-[#faf8f3]"
                    : "text-[#08291f]/75 hover:text-[#08291f] hover:bg-[#0e4839]/5"
                }`
              }
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            data-testid="navbar-brochure-btn"
            href="/FlowDine-Brochure.txt"
            download="FlowDine-Brochure.txt"
            className="hidden lg:inline-flex items-center gap-2 border border-[#0e4839]/20 hover:border-[#0e4839] hover:bg-[#0e4839]/5 text-[#08291f] rounded-full px-5 h-10 text-sm font-semibold transition-all"
          >
            <Download className="w-4 h-4" /> Brochure
          </a>
          <Button
            data-testid="navbar-demo-btn"
            onClick={() => setOpen(true)}
            className="hidden sm:inline-flex bg-[#0e4839] hover:bg-[#08291f] text-[#faf8f3] rounded-full px-5 h-10 font-semibold shadow-[0_8px_24px_-8px_rgba(14,72,57,0.5)]"
          >
            Get Demo
          </Button>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden w-10 h-10 rounded-full border border-[#0e4839]/20 flex items-center justify-center text-[#08291f]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#0e4839]/10 bg-[#faf8f3]/95 backdrop-blur-xl">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                data-testid={`nav-mobile-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium ${
                    isActive ? "bg-[#0e4839] text-[#faf8f3]" : "text-[#08291f]/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              data-testid="mobile-brochure-btn"
              href="/FlowDine-Brochure.txt"
              download="FlowDine-Brochure.txt"
              className="mt-2 inline-flex items-center justify-center gap-2 border border-[#0e4839]/25 text-[#08291f] rounded-full h-12 font-semibold"
            >
              <Download className="w-4 h-4" /> Download Brochure
            </a>
            <Button
              data-testid="mobile-demo-btn"
              onClick={() => setOpen(true)}
              className="bg-[#0e4839] hover:bg-[#08291f] text-[#faf8f3] rounded-full h-12 font-semibold"
            >
              Get Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


