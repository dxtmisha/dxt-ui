import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/replaceRecursive - Рекурсивное слияние объектов или массивов`}),`
`,(0,c.jsx)(t.h1,{id:`replacerecursive`,children:(0,c.jsx)(t.code,{children:`replaceRecursive`})}),`
`,(0,c.jsxs)(t.p,{children:[`Выполняет глубокое (рекурсивное) слияние исходного объекта или массива с данными из объекта/массива замены. При включенном параметре `,(0,c.jsx)(t.code,{children:`isMerge`}),` массивы объединяются с удалением дубликатов, в противном случае массивы из замены перезаписывают исходные.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`array: ObjectItem<I>`}),` — Исходный массив или объект, элементы которого будут заменены/слиты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`replacement?: ObjectOrArray<I>`}),` — Массив или объект, из которого будут браться элементы для замены.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isMerge: boolean`}),` — Флаг слияния одноименных массивов (по умолчанию `,(0,c.jsx)(t.code,{children:`true`}),`). При `,(0,c.jsx)(t.code,{children:`false`}),` элементы просто перезаписываются.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`ObjectItem<I>`}),` — Новый объект или массив, являющийся результатом слияния. Исходный объект не мутирует.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { replaceRecursive } from '@dxtmisha/functional-basic'

const target = { a: [1, 2], b: { x: 1 } }
const source = { a: [2, 3], b: { y: 2 } }

console.log(replaceRecursive(target, source)) 
// { a: [1, 2, 3], b: { x: 1, y: 2 } }

console.log(replaceRecursive(target, source, false)) 
// { a: [2, 3], b: { x: 1, y: 2 } }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};