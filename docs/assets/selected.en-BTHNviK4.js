import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`selected-element`,children:`Selected Element`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`selected`}),` property allows you to control the visual state of the component, indicating that it is in a selected or active state.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected`}),` — a boolean value determining whether the element is selected`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`When the `,(0,c.jsx)(t.code,{children:`selected`}),` property is set to `,(0,c.jsx)(t.code,{children:`true`}),`, a special class (usually `,(0,c.jsx)(t.code,{children:`--selected`}),`) is added to the component, which changes its appearance (e.g., background color, border, or text) to highlight it among other elements. This is useful for implementing selection lists, active input fields, or other interactive elements where it is necessary to visually indicate the user's current choice.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isSelected = ref(true)
<\/script>

<template>
<!-- Selected state -->
<Textarea
  v-model="value"
  :selected="isSelected"
  label="Active field"
/>

<!-- Normal state -->
<Textarea
  v-model="value2"
  :selected="false"
  label="Normal field"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};