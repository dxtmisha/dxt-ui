import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for creating popup menus, dropdown lists, and context menus with navigation and action support.`}),`
`,(0,c.jsx)(t.p,{children:`Menu combines the functionality of Window (positioning and visibility management), Bars (action and tool panel), and List (displaying items, groups, and nested submenus). The component provides keyboard navigation, nested structure support, asynchronous data loading, optimized rendering mode for large lists, and full control over open/close state.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Integration of Window, Bars, and List components`}),`
`,(0,c.jsx)(t.li,{children:`Keyboard navigation through menu items`}),`
`,(0,c.jsx)(t.li,{children:`Nested submenus with unlimited depth`}),`
`,(0,c.jsx)(t.li,{children:`Asynchronous data loading via AJAX`}),`
`,(0,c.jsx)(t.li,{children:`Lite mode for optimizing large lists (liteThreshold)`}),`
`,(0,c.jsx)(t.li,{children:`Search and filtering of menu items`}),`
`,(0,c.jsx)(t.li,{children:`Management of selected items (selected)`}),`
`,(0,c.jsx)(t.li,{children:`Flexible positioning relative to anchor`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Navigation dropdown menus`}),`
`,(0,c.jsx)(t.li,{children:`Right-click context menus`}),`
`,(0,c.jsx)(t.li,{children:`Action and operation menus`}),`
`,(0,c.jsx)(t.li,{children:`Selectors with search and filtering`}),`
`,(0,c.jsx)(t.li,{children:`Multi-level navigation menus`}),`
`,(0,c.jsx)(t.li,{children:`Menus with dynamic data loading`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const menuItems = ref([
{ label: 'Create', value: 'create', icon: 'add' },
{ label: 'Edit', value: 'edit', icon: 'edit' },
{ label: 'Delete', value: 'delete', icon: 'delete' },
{
  label: 'Export',
  value: 'export',
  children: [
    { label: 'PDF', value: 'pdf' },
    { label: 'Excel', value: 'excel' },
    { label: 'CSV', value: 'csv' }
  ]
}
])

const handleClick = (value) => {
console.log('Selected item:', value)
isOpen.value = false
}
<\/script>

<template>
<button @click="isOpen = true">Open menu</button>

<Menu
  v-model:open="isOpen"
  :list="menuItems"
  @click="handleClick"
>
  <template #control="{ onclick }">
    <button @click="onclick">Actions</button>
  </template>
</Menu>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};