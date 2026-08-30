import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для отображения выбранных значений в элементах управления выбором с поддержкой одиночного и множественного режимов.`}),`
`,(0,c.jsx)(t.p,{children:`SelectValue управляет визуализацией выбранных элементов, автоматически переключаясь между текстовым отображением для одиночного выбора и чипами для множественного. Компонент интегрируется с системой событий для обработки действий пользователя, поддерживает отображение иконок, плейсхолдеров и кнопок отмены выбора.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическое переключение между режимами одиночного и множественного выбора`}),`
`,(0,c.jsx)(t.li,{children:`Рендеринг чипов с настраиваемым внешним видом для множественного выбора`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка плейсхолдера для пустого состояния`}),`
`,(0,c.jsx)(t.li,{children:`Отображение иконок в выбранных элементах`}),`
`,(0,c.jsx)(t.li,{children:`Кнопки отмены для удаления отдельных выборов`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция с Chip компонентом для стилизации элементов`}),`
`,(0,c.jsx)(t.li,{children:`Обработка состояний disabled и readonly`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Отображение выбранных опций в селектах и комбобоксах`}),`
`,(0,c.jsx)(t.li,{children:`Визуализация множественного выбора в списках`}),`
`,(0,c.jsx)(t.li,{children:`Показ активных фильтров с возможностью удаления`}),`
`,(0,c.jsx)(t.li,{children:`Отображение тегов и категорий`}),`
`,(0,c.jsx)(t.li,{children:`Представление выбранных элементов в формах`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const selectedSingle = ref([
{ label: 'JavaScript', value: 'js', icon: 'code', index: '1' }
])

const selectedMultiple = ref([
{ label: 'React', value: 'react', icon: 'favorite', index: '1' },
{ label: 'Vue.js', value: 'vue', icon: 'star', index: '2' }
])

const handleClick = (event) => {
console.log('Клик по элементу:', event)
}
<\/script>

<template>
<!-- Одиночный выбор -->
<SelectValue
  :value="selectedSingle"
  :icon-show="true"
  @click="handleClick"
/>

<!-- Множественный выбор с чипами -->
<SelectValue
  :value="selectedMultiple"
  :multiple="true"
  :icon-show="true"
  icon-cancel="close"
  @click="handleClick"
/>

<!-- С плейсхолдером -->
<SelectValue
  placeholder="Выберите значение"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};