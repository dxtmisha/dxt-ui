import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`A simplified wrapper over the Window component for creating modal dialogs with preconfigured centered positioning settings.`}),`
`,(0,c.jsxs)(t.p,{children:[`Modal is a specialized component that uses Window with a fixed `,(0,c.jsx)(t.code,{children:`adaptive: 'modal'`}),` mode. It is designed to display content that requires immediate user attention, blocking interaction with the main interface. The component automatically centers content, adds a semi-transparent backdrop (overlay), and manages focus.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Centered positioning by default`}),`
`,(0,c.jsx)(t.li,{children:`Semi-transparent overlay with background blocking`}),`
`,(0,c.jsx)(t.li,{children:`Control via v-model:open`}),`
`,(0,c.jsx)(t.li,{children:`Close on ESC key and click outside`}),`
`,(0,c.jsx)(t.li,{children:`Integration with Scrollbar for long content`}),`
`,(0,c.jsx)(t.li,{children:`Slots for title, content, and footer`}),`
`,(0,c.jsx)(t.li,{children:`Lifecycle events (preparation, opening, closing)`}),`
`,(0,c.jsx)(t.li,{children:`Close button with customizable icon`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Differences from Window:`})}),`
`,(0,c.jsxs)(t.p,{children:[`Modal is a Window with preset `,(0,c.jsx)(t.code,{children:`adaptive: 'modal'`}),`, which simplifies usage for standard dialog windows without explicitly specifying the adaptive mode.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Action confirmation dialogs`}),`
`,(0,c.jsx)(t.li,{children:`Create/edit forms`}),`
`,(0,c.jsx)(t.li,{children:`Warnings and informational messages`}),`
`,(0,c.jsx)(t.li,{children:`Viewing detailed information`}),`
`,(0,c.jsx)(t.li,{children:`Multi-step wizards`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)

const handleBeforeClosing = async () => {
// Check before closing
return confirm('Close modal window?')
}
<\/script>

<template>
<button @click="isModalOpen = true">Open Modal</button>

<Modal
  v-model:open="isModalOpen"
  :beforeClosing="handleBeforeClosing"
  closeButton
>
  <template #title>
    <h2>Confirm Action</h2>
  </template>

  <template #default>
    <p>Are you sure you want to perform this action?</p>
    <p>This action cannot be undone.</p>
  </template>

  <template #footer="{ classesModal }">
    <button :class="classesModal.close">Cancel</button>
    <button @click="performAction">Confirm</button>
  </template>
</Modal>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};