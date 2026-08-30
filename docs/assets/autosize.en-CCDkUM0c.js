import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`automatic-resizing`,children:`Automatic Resizing`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`autosize`}),` property controls the automatic resizing of the textarea height based on its content.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`autosize`}),` — enables automatic resizing mode (default is `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`rows`}),` — number of visible rows (HTML attribute).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`When `,(0,c.jsx)(t.code,{children:`autosize`}),` is enabled, the `,(0,c.jsx)(t.code,{children:`Textarea`}),` will dynamically adjust its height to fit all entered text.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const text = ref('')
<\/script>

<template>
<!-- Default automatic resizing -->
<Textarea
  v-model="text"
  label="Comment"
  placeholder="Enter text..."
/>

<!-- Disabled auto-resizing -->
<Textarea
  v-model="text"
  label="Fixed size"
  :autosize="false"
  rows="5"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};