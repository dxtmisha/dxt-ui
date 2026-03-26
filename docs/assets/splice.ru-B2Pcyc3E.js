import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/splice - Копирование и слияние свойств в объект`}),`
`,(0,c.jsx)(n.h1,{id:`splice`,children:(0,c.jsx)(n.code,{children:`splice`})}),`
`,(0,c.jsx)(n.p,{children:`Выполняет копирование и рекурсивное слияние свойств из одного объекта в другой. Поддерживает вставку новых свойств начиная с определенного ключа или индекса.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`array: ObjectItem<I>`}),` — Целевой объект или массив.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replacement?: ObjectItem<I> | I`}),` — Исходный объект с новыми данными.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`indexStart?: string`}),` — Ключ или значение элемента, начиная с которого будет выполнена вставка.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`ObjectItem<I>`}),` — Новый объект или массив с примененными изменениями.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { splice } from '@dxtmisha/functional-basic'

const target = { first: 1, last: 3 }
const source = { second: 2 }

// Простая вставка
console.log(splice(target, source)) // { first: 1, last: 3, second: 2 }

// Вставка после определенного ключа
console.log(splice(target, source, 'first')) // { first: 1, second: 2, last: 3 }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};