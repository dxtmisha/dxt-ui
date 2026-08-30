import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`copy-link`,children:`Copy link`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`isCopy`}),` property switches the component to anchor link copying mode to clipboard.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isCopy`}),` — enables link copying mode (default `,(0,c.jsx)(t.code,{children:`false`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`iconTag`}),` — icon displayed in copy mode`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`iconContentCopy`}),` — icon shown after successful copy`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delayHide`}),` — delay before hiding notification in milliseconds (default `,(0,c.jsx)(t.code,{children:`3072`}),`)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`When `,(0,c.jsx)(t.code,{children:`isCopy`}),` is enabled, clicking the component doesn't scroll to the anchor but copies the full link (including origin and pathname) to clipboard. After copying, a Tooltip with notification automatically opens and closes after the time specified in `,(0,c.jsx)(t.code,{children:`delayHide`}),`. The icon changes from `,(0,c.jsx)(t.code,{children:`iconTag`}),` to `,(0,c.jsx)(t.code,{children:`iconContentCopy`}),` for visual confirmation of the action.`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Basic mode -->
<Anchor name="section" text="Copy link" isCopy />

<!-- With custom icons -->
<Anchor name="heading" isCopy iconTag="share" iconContentCopy="check" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};