import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`sort`,children:(0,c.jsx)(t.code,{children:`sort`})}),`
`,(0,c.jsx)(t.p,{children:`Событие вызывается при клике по кнопке управления сортировкой в ячейке шапки таблицы или записи таблицы, возвращая целевой ключ колонки и обновленное направление сортировки.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: SortColumnItem`}),` — объект, содержащий целевой ключ колонки и направление сортировки`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура объекта SortColumnItem:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`column?: string`}),` — идентификатор ключа колонки (или `,(0,c.jsx)(t.code,{children:`undefined`}),` при сбросе/отключении сортировки)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir?: SortDir`}),` — направление сортировки (`,(0,c.jsx)(t.code,{children:`'asc'`}),`, `,(0,c.jsx)(t.code,{children:`'desc'`}),` или `,(0,c.jsx)(t.code,{children:`undefined`}),`)`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleSort = (item) => {
console.log('Целевая колонка:', item.column)
console.log('Направление сортировки:', item.dir)
}
<\/script>

<template>
<TableHeaderItem index="title" @sort="handleSort" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};