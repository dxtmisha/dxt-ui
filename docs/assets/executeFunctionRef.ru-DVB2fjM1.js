import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/executeFunctionRef - Разрешение функции и ссылки`}),`
`,(0,c.jsx)(t.h1,{id:`executefunctionref`,children:(0,c.jsx)(t.code,{children:`executeFunctionRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилитарная функция, которая выполняет аргумент, если он является функцией, и распаковывает полученную Vue-переменную `,(0,c.jsx)(t.code,{children:`Ref`}),`, если она реактивна. Если аргумент представляет собой реактивную ссылку `,(0,c.jsx)(t.code,{children:`Ref`}),` или обычное значение, она распаковывает или возвращает его напрямую. Это крайне полезно для получения конечного значения, которое может быть статическим, реактивным или динамически возвращаться функцией-геттером.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: RefOrNormalOrFunction<T>`}),` — Реактивная переменная (`,(0,c.jsx)(t.code,{children:`Ref`}),`), обычное значение или функция, возвращающая их.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`T`}),` — Полностью разрешенное и распакованное значение.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { executeFunctionRef } from '@dxtmisha/functional'

const count = ref(10)
const normalValue = 20
const getter = () => ref(30)

console.log(executeFunctionRef(count))       // 10
console.log(executeFunctionRef(normalValue)) // 20
console.log(executeFunctionRef(getter))      // 30
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};