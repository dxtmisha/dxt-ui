import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`transform`,children:(0,c.jsx)(t.code,{children:`transform`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when MotionTransform state changes with full event context.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: Event | undefined`}),` — DOM event that triggered the change (if any)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: MotionTransformEmitOptions`}),` — object with transform data`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`MotionTransformEmitOptions structure:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: 'head' | 'body' | 'top' | 'script'`}),` — area type that initiated the event`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`open: boolean`}),` — current open state (`,(0,c.jsx)(t.code,{children:`true`}),` - open, `,(0,c.jsx)(t.code,{children:`false`}),` - closed)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleTransform = (event, options) => {
console.log('Event:', event)
console.log('Type:', options.type)
console.log('Open state:', options.open)
}
<\/script>

<template>
<Component @transform="handleTransform">
  <template #head>
    <div>Header</div>
  </template>
  <template #body>
    <p>Content</p>
  </template>
</Component>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`transformlite`,children:(0,c.jsx)(t.code,{children:`transformLite`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when MotionTransform state changes without DOM event context (lightweight version).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: MotionTransformEmitOptions`}),` — object with transform data`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};