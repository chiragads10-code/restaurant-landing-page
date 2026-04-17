export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-[#1A1A1A] py-16 sm:py-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <span
          className="text-3xl sm:text-4xl font-bold text-white/90 tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Sadafal<span className="font-light text-white/50">Tech</span>
        </span>
        <p className="text-sm text-white/40 mt-3 mb-6">AI Systems for Restaurants</p>

        <div className="flex items-center justify-center gap-6 mb-8">
          <a href="#how-it-works" className="text-sm text-white/50 hover:text-white/80 transition-colors">
            How It Works
          </a>
          <a href="#deliverables" className="text-sm text-white/50 hover:text-white/80 transition-colors">
            What's Included
          </a>
          <a href="#faq" className="text-sm text-white/50 hover:text-white/80 transition-colors">
            FAQ
          </a>
          <a href="#book" className="text-sm text-white/50 hover:text-white/80 transition-colors">
            Book a Call
          </a>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-white/30">
            © 2025 Sadafal Technologies. All rights reserved. ·{" "}
            <a href="#" className="text-[#E07A5F]/60 hover:text-[#E07A5F] transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
