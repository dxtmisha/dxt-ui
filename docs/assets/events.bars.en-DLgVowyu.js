import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`bars`,children:(0,c.jsx)(t.code,{children:`bars`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when clicking on a Bars panel element, passing the original DOM event and click data.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent`}),` — original DOM mouse event`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: EventClickValue`}),` — object with click data`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`EventClickValue structure:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — click/button type (e.g., `,(0,c.jsx)(t.code,{children:`'back'`}),` for back button)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — arbitrary button value`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — additional event data`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleBars = (event, value) => {
console.log('DOM event:', event)
console.log('Button type:', value.type)
console.log('Value:', value.value)
console.log('Details:', value.detail)

if (value.type === 'back') {
  console.log('Back button pressed')
}
}
<\/script>

<template>
<Bars @bars="handleBars">
  <button data-event-type="back">Back</button>
</Bars>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`barslite`,children:(0,c.jsx)(t.code,{children:`barsLite`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when clicking on a Bars panel element, passing only data without the original DOM event (lightweight version).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: EventClickValue`}),` — object with click data`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`barsback`,children:(0,c.jsx)(t.code,{children:`barsBack`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when the "Back" button in Bars panel is clicked, passing only click data.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: EventClickValue`}),` — object with click data`]}),`
`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Back button can be hidden with `,(0,c.jsx)(t.code,{children:`barsBackHide`}),` property.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};