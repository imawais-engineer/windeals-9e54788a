# WIN DEALS

**AI deal intelligence for B2B sales teams.** WIN DEALS reads your CRM pipeline and tells each rep which deals to win next, why a deal is at risk, and the single Next Best Action to move it forward.

- Live site: [windeals.me](https://windeals.me)
- Contact: [awais@windeals.me](mailto:awais@windeals.me)
- Status: MVP v0.1 — interactive product demo (frontend only, sample data, HubSpot connection is simulated)

## Product surface

| Area | Route | What it does |
| --- | --- | --- |
| Landing | `/` | Marketing homepage with a live pipeline preview |
| Company | `/about`, `/contact` | Mission, product principles, contact form (opens your email app) |
| Legal | `/privacy`, `/terms` | Policy documents — pending legal review |
| Auth | `/login`, `/signup` | Demo sign-in and workspace creation |
| Onboarding | `/app/onboarding`, `/app/connect` | Role setup and simulated HubSpot connection |
| Deal Command Center | `/app/dashboard` | Pipeline metrics, Priority Queue, deal health, AI insight |
| Deals | `/app/deals`, `/app/deals/$id` | Prioritized pipeline, WIN Score™, Signal Diagnostics, Next Best Action, email drafts |
| Insights | `/app/insights` | Inactivity risk, multi-threading, proposal velocity |
| Settings | `/app/settings` | Profile, CRM sync, notifications, AI frequency |

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing, SSR) on Vite
- TypeScript, Tailwind CSS v4, Radix UI primitives
- Vitest + Testing Library
- Edge runtime deployment

## Getting started

Requires [Bun](https://bun.sh) (or Node.js 20+ with npm).

```sh
bun install
bun run dev        # http://localhost:8080
bun run test       # unit + routing tests
bun run lint
bun run build
```

## Project structure

```text
src/
  routes/              File-based routes (one file per page)
    app/               Authenticated product area (shared AppShell layout)
  components/
    marketing/         Homepage sections, public page shell, legal layout
    product/           Product UI used in the homepage preview
    win-deals/         App shell, logo, deal cards, score, email dialog
    ui/                Design-system primitives (buttons, inputs, dialogs…)
  data/
    deals.ts           Single source of truth for the 25 sample deals
    legal.ts           Contact email, legal dates and governing law
  lib/                 Helpers (class merging, contact handoff, error capture)
  styles.css           Global obsidian & emerald theme tokens
  index.ts             Public exports for projects that reuse the design system
docs/                  Architecture and design notes
```

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) and [docs/DESIGN.md](docs/DESIGN.md) for details.

## Known limitations

- No real authentication or CRM — all data comes from `src/data/deals.ts`.
- The contact form hands the message to the visitor's email app; no messages are sent by the site.
- Privacy Policy and Terms show "To be confirmed" for the effective date and governing law until set in `src/data/legal.ts`, and must be reviewed by counsel before launch.

## License

Proprietary. © WIN DEALS. All rights reserved.
