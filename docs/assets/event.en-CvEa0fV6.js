import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`input`,children:(0,c.jsx)(t.code,{children:`input`})}),`
`,(0,c.jsx)(t.p,{children:`Triggered in real time whenever pointer moves across dial divisions or on click.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: ClockDialEventItem`}),` — detailed event object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — currently selected numeric value.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`inputlite`,children:(0,c.jsx)(t.code,{children:`inputLite`})}),`
`,(0,c.jsx)(t.p,{children:`Lightweight version of the input event carrying only the numeric value.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — selected numeric value.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`change`,children:(0,c.jsx)(t.code,{children:`change`})}),`
`,(0,c.jsx)(t.p,{children:`Triggered upon interaction completion (pointer release after drag, or click).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: ClockDialEventItem`}),` — detailed event object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — committed numeric value.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`changelite`,children:(0,c.jsx)(t.code,{children:`changeLite`})}),`
`,(0,c.jsx)(t.p,{children:`Lightweight version of the change event carrying only the committed numeric value.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — committed numeric value.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`data-structures`,children:`Data Structures`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ClockDialEventItem`}),`:`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`clock?: ClockDialProps['type']`}),` — active dial type (`,(0,c.jsx)(t.code,{children:`'12'`}),`, `,(0,c.jsx)(t.code,{children:`'24'`}),`, `,(0,c.jsx)(t.code,{children:`'minute'`}),`, `,(0,c.jsx)(t.code,{children:`'second'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item?: ClockDialMarkItem`}),` — clock dial division item object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: number`}),` — selected numeric value.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ClockDialMarkItem`}),`:`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — display text label (e.g. `,(0,c.jsx)(t.code,{children:`'05'`}),`, `,(0,c.jsx)(t.code,{children:`'12'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`rotate: string`}),` — computed CSS rotation angle (e.g. `,(0,c.jsx)(t.code,{children:`'90deg'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`section: boolean`}),` — inner ring flag for 24-hour dial.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style: ConstrStyles`}),` — inline CSS styles with rotation variable.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — mark numeric value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabled: boolean`}),` — whether mark is disabled (due to `,(0,c.jsx)(t.code,{children:`min`}),`, `,(0,c.jsx)(t.code,{children:`max`}),`, `,(0,c.jsx)(t.code,{children:`step`}),`, or `,(0,c.jsx)(t.code,{children:`disabled`}),`).`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleInput = (event, value) => {
console.log('Mark item:', event.item?.name, 'Value:', value)
}

const handleChangeLite = (value) => {
console.log('Committed value:', value)
}
<\/script>

<template>
<ClockDial
  type="12"
  @input="handleInput"
  @change-lite="handleChangeLite"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};