# WIN DEALS

Build the WIN DEALS frontend (MVP v0.1) according to the product specifications:

Brand: WIN DEALS (descriptor: "AI Deal Intelligence")
Design Direction: Dark-on-light B2B SaaS interface (Linear/Stripe style). Clean, dense, revenue-focused, high information clarity.
Colors:
- Background: #F8FAFC
- Surface: #FFFFFF, Surface muted: #F1F5F9
- Text: #0F172A (primary), #475569 (secondary), #94A3B8 (muted)
- Border: #E2E8F0
- Brand: #2563EB (Brand light: #EFF6FF)
- Deal states (only for deal health, never decoration):
  - Healthy: #16A34A (bg: #F0FDF4)
  - At Risk: #D97706 (bg: #FFFBEB)
  - Critical: #DC2626 (bg: #FEF2F2)
Typography: Inter. Clean hierarchy, restrained radius (8px buttons/inputs, 10-12px cards).

App Shell & Navigation:
- Sidebar (240px): WIN DEALS logo + "AI Deal Intelligence", links for Dashboard (/app/dashboard), Deals (/app/deals), Insights (/app/insights), Settings (/app/settings), plus bottom profile (Awais, awais@windeals.me) and CRM sync indicator.
- Public & Auth routes: Landing page (/), /login, /signup, /app/onboarding, /app/connect (HubSpot mock sync flow).

Screens to implement:
1. Dashboard (/app/dashboard):
   - Header: "Good morning, Awais. Here's what needs your attention today." with refresh status.
   - 4 Metric cards: Active Deals (27), Pipeline Value ($486,000), Weighted Pipeline ($312,400), Needs Attention (5 - highlighted).
   - "Deals Needing Attention" section: Prioritized deal cards showing Deal Name, Value, Stage, WIN SCORE (0-100), Health badge (Healthy/At Risk/Critical), key signal bullets (positive vs risks), Next Best Action banner with "Draft Email" action and "View Deal".
   - Pipeline Health distribution bar (14 Healthy, 7 At Risk, 6 Critical).
   - AI Pipeline Insight card ("23% of your active pipeline has had no meaningful activity in the last 7 days").

2. Deals List (/app/deals):
   - Search bar + filter pills: All (27), Healthy (14), At Risk (7), Critical (6).
   - Full data table sorted by attention/priority by default, showing Deal, Value, Stage, WIN Score, Health, Next Action, and action links.

3. Deal Detail (/app/deals/:id):
   - Header: Deal name (e.g. Acme Corp), value ($42,000), stage, close date, owner, large WIN SCORE display + Health status.
   - Score explanation: "Why WIN DEALS thinks this deal is winnable" (positive signals) vs "What could stop you from winning" (risks).
   - AI Deal Diagnosis box: Contextual narrative based on touchpoints.
   - NEXT BEST ACTION prominent callout container with "Draft Email" and "Create Task" buttons.
   - Draft Email Modal: Interactive modal with suggested subject, tailored body, and Copy / Edit / Close actions.
   - Stakeholders section: Contact roles and engagement status (Engaged, Strong engagement, Not engaged).
   - Activity Timeline: Chronological touchpoint log (demo, email, proposal opened, calls).

4. Insights (/app/insights):
   - Macro pattern cards: Inactivity risk, multi-threaded vs single-threaded analysis, proposal velocity.

5. Settings (/app/settings):
   - Profile, CRM integration (HubSpot connected status with Sync button), notifications, AI analysis frequency.

6. Landing Page (/):
   - Hero: "Know Which Deals to Win.", value proposition, interactive dashboard preview, problem/solution cards, 3-step how-it-works, CTA to Get Started / View Demo.

Mock Data:
Provide a robust mock dataset of 25 realistic B2B sales deals (Acme Corp, Beta Inc, Gamma Ltd, Delta Co, Nova Systems, Vertex Labs, Orbit Software, Pioneer AI, etc.) totaling ~$486k across Discovery, Demo, Proposal, and Negotiation stages, complete with realistic positive signals, risks, stakeholders, activities, AI diagnoses, and next best actions. Ensure full clickability and interactive navigation between all screens.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7d3a037f-9ac2-42b2-b222-5ae5c7ea24e7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
