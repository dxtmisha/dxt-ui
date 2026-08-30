import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Компонент управления навигацией, предназначенный для разделения больших наборов данных на страницы, управления лимитом строк на странице и инкрементальной загрузки контента.`}),`
`,(0,c.jsx)(t.p,{children:`Pagination предоставляет расчет количества страниц, быстрый переход к крайним страницам (первая/последняя), настраиваемый выбор лимита строк и загрузчики данных («Показать еще»).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматический расчет количества страниц на основе общего числа элементов (count) и строк на странице (rows)`}),`
`,(0,c.jsx)(t.li,{children:`Кнопки навигации «Вперед», «Назад», «Первая» и «Последняя»`}),`
`,(0,c.jsx)(t.li,{children:`Разделители в виде многоточия между средним диапазоном и крайними страницами`}),`
`,(0,c.jsx)(t.li,{children:`Выпадающий список для настройки количества строк на странице (v-model:rows)`}),`
`,(0,c.jsx)(t.li,{children:`Синхронизация состояния выбора страницы (v-model:value)`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка кнопки подгрузки дополнительных элементов («Показать еще»)`}),`
`,(0,c.jsx)(t.li,{children:`Локализованная строка информации о диапазоне (например, «1-10 из 100»)`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Разделение списков элементов на страницы`}),`
`,(0,c.jsx)(t.li,{children:`Таблицы и гриды данных, требующие серверного или клиентского контроля лимитов строк`}),`
`,(0,c.jsx)(t.li,{children:`Динамические каталоги с возможностью подгрузки данных`}),`
`,(0,c.jsx)(t.li,{children:`Кастомная навигация по каталогам товаров`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const page = ref(1)
const rows = ref(10)
<\/script>

<template>
<!-- Базовая пагинация -->
<Pagination :count="100" :rows="10" />

<!-- Двусторонняя привязка данных -->
<Pagination
  v-model:value="page"
  v-model:rows="rows"
  :count="100"
  :menu-rows="[5, 10, 20, 50]"
  show-info
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Pagination координирует реактивные диапазоны страниц, выпадающие списки количества строк и макеты кнопок для структурированного представления данных.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};