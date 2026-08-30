import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,c.jsx)(t.p,{children:`Компонент для управления липким положением шапки (sticky header), вычислениями метрик прокрутки, порогом трансформации и смещением в режиме disappears.`}),`
`,(0,c.jsxs)(t.p,{children:[`Headroom отслеживает активность прокрутки на целевом элементе или окне и динамически обновляет статус прилипания (`,(0,c.jsx)(t.code,{children:`sticky`}),`), дата-атрибуты, свойства трансформации и позиционирование смещения в режиме скрытия.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Автоматическое отслеживание прокрутки и оценка состояния прилипания (`,(0,c.jsx)(t.code,{children:`isSticky`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Режим `,(0,c.jsx)(t.code,{children:`disappears`}),`, скрывающий элемент при прокрутке вниз и показывающий при прокрутке вверх`]}),`
`,(0,c.jsx)(t.li,{children:`Динамические свойства CSS трансформации и дата-атрибуты для стилизации`}),`
`,(0,c.jsx)(t.li,{children:`Настраиваемый целевой элемент или окно для прослушивания событий`}),`
`,(0,c.jsx)(t.li,{children:`Настраиваемый HTML-тег для рендеринга`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Липкие шапки сайта и панели навигации`}),`
`,(0,c.jsx)(t.li,{children:`Автоматически скрывающиеся панели при прокрутке страницы вниз`}),`
`,(0,c.jsx)(t.li,{children:`Анимации и визуальные трансформации шапок, привязанные к позиции скролла`}),`
`,(0,c.jsx)(t.li,{children:`Липкие панели инструментов с динамическим расчетом отступа`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<template>
<!-- Базовая шапка Headroom -->
<Headroom>
  <header class="header">
    Содержимое шапки Headroom
  </header>
</Headroom>

<!-- Headroom с режимом скрытия при прокрутке -->
<Headroom disappears :transformThreshold="100">
  <header class="header">
    Автоматически скрываемое содержимое
  </header>
</Headroom>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Headroom — компонент для создания фиксированных и скрывающихся шапок с поддержкой анимаций, вычисления метрик прокрутки и динамической кастомизации.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};