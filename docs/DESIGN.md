# Design system

## Theme

One global obsidian & deep emerald theme, defined as CSS variables in `src/styles.css`.

- **Marketing surfaces** (hero, dark sections, footer) use the scoped `.premium-hero` tokens: obsidian canvas, emerald glow, lime CTAs, mint accents.
- **Product screens** stay light and high-clarity with emerald as the primary color, so dense tables and metrics remain readable.
- **Deal health** colors are semantic and fixed: Healthy (green), At Risk (amber), Critical (red).
- No blue or indigo accents.

## Typography

- **Plus Jakarta Sans** — all UI, body, buttons, tables, metrics. Bold titles use tight tracking; body text uses relaxed line-height.
- **Instrument Serif (italic)** — headline accents only, never for UI text.

## Brand

- The Apex W mark lives in `src/components/win-deals/logo.tsx`. Always use the `Logo` component (full lockup or `compact`), with `atmospheric` on dark surfaces.
- Product names: Deal Command Center, Priority Queue, WIN Score™, Signal Diagnostics, Next Best Action.

## Content rules

- Homepage copy follows the approved spec — no invented customer logos, testimonials, pricing, integrations or certifications. HubSpot is the only CRM shown.
- The only public contact address is awais@windeals.me.
- The product UI is the main visual; no robot imagery or heavy animation.

## Component guidelines

- Use theme tokens (`bg-primary`, `text-muted-foreground`, …), never raw color values.
- Use semantic elements (`button`, `a`, labelled inputs) with visible focus states.
- Expose visual variation through `variant` / `size` props.
