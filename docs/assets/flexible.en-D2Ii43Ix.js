import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`adaptive-layout-behavior`,children:`Adaptive layout behavior`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`flexible`}),` property determines automatic switching to block mode when space is limited.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Possible values:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'adaptive'`}),` — uses media queries to determine breakpoint`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'container'`}),` — uses container queries to adapt to parent size`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Automatically applies `,(0,c.jsx)(t.code,{children:`align="block"`}),` property when available space becomes smaller than a defined breakpoint. With `,(0,c.jsx)(t.code,{children:`adaptive`}),` it tracks screen width through media queries, with `,(0,c.jsx)(t.code,{children:`container`}),` it adapts to parent container size. Suitable for creating adaptive interfaces that display correctly on both desktop and mobile devices without additional code.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Automatic transition on narrow screens -->
<Actions flexible="adaptive" :list="[...]" />

<!-- Adapts to parent size -->
<Actions flexible="container" :list="[...]" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};