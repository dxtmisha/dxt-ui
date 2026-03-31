import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/styles/color/# Using Palettes`}),`
`,(0,c.jsx)(n.h1,{id:`using-palettes`,children:`Using Palettes`}),`
`,(0,c.jsxs)(n.p,{children:[`Palette mixins are the primary tool for working with semantic and system colors in DxtUI. They exist to `,(0,c.jsx)(n.strong,{children:`automatically support CSS variable routing`}),`, allowing you to dynamically swap out themes and component color palettes on the fly without breaking the original design's contrast ratio.`]}),`
`,(0,c.jsxs)(n.p,{children:[`When building components with the design system, instead of using standard `,(0,c.jsx)(n.code,{children:`backgroundColor()`}),` functions, you use the specialized palette equivalent:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.my-button {
  // Applying the system 'primary' color
  @include styles.paletteBackgroundColor('--d1-sys-palette-primary');
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Using the `,(0,c.jsx)(n.code,{children:`palette`}),` mixin prefix ensures that the component's color will properly react to any active overrides in the color scheme, such as switching from a blue global structure class to a yellow one.`]}),`
`,(0,c.jsx)(n.h2,{id:`available-palette-mixins`,children:`Available Palette Mixins`}),`
`,(0,c.jsxs)(n.p,{children:[`Below is the list of key mixins that all operate on this identical principle. As their sole parameter, they accept a `,(0,c.jsx)(n.strong,{children:`string representing the name of the system CSS variable`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`paletteColor()`}),` — Sets the text color (`,(0,c.jsx)(n.code,{children:`color`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`paletteBackgroundColor()`}),` — Sets the background fill (`,(0,c.jsx)(n.code,{children:`background-color`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`paletteBorderColor()`}),` — Sets the border (`,(0,c.jsx)(n.code,{children:`border-color`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`paletteOutlineColor()`}),` — Sets an external outline (`,(0,c.jsx)(n.code,{children:`outline-color`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`paletteFill()`}),` — Sets vector SVG fill regions (`,(0,c.jsx)(n.code,{children:`fill`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`paletteStroke()`}),` — Sets vector SVG line strokes (`,(0,c.jsx)(n.code,{children:`stroke`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`example-using-multiple-mixins-together`,children:`Example using multiple mixins together:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card-alert {
  // Text will inherit the system error color
  @include styles.paletteColor('--d1-sys-palette-error');
  
  // The background becomes the baseline surface color
  @include styles.paletteBackgroundColor('--d1-sys-palette-surface');
  
  // The border will match the system outline configuration
  @include styles.paletteBorderColor('--d1-sys-palette-outline');
}
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`how-it-works-under-the-hood-routing-architecture`,children:`How it Works Under the Hood (Routing Architecture)`}),`
`,(0,c.jsxs)(n.p,{children:[`To fully exploit the potential of `,(0,c.jsx)(n.code,{children:`palette`}),` mixins, it helps to understand how the SCSS compiler processes these strings during build-time. The architecture is explicitly designed so you never have to author additional boilerplate CSS for theme overrides.`]}),`
`,(0,c.jsx)(n.h3,{id:`step-1-system-variables-and-basic-shade-weights`,children:`Step 1: System Variables and Basic Shade Weights`}),`
`,(0,c.jsxs)(n.p,{children:[`First, a configuration registry (`,(0,c.jsx)(n.code,{children:`properties.scss`}),`) dictates that a semantic name (like `,(0,c.jsx)(n.code,{children:`primary`}),`) mathematically correlates to a specific contrast "weight" for both light and dark modes.`]}),`
`,(0,c.jsxs)(n.p,{children:[`For example, the semantic `,(0,c.jsx)(n.code,{children:`primary`}),` color in the light theme always translates to a contrast tier of `,(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`600`})}),`. By default, this tier links to a pure Blue (`,(0,c.jsx)(n.code,{children:`--d1-ref-palette-blue-600`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`step-2-mixin-compilation`,children:`Step 2: Mixin Compilation`}),`
`,(0,c.jsxs)(n.p,{children:[`When you invoke `,(0,c.jsx)(n.code,{children:`paletteBackgroundColor('--d1-sys-palette-primary')`}),`, the SCSS preprocessor intercepts this string and checks it against the registry layer.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Rather than returning a flat blue color hex, the compiler yields a `,(0,c.jsx)(n.strong,{children:`smart cascading CSS variable pointer`}),` that intrinsically locks your background to the `,(0,c.jsx)(n.code,{children:`600`}),` "basic" intensity:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`/* A simplified look at the generated CSS output: */
background-color: var(--d1-palette-basic600, var(--d1-sys-palette-primary));
`})}),`
`,(0,c.jsx)(n.h3,{id:`step-3-changing-the-palette-via-html-dom`,children:`Step 3: Changing the Palette via HTML (DOM)`}),`
`,(0,c.jsx)(n.p,{children:`Let's imagine you wrap this component inside an HTML container designated with a completely different palette class:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<div class="d1-palette--yellow">
  <button class="my-button">Click Me</button>
</div>
`})}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`.d1-palette--yellow`}),` class locally intercepts the generic baseline variable `,(0,c.jsx)(n.code,{children:`--d1-palette-basic600`}),`. Suddenly, `,(0,c.jsx)(n.code,{children:`basic600`}),` is repointed structurally to output a tier-600 Yellow (`,(0,c.jsx)(n.code,{children:`--d1-ref-palette-yellow-600`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Because your button was already anchored to `,(0,c.jsx)(n.code,{children:`basic600`}),` dynamically via the `,(0,c.jsx)(n.code,{children:`paletteBackgroundColor`}),` mixin, the element's actual surface color swaps immediately to Yellow.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`The Major Benefit:`}),`
The actual weight intensity strictly remains at `,(0,c.jsx)(n.code,{children:`600`}),`. This signifies that the mathematical contrast ratio remaining between white button text and its background stays perfect and entirely legible. The developer writes absolutely zero CSS exception rules (like `,(0,c.jsx)(n.code,{children:`.d1-palette--yellow .my-button { ... }`}),`) to manually "re-theme" components—everything behaves entirely autonomously based on native routing.`]}),`
`,(0,c.jsx)(n.h2,{id:`difference-between-base-mixins-and-palettes`,children:`Difference Between Base Mixins and Palettes`}),`
`,(0,c.jsx)(n.p,{children:`It is important to understand the fundamental difference in their logic:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsxs)(n.strong,{children:[`Base Mixins (`,(0,c.jsx)(n.code,{children:`backgroundColor`}),`, `,(0,c.jsx)(n.code,{children:`color`}),`, etc.)`]}),`
These accept a `,(0,c.jsx)(n.strong,{children:`specific value`}),` (HEX, RGB, or the result of a `,(0,c.jsx)(n.code,{children:`getColor`}),` function). These mixins set the color "as is". While they support system opacity, the color itself remains static. If you pass a blue color via `,(0,c.jsx)(n.code,{children:`getColor('primary')`}),`, it will stay blue even if you add a yellow palette class to the parent.`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsxs)(n.strong,{children:[`Palette Mixins (`,(0,c.jsx)(n.code,{children:`paletteBackgroundColor`}),`, `,(0,c.jsx)(n.code,{children:`paletteColor`}),`, etc.)`]}),`
These accept a `,(0,c.jsx)(n.strong,{children:`string key`}),` (the name of a system variable, e.g., `,(0,c.jsx)(n.code,{children:`'--d1-sys-palette-primary'`}),`). These mixins do not set the color directly; instead, they create a `,(0,c.jsx)(n.strong,{children:`dynamic route`}),` to palette variables (the `,(0,c.jsx)(n.code,{children:`basic`}),` level). This is precisely what allows the component to instantly "re-color" itself when the palette class is changed in the DOM, while maintaining the required contrast level.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};