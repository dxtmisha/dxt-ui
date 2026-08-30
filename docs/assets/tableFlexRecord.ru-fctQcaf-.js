import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент строки флекс-таблицы на основе flexbox, координирующий рендеринг флекс-ячеек из набора данных и индексов колонок. Используется внутри контейнеров флекс-таблиц для создания гибких строк.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ключевые особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Флекс-макет строки для динамических наборов данных`}),`
`,(0,c.jsxs)(t.li,{children:[`Автоматический рендеринг ячеек путем сопоставления `,(0,c.jsx)(t.code,{children:`columns`}),` и свойств объекта `,(0,c.jsx)(t.code,{children:`item`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка строк заголовков флекс-таблицы (`,(0,c.jsx)(t.code,{children:`isHeader`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Кастомное переопределение слотов ячеек по индексам колонок`}),`
`,(0,c.jsxs)(t.li,{children:[`Динамические состояния скелетона (`,(0,c.jsx)(t.code,{children:`isSkeleton`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Состояния выбора и отключения на уровне всей строки (`,(0,c.jsx)(t.code,{children:`selected`}),`, `,(0,c.jsx)(t.code,{children:`disabled`}),`)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
<\/script>

<template>
<!-- Строка заголовка -->
<TableFlexRecord
  :isHeader="true"
  :columns="['id', 'name', 'role', 'status']"
  :item="{ id: 'ID', name: 'Имя', role: 'Должность', status: 'Статус' }"
/>

<!-- Строка данных -->
<TableFlexRecord
  :columns="['id', 'name', 'role', 'status']"
  :item="{ id: '1', name: 'Misha', role: 'Разработчик', status: 'Активен' }"
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`TableFlexRecord предоставляет флекс-макет и координацию для элементов строк таблицы, автоматически рендеря ячейки на основе структуры данных.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};