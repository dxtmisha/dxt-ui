import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.h2,{id:`analog-clock-hands-mode-clock`,children:[`Analog clock hands mode (`,(0,c.jsx)(t.code,{children:`clock`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`When the `,(0,c.jsx)(t.code,{children:`clock`}),` boolean property is enabled, the component switches to clock display mode without interactive selection. In this mode, individual time hands are rendered:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`clock: boolean`}),` — activates analog clock display mode with hands.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hour: number`}),` — hour hand position (`,(0,c.jsx)(t.code,{children:`arrowHour`}),`) with continuous advancement based on minutes and seconds.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`minute: number`}),` — minute hand position (`,(0,c.jsx)(t.code,{children:`arrowMinute`}),`) with advancement based on seconds.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`second: number`}),` — second hand position (`,(0,c.jsx)(t.code,{children:`arrowSecond`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`A center axis pin point (`,(0,c.jsx)(t.code,{children:`point`}),`) connects the hands at the center of the dial face.`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Display analog time 10:15:30 -->
<ClockDial
  clock
  type="12"
  :hour="10"
  :minute="15"
  :second="30"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};