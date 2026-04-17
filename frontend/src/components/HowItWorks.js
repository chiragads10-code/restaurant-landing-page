const STEPS = [
  {
    num: "1",
    title: "Deep-Dive Strategy Call (Day 1)",
    desc: "We audit your current reservations, call volume, no-show rate, and customer flow. We identify exactly where your restaurant is leaking revenue — and map a custom AI system to fix it.",
    tag: "Free — No obligation",
  },
  {
    num: "2",
    title: "AI System Build & Integration (Days 2–14)",
    desc: "We deploy your 24/7 AI voice assistant, WhatsApp/SMS booking chatbot, and no-show reminder system. Everything integrates with your existing setup — no tech headache on your end.",
    tag: "Done-for-you setup",
  },
  {
    num: "3",
    title: "Go Live & Optimize (Days 15–30)",
    desc: "Your systems go live. We monitor performance daily, fine-tune responses, and make sure no call, booking, or follow-up slips through the cracks.",
    tag: "Hands-on support",
  },
  {
    num: "4",
    title: "Scale & Report (Days 31–90)",
    desc: "You get a real-time dashboard showing bookings, calls answered, no-shows reduced, and revenue recovered. We hold weekly check-ins and continuously improve your results.",
    tag: "Full transparency",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-testid="how-it-works-section"
      className="py-20 sm:py-24 px-5 sm:px-8 bg-white border-t border-b border-[#E5E3DB]"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A5D23] mb-4">
          Our Process
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] leading-tight mb-12">
          Your 90-Day Growth Journey,
          <br />
          <em className="italic text-[#E07A5F]">Step by Step</em>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line" />

          <div className="flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                data-testid={`step-${step.num}`}
                className={`flex gap-7 items-start relative ${i < STEPS.length - 1 ? "pb-12" : ""}`}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#F9F8F6] border border-[#E5E3DB] flex items-center justify-center relative z-10">
                  <span
                    className="text-xl font-bold text-[#4A5D23]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {step.num}
                  </span>
                </div>
                <div className="pt-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5C5C5C] leading-relaxed mb-2.5">{step.desc}</p>
                  <span className="inline-block text-xs font-semibold text-[#3FB77A] bg-[#3FB77A]/10 rounded-md px-3 py-1">
                    {step.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
