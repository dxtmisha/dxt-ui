import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Functions/toRefItem - Нормализация реактивной переменной Ref`}),`
`,(0,c.jsx)(n.h1,{id:`torefitem`,children:(0,c.jsx)(n.code,{children:`toRefItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилитарная функция, которая гарантирует, что значение является реактивной переменной `,(0,c.jsx)(n.code,{children:`Ref`}),`. Если входное значение уже является `,(0,c.jsx)(n.code,{children:`Ref`}),`, оно возвращается как есть. Если входное значение является обычным значением, оно оборачивается в новую переменную `,(0,c.jsx)(n.code,{children:`Ref`}),`. Это полезно для функций, которые ожидают реактивную ссылку в качестве аргумента.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: RefOrNormal<T>`}),` — Реактивная переменная (`,(0,c.jsx)(n.code,{children:`Ref`}),`) или обычное значение.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`Ref<T>`}),` — Реактивная переменная `,(0,c.jsx)(n.code,{children:`Ref`}),`, содержащая значение.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { toRefItem } from '@dxtmisha/functional'

const existingRef = ref(10)
const ordinaryValue = 20

const normalized1 = toRefItem(existingRef)   // Возвращает исходный ref
const normalized2 = toRefItem(ordinaryValue) // Возвращает новый ref(20)

console.log(normalized1.value) // 10
console.log(normalized2.value) // 20
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};