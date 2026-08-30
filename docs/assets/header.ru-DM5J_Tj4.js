import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Компонент для отображения заголовков с интегрированной поддержкой иконок и подписей.`}),`
`,(0,c.jsx)(t.p,{children:`Header позволяет гибко управлять HTML-тегом (h1-h6, div), что важно для соблюдения иерархии документа. Компонент поддерживает автоматическое управление областями (area) и предоставляет слот для кастомизации контента в правой части.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Отображение заголовка (label), подписи (caption) и иконки`}),`
`,(0,c.jsx)(t.li,{children:`Настройка HTML-тега (h1, h2, h3, h4, h5, h6, div и др.)`}),`
`,(0,c.jsx)(t.li,{children:`Автоматическое управление значением области через AreaInclude`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка слота trailing для дополнительного контента`}),`
`,(0,c.jsx)(t.li,{children:`Стандартизированная типографика и отступы`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Заголовки разделов и страниц`}),`
`,(0,c.jsx)(t.li,{children:`Группировка контента с поясняющими подписями`}),`
`,(0,c.jsx)(t.li,{children:`Навигационные заголовки с иконками`}),`
`,(0,c.jsx)(t.li,{children:`Шапки карточек и блоков`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Header
  label="Заголовок страницы"
  caption="Дополнительная информация или описание раздела"
  icon="description"
  tag="h1"
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Header является ключевым компонентом для организации текстовой иерархии и визуального выделения разделов интерфейса.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};