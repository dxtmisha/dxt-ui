import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/styles/selector - Selector Utilities`}),`
`,(0,c.jsx)(n.h1,{id:`selectors`,children:`Selectors`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` library provides helper mixins for managing state-based selectors (hover, active, focus, disabled, readonly) while automatically targeting active/enabled elements and preventing styles from applying to disabled, readonly, or loading states.`]}),`
`,(0,c.jsx)(n.h2,{id:`mixins`,children:`Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`interactive-states`,children:`Interactive States`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hover($parent: &)`}),` — Applies `,(0,c.jsx)(n.code,{children:`:hover`}),` styles specifically to active/enabled elements.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`active($parent: &)`}),` — Applies `,(0,c.jsx)(n.code,{children:`:active`}),` styles specifically to active/enabled elements.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`focus($parent: &)`}),` — Applies `,(0,c.jsx)(n.code,{children:`:focus`}),` / `,(0,c.jsx)(n.code,{children:`:focus-within`}),` styles specifically to active/enabled elements.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`base-state-selectors`,children:`Base State Selectors`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selector($name, $parent: &)`}),` — Applies pseudo-class selectors (like `,(0,c.jsx)(n.code,{children:`:focus`}),`, `,(0,c.jsx)(n.code,{children:`:focus-within`}),`, or custom modifier classes depending on the state).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`enabled($parent: &)`}),` — Restricts styles to enabled states by adding a `,(0,c.jsx)(n.code,{children:`:not()`}),` filter exclusion list (excluding `,(0,c.jsx)(n.code,{children:`:disabled`}),`, `,(0,c.jsx)(n.code,{children:`--disabled`}),`, `,(0,c.jsx)(n.code,{children:`--readonly`}),`, and `,(0,c.jsx)(n.code,{children:`--loading`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`enabledSelector($name, $parent: &)`}),` — Combines the `,(0,c.jsx)(n.code,{children:`enabled`}),` utility with `,(0,c.jsx)(n.code,{children:`selector`}),` for target states.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`disabled($parent: &)`}),` — Applies styles to disabled states (targets native `,(0,c.jsx)(n.code,{children:`:disabled`}),` attribute, and BEM modifier classes like `,(0,c.jsx)(n.code,{children:`--disabled`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readonly($parent: &)`}),` — Applies styles to readonly states (targets BEM modifier classes like `,(0,c.jsx)(n.code,{children:`--readonly`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};