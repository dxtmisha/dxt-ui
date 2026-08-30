import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`clear-button`,children:`Clear button`}),`
`,(0,c.jsxs)(t.p,{children:[`Properties `,(0,c.jsx)(t.code,{children:`cancel`}),` and `,(0,c.jsx)(t.code,{children:`cancelShow`}),` are designed to control the display of the field clear icon.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cancel`}),` — clear button display mode (`,(0,c.jsx)(t.code,{children:`auto`}),` or `,(0,c.jsx)(t.code,{children:`always`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cancelShow`}),` — conditional visibility flag, used only in `,(0,c.jsx)(t.code,{children:`auto`}),` mode`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work together: if `,(0,c.jsx)(t.code,{children:`cancel`}),` is set to `,(0,c.jsx)(t.code,{children:`auto`}),`, the clear icon is displayed only when the conditions `,(0,c.jsx)(t.code,{children:`cancelShow = true`}),` are met, the field is active (not `,(0,c.jsx)(t.code,{children:`disabled`}),`/`,(0,c.jsx)(t.code,{children:`readonly`}),`), and arrow mode (`,(0,c.jsx)(t.code,{children:`arrowCarousel`}),`/`,(0,c.jsx)(t.code,{children:`arrowStepper`}),`) is not enabled. When `,(0,c.jsx)(t.code,{children:`cancel = always`}),`, the icon is displayed forcibly (except for `,(0,c.jsx)(t.code,{children:`disabled`}),`/`,(0,c.jsx)(t.code,{children:`readonly`}),` or active arrows), the `,(0,c.jsx)(t.code,{children:`cancelShow`}),` value is ignored. Arrow modes take priority over the clear button — when navigation is active, cancel is hidden regardless of settings.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref, computed } from 'vue'

const value = ref('')
const hasValue = computed(() => value.value.length > 0)
<\/script>

<template>
<!-- Automatic mode with condition -->
<Field
  label="Search"
  cancel="auto"
  :cancel-show="hasValue"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- Forced display -->
<Field
  label="Filter"
  cancel="always"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- With event handler -->
<Field
  label="Input"
  cancel="auto"
  :cancel-show="hasValue"
  @click="value = ''"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};