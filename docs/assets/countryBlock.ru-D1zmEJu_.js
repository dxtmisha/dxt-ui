import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,p:`p`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`блокировка-страны`,children:`Блокировка страны`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`countryBlock`}),` скрывает кнопку выбора телефонного кода страны и переключает маску ввода на локальный телефонный формат (без префикса страны).`]}),`
`,(0,c.jsxs)(t.p,{children:[`По умолчанию компонент отображает выбор страны и использует полный международный формат маски (включая префикс кода страны). Установка `,(0,c.jsx)(t.code,{children:`countryBlock`}),` в значение `,(0,c.jsx)(t.code,{children:`true`}),` скрывает флаг и селектор кода, а также форматирует ввод исключительно по национальному/локальному шаблону телефона выбранной страны.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
const phone = ref('')
<\/script>

<template>
<!-- Блокировка страны включена (зафиксировано на DE) -->
<InputPhone
  v-model:value="phone"
  country-default="DE"
  :country-block="true"
  label="Заблокированная страна (DE)"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};