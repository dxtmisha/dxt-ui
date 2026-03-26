import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Functions/getRef - Извлечение значения`}),`
`,(0,c.jsx)(n.h1,{id:`getref`,children:(0,c.jsx)(n.code,{children:`getRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилитарная функция, которая извлекает базовое значение из реактивной переменной `,(0,c.jsx)(n.code,{children:`Ref`}),` или возвращает само значение, если оно не является реактивным. Это полезно для гарантии работы с чистыми данными независимо от их состояния реактивности.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: RefOrNormal<T>`}),` — Реактивная переменная (`,(0,c.jsx)(n.code,{children:`Ref`}),`) или обычное значение.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`T`}),` — Распакованное значение `,(0,c.jsx)(n.code,{children:`Ref`}),` или само входное значение.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { getRef } from '@dxtmisha/functional'

const count = ref(10)
const normalValue = 20

console.log(getRef(count))       // 10
console.log(getRef(normalValue)) // 20
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};