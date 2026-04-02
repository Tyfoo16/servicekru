# ServiceKru — Component Specifications

---

## 1. Design Tokens (from `index.html :root`)

### Colours

| Token                 | Value     | Usage                              |
|-----------------------|-----------|------------------------------------|
| `--color-orange`      | `#ee751e` | Primary CTAs, highlights           |
| `--color-orange-dark` | `#d56510` | CTA hover state                    |
| `--color-orange-light`| `#fff4eb` | Card backgrounds, tints            |
| `--color-blue`        | `#004591` | Nav, headings, badges              |
| `--color-blue-dark`   | `#003470` | Blue hover state                   |
| `--color-blue-light`  | `#e8f0fa` | Section backgrounds, icon circles  |
| `--color-white`       | `#FFFFFF` | Page background, card backgrounds  |
| `--color-gray-100`    | `#f8f9fa` | Alternating section backgrounds    |
| `--color-gray-200`    | `#e9ecef` | Borders, dividers                  |
| `--color-gray-600`    | `#6c757d` | Body text, subheadings             |
| `--color-gray-800`    | `#343a40` | Default text                       |
| `--color-gray-900`    | `#212529` | Hero heading                       |

### Typography

| Token              | Value                  | Usage               |
|--------------------|------------------------|---------------------|
| `--font-primary`   | `'Poppins', sans-serif`| Body, UI, buttons   |
| `--font-secondary` | `'Montserrat', sans-serif` | Headings, logo  |

### Spacing & Layout

- Section container: `max-width: 1200px`, centered, `padding: 0 2rem`
- Section padding: `5rem 0` to `6rem 0` vertical
- Card gap: `2rem` (CSS grid gap)
- Border radius (cards): `16px`
- Border radius (buttons): `50px`

---

## 2. Existing Components (built in `index.html`)

### 2.1 Navigation Bar

- Fixed, full-width, `backdrop-filter: blur(10px)`
- Logo: "serViceKRU" — blue/orange split colouring, bowtie icon, `font-family: Montserrat`
- Nav links: text with orange underline on hover
- Nav CTA pill: "Get Started" → `#enquiry` (orange pill button)
- Mobile: hamburger button visible at ≤768px; toggles vertical nav-links

### 2.2 Primary Button (`.btn-primary`)

- Background: `--color-orange`, `border-radius: 50px`
- Padding: `1rem 2.5rem`
- Inline SVG right-arrow icon
- Hover: `--color-orange-dark`, `translateY(-3px)`, elevated shadow

### 2.3 Secondary Button (`.btn-secondary`)

- Background: transparent, `border: 2px solid --color-blue`
- Hover: background `--color-blue`, text white

### 2.4 Section Header Block (`.section-header`)

- `.section-tag`: small pill label — orange border, orange text, sentence case
- `H2`: bold, centred; use `<span>` to colour one key term in `--color-orange`
- `p`: subheading in `--color-gray-600`

### 2.5 Feature Card (`.feature-card`)

- White background, `border-radius: 16px`
- Top icon: 56px circle with `--color-blue-light` background + emoji/SVG
- H3 + paragraph body text
- Hover: `translateY(-5px)`, orange top border (`border-top: 3px solid --color-orange`), blue box shadow

### 2.6 Course Card (`.course-card`)

- White background, `border-radius: 16px`, `overflow: hidden`
- Coloured image header div + icon + optional badge
- Content area: H3, description, meta row (duration + certificate icon)
- Hover: `translateY(-5px)`, elevated shadow

### 2.7 Testimonial Card (`.testimonial-card`)

- White background, rounded corners, padding
- Star rating row (5 stars in orange)
- Quote text in gray-600
- Author: 2-letter monogram avatar (coloured circle) + name + label

### 2.8 Enquiry Form (existing in `#enquiry`)

- Two-column form row layout
- Inputs: full-width, `border-radius: 12px`, orange focus ring
- Required field asterisk on labels
- Submit: full-width, `.btn-primary` style
- Success state: form hidden, success div shown with checkmark + "We'll contact you within 24 hours"

---

## 3. New Components Required (not yet built)

### 3.1 Service Card (for `#services`)

- Displays: service name, starting price badge, description, per-service CTA
- Price badge: `--color-orange` background, white text (e.g., "From RM120")
- Layout: 3-column grid on desktop (`repeat(3, 1fr)`), single column on mobile
- Reuse `.feature-card` base styles; add price badge variant

### 3.2 Service Options Table (for `#booking`)

- 3 columns: Service | Options | Starting Price
- Header row: `--color-blue` background, white text
- Striped rows: alternate `--color-gray-100` / white
- Mobile: collapse to one card per service row

### 3.3 Numbered Step Component (for `#booking` and `#how-it-works`)

- Horizontal stepper on desktop, vertical on mobile
- Step number: 40px circle, `--color-orange` background, white bold number
- Connector line between steps: `1px solid --color-gray-200`
- Step label: centred below circle, `font-weight: 600`
- **Both booking process and how-it-works use this same pattern** — single reusable component/CSS class

### 3.4 Safety/Trust Checklist (for `#booking`)

- 4-item list with orange checkmark icons
- Layout: 2×2 grid on desktop, stacked on mobile
- Item: checkmark SVG + label text inline

### 3.5 Earnings Display (for `#become`)

- Two cards side by side: Part-time vs Full-time
- Income range in large font (2rem+), `--color-orange`
- Availability label in `--color-blue`, smaller
- Variant of `.feature-card` base styles

### 3.6 Training Tier Table (for `#become`)

- 4 rows: Tier | Specialisation
- Tier number: orange badge (circle or pill)
- Matches `.course-card` visual language (same colour palette)

### 3.7 WhatsApp CTA Button

- Distinct from `.btn-primary`
- Recommended: orange background with WhatsApp SVG icon prepended (align with brand)
- Alternative: `#25D366` green — only if brand approves divergence
- Label: "Confirm Booking via WhatsApp"
- `aria-label`: "Book a service via WhatsApp"
- Link: `href="wa.me/[WhatsApp number TBD]"`, `target="_blank"`, `rel="noopener noreferrer"`

---

## 4. Responsive Breakpoints (from `index.html`)

| Breakpoint      | Behaviour |
|-----------------|-----------|
| ≤768px (mobile) | Nav: hamburger replaces nav-links; hero: single column; cards: single column; stepper: vertical |
| ≥769px (desktop)| Nav: full horizontal; hero: 2-column grid; cards: 3-column grid; stepper: horizontal |
