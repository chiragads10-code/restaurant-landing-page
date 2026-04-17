import { ArrowRight, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "#book";

export default function VSLSection() {
  return (
    <section data-testid="vsl-section" className="py-20 sm:py-24 px-5 sm:px-8 bg-white border-t border-b border-[#E5E3DB]">
      <div className="max-w-4xl mx-auto">
        {/* CTA box */}
        <div className="bg-[#F9F8F6] border border-[#4A5D23]/15 rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-2">
            Ready to Stop Losing Bookings?
          </h3>
          <p className="text-sm text-[#5C5C5C] max-w-[420px] mx-auto mb-6">
            Book a free 30-minute strategy call. We'll show you exactly where your restaurant is leaking revenue — and how to fix it.
          </p>
          <a href={CALENDLY_URL}>
            <Button
              data-testid="vsl-cta-button"
              className="rounded-full bg-[#4A5D23] hover:bg-[#3C4A1C] text-white font-semibold text-base px-8 py-3.5 h-auto transition-all hover:scale-[1.03]"
            >
              Book My Free Strategy Call <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </a>
          <div className="flex items-center justify-center gap-5 mt-5 flex-wrap">
            {["No pitch or pressure", "100% free", "Only 5 spots this week"].map((text) => (
              <span key={text} className="text-xs text-[#5C5C5C] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#3FB77A]" /> {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
