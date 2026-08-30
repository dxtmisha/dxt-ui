import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/getRef - Извлечение значения`}),`
`,(0,c.jsx)(t.h1,{id:`getref`,children:(0,c.jsx)(t.code,{children:`getRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилитарная функция, которая извлекает базовое значение из реактивной переменной `,(0,c.jsx)(t.code,{children:`Ref`}),` или возвращает само значение, если оно не является реактивным. Это полезно для гарантии работы с чистыми данными независимо от их состояния реактивности.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: RefOrNormal<T>`}),` — Реактивная переменная (`,(0,c.jsx)(t.code,{children:`Ref`}),`) или обычное значение.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`T`}),` — Распакованное значение `,(0,c.jsx)(t.code,{children:`Ref`}),` или само входное значение.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { getRef } from '@dxtmisha/functional'

const count = ref(10)
const normalValue = 20

console.log(getRef(count))       // 10
console.log(getRef(normalValue)) // 20
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};