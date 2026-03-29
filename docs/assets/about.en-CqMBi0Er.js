import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/styles/color/! About the Color System`}),`
`,(0,c.jsx)(n.h1,{id:`about-the-color-system`,children:`About the Color System`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` library provides a powerful and flexible mechanism for managing colors in applications. Unlike the standard approach with hardcoded HEX colors, this system is entirely built on dynamic CSS variables. This ensures instant theme switching (light/dark) and smooth transitions without code duplication.`]}),`
`,(0,c.jsxs)(n.p,{children:[`It solves the primary problem of complex styling: `,(0,c.jsx)(n.strong,{children:`how to apply opacity to colors coming from variables without breaking CSS animations?`})]}),`
`,(0,c.jsx)(n.h2,{id:`core-concept-separating-rgb-and-opacity`,children:`Core Concept: Separating RGB and Opacity`}),`
`,(0,c.jsxs)(n.p,{children:[`If you store a color as a normal variable (e.g., `,(0,c.jsx)(n.code,{children:`--primary: #ff0000;`}),`), you cannot apply transparency to it "on the fly" using CSS tools (without using new functions like `,(0,c.jsx)(n.code,{children:`color-mix`}),`, which are not fully supported yet). The old attempt to do `,(0,c.jsx)(n.code,{children:`rgba(var(--primary), 0.5)`}),` simply won't work with HEX values.`]}),`
`,(0,c.jsx)(n.p,{children:`To solve this problem, our design system automatically converts all base colors into a list of RGB channels:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`// How it happens under the hood:
--sys-primary: 255, 0, 0; // Instead of #ff0000
`})}),`
`,(0,c.jsx)(n.p,{children:`This allows us to dynamically "construct" the color the moment it is applied:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`color: rgba(var(--sys-primary), 1);
background-color: rgba(var(--sys-primary), 0.5);
`})}),`
`,(0,c.jsx)(n.h3,{id:`independent-opacity`,children:`Independent Opacity`}),`
`,(0,c.jsxs)(n.p,{children:[`To give you even more control and provide `,(0,c.jsx)(n.strong,{children:`reactive transitions`}),` for opacity (when only the opacity level changes, not the color itself), a specific System opacity variable is generated for each property:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`--sys-color: 255, 0, 0;
--sys-color-opacity: 1;

--sys-background: 0, 255, 0;
--sys-background-opacity: 0.5;
`})}),`
`,(0,c.jsxs)(n.p,{children:[`The final output in the browser looks like this:
`,(0,c.jsx)(n.code,{children:`color: rgba(var(--sys-color), var(--sys-color-opacity));`})]}),`
`,(0,c.jsxs)(n.p,{children:[`You `,(0,c.jsx)(n.strong,{children:`do not`}),` need to write this manually — the library provides convenient mixins that generate this code for you.`]}),`
`,(0,c.jsx)(n.h2,{id:`library-structure`,children:`Library Structure`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`color.scss`}),` library is conceptually divided into three layers of abstraction:`]}),`
`,(0,c.jsx)(n.h3,{id:`1-system-generation-functions-utilities`,children:`1. System Generation Functions (Utilities)`}),`
`,(0,c.jsxs)(n.p,{children:[`Functions like `,(0,c.jsx)(n.code,{children:`getColor`}),`, `,(0,c.jsx)(n.code,{children:`toColorRbg`}),`, or `,(0,c.jsx)(n.code,{children:`toCustomVarRgb`}),`. They serve as a low-level engine that translates ordinary HEX colors into a string RGB format and vice versa. You will rarely call them directly in everyday development, but they are needed to register new colors at the design token level (`,(0,c.jsx)(n.code,{children:`@dxtmisha/theme`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`2-base-property-mixins`,children:`2. Base Property Mixins`}),`
`,(0,c.jsxs)(n.p,{children:[`These are the main tools for applying colors to UI components: `,(0,c.jsx)(n.code,{children:`@include color(...)`}),`, `,(0,c.jsx)(n.code,{children:`@include backgroundColor(...)`}),`, `,(0,c.jsx)(n.code,{children:`@include borderColor(...)`}),`, `,(0,c.jsx)(n.code,{children:`@include stroke(...)`}),`, etc.
They accept a color, update the component's system variable, and apply the CSS property. This is your everyday component styling tool.`]}),`
`,(0,c.jsx)(n.h3,{id:`3-palette--theme-mixins`,children:`3. Palette & Theme Mixins`}),`
`,(0,c.jsxs)(n.p,{children:[`An advanced level of styling designed for components that need to instantly adapt to the local context (e.g., a button that becomes red if it is inside a "danger" block).
Mixins like `,(0,c.jsx)(n.code,{children:`@include paletteColor()`}),` and the `,(0,c.jsx)(n.code,{children:`getPaletteItem()`}),` function are used here. They build a "search chain" of variables (find `,(0,c.jsx)(n.code,{children:`--theme-primary`}),`, if not — find `,(0,c.jsx)(n.code,{children:`--sys-primary`}),`, if not — use fallback HEX).`]}),`
`,(0,c.jsxs)(n.h2,{id:`why-not-just-use-color-ff0000`,children:[`Why not just use `,(0,c.jsx)(n.code,{children:`color: #ff0000;`}),`?`]}),`
`,(0,c.jsx)(n.p,{children:`You can do this, but it will break the integrity of the design system:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hard Binding:`}),` When changing a theme (e.g., to dark mode), your hardcoded color will remain the same.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lack of Flexibility:`}),` If you want to make the text semi-transparent on hover, you will have to redefine `,(0,c.jsx)(n.code,{children:`color: rgba(...)`}),` again instead of just changing the opacity variable.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Animation Errors:`}),` The transition from full color to semi-transparent will be smoother if the browser animates the independent `,(0,c.jsx)(n.code,{children:`--sys-color-opacity`}),` variable, rather than trying to interpolate complex `,(0,c.jsx)(n.code,{children:`rgba`}),` or HEX values.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Use the mixins described in the `,(0,c.jsx)(n.strong,{children:`Base Properties Usage`}),` and `,(0,c.jsx)(n.strong,{children:`Working with Palettes`}),` sections to keep your interface scalable and easily maintainable.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};