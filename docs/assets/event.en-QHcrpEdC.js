import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`start`,children:(0,c.jsx)(t.code,{children:`start`})}),`
`,(0,c.jsx)(t.p,{children:`Event triggered at the beginning of the transition animation.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: string | number`}),` — identifier of the slide to which the transition starts`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`end`,children:(0,c.jsx)(t.code,{children:`end`})}),`
`,(0,c.jsx)(t.p,{children:`Event triggered after the transition animation completes.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: string | number`}),` — identifier of the slide on which the transition ended`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`motionaxis`,children:(0,c.jsx)(t.code,{children:`motionAxis`})}),`
`,(0,c.jsx)(t.p,{children:`Event triggered at the beginning and end of the transition animation.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: MotionAxisEmitOptions`}),` — object with event parameters`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Structure MotionAxisEmitOptions:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: 'start' | 'end'`}),` — event type`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: string | number`}),` — identifier of the selected slide`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`previous: string | number`}),` — identifier of the previous slide`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`preparation: string | number`}),` — identifier of the slide being prepared`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`active: string | number`}),` — identifier of the active slide`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleStart = (selected) => {
console.log('Animation started to slide:', selected)
}

const handleEnd = (selected) => {
console.log('Animation ended on slide:', selected)
}

const handleMotionAxis = (options) => {
console.log('MotionAxis event:', options)
}
<\/script>

<template>
<MotionAxis
  @start="handleStart"
  @end="handleEnd"
  @motionAxis="handleMotionAxis"
>
  <!-- Slides -->
</MotionAxis>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};