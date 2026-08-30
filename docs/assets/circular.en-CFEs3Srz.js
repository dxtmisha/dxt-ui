import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`circular-progress-and-related-parameters`,children:`Circular Progress and Related Parameters`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`circular`}),` property enables circular progress indicator display mode as a ring indicator. For optimal control over appearance and behavior, it is recommended to use it together with additional properties.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`circular`}),` — enables circular progress display mode`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dense`}),` — removes internal padding for compact placement in small elements`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`circular`}),` property activates a ring progress indicator that fills around the circumference proportionally to the current value. `,(0,c.jsx)(t.code,{children:`dense`}),` removes padding, making the indicator more compact for placement in limited space.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Basic circular progress -->
<Progress circular />

<!-- Compact circular progress -->
<Progress circular dense />

<!-- With specific value -->
<Progress circular :value="75" />

<!-- Compact with value -->
<Progress circular dense :value="50" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};