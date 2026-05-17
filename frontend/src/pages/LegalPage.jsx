import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Shield, FileText, RefreshCcw, Cookie } from "lucide-react";
import NotFoundPage from "./NotFoundPage";

const PAGES = {
  "privacy-policy": {
    icon: Shield,
    title: "Privacy Policy",
    updated: "February 2026",
    intro: "Your data — and your guests' data — is yours. We're a tool that processes it carefully, never a product that sells it. Here's exactly how we handle information.",
    sections: [
      { h: "Information we collect", p: "We collect information you provide when you sign up, use the platform, or contact support — including your name, email, phone, business details, and operational data such as orders, menus, tables, and payments." },
      { h: "How we use it", p: "We use your information to operate the FlowDine platform, deliver support, send essential service notifications, improve features based on aggregated usage, and meet legal obligations. We never sell your data." },
      { h: "Data sharing", p: "We share data only with infrastructure providers who help us run the service (cloud hosting, payment processors, communication APIs), all under strict data-processing agreements aligned with applicable law." },
      { h: "Data retention", p: "Operational data is retained while your account is active and for 12 months after cancellation, after which it is permanently deleted unless retention is required by law." },
      { h: "Security", p: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We host data in Indian data centres with regular third-party security audits." },
      { h: "Your rights", p: "You can request a full export, correction, or deletion of your data at any time by emailing privacy@FlowDine.app. We respond within 7 business days." },
      { h: "Contact", p: "Privacy questions: privacy@FlowDine.app — postal address available on request." },
    ],
  },
  "terms-of-service": {
    icon: FileText,
    title: "Terms of Service",
    updated: "February 2026",
    intro: "These terms govern your use of FlowDine. By using the platform you agree to them — written in plain language, with no fine-print surprises.",
    sections: [
      { h: "Your account", p: "You're responsible for maintaining the security of your account credentials and for all activity that happens under your account." },
      { h: "Acceptable use", p: "You agree not to use FlowDine for any unlawful activity, to attempt to access other customers' data, to interfere with the service, or to resell access without written permission." },
      { h: "Service availability", p: "We commit to a 99.9% monthly uptime. Scheduled maintenance is announced at least 48 hours in advance and runs during low-traffic windows." },
      { h: "Pricing & billing", p: "Prices are listed on the pricing page. Plans are billed monthly or annually in advance. Taxes are charged where applicable." },
      { h: "Termination", p: "You can cancel anytime from your dashboard. We may suspend or terminate accounts that violate these terms, with prior notice unless the violation is severe." },
      { h: "Limitation of liability", p: "To the maximum extent permitted by law, FlowDine's total liability for any claim is limited to the fees paid by you in the 12 months preceding the claim." },
      { h: "Governing law", p: "These terms are governed by the laws of India. Any disputes will be resolved in the courts of Bengaluru, Karnataka." },
      { h: "Changes", p: "We may update these terms occasionally. Material changes will be communicated via email and through the dashboard at least 30 days in advance." },
    ],
  },
  "refund-policy": {
    icon: RefreshCcw,
    title: "Refund Policy",
    updated: "February 2026",
    intro: "Honest, no-fuss refunds. Here's how money moves when things don't work out.",
    sections: [
      { h: "Monthly plans", p: "Monthly subscriptions are non-refundable for the current billing period. Cancel anytime — your access continues until the end of the period, and you won't be charged again." },
      { h: "Annual plans", p: "Annual plans cancelled within 14 days of purchase are eligible for a full refund. After 14 days, we refund unused months on a pro-rata basis." },
      { h: "Hardware add-ons", p: "Hardware (printers, tablets) is non-refundable once shipped, except in cases of manufacturer defect — covered fully by our 1-year warranty." },
      { h: "Service issues", p: "If a critical platform issue prevents you from operating for over 24 continuous hours, we credit the affected days back to your account automatically." },
      { h: "Refund timeline", p: "Approved refunds are processed within 5–7 business days to the original payment method." },
      { h: "How to request", p: "Email billing@FlowDine.app with your account email and reason. We respond within 2 business days." },
    ],
  },
  "cookie-policy": {
    icon: Cookie,
    title: "Cookie Policy",
    updated: "February 2026",
    intro: "Cookies help us run the platform and understand how it's used. Here's what we set and why.",
    sections: [
      { h: "What are cookies", p: "Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and recognise you on return visits." },
      { h: "Essential cookies", p: "Required for the platform to function — they manage your session, secure your login, and remember your preferences. These cannot be disabled." },
      { h: "Analytics cookies", p: "We use privacy-focused analytics (no third-party advertising) to understand which features are used and where users get stuck. All data is aggregated and anonymised." },
      { h: "Marketing cookies", p: "On the public marketing site (FlowDine.app), we use cookies to attribute conversions to acquisition channels. The product itself does not set marketing cookies." },
      { h: "Managing cookies", p: "You can disable non-essential cookies through your browser settings. Essential cookies are required for the platform to work — disabling them will log you out." },
      { h: "Updates", p: "We update this policy whenever we change cookie usage. The 'updated' date at the top reflects the most recent change." },
    ],
  },
};

const LegalPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "");
  const page = PAGES[slug];
  if (!page) return <NotFoundPage />;
  const Icon = page.icon;

  return (
    <main data-testid={`legal-${slug}`} className="pt-32 lg:pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <Link to="/" className="inline-flex items-center gap-2 text-[#0e4839] font-semibold text-sm hover:gap-3 transition-all mb-8">
          <ArrowLeft className="w-4 h-4" /> Back home
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#0e4839] flex items-center justify-center">
            <Icon className="w-7 h-7 text-[#f59e0b]" strokeWidth={2} />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#f59e0b]">Last updated · {page.updated}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#08291f] leading-[1.05]">{page.title}</h1>
        <p className="mt-6 text-lg text-[#2a3e36]/85 leading-relaxed">{page.intro}</p>

        <div className="mt-12 space-y-8">
          {page.sections.map((s, i) => (
            <section key={i} className="bg-white rounded-2xl p-7 lg:p-8 border border-[#0e4839]/8">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-xs text-[#f59e0b]">0{i+1}</span>
                <h2 className="font-display text-2xl font-bold text-[#08291f]">{s.h}</h2>
              </div>
              <p className="text-[#2a3e36] leading-relaxed">{s.p}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 bg-[#08291f] rounded-3xl p-8 lg:p-10 text-center">
          <p className="font-display text-xl text-[#faf8f3]">Questions about this policy?</p>
          <a href="mailto:hello@FlowDine.app" className="mt-3 inline-block text-[#f59e0b] font-semibold hover:underline">hello@FlowDine.app</a>
        </div>
      </div>
    </main>
  );
};

export default LegalPage;

