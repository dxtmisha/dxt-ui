import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания интерактивных списков с поддержкой иерархических данных, клавиатурной навигации и функциональности поиска.`}),`
`,(0,c.jsx)(t.p,{children:`List управляет отображением структурированных данных с возможностью навигации, выбора элементов и взаимодействия через клавиатуру и мышь. Компонент поддерживает различные типы элементов (обычные элементы, группы, меню, разделители, подзаголовки, HTML-контент), автоматически обрабатывает сложные иерархические структуры и предоставляет интуитивную навигацию. Встроенная система поиска работает в реальном времени с выделением совпадений по всей иерархии данных.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Различные типы элементов (item, group, menu, line, subtitle, html)`}),`
`,(0,c.jsx)(t.li,{children:`Иерархическая структура с вложенными группами и меню`}),`
`,(0,c.jsx)(t.li,{children:`Полная клавиатурная навигация (↑/↓, Enter, →, ←)`}),`
`,(0,c.jsx)(t.li,{children:`Встроенный поиск в реальном времени с подсветкой совпадений`}),`
`,(0,c.jsx)(t.li,{children:`Управление выбором элементов через v-model:selected`}),`
`,(0,c.jsx)(t.li,{children:`Управление фокусом через v-model:focus`}),`
`,(0,c.jsx)(t.li,{children:`Облегченный режим для больших списков (lite)`}),`
`,(0,c.jsx)(t.li,{children:`Настройка осей отображения (x/y) и разделителей`}),`
`,(0,c.jsx)(t.li,{children:`События клика и закрытия меню`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Навигационные меню и списки опций`}),`
`,(0,c.jsx)(t.li,{children:`Выпадающие списки с иерархической структурой`}),`
`,(0,c.jsx)(t.li,{children:`Каталоги товаров и категорий`}),`
`,(0,c.jsx)(t.li,{children:`Списки настроек с группировкой`}),`
`,(0,c.jsx)(t.li,{children:`Контекстные меню с подменю`}),`
`,(0,c.jsx)(t.li,{children:`Списки файлов и папок`}),`
`,(0,c.jsx)(t.li,{children:`Фильтры с множественным выбором`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(['item2'])
const focus = ref(null)

const listData = ref([
{ label: 'Первый элемент', value: 'item1' },
{ label: 'Второй элемент', value: 'item2' },
{ type: 'line' },
{ type: 'subtitle', label: 'Группа элементов' },
{
  label: 'Группа с подменю',
  value: 'group1',
  type: 'group',
  list: [
    { label: 'Вложенный элемент 1', value: 'nested1' },
    { label: 'Вложенный элемент 2', value: 'nested2' }
  ]
}
])

const handleClick = (event) => {
console.log('Клик по элементу:', event.detail.value)
}
<\/script>

<template>
<List
  v-model:selected="selected"
  v-model:focus="focus"
  :list="listData"
  highlight="text"
  @click="handleClick"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};