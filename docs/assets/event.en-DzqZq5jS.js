import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`input`,children:(0,c.jsx)(t.code,{children:`input`})}),`
`,(0,c.jsx)(t.p,{children:`Emitted in real-time on every thumb position shift (dragging, keyboard).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: SliderEventDetail`}),` — detail object containing slider state information`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`inputlite`,children:(0,c.jsx)(t.code,{children:`inputLite`})}),`
`,(0,c.jsxs)(t.p,{children:[`Lightweight real-time input event emitting only raw `,(0,c.jsx)(t.code,{children:`v-model`}),` value.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: SliderValueType`}),` — current slider value (`,(0,c.jsx)(t.code,{children:`number`}),` or `,(0,c.jsx)(t.code,{children:`[number, number]`}),`)`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`change`,children:(0,c.jsx)(t.code,{children:`change`})}),`
`,(0,c.jsx)(t.p,{children:`Emitted when interaction ends and value is committed.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: SliderEventDetail`}),` — detail object containing committed slider state information`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`changelite`,children:(0,c.jsx)(t.code,{children:`changeLite`})}),`
`,(0,c.jsxs)(t.p,{children:[`Lightweight change event emitting only committed raw `,(0,c.jsx)(t.code,{children:`v-model`}),` value.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: SliderValueType`}),` — committed slider value (`,(0,c.jsx)(t.code,{children:`number`}),` or `,(0,c.jsx)(t.code,{children:`[number, number]`}),`)`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Structure of SliderEventDetail:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mark: SliderValueType`}),` — current position value or range pair `,(0,c.jsx)(t.code,{children:`[min, max]`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: SliderMarkItem | [SliderMarkItem, SliderMarkItem]`}),` — active mark item object or pair of mark items`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: SliderMarkItemValue | [SliderMarkItemValue, SliderMarkItemValue]`}),` — custom payload data extracted from the mark`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Structure of SliderMarkItem:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mark: number`}),` — numeric position along the slider scale`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`label: string`}),` — display text label of the mark`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: SliderMarkItemValue`}),` — custom payload (`,(0,c.jsx)(t.code,{children:`NumberOrStringOrBoolean`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style?: Record<string, any>`}),` — inline positioning styles dictionary`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleInput = (detail) => {
console.log('Position:', detail.mark)
console.log('Mark item:', detail.item)
}

const handleChangeLite = (value) => {
console.log('Committed value:', value)
}
<\/script>

<template>
<Slider
  @input="handleInput"
  @changeLite="handleChangeLite"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};