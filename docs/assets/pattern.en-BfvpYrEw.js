import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`validation-and-patterns`,children:`Validation and patterns`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`pattern`}),` and `,(0,c.jsx)(t.code,{children:`check`}),` properties are designed for managing input validation in the mask.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pattern`}),` — defines validation patterns for individual mask groups, checking entered values`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`check`}),` — global validation pattern applied after the mask is fully completed`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work sequentially: `,(0,c.jsx)(t.code,{children:`pattern`}),` validates entered values at the mask group level, highlighting validation errors after input. Characters are entered into the field, but when they don't match the pattern, an error message is displayed. Each group (defined by special characters) receives its own pattern. After the mask is fully filled, `,(0,c.jsx)(t.code,{children:`check`}),` performs final validation of the entire value, providing an additional layer of verification for complex business logic. Both properties are optional and can be used independently or together for multi-level protection against incorrect data.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const phone = ref('')
const cardNumber = ref('')
<\/script>

<template>
<!-- Pattern for groups: digits only -->
<Mask
  v-model="phone"
  mask="+7 (***) ***-**-**"
  pattern="\\d"
/>

<!-- Pattern with function for different groups -->
<Mask
  v-model="phone"
  mask="DD/MM/YYYY"
  :special="{
    'D': {
      pattern: (masks) => {
        const value = masks['D']?.value || ''
        if (value === '0') return '[1-9]'
        if (value === '3') return '[0-1]'
        return '\\d'
      }
    },
    'M': {
      pattern: (masks) => {
        const value = masks['M']?.value || ''
        if (value === '0') return '[1-9]'
        if (value === '1') return '[0-2]'
        return '\\d'
      }
    },
    'Y': { pattern: '\\d' }
  }"
/>

<!-- Check for final validation -->
<Mask
  v-model="cardNumber"
  mask="**** **** **** ****"
  pattern="\\d"
  :check="(maskData) => {
    const number = maskData.value.replace(/s/g, '')
    return isValidLuhn(number) ? {} : {
      validationMessage: 'Invalid card number'
    }
  }"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};