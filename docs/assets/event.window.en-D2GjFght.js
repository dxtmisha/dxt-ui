import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`window`,children:(0,c.jsx)(t.code,{children:`window`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when the window state changes (open/close).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: WindowEmitOptions`}),` — object with window data`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`WindowEmitOptions structure:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — unique window identifier`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: HTMLDivElement`}),` — window DOM element`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`control: HTMLElement`}),` — control DOM element`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`open: boolean`}),` — window open state (`,(0,c.jsx)(t.code,{children:`true`}),` - open, `,(0,c.jsx)(t.code,{children:`false`}),` - closed)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleWindow = (options) => {
console.log('Window ID:', options.id)
console.log('Window is open:', options.open)
console.log('Window element:', options.element)
console.log('Control element:', options.control)
}
<\/script>

<template>
<Component @window="handleWindow">
  <template #default>
    <p>Window content</p>
  </template>
</Component>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};