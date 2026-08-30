import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`state-management-via-v-model`,children:`State management via v-model`}),`
`,(0,c.jsxs)(t.p,{children:[`Two-way binding of action mode state via `,(0,c.jsx)(t.code,{children:`v-model:action`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action: boolean`}),` — action mode state of the bar`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isAction = ref(false)
<\/script>

<template>
<button @click="isAction = true">Enable action mode</button>

<Bars v-model:action="isAction">
  <template #bars>
    <Button>Regular button</Button>
  </template>
  <template #actionBars>
    <Button>Action button</Button>
    <Button @click="isAction = false">Close</Button>
  </template>
</Bars>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};