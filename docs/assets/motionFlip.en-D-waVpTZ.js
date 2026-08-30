import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for performing FLIP (First, Last, Invert, Play) animations on child elements.`}),`
`,(0,c.jsx)(t.p,{children:`MotionFlip automatically animates positional and dimensional changes of child elements when the layout changes (e.g. reordering, inserting, or removing list items).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Smooth FLIP layout transitions during DOM updates`}),`
`,(0,c.jsxs)(t.li,{children:[`Automatic DOM mutation observing via `,(0,c.jsx)(t.code,{children:`auto`}),` property`]}),`
`,(0,c.jsxs)(t.li,{children:[`Asynchronous callback orchestration via `,(0,c.jsx)(t.code,{children:`update`}),` method`]}),`
`,(0,c.jsx)(t.li,{children:`Automatic transition cleanup upon animation end`}),`
`,(0,c.jsxs)(t.li,{children:[`Ability to disable layout animation via `,(0,c.jsx)(t.code,{children:`disabled`}),` property`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Reorderable list and grid layouts`}),`
`,(0,c.jsx)(t.li,{children:`Dynamic filter and sorting interfaces`}),`
`,(0,c.jsx)(t.li,{children:`Drag-and-drop item transitions`}),`
`,(0,c.jsx)(t.li,{children:`Card and gallery item reordering`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const flipRef = ref()
const items = ref([1, 2, 3, 4, 5])

const shuffle = async () => {
await flipRef.value?.update(() => {
  items.value = [...items.value].sort(() => Math.random() - 0.5)
})
}
<\/script>

<template>
<button @click="shuffle">Shuffle</button>

<MotionFlip ref="flipRef">
  <div v-for="item in items" :key="item">
    <div class="item">
      Item {{ item }}
    </div>
  </div>
</MotionFlip>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};