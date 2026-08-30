import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`работа-с-текстовыми-метками-и-числами`,children:`Работа с текстовыми метками и числами`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`label`}),`, `,(0,c.jsx)(t.code,{children:`labelMax`}),` и `,(0,c.jsx)(t.code,{children:`formatting`}),` предназначены для управления отображением текстового и числового контента в компонентах интерфейса.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`label`}),` — текстовая метка или числовое значение для отображения`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`labelMax`}),` — максимальное значение для числовых меток (при превышении добавляется индикатор "+")`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`formatting`}),` — включает форматирование числовых значений согласно локали пользователя`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно для гибкого управления контентом: `,(0,c.jsx)(t.code,{children:`label`}),` принимает как текстовые, так и числовые значения. При передаче числа применяется автоматическая обработка с учётом локализации. Свойство `,(0,c.jsx)(t.code,{children:`labelMax`}),` ограничивает отображение больших чисел — при превышении значения добавляется символ "+" (например, "99+"). Свойство `,(0,c.jsx)(t.code,{children:`formatting`}),` контролирует форматирование чисел согласно региональным настройкам пользователя, обеспечивая корректное отображение разделителей и числовых форматов.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const count = ref(5)
const largeNumber = ref(1234)
<\/script>

<template>
<!-- Базовое использование с текстом -->
<Component label="Текст" />

<!-- Числовое значение -->
<Component :label="count" />

<!-- Ограничение максимального значения -->
<Component :label="150" :label-max="99" />
<!-- Отобразит: 99+ -->

<!-- С форматированием чисел -->
<Component
  :label="largeNumber"
  :formatting="true"
/>
<!-- Отобразит: 1 234 (в зависимости от локали) -->

<!-- Комбинированное использование -->
<Component
  :label="999"
  :label-max="99"
  :formatting="true"
/>
<!-- Отобразит: 99+ -->
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};