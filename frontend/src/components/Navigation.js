import { Phone, Check, PhoneOff, Armchair, DollarSign, RefreshCw, Mic, MessageCircle, Bell, BarChart3, Target, Link2, ArrowRight, Play, Clock, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "What's Included", href: "#deliverables" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      data-testid="main-navigation"
      className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-[#E5E3DB]/60"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        <a href="#" data-testid="logo-link" className="flex items-center gap-1">
          <span className="text-2xl font-bold tracking-tight text-[#4A5D23]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Sadafal
          </span>
          <span className="text-2xl font-light tracking-tight text-[#1A1A1A]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Tech
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#5C5C5C] hover:text-[#1A1A1A] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="https://sadafaltech.com/book-a-call" target="_blank" rel="noopener noreferrer" data-testid="nav-cta-button">
            <Button className="rounded-full bg-[#4A5D23] hover:bg-[#3C4A1C] text-white font-semibold text-sm px-6 py-2.5 h-auto transition-all hover:scale-[1.03]">
              Book Free Strategy Call
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden p-2 text-[#1A1A1A]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E5E3DB] bg-[#F9F8F6] px-5 py-4 flex flex-col gap-4 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#5C5C5C] hover:text-[#1A1A1A]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="https://sadafaltech.com/book-a-call" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
            <Button className="w-full rounded-full bg-[#4A5D23] hover:bg-[#3C4A1C] text-white font-semibold text-sm px-6 py-2.5 h-auto">
              Book Free Strategy Call <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
