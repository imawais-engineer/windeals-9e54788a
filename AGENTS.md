<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep all WIN DEALS demo records in the shared frontend data module so dashboard, list, and detail screens remain consistent.
- Treat the MVP login, signup, onboarding, and CRM sync as frontend-only demo flows because persistent authentication and a live CRM were not requested.
- Scope atmospheric marketing tokens to the premium hero; keep global semantic tokens light for operational screens so marketing styling never leaks into dense UI.
- Resolve hero command results from the shared deal dataset and link to existing detail routes so demo intelligence stays consistent.
- Use the shared Logo component for all brand lockups and compact marks so the vector shape and theme contrast remain consistent.
- Keep product and architecture documentation in README.md and docs/ so the repository describes WIN DEALS rather than its starter template.
- Keep the homepage action panel in normal document flow and compact the hero on short landscape windows so its action stays visible without covering deal rows.
- Define canonical URLs and social page addresses in leaf metadata using https://windeals.me; root metadata owns only shared website identity and branded browser icons.
- Keep source brand assets under src/assets/logos and derive public browser/device icon exports from the same Apex W artwork to prevent divergent marks.
- Preserve CSS as a package side effect, while keeping theme loading explicit so consumer styling setup does not load the global stylesheet twice.
