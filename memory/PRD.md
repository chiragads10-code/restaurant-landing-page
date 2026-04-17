# Sadafal Tech Landing Page — PRD

## Original Problem Statement
Build a high-converting landing page for Sadafal Tech, an AI-powered restaurant growth agency targeting restaurant owners in India. The page should include: Navigation, Hero with stats, VSL video placeholder, Pain points grid, Proof/stats section, How It Works timeline, Deliverables grid, Booking section, FAQ accordion, Final CTA, and Footer.

## User Personas
- **Primary**: Restaurant owners in India looking to grow revenue through AI automation
- **Secondary**: Restaurant managers evaluating tech solutions for operational efficiency

## Core Requirements
- Landing page with all sales funnel sections
- All CTA buttons link to external Calendly: https://sadafaltech.com/book-a-call
- VSL video placeholder inside hero (visible without scrolling)
- FAQ accordion (shadcn)
- Mobile responsive design

## What's Been Implemented (Dec 2025)
- Full landing page with 11 sections: Nav, Hero+VSL, CTA box, Pain Points, Proof, How It Works, Deliverables, Booking, FAQ, Final CTA, Footer
- Backend API for booking storage (MongoDB) — POST/GET /api/bookings
- All CTAs link to https://sadafaltech.com/book-a-call (target=_blank)
- Responsive design with mobile hamburger menu
- Shadcn Accordion for FAQ, Shadcn Button/Input components
- Cormorant Garamond + Manrope typography
- Organic earthy theme: #F9F8F6 bg, #4A5D23 primary, #E07A5F accent

## Prioritized Backlog
- **P0**: Replace video placeholder with actual video embed (user to provide URL)
- **P0**: Connect Calendly embed URL when ready
- **P1**: Add SEO meta tags and Open Graph data
- **P1**: Add scroll-triggered animations (intersection observer)
- **P2**: Add testimonials/case studies section
- **P2**: Add Google Analytics / tracking pixels
- **P2**: Add WhatsApp floating chat button

## Next Tasks
- User to provide video embed URL for VSL section
- User to finalize Calendly integration details
- SEO optimization pass
