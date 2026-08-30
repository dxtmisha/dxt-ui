import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`зафиксированная-шапка-таблицы`,children:`Зафиксированная шапка таблицы`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`headerTop`}),` включает прилипающее позиционирование заголовка таблицы (`,(0,c.jsx)(t.code,{children:`thead`}),`) при вертикальной прокрутке.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Особенности работы:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`При `,(0,c.jsx)(t.code,{children:`headerTop="true"`}),` заголовок таблицы закрепляется сверху прокручиваемой области с помощью CSS-позиционирования `,(0,c.jsx)(t.code,{children:`position: sticky`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Совместно со свойством `,(0,c.jsx)(t.code,{children:`stickyScrollBottom`}),` (включенным по умолчанию) активируется внутренний контроллер `,(0,c.jsx)(t.code,{children:`StickyInclude`}),`, который автоматически рассчитывает верхний отступ (`,(0,c.jsx)(t.code,{children:`--[className]-sys-sticky-fix`}),`) и синхронизирует положение шапки при скроллинге.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Во время активной прокрутки элементы получают дата-атрибуты `,(0,c.jsx)(t.code,{children:`data-sticky="active"`}),` и `,(0,c.jsx)(t.code,{children:`data-sticky-scroll="active"`}),`, вызывая плавное скрытие (`,(0,c.jsx)(t.code,{children:`opacity: 0`}),`), чтобы исключить скачки и визуальные наложения при изменении высоты полосы прокрутки.`]}),`
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
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};