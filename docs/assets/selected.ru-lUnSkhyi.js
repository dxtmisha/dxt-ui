import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`управление-выбором`,children:`Управление выбором`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`selected`}),` и `,(0,c.jsx)(t.code,{children:`iconWhenSelected`}),` предназначены для управления состоянием выбора чипов.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected`}),` — идентификатор(ы) выбранного элемента (строка, число, массив строк/чисел или `,(0,c.jsx)(t.code,{children:`undefined`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`iconWhenSelected`}),` — показывает иконки чипов только при выборе элемента (по умолчанию: иконки всегда видимы)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`selected`}),` определяет, какие чипы будут выделены. Принимает одно значение для единичного выбора или массив значений для множественного выбора. Значения сопоставляются с элементами списка по их индексу или значению, если список содержит простые типы данных.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(['option1'])
<\/script>

<template>
<!-- Выбор из простого массива -->
<ChipGroup
  v-model:selected="selected"
  :list="['Опция 1', 'Опция 2']"
/>

<!-- Массив объектов с ключами -->
<ChipGroup
  v-model:selected="selected"
  :list="[
    { id: 'option1', name: 'Первая опция' },
    { id: 'option2', name: 'Вторая опция' }
  ]"
  key-value="id"
  key-label="name"
/>

<!-- Иконки только при выборе -->
<ChipGroup
  v-model:selected="selected"
  :list="[
    { id: 'option1', name: 'Опция 1', icon: 'check' },
    { id: 'option2', name: 'Опция 2', icon: 'check' }
  ]"
  key-value="id"
  key-label="name"
  :icon-when-selected="true"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};