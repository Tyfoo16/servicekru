# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ServiceKru is a Malaysian home services marketplace website connecting customers with certified women professionals for cleaning, childcare, and elder care. Currency is MYR (RM).

**Two distinct audiences:**
- **Customers** seeking home services → goal: WhatsApp booking CTA click
- **Providers** (women professionals) seeking flexible work → goal: enquiry form submission

## Site Structure

- `index.html` - Main production site (single-page with section anchors)
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

**Key colors:**
- `--color-orange: #ee751e` - Primary CTAs, highlights
- `--color-pink: #ad1457` - Logo "Service" portion
- `--color-gray-800: #343a40` - Default text

**Breakpoints:** ≤768px mobile (hamburger nav, single-column), ≥769px desktop (full nav, multi-column grids)

## Section Anchors (index.html)

Required sections per `page-specs.md`:
- `#hero` - Hero with dual CTA
- `#about` - Why Choose ServiceKru (4 trust cards)
- `#services` - Service catalogue with pricing
- `#booking` - Booking flow, options table, safety checklist, WhatsApp CTA
- `#how-it-works` - Provider onboarding steps
- `#become` - Provider benefits, earnings, training tiers
- `#enquiry` - Application form
