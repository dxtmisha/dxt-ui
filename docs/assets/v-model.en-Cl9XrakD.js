import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`managing-value-via-v-model`,children:`Managing value via v-model`}),`
`,(0,c.jsxs)(t.p,{children:[`Two-way value binding using `,(0,c.jsx)(t.code,{children:`v-model`}),` (component uses standard `,(0,c.jsx)(t.code,{children:`modelValue`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`modelValue: string | number`}),` — current value`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const value = ref('')
<\/script>

<template>
<div>
  <button @click="value = 'Example'">Set value</button>
  <button @click="value = ''">Clear</button>
</div>

<Component v-model="value" />

<div>Current value: {{ value }}</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};