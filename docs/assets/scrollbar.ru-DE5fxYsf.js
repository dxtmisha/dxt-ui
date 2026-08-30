import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент для кастомизации внешнего вида полосы прокрутки и управления визуальными разделителями на границах прокручиваемой области.`}),`
`,(0,c.jsx)(t.p,{children:`Scrollbar скрывает стандартную полосу прокрутки браузера и предоставляет визуальную обратную связь при достижении верхней или нижней границы контента через разделительные линии. Компонент автоматически определяет ширину скроллбара и адаптирует отображение для систем без видимых полос прокрутки (например, macOS с трекпадом).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Скрытие стандартной полосы прокрутки браузера`}),`
`,(0,c.jsx)(t.li,{children:`Отображение разделителей при достижении границ контента`}),`
`,(0,c.jsx)(t.li,{children:`Независимое управление верхним и нижним разделителями`}),`
`,(0,c.jsx)(t.li,{children:`Инверсия логики отображения разделителей`}),`
`,(0,c.jsx)(t.li,{children:`События для отслеживания позиции скролла`}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка бесконечной прокрутки через события `,(0,c.jsx)(t.code,{children:`reachBottom`})]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Типичные сценарии использования:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Списки с подгрузкой данных при скролле`}),`
`,(0,c.jsx)(t.li,{children:`Модальные окна и выпадающие меню с прокручиваемым содержимым`}),`
`,(0,c.jsx)(t.li,{children:`Области с фиксированной высотой и вертикальной прокруткой`}),`
`,(0,c.jsx)(t.li,{children:`Визуальное разделение контента при прокрутке`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleReachBottom = () => {
// Загрузка дополнительных данных
loadMoreItems()
}
<\/script>

<template>
<Scrollbar
  divider
  @reach-bottom="handleReachBottom"
>
  <div class="content">
    <!-- Прокручиваемое содержимое -->
  </div>
</Scrollbar>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};