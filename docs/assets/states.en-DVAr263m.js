import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`success-and-error-states`,children:`Success and error states`}),`
`,(0,c.jsxs)(t.p,{children:[`Properties `,(0,c.jsx)(t.code,{children:`success`}),`, `,(0,c.jsx)(t.code,{children:`error`}),`, `,(0,c.jsx)(t.code,{children:`iconSuccess`}),` and `,(0,c.jsx)(t.code,{children:`iconError`}),` are designed to control the visual state of the dialog and automatically display corresponding icons.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`success`}),` — sets the dialog to success state with automatic icon`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`error`}),` — sets the dialog to error state with automatic icon`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`iconSuccess`}),` — sets the icon for success state (default 'check_circle')`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`iconError`}),` — sets the icon for error state (default 'error')`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work together: if `,(0,c.jsx)(t.code,{children:`success`}),` or `,(0,c.jsx)(t.code,{children:`error`}),` are not set or equal to `,(0,c.jsx)(t.code,{children:`false`}),`, the dialog is displayed in a neutral state. When `,(0,c.jsx)(t.code,{children:`success="true"`}),` is activated, the component automatically displays the success icon from `,(0,c.jsx)(t.code,{children:`iconSuccess`}),`. When `,(0,c.jsx)(t.code,{children:`error="true"`}),` is activated, the error icon from `,(0,c.jsx)(t.code,{children:`iconError`}),` is displayed. Properties `,(0,c.jsx)(t.code,{children:`iconSuccess`}),` and `,(0,c.jsx)(t.code,{children:`iconError`}),` allow overriding standard icons with custom ones, providing flexibility in visual design of dialog messages.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const showSuccess = ref(false)
const showError = ref(false)
<\/script>

<template>
<!-- Success dialog -->
<Dialog
  v-model:open="showSuccess"
  :success="true"
  label="Operation completed"
  description="Your changes have been saved successfully."
/>

<!-- Error dialog -->
<Dialog
  v-model:open="showError"
  :error="true"
  label="Operation failed"
  description="Unable to complete the operation. Please try again."
/>

<!-- With custom icons -->
<Dialog
  v-model:open="showSuccess"
  :success="true"
  iconSuccess="done_all"
  label="All done"
  description="Process completed successfully."
/>

<!-- Error with custom icon -->
<Dialog
  v-model:open="showError"
  :error="true"
  iconError="warning"
  label="Warning"
  description="Issues detected during data processing."
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};