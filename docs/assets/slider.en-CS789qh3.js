import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for selecting numeric values or ranges using interactive movable slider handles.`}),`
`,(0,c.jsx)(t.p,{children:`Slider provides a customizable user interface for adjusting numbers or setting bounded ranges. It supports single-handle selection as well as dual-handle range selection, configurable minimum and maximum limits, custom step increments, tick mark display with custom labels, magnet position snapping, horizontal and vertical orientation, and full keyboard and touch gesture accessibility.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Single value and dual-thumb range selection (`,(0,c.jsx)(t.code,{children:`multiple`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Customizable minimum (`,(0,c.jsx)(t.code,{children:`min`}),`), maximum (`,(0,c.jsx)(t.code,{children:`max`}),`), and step (`,(0,c.jsx)(t.code,{children:`step`}),`) parameters`]}),`
`,(0,c.jsxs)(t.li,{children:[`Tick mark and label rendering with custom data mapping (`,(0,c.jsx)(t.code,{children:`marks`}),`, `,(0,c.jsx)(t.code,{children:`keyLabel`}),`, `,(0,c.jsx)(t.code,{children:`keyValue`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Magnet snapping mode (`,(0,c.jsx)(t.code,{children:`magnet`}),`) for alignment with nearest marks`]}),`
`,(0,c.jsxs)(t.li,{children:[`Minimum distance constraint between handles (`,(0,c.jsx)(t.code,{children:`minimumDistance`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Horizontal and vertical orientation (`,(0,c.jsx)(t.code,{children:`vertical`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Disabled and readonly interactive states`}),`
`,(0,c.jsx)(t.li,{children:`Full keyboard navigation and touch/drag gesture support`}),`
`,(0,c.jsx)(t.li,{children:`Ripple visual effect and customizable slot rendering`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Volume, brightness, or parameter level adjustments`}),`
`,(0,c.jsx)(t.li,{children:`Price, age, or numeric range filtering in search interfaces`}),`
`,(0,c.jsx)(t.li,{children:`Percentage and progress setting controls`}),`
`,(0,c.jsx)(t.li,{children:`Form inputs requiring constrained numerical values`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const singleValue = ref(50)
const rangeValue = ref([20, 80])
<\/script>

<template>
<!-- Single value slider -->
<Slider v-model="singleValue" :min="0" :max="100" :step="5" />

<!-- Dual-thumb range slider -->
<Slider v-model="rangeValue" multiple :min="0" :max="100" :minimumDistance="10" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};