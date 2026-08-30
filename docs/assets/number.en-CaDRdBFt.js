import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`working-with-numbers`,children:`Working with Numbers`}),`
`,(0,c.jsxs)(t.p,{children:[`Properties `,(0,c.jsx)(t.code,{children:`type`}),`, `,(0,c.jsx)(t.code,{children:`fraction`}),`, `,(0,c.jsx)(t.code,{children:`language`}),`, `,(0,c.jsx)(t.code,{children:`min`}),`, `,(0,c.jsx)(t.code,{children:`max`}),`, `,(0,c.jsx)(t.code,{children:`step`}),`, `,(0,c.jsx)(t.code,{children:`arrow`}),`, `,(0,c.jsx)(t.code,{children:`arrowStep`}),`, and `,(0,c.jsx)(t.code,{children:`align`}),` are designed to manage numeric value input and formatting with localization support and interactive control elements.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type`}),` — input type (`,(0,c.jsx)(t.code,{children:`number`}),` or `,(0,c.jsx)(t.code,{children:`number-format`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fraction`}),` — number of decimal places (number, `,(0,c.jsx)(t.code,{children:`true`}),` for dynamic fractional part)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`language`}),` — locale code for formatting (e.g., `,(0,c.jsx)(t.code,{children:`ru-RU`}),`, `,(0,c.jsx)(t.code,{children:`en-US`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min`}),` — minimum allowed value`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max`}),` — maximum allowed value`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step`}),` — step size for keyboard input`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`arrow`}),` — control arrows type (`,(0,c.jsx)(t.code,{children:`auto`}),`, `,(0,c.jsx)(t.code,{children:`stepper`}),`, `,(0,c.jsx)(t.code,{children:`carousel`}),`, `,(0,c.jsx)(t.code,{children:`none`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`arrowStep`}),` — step size for arrow clicks`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`align`}),` — arrows placement (`,(0,c.jsx)(t.code,{children:`left`}),`, `,(0,c.jsx)(t.code,{children:`center`}),`, `,(0,c.jsx)(t.code,{children:`right`}),`)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work together: `,(0,c.jsx)(t.code,{children:`type`}),` defines the base input mode, where `,(0,c.jsx)(t.code,{children:`number`}),` activates simple numeric input with basic validation without formatting, and `,(0,c.jsx)(t.code,{children:`number-format`}),` enables automatic formatting with thousands separators and decimal places depending on locale. `,(0,c.jsx)(t.code,{children:`language`}),` defines regional rules for thousands separators (space, comma, period) and decimal separator (period or comma). Properties `,(0,c.jsx)(t.code,{children:`min`}),` and `,(0,c.jsx)(t.code,{children:`max`}),` activate built-in range validation. `,(0,c.jsx)(t.code,{children:`step`}),` defines increment/decrement magnitude when using arrow keys up/down and Page Up/Down. Properties `,(0,c.jsx)(t.code,{children:`arrow`}),` and `,(0,c.jsx)(t.code,{children:`arrowStep`}),` add visual control elements (± buttons or < > arrows) with customizable step size, where if `,(0,c.jsx)(t.code,{children:`arrowStep`}),` is not specified, `,(0,c.jsx)(t.code,{children:`step`}),` value is used. `,(0,c.jsx)(t.code,{children:`align`}),` controls arrows placement in the input field.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
const value = ref('1234567.89')
<\/script>

<template>
<!-- Simple numeric input -->
<Input v-model="value" type="number" label="Number" />

<!-- Formatted number with locale -->
<Input v-model="value" type="number-format" language="en-US" label="Formatted" />

<!-- With range constraints -->
<Input v-model="value" type="number" :min="0" :max="100" label="From 0 to 100" />

<!-- With step and stepper arrows -->
<Input v-model="value" type="number" arrow="stepper" :step="5" :arrow-step="10" label="Step 5/10" />

<!-- With center alignment -->
<Input v-model="value" type="number-format" align="center" :fraction="2" label="Centered" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};