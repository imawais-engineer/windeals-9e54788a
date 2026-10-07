# Architecture

## Overview

WIN DEALS v0.1 is a server-rendered React application built on TanStack Start. Every screen is a route file in `src/routes/`; the root layout (`__root.tsx`) provides the HTML shell, fonts, query client and error boundaries.

```text
__root.tsx
├── index, about, contact, privacy, terms   public marketing pages (PublicPage shell)
├── login, signup                          demo auth (AuthCard)
└── app/route.tsx                          AppShell: sidebar, CRM sync indicator
    ├── onboarding, connect
    ├── dashboard
    ├── deals/index, deals/$id
    ├── insights
    └── settings
```

## Data

- `src/data/deals.ts` is the only source of deal records. Dashboard, list, detail, insights and the homepage command capsule all derive from it, so numbers stay consistent.
- `src/data/legal.ts` holds contact and legal configuration. `null` values render as "To be confirmed" — never invent dates or jurisdictions.
- There is no backend. Login, signup, onboarding and HubSpot sync are simulated in the browser.

## Contact form

`src/lib/contact.ts` validates input and builds a `mailto:` link to the contact address. The UI states the message is *ready to send*, never *sent*. Replace this with a server function once an email provider is connected.

## Metadata

Each content route defines its own `head()` via `pageMeta()` in `src/components/win-deals/page-meta.ts` (unique title, description, Open Graph and Twitter tags, self-referencing canonical and social URL under `https://windeals.me`). Shared website/organization identity is declared in the root; no root canonical is emitted.

The Apex W browser artwork is kept in `src/assets/logos/`. Public exports provide SVG, PNG, ICO, Apple touch and device icons, plus a named web manifest. These identify WIN DEALS in browser tabs, bookmarks and saved shortcuts. Search engines choose their own display and refresh timing; metadata changes require a new publish before reaching the live site.

## Testing

`src/test/` covers routing smoke tests and contact-form rules. Run `bun run test`.

## Reusable design system

`src/index.ts` exports the shared, data-independent pieces (logo, WIN Score, reveal animation, UI primitives, deal types). App-specific components that link to routes or read sample data are intentionally not exported.
