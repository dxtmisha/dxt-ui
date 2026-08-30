import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`linear-progress-and-related-parameters`,children:`Linear Progress and Related Parameters`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`linear`}),` property enables linear progress indicator display mode as a horizontal bar. For complete control over behavior and appearance, it is recommended to use it together with additional properties.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`linear`}),` — enables linear progress display mode`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`position`}),` — defines the indicator position (`,(0,c.jsx)(t.code,{children:`'top'`}),`, `,(0,c.jsx)(t.code,{children:`'bottom'`}),`, `,(0,c.jsx)(t.code,{children:`'static'`}),`), defaults to `,(0,c.jsx)(t.code,{children:`'top'`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`point`}),` — adds a point at the end of the indicator to emphasize the current position`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`linear`}),` property activates a horizontal progress bar that fills proportionally to the current value. `,(0,c.jsx)(t.code,{children:`position`}),` controls the placement: `,(0,c.jsx)(t.code,{children:`'top'`}),` places it at the top of the container, `,(0,c.jsx)(t.code,{children:`'bottom'`}),` at the bottom, `,(0,c.jsx)(t.code,{children:`'static'`}),` in the normal document flow. `,(0,c.jsx)(t.code,{children:`point`}),` adds a visual marker at the end of the filled portion.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Basic linear progress -->
<Progress linear />

<!-- With bottom positioning -->
<Progress linear position="bottom" />

<!-- With point in static position -->
<Progress linear position="static" point />

<!-- With specific value -->
<Progress linear position="top" point :value="65" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};