import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`transform`,children:(0,c.jsx)(t.code,{children:`transform`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при изменении состояния MotionTransform с полным контекстом события.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: Event | undefined`}),` — DOM-событие, которое вызвало изменение (если есть)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: MotionTransformEmitOptions`}),` — объект с данными трансформации`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура MotionTransformEmitOptions:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: 'head' | 'body' | 'top' | 'script'`}),` — тип области, которая инициировала событие`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`open: boolean`}),` — текущее состояние открытия (`,(0,c.jsx)(t.code,{children:`true`}),` - открыто, `,(0,c.jsx)(t.code,{children:`false`}),` - закрыто)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleTransform = (event, options) => {
console.log('Событие:', event)
console.log('Тип:', options.type)
console.log('Состояние открытия:', options.open)
}
<\/script>

<template>
<Component @transform="handleTransform">
  <template #head>
    <div>Заголовок</div>
  </template>
  <template #body>
    <p>Содержимое</p>
  </template>
</Component>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`transformlite`,children:(0,c.jsx)(t.code,{children:`transformLite`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при изменении состояния MotionTransform без контекста DOM-события (облегчённая версия).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: MotionTransformEmitOptions`}),` — объект с данными трансформации`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};