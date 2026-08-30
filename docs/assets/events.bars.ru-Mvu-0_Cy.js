import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`bars`,children:(0,c.jsx)(t.code,{children:`bars`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при клике на элемент панели Bars, передавая оригинальное DOM событие и данные о клике.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent`}),` — оригинальное DOM событие мыши`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: EventClickValue`}),` — объект с данными о клике`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура EventClickValue:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — тип клика/кнопки (например, `,(0,c.jsx)(t.code,{children:`'back'`}),` для кнопки назад)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — произвольное значение кнопки`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — дополнительные данные события`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleBars = (event, value) => {
console.log('DOM событие:', event)
console.log('Тип кнопки:', value.type)
console.log('Значение:', value.value)
console.log('Детали:', value.detail)

if (value.type === 'back') {
  console.log('Нажата кнопка "Назад"')
}
}
<\/script>

<template>
<Bars @bars="handleBars">
  <button data-event-type="back">Назад</button>
</Bars>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`barslite`,children:(0,c.jsx)(t.code,{children:`barsLite`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при клике на элемент панели Bars, передавая только данные без оригинального DOM события (облегченная версия).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: EventClickValue`}),` — объект с данными о клике`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`barsback`,children:(0,c.jsx)(t.code,{children:`barsBack`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при клике по кнопке «Назад» в панели Bars, передавая только данные о клике.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: EventClickValue`}),` — объект с данными о клике`]}),`
`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Кнопку «Назад» можно скрыть свойством `,(0,c.jsx)(t.code,{children:`barsBackHide`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};