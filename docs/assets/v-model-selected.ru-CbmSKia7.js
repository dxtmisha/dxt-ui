import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`управление-выбором-через-v-modelselected`,children:`Управление выбором через v-model:selected`}),`
`,(0,c.jsxs)(t.p,{children:[`Двусторонняя привязка выбранного значения через `,(0,c.jsx)(t.code,{children:`v-model:selected`}),` (компонент использует `,(0,c.jsx)(t.code,{children:`modelSelected`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`modelSelected: string | number | string[] | number[] | undefined`}),` — текущее выбранное значение`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref('')
<\/script>

<template>
<div>
  <button @click="selected = 'option1'">Выбрать Option 1</button>
  <button @click="selected = 'option2'">Выбрать Option 2</button>
  <button @click="selected = undefined">Очистить</button>
</div>

<Component v-model:selected="selected" :list="['Option 1', 'Option 2', 'Option 3']" />

<div>Текущее выбранное значение: {{ selected }}</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};