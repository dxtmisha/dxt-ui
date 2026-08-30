import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for displaying selected values in selection controls with support for single and multiple modes.`}),`
`,(0,c.jsx)(t.p,{children:`SelectValue manages the visualization of selected items, automatically switching between text display for single selection and chips for multiple selection. The component integrates with the event system to handle user actions, supports icon display, placeholders, and cancel buttons for selections.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic switching between single and multiple selection modes`}),`
`,(0,c.jsx)(t.li,{children:`Chip rendering with customizable appearance for multiple selections`}),`
`,(0,c.jsx)(t.li,{children:`Placeholder support for empty state`}),`
`,(0,c.jsx)(t.li,{children:`Icon display in selected items`}),`
`,(0,c.jsx)(t.li,{children:`Cancel buttons for removing individual selections`}),`
`,(0,c.jsx)(t.li,{children:`Integration with Chip component for element styling`}),`
`,(0,c.jsx)(t.li,{children:`Handling disabled and readonly states`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Displaying selected options in selects and comboboxes`}),`
`,(0,c.jsx)(t.li,{children:`Visualizing multiple selections in lists`}),`
`,(0,c.jsx)(t.li,{children:`Showing active filters with removal capability`}),`
`,(0,c.jsx)(t.li,{children:`Displaying tags and categories`}),`
`,(0,c.jsx)(t.li,{children:`Representing selected elements in forms`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedSingle = ref([
{ label: 'JavaScript', value: 'js', icon: 'code', index: '1' }
])

const selectedMultiple = ref([
{ label: 'React', value: 'react', icon: 'favorite', index: '1' },
{ label: 'Vue.js', value: 'vue', icon: 'star', index: '2' }
])

const handleClick = (event) => {
console.log('Element clicked:', event)
}
<\/script>

<template>
<!-- Single selection -->
<SelectValue
  :value="selectedSingle"
  :icon-show="true"
  @click="handleClick"
/>

<!-- Multiple selection with chips -->
<SelectValue
  :value="selectedMultiple"
  :multiple="true"
  :icon-show="true"
  icon-cancel="close"
  @click="handleClick"
/>

<!-- With placeholder -->
<SelectValue
  placeholder="Select a value"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};