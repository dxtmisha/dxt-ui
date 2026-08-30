import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания горизонтальной навигации с вкладками.`}),`
`,(0,c.jsx)(t.p,{children:`TabsNavigation управляет списком вкладок, их выбором и прокруткой. Поддерживает различные стили отображения, управление с клавиатуры и адаптивность.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Горизонтальная прокрутка вкладок`}),`
`,(0,c.jsxs)(t.li,{children:[`Управление выбранной вкладкой через `,(0,c.jsx)(t.code,{children:`v-model:selected`})]}),`
`,(0,c.jsx)(t.li,{children:`Поддержка различных типов данных (массив объектов или объект)`}),`
`,(0,c.jsx)(t.li,{children:`Настройка внешнего вида (теги, атрибуты, разделители)`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка клавиатурной навигации (стрелки, Enter, Пробел)`}),`
`,(0,c.jsx)(t.li,{children:`Анимация индикатора активной вкладки`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Навигация между разделами страницы`}),`
`,(0,c.jsx)(t.li,{children:`Переключение видов отображения данных`}),`
`,(0,c.jsx)(t.li,{children:`Фильтрация контента по категориям`}),`
`,(0,c.jsx)(t.li,{children:`Главное меню приложения (в стиле вкладок)`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedTab = ref('home')
const tabs = [
{ label: 'Главная', value: 'home', icon: 'home' },
{ label: 'Профиль', value: 'profile', icon: 'person' },
{ label: 'Настройки', value: 'settings', icon: 'settings' }
]
<\/script>

<template>
<TabsNavigation
  v-model:selected="selectedTab"
  :list="tabs"
  horizontal-scroll-align="center"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};