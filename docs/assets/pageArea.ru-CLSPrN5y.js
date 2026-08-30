import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Специализированный компонент-контейнер, предназначенный для организации и структурирования основной области контента страницы. Он обеспечивает согласованную основу макета для различных блоков и секций интерфейса.`}),`
`,(0,c.jsx)(t.p,{children:`PageArea выступает в роли оркестратора основной информации страницы, обеспечивая единообразные отступы, выравнивание и семантическую группировку вложенных компонентов. Он автоматически определяет подходящий компонент для рендеринга (Page, Section, Block или Group) в зависимости от текущего уровня вложенности или контекста области.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическое переключение компонентов (Page -> Section -> Block -> Group) на основе контекста`}),`
`,(0,c.jsx)(t.li,{children:`Организация семантической структуры страницы`}),`
`,(0,c.jsx)(t.li,{children:`Интеграция с областями макета и контекстом`}),`
`,(0,c.jsx)(t.li,{children:`Согласованные внешние и внутренние отступы`}),`
`,(0,c.jsx)(t.li,{children:`Поддержка вложенных блоков и групп пользовательского интерфейса`}),`
`,(0,c.jsx)(t.li,{children:`Гибкое управление контентом через слоты`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Основная обертка контента для страниц приложения`}),`
`,(0,c.jsx)(t.li,{children:`Оркестрация макета дашбордов`}),`
`,(0,c.jsx)(t.li,{children:`Контейнеры для детальных представлений данных`}),`
`,(0,c.jsx)(t.li,{children:`Группировка секций внутри больших страниц`}),`
`,(0,c.jsx)(t.li,{children:`Базовая структурная единица для пользовательских макетов страниц`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
// Пример использования PageArea
<\/script>

<template>
<PageArea>
  <!-- Контент вашей страницы -->
  <Block headline="Добро пожаловать">
    Этот контент организован внутри PageArea.
  </Block>
</PageArea>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`PageArea является важным компонентом для поддержания структурированного и согласованного макета в различных представлениях приложения.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};