import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Phone number input field component with country selection, validation, and masking support.`}),`
`,(0,c.jsx)(t.p,{children:`InputPhone is a specialized input field designed for phone number entry. It integrates with a country flag/code selector and applies automatic mask formatting based on the selected or detected country. By default, the country can be dynamically identified from the entered dialing digits.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic phone number masking based on selected country`}),`
`,(0,c.jsx)(t.li,{children:`Interactive country selection menu with search, flags and dialing codes`}),`
`,(0,c.jsx)(t.li,{children:`Dynamic country detection from entered phone number digits`}),`
`,(0,c.jsxs)(t.li,{children:[`Configurable default country and option to disable auto-detection via `,(0,c.jsx)(t.code,{children:`countryBlock`})]}),`
`,(0,c.jsx)(t.li,{children:`Fully custom pattern formatting via mask attributes`}),`
`,(0,c.jsxs)(t.li,{children:[`Supports two-way data binding (`,(0,c.jsx)(t.code,{children:`v-model`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Integrated helper messages, status validation states, and label configurations`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical Use Cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Phone number fields in registration or checkout forms`}),`
`,(0,c.jsx)(t.li,{children:`Contact information sections in user profiles`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const phone = ref('')
<\/script>

<template>
<InputPhone
  v-model:value="phone"
  label="Phone Number"
  placeholder="Enter phone number"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};