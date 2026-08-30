import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`start`,children:(0,c.jsx)(t.code,{children:`start`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает в начале анимации перехода.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: string | number`}),` — идентификатор слайда, к которому начинается переход`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`end`,children:(0,c.jsx)(t.code,{children:`end`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает после завершения анимации перехода.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: string | number`}),` — идентификатор слайда, на котором завершился переход`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`motionaxis`,children:(0,c.jsx)(t.code,{children:`motionAxis`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает в начале и в конце анимации перехода.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: MotionAxisEmitOptions`}),` — объект с параметрами события`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура MotionAxisEmitOptions:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: 'start' | 'end'`}),` — тип события`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: string | number`}),` — идентификатор выбранного слайда`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`previous: string | number`}),` — идентификатор предыдущего слайда`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`preparation: string | number`}),` — идентификатор подготавливаемого слайда`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`active: string | number`}),` — идентификатор активного слайда`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleStart = (selected) => {
console.log('Начало анимации к слайду:', selected)
}

const handleEnd = (selected) => {
console.log('Завершение анимации на слайде:', selected)
}

const handleMotionAxis = (options) => {
console.log('Событие MotionAxis:', options)
}
<\/script>

<template>
<MotionAxis
  @start="handleStart"
  @end="handleEnd"
  @motionAxis="handleMotionAxis"
>
  <!-- Слайды -->
</MotionAxis>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};