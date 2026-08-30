import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для липкого позиционирования элементов, который автоматически применяет CSS-классы и генерирует события состояния.`}),`
`,(0,c.jsx)(t.p,{children:`MotionSticky вычисляет липкое положение на основе расчетов смещения прокрутки. Он применяет активный класс и атрибуты набора данных (dataset) к элементу, когда он становится липким, позволяя создавать сложные стили или анимации в зависимости от этого состояния.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ключевые особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Автоматическое определение липкого состояния в зависимости от позиции прокрутки`}),`
`,(0,c.jsxs)(t.li,{children:[`Динамическое применение CSS-класса и dataset (`,(0,c.jsx)(t.code,{children:`data-sticky="sticky"`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Привязка к конкретному контейнеру прокрутки или к прокрутке окна`}),`
`,(0,c.jsx)(t.li,{children:`События для отслеживания изменений статуса прикрепления`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Липкие заголовки и панели навигации`}),`
`,(0,c.jsx)(t.li,{children:`Плавающие боковые панели и блоки сводки`}),`
`,(0,c.jsx)(t.li,{children:`Сворачивающиеся/разворачивающиеся элементы панели инструментов при прокрутке`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<MotionSticky class-activity="is-sticky">
  <div class="header-content">
    Мой липкий заголовок
  </div>
</MotionSticky>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};