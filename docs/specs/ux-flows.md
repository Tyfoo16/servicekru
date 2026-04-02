# ServiceKru — UX Flows

The site serves two distinct audiences. Each must reach their goal action within 3 clicks/scrolls from the homepage. Their journeys must not interfere.

---

## Flow 1 — Customer Journey: Book a Service

### Entry Points
- Direct URL or social/search ad → Hero section
- Google search → deep link to `#booking`
- Per-service CTA from `#services` → `#booking`

### Step-by-Step

**Step 1: Hero (`#hero`)**
- Reads headline and subheadline
- Sees two CTAs: [Book a Service] [Become a ServiceKru]
- Action: clicks **Book a Service**
- → scrolls to `#booking`

**Step 2: Booking (`#booking`)**
- Scans service options table (Cleaning / Childcare / Elder Care + pricing)
- Reads 4-step booking process (reassurance)
- Reads safety guarantees (trust reinforcement)
- Action: clicks **Confirm Booking via WhatsApp**
- → opens WhatsApp with pre-filled message (external)

**Optional detour — needs more reassurance:**
- Hero → scrolls to `#services` → reads service detail cards
- `#services` per-service CTA → `#booking`

### Goal Action
WhatsApp CTA click (`wa.me/[number]`)

### Drop-off Risk Points
- Childcare and Elder Care show no price in table → use "Contact for pricing" instead of empty dash
- WhatsApp CTA requires WhatsApp installed on device — acceptable for Malaysian market; add fallback phone number in footer

---

## Flow 2 — Provider Journey: Become a ServiceKru

### Entry Points
- Hero → [Become a ServiceKru] CTA → `#become`
- Direct URL or social ad targeting women job-seekers
- Footer link → `#become`
- `#how-it-works` → [Apply Now] CTA → `#become`

### Step-by-Step

**Step 1: Hero (`#hero`)**
- Subheadline mentions "start your journey as a certified ServiceKru professional"
- Action: clicks **Become a ServiceKru**
- → scrolls to `#become`

**Step 2: Become a ServiceKru (`#become`)**
- Reads earnings: RM80–120/job, RM800–2,400/month
- Reads benefits list (flexibility, community, skills)
- Reviews training tier table (Tier 1–4)
- Action: clicks **Apply Now**
- → scrolls to `#enquiry` (existing form)

**Optional detour — wants to understand process first:**
- Hero → scrolls to `#how-it-works` → reads 4-step apply process
- `#how-it-works` → [Apply Now] → `#become`

**Step 3: Enquiry Form (`#enquiry`)**
- Fills: First Name, Last Name, Email, Phone, Course of Interest, Background
- Submits
- → success message: "We'll contact you within 24 hours"

### Goal Action
Enquiry form submission

---

## Flow 3 — Navigation Mapping

| Nav Label           | Target       | Primary Audience |
|---------------------|--------------|------------------|
| Services            | `#services`  | Customer         |
| Booking             | `#booking`   | Customer         |
| How It Works        | `#how-it-works` | Provider      |
| Become a ServiceKru | `#become`    | Provider         |
| [Book a Service] pill | `#booking` | Customer         |

### Current State vs Required (index.html)

| Nav Item          | In index.html | Action Required                      |
|-------------------|---------------|--------------------------------------|
| About             | Yes (`#about`)| Keep — maps to Why Choose section    |
| Courses           | Yes (`#courses`) | Rename to "Services" → `#services` |
| Success Stories   | Yes           | Keep or merge into `#become`         |
| Get Started       | Yes (`#enquiry`) | Keep                              |
| Booking           | **No**        | Add link → `#booking`               |
| How It Works      | **No**        | Add link → `#how-it-works`          |

---

## Flow 4 — Mobile Navigation

- Hamburger button at ≤768px toggles vertical nav-links drawer
- Both primary CTAs (Book a Service, Become a ServiceKru) must be reachable within 2 taps on mobile
- WhatsApp CTA must use `wa.me` deep link to open the native WhatsApp app
- Avoid horizontal scroll on any section at mobile width

---

## Accessibility Notes

| Element | Requirement |
|---------|-------------|
| WhatsApp button | `aria-label="Book a service via WhatsApp"` |
| Step numbers | `aria-label="Step 1 of 4: Choose your service"` |
| Form fields | Maintain existing `label[for]` pattern — do not replace with `placeholder` only |
| Colour contrast | `#ee751e` on white passes WCAG AA at 14px bold+ — do not use orange on colored backgrounds for body text |
| Mobile menu button | `aria-expanded` state must toggle with menu open/close |
