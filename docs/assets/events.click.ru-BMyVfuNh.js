import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`click`,children:(0,c.jsx)(t.code,{children:`click`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при клике на компонент, передавая оригинальное DOM событие и данные компонента.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent`}),` — оригинальное DOM событие мыши`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: EventClickValue`}),` — объект с данными компонента`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Структура EventClickValue:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — идентификатор места нажатия, задается через атрибут `,(0,c.jsx)(t.code,{children:`data-event-type`}),` у элемента`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — значение компонента`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: Record<string, any> | undefined`}),` — дополнительные данные события`]}),`
`]}),`
`,(0,c.jsx)(i,{code:`
<script setup>
const handleClick = (event, value) => {
console.log('DOM событие:', event)
console.log('Тип клика:', value.type)
console.log('Значение:', value.value)
console.log('Детали:', value.detail)
}
<\/script>

<template>
<Component @click="handleClick">
  <button data-event-type="action">Нажми меня</button>
</Component>
</template>
`,language:`html`}),`
`,(0,c.jsx)(t.h3,{id:`clicklite`,children:(0,c.jsx)(t.code,{children:`clickLite`})}),`
`,(0,c.jsx)(t.p,{children:`Событие срабатывает при клике на компонент, передавая только данные без оригинального DOM события (облегченная версия).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: EventClickValue`}),` — объект с данными компонента`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};