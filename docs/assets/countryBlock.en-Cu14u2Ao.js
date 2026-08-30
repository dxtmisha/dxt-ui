import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,p:`p`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`country-blocking`,children:`Country Blocking`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`countryBlock`}),` property hides the country dial code selector button and switches the input mask to the local phone format (without the country prefix).`]}),`
`,(0,c.jsxs)(t.p,{children:[`By default, the component displays the country selector and uses the full international mask format (including the country code prefix). Setting `,(0,c.jsx)(t.code,{children:`countryBlock`}),` to `,(0,c.jsx)(t.code,{children:`true`}),` hides the flag and dial code selector, and formats the input using only the national/local phone pattern for the selected country.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
const phone = ref('')
<\/script>

<template>
<!-- Country block enabled (DE locked) -->
<InputPhone
  v-model:value="phone"
  country-default="DE"
  :country-block="true"
  label="Locked Country (DE)"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};