import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`actions`,children:(0,c.jsx)(t.code,{children:`actions`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when clicking on an action button in the Actions component, passing the original DOM event and click data.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent`}),` — original DOM mouse event`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: EventClickValue`}),` — object with click data`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`EventClickValue structure:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — action/button type (e.g., `,(0,c.jsx)(t.code,{children:`'confirm'`}),`, `,(0,c.jsx)(t.code,{children:`'cancel'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — arbitrary button value`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — additional event data`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleActions = (event, value) => {
console.log('DOM event:', event)
console.log('Action type:', value.type)
console.log('Value:', value.value)
console.log('Details:', value.detail)

if (value.type === 'confirm') {
  console.log('Confirm button pressed')
}
}
<\/script>

<template>
<Actions @actions="handleActions" :list="[
  { text: 'Cancel', type: 'cancel' },
  { text: 'Confirm', type: 'confirm' }
]" />
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`actionslite`,children:(0,c.jsx)(t.code,{children:`actionsLite`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when clicking on an action button in the Actions component, passing only data without the original DOM event (lightweight version).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: EventClickValue`}),` — object with click data`]}),`
`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Actions component can be hidden with `,(0,c.jsx)(t.code,{children:`actionsHide`}),` property.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};