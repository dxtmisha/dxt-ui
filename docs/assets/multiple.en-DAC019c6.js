import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.h2,{id:`range-selection-mode-multiple`,children:[`Range selection mode (`,(0,c.jsx)(t.code,{children:`multiple`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Enabling the `,(0,c.jsx)(t.code,{children:`multiple`}),` prop transforms the slider into a dual-thumb range selector. In range mode, `,(0,c.jsx)(t.code,{children:`v-model`}),` binds to an array of two numbers `,(0,c.jsx)(t.code,{children:`[min, max]`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`multiple`}),` — enables two handles for bounded range selection`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`minimumDistance`}),` — enforces a minimum numeric interval between min and max handles (default is `,(0,c.jsx)(t.code,{children:`1`}),`)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`When adjusting handles in range mode, the component ensures that the minimum handle cannot exceed the maximum handle minus `,(0,c.jsx)(t.code,{children:`minimumDistance`}),`, preventing handle overlap and invalid intervals.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const priceRange = ref([100, 500])
<\/script>

<template>
<Slider
  v-model="priceRange"
  multiple
  :min="0"
  :max="1000"
  :step="10"
  :minimumDistance="50"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};