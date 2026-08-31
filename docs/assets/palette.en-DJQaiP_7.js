import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/styles/color/2. Using Palettes`}),`
`,(0,c.jsx)(t.h1,{id:`using-palettes`,children:`Using Palettes`}),`
`,(0,c.jsxs)(t.p,{children:[`Palette mixins are the primary tool for working with semantic and system colors in DxtUI. They exist to `,(0,c.jsx)(t.strong,{children:`automatically support CSS variable routing`}),`, allowing you to dynamically swap out themes and component color palettes on the fly without breaking the original design's contrast ratio.`]}),`
`,(0,c.jsxs)(t.p,{children:[`When building components with the design system, instead of using standard `,(0,c.jsx)(t.code,{children:`backgroundColor()`}),` functions, you use the specialized palette equivalent:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.my-button {
  // Applying the system 'primary' color
  @include styles.paletteBackgroundColor('--d1-sys-palette-primary');
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Using the `,(0,c.jsx)(t.code,{children:`palette`}),` mixin prefix ensures that the component's color will properly react to any active overrides in the color scheme, such as switching from a blue global structure class to a yellow one.`]}),`
`,(0,c.jsx)(t.h2,{id:`available-palette-mixins`,children:`Available Palette Mixins`}),`
`,(0,c.jsxs)(t.p,{children:[`Below is the list of key mixins that all operate on this identical principle. As their sole parameter, they accept a `,(0,c.jsx)(t.strong,{children:`string representing the name of the system CSS variable`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`paletteColor()`}),` — Sets the text color (`,(0,c.jsx)(t.code,{children:`color`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`paletteBackgroundColor()`}),` — Sets the background fill (`,(0,c.jsx)(t.code,{children:`background-color`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`paletteBorderColor()`}),` — Sets the border (`,(0,c.jsx)(t.code,{children:`border-color`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`paletteOutlineColor()`}),` — Sets an external outline (`,(0,c.jsx)(t.code,{children:`outline-color`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`paletteFill()`}),` — Sets vector SVG fill regions (`,(0,c.jsx)(t.code,{children:`fill`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`paletteStroke()`}),` — Sets vector SVG line strokes (`,(0,c.jsx)(t.code,{children:`stroke`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`example-using-multiple-mixins-together`,children:`Example using multiple mixins together:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.card-alert {
  // Text will inherit the system error color
  @include styles.paletteColor('--d1-sys-palette-error');
  
  // The background becomes the baseline surface color
  @include styles.paletteBackgroundColor('--d1-sys-palette-surface');
  
  // The border will match the system outline configuration
  @include styles.paletteBorderColor('--d1-sys-palette-outline');
}
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works-under-the-hood-routing-architecture`,children:`How it Works Under the Hood (Routing Architecture)`}),`
`,(0,c.jsxs)(t.p,{children:[`To fully exploit the potential of `,(0,c.jsx)(t.code,{children:`palette`}),` mixins, it helps to understand how the SCSS compiler processes these strings during build-time. The architecture is explicitly designed so you never have to author additional boilerplate CSS for theme overrides.`]}),`
`,(0,c.jsx)(t.h3,{id:`step-1-system-variables-and-basic-shade-weights`,children:`Step 1: System Variables and Basic Shade Weights`}),`
`,(0,c.jsxs)(t.p,{children:[`First, a configuration registry (`,(0,c.jsx)(t.code,{children:`properties.scss`}),`) dictates that a semantic name (like `,(0,c.jsx)(t.code,{children:`primary`}),`) mathematically correlates to a specific contrast "weight" for both light and dark modes.`]}),`
`,(0,c.jsxs)(t.p,{children:[`For example, the semantic `,(0,c.jsx)(t.code,{children:`primary`}),` color in the light theme always translates to a contrast tier of `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`600`})}),`. By default, this tier links to a pure Blue (`,(0,c.jsx)(t.code,{children:`--d1-ref-palette-blue-600`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`step-2-mixin-compilation`,children:`Step 2: Mixin Compilation`}),`
`,(0,c.jsxs)(t.p,{children:[`When you invoke `,(0,c.jsx)(t.code,{children:`paletteBackgroundColor('--d1-sys-palette-primary')`}),`, the SCSS preprocessor intercepts this string and checks it against the registry layer.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Rather than returning a flat blue color hex, the compiler yields a `,(0,c.jsx)(t.strong,{children:`smart cascading CSS variable pointer`}),` that intrinsically locks your background to the `,(0,c.jsx)(t.code,{children:`600`}),` "basic" intensity:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`/* A simplified look at the generated CSS output: */
background-color: var(--d1-palette-basic600, var(--d1-sys-palette-primary));
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-3-changing-the-palette-via-html-dom`,children:`Step 3: Changing the Palette via HTML (DOM)`}),`
`,(0,c.jsx)(t.p,{children:`Let's imagine you wrap this component inside an HTML container designated with a completely different palette class:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<div class="d1-palette--yellow">
  <button class="my-button">Click Me</button>
</div>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`.d1-palette--yellow`}),` class locally intercepts the generic baseline variable `,(0,c.jsx)(t.code,{children:`--d1-palette-basic600`}),`. Suddenly, `,(0,c.jsx)(t.code,{children:`basic600`}),` is repointed structurally to output a tier-600 Yellow (`,(0,c.jsx)(t.code,{children:`--d1-ref-palette-yellow-600`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Because your button was already anchored to `,(0,c.jsx)(t.code,{children:`basic600`}),` dynamically via the `,(0,c.jsx)(t.code,{children:`paletteBackgroundColor`}),` mixin, the element's actual surface color swaps immediately to Yellow.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`The Major Benefit:`}),`
The actual weight intensity strictly remains at `,(0,c.jsx)(t.code,{children:`600`}),`. This signifies that the mathematical contrast ratio remaining between white button text and its background stays perfect and entirely legible. The developer writes absolutely zero CSS exception rules (like `,(0,c.jsx)(t.code,{children:`.d1-palette--yellow .my-button { ... }`}),`) to manually "re-theme" components—everything behaves entirely autonomously based on native routing.`]}),`
`,(0,c.jsx)(t.h2,{id:`difference-between-base-mixins-and-palettes`,children:`Difference Between Base Mixins and Palettes`}),`
`,(0,c.jsx)(t.p,{children:`It is important to understand the fundamental difference in their logic:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Base Mixins (`,(0,c.jsx)(t.code,{children:`backgroundColor`}),`, `,(0,c.jsx)(t.code,{children:`color`}),`, etc.)`]}),`
These accept a `,(0,c.jsx)(t.strong,{children:`specific value`}),` (HEX, RGB, or the result of a `,(0,c.jsx)(t.code,{children:`getColor`}),` function). These mixins set the color "as is". While they support system opacity, the color itself remains static. If you pass a blue color via `,(0,c.jsx)(t.code,{children:`getColor('primary')`}),`, it will stay blue even if you add a yellow palette class to the parent.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Palette Mixins (`,(0,c.jsx)(t.code,{children:`paletteBackgroundColor`}),`, `,(0,c.jsx)(t.code,{children:`paletteColor`}),`, etc.)`]}),`
These accept a `,(0,c.jsx)(t.strong,{children:`string key`}),` (the name of a system variable, e.g., `,(0,c.jsx)(t.code,{children:`'--d1-sys-palette-primary'`}),`). These mixins do not set the color directly; instead, they create a `,(0,c.jsx)(t.strong,{children:`dynamic route`}),` to palette variables (the `,(0,c.jsx)(t.code,{children:`basic`}),` level). This is precisely what allows the component to instantly "re-color" itself when the palette class is changed in the DOM, while maintaining the required contrast level.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};