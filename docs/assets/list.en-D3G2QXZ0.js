import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`A component for creating interactive lists with support for hierarchical data, keyboard navigation, and search functionality.`}),`
`,(0,c.jsx)(t.p,{children:`List manages the display of structured data with navigation capabilities, item selection, and interaction through keyboard and mouse. The component supports various item types (regular items, groups, menus, dividers, subtitles, HTML content), automatically handles complex hierarchical structures, and provides intuitive navigation. The built-in search system works in real-time with match highlighting across the entire data hierarchy.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Various item types (item, group, menu, line, subtitle, html)`}),`
`,(0,c.jsx)(t.li,{children:`Hierarchical structure with nested groups and menus`}),`
`,(0,c.jsx)(t.li,{children:`Full keyboard navigation (↑/↓, Enter, →, ←)`}),`
`,(0,c.jsx)(t.li,{children:`Built-in real-time search with match highlighting`}),`
`,(0,c.jsx)(t.li,{children:`Item selection control via v-model:selected`}),`
`,(0,c.jsx)(t.li,{children:`Focus control via v-model:focus`}),`
`,(0,c.jsx)(t.li,{children:`Lightweight mode for large lists (lite)`}),`
`,(0,c.jsx)(t.li,{children:`Display axis configuration (x/y) and dividers`}),`
`,(0,c.jsx)(t.li,{children:`Click and menu close events`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Navigation menus and option lists`}),`
`,(0,c.jsx)(t.li,{children:`Dropdown lists with hierarchical structure`}),`
`,(0,c.jsx)(t.li,{children:`Product and category catalogs`}),`
`,(0,c.jsx)(t.li,{children:`Settings lists with grouping`}),`
`,(0,c.jsx)(t.li,{children:`Context menus with submenus`}),`
`,(0,c.jsx)(t.li,{children:`File and folder lists`}),`
`,(0,c.jsx)(t.li,{children:`Filters with multiple selection`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(['item2'])
const focus = ref(null)

const listData = ref([
{ label: 'First item', value: 'item1' },
{ label: 'Second item', value: 'item2' },
{ type: 'line' },
{ type: 'subtitle', label: 'Item group' },
{
  label: 'Group with submenu',
  value: 'group1',
  type: 'group',
  list: [
    { label: 'Nested item 1', value: 'nested1' },
    { label: 'Nested item 2', value: 'nested2' }
  ]
}
])

const handleClick = (event) => {
console.log('Item clicked:', event.detail.value)
}
<\/script>

<template>
<List
  v-model:selected="selected"
  v-model:focus="focus"
  :list="listData"
  highlight="text"
  @click="handleClick"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};