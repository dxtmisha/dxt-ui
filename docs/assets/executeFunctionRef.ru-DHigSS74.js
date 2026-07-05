import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Functions/executeFunctionRef - Разрешение функции и ссылки`}),`
`,(0,c.jsx)(n.h1,{id:`executefunctionref`,children:(0,c.jsx)(n.code,{children:`executeFunctionRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилитарная функция, которая выполняет аргумент, если он является функцией, и распаковывает полученную Vue-переменную `,(0,c.jsx)(n.code,{children:`Ref`}),`, если она реактивна. Если аргумент представляет собой реактивную ссылку `,(0,c.jsx)(n.code,{children:`Ref`}),` или обычное значение, она распаковывает или возвращает его напрямую. Это крайне полезно для получения конечного значения, которое может быть статическим, реактивным или динамически возвращаться функцией-геттером.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: RefOrNormalOrFunction<T>`}),` — Реактивная переменная (`,(0,c.jsx)(n.code,{children:`Ref`}),`), обычное значение или функция, возвращающая их.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T`}),` — Полностью разрешенное и распакованное значение.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { executeFunctionRef } from '@dxtmisha/functional'

const count = ref(10)
const normalValue = 20
const getter = () => ref(30)

console.log(executeFunctionRef(count))       // 10
console.log(executeFunctionRef(normalValue)) // 20
console.log(executeFunctionRef(getter))      // 30
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};