import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`mask-types`,children:`Mask types`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`type`}),` property defines the mask operation mode and automatically generates the appropriate structure for different data types.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'text'`}),` — basic text mask (default)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'number'`}),`, `,(0,c.jsx)(t.code,{children:`'number-format'`}),`, `,(0,c.jsx)(t.code,{children:`'currency'`}),` — numeric types with validation and localization`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'date'`}),`, `,(0,c.jsx)(t.code,{children:`'datetime'`}),`, `,(0,c.jsx)(t.code,{children:`'time'`}),`, `,(0,c.jsx)(t.code,{children:`'year'`}),`, `,(0,c.jsx)(t.code,{children:`'month'`}),`, `,(0,c.jsx)(t.code,{children:`'day'`}),`, `,(0,c.jsx)(t.code,{children:`'hour-minute'`}),` — date and time types`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`When using `,(0,c.jsx)(t.code,{children:`text`}),`, explicit structure specification via the `,(0,c.jsx)(t.code,{children:`mask`}),` property is required. Specialized numeric types automatically create rubber masks with thousand separators, validation, and formatting according to regional settings (`,(0,c.jsx)(t.code,{children:`language`}),`). Date types generate masks according to local formats with validation of entered values correctness. When a specialized type is activated, the `,(0,c.jsx)(t.code,{children:`mask`}),` property is ignored, and the mask structure is formed automatically based on `,(0,c.jsx)(t.code,{children:`language`}),`, `,(0,c.jsx)(t.code,{children:`currency`}),`, and `,(0,c.jsx)(t.code,{children:`fraction`}),`.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Text mask -->
<Mask mask="+1 (***) ***-****" type="text" />

<!-- Currency mask -->
<Mask type="currency" currency="USD" language="en-US" />

<!-- Date mask -->
<Mask type="date" language="en-US" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};