import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`progress-value-management`,children:`Progress Value Management`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`value`}),` and `,(0,c.jsx)(t.code,{children:`max`}),` properties work together to determine the state of process execution. They establish the current value and upper limit for calculating the completion percentage of an operation.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value`}),` — current progress value (what portion of the process has been completed)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max`}),` — maximum progress value, defaults to `,(0,c.jsx)(t.code,{children:`100`})]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Completion percentage is calculated automatically: `,(0,c.jsx)(t.code,{children:`(value / max) * 100`}),`. The `,(0,c.jsx)(t.code,{children:`value`}),` is automatically constrained to the range from 0 to `,(0,c.jsx)(t.code,{children:`max`}),`. When `,(0,c.jsx)(t.code,{children:`max`}),` changes, the percentage display is recalculated proportionally. Use `,(0,c.jsx)(t.code,{children:`max="100"`}),` for percentage display or set it equal to the actual number of steps in the process.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Standard percentage scale -->
<Progress :value="75" :max="100" />

<!-- File loading progress -->
<Progress :value="loadedFiles" :max="totalFiles" />

<!-- Dynamic updates -->
<Progress :value="currentStep" :max="totalSteps" />

<!-- Custom scale -->
<Progress :value="completedTasks" :max="1000" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};