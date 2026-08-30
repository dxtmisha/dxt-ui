import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`aria-role`,children:`ARIA Role`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`role`}),` property allows you to override the default ARIA role for the notification element. The default role is `,(0,c.jsx)(t.code,{children:`status`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`When to use:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`status`}),` (default) — used for messages that contain advisory information not requiring immediate action. Assistive technologies (screen readers) will announce such a message when the user is idle.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`alert`}),` — use for critical errors or warnings requiring immediate attention. Screen readers will interrupt the current task to announce this notification.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`log`}),` — use if notifications represent a sequential log of events.`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Standard notification -->
<SnackbarItem label="Download complete" role="status" />

<!-- Critical error -->
<SnackbarItem label="Connection error!" role="alert" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};