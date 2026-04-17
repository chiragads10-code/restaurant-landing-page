import { ArrowRight, Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "#book";

export default function Hero() {
  return (
    <section data-testid="hero-section" className="relative flex flex-col items-center justify-center text-center px-5 sm:px-8 pt-24 pb-12 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(74,93,35,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Eyebrow badge */}
      <div className="animate-fade-up inline-flex items-center gap-2.5 bg-[#4A5D23]/8 border border-[#4A5D23]/20 rounded-full px-4 py-1.5 mb-4">
        <span className="w-2 h-2 rounded-full bg-[#3FB77A] animate-pulse-dot" />
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#4A5D23]">
          For Restaurant Owners in India
        </span>
      </div>

      {/* Main headline */}
      <h1
        data-testid="hero-headline"
        className="animate-fade-up-1 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.08] text-[#1A1A1A] max-w-[900px] mb-3"
      >
        Fill More Tables, Answer Every Call &{" "}
        <em className="italic text-[#E07A5F]">Grow Revenue by 60%</em>
        <br />
        <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold">— in 90 Days or You Don't Pay</span>
      </h1>

      {/* Subheadline */}
      <p
        data-testid="hero-subheadline"
        className="animate-fade-up-2 text-sm sm:text-base text-[#5C5C5C] font-light max-w-[580px] mb-6 leading-relaxed"
      >
        We install AI-powered systems in your restaurant that{" "}
        <strong className="font-medium text-[#1A1A1A]">automatically handle bookings, slash missed calls, eliminate no-shows,</strong>{" "}
        and turn every customer into a repeat visitor — while you focus on running your kitchen.
      </p>

      {/* VSL Video — inline in hero so it's visible without scrolling */}
      <div data-testid="vsl-video-placeholder" className="animate-fade-up-3 relative w-full max-w-[480px] aspect-video bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#E5E3DB] shadow-xl mb-5">
        <img
          src="https://images.unsplash.com/photo-1752440475163-4fe0558b1f38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwxfHxidXN0bGluZyUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzQ0OTkwMzB8MA&ixlib=rb-4.1.0&q=85"
          alt="Bustling restaurant interior"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <button
            data-testid="vsl-play-button"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E07A5F] flex items-center justify-center cursor-pointer transition-transform hover:scale-110 animate-play-pulse"
          >
            <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
          </button>
          <p className="text-[11px] sm:text-xs text-white/50 italic flex items-center gap-1.5">
            <Clock className="w-3 h-3" /> 7 min — how restaurants grow 60% in 90 days
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="animate-fade-up-3">
        <a href={CALENDLY_URL}>
          <Button
            data-testid="hero-cta-button"
            className="rounded-full bg-[#E07A5F] hover:bg-[#c96a50] text-white font-semibold text-base px-8 py-4 h-auto transition-all hover:scale-[1.03] shadow-lg shadow-[#E07A5F]/20"
          >
            Book My Free Strategy Call
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </a>
      </div>

      {/* Stats row */}
      <div data-testid="hero-stats" className="animate-fade-up-4 flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-14">
        <div className="text-center">
          <span className="block text-3xl sm:text-4xl font-bold text-[#E07A5F] leading-none mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            27L+
          </span>
          <span className="text-xs text-[#5C5C5C] leading-snug">
            Lost annually per restaurant<br />due to missed calls
          </span>
        </div>
        <div className="hidden sm:block w-px h-12 bg-[#E5E3DB]" />
        <div className="text-center">
          <span className="block text-3xl sm:text-4xl font-bold text-[#E07A5F] leading-none mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            83%
          </span>
          <span className="text-xs text-[#5C5C5C] leading-snug">
            Callers who never<br />call back if unanswered
          </span>
        </div>
        <div className="hidden sm:block w-px h-12 bg-[#E5E3DB]" />
        <div className="text-center">
          <span className="block text-3xl sm:text-4xl font-bold text-[#E07A5F] leading-none mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            90
          </span>
          <span className="text-xs text-[#5C5C5C] leading-snug">
            Days to see measurable<br />revenue results
          </span>
        </div>
      </div>
    </section>
  );
}
