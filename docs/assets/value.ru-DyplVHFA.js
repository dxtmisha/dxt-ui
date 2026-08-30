import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`состояние-значения`,children:`Состояние значения`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`value`}),` и `,(0,c.jsx)(t.code,{children:`isValue`}),` предназначены для управления визуальным состоянием заполненности поля независимо от фактического содержимого.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value`}),` — фактическое содержимое поля (строка/число), передаваемое во внутренний элемент через слот`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isValue`}),` — принудительно активирует визуальное состояние "заполнено" даже при пустом значении`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно: `,(0,c.jsx)(t.code,{children:`Field`}),` считывает `,(0,c.jsx)(t.code,{children:`value`}),` реактивно через `,(0,c.jsx)(t.code,{children:`focusValue`}),` для визуальных целей (отображение текста в scoreboard, работа с caption), но не управляет им напрямую и не валидирует. Если реальное значение непустое, поле автоматически получает визуальное состояние "заполнено" независимо от `,(0,c.jsx)(t.code,{children:`isValue`}),`. При пустом значении флаг `,(0,c.jsx)(t.code,{children:`isValue = true`}),` принудительно активирует визуальный режим заполненности (плавающая метка, соответствующие классы), что полезно для прелоадов, масок или отложенной подстановки данных.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const value = ref('')
const isLoading = ref(true)
<\/script>

<template>
<!-- Обычное поведение -->
<Field label="Имя">
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- Принудительное состояние "заполнено" -->
<Field
  label="Email"
  :value="value"
  :is-value="true"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>

<!-- Прелоад с визуальным состоянием -->
<Field
  label="Данные"
  :is-value="isLoading"
>
  <template #default="{ id, className }">
    <input :id="id" :class="className" v-model="value" />
  </template>
</Field>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};