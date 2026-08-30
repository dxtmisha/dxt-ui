import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for creating interactive list items with flexible content structure and multiple display areas.`}),`
`,(0,c.jsx)(t.p,{children:`ListItem provides uniform presentation of items in lists, menus, and navigation structures. The component supports labels, descriptions, icons, status badges, interactive states (focus, selection, disabled), loading with progress and skeleton, and ripple effect for enhanced feedback.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Multiple content areas (label, description, prefix, suffix, caption)`}),`
`,(0,c.jsx)(t.li,{children:`Icon support with flexible positioning and alignment`}),`
`,(0,c.jsx)(t.li,{children:`Badge integration for status indicators`}),`
`,(0,c.jsx)(t.li,{children:`Interactive states (focus, selected, disabled, readonly)`}),`
`,(0,c.jsx)(t.li,{children:`Loading states with progress and skeleton`}),`
`,(0,c.jsx)(t.li,{children:`Ripple effect for visual feedback`}),`
`,(0,c.jsx)(t.li,{children:`Flexible tag variants (button, link, div, span)`}),`
`,(0,c.jsx)(t.li,{children:`Built-in accessibility support`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`List items and navigation menus`}),`
`,(0,c.jsx)(t.li,{children:`Settings and configuration options`}),`
`,(0,c.jsx)(t.li,{children:`Lists with multiple selection`}),`
`,(0,c.jsx)(t.li,{children:`Contact lists and catalogs`}),`
`,(0,c.jsx)(t.li,{children:`Mobile interfaces and action lists`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const items = ref([
{ text: 'List item 1', value: '1', selected: false },
{ text: 'List item 2', value: '2', selected: true },
{ text: 'List item 3', value: '3', selected: false }
])

const handleClick = (item) => {
item.selected = !item.selected
console.log('Item selected:', item.text)
}
<\/script>

<template>
<List>
  <ListItem
    v-for="item in items"
    :key="item.value"
    :text="item.text"
    :selected="item.selected"
    @click="handleClick(item)"
  >
    <template #prefix>
      <Icon name="check" v-if="item.selected" />
    </template>
  </ListItem>
</List>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};