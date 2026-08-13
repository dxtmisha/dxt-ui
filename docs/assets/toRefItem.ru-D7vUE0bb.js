import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/toRefItem - Нормализация реактивной переменной Ref`}),`
`,(0,c.jsx)(t.h1,{id:`torefitem`,children:(0,c.jsx)(t.code,{children:`toRefItem`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилитарная функция, которая гарантирует, что значение является реактивной переменной `,(0,c.jsx)(t.code,{children:`Ref`}),`. Если входное значение уже является `,(0,c.jsx)(t.code,{children:`Ref`}),`, оно возвращается как есть. Если входное значение является обычным значением, оно оборачивается в новую переменную `,(0,c.jsx)(t.code,{children:`Ref`}),`. Это полезно для функций, которые ожидают реактивную ссылку в качестве аргумента.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: RefOrNormal<T>`}),` — Реактивная переменная (`,(0,c.jsx)(t.code,{children:`Ref`}),`) или обычное значение.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Ref<T>`}),` — Реактивная переменная `,(0,c.jsx)(t.code,{children:`Ref`}),`, содержащая значение.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { toRefItem } from '@dxtmisha/functional'

const existingRef = ref(10)
const ordinaryValue = 20

const normalized1 = toRefItem(existingRef)   // Возвращает исходный ref
const normalized2 = toRefItem(ordinaryValue) // Возвращает новый ref(20)

console.log(normalized1.value) // 10
console.log(normalized2.value) // 20
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};