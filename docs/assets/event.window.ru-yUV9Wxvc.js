import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`window`,children:(0,c.jsx)(t.code,{children:`window`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при изменении состояния окна (открытие/закрытие).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: WindowEmitOptions`}),` — объект с данными окна`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура WindowEmitOptions:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — уникальный идентификатор окна`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: HTMLDivElement`}),` — DOM элемент окна`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`control: HTMLElement`}),` — DOM элемент управления`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`open: boolean`}),` — состояние открытия окна (`,(0,c.jsx)(t.code,{children:`true`}),` - открыто, `,(0,c.jsx)(t.code,{children:`false`}),` - закрыто)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleWindow = (options) => {
console.log('ID окна:', options.id)
console.log('Окно открыто:', options.open)
console.log('Элемент окна:', options.element)
console.log('Элемент управления:', options.control)
}
<\/script>

<template>
<Component @window="handleWindow">
  <template #default>
    <p>Содержимое окна</p>
  </template>
</Component>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};