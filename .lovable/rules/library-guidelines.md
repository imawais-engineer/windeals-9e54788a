# WIN DEALS — Guidelines

## Components

The design system exports these components — import them from `@ws-7n6mhrvckq9uj62rqkad/7d3a037f-9ac2-42b2-b222-5ae5c7ea24e7` and compose them before building anything from scratch:

`AppShell`, `AuthCard`, `Button`, `DealCard`, `DialogClose`, `DialogContent`, `DialogDescription`, `DialogFooter`, `DialogHeader`, `DialogOverlay`, `DialogPortal`, `DialogTitle`, `DialogTrigger`, `Dialog`, `EmailDialog`, `HealthBadge`, `Input`, `Logo`, `PremiumHero`, `PublicHeader`, `Textarea`, `WinScore`

Per-component details (import stanzas, props, variants, examples) live in `.lovable/rules/libraries/{slug}/components.md` — on disk, not auto-loaded. Read that file or the component source when the name alone isn't enough.

## Theme Files

The design system's theme is delivered through the following files. The author's original source files carry the full wiring the design system needs — variable declarations, framework-specific directives, provider objects, etc. — and are the canonical import target.

- `@ws-7n6mhrvckq9uj62rqkad/7d3a037f-9ac2-42b2-b222-5ae5c7ea24e7/styles.css` (source — preferred import)
- `@ws-7n6mhrvckq9uj62rqkad/7d3a037f-9ac2-42b2-b222-5ae5c7ea24e7/dist/tokens.css` (auto-generated flat list of CSS custom properties — a raw-values fallback only; does NOT carry framework-specific wiring that the source files above provide)

