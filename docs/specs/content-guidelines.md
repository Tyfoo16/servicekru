# ServiceKru — Content Guidelines

---

## 1. Brand Voice

- **Tone:** warm, empowering, professional — not clinical or corporate
- **Register:** direct and respectful; uses "you" and "your"
- **Values to convey:** trust, safety, empowerment, flexibility, community
- **Avoid:** jargon, overly formal language, vague superlatives ("best-in-class", "world-class", "revolutionary")

---

## 2. Headline Conventions

| Type | Rule | Example |
|------|------|---------|
| H1 (hero) | Active, benefit-led, ≤12 words | "Trusted home services provided by certified women professionals" |
| H2 (section) | Concise, 4–7 words; highlight one key term in `--color-orange` via `<span>` | "Book Trusted `<span>`Home Services`</span>`" |
| Section tag | 2–3 word category label, sentence case, in `.section-tag` pill | "Our Services", "For Professionals", "Join Our Team" |

---

## 3. CTA Copy Rules

**Primary CTAs — imperative verb + specific action:**
- Good: "Book Cleaning", "Apply Now", "Confirm Booking via WhatsApp"
- Avoid: "Learn More", "Click Here", "Submit", "Go"

**Secondary CTAs — softer action:**
- Good: "Explore Services", "See How It Works"
- Avoid: "Find Out More"

---

## 4. Pricing Format

| Rule | Correct | Incorrect |
|------|---------|-----------|
| Currency prefix | RM120 | MYR 120, RM 120, 120RM |
| Ranges | RM800–RM1,200/month | RM800-RM1,200 (hyphen), RM800 – 1,200 |
| "From" qualifier | "Starting from RM120", "From RM130/session" | "~RM120", "about RM120" |
| Unknown pricing | "Contact for pricing" | "—", blank cell, "TBA" |

- Use en-dash (–) not hyphen (-) for ranges
- Always include `/month`, `/job`, `/session` unit qualifiers where applicable

---

## 5. Professional Title Conventions

| Use | Avoid |
|-----|-------|
| "certified ServiceKru" | "worker", "helper", "cleaner" (as a job title) |
| "certified professionals" | "candidates", "staff" |
| "background-checked and verified" | "screened" (too clinical) |
| "every booking is insured and protected" | "legally guaranteed" (unqualified legal claim) |
| "service guaranteed" | "100% guaranteed", "money-back guaranteed" (unless policy exists) |

---

## 6. Provider Messaging

- Refer to prospective providers as "professionals", not "workers" or "candidates"
- Earnings: always present as a range — do not promise fixed amounts
  - Correct: "Earn from RM80–RM120/job"
  - Incorrect: "Earn RM100/job guaranteed"
- Training: "structured training programme" — do not oversell as "intensive" or "advanced boot camp"
- Certification: "Digital Certification" (capital D and C) — consistent with `content.md`
- Tiers: "Tier 1", "Tier 2", etc. — always capitalise Tier

---

## 7. Placeholder Copy Standards

When content is not yet confirmed, use clearly bracketed placeholders — not Lorem Ipsum:

| Content | Placeholder |
|---------|-------------|
| WhatsApp number | `[WhatsApp number TBD]` |
| Application form URL | `[Application URL TBD]` |
| Social links | `[Facebook URL]`, `[Instagram URL]`, `[LinkedIn URL]` |
| Contact email | `[Contact email TBD]` |

Bracketed placeholders are visually obvious and `grep`-able. Never use Lorem Ipsum in staging builds.

---

## 8. Page Meta Copy

| Section             | `<title>` suggestion | `<meta description>` suggestion |
|---------------------|---------------------|---------------------------------|
| Home                | ServiceKru — Trusted Home Services in Malaysia | Book certified women professionals for cleaning, childcare and elder care in Malaysia. Starting from RM120. |
| Services            | Home Cleaning, Childcare & Elder Care — ServiceKru | — |
| Booking             | Book a ServiceKru Professional | — |
| Become a ServiceKru | Join ServiceKru — Train, Certify & Earn | Get trained, certified and earn RM800–RM2,400/month with ServiceKru. Flexible schedule, structured programme. |

---

## 9. Image Alt Text Conventions

| Image type | Alt text pattern |
|------------|-----------------|
| Service cards | "ServiceKru professional providing [service name]" |
| Trust/feature icons | Describe function, not appearance — "Background check verified icon" |
| Provider photos | "ServiceKru Tier [N] certified professional" |
| Hero visual | "ServiceKru certified professional at work" |
| Avoid | "image of", "photo of", "icon of" as alt text prefixes |
