import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`menu-item-navigation`,children:`Menu item navigation`}),`
`,(0,c.jsxs)(t.p,{children:[`Methods `,(0,c.jsx)(t.code,{children:`previous()`}),` and `,(0,c.jsx)(t.code,{children:`next()`}),` are designed for programmatic movement through menu items based on current selection and the `,(0,c.jsx)(t.code,{children:`step`}),` property.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Methods:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`previous()`}),` — moves selection to the previous item (backwards by `,(0,c.jsx)(t.code,{children:`step`}),` positions)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`next()`}),` — moves selection to the next item (forwards by `,(0,c.jsx)(t.code,{children:`step`}),` positions)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step`}),` — number of items to skip during navigation (default: 1)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`The methods work together with reactive `,(0,c.jsx)(t.code,{children:`selected`}),` state: calling `,(0,c.jsx)(t.code,{children:`previous()`}),` or `,(0,c.jsx)(t.code,{children:`next()`}),` automatically calculates the new position relative to the currently selected item. If no item is selected, the methods select the first available item. When reaching list boundaries (first or last item), navigation stops at the boundary item, preventing overflow beyond the list.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const menuRef = ref()
const selected = ref('item2')
<\/script>

<template>
<!-- Call via ref -->
<button @click="menuRef?.previous()">Previous</button>
<button @click="menuRef?.next()">Next</button>

<Menu
  ref="menuRef"
  v-model:selected="selected"
  :list="[
    { label: 'Item 1', value: 'item1' },
    { label: 'Item 2', value: 'item2' },
    { label: 'Item 3', value: 'item3' }
  ]"
  :step="1"
/>

<!-- Navigation in control slot -->
<Menu v-model:selected="selected" :list="items">
  <template #control="{ previous, next, selectedNames }">
    <button @click="previous">◀</button>
    <span>{{ selectedNames[0] }}</span>
    <button @click="next">▶</button>
  </template>
</Menu>

<!-- With custom step -->
<Menu
  ref="menuRef"
  v-model:selected="selected"
  :list="items"
  :step="2"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};