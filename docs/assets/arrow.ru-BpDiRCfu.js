import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для отображения графического указателя (стрелки), используемого для визуальной связи всплывающих элементов с их целью.`}),`
`,(0,c.jsx)(t.p,{children:`Arrow обеспечивает автоматическое или ручное позиционирование указателя. Часто применяется в составе компонентов Tooltip, Popover и Dropdown для указания направления на триггер или целевой элемент. Компонент поддерживает адаптацию под различные размеры и стили, а также может динамически обновлять свое положение.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическое и ручное позиционирование (top, bottom, left, right)`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка инвертированного стиля`}),`
`,(0,c.jsx)(t.li,{children:`Привязка к целевому элементу (elementTarget)`}),`
`,(0,c.jsx)(t.li,{children:`Динамическое обновление положения`}),`
`,(0,c.jsx)(t.li,{children:`Настраиваемая SVG-графика стрелки`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция с компонентами позиционирования`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Указатели во всплывающих подсказках`}),`
`,(0,c.jsx)(t.li,{children:`Стрелки в выпадающих меню и поповерах`}),`
`,(0,c.jsx)(t.li,{children:`Визуальные связи в пошаговых руководствах`}),`
`,(0,c.jsx)(t.li,{children:`Индикаторы направления в интерфейсе`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { Arrow } from 'dxt-ui'
<\/script>

<template>
<div class="relative p-4 border rounded">
  Контент с указателем
  <Arrow position="top" />
</div>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};