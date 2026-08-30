import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для создания выпадающих списков выбора на основе чипов с дополнительным поиском в заголовке и кастомными стилями триггера.`}),`
`,(0,c.jsx)(t.p,{children:`MenuChip — это компактный выпадающий селектор, который заменяет стандартную рамку текстового поля элемента select на лаконичный чип-триггер. Он сочетает архитектуры Chip и выпадающего Menu/List для отображения выбранных значений с гибко настраиваемыми разделителями и правилами скрытия текста, а также содержит встроенные скрытые поля ввода input для нативной интеграции с формами.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Чип-триггер вместо стандартной рамки текстового поля ввода`}),`
`,(0,c.jsx)(t.li,{children:`Отображение выбранных значений с настраиваемыми разделителями`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка скрытия значения при наличии иконки (hideValueIcon)`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка скрытия метки при выборе значения (hideLabelValue)`}),`
`,(0,c.jsx)(t.li,{children:`Выпадающее меню опций с поиском и фильтрацией в заголовке (showSearch)`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка одиночного или множественного выбора значений`}),`
`,(0,c.jsx)(t.li,{children:`Скрытое поле ввода input для стандартной передачи данных формы`}),`
`,(0,c.jsx)(t.li,{children:`Адаптивный дизайн для мобильных устройств`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Удобные компактные фильтры категорий в горизонтально скроллируемых списках`}),`
`,(0,c.jsx)(t.li,{children:`Селекторы в тулбарах (например, селекторы статусов, фильтры тегов, размер шрифта, выбор языка)`}),`
`,(0,c.jsx)(t.li,{children:`Компактные выпадающие списки, где стандартная граница поля или кнопки нежелательна`}),`
`,(0,c.jsx)(t.li,{children:`Мобильные селекторы с запуском действий`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedLanguage = ref('en')
const languages = [
{ label: 'English', value: 'en' },
{ label: 'Russian', value: 'ru' },
{ label: 'Vietnamese', value: 'vi' }
]
<\/script>

<template>
<!-- Простой чип меню -->
<MenuChip
  v-model="selectedLanguage"
  label="Language"
  :option="languages"
/>

<!-- Компактный макет с иконкой настроек (скрывает отображение значения) -->
<MenuChip
  v-model="selectedLanguage"
  label="Settings"
  icon="settings"
  hideValueIcon
  :option="languages"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};