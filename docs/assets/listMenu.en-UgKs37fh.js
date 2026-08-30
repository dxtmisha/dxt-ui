import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for creating nested menus and organizing navigation elements with expandable structure.`}),`
`,(0,c.jsx)(t.p,{children:`ListMenu is an auxiliary component for List, managing hierarchical menu structure with open/close submenu functionality. The component integrates with Window for positioning dropdown submenus, supports multiple nesting levels, and provides smooth navigation through tree-like data structures.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Hierarchical menu organization with unlimited nesting`}),`
`,(0,c.jsx)(t.li,{children:`Open/close submenu state management`}),`
`,(0,c.jsx)(t.li,{children:`Integration with Window for dropdown menu positioning`}),`
`,(0,c.jsx)(t.li,{children:`Support for horizontal and vertical positioning axes`}),`
`,(0,c.jsx)(t.li,{children:`Automatic click and navigation handling`}),`
`,(0,c.jsx)(t.li,{children:`Adaptive submenu behavior`}),`
`,(0,c.jsx)(t.li,{children:`Menu item open/close events`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Navigation menus with subsections`}),`
`,(0,c.jsx)(t.li,{children:`Multi-level catalogs and categories`}),`
`,(0,c.jsx)(t.li,{children:`Tree-like data structures`}),`
`,(0,c.jsx)(t.li,{children:`Context menus with submenus`}),`
`,(0,c.jsx)(t.li,{children:`Navigation panels with grouping`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const menuItems = ref([
{
  text: 'Home',
  value: 'home'
},
{
  text: 'Products',
  value: 'products',
  sublist: [
    { text: 'Category 1', value: 'cat1' },
    { text: 'Category 2', value: 'cat2' }
  ]
},
{
  text: 'About',
  value: 'about'
}
])
<\/script>

<template>
<List :items="menuItems">
  <template #item="{ item }">
    <ListMenu
      v-if="item.sublist"
      :items="item.sublist"
      :axis="'y'"
    >
      <template #default>
        {{ item.text }}
      </template>
    </ListMenu>
    <div v-else>{{ item.text }}</div>
  </template>
</List>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};