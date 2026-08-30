import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[`Компонент ячейки заголовка таблицы на основе flexbox, представляющий элемент заголовка с флекс-макетом. Используется внутри флекс-строк заголовка для отображения текста, меток, описаний, элементов управления сортировкой и всплывающих подсказок, а также поддерживает расширение ширины через `,(0,c.jsx)(t.code,{children:`colspan`}),` (до 12).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ключевые особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Макет ячейки заголовка на основе flexbox с поддержкой `,(0,c.jsx)(t.code,{children:`colspan`}),` flex-basis (до 12)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Выравнивание содержимого заголовка (`,(0,c.jsx)(t.code,{children:`align`}),` и `,(0,c.jsx)(t.code,{children:`alignVertical`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Интерактивная 3-состояниевая сортировка колонок (`,(0,c.jsx)(t.code,{children:`sortColumn`}),`, `,(0,c.jsx)(t.code,{children:`sortDir`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Интегрированный компонент всплывающей подсказки (`,(0,c.jsx)(t.code,{children:`tooltipLabel`}),`, `,(0,c.jsx)(t.code,{children:`tooltipDescription`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ограничение количества строк для ячеек с длинными метками (`,(0,c.jsx)(t.code,{children:`labelClamp`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Динамические состояния скелетона (`,(0,c.jsx)(t.code,{children:`isSkeleton`}),`) для фаз загрузки`]}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка липких (sticky) колонок и заголовков (`,(0,c.jsx)(t.code,{children:`stickyLeft`}),`, `,(0,c.jsx)(t.code,{children:`stickyTop`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Выбор и интерактивные состояния ячейки (`,(0,c.jsx)(t.code,{children:`selected`}),`, `,(0,c.jsx)(t.code,{children:`disabled`}),`)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
<\/script>

<template>
<!-- Простая ячейка заголовка со значением -->
<TableFlexHeaderItem value="Заголовок столбца" />

<!-- Интерактивная ячейка заголовка с сортировкой и подсказкой -->
<TableFlexHeaderItem
  label="Сортируемый заголовок"
  description="Нажмите для сортировки"
  showSort
  sortDir="asc"
  tooltipLabel="Справка"
  tooltipDescription="Подробное описание для этого столбца"
  align="center"
  colspan="2"
  labelClamp
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`TableFlexHeaderItem предоставляет возможности гибкого флекс-макета и представления для содержимого ячеек заголовков таблиц, обеспечивая последовательное усечение текста, выравнивание, подсказки и логику сортировки.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};