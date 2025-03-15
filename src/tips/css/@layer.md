# @layer

The <code>@layer</code> at-rule in CSS allows you to define and control the priority of different styles without relying solely on source order. It groups styles into named layers (base, components, theme, etc.), ensuring that lower-priority layers (e.g., base styles) are always overridden by higher-priority layers (e.g., theme styles).

Benefits:

- Clearer organization of styles
- Predictable overrides
- Easier maintenance in larger projects with multiple stylesheets
- Protection against specificity issues
- Ability to group related styles across files

Unlayered styles (styles that are written outside of @layer) have the highest precedence over any layered styles, regardless of their source order. This means that even if an unlayered style appears earlier in the CSS file, it will override any layered styles with the same specificity.

When used with @import, it also ensures styles are loaded in the correct order without manual reordering.
