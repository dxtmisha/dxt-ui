import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`скрытые-якоря`,children:`Скрытые якоря`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`hide`}),` создаёт невидимую якорную точку для программной навигации без визуального представления.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hide`}),` — скрывает визуальное представление компонента (по умолчанию `,(0,c.jsx)(t.code,{children:`false`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name`}),` — имя якоря для навигации (обязательное свойство)`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`При включённом `,(0,c.jsx)(t.code,{children:`hide`}),` компонент рендерится как скрытый элемент `,(0,c.jsx)(t.code,{children:`<a name="...">`}),` без текста, иконок и стилей оформления. Это полезно для создания невидимых точек навигации, к которым можно программно прокручивать страницу или использовать их как целевые элементы для других якорей. Скрытый якорь остаётся в DOM и доступен для навигации через URL хеш или методы прокрутки.`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Скрытый якорь в секции -->
<section>
  <Anchor name="section-start" hide />
  <h2>Заголовок раздела</h2>
</section>

<!-- Комбинация скрытого и видимого -->
<h3>
  <Anchor name="heading" hide />
  Заголовок
  <Anchor name="heading" isCopy iconTag="link" />
</h3>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};