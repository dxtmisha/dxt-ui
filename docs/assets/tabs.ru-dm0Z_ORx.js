import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания вкладок с навигацией и анимированным переключением контента.`}),`
`,(0,c.jsx)(t.p,{children:`Tabs объединяет навигационную панель (TabsNavigation) и область контента (MotionAxis), обеспечивая синхронизированное переключение между вкладками. Компонент поддерживает горизонтальную прокрутку заголовков, различные стили отображения и анимацию смены содержимого.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическая синхронизация выбранной вкладки и контента`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка горизонтальной прокрутки для большого количества вкладок`}),`
`,(0,c.jsx)(t.li,{children:`Анимированные переходы между панелями контента`}),`
`,(0,c.jsx)(t.li,{children:`Гибкая настройка внешнего вида вкладок (иконки, метки)`}),`
`,(0,c.jsx)(t.li,{children:`Управление состоянием через v-model:selected`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Организация контента на странице по категориям`}),`
`,(0,c.jsx)(t.li,{children:`Переключение между различными видами данных`}),`
`,(0,c.jsx)(t.li,{children:`Навигация внутри модальных окон или карточек`}),`
`,(0,c.jsx)(t.li,{children:`Создание пошаговых мастеров (wizards)`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref('tab1')
const tabs = [
{ text: 'Вкладка 1', value: 'tab1' },
{ text: 'Вкладка 2', value: 'tab2' },
{ text: 'Вкладка 3', value: 'tab3' }
]
<\/script>

<template>
<Tabs
  v-model:selected="selected"
  :list="tabs"
>
  <template #default="{ item }">
    <div class="p-4">
      Контент для {{ item.text }}
    </div>
  </template>
</Tabs>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};