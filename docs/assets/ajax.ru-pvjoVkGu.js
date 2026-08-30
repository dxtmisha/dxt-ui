import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`ajax-загрузка-меню`,children:`AJAX загрузка меню`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`ajax`}),`, `,(0,c.jsx)(t.code,{children:`request`}),` и `,(0,c.jsx)(t.code,{children:`cache`}),` предназначены для управления асинхронной загрузкой и кэшированием данных меню.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ajax`}),` — включает режим удалённой загрузки данных (строка URL или функция)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request`}),` — объект типа `,(0,c.jsx)(t.code,{children:`ApiFetch`}),` с настройками HTTP-запроса`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cache`}),` — включает кэширование загруженных элементов меню`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства работают совместно: если `,(0,c.jsx)(t.code,{children:`ajax`}),` не задан или равен `,(0,c.jsx)(t.code,{children:`false`}),`, меню использует локальные данные. При активации `,(0,c.jsx)(t.code,{children:`ajax`}),` (строка URL или `,(0,c.jsx)(t.code,{children:`true`}),`), `,(0,c.jsx)(t.code,{children:`request`}),` определяет параметры HTTP-запроса (метод, заголовки, тело), а `,(0,c.jsx)(t.code,{children:`cache`}),` управляет сохранением данных. При включённом `,(0,c.jsx)(t.code,{children:`cache`}),` повторные открытия меню используют сохранённые данные вместо новых запросов, снижая нагрузку на сервер.`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
<\/script>

<template>
<!-- Загрузка с URL -->
<Menu
  v-model:open="isOpen"
  ajax="/api/menu-items"
  :cache="true"
/>

<!-- С настройками запроса -->
<Menu
  v-model:open="isOpen"
  ajax="/api/menu"
  :request="{
    method: 'POST',
    headers: { 'X-Custom': 'value' },
    auth: true
  }"
  :cache="true"
/>

<!-- Функция загрузки -->
<Menu
  v-model:open="isOpen"
  :ajax="async () => {
    const response = await fetch('/api/menu')
    return response.json()
  }"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};