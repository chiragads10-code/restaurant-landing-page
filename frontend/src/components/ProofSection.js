export default function ProofSection() {
  return (
    <section data-testid="proof-section" className="py-20 sm:py-24 px-5 sm:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A5D23] mb-6">
          The Fix
        </p>
        <blockquote className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold italic text-[#1A1A1A] leading-snug tracking-tight max-w-[740px] mx-auto mb-10">
          "What if your restaurant could{" "}
          <span className="not-italic text-[#E07A5F]">answer every call, fill every table,</span>{" "}
          and follow up with every guest — automatically, 24/7 — without hiring a single extra person?"
        </blockquote>

        <div className="max-w-[700px] mx-auto border border-[#E5E3DB] rounded-2xl overflow-hidden flex flex-wrap">
          {[
            { num: "27%", label: "Reduction in no-shows\nwith AI reminders" },
            { num: "25%", label: "Increase in table\nturnover rate" },
            { num: "20%", label: "Cut in labor costs\non repetitive tasks" },
          ].map((stat, i) => (
            <div
              key={stat.num}
              data-testid={`proof-stat-${i}`}
              className={`flex-1 min-w-[160px] py-7 px-5 text-center ${i < 2 ? "border-r border-[#E5E3DB]" : ""}`}
            >
              <span
                className="block text-4xl font-bold text-[#E07A5F] leading-none mb-1.5"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {stat.num}
              </span>
              <span className="text-xs text-[#5C5C5C] whitespace-pre-line">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
