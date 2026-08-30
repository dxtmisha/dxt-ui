import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`зоны-игнорирования`,children:`Зоны игнорирования`}),`
`,(0,c.jsx)(t.p,{children:`Свойства для исключения элементов из проверок клика снаружи и логики автозакрытия.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ignore`}),` — ссылка на DOM-элемент или CSS-селектор для исключения из обнаружения внешних кликов`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ignoreSelector`}),` — CSS-селектор для исключения нескольких элементов одновременно`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Оба свойства работают вместе при оценке внешних кликов. `,(0,c.jsx)(t.code,{children:`ignore`}),` более точный и быстрее для одиночных элементов, может ссылаться на конкретный DOM-элемент напрямую. `,(0,c.jsx)(t.code,{children:`ignoreSelector`}),` более гибкий, может соответствовать нескольким элементам одним селектором, лучше подходит для динамического контента. Используйте для кнопок-триггеров, вспомогательных элементов и вложенных интерактивных областей.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const triggerButton = ref()
<\/script>

<template>
<!-- Игнорирование конкретного элемента -->
<MotionTransform :ignore="triggerButton" />

<!-- Игнорирование по селектору -->
<MotionTransform ignoreSelector=".trigger-button" />

<!-- Комбинация обоих свойств -->
<MotionTransform
  :ignore="triggerButton"
  ignoreSelector=".helper-controls"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};