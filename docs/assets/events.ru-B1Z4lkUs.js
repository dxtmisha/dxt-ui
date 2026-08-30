import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`selected`,children:(0,c.jsx)(t.code,{children:`selected`})}),`
`,(0,c.jsx)(t.p,{children:`Событие, вызываемое при выборе элементов внутри области (путем перетаскивания лассо или клика).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`parameters: SelectableAreaEventParameters`}),` — объект с деталями выделения`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура SelectableAreaEventParameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: HTMLElement[]`}),` — все выделяемые элементы в области`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`itemsSelected: HTMLElement[]`}),` — элементы, которые в данный момент выбраны`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: string[]`}),` — массив значений выбранных элементов (берутся из атрибутов `,(0,c.jsx)(t.code,{children:`data-value`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`focus: string | undefined`}),` — значение последнего сфокусированного элемента`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleSelected = (parameters) => {
console.log('Выбранные значения:', parameters.selected)
console.log('Выбранные DOM-элементы:', parameters.itemsSelected)
}
<\/script>

<template>
<SelectableArea @selected="handleSelected">
  <!-- контент -->
</SelectableArea>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};