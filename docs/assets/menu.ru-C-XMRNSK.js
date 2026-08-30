import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания всплывающих меню, выпадающих списков и контекстных меню с поддержкой навигации и действий.`}),`
`,(0,c.jsx)(t.p,{children:`Menu объединяет функциональность Window (позиционирование и управление видимостью), Bars (панель действий и инструментов) и List (отображение пунктов, групп и вложенных подменю). Компонент обеспечивает клавиатурную навигацию, поддержку вложенной структуры, асинхронную загрузку данных, режим оптимизированного рендеринга для больших списков и полный контроль над состоянием открытия/закрытия.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Интеграция Window, Bars и List компонентов`}),`
`,(0,c.jsx)(t.li,{children:`Клавиатурная навигация по пунктам меню`}),`
`,(0,c.jsx)(t.li,{children:`Вложенные подменю с неограниченной глубиной`}),`
`,(0,c.jsx)(t.li,{children:`Асинхронная загрузка данных через AJAX`}),`
`,(0,c.jsx)(t.li,{children:`Режим lite для оптимизации больших списков (liteThreshold)`}),`
`,(0,c.jsx)(t.li,{children:`Поиск и фильтрация пунктов меню`}),`
`,(0,c.jsx)(t.li,{children:`Управление выбранными элементами (selected)`}),`
`,(0,c.jsx)(t.li,{children:`Гибкое позиционирование относительно якоря`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Выпадающие меню навигации`}),`
`,(0,c.jsx)(t.li,{children:`Контекстные меню по правому клику`}),`
`,(0,c.jsx)(t.li,{children:`Меню действий и операций`}),`
`,(0,c.jsx)(t.li,{children:`Селекторы с поиском и фильтрацией`}),`
`,(0,c.jsx)(t.li,{children:`Многоуровневые навигационные меню`}),`
`,(0,c.jsx)(t.li,{children:`Меню с динамической загрузкой данных`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const menuItems = ref([
{ label: 'Создать', value: 'create', icon: 'add' },
{ label: 'Редактировать', value: 'edit', icon: 'edit' },
{ label: 'Удалить', value: 'delete', icon: 'delete' },
{
  label: 'Экспорт',
  value: 'export',
  children: [
    { label: 'PDF', value: 'pdf' },
    { label: 'Excel', value: 'excel' },
    { label: 'CSV', value: 'csv' }
  ]
}
])

const handleClick = (value) => {
console.log('Выбран пункт:', value)
isOpen.value = false
}
<\/script>

<template>
<button @click="isOpen = true">Открыть меню</button>

<Menu
  v-model:open="isOpen"
  :list="menuItems"
  @click="handleClick"
>
  <template #control="{ onclick }">
    <button @click="onclick">Действия</button>
  </template>
</Menu>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};