import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    q: "Do I need any technical knowledge to run this?",
    a: "Not at all. We handle 100% of the setup, integration, and ongoing management. You just see more bookings coming in and less missed calls on your end.",
  },
  {
    q: "Will this work with my existing reservation system or POS?",
    a: "Yes. We integrate with most major POS systems (Toast, Square, Petpooja, etc.) and reservation platforms. If you're using WhatsApp or just a phone today, we can work with that too — no fancy setup required.",
  },
  {
    q: "How long does setup take?",
    a: "Most restaurants are fully live within 7–14 days of our kickoff call. Some systems go live in under a week depending on complexity.",
  },
  {
    q: "What if I don't see results?",
    a: "We stand behind our results. If your restaurant doesn't see measurable improvement in bookings and missed-call reduction within 90 days, we work for free until you do — or we'll refund you. Simple.",
  },
  {
    q: "How much does this cost?",
    a: "Pricing depends on your restaurant's size, call volume, and systems involved. Book a free call and we'll give you a clear, transparent quote — no surprises. Most restaurants see the system pay for itself within the first month.",
  },
  {
    q: "Is this just for big restaurant chains?",
    a: "Absolutely not. We work with single-location restaurants, QSRs, fine-dining spots, and everything in between. The AI system scales to your size and volume — you don't need to be a chain to benefit.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="py-20 sm:py-24 px-5 sm:px-8 bg-[#F3F2EE] border-t border-[#E5E3DB]"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A5D23] mb-4">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] leading-tight">
            Still Have Questions?
            <br />
            <em className="italic text-[#E07A5F]">We've Got Answers.</em>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              data-testid={`faq-item-${i}`}
              className="border-b border-[#E5E3DB]"
            >
              <AccordionTrigger
                data-testid={`faq-trigger-${i}`}
                className="text-base font-medium text-[#1A1A1A] hover:no-underline py-5 text-left"
              >
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#5C5C5C] leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
