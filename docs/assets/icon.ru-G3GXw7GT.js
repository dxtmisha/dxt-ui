import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`icon`,children:`Icon`}),`
`,(0,c.jsx)(t.p,{children:`Компонент для отображения иконок с поддержкой активного состояния, поворота, загрузки и интеграции со скелетоном.`}),`
`,(0,c.jsx)(t.p,{children:`Icon предоставляет унифицированный интерфейс для работы с иконками в дизайн-системе, поддерживая как основную иконку, так и альтернативную для активного состояния. Компонент автоматически управляет переключением между иконками, обрабатывает события загрузки и интегрируется с системой скелетонов для отображения состояния загрузки.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Отображение основной и активной иконки с плавным переключением`}),`
`,(0,c.jsx)(t.li,{children:`Поворот иконки на заданный угол`}),`
`,(0,c.jsx)(t.li,{children:`Состояния disabled и hide для управления видимостью`}),`
`,(0,c.jsx)(t.li,{children:`События загрузки изображений иконок`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция со Skeleton для состояний загрузки`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка в составе других компонентов (Button, Cell, Chip, Field)`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Иконки в кнопках и навигационных элементах`}),`
`,(0,c.jsx)(t.li,{children:`Интерактивные иконки с изменением состояния`}),`
`,(0,c.jsx)(t.li,{children:`Индикаторы состояния в формах и списках`}),`
`,(0,c.jsx)(t.li,{children:`Декоративные элементы интерфейса с анимацией`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
import { D1Icon } from '@dxtmisha/d1'

const isActive = ref(false)
<\/script>

<template>
<D1Icon
  icon="home"
  icon-active="favorite"
  :active="isActive"
  turn="90"
  @load="onIconLoad"
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Компонент Icon может использоваться как самостоятельно, так и в составе других UI-компонентов через свойства `,(0,c.jsx)(t.code,{children:`icon`}),`, `,(0,c.jsx)(t.code,{children:`icon-trailing`}),` и `,(0,c.jsx)(t.code,{children:`icon-active`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};