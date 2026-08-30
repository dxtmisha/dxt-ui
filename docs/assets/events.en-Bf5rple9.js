import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h3:`h3`,p:`p`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`ok`,children:(0,c.jsx)(t.code,{children:`ok`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when the confirmation (OK) button in the dialog is clicked.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Parameters:`}),`
Event does not pass parameters.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const showDialog = ref(false)

const handleOk = () => {
console.log('User confirmed action')
showDialog.value = false
// Execute action after confirmation
}
<\/script>

<template>
<Dialog
  v-model:open="showDialog"
  buttonOk="Confirm"
  label="Delete file"
  description="Are you sure you want to delete this file?"
  @ok="handleOk"
/>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`close`,children:(0,c.jsx)(t.code,{children:`close`})}),`
`,(0,c.jsx)(t.p,{children:`Event fires when the close button in the dialog is clicked.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Parameters:`}),`
Event does not pass parameters.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const showDialog = ref(false)

const handleClose = () => {
console.log('User cancelled action')
showDialog.value = false
}
<\/script>

<template>
<Dialog
  v-model:open="showDialog"
  buttonClose="Cancel"
  label="Confirmation"
  @close="handleClose"
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Buttons can be configured via `,(0,c.jsx)(t.code,{children:`buttonOk`}),` and `,(0,c.jsx)(t.code,{children:`buttonClose`}),` properties, or hidden by passing `,(0,c.jsx)(t.code,{children:`null`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};