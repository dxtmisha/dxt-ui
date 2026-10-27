import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/splice - Копирование и слияние свойств в объект`}),`
`,(0,c.jsx)(t.h1,{id:`splice`,children:(0,c.jsx)(t.code,{children:`splice`})}),`
`,(0,c.jsx)(t.p,{children:`Выполняет копирование и рекурсивное слияние свойств из одного объекта в другой. Поддерживает замену свойств начиная с определенного ключа или значения элемента с сохранением порядка следования остальных полей.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`array: ObjectItem<I>`}),` — Целевой объект.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`replacement?: ObjectItem<I> | I`}),` — Исходный объект с новыми данными.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`indexStart?: string`}),` — Ключ или значение элемента, начиная с которого будет выполнена замена.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`ObjectItem<I>`}),` — Новый объект с примененными изменениями.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { splice } from '@dxtmisha/functional-basic'

const target = { first: 1, middle: 2, last: 3 }
const replacement = { middleNew: 20 }

// Простое слияние без indexStart
console.log(splice(target, replacement))
// { first: 1, middle: 2, last: 3, middleNew: 20 }

// Замена свойства по ключу с сохранением порядка остальных полей
console.log(splice(target, replacement, 'middle'))
// { first: 1, middleNew: 20, last: 3 }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};