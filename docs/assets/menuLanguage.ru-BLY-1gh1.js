import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Специализированное меню для выбора языков с автоматической загрузкой флагов и названий.`}),`
`,(0,c.jsx)(t.p,{children:`MenuLanguage является расширением компонента Menu, разработанным специально для выбора языков. Он использует утилиту GeoFlagRef для автоматического заполнения меню списком языков, включая их флаги и названия на родном (родственном) языке. Компонент поддерживает все стандартные функции Menu, такие как всплывающие окна на основе Window, кастомные элементы управления и развитое управление фокусом.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическая генерация списка языков с помощью утилиты GeoFlagRef`}),`
`,(0,c.jsx)(t.li,{children:`Фильтрация доступных для выбора языков через свойство countryList`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка отображения названий на родном языке`}),`
`,(0,c.jsx)(t.li,{children:`Все стандартные возможности базового компонента Menu (позиционирование, клавиатурная навигация, подменю и т.д.)`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Выпадающие списки выбора языка интерфейса`}),`
`,(0,c.jsx)(t.li,{children:`Языковые настройки в профиле пользователя или настройках приложения`}),`
`,(0,c.jsx)(t.li,{children:`Переключатели локалей`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedValue = ref('ru')
<\/script>

<template>
<MenuLanguage
  v-model:selected="selectedValue"
  is-selected-by-value
>
  <template #control="{ binds }">
    <button v-bind="binds">
      Выбрать язык
    </button>
  </template>
</MenuLanguage>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};