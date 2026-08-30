import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`resize`,children:(0,c.jsx)(t.code,{children:`resize`})}),`
`,(0,c.jsx)(t.p,{children:`Событие, непрерывно генерируемое при изменении размера или перетаскивании области кадрирования.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`parameters: CropAreaEventParameters`}),` — объект с параметрами события`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура CropAreaEventParameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`direction: CropAreaDirection`}),` — идентификатор активного маркера или зоны перемещения (`,(0,c.jsx)(t.code,{children:`'top'`}),`, `,(0,c.jsx)(t.code,{children:`'right'`}),`, `,(0,c.jsx)(t.code,{children:`'bottom'`}),`, `,(0,c.jsx)(t.code,{children:`'left'`}),`, `,(0,c.jsx)(t.code,{children:`'right-top'`}),`, `,(0,c.jsx)(t.code,{children:`'right-bottom'`}),`, `,(0,c.jsx)(t.code,{children:`'left-top'`}),`, `,(0,c.jsx)(t.code,{children:`'left-bottom'`}),`, `,(0,c.jsx)(t.code,{children:`'center'`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — измененное значение отдельной координаты в процентах (или `,(0,c.jsx)(t.code,{children:`0`}),` для перемещения по центру)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`coordinator: CropAreaCoordinator`}),` — текущий массив из 4 координат `,(0,c.jsx)(t.code,{children:`[сверху, справа, снизу, слева]`}),` в процентах`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleResize = (parameters) => {
console.log('Направление перетаскивания:', parameters.direction)
console.log('Значение координаты:', parameters.value)
console.log('Текущие координаты [сверху, справа, снизу, слева]:', parameters.coordinator)
}
<\/script>

<template>
<CropArea @resize="handleResize" />
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};