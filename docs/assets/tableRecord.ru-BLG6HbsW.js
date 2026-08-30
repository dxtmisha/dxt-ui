import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[`Компонент строки таблицы, представляющий тег `,(0,c.jsx)(t.code,{children:`<tr>`}),`. Он координирует рендеринг набора ячеек столбцов (`,(0,c.jsx)(t.code,{children:`TableHeaderItem`}),`, если `,(0,c.jsx)(t.code,{children:`isHeader`}),` равен true, или `,(0,c.jsx)(t.code,{children:`TableItem`}),` в противном случае) на основе записи данных (свойство `,(0,c.jsx)(t.code,{children:`item`}),`) и списка индексов столбцов (свойство `,(0,c.jsx)(t.code,{children:`columns`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ключевые особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Стандартный контейнер строки таблицы (тег `,(0,c.jsx)(t.code,{children:`tr`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Динамическая генерация ячеек на основе ключей `,(0,c.jsx)(t.code,{children:`columns`}),` и значений `,(0,c.jsx)(t.code,{children:`item`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Автоматический выбор между ячейками заголовка (`,(0,c.jsx)(t.code,{children:`TableHeaderItem`}),`) и ячейками данных (`,(0,c.jsx)(t.code,{children:`TableItem`}),`) с помощью флага `,(0,c.jsx)(t.code,{children:`isHeader`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Состояния выбора и отключения, применяемые ко всей строке (`,(0,c.jsx)(t.code,{children:`selected`}),`, `,(0,c.jsx)(t.code,{children:`disabled`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Динамические пользовательские слоты, названные в честь индексов столбцов, для кастомного рендеринга содержимого конкретных ячеек`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
<\/script>

<template>
<table>
  <!-- Строка заголовка -->
  <TableRecord
    :isHeader="true"
    :columns="['name', 'role']"
    :item="{ name: 'Имя', role: 'Роль' }"
  />

  <!-- Строка данных -->
  <TableRecord
    :columns="['name', 'role']"
    :item="{ name: 'Алиса', role: 'Разработчик' }"
  />
</table>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`TableRecord упрощает создание таблиц путем автоматизации рендеринга ячеек на основе структур данных «ключ-значение» с полной поддержкой переопределения через пользовательские слоты для каждой колонки.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};