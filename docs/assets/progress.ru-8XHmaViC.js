import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для визуального отображения прогресса выполнения операций, загрузки данных и длительных процессов.`}),`
`,(0,c.jsx)(t.p,{children:`Progress предоставляет гибкие варианты индикации состояния выполнения: линейные и круговые прогресс-бары, минималистичные точечные индикаторы. Компонент автоматически управляет видимостью с настраиваемыми задержками появления и скрытия, поддерживает как определенные значения прогресса, так и неопределенные состояния для операций с неизвестным временем завершения.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Линейные и круговые индикаторы прогресса`}),`
`,(0,c.jsx)(t.li,{children:`Точечные варианты для минимального отображения`}),`
`,(0,c.jsx)(t.li,{children:`Детерминированный режим с конкретными значениями (0-100%)`}),`
`,(0,c.jsx)(t.li,{children:`Индетерминированный режим для неизвестного времени выполнения`}),`
`,(0,c.jsx)(t.li,{children:`Гибкое позиционирование (top, bottom, static)`}),`
`,(0,c.jsx)(t.li,{children:`Настройка задержек появления и скрытия`}),`
`,(0,c.jsx)(t.li,{children:`Компактный и инвертированный режимы отображения`}),`
`,(0,c.jsx)(t.li,{children:`Автоматическое управление видимостью`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Индикация загрузки данных с сервера`}),`
`,(0,c.jsx)(t.li,{children:`Отображение прогресса загрузки файлов`}),`
`,(0,c.jsx)(t.li,{children:`Визуализация выполнения многоэтапных операций`}),`
`,(0,c.jsx)(t.li,{children:`Глобальные индикаторы загрузки страницы`}),`
`,(0,c.jsx)(t.li,{children:`Прогресс-бары в формах и мастерах`}),`
`,(0,c.jsx)(t.li,{children:`Индикация фоновых процессов`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const progress = ref(0)
const loading = ref(false)

const startLoading = () => {
loading.value = true
progress.value = 0

const interval = setInterval(() => {
  progress.value += 10
  if (progress.value >= 100) {
    clearInterval(interval)
    loading.value = false
  }
}, 500)
}
<\/script>

<template>
<button @click="startLoading">Начать загрузку</button>

<!-- Линейный индикатор с определенным значением -->
<Progress
  :visible="loading"
  :value="progress"
  linear
  position="top"
/>

<!-- Круговой индикатор -->
<Progress
  :visible="loading"
  :value="progress"
  circular
/>

<!-- Неопределенный индикатор -->
<Progress
  :visible="loading"
  linear
  indeterminate="type1"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};