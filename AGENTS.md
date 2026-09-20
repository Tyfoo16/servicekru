# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

ServiceKru is a Malaysian home services marketplace website connecting customers with certified women professionals for cleaning, childcare, and elder care. Currency is MYR (RM).

**Two distinct audiences:**
- **Customers** seeking home services → goal: WhatsApp booking CTA click
- **Providers** (women professionals) seeking flexible work → goal: enquiry form submission

## Site Structure

- `index.html` - Main production homepage: the Blue-Collar Digital OS landing page (served at `/`)
- `home-legacy.html` - Previous homepage (home services marketplace single-page with section anchors), demoted but still reachable at `/home-legacy.html`
- `golden-hour.html` - Alternative design variant
- `redesigned-site/` - Multi-page redesign with separate pages for booking, services, FAQ, contact, become-a-provider

## Documentation

All specs live in `docs/specs/`:
- `product-requirements.md` - Business goals, target audiences, feature scope, gap analysis
- `page-specs.md` - Section-by-section content specs with HTML anchor IDs
- `component-specs.md` - Design tokens, existing components, new components to build
- `content-guidelines.md` - Brand voice, CTA copy rules, pricing format, terminology
- `ux-flows.md` - Customer and provider journeys, nav mapping, accessibility notes

`docs/content.md` is the **primary copy source** for all website text.

## Development

Static HTML site with no build process. Open HTML files directly in browser.

## Content Guidelines

**Pricing format:** Always `RM120` (no space after RM), ranges use en-dash: `RM800–RM1,200/month`

**Terminology:**
- Use "certified ServiceKru" or "certified professionals" — not "worker", "helper", "cleaner"
- Earnings always as ranges, never fixed amounts
- "Digital Certification" (capitalized)
- Training tiers: "Tier 1", "Tier 2", etc. (capitalized)

**CTA copy:** Imperative verb + specific action ("Book Cleaning", "Apply Now") — avoid "Learn More", "Click Here"

**Placeholders:** Use bracketed format `[WhatsApp number TBD]` — never Lorem Ipsum

## Design System

**Fonts:** Poppins (body/UI), Montserrat (headings/logo)

**Key colors** (`index.html`):
- `--color-orange: #ee751e` - Primary CTAs, highlights (`-dark` #d56510 hover, `-light` #fff4eb tints, `-text` #b8560d for small text on light)
- `--color-blue: #1565C0` - Secondary accent, CTA band (`-dark` #0D47A1, `-light` #BBDEFB tints)
- `--color-gray-800: #343a40` - Default text (`-900` #212529 headings, footer, phone mockup)

The palette is orange and blue only. Numbered step badges alternate orange, blue,
orange — never a third colour. A badge takes its step's accent (see `.os-step-num`)
rather than setting its own.

There is no pink token in `index.html`; `--color-pink` was a stale alias holding the
blue hex. `landing-variations/` still uses the old #ad1457 pink — those are design
explorations, not production.

**Breakpoints:** ≤768px mobile (hamburger nav, single-column), ≥769px desktop (full nav, multi-column grids)

## Section Anchors (home-legacy.html)

Required sections per `page-specs.md`:
- `#hero` - Hero with dual CTA
- `#about` - Why Choose ServiceKru (4 trust cards)
- `#services` - Service catalogue with pricing
- `#booking` - Booking flow, options table, safety checklist, WhatsApp CTA
- `#how-it-works` - Provider onboarding steps
- `#become` - Provider benefits, earnings, training tiers
- `#enquiry` - Application form

## Communication Style

Keep explanations brief and direct by default. Only provide detailed explanations if the user explicitly asks for more detail or clarification.
