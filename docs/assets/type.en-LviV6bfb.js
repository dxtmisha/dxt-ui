import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.h2,{id:`dial-types-type`,children:[`Dial types (`,(0,c.jsx)(t.code,{children:`type`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`type`}),` property defines the scale format, number of divisions, and rotation step of the clock dial:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`12`}),` `,(0,c.jsx)(t.em,{children:`(default)`}),` — classic 12-hour dial with divisions from 1 to 12 and a 30° rotation step. When value is zero, the selection arrow is hidden.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`24`}),` — dual-tier 24-hour dial. The outer ring contains daytime hours (1–12), while the inner ring contains night hours (13–24 and 0) with reduced contrast. Selecting an inner mark activates the `,(0,c.jsx)(t.code,{children:`--section`}),` modifier on the root element.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`minute`}),` — 60-minute dial with a 6° rotation step. Number labels are rendered every 5 minutes (00, 05, 10...), while intermediate ticks display a dot indicator when selected.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`second`}),` — 60-second dial with a 6° rotation step. Number labels are rendered every 5 seconds, with intermediate marks rendered as dot indicators.`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`range-limits-and-step-constraints-min-max-step`,children:[`Range limits and step constraints (`,(0,c.jsx)(t.code,{children:`min`}),`, `,(0,c.jsx)(t.code,{children:`max`}),`, `,(0,c.jsx)(t.code,{children:`step`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`You can configure boundaries and discrete increments for valid values:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min`}),` — minimum allowed value. Divisions below `,(0,c.jsx)(t.code,{children:`min`}),` are disabled.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max`}),` — maximum allowed value. Divisions above `,(0,c.jsx)(t.code,{children:`max`}),` are disabled.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step`}),` — discrete interval increment. Values not aligned with `,(0,c.jsx)(t.code,{children:`step`}),` relative to `,(0,c.jsx)(t.code,{children:`min`}),` are disabled. Hand movement snaps directly to the nearest active division.`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const hour = ref(10)
const hour24 = ref(16)
const minute = ref(30)
<\/script>

<template>
<!-- 12-hour format -->
<ClockDial v-model="hour" type="12" />

<!-- 24-hour format with working hour constraints -->
<ClockDial v-model="hour24" type="24" :min="9" :max="18" />

<!-- Minute format with 5-minute intervals -->
<ClockDial v-model="minute" type="minute" :step="5" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};