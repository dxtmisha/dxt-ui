import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`numeric-mask-types`,children:`Numeric mask types`}),`
`,(0,c.jsx)(t.p,{children:`Numeric types in Mask provide specialized formatting and validation for working with numbers, currencies, and financial data.`}),`
`,(0,c.jsxs)(t.p,{children:[`Numeric types automatically create rubber masks with variable length, ignoring the `,(0,c.jsx)(t.code,{children:`mask`}),` property. Negative values and `,(0,c.jsx)(t.code,{children:`min`}),`/`,(0,c.jsx)(t.code,{children:`max`}),` constraints are supported. Thousand separators and decimal places (via the `,(0,c.jsx)(t.code,{children:`fraction`}),` parameter) adapt based on the selected locale.`]}),`
`,(0,c.jsx)(t.h3,{id:`types`,children:`Types`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`number`}),` — simple numeric mask without formatting`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`number-format`}),` — numbers with automatic thousand separators`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currency`}),` — currency with symbol (₽, $, €) and formatting`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`property-fraction`,children:`Property fraction`}),`
`,(0,c.jsx)(t.p,{children:`Defines the number of decimal places:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`number`}),` — fixed number of digits (e.g., `,(0,c.jsx)(t.code,{children:`2`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`true`}),` — auto-detection from input`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`false`}),`, `,(0,c.jsx)(t.code,{children:`0`}),` — integers only`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`localization`,children:`Localization`}),`
`,(0,c.jsxs)(t.p,{children:[`Formats adapt via the `,(0,c.jsx)(t.code,{children:`language`}),` property:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ru`}),` — `,(0,c.jsx)(t.code,{children:`1 234,56`}),` (space and comma)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`en-US`}),` — `,(0,c.jsx)(t.code,{children:`1,234.56`}),` (comma and dot)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`de`}),` — `,(0,c.jsx)(t.code,{children:`1.234,56`}),` (dot and comma)`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(i,{code:`
<!-- Formatted number -->
<Mask type="number-format" language="en-US" :fraction="2" />

<!-- Currency -->
<Mask type="currency" currency="USD" language="en-US" />

<!-- Currency without symbol -->
<Mask type="currency" currency="USD" :currencyHide="true" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};