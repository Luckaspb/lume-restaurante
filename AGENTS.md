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

## Application conventions
- Keep restaurant menu data and category filtering in a browser-safe module separate from the home route so prices and filtering can be tested independently.
- Use semantic tokens in the global stylesheet and shared Button variants for the restaurant interface to keep its visual language consistent.
- Reference original downloaded dish photos through asset pointers and import generated opening imagery directly to preserve portable media references.
