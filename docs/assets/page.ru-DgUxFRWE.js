import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsxs)(t.p,{children:[`Семантический компонент-контейнер верхнего уровня, предназначенный для обертки основного содержимого страницы. По умолчанию использует тег `,(0,c.jsx)(t.code,{children:`<main>`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Page предоставляет возможности для отображения главных заголовков, меток, описаний, подписей и иконок. Основное назначение компонента — обозначение уникальной части содержимого документа, что критически важно для доступности (accessibility) и SEO. Заголовок по умолчанию рендерится как `,(0,c.jsx)(t.code,{children:`<h1>`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Семантическая обертка основного контента (тег `,(0,c.jsx)(t.code,{children:`<main>`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка главных заголовков (по умолчанию `,(0,c.jsx)(t.code,{children:`<h1>`}),`), меток, описаний и подписей`]}),`
`,(0,c.jsx)(t.li,{children:`Поддержка иконок`}),`
`,(0,c.jsx)(t.li,{children:`Настраиваемый макет и отступы`}),`
`,(0,c.jsx)(t.li,{children:`Полная поддержка слотов для кастомизации контента`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Обертка для уникального контента страницы`}),`
`,(0,c.jsx)(t.li,{children:`Главный экран приложения`}),`
`,(0,c.jsx)(t.li,{children:`Страница статьи или документации`}),`
`,(0,c.jsx)(t.li,{children:`Корневой элемент для маршрутизируемых компонентов (views)`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
import { ref } from 'vue'
<\/script>

<template>
<Page
  headline="Главный заголовок страницы"
  label="Категория"
  description="Краткое описание содержимого страницы"
>
  <p>Уникальный контент страницы...</p>
</Page>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Page должен использоваться один раз на странице (или в активном view) и не должен включать повторяющиеся элементы навигации.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};