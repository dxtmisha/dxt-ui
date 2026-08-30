import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`updatevalue`,children:(0,c.jsx)(t.code,{children:`updateValue`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при изменении выбранного значения в меню.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: NumberOrStringOrBoolean`}),` — новое выбранное значение`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleUpdateValue = (value) => {
console.log('Новое значение:', value)
console.log('Тип значения:', typeof value)
}
<\/script>

<template>
<Menu
  :isSelectedByValue="true"
  @updateValue="handleUpdateValue"
>
  <template #default>
    <MenuItem value="item1">Пункт меню 1</MenuItem>
    <MenuItem value="item2">Пункт меню 2</MenuItem>
    <MenuItem value="item3">Пункт меню 3</MenuItem>
  </template>
</Menu>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};