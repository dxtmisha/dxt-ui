import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Trigger button component for selecting a country phone dial code via a country menu popup.`}),`
`,(0,c.jsxs)(t.p,{children:[`InputPhoneDialCode is a compact trigger button that opens a `,(0,c.jsx)(t.strong,{children:`MenuCountry`}),` popup, allowing users to select a country and its associated phone dial code. It automatically detects the user's current country via `,(0,c.jsx)(t.code,{children:`Geo.getCountry()`}),` as the default value and reactively binds the selection via `,(0,c.jsx)(t.code,{children:`v-model:selected`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Automatic default country detection via `,(0,c.jsx)(t.code,{children:`Geo.getCountry()`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Country selection via a `,(0,c.jsx)(t.code,{children:`MenuCountry`}),` popup with flag and phone code display`]}),`
`,(0,c.jsxs)(t.li,{children:[`Configurable label: phone code (e.g. `,(0,c.jsx)(t.code,{children:`+1`}),`), country name, or no label`]}),`
`,(0,c.jsx)(t.li,{children:`Trailing arrow icon reflects the open/close state of the menu`}),`
`,(0,c.jsx)(t.li,{children:`Inherits all Button and MenuCountry capabilities`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Phone number input field prefix for selecting the dial code`}),`
`,(0,c.jsx)(t.li,{children:`Country/region pickers in registration or checkout forms`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(undefined)
<\/script>

<template>
<InputPhoneDialCode
  v-model:selected="selected"
  label-type="code"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};