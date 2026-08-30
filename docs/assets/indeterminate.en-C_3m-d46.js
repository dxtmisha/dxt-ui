import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`indeterminate-state`,children:`Indeterminate state`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`indeterminate`}),` property controls the third checkbox state — indeterminate (partially selected). This state is visually displayed as a horizontal line instead of a checkmark.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`indeterminate`}),` — enables the indeterminate state of the checkbox`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`iconIndeterminate`}),` — custom icon for the indeterminate state`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value`}),` — remains `,(0,c.jsx)(t.code,{children:`null`}),` or a special value in the indeterminate state`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`The indeterminate state is typically used for parent checkboxes in a group when only some child elements are selected.`}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref, computed } from 'vue'

const items = ref([
{ id: 1, label: 'Item 1', checked: true },
{ id: 2, label: 'Item 2', checked: false },
{ id: 3, label: 'Item 3', checked: true }
])

const allChecked = computed({
get: () => items.value.every(item => item.checked),
set: (value) => {
  items.value.forEach(item => item.checked = value)
}
})

const indeterminate = computed(() => {
const checkedCount = items.value.filter(item => item.checked).length
return checkedCount > 0 && checkedCount < items.value.length
})
<\/script>

<template>
<!-- Parent checkbox with partial selection indicator -->
<Checkbox
  v-model="allChecked"
  :indeterminate="indeterminate"
  label="Select all"
/>

<!-- Child checkboxes -->
<div style="margin-left: 24px">
  <Checkbox
    v-for="item in items"
    :key="item.id"
    v-model="item.checked"
    :label="item.label"
  />
</div>

<!-- Using with custom icon -->
<Checkbox
  indeterminate
  iconIndeterminate="remove"
  label="Partially selected"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};