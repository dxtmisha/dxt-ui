import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Multi-line text input component with support for auto-sizing, validation, and advanced styling.`}),`
`,(0,c.jsx)(t.p,{children:`Textarea provides a convenient interface for entering large amounts of text. The component automatically adjusts its height to fit the content, supports character limits, icons, labels, and helper messages. Integrates with the form validation system.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic height adjustment (autosize)`}),`
`,(0,c.jsx)(t.li,{children:`Validation support and error display`}),`
`,(0,c.jsx)(t.li,{children:`Built-in character counter`}),`
`,(0,c.jsx)(t.li,{children:`Support for icons, prefixes, and suffixes`}),`
`,(0,c.jsx)(t.li,{children:`Floating or static label`}),`
`,(0,c.jsx)(t.li,{children:`States: active, disabled, read-only, loading`}),`
`,(0,c.jsx)(t.li,{children:`Theme and size customization`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Comment and feedback fields`}),`
`,(0,c.jsx)(t.li,{children:`Contact forms`}),`
`,(0,c.jsx)(t.li,{children:`Description or biography editors`}),`
`,(0,c.jsx)(t.li,{children:`Address or note input`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const comment = ref('')
<\/script>

<template>
<Textarea
  v-model="comment"
  label="Your comment"
  placeholder="Enter text..."
  autosize
  counter
  :maxlength="500"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};