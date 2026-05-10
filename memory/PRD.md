# FlowDine — Restaurant Operating System Marketing Site

## Original Problem Statement
Premium, conversion-focused SaaS marketing website for FlowDine, a Restaurant Operating System (ROS). Multi-page React-only build with real product UI screenshots.

## Architecture
- **Stack**: React 19 + React Router v7, Tailwind, shadcn/ui, sonner toasts
- **Pages**: Home, Features, Pricing, Blog, Blog Detail, About, Support, Careers, 4 Legal pages, 404
- **Forms**: Web3Forms (placeholder key) for demo modal; Support form is local-only (no backend)
- **No backend** — fully static marketing site

## User Personas
1. Restaurant owner researching ROS solutions
2. Operations manager comparing tools
3. F&B consultants/agencies evaluating for clients

## Core Requirements (Static)
- Sticky navbar, smooth scroll, fully responsive, SEO meta tags
- Real product UI screenshots (4 provided)
- Brand: FlowDine, primary `#0e4839`, accent `#f59e0b`, off-white `#faf8f3`
- Typography: Bricolage Grotesque (display) + Manrope (body)

## What's Been Implemented (Feb 2026)
### Iteration 1 (initial MVP)
- ✅ Home, Pricing, Blog (5 articles), Blog Detail, 404
- ✅ Contact modal with Web3Forms
- ✅ Sticky navbar, footer

### Iteration 2 (this update)
- ✅ Navbar updated: Home / Features / Pricing / Blog / Support + Brochure + Get Demo (About hidden — footer-only)
- ✅ Footer 3-column: Company (About/Contact/Careers), Product (Features/Pricing/Blog/Support), Legal (Privacy/Terms/Refund/Cookie)
- ✅ `/features` — Hero with floating UI, 10 feature cards, 6 detailed Problem→Solution→Outcome sections, dark metrics, comparison table, CTA
- ✅ `/about` — Hero + quote card, problem cards, 4-step approach timeline, 5 values, dark "Why different" section
- ✅ `/support` — Hero with live status, 6 support channels, 6 FAQ items, support form (Name/Restaurant/Phone/Email/Issue Type select/Message)
- ✅ `/privacy-policy`, `/terms-of-service`, `/refund-policy`, `/cookie-policy` — Single LegalPage component with placeholder legal content per route
- ✅ `/careers` — Coming-soon placeholder with mailto
- ✅ Pricing page: FAQ accordion (8 questions) + dark sales CTA
- ✅ Tested: 78/78 frontend flows pass

### Bug Fix (this iteration)
- LegalPage initially used `useParams()` which returned undefined for non-parameterised routes — switched to `useLocation()` and parse slug from pathname.

## Prioritized Backlog
### P1
- Replace placeholder Web3Forms access key with real one (user action)
- Wire support form to a real endpoint (Web3Forms / backend)
- Improve ContactModal failure UX after key replacement

### P2
- Customer logos / testimonials section on homepage
- Case studies sub-route under /blog
- Newsletter capture in footer
- Open Graph dynamic images per blog post
- Sitemap.xml + robots.txt for SEO
- Real careers page with open roles

### P3
- Multi-language toggle (English / Hindi)
- Live chat widget
- ROI calculator on pricing page

## Test Credentials
N/A — no authentication.
