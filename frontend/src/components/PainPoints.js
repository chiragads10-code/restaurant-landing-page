import { PhoneOff, Armchair, Banknote, RotateCcw } from "lucide-react";

const PAIN_CARDS = [
  {
    icon: PhoneOff,
    title: "Calls Going Unanswered",
    desc: "During peak service, your team can't pick up the phone. Every missed call is a missed table — potentially forever.",
    stat: "78–85% never call back",
    accent: "bg-[#E07A5F]/10",
    iconColor: "text-[#E07A5F]",
  },
  {
    icon: Armchair,
    title: "Empty Tables from No-Shows",
    desc: "Guests book, then vanish. No reminders, no follow-up. You're stuck with reserved tables that never fill.",
    stat: "Costs lakhs every year",
    accent: "bg-[#4A5D23]/8",
    iconColor: "text-[#4A5D23]",
  },
  {
    icon: Banknote,
    title: "Staff Stuck on the Phone",
    desc: "Your waitstaff spends 12–18% of their shift answering calls and managing bookings instead of serving guests.",
    stat: "30–35% of revenue = labor",
    accent: "bg-[#E07A5F]/10",
    iconColor: "text-[#E07A5F]",
  },
  {
    icon: RotateCcw,
    title: "Guests Don't Come Back",
    desc: "No system to follow up after a visit, no personalized offers, no loyalty. Every customer is a one-time transaction.",
    stat: "Repeat visits = 5x cheaper",
    accent: "bg-[#4A5D23]/8",
    iconColor: "text-[#4A5D23]",
  },
];

export default function PainPoints() {
  return (
    <section data-testid="pain-points-section" className="py-20 sm:py-24 px-5 sm:px-8 bg-[#F3F2EE]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A5D23] mb-4">
            Does This Sound Like You?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] leading-tight">
            Your Restaurant Is Losing Money{" "}
            <em className="italic text-[#E07A5F]">Right Now</em> — and You Don't Even Know It
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PAIN_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                data-testid={`pain-card-${card.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white border border-[#E5E3DB] rounded-2xl p-7 hover-lift"
              >
                <div className={`w-12 h-12 rounded-xl ${card.accent} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${card.iconColor}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] tracking-tight mb-2">{card.title}</h3>
                <p className="text-sm text-[#5C5C5C] leading-relaxed mb-3">{card.desc}</p>
                <span className="inline-block text-xs font-semibold text-[#E05252] bg-[#E05252]/8 rounded-md px-3 py-1">
                  {card.stat}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
