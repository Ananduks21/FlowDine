import { Link } from "react-router-dom";
import { Briefcase, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { useContactModal } from "../context/ContactModalContext";

const CareersPage = () => {
  const { setOpen } = useContactModal();
  return (
    <main data-testid="careers-page" className="pt-32 lg:pt-40 pb-24 min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0e4839] flex items-center justify-center mb-6">
          <Briefcase className="w-7 h-7 text-[#f59e0b]" />
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-[#f59e0b]">Careers · Coming soon</span>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#08291f] leading-[1.05]">Help us build how restaurants run.</h1>
        <p className="mt-6 text-lg text-[#2a3e36]/85">We're a small team obsessed with operational excellence. Open roles will be posted here soon — engineers, designers, and onboarding specialists who've spent time on actual restaurant floors.</p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a href="mailto:careers@flowdine.app" className="inline-flex items-center gap-2 bg-[#0e4839] hover:bg-[#08291f] text-[#faf8f3] rounded-full px-7 h-12 font-semibold transition">
            <Mail className="w-4 h-4" /> careers@flowdine.app
          </a>
          <Button onClick={() => setOpen(true)} variant="outline" className="border-2 border-[#0e4839]/20 hover:border-[#0e4839] hover:bg-transparent text-[#08291f] rounded-full px-7 h-12 font-semibold bg-transparent">
            Get in touch
          </Button>
        </div>
        <Link to="/" className="mt-10 inline-block text-sm text-[#0e4839] font-semibold hover:underline">← Back home</Link>
      </div>
    </main>
  );
};

export default CareersPage;
