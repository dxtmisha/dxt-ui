import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания вложенных меню и организации навигационных элементов с раскрывающейся структурой.`}),`
`,(0,c.jsx)(t.p,{children:`ListMenu является вспомогательным компонентом для List, управляющим иерархической структурой меню с возможностью открытия/закрытия подменю. Компонент интегрируется с Window для позиционирования выпадающих подменю, поддерживает множественные уровни вложенности и обеспечивает плавную навигацию по древовидной структуре данных.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Иерархическая организация меню с неограниченной вложенностью`}),`
`,(0,c.jsx)(t.li,{children:`Управление состоянием открытия/закрытия подменю`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция с Window для позиционирования выпадающих меню`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка горизонтальной и вертикальной осей позиционирования`}),`
`,(0,c.jsx)(t.li,{children:`Автоматическая обработка кликов и навигации`}),`
`,(0,c.jsx)(t.li,{children:`Адаптивное поведение подменю`}),`
`,(0,c.jsx)(t.li,{children:`События открытия/закрытия элементов меню`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Навигационные меню с подразделами`}),`
`,(0,c.jsx)(t.li,{children:`Многоуровневые каталоги и категории`}),`
`,(0,c.jsx)(t.li,{children:`Древовидные структуры данных`}),`
`,(0,c.jsx)(t.li,{children:`Контекстные меню с подменю`}),`
`,(0,c.jsx)(t.li,{children:`Панели навигации с группировкой`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const menuItems = ref([
{
  text: 'Главная',
  value: 'home'
},
{
  text: 'Продукты',
  value: 'products',
  sublist: [
    { text: 'Категория 1', value: 'cat1' },
    { text: 'Категория 2', value: 'cat2' }
  ]
},
{
  text: 'О нас',
  value: 'about'
}
])
<\/script>

<template>
<List :items="menuItems">
  <template #item="{ item }">
    <ListMenu
      v-if="item.sublist"
      :items="item.sublist"
      :axis="'y'"
    >
      <template #default>
        {{ item.text }}
      </template>
    </ListMenu>
    <div v-else>{{ item.text }}</div>
  </template>
</List>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};