import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Низкоуровневая утилита для управления трансформациями элементов, переходами состояний и потоками взаимодействия в компонентах с оконным поведением.`}),`
`,(0,c.jsx)(t.p,{children:`MotionTransform централизует управление состояниями открытия/отображения/телепортации, измеряет размеры элементов, обновляет CSS-переменные и координирует события для создания плавных и предсказуемых анимаций. Предоставляет единый API для работы с видимостью компонентов, обработки кликов и автоматического закрытия с поддержкой игнорируемых зон.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Централизованное управление состояниями (open, show, teleport)`}),`
`,(0,c.jsx)(t.li,{children:`Координация событий кликов и автозакрытия`}),`
`,(0,c.jsx)(t.li,{children:`Измерение размеров и обновление CSS-переменных`}),`
`,(0,c.jsx)(t.li,{children:`DOM-хелперы для работы с refs, порталами и классами`}),`
`,(0,c.jsx)(t.li,{children:`Программное управление через императивные методы`}),`
`,(0,c.jsx)(t.li,{children:`Настраиваемые зоны игнорирования событий`}),`
`,(0,c.jsx)(t.li,{children:`Оптимизированная работа с DOM`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Базовая утилита для компонентов Window, Menu, Dialog`}),`
`,(0,c.jsx)(t.li,{children:`Управление анимациями открытия/закрытия`}),`
`,(0,c.jsx)(t.li,{children:`Координация состояний в всплывающих элементах`}),`
`,(0,c.jsx)(t.li,{children:`Разработка библиотек компонентов с оконным поведением`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
import { MotionTransform } from '@dxtmisha/constructor'

const element = ref()
const elementContext = ref()

const motion = new MotionTransform(
{ open: false, autoClose: true },
// ...other params
)

// Программное управление
motion.go.toOpen()
motion.go.toClose()

// Доступ к состояниям
const isOpen = motion.state.isOpen
const isShow = motion.state.isShow
<\/script>

<template>
<div ref="element">
  <!-- Контент с управляемой трансформацией -->
</div>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Это низкоуровневая утилита для разработки библиотек компонентов, не предназначенная для прямого использования в приложениях.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};