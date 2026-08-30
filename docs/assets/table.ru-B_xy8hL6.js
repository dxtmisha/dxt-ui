import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:`Компонент таблицы, координирующий сеточные индексы колонок и список строк данных для визуализации табличной информации.`}),`
`,(0,c.jsxs)(t.p,{children:[`Компонент `,(0,c.jsx)(t.code,{children:`Table`}),` обеспечивает рендеринг структурированных наборов данных. Он объединяет конфигурации колонок (`,(0,c.jsx)(t.code,{children:`columns`}),`), настройки шапки (`,(0,c.jsx)(t.code,{children:`header`}),`), массивы строк (`,(0,c.jsx)(t.code,{children:`list`}),`), липкую шапку (`,(0,c.jsx)(t.code,{children:`headerTop`}),`), зафиксированные левые колонки (`,(0,c.jsx)(t.code,{children:`stickyLeft`}),`) и форматирование ячеек.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ключевые особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Структурированное представление наборов данных в табличном виде`}),`
`,(0,c.jsxs)(t.li,{children:[`Автоматическое извлечение данных на основе массива колонок `,(0,c.jsx)(t.code,{children:`columns`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Поддержка многоуровневых иерархических шапок с помощью свойства `,(0,c.jsx)(t.code,{children:`header`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Зафиксированная шапка (`,(0,c.jsx)(t.code,{children:`headerTop`}),`) и липкие левые столбцы (`,(0,c.jsx)(t.code,{children:`stickyLeft`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[`Настройка выравнивания ячеек, выбора строк и атрибутов на уровне колонок (`,(0,c.jsx)(t.code,{children:`tableItemColumnAttrs`}),`)`]}),`
`,(0,c.jsx)(t.li,{children:`Кастомные слоты для каждого индекса столбца для гибкого оформления содержимого`}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const columns = ['id', 'name', 'role', 'status']
const header = { id: 'ID', name: 'Имя', role: 'Должность', status: 'Статус' }
const list = [
{ id: '1', name: 'Алиса', role: 'Разработчик', status: 'Активен' },
{ id: '2', name: 'Боб', role: 'Дизайнер', status: 'В ожидании' }
]
<\/script>

<template>
<Table
  :columns="columns"
  :header="header"
  :list="list"
  :headerTop="true"
/>
</template>
`,language:`html`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Table предоставляет полную оркестрацию верстки для табличных данных с поддержкой фиксации шапки, липких столбцов и переопределения слотов.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};