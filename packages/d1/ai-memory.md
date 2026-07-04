# AI Package Memory: @dxtmisha/d1

## Component Creation & Styling Rules
1. **Style definitions via `properties.json`**: Styles for components in `packages/d1` should not be manually hardcoded in `styleToken.scss`. Instead, define the structure in `properties.json` and run the generator (`npm run ui` in `packages/d1`) to let it parse the tokens and output them to `styleToken.scss`.
2. **Standard CSS Tokens**: Never use fixed values (e.g., `1px`) for border widths. Use system variables like `"{sys.spacing.outline}"`. 
3. **Valid Colors & Opacities**: For opacity and color bindings, rely solely on established system tokens: e.g., `"{sys.palette.primary}"`, `"{sys.opacity.overlay}"`, `"{sys.opacity.pressed}"`. Avoid guessing or inventing tokens like `sys.palette.surface.scrim`.
4. **CSS Pseudo-Elements**: Use the `before` key in `properties.json` to generate `&::before` styles automatically inside the token script.
5. **Token Mappings in `properties.json`**: Never copy old `{st.`-prefixed theme tokens (such as `{st.global.distance...}`) directly into `properties.json`. Always translate them to the current design system tokens: `{sys.spacing.*}` for spacing, `{font.body*}` for fonts, and `{sys.palette.*}` for colors. Also ensure that all dynamic modifiers in `properties.json` are prefixed with `~` (e.g., `"~size"`).
6. **System Labels & Generated Blocks**: Never manually edit code blocks enclosed by system labels (e.g., `// :classes-values [!] System label`, `// :type [!] System label`, `// :default [!] System label`). These blocks are generated and overwritten automatically by UI scripts. Manually modifying them will break the synchronization pipeline.


