import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Специализированное меню для выбора стран с автоматической загрузкой флагов и названий.`}),`
`,(0,c.jsx)(t.p,{children:`MenuCountry является расширением компонента Menu, разработанным специально для выбора стран. Он использует утилиту GeoFlagRef для автоматического заполнения меню списком стран, включая их флаги и локализованные названия. Компонент поддерживает все стандартные функции Menu, такие как всплывающие окна на основе Window, кастомные элементы управления и развитое управление фокусом.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическая генерация списка стран с помощью утилиты GeoFlagRef`}),`
`,(0,c.jsx)(t.li,{children:`Фильтрация доступных для выбора стран через свойство countryList`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка интернационализированных названий стран`}),`
`,(0,c.jsx)(t.li,{children:`Все стандартные возможности базового компонента Menu (позиционирование, клавиатурная навигация, подменю и т.д.)`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Выпадающие списки выбора страны`}),`
`,(0,c.jsx)(t.li,{children:`Выбор языка/региона в профиле пользователя`}),`
`,(0,c.jsx)(t.li,{children:`Формы указания страны доставки или регистрации`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedValue = ref('RU')
<\/script>

<template>
<MenuCountry
  v-model:selected="selectedValue"
  is-selected-by-value
>
  <template #control="{ binds }">
    <button v-bind="binds">
      Выбрать страну
    </button>
  </template>
</MenuCountry>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};