import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section
      data-testid="final-cta-section"
      className="py-24 sm:py-32 px-5 sm:px-8 bg-[#4A5D23] text-center"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-5">
          Last Chance
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
          Every Day Without This System Is{" "}
          <em className="italic text-[#E07A5F]">Revenue Left on the Table</em>
        </h2>
        <p className="text-base text-white/65 max-w-[520px] mx-auto mb-9 leading-relaxed">
          Your competitors are already moving. The restaurants that win in the next 2 years will be the ones who automate first. Book your free strategy call now.
        </p>
        <a href="#book">
          <Button
            data-testid="final-cta-button"
            className="rounded-full bg-[#E07A5F] hover:bg-[#c96a50] text-white font-semibold text-lg px-10 py-5 h-auto transition-all hover:scale-[1.03] shadow-lg shadow-[#E07A5F]/30"
          >
            Yes, I Want to Grow My Restaurant
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </a>
        <p className="text-sm text-white/45 mt-4">
          Free 30-min call · No commitment · 5 spots this week
        </p>
      </div>
    </section>
  );
}
