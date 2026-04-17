import { Mic, MessageCircle, Bell, BarChart3, Target, Link2 } from "lucide-react";

const DELIVERABLES = [
  {
    icon: Mic,
    title: "AI Voice Assistant (24/7)",
    desc: "Answers every call, handles reservations, answers FAQs, and takes orders — even at 2 AM when you're closed.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & SMS Booking Bot",
    desc: "Customers book directly from WhatsApp. Automatic confirmations and reminders sent without any manual work.",
  },
  {
    icon: Bell,
    title: "No-Show Prevention System",
    desc: "Automated reminders at 48 hours, 24 hours, and 2 hours before every reservation. One-click confirm or cancel.",
  },
  {
    icon: BarChart3,
    title: "Live Revenue Dashboard",
    desc: "See calls answered, bookings converted, no-shows reduced, and exact revenue recovered — updated in real time.",
  },
  {
    icon: Target,
    title: "Post-Visit Follow-Up & Re-marketing",
    desc: "Automated messages after every visit to collect reviews, offer comebacks, and turn one-timers into regulars.",
  },
  {
    icon: Link2,
    title: "Full System Integration",
    desc: "We connect everything to your existing POS, Google Maps, reservation platform, and WhatsApp Business.",
  },
];

export default function Deliverables() {
  return (
    <section
      id="deliverables"
      data-testid="deliverables-section"
      className="py-20 sm:py-24 px-5 sm:px-8 bg-[#F3F2EE] border-t border-b border-[#E5E3DB]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A5D23] mb-4">
            What's Included
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] leading-tight">
            Everything You Need to Run a
            <br />
            <em className="italic text-[#E07A5F]">Fully Automated</em> Restaurant Front-End
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DELIVERABLES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                data-testid={`deliverable-${item.title.toLowerCase().replace(/\s+/g, "-").replace(/[()\/&]/g, "")}`}
                className="bg-white border border-[#E5E3DB] rounded-2xl p-7 hover-lift"
              >
                <div className="w-10 h-10 rounded-lg bg-[#3FB77A]/12 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#3FB77A]" strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-2">{item.title}</h4>
                <p className="text-sm text-[#5C5C5C] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
