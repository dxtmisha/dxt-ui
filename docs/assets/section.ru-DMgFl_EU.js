import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsxs)(t.p,{children:[`Семантический компонент-контейнер, предназначенный для группировки связанного контента. По умолчанию использует тег `,(0,c.jsx)(t.code,{children:`<section>`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Section предоставляет возможности для отображения заголовков, меток, описаний, подписей и иконок. Основное назначение компонента — обозначение тематических разделов документа, что улучшает семантику и доступность страницы. Заголовок по умолчанию рендерится как `,(0,c.jsx)(t.code,{children:`<h2>`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Семантическая группировка контента (тег `,(0,c.jsx)(t.code,{children:`<section>`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка заголовков (по умолчанию `,(0,c.jsx)(t.code,{children:`<h2>`}),`), меток, описаний и подписей`]}),`
`,(0,c.jsx)(t.li,{children:`Поддержка иконок`}),`
`,(0,c.jsx)(t.li,{children:`Настраиваемый макет и отступы`}),`
`,(0,c.jsx)(t.li,{children:`Полная поддержка слотов для кастомизации контента`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Тематические разделы страницы`}),`
`,(0,c.jsx)(t.li,{children:`Группировка контента в статьях`}),`
`,(0,c.jsx)(t.li,{children:`Информационные блоки с заголовками второго уровня`}),`
`,(0,c.jsx)(t.li,{children:`Секции лэндингов`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Section
  headline="Заголовок секции"
  label="Метка"
  description="Описание содержимого данной секции"
>
  <p>Основной контент секции...</p>
</Section>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Section — это семантически верный выбор для разделения страницы на крупные логические блоки.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};