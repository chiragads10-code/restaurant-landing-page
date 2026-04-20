import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VSLSection from "@/components/VSLSection";
import PainPoints from "@/components/PainPoints";
import ProofSection from "@/components/ProofSection";
import HowItWorks from "@/components/HowItWorks";
import Deliverables from "@/components/Deliverables";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      <Navigation />
      <Hero />
      <VSLSection />
      <PainPoints />
      <ProofSection />
      <HowItWorks />
      <Deliverables />
      <BookingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
