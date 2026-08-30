import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`управление-видимостью-маски`,children:`Управление видимостью маски`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`visible`}),` и `,(0,c.jsx)(t.code,{children:`visiblePartly`}),` предназначены для управления отображением символов-заполнителей маски и видимостью компонента в целом.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`visible`}),` — управляет полной видимостью компонента маски`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`visiblePartly`}),` — управляет частичной видимостью символов-заполнителей`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно: при `,(0,c.jsx)(t.code,{children:`visible: false`}),` компонент маски полностью скрыт, включая все символы-заполнители. При активации `,(0,c.jsx)(t.code,{children:`visiblePartly: true`}),` отображаются только заполненные позиции маски, скрывая пустые символы-заполнители. Если `,(0,c.jsx)(t.code,{children:`visible`}),` установлен в `,(0,c.jsx)(t.code,{children:`false`}),`, то свойство `,(0,c.jsx)(t.code,{children:`visiblePartly`}),` игнорируется. Изменение видимости не влияет на логику валидации и обработку данных, позволяя создавать адаптивные интерфейсы с условным или сокращённым отображением маски.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const showMask = ref(true)
const compactMode = ref(false)
<\/script>

<template>
<!-- Полное скрытие маски -->
<Mask
  mask="+7 (***) ***-**-**"
  :visible="false"
/>

<!-- Показ только заполненных позиций -->
<Mask
  mask="+7 (***) ***-**-**"
  :visiblePartly="true"
/>

<!-- Условное отображение с частичной видимостью -->
<Mask
  mask="+7 (***) ***-**-**"
  :visible="showMask"
  :visiblePartly="compactMode"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};