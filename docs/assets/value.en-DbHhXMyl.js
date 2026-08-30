import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`value-state`,children:`Value state`}),`
`,(0,c.jsxs)(t.p,{children:[`Properties `,(0,c.jsx)(t.code,{children:`value`}),` and `,(0,c.jsx)(t.code,{children:`isValue`}),` are designed to control the visual filled state of the field independently of the actual content.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value`}),` — actual field content (string/number) passed to the inner element via slot`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isValue`}),` — forcibly activates the visual "filled" state even when the value is empty`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work together: `,(0,c.jsx)(t.code,{children:`Field`}),` reads `,(0,c.jsx)(t.code,{children:`value`}),` reactively through `,(0,c.jsx)(t.code,{children:`focusValue`}),` for visual purposes (displaying text in scoreboard, caption handling), but does not manage it directly or validate it. If the real value is non-empty, the field automatically receives the visual "filled" state regardless of `,(0,c.jsx)(t.code,{children:`isValue`}),`. When the value is empty, the `,(0,c.jsx)(t.code,{children:`isValue = true`}),` flag forcibly activates the visual filled mode (floating label, corresponding classes), which is useful for preloads, masks, or delayed data insertion.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const value = ref('')
const isLoading = ref(true)
<\/script>

<template>
<!-- Normal behavior -->
<Field label="Name">
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- Forced "filled" state -->
<Field
  label="Email"
  :value="value"
  :is-value="true"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- Preload with visual state -->
<Field
  label="Data"
  :is-value="isLoading"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};