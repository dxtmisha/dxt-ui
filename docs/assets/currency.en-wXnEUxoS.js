import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`currency-formatting`,children:`Currency Formatting`}),`
`,(0,c.jsxs)(t.p,{children:[`Properties `,(0,c.jsx)(t.code,{children:`type`}),`, `,(0,c.jsx)(t.code,{children:`currency`}),`, `,(0,c.jsx)(t.code,{children:`currencyHide`}),`, `,(0,c.jsx)(t.code,{children:`language`}),`, and `,(0,c.jsx)(t.code,{children:`fraction`}),` are designed to manage currency value formatting with automatic currency symbol insertion and localization.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type`}),` — input type (set to `,(0,c.jsx)(t.code,{children:`currency`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currency`}),` — currency code (e.g., `,(0,c.jsx)(t.code,{children:`USD`}),`, `,(0,c.jsx)(t.code,{children:`EUR`}),`, `,(0,c.jsx)(t.code,{children:`RUB`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currencyHide`}),` — hides currency symbol in the input field`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`language`}),` — locale code for formatting (e.g., `,(0,c.jsx)(t.code,{children:`ru-RU`}),`, `,(0,c.jsx)(t.code,{children:`en-US`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fraction`}),` — number of decimal places (default `,(0,c.jsx)(t.code,{children:`2`}),`)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work together: `,(0,c.jsx)(t.code,{children:`type="currency"`}),` automatically activates currency formatting mode with two decimal places. `,(0,c.jsx)(t.code,{children:`currency`}),` defines the symbol appended to the formatted number (`,(0,c.jsx)(t.code,{children:`$`}),`, `,(0,c.jsx)(t.code,{children:`€`}),`, `,(0,c.jsx)(t.code,{children:`₽`}),`). When `,(0,c.jsx)(t.code,{children:`currencyHide`}),` is set, currency symbol is not displayed, but number formatting is preserved. Property `,(0,c.jsx)(t.code,{children:`language`}),` affects thousand separators, decimal separator, and currency symbol position. Number of decimal places can be changed via `,(0,c.jsx)(t.code,{children:`fraction`}),`, overriding the default value.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
const value = ref('1234.56')
<\/script>

<template>
<!-- Standard currency input -->
<Input v-model="value" type="currency" currency="USD" language="en-US" label="Price" />

<!-- Currency with Russian locale -->
<Input v-model="value" type="currency" currency="RUB" language="ru-RU" label="Salary" />

<!-- Currency without symbol -->
<Input v-model="value" type="currency" currency="EUR" currency-hide language="de-DE" label="Amount" />

<!-- Currency with three decimals -->
<Input v-model="value" type="currency" currency="USD" language="en-US" :fraction="3" label="Precise Amount" />

<!-- Number formatting only -->
<Input v-model="value" type="number-format" language="ru-RU" label="Number" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};