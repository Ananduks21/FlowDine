# FlowDine — Restaurant Operating System Marketing Site

## Original Problem Statement
Premium, conversion-focused SaaS marketing website for FlowDine, a Restaurant Operating System (ROS) handling QR ordering, real-time order management, KOT, billing, table management, waiter call/bill request, menu/staff management, reservations, and analytics. React-only build with real product UI screenshots.

## Architecture
- **Stack**: React 19 + React Router v7, Tailwind, shadcn/ui, sonner toasts
- **Pages**: Home, Pricing, Blog, Blog Detail (`/blog/:slug`), 404
- **Forms**: Web3Forms (client-side) — replace placeholder `YOUR_WEB3FORMS_ACCESS_KEY` in `/app/frontend/src/components/ContactModal.jsx` when live
- **No backend** — fully static marketing site

## User Personas
1. Restaurant owner researching POS/ROS solutions
2. Operations manager comparing tools
3. F&B consultants/agencies evaluating for clients

## Core Requirements (Static)
- Sticky navbar, smooth scroll, fully responsive, SEO meta tags
- Real product UI screenshots (4 provided by user)
- Brand: FlowDine, primary `#0e4839`, accent `#f59e0b`, off-white `#faf8f3`
- Typography: Bricolage Grotesque (display) + Manrope (body)

## What's Been Implemented (Feb 2026)
- ✅ Home page: hero with floating UI cards, problem (5 pain points), solution flow (5 steps), 4-feature alternating showcase using real screenshots, real-challenges grid, how-it-works (5 numbered circles), product grid (4 screenshots), final CTA
- ✅ Pricing page: 3 tiers (Base ₹999, Core ₹1,999 Most Popular, Max ₹2,999), monthly/yearly toggle (-20%), enterprise CTA
- ✅ Blog page: 1 featured + 4 grid cards, 5 fully-written articles
- ✅ Blog detail: breadcrumb, author block, hero image, rich HTML content, sticky share rail, CTA, related blogs, back-link
- ✅ 404 page with playful design
- ✅ Contact modal (Web3Forms) with validation, loading & success states
- ✅ All testids attached for testing
- ✅ Tested 25/25 frontend flows pass

## Prioritized Backlog
### P1
- Replace placeholder Web3Forms access key with real one (user action)
- Improve ContactModal failure UX after key replacement (currently masks failures)
- Add inline per-field validation in ContactModal

### P2
- Customer logos / testimonials section
- FAQ section on pricing page
- Case studies sub-route under /blog
- Newsletter capture in footer
- Open Graph dynamic images per blog
- Sitemap.xml + robots.txt for SEO

### P3
- Multi-language toggle (English / Hindi)
- Live chat widget
- ROI calculator interactive component

## Test Credentials
N/A — no authentication.
