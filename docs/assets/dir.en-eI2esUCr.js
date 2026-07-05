import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/styles/dir - Text Direction LTR and RTL`}),`
`,(0,c.jsx)(n.h1,{id:`text-direction-system`,children:`Text Direction System`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` library provides a sophisticated utility system to support bidirectional text and layout (LTR and RTL) using CSS Custom Properties (CSS variables). Rather than duplicating CSS rules or relying on static properties, this utility automatically manages alignment, offsets, margins, paddings, and transformations dynamically in the browser.`]}),`
`,(0,c.jsx)(n.p,{children:`Traditional layout mirroring requires writing duplicate styles or overriding values manually (e.g. margin-left and margin-right overrides). This utility solves the problem by mapping physical directions to CSS variables that are updated automatically when direction changes.`}),`
`,(0,c.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsx)(n.p,{children:`The direction system is built on dynamic variable swapping:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Root Variable Mapping`}),`: By default (LTR mode), the library sets variables on the `,(0,c.jsx)(n.code,{children:`html`}),` root, establishing values like `,(0,c.jsx)(n.code,{children:`--d-dir: 1`}),` (a multiplier for offsets), alignment keywords (`,(0,c.jsx)(n.code,{children:`--d-dir-start: flex-start`}),`), and active flags (`,(0,c.jsx)(n.code,{children:`--d-dir-left: 1`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Auto-Swapping properties`}),`: Every element maps physical offsets and spaces to dynamic CSS properties (e.g. `,(0,c.jsx)(n.code,{children:`--d-dir-margin-left`}),` takes `,(0,c.jsx)(n.code,{children:`var(--sys-margin-left)`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`RTL Swapping`}),`: When RTL is triggered (via `,(0,c.jsx)(n.code,{children:`html[dir="rtl"]`}),` or the `,(0,c.jsx)(n.code,{children:`.dir-rtl`}),` class), the system switches flags (`,(0,c.jsx)(n.code,{children:`--d-dir`}),` becomes `,(0,c.jsx)(n.code,{children:`-1`}),`, `,(0,c.jsx)(n.code,{children:`--d-dir-start`}),` becomes `,(0,c.jsx)(n.code,{children:`flex-end`}),`), and swaps properties on all child elements (e.g. `,(0,c.jsx)(n.code,{children:`--d-dir-margin-left`}),` receives the value of `,(0,c.jsx)(n.code,{children:`var(--sys-margin-right)`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`system-initialization-initdir`,children:[`System Initialization (`,(0,c.jsx)(n.code,{children:`initDir`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`To boot the direction system, the `,(0,c.jsx)(n.code,{children:`initDir`}),` mixin must be called at the global level (typically within a global layout initialization file):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

@include styles.initDir;
`})}),`
`,(0,c.jsxs)(n.p,{children:[`This mixin defines LTR variables on the `,(0,c.jsx)(n.code,{children:`html`}),` element by default, establishes active direction properties on all child elements (`,(0,c.jsx)(n.code,{children:`*`}),`, `,(0,c.jsx)(n.code,{children:`*::before`}),`, `,(0,c.jsx)(n.code,{children:`*::after`}),`), and configures the listener that automatically applies the `,(0,c.jsx)(n.code,{children:`dirToRtl`}),` mixin when the `,(0,c.jsx)(n.code,{children:`[dir="rtl"]`}),` attribute or `,(0,c.jsx)(n.code,{children:`.dir-rtl`}),` class is applied to the document.`]}),`
`,(0,c.jsx)(n.h2,{id:`functions`,children:`Functions`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDir(): String`}),` — Returns the direction multiplier (`,(0,c.jsx)(n.code,{children:`1`}),` in LTR, `,(0,c.jsx)(n.code,{children:`-1`}),` in RTL).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDirLeft(): String`}),` — Returns `,(0,c.jsx)(n.code,{children:`1`}),` in LTR, `,(0,c.jsx)(n.code,{children:`0`}),` in RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDirRight(): String`}),` — Returns `,(0,c.jsx)(n.code,{children:`0`}),` in LTR, `,(0,c.jsx)(n.code,{children:`1`}),` in RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirLeft(): String`}),` — Returns `,(0,c.jsx)(n.code,{children:`left`}),` in LTR, `,(0,c.jsx)(n.code,{children:`right`}),` in RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirRight(): String`}),` — Returns `,(0,c.jsx)(n.code,{children:`right`}),` in LTR, `,(0,c.jsx)(n.code,{children:`left`}),` in RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirLeftAuto(): String`}),` — Returns `,(0,c.jsx)(n.code,{children:`auto`}),` in LTR, `,(0,c.jsx)(n.code,{children:`unset`}),` in RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirRightAuto(): String`}),` — Returns `,(0,c.jsx)(n.code,{children:`unset`}),` in LTR, `,(0,c.jsx)(n.code,{children:`auto`}),` in RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirFlexLeft(): String`}),` — Returns `,(0,c.jsx)(n.code,{children:`flex-start`}),` in LTR, `,(0,c.jsx)(n.code,{children:`flex-end`}),` in RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirFlexRight(): String`}),` — Returns `,(0,c.jsx)(n.code,{children:`flex-end`}),` in LTR, `,(0,c.jsx)(n.code,{children:`flex-start`}),` in RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirToLeft($left, $right): String`}),` — Transitions value from LTR left variable to RTL right variable.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirToRight($left, $right): String`}),` — Transitions value from LTR right variable to RTL left variable.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirOrder($value): String`}),` — Calculates dynamic flex or grid order based on direction.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`mixins`,children:`Mixins`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initDir()`}),` — Initializes direction variables and maps them for LTR and RTL modes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirToRtl()`}),` — Enforces RTL rules, overrides variables, and swaps directional values.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};