import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`working-with-text-labels-and-numbers`,children:`Working with text labels and numbers`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`label`}),`, `,(0,c.jsx)(t.code,{children:`labelMax`}),`, and `,(0,c.jsx)(t.code,{children:`formatting`}),` properties are designed to manage the display of textual and numerical content in interface components.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`label`}),` — text label or numeric value to display`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`labelMax`}),` — maximum value for numeric labels (adds "+" indicator when exceeded)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`formatting`}),` — enables formatting of numeric values according to user locale`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work together for flexible content management: `,(0,c.jsx)(t.code,{children:`label`}),` accepts both textual and numeric values. When a number is passed, automatic processing is applied with localization consideration. The `,(0,c.jsx)(t.code,{children:`labelMax`}),` property limits the display of large numbers — when the value is exceeded, a "+" symbol is added (e.g., "99+"). The `,(0,c.jsx)(t.code,{children:`formatting`}),` property controls number formatting according to user regional settings, ensuring correct display of separators and numeric formats.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const count = ref(5)
const largeNumber = ref(1234)
<\/script>

<template>
<!-- Basic usage with text -->
<Component label="Text" />

<!-- Numeric value -->
<Component :label="count" />

<!-- Maximum value limitation -->
<Component :label="150" :label-max="99" />
<!-- Displays: 99+ -->

<!-- With number formatting -->
<Component
  :label="largeNumber"
  :formatting="true"
/>
<!-- Displays: 1,234 (depending on locale) -->

<!-- Combined usage -->
<Component
  :label="999"
  :label-max="99"
  :formatting="true"
/>
<!-- Displays: 99+ -->
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};