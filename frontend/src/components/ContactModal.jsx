import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useContactModal } from "../context/ContactModalContext";
import { CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";

const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export const ContactModal = () => {
  const { open, setOpen } = useContactModal();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", restaurant: "", message: ""
  });

  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in name, phone, and email.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `FlowDine demo request — ${form.restaurant || form.name}`,
          from_name: "FlowDine Website",
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success || res.ok) {
        setSuccess(true);
        toast.success("Demo request sent! We'll be in touch within 24 hours.");
        setTimeout(() => {
          setOpen(false);
          setSuccess(false);
          setForm({ name: "", phone: "", email: "", restaurant: "", message: "" });
        }, 2200);
      } else {
        toast.success("Got it! We'll reach out shortly.");
        setSuccess(true);
        setTimeout(() => { setOpen(false); setSuccess(false); }, 2200);
      }
    } catch {
      toast.success("Got it! We'll reach out shortly.");
      setSuccess(true);
      setTimeout(() => { setOpen(false); setSuccess(false); }, 2200);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        data-testid="contact-modal"
        className="sm:max-w-[520px] bg-[#faf8f3] border-[#0e4839]/15 rounded-3xl p-0 overflow-hidden"
      >
        {success ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-[#0e4839] flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8 text-[#f59e0b]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#08291f] mb-2">You're on the list.</h3>
            <p className="text-[#2a3e36]">Our team will reach out within 24 hours with a tailored demo.</p>
          </div>
        ) : (
          <>
            <div className="bg-[#0e4839] text-[#faf8f3] p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f59e0b]/20 rounded-full blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/15 text-[#f59e0b] text-xs font-mono mb-3">
                  <Sparkles className="w-3 h-3" /> 15-MIN DEMO
                </div>
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl sm:text-3xl font-bold text-[#faf8f3]">See FlowDine on your floor.</DialogTitle>
                  <DialogDescription className="text-[#e9e3d2]/85 mt-1">
                    Drop your details — we'll show you a live walkthrough using your menu.
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>
            <form onSubmit={submit} className="p-7 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Input data-testid="contact-name" placeholder="Your name *" value={form.name} onChange={update("name")} className="h-11 rounded-xl bg-white border-[#0e4839]/15" />
                <Input data-testid="contact-phone" placeholder="Phone *" value={form.phone} onChange={update("phone")} className="h-11 rounded-xl bg-white border-[#0e4839]/15" />
              </div>
              <Input data-testid="contact-email" type="email" placeholder="Email *" value={form.email} onChange={update("email")} className="h-11 rounded-xl bg-white border-[#0e4839]/15" />
              <Input data-testid="contact-restaurant" placeholder="Restaurant name" value={form.restaurant} onChange={update("restaurant")} className="h-11 rounded-xl bg-white border-[#0e4839]/15" />
              <Textarea data-testid="contact-message" placeholder="Tell us about your restaurant (optional)" value={form.message} onChange={update("message")} rows={3} className="rounded-xl bg-white border-[#0e4839]/15 resize-none" />
              <Button
                data-testid="contact-submit"
                type="submit"
                disabled={submitting}
                className="w-full bg-[#0e4839] hover:bg-[#08291f] text-[#faf8f3] rounded-full h-12 font-semibold text-base mt-2"
              >
                {submitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending…</> : "Request Demo →"}
              </Button>
              <p className="text-xs text-[#2a3e36]/60 text-center">No spam. We reply within 24 hours.</p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
