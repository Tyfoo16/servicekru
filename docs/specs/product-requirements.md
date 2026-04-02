# ServiceKru — Product Requirements Document

## 1. Product Overview

**Product:** ServiceKru  
**Tagline:** Trusted home services provided by certified women professionals  
**Mission:** A Malaysian home services marketplace connecting customers who need cleaning, childcare, and elder care with certified women professionals who want flexible, dignified employment.  
**Currency:** MYR (RM)  
**Current state:** Single-page marketing site (`index.html`) built as a training-platform prototype  
**Target state:** Full five-section website aligned to the wireframes in `docs/content.md`

---

## 2. Target Audiences

### Audience A — Service Customers
- Busy Malaysian households needing home cleaning, childcare, or elder care
- Trust signals they require: background checks, insurance coverage, verified reviews
- Primary goal action: book a service via WhatsApp CTA

### Audience B — Service Providers (women professionals)
- Women seeking flexible income or returning to the workforce
- Motivators: earning potential (RM80–120/job), flexible schedule, structured certification
- Primary goal action: submit an enquiry/application form

---

## 3. Business Goals

1. Convert website visitors into booking enquiries (WhatsApp CTA clicks)
2. Convert interested women into provider applicants (form submissions)
3. Build trust through transparency — visible pricing, certifications, safety guarantees

---

## 4. Feature Scope

### In Scope (v1 website)
- Hero section with dual CTA (Book a Service / Become a ServiceKru)
- Trust/Why Choose section (4 trust points)
- Services catalogue with pricing (Cleaning from RM120, Elder Care from RM130/session, Childcare hourly)
- Booking section: service options table, 4-step process, safety guarantees, WhatsApp CTA
- How It Works section (provider onboarding: apply → train → certify → work)
- Become a ServiceKru section (earnings, training tiers, Apply Now CTA)
- Footer with nav links and social links

### Out of Scope (v1)
- Online payment processing
- Real-time availability calendar
- Provider dashboard or login portal
- Customer review/rating submission system
- SMS or push notifications
- Multi-language support (Bahasa Malaysia)

---

## 5. Success Metrics

- WhatsApp booking CTA click-through rate
- Provider application form submission count
- Bounce rate per section (via scroll depth analytics)
- Time on Become a ServiceKru section

---

## 6. Content Authority

- Primary copy source: `docs/content.md`
- Currency format: always prefix with `RM` (no space) — e.g., RM120, RM130/session
- Language: English (Malaysian audience, warm and professional tone)
- See `docs/specs/content-guidelines.md` for full copy rules

---

## 7. Gap Analysis: content.md vs Current index.html

| Content.md Section          | HTML Anchor      | Status in index.html                                  |
|-----------------------------|------------------|-------------------------------------------------------|
| Home / Hero (Page 1)        | —                | Partially built — hero exists but no `id="hero"` anchor; CTAs differ from spec |
| Why Choose ServiceKru       | `#about`         | Built — 4 feature cards present; copy needs alignment |
| Our Services (Page 2)       | `#courses`       | Not aligned — courses section present but maps to training, not service catalogue |
| Booking (Page 3)            | —                | Not built                                             |
| How It Works (Page 4)       | —                | Not built                                             |
| Become a ServiceKru (Page 5)| `#enquiry`       | Partially built — enquiry form exists; earnings/tier content missing |

**Action required:** Add `id` anchors to Hero; rename or replace `#courses` with `#services`; build `#booking` and `#how-it-works` sections; expand `#enquiry` / create `#become` section.
