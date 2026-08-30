import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for creating modal windows, dialogs, and popup elements with flexible positioning and adaptive behavior.`}),`
`,(0,c.jsx)(t.p,{children:`Window manages content display on top of the main interface, supports various positioning types (modal windows, dropdown menus, action sheets), open/close animations, and event system integration. The component automatically handles outside clicks, focus management, and adaptation to different screen sizes.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Flexible positioning (center, edges, screen corners)`}),`
`,(0,c.jsx)(t.li,{children:`Adaptive modes (modal, menu, actionSheet, static)`}),`
`,(0,c.jsx)(t.li,{children:`Open/close animations with origin customization`}),`
`,(0,c.jsx)(t.li,{children:`State management via v-model or expose methods`}),`
`,(0,c.jsx)(t.li,{children:`Scrollbar integration for scrollable content`}),`
`,(0,c.jsx)(t.li,{children:`Background interaction blocking (persistent mode)`}),`
`,(0,c.jsx)(t.li,{children:`Window lifecycle events`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Modal windows for forms and confirmations`}),`
`,(0,c.jsx)(t.li,{children:`Dropdown menus and context menus`}),`
`,(0,c.jsx)(t.li,{children:`Side panels and drawer components`}),`
`,(0,c.jsx)(t.li,{children:`Action sheets for mobile interfaces`}),`
`,(0,c.jsx)(t.li,{children:`Tooltips and dialogs`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const handleWindow = (options) => {
console.log('Window state:', options.open ? 'open' : 'closed')
}
<\/script>

<template>
<button @click="isOpen = true">Open Window</button>

<Window
  v-model:open="isOpen"
  adaptive="modal"
  @window="handleWindow"
>
  <template #title>
    <h2>Window Title</h2>
  </template>

  <template #default>
    <p>Modal window content</p>
  </template>

  <template #footer>
    <button @click="isOpen = false">Close</button>
  </template>
</Window>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};