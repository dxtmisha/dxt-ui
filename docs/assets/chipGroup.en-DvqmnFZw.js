import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for managing a collection of chips with selection functionality and flexible data binding.`}),`
`,(0,c.jsx)(t.p,{children:`ChipGroup renders multiple Chip components from a data array, handles single or multiple selection states, and provides customization options for each chip. The component supports dynamic list rendering, conditional icon display based on selection, and flexible data structure mapping through key properties.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Single or multiple item selection`}),`
`,(0,c.jsx)(t.li,{children:`Dynamic list rendering from data array`}),`
`,(0,c.jsx)(t.li,{children:`Customizable chip appearance through chipAttrs`}),`
`,(0,c.jsx)(t.li,{children:`Conditional icon display based on selection state`}),`
`,(0,c.jsx)(t.li,{children:`Flexible data binding with keyLabel and keyValue`}),`
`,(0,c.jsx)(t.li,{children:`Event handling for user interactions`}),`
`,(0,c.jsx)(t.li,{children:`Support for complex data structures`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Filter chips for search and filtering`}),`
`,(0,c.jsx)(t.li,{children:`Tag selection in forms`}),`
`,(0,c.jsx)(t.li,{children:`Category selection interfaces`}),`
`,(0,c.jsx)(t.li,{children:`Multiple choice options`}),`
`,(0,c.jsx)(t.li,{children:`Status or type selectors`}),`
`,(0,c.jsx)(t.li,{children:`Dynamic lists with selection`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(['option1'])

const options = [
{ value: 'option1', label: 'Option 1', icon: 'star' },
{ value: 'option2', label: 'Option 2', icon: 'favorite' },
{ value: 'option3', label: 'Option 3', icon: 'bookmark' }
]

const handleClick = (event) => {
console.log('Chip clicked:', event)
}
<\/script>

<template>
<ChipGroup
  v-model:selected="selected"
  :list="options"
  key-value="value"
  key-label="label"
  :icon-when-selected="true"
  @click="handleClick"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};