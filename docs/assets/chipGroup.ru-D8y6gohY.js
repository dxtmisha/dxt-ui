import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для управления коллекцией чипов с функциональностью выбора и гибким связыванием данных.`}),`
`,(0,c.jsx)(t.p,{children:`ChipGroup отображает множество компонентов Chip из массива данных, управляет одиночным или множественным выбором и предоставляет возможности настройки каждого чипа. Компонент поддерживает динамический рендеринг списка, условное отображение иконок в зависимости от выбора и гибкое сопоставление структуры данных через ключевые свойства.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Одиночный или множественный выбор элементов`}),`
`,(0,c.jsx)(t.li,{children:`Динамический рендеринг списка из массива данных`}),`
`,(0,c.jsx)(t.li,{children:`Настраиваемый внешний вид чипов через chipAttrs`}),`
`,(0,c.jsx)(t.li,{children:`Условное отображение иконок в зависимости от состояния выбора`}),`
`,(0,c.jsx)(t.li,{children:`Гибкое связывание данных через keyLabel и keyValue`}),`
`,(0,c.jsx)(t.li,{children:`Обработка событий для взаимодействия пользователя`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка сложных структур данных`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Фильтр-чипы для поиска и фильтрации`}),`
`,(0,c.jsx)(t.li,{children:`Выбор тегов в формах`}),`
`,(0,c.jsx)(t.li,{children:`Интерфейсы выбора категорий`}),`
`,(0,c.jsx)(t.li,{children:`Варианты множественного выбора`}),`
`,(0,c.jsx)(t.li,{children:`Селекторы статусов или типов`}),`
`,(0,c.jsx)(t.li,{children:`Динамические списки с выбором`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selected = ref(['option1'])

const options = [
{ value: 'option1', label: 'Опция 1', icon: 'star' },
{ value: 'option2', label: 'Опция 2', icon: 'favorite' },
{ value: 'option3', label: 'Опция 3', icon: 'bookmark' }
]

const handleClick = (event) => {
console.log('Чип нажат:', event)
}
<\/script>

<template>
<ChipGroup
  v-model:selected="selected"
  :list="options"
  key-value="value"
  key-label="label"
  :icon-when-selected="true"
  @click="handleClick"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};