import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`selection-management`,children:`Selection Management`}),`
`,(0,c.jsxs)(t.p,{children:[`Properties `,(0,c.jsx)(t.code,{children:`selected`}),` and `,(0,c.jsx)(t.code,{children:`iconWhenSelected`}),` are designed for managing chip selection state.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected`}),` — identifier(s) of selected item (string, number, array of strings/numbers, or `,(0,c.jsx)(t.code,{children:`undefined`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`iconWhenSelected`}),` — shows chip icons only when item is selected (default: icons always visible)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`selected`}),` property determines which chips will be highlighted. Accepts a single value for single selection or an array of values for multiple selection. Values are matched with list items by their index or value if the list contains simple data types.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(['option1'])
<\/script>

<template>
<!-- Simple array selection -->
<ChipGroup
  v-model:selected="selected"
  :list="['Option 1', 'Option 2']"
/>

<!-- Object array with keys -->
<ChipGroup
  v-model:selected="selected"
  :list="[
    { id: 'option1', name: 'First Option' },
    { id: 'option2', name: 'Second Option' }
  ]"
  key-value="id"
  key-label="name"
/>

<!-- Icons only when selected -->
<ChipGroup
  v-model:selected="selected"
  :list="[
    { id: 'option1', name: 'Option 1', icon: 'check' },
    { id: 'option2', name: 'Option 2', icon: 'check' }
  ]"
  key-value="id"
  key-label="name"
  :icon-when-selected="true"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};