import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/replaceRecursive - Рекурсивное слияние объектов или массивов`}),`
`,(0,c.jsx)(n.h1,{id:`replacerecursive`,children:(0,c.jsx)(n.code,{children:`replaceRecursive`})}),`
`,(0,c.jsxs)(n.p,{children:[`Выполняет глубокое (рекурсивное) слияние исходного объекта или массива с данными из объекта/массива замены. При включенном параметре `,(0,c.jsx)(n.code,{children:`isMerge`}),` массивы объединяются с удалением дубликатов, в противном случае массивы из замены перезаписывают исходные.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`array: ObjectItem<I>`}),` — Исходный массив или объект, элементы которого будут заменены/слиты.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replacement?: ObjectOrArray<I>`}),` — Массив или объект, из которого будут браться элементы для замены.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isMerge: boolean`}),` — Флаг слияния одноименных массивов (по умолчанию `,(0,c.jsx)(n.code,{children:`true`}),`). При `,(0,c.jsx)(n.code,{children:`false`}),` элементы просто перезаписываются.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`ObjectItem<I>`}),` — Новый объект или массив, являющийся результатом слияния. Исходный объект не мутирует.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { replaceRecursive } from '@dxtmisha/functional-basic'

const target = { a: [1, 2], b: { x: 1 } }
const source = { a: [2, 3], b: { y: 2 } }

console.log(replaceRecursive(target, source)) 
// { a: [1, 2, 3], b: { x: 1, y: 2 } }

console.log(replaceRecursive(target, source, false)) 
// { a: [2, 3], b: { x: 1, y: 2 } }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};