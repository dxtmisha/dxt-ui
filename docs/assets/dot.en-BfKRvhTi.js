import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`dot-indicator`,children:`Dot indicator`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dot`}),` property transforms Badge into a compact circular indicator without text content, used for simple visual status notifications.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`true`}),` — displays Badge as a dot indicator`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`false`}),` — displays Badge in standard mode with content (default)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Creates a minimalist visual marker for indicating states, activity, or notifications without displaying specific values. Ideal for user presence indicators (online/offline), unread notification markers, and status dots on interface elements. When the `,(0,c.jsx)(t.code,{children:`dot`}),` property is activated, any text content or numeric values are ignored, displaying only the color indicator.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Standard Badge with content -->
<Badge label="5" />

<!-- Dot indicator -->
<Badge dot />

<!-- Dot indicator for online status -->
<Badge dot :selected="isOnline" overlap="circular" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};