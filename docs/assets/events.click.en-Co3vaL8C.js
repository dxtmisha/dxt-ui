import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`click`,children:(0,c.jsx)(t.code,{children:`click`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when clicking on the component, passing the original DOM event and component data.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent`}),` — original DOM mouse event`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: EventClickValue`}),` — object with component data`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`EventClickValue structure:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — click location identifier, set through `,(0,c.jsx)(t.code,{children:`data-event-type`}),` attribute on the element`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — component value`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — additional event data`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleClick = (event, value) => {
console.log('DOM event:', event)
console.log('Click type:', value.type)
console.log('Value:', value.value)
console.log('Details:', value.detail)
}
<\/script>

<template>
<Component @click="handleClick">
  <button data-event-type="action">Click me</button>
</Component>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`clicklite`,children:(0,c.jsx)(t.code,{children:`clickLite`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when clicking on the component, passing only data without the original DOM event (lightweight version).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: EventClickValue`}),` — object with component data`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};