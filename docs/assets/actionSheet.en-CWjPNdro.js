import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for creating mobile-optimized action panels that slide up from the bottom of the screen with smooth animation.`}),`
`,(0,c.jsxs)(t.p,{children:[`ActionSheet is a specialized wrapper over the Window component with a preset `,(0,c.jsx)(t.code,{children:`actionSheet`}),` adaptive mode. The component automatically positions itself at the bottom of the screen and slides up when opened, following iOS and Material Design mobile interface patterns. Supports swipe gestures for closing, integration with the Bars component for the header, and automatic focus management.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Positioning at the bottom of the screen with slide-up animation`}),`
`,(0,c.jsx)(t.li,{children:`Touch gesture support for closing by swiping down`}),`
`,(0,c.jsx)(t.li,{children:`Integration with Bars for header display`}),`
`,(0,c.jsx)(t.li,{children:`Automatic background blocking when opened`}),`
`,(0,c.jsx)(t.li,{children:`Closing by clicking on overlay or close button`}),`
`,(0,c.jsx)(t.li,{children:`Lifecycle events (opening, closing)`}),`
`,(0,c.jsx)(t.li,{children:`Slot support for content customization`}),`
`,(0,c.jsx)(t.li,{children:`Adaptive height based on content size`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Action menus for mobile applications`}),`
`,(0,c.jsx)(t.li,{children:`Option and selection lists`}),`
`,(0,c.jsx)(t.li,{children:`Forms and filters on mobile devices`}),`
`,(0,c.jsx)(t.li,{children:`Context menus for touch interfaces`}),`
`,(0,c.jsx)(t.li,{children:`Confirmations and notifications`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const handleAction = (action) => {
console.log('Selected action:', action)
isOpen.value = false
}
<\/script>

<template>
<button @click="isOpen = true">Open Actions</button>

<ActionSheet
  v-model:open="isOpen"
  :touchClose="true"
>
  <template #title>
    <h3>Choose Action</h3>
  </template>

  <template #default>
    <div class="action-list">
      <button @click="handleAction('share')">Share</button>
      <button @click="handleAction('copy')">Copy Link</button>
      <button @click="handleAction('download')">Download</button>
    </div>
  </template>

  <template #footer>
    <button @click="isOpen = false">Cancel</button>
  </template>
</ActionSheet>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};