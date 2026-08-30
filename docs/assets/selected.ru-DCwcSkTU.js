import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`групповой-выбор-selected`,children:`Групповой выбор (selected)`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`selected`}),` позволяет связать группу компонентов (например, чекбоксов или радиокнопок) с одной переменной. Это полезно, когда нужно выбрать одно значение из нескольких доступных.`]}),`
`,(0,c.jsx)(t.p,{children:`Для работы этой функции необходимо:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Использовать `,(0,c.jsx)(t.code,{children:`v-model:selected`}),` для всех элементов группы.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Указать уникальное значение в `,(0,c.jsx)(t.code,{children:`valueVariant`}),` для каждого элемента.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Когда элемент отмечается, значение его `,(0,c.jsx)(t.code,{children:`valueVariant`}),` записывается в переменную `,(0,c.jsx)(t.code,{children:`selected`}),`. Если элемент снимается, значение `,(0,c.jsx)(t.code,{children:`selected`}),` становится `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const activeOption = ref('opt2')
<\/script>

<template>
<div class="group">
  <Checkbox
    v-model:selected="activeOption"
    valueVariant="opt1"
    label="Вариант 1"
  />
  <Checkbox
    v-model:selected="activeOption"
    valueVariant="opt2"
    label="Вариант 2"
  />
  <Checkbox
    v-model:selected="activeOption"
    valueVariant="opt3"
    label="Вариант 3"
  />
</div>

<p>Выбрано: {{ activeOption }}</p>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};