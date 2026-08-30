import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`input-masking`,children:`Input Masking`}),`
`,(0,c.jsxs)(t.p,{children:[`Properties `,(0,c.jsx)(t.code,{children:`mask`}),`, `,(0,c.jsx)(t.code,{children:`maskVisible`}),`, `,(0,c.jsx)(t.code,{children:`maskNone`}),`, and `,(0,c.jsx)(t.code,{children:`maskAttrs`}),` are designed to manage formatted input with automatic separator insertion and character control at specified positions.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mask`}),` — mask template as a string (e.g., `,(0,c.jsx)(t.code,{children:`+1 (***) ***-****`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maskVisible`}),` — controls placeholder characters display (default `,(0,c.jsx)(t.code,{children:`true`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maskNone`}),` — completely disables the mask`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maskAttrs`}),` — object with extended mask settings`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work together: `,(0,c.jsx)(t.code,{children:`mask`}),` defines the formatting structure, where special character (default `,(0,c.jsx)(t.code,{children:`*`}),`) defines positions for digit input, and other characters (spaces, brackets, hyphens) are automatically inserted as fixed separators. `,(0,c.jsx)(t.code,{children:`maskVisible`}),` controls the display of unfilled positions, where when set to `,(0,c.jsx)(t.code,{children:`true`}),` they are displayed with placeholder characters `,(0,c.jsx)(t.code,{children:`_`}),`, and when `,(0,c.jsx)(t.code,{children:`false`}),` only entered characters with separators are shown. `,(0,c.jsx)(t.code,{children:`maskNone`}),` allows completely disabling masking logic, converting the field to a regular text input. `,(0,c.jsx)(t.code,{children:`maskAttrs`}),` provides access to extended settings, allowing configuration of special characters (`,(0,c.jsx)(t.code,{children:`special`}),`), regular expressions for validation (`,(0,c.jsx)(t.code,{children:`match`}),`), custom placeholder characters (`,(0,c.jsx)(t.code,{children:`view`}),`), validation patterns (`,(0,c.jsx)(t.code,{children:`pattern`}),`), and rubber groups (`,(0,c.jsx)(t.code,{children:`rubber`}),`).`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
const value = ref('')
<\/script>

<template>
<!-- US Phone -->
<Input v-model="value" type="tel" mask="+1 (###) ###-####" placeholder="+1 (555) 000-0000" label="Phone" />

<!-- Credit Card -->
<Input v-model="value" type="text" mask="#### #### #### ####" placeholder="0000 0000 0000 0000" label="Card" />

<!-- Without placeholder display -->
<Input v-model="value" type="tel" mask="+1 (###) ###-####" :mask-visible="false" label="No placeholder" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};