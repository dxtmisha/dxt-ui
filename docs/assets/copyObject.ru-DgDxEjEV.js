import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/copyObject - Копирование объекта`}),`
`,(0,c.jsx)(n.h1,{id:`copyobject`,children:(0,c.jsx)(n.code,{children:`copyObject`})}),`
`,(0,c.jsx)(n.p,{children:`Создает глубокую копию (deep copy) объектов и массивов, содержащих базовые типы данных.`}),`
`,(0,c.jsxs)(n.p,{children:[`Это полезно, когда нужно избежать мутаций исходного состояния. Однако следует помнить, что утилита не копирует функции, символы, значения `,(0,c.jsx)(n.code,{children:`undefined`}),` и не может обработать циклические ссылки (внутри используется `,(0,c.jsx)(n.code,{children:`JSON.parse(JSON.stringify(value))`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Объект или значение, которое необходимо скопировать.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`T`}),` — Новая копия объекта.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { copyObject } from '@dxtmisha/functional-basic'

const original = { name: 'John', details: { age: 30 } }
const copy = copyObject(original)

copy.details.age = 31

console.log(original.details.age) // 30 (исходный объект не изменился)
console.log(copy.details.age) // 31
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};