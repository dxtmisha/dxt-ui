import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for creating modal dialog windows with icon support, titles, and predefined action buttons.`}),`
`,(0,c.jsx)(t.p,{children:`Dialog is a specialized wrapper over the Modal component with additional capabilities for displaying informational messages, confirmations, and notifications. The component automatically displays an information block with icon, title, and description, and provides predefined OK and Close buttons. Supports success and error states with automatic icon switching, image positioning, and full content customization.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Modal window with centering and background blocking`}),`
`,(0,c.jsx)(t.li,{children:`Icon support with automatic switching for success/error states`}),`
`,(0,c.jsx)(t.li,{children:`Information block with icon, title, and description`}),`
`,(0,c.jsx)(t.li,{children:`Predefined OK and Close buttons with customization options`}),`
`,(0,c.jsx)(t.li,{children:`Image positioning at top or left`}),`
`,(0,c.jsx)(t.li,{children:`Integration with Window, Bars, Actions, Icon components`}),`
`,(0,c.jsx)(t.li,{children:`Closing by ESC key and overlay click`}),`
`,(0,c.jsx)(t.li,{children:`ok and close events for handling user actions`}),`
`,(0,c.jsx)(t.li,{children:`Slot support for content customization`}),`
`,(0,c.jsx)(t.li,{children:`Responsive design for mobile devices`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`User action confirmations`}),`
`,(0,c.jsx)(t.li,{children:`Success or error notifications`}),`
`,(0,c.jsx)(t.li,{children:`Informational messages`}),`
`,(0,c.jsx)(t.li,{children:`Warnings and alerts`}),`
`,(0,c.jsx)(t.li,{children:`Simple forms with minimal fields`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const showSuccess = ref(false)

const handleConfirm = () => {
console.log('Action confirmed')
isOpen.value = false
showSuccess.value = true
}
<\/script>

<template>
<button @click="isOpen = true">Open Dialog</button>

<Dialog
  v-model:open="isOpen"
  label="Confirmation"
  description="Are you sure you want to perform this action?"
  @ok="handleConfirm"
  @close="isOpen = false"
>
  <template #default>
    <div class="additional-info">
      Additional information can be placed here.
    </div>
  </template>
</Dialog>

<Dialog
  v-model:open="showSuccess"
  :success="true"
  label="Success"
  description="Your action has been completed successfully."
  :buttonClose="null"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};