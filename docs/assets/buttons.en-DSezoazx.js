import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`action-buttons`,children:`Action buttons`}),`
`,(0,c.jsxs)(t.p,{children:[`Properties `,(0,c.jsx)(t.code,{children:`buttonOk`}),`, `,(0,c.jsx)(t.code,{children:`buttonClose`}),`, and `,(0,c.jsx)(t.code,{children:`actionsList`}),` control action buttons in the dialog window through the built-in Actions component.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`buttonOk`}),` — confirmation button`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`buttonClose`}),` — close button`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`clickOkAndClose`}),` — automatic dialog closing when OK button is clicked`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actionsList`}),` — direct access to the Actions component button list`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`With `,(0,c.jsx)(t.code,{children:`clickOkAndClose="true"`}),` OK button automatically closes the dialog after clicking.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<!-- Basic usage -->
<Dialog
  buttonOk="Confirm"
  buttonClose="Cancel"
  label="Delete file"
  @ok="handleDelete"
/>

<!-- Hide close button -->
<Dialog
  buttonOk="Got it"
  :buttonClose="null"
  label="Information"
/>

<!-- Using actionsList -->
<Dialog
  :actionsList="[
    { label: 'Save', onClick: handleSave },
    { label: 'Cancel', outline: true, onClick: handleCancel }
  ]"
  label="Save"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};