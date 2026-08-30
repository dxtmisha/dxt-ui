import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`ignore-zones`,children:`Ignore zones`}),`
`,(0,c.jsx)(t.p,{children:`Properties that exclude elements from outside-click checks and auto-close logic.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ignore`}),` — DOM element reference or CSS selector to exclude from outside-click detection`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ignoreSelector`}),` — CSS selector to exclude multiple elements simultaneously`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Both properties work together during outside-click evaluation. `,(0,c.jsx)(t.code,{children:`ignore`}),` is more precise and faster for single elements, can reference a specific DOM element directly. `,(0,c.jsx)(t.code,{children:`ignoreSelector`}),` is more flexible, can match multiple elements with a single selector, better suited for dynamic content. Use for trigger buttons, helper controls, and nested interactive areas.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const triggerButton = ref()
<\/script>

<template>
<!-- Ignoring specific element -->
<MotionTransform :ignore="triggerButton" />

<!-- Ignoring by selector -->
<MotionTransform ignoreSelector=".trigger-button" />

<!-- Combining both properties -->
<MotionTransform
  :ignore="triggerButton"
  ignoreSelector=".helper-controls"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};