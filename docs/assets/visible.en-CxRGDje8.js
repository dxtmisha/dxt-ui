import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`mask-visibility-control`,children:`Mask visibility control`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`visible`}),` and `,(0,c.jsx)(t.code,{children:`visiblePartly`}),` properties are designed for managing the display of mask placeholder characters and overall component visibility.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`visible`}),` — controls complete visibility of the mask component`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`visiblePartly`}),` — controls partial visibility of placeholder characters`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work together: when `,(0,c.jsx)(t.code,{children:`visible: false`}),`, the mask component is completely hidden, including all placeholder characters. When `,(0,c.jsx)(t.code,{children:`visiblePartly: true`}),` is activated, only filled mask positions are displayed, hiding empty placeholder characters. If `,(0,c.jsx)(t.code,{children:`visible`}),` is set to `,(0,c.jsx)(t.code,{children:`false`}),`, the `,(0,c.jsx)(t.code,{children:`visiblePartly`}),` property is ignored. Visibility changes don't affect validation logic and data processing, allowing creation of adaptive interfaces with conditional or abbreviated mask display.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const showMask = ref(true)
const compactMode = ref(false)
<\/script>

<template>
<!-- Complete mask hiding -->
<Mask
  mask="+1 (***) ***-****"
  :visible="false"
/>

<!-- Show only filled positions -->
<Mask
  mask="+1 (***) ***-****"
  :visiblePartly="true"
/>

<!-- Conditional display with partial visibility -->
<Mask
  mask="+1 (***) ***-****"
  :visible="showMask"
  :visiblePartly="compactMode"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};