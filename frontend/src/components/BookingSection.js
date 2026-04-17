import { useEffect } from "react";
import { Check, Clock } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/sadafaltech/30min";

const CHECKLIST = [
  "Discover your exact monthly revenue leak from missed calls",
  "Get a custom AI system blueprint — no cost, no commitment",
  "See a live demo of how the system answers calls & books tables",
  "Walk away with actionable steps — whether you work with us or not",
];

export default function BookingSection() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      id="book"
      data-testid="booking-section"
      className="py-20 sm:py-24 px-5 sm:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A5D23] mb-3">
            Book Your Free Call
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] leading-tight mb-3">
            Let's Map Out Your{" "}
            <em className="italic text-[#E07A5F]">Restaurant's Growth</em> — Free
          </h2>
          <p className="text-sm text-[#5C5C5C] max-w-[520px] mx-auto">
            Pick a time below. In 30 minutes, we'll show you exactly how much revenue your restaurant is losing — and how to fix it.
          </p>
        </div>

        {/* Calendly Widget — full width, prominent */}
        <div
          id="calendly-widget"
          data-testid="calendly-widget-container"
          className="bg-white border border-[#E5E3DB] rounded-2xl overflow-hidden shadow-sm mb-10"
        >
          <div
            className="calendly-inline-widget"
            data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=4A5D23`}
            style={{ minWidth: "280px", width: "100%", height: "700px" }}
          />
        </div>

        {/* Checklist row below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <ul className="flex flex-col gap-3">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#3FB77A]/15 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-[#3FB77A]" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#5C5C5C] flex items-center gap-1.5 mt-4">
              <Clock className="w-3.5 h-3.5" /> Only 5 spots available this week — first come, first served.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#E5E3DB] hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1717838207789-62684e75a770?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2hlZiUyMGNvb2tpbmd8ZW58MHx8fHwxNzc0NDk5MDMxfDA&ixlib=rb-4.1.0&q=85"
              alt="Chef preparing food"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
