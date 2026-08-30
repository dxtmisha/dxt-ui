import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/styles/dir - Text Direction LTR and RTL`}),`
`,(0,c.jsx)(t.h1,{id:`text-direction-system`,children:`Text Direction System`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` library provides a sophisticated utility system to support bidirectional text and layout (LTR and RTL) using CSS Custom Properties (CSS variables). Rather than duplicating CSS rules or relying on static properties, this utility automatically manages alignment, offsets, margins, paddings, and transformations dynamically in the browser.`]}),`
`,(0,c.jsx)(t.p,{children:`Traditional layout mirroring requires writing duplicate styles or overriding values manually (e.g. margin-left and margin-right overrides). This utility solves the problem by mapping physical directions to CSS variables that are updated automatically when direction changes.`}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsx)(t.p,{children:`The direction system is built on dynamic variable swapping:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Root Variable Mapping`}),`: By default (LTR mode), the library sets variables on the `,(0,c.jsx)(t.code,{children:`html`}),` root, establishing values like `,(0,c.jsx)(t.code,{children:`--d-dir: 1`}),` (a multiplier for offsets), alignment keywords (`,(0,c.jsx)(t.code,{children:`--d-dir-start: flex-start`}),`), and active flags (`,(0,c.jsx)(t.code,{children:`--d-dir-left: 1`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Auto-Swapping properties`}),`: Every element maps physical offsets and spaces to dynamic CSS properties (e.g. `,(0,c.jsx)(t.code,{children:`--d-dir-margin-left`}),` takes `,(0,c.jsx)(t.code,{children:`var(--sys-margin-left)`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`RTL Swapping`}),`: When RTL is triggered (via `,(0,c.jsx)(t.code,{children:`html[dir="rtl"]`}),` or the `,(0,c.jsx)(t.code,{children:`.dir-rtl`}),` class), the system switches flags (`,(0,c.jsx)(t.code,{children:`--d-dir`}),` becomes `,(0,c.jsx)(t.code,{children:`-1`}),`, `,(0,c.jsx)(t.code,{children:`--d-dir-start`}),` becomes `,(0,c.jsx)(t.code,{children:`flex-end`}),`), and swaps properties on all child elements (e.g. `,(0,c.jsx)(t.code,{children:`--d-dir-margin-left`}),` receives the value of `,(0,c.jsx)(t.code,{children:`var(--sys-margin-right)`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`system-initialization-initdir`,children:[`System Initialization (`,(0,c.jsx)(t.code,{children:`initDir`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`To boot the direction system, the `,(0,c.jsx)(t.code,{children:`initDir`}),` mixin must be called at the global level (typically within a global layout initialization file):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

@include styles.initDir;
`})}),`
`,(0,c.jsxs)(t.p,{children:[`This mixin defines LTR variables on the `,(0,c.jsx)(t.code,{children:`html`}),` element by default, establishes active direction properties on all child elements (`,(0,c.jsx)(t.code,{children:`*`}),`, `,(0,c.jsx)(t.code,{children:`*::before`}),`, `,(0,c.jsx)(t.code,{children:`*::after`}),`), and configures the listener that automatically applies the `,(0,c.jsx)(t.code,{children:`dirToRtl`}),` mixin when the `,(0,c.jsx)(t.code,{children:`[dir="rtl"]`}),` attribute or `,(0,c.jsx)(t.code,{children:`.dir-rtl`}),` class is applied to the document.`]}),`
`,(0,c.jsx)(t.h2,{id:`functions`,children:`Functions`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDir(): String`}),` — Returns the direction multiplier (`,(0,c.jsx)(t.code,{children:`1`}),` in LTR, `,(0,c.jsx)(t.code,{children:`-1`}),` in RTL).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDirLeft(): String`}),` — Returns `,(0,c.jsx)(t.code,{children:`1`}),` in LTR, `,(0,c.jsx)(t.code,{children:`0`}),` in RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDirRight(): String`}),` — Returns `,(0,c.jsx)(t.code,{children:`0`}),` in LTR, `,(0,c.jsx)(t.code,{children:`1`}),` in RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirLeft(): String`}),` — Returns `,(0,c.jsx)(t.code,{children:`left`}),` in LTR, `,(0,c.jsx)(t.code,{children:`right`}),` in RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirRight(): String`}),` — Returns `,(0,c.jsx)(t.code,{children:`right`}),` in LTR, `,(0,c.jsx)(t.code,{children:`left`}),` in RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirLeftAuto(): String`}),` — Returns `,(0,c.jsx)(t.code,{children:`auto`}),` in LTR, `,(0,c.jsx)(t.code,{children:`unset`}),` in RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirRightAuto(): String`}),` — Returns `,(0,c.jsx)(t.code,{children:`unset`}),` in LTR, `,(0,c.jsx)(t.code,{children:`auto`}),` in RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirFlexLeft(): String`}),` — Returns `,(0,c.jsx)(t.code,{children:`flex-start`}),` in LTR, `,(0,c.jsx)(t.code,{children:`flex-end`}),` in RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirFlexRight(): String`}),` — Returns `,(0,c.jsx)(t.code,{children:`flex-end`}),` in LTR, `,(0,c.jsx)(t.code,{children:`flex-start`}),` in RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirToLeft($left, $right): String`}),` — Transitions value from LTR left variable to RTL right variable.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirToRight($left, $right): String`}),` — Transitions value from LTR right variable to RTL left variable.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirOrder($value): String`}),` — Calculates dynamic flex or grid order based on direction.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`mixins`,children:`Mixins`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initDir()`}),` — Initializes direction variables and maps them for LTR and RTL modes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirToRtl()`}),` — Enforces RTL rules, overrides variables, and swaps directional values.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};