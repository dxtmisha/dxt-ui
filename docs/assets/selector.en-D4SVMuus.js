import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/styles/selector - Selector Utilities`}),`
`,(0,c.jsx)(t.h1,{id:`selectors`,children:`Selectors`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` library provides helper mixins for managing state-based selectors (hover, active, focus, disabled, readonly) while automatically targeting active/enabled elements and preventing styles from applying to disabled, readonly, or loading states.`]}),`
`,(0,c.jsx)(t.h2,{id:`mixins`,children:`Mixins`}),`
`,(0,c.jsx)(t.h3,{id:`interactive-states`,children:`Interactive States`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hover($parent: &)`}),` — Applies `,(0,c.jsx)(t.code,{children:`:hover`}),` styles specifically to active/enabled elements.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`active($parent: &)`}),` — Applies `,(0,c.jsx)(t.code,{children:`:active`}),` styles specifically to active/enabled elements.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`focus($parent: &)`}),` — Applies `,(0,c.jsx)(t.code,{children:`:focus`}),` / `,(0,c.jsx)(t.code,{children:`:focus-within`}),` styles specifically to active/enabled elements.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`base-state-selectors`,children:`Base State Selectors`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selector($name, $parent: &)`}),` — Applies pseudo-class selectors (like `,(0,c.jsx)(t.code,{children:`:focus`}),`, `,(0,c.jsx)(t.code,{children:`:focus-within`}),`, or custom modifier classes depending on the state).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`enabled($parent: &)`}),` — Restricts styles to enabled states by adding a `,(0,c.jsx)(t.code,{children:`:not()`}),` filter exclusion list (excluding `,(0,c.jsx)(t.code,{children:`:disabled`}),`, `,(0,c.jsx)(t.code,{children:`--disabled`}),`, `,(0,c.jsx)(t.code,{children:`--readonly`}),`, and `,(0,c.jsx)(t.code,{children:`--loading`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`enabledSelector($name, $parent: &)`}),` — Combines the `,(0,c.jsx)(t.code,{children:`enabled`}),` utility with `,(0,c.jsx)(t.code,{children:`selector`}),` for target states.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabled($parent: &)`}),` — Applies styles to disabled states (targets native `,(0,c.jsx)(t.code,{children:`:disabled`}),` attribute, and BEM modifier classes like `,(0,c.jsx)(t.code,{children:`--disabled`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`readonly($parent: &)`}),` — Applies styles to readonly states (targets BEM modifier classes like `,(0,c.jsx)(t.code,{children:`--readonly`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};