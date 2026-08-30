import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`input`,children:(0,c.jsx)(t.code,{children:`input`})}),`
`,(0,c.jsx)(t.p,{children:`Вызывается в реальном времени при перемещении указателя по делениям циферблата или клике.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: ClockDialEventItem`}),` — подробный объект данных события.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — текущее выбранное числовое значение.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`inputlite`,children:(0,c.jsx)(t.code,{children:`inputLite`})}),`
`,(0,c.jsx)(t.p,{children:`Облегченная версия события ввода, передающая только числовое значение.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — выбранное числовое значение.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`change`,children:(0,c.jsx)(t.code,{children:`change`})}),`
`,(0,c.jsx)(t.p,{children:`Вызывается в момент завершения взаимодействия (отпускание кнопки мыши или пальца после перетаскивания, либо по клику).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: ClockDialEventItem`}),` — подробный объект данных события.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — зафиксированное числовое значение.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`changelite`,children:(0,c.jsx)(t.code,{children:`changeLite`})}),`
`,(0,c.jsx)(t.p,{children:`Облегченная версия события изменения, передающая только зафиксированное числовое значение.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — зафиксированное числовое значение.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`структуры-данных`,children:`Структуры данных`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ClockDialEventItem`}),`:`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`clock?: ClockDialProps['type']`}),` — активный тип циферблата (`,(0,c.jsx)(t.code,{children:`'12'`}),`, `,(0,c.jsx)(t.code,{children:`'24'`}),`, `,(0,c.jsx)(t.code,{children:`'minute'`}),`, `,(0,c.jsx)(t.code,{children:`'second'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item?: ClockDialMarkItem`}),` — объект выбранного деления циферблата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: number`}),` — выбранное числовое значение.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ClockDialMarkItem`}),`:`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — текстовая подпись метки (например, `,(0,c.jsx)(t.code,{children:`'05'`}),`, `,(0,c.jsx)(t.code,{children:`'12'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`rotate: string`}),` — вычисленный CSS-угол поворота (например, `,(0,c.jsx)(t.code,{children:`'90deg'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`section: boolean`}),` — признак внутреннего круга для 24-часового циферблата.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style: ConstrStyles`}),` — инлайн-стили с переменной угла поворота.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — числовое значение деления.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disabled: boolean`}),` — флаг отключения деления (по `,(0,c.jsx)(t.code,{children:`min`}),`, `,(0,c.jsx)(t.code,{children:`max`}),`, `,(0,c.jsx)(t.code,{children:`step`}),` или `,(0,c.jsx)(t.code,{children:`disabled`}),`).`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleInput = (event, value) => {
console.log('Элемент:', event.item?.name, 'Значение:', value)
}

const handleChangeLite = (value) => {
console.log('Выбранное значение:', value)
}
<\/script>

<template>
<ClockDial
  type="12"
  @input="handleInput"
  @change-lite="handleChangeLite"
/>
</template>
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};