import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`date-and-time-formatting`,children:`Date and Time Formatting`}),`
`,(0,c.jsxs)(t.p,{children:[`Properties `,(0,c.jsx)(t.code,{children:`type`}),`, `,(0,c.jsx)(t.code,{children:`language`}),`, and `,(0,c.jsx)(t.code,{children:`mask`}),` are designed to manage date and time input and formatting with automatic localization and masking.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Properties:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type`}),` — input type (set to one of: `,(0,c.jsx)(t.code,{children:`date`}),`, `,(0,c.jsx)(t.code,{children:`datetime`}),`, `,(0,c.jsx)(t.code,{children:`year-month`}),`, `,(0,c.jsx)(t.code,{children:`time`}),`, `,(0,c.jsx)(t.code,{children:`hour-minute`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`language`}),` — locale code for formatting (e.g., `,(0,c.jsx)(t.code,{children:`ru-RU`}),`, `,(0,c.jsx)(t.code,{children:`en-US`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mask`}),` — custom input mask (optional)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min`}),` — minimum allowed date/time value`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max`}),` — maximum allowed date/time value`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Properties work together: `,(0,c.jsx)(t.code,{children:`type="date"`}),` automatically activates date input mode with localized formatting. `,(0,c.jsx)(t.code,{children:`language`}),` determines the order of date components (day/month/year or month/day/year) and separators. `,(0,c.jsx)(t.code,{children:`type="datetime"`}),` adds time input to the date. Types `,(0,c.jsx)(t.code,{children:`year-month`}),`, `,(0,c.jsx)(t.code,{children:`time`}),`, and `,(0,c.jsx)(t.code,{children:`hour-minute`}),` allow input of specific components only. Properties `,(0,c.jsx)(t.code,{children:`min`}),` and `,(0,c.jsx)(t.code,{children:`max`}),` restrict the range of allowed values. You can override the automatic mask via the `,(0,c.jsx)(t.code,{children:`mask`}),` property for custom formatting.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
const dateValue = ref('2024-03-15')
const datetimeValue = ref('2024-03-15T14:30:00')
const timeValue = ref('14:30')
const yearMonthValue = ref('2024-03')
<\/script>

<template>
<!-- Standard date input -->
<Input v-model="dateValue" type="date" language="en-US" label="Date" />

<!-- Date with Russian locale -->
<Input v-model="dateValue" type="date" language="ru-RU" label="Дата" />

<!-- Date and time -->
<Input v-model="datetimeValue" type="datetime" language="en-US" label="Date and Time" />

<!-- Time only -->
<Input v-model="timeValue" type="time" language="en-US" label="Time" />

<!-- Hours and minutes -->
<Input v-model="timeValue" type="hour-minute" language="en-US" label="Hours:Minutes" />

<!-- Year and month -->
<Input v-model="yearMonthValue" type="year-month" language="en-US" label="Period" />

<!-- Date with constraints -->
<Input
  v-model="dateValue"
  type="date"
  language="en-US"
  min="2024-01-01"
  max="2024-12-31"
  label="Date in 2024"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};