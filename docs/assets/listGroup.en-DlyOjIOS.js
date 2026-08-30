import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for grouping and organizing list items with collapsible structure.`}),`
`,(0,c.jsx)(t.p,{children:`ListGroup is an auxiliary component for List, managing hierarchical content organization with expand/collapse functionality. The component integrates with MotionTransform for smooth animations, supports unlimited nesting levels, and provides convenient navigation through structured data.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Hierarchical content organization with unlimited nesting`}),`
`,(0,c.jsx)(t.li,{children:`Expand/collapse animations via MotionTransform`}),`
`,(0,c.jsx)(t.li,{children:`State management via props or internal state`}),`
`,(0,c.jsx)(t.li,{children:`Automatic group content visibility control`}),`
`,(0,c.jsx)(t.li,{children:`Integration with List component ecosystem`}),`
`,(0,c.jsx)(t.li,{children:`Customization support via head and list slots`}),`
`,(0,c.jsx)(t.li,{children:`Group state change events`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Grouping list items by categories`}),`
`,(0,c.jsx)(t.li,{children:`Creating tree-like navigation structures`}),`
`,(0,c.jsx)(t.li,{children:`Organizing settings and options by sections`}),`
`,(0,c.jsx)(t.li,{children:`Multi-level menus and catalogs`}),`
`,(0,c.jsx)(t.li,{children:`FAQ sections with expandable answers`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const items = [
{ text: 'Item 1', value: '1' },
{ text: 'Item 2', value: '2' },
{ text: 'Item 3', value: '3' }
]

const isOpen = ref(true)
<\/script>

<template>
<List>
  <ListGroup v-model:open="isOpen">
    <template #head="{ open }">
      <div class="group-header">
        <span>{{ open ? '▼' : '▶' }}</span>
        <span>Group Items</span>
      </div>
    </template>

    <template #list>
      <ListItem
        v-for="item in items"
        :key="item.value"
        :text="item.text"
      />
    </template>
  </ListGroup>
</List>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};