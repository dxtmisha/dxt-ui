import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Универсальный компонент для создания сегментированного управления, элементов вкладок и навигационных ссылок с поддержкой иконок и бейджей.`}),`
`,(0,c.jsx)(t.p,{children:`SegmentControlItem объединяет в себе функциональность кнопки, ссылки и элемента списка. Он поддерживает различные состояния (активное, отключенное), может отображать иконки слева и справа от текста, а также интегрируется с компонентом Badge для отображения уведомлений или счетчиков. Компонент автоматически управляет ARIA-атрибутами для обеспечения доступности.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Отображение метки (label) и иконок (icon, iconTrailing)`}),`
`,(0,c.jsx)(t.li,{children:`Встроенная поддержка бейджа (badge) для счетчиков`}),`
`,(0,c.jsx)(t.li,{children:`Управление состоянием выбора (selected) и активности`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка навигации через href (ссылка) или to (router-link)`}),`
`,(0,c.jsx)(t.li,{children:`Настраиваемый корневой тег (button, a, div, li)`}),`
`,(0,c.jsx)(t.li,{children:`Эффект ряби (ripple) при клике`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка скелетона (skeleton) для состояния загрузки`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Сегментированное управление в навигационных панелях`}),`
`,(0,c.jsx)(t.li,{children:`Списки выбора (select options)`}),`
`,(0,c.jsx)(t.li,{children:`Ссылки с иконками и счетчиками`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'

const activeSegment = ref('home')
<\/script>

<template>
<SegmentControlItem
    label="Главная"
    icon="home"
    :selected="activeSegment === 'home'"
    @click="activeSegment = 'home'"
  />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};