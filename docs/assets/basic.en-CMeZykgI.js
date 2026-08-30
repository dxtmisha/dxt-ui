import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`A component for creating input fields with automatic data formatting according to a specified pattern in real-time.`}),`
`,(0,c.jsxs)(t.p,{children:[`Mask provides structured input with support for various formats (phones, bank cards, dates, currencies, numbers). The component automatically adds separators and literal characters during typing, restricts input to only allowed characters, supports multiple patterns with automatic selection of the most suitable one, works together with the validation system through `,(0,c.jsx)(t.code,{children:`pattern`}),` and `,(0,c.jsx)(t.code,{children:`check`}),`, and provides built-in mask types for common data formats.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Automatic formatting with separator addition`}),`
`,(0,c.jsx)(t.li,{children:`Flexible templates with support for single and multiple masks`}),`
`,(0,c.jsx)(t.li,{children:`Built-in types: text, number, number-format, currency, date, time`}),`
`,(0,c.jsxs)(t.li,{children:[`Customizable special characters via `,(0,c.jsx)(t.code,{children:`special`}),` property`]}),`
`,(0,c.jsx)(t.li,{children:`Input error prevention with character restriction`}),`
`,(0,c.jsxs)(t.li,{children:[`Integration with validation system through `,(0,c.jsx)(t.code,{children:`pattern`}),` and `,(0,c.jsx)(t.code,{children:`check`})]}),`
`,(0,c.jsx)(t.li,{children:`Alignment support (left/right) and direction (ltr/rtl)`}),`
`,(0,c.jsx)(t.li,{children:`Rubber groups with dynamic length`}),`
`,(0,c.jsx)(t.li,{children:`Visibility control for unfilled characters`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Typical use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Phone number input fields`}),`
`,(0,c.jsx)(t.li,{children:`Bank card numbers and CVV codes`}),`
`,(0,c.jsx)(t.li,{children:`Dates and times in various formats`}),`
`,(0,c.jsx)(t.li,{children:`Postal codes and identifiers`}),`
`,(0,c.jsx)(t.li,{children:`Currency amounts with formatting`}),`
`,(0,c.jsx)(t.li,{children:`Numeric values with separators`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const phone = ref('')
const cardNumber = ref('')
const date = ref('')
const amount = ref('')

const handleInput = (value) => {
console.log('Entered value:', value)
}
<\/script>

<template>
<!-- Russian phone -->
<Mask
  v-model="phone"
  mask="+7 *** *** ** **"
  placeholder="Enter phone number"
  @input="handleInput"
/>

<!-- Bank card -->
<Mask
  v-model="cardNumber"
  mask="**** **** **** ****"
  placeholder="0000 0000 0000 0000"
/>

<!-- Multiple phone formats -->
<Mask
  v-model="phone"
  :mask="['+7 *** *** ** **', '8 *** *** ** **']"
/>

<!-- Date with built-in type -->
<Mask
  v-model="date"
  type="date"
  pattern="DD.MM.YYYY"
/>

<!-- Currency -->
<Mask
  v-model="amount"
  type="currency"
  currency="RUB"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};