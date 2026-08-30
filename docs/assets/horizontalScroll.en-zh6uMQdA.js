import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for creating a horizontally scrollable container with support for smooth scrolling and automatic positioning.`}),`
`,(0,c.jsx)(t.p,{children:`HorizontalScroll provides a convenient way to display content that exceeds the screen width, such as image galleries, card lists, or navigation menus. The component supports automatic scrolling to the selected element upon initialization and provides methods for programmatic scroll control.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Horizontal content scrolling`}),`
`,(0,c.jsx)(t.li,{children:`Smooth scrolling`}),`
`,(0,c.jsx)(t.li,{children:`Automatic scrolling to the active element on load`}),`
`,(0,c.jsx)(t.li,{children:`Support for custom container tags`}),`
`,(0,c.jsx)(t.li,{children:`Slot with bindings (binds) for child elements`}),`
`,(0,c.jsx)(t.li,{children:`Scrollbar visibility control (flush mode)`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Image and media galleries`}),`
`,(0,c.jsx)(t.li,{children:`Horizontal product card lists`}),`
`,(0,c.jsx)(t.li,{children:`Scrollable navigation menus (tabs)`}),`
`,(0,c.jsx)(t.li,{children:`Tag or category lists`}),`
`,(0,c.jsx)(t.li,{children:`Timelines and step sequences`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const items = ref([
{ id: 1, title: 'Item 1' },
{ id: 2, title: 'Item 2' },
{ id: 3, title: 'Item 3' },
{ id: 4, title: 'Item 4' },
{ id: 5, title: 'Item 5' }
])
<\/script>

<template>
<HorizontalScroll>
  <template #default="{ binds }">
    <div
      v-for="item in items"
      :key="item.id"
      v-bind="binds"
      class="scroll-item"
    >
      {{ item.title }}
    </div>
  </template>
</HorizontalScroll>
</template>

<style scoped>
.scroll-item {
min-width: 150px;
height: 100px;
margin-right: 16px;
background: #f5f5f5;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
}
</style>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};