import { Check, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://sadafaltech.com/book-a-call";

const CHECKLIST = [
  "Discover your exact monthly revenue leak from missed calls",
  "Get a custom AI system blueprint — no cost, no commitment",
  "See a live demo of how the system answers calls & books tables",
  "Walk away with actionable steps — whether you work with us or not",
];

export default function BookingSection() {
  return (
    <section
      id="book"
      data-testid="booking-section"
      className="py-20 sm:py-24 px-5 sm:px-8"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left side */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A5D23] mb-4">
            Book Your Free Call
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] leading-tight mb-4">
            Let's Map Out Your
            <br />
            <em className="italic text-[#E07A5F]">Restaurant's Growth</em> — Free
          </h2>
          <p className="text-sm text-[#5C5C5C] leading-relaxed mb-6">
            This is a no-pitch strategy session. In 30 minutes, we'll show you exactly how much revenue your restaurant is currently losing, and what an AI system built for your specific setup would look like.
          </p>
          <ul className="flex flex-col gap-3 mb-6">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#3FB77A]/15 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-[#3FB77A]" strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-[#5C5C5C] flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> Only 5 spots available this week — first come, first served.
          </p>

          {/* Chef image */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-[#E5E3DB] hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1717838207789-62684e75a770?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2hlZiUyMGNvb2tpbmd8ZW58MHx8fHwxNzc0NDk5MDMxfDA&ixlib=rb-4.1.0&q=85"
              alt="Chef preparing food"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>

        {/* Right side — Calendly CTA card */}
        <div className="bg-white border border-[#E5E3DB] rounded-2xl p-8 sm:p-10 shadow-sm text-center flex flex-col items-center justify-center min-h-[420px]">
          <div className="w-16 h-16 rounded-2xl bg-[#E07A5F]/10 flex items-center justify-center mb-6">
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
              <rect x="12" y="14" width="24" height="22" rx="3" stroke="#E07A5F" strokeWidth="1.5" fill="none"/>
              <line x1="12" y1="20" x2="36" y2="20" stroke="#E07A5F" strokeWidth="1.5"/>
              <line x1="18" y1="10" x2="18" y2="17" stroke="#E07A5F" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="30" y1="10" x2="30" y2="17" stroke="#E07A5F" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="20" cy="28" r="2" fill="#E07A5F"/>
              <circle cx="24" cy="28" r="2" fill="#E07A5F"/>
              <circle cx="28" cy="28" r="2" fill="#E07A5F"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#1A1A1A] tracking-tight mb-2">
            Book Your Free 30-Min Strategy Call
          </h3>
          <p className="text-sm text-[#5C5C5C] max-w-[280px] mb-6">
            Pick a time that works for you. We'll map your restaurant's growth plan — no strings attached.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            <Button
              data-testid="booking-cta-button"
              className="rounded-full bg-[#E07A5F] hover:bg-[#c96a50] text-white font-semibold text-base px-8 py-4 h-auto transition-all hover:scale-[1.03] shadow-lg shadow-[#E07A5F]/20"
            >
              Book My Free Strategy Call
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </a>
          <p className="text-xs text-[#5C5C5C] mt-4">
            No pitch. No pressure. Just a plan.
          </p>
        </div>
      </div>
    </section>
  );
}
