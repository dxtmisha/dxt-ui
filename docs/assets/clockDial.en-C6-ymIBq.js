import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Component for selecting and displaying time values on an interactive circular clock dial.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ClockDial`}),` provides a circular interface for choosing hours, minutes, and seconds. It supports standard 12-hour and 24-hour dual-ring hour selection, 60-division minute and second dials, continuous pointer tracking, an analog clock display mode (`,(0,c.jsx)(t.code,{children:`clock`}),`), hand rotation calculations, coordinate-based touch/click selection, stepping constraints (`,(0,c.jsx)(t.code,{children:`step`}),`), and customizable mark slots.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Multiple dial modes (`,(0,c.jsx)(t.code,{children:`type`}),`)`]}),`: `,(0,c.jsx)(t.code,{children:`12`}),` (12-hour dial), `,(0,c.jsx)(t.code,{children:`24`}),` (24-hour dual-tier dial), `,(0,c.jsx)(t.code,{children:`minute`}),` (60-minute dial), and `,(0,c.jsx)(t.code,{children:`second`}),` (60-second dial).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Analog clock mode (`,(0,c.jsx)(t.code,{children:`clock`}),`)`]}),`: Displays hour (`,(0,c.jsx)(t.code,{children:`hour`}),`), minute (`,(0,c.jsx)(t.code,{children:`minute`}),`), and second (`,(0,c.jsx)(t.code,{children:`second`}),`) hands while disabling interactive selection.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Value and step constraints`}),`: Minimum (`,(0,c.jsx)(t.code,{children:`min`}),`), maximum (`,(0,c.jsx)(t.code,{children:`max`}),`), and step (`,(0,c.jsx)(t.code,{children:`step`}),`) intervals.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Interactive selection`}),`: Real-time dragging, touch gestures, and direct coordinate resolution (`,(0,c.jsx)(t.code,{children:`selectByCoordinates`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`States`}),`: Disabled (`,(0,c.jsx)(t.code,{children:`disabled`}),`) and read-only (`,(0,c.jsx)(t.code,{children:`readonly`}),`) modes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Custom slots`}),`: Custom rendering for division tick items (`,(0,c.jsx)(t.code,{children:`item`}),`) and central dial overlay (`,(0,c.jsx)(t.code,{children:`default`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Common use cases:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Time pickers and alarm schedulers.`}),`
`,(0,c.jsx)(t.li,{children:`Analog clock visualizations.`}),`
`,(0,c.jsx)(t.li,{children:`Timer and countdown dials.`}),`
`,(0,c.jsx)(t.li,{children:`Appointment and business hour selection.`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedHour = ref(10)
const selectedMinute = ref(30)
<\/script>

<template>
<!-- 12-hour dial picker -->
<ClockDial v-model="selectedHour" type="12" />

<!-- Minute dial picker with 5-minute stepping -->
<ClockDial v-model="selectedMinute" type="minute" :step="5" />

<!-- Clock mode with hands -->
<ClockDial clock type="12" :hour="10" :minute="30" :second="45" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};