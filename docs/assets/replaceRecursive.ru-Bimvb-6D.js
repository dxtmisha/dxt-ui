import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/replaceRecursive - Рекурсивное слияние объектов или массивов`}),`
`,(0,c.jsx)(t.h1,{id:`replacerecursive`,children:(0,c.jsx)(t.code,{children:`replaceRecursive`})}),`
`,(0,c.jsxs)(t.p,{children:[`Выполняет глубокое (рекурсивное) слияние целевого объекта с данными из объекта или массива замены. При включенном параметре `,(0,c.jsx)(t.code,{children:`isMerge`}),` (по умолчанию `,(0,c.jsx)(t.code,{children:`true`}),`) массивы по совпадающим ключам объединяются с удалением дубликатов через `,(0,c.jsx)(t.code,{children:`uniqueArray`}),`, в противном случае массивы из `,(0,c.jsx)(t.code,{children:`replacement`}),` перезаписывают исходные.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Включает встроенную защиту от `,(0,c.jsx)(t.strong,{children:`Prototype Pollution`}),` через `,(0,c.jsx)(t.code,{children:`isPrototypeKey`}),`, автоматически пропуская опасные ключи (`,(0,c.jsx)(t.code,{children:`__proto__`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`, `,(0,c.jsx)(t.code,{children:`prototype`}),`) при обходе.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`target: ObjectItem<I>`}),` — Целевой объект, элементы которого будут заменены или объединены.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`replacement?: ObjectOrArray<I>`}),` — Объект или массив, из которого будут браться элементы для замены.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isMerge?: boolean = true`}),` — Флаг слияния одноименных массивов (по умолчанию `,(0,c.jsx)(t.code,{children:`true`}),`). При `,(0,c.jsx)(t.code,{children:`false`}),` массивы из `,(0,c.jsx)(t.code,{children:`replacement`}),` полностью перезаписывают исходные.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`ObjectItem<I>`}),` — Новый объединенный объект без мутации исходного `,(0,c.jsx)(t.code,{children:`target`}),`. Если `,(0,c.jsx)(t.code,{children:`target`}),` не является объектом, возвращает копию `,(0,c.jsx)(t.code,{children:`replacement`}),` (если это объект) или `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { replaceRecursive } from '@dxtmisha/functional-basic'

const target = { a: [1, 2], b: { x: 1 } }
const source = { a: [2, 3], b: { y: 2 } }

console.log(replaceRecursive(target, source)) 
// { a: [1, 2, 3], b: { x: 1, y: 2 } }

console.log(replaceRecursive(target, source, false)) 
// { a: [2, 3], b: { x: 1, y: 2 } }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};