import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(r){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/ru/functional-basic/Functions/replaceRecursive - Рекурсивное слияние объектов или массивов"}),`
`,e.jsx(n.h1,{id:"replacerecursive",children:e.jsx(n.code,{children:"replaceRecursive"})}),`
`,e.jsxs(n.p,{children:["Выполняет глубокое (рекурсивное) слияние исходного объекта или массива с данными из объекта/массива замены. При включенном параметре ",e.jsx(n.code,{children:"isMerge"})," массивы объединяются с удалением дубликатов, в противном случае массивы из замены перезаписывают исходные."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"array: ObjectItem<I>"})," — Исходный массив или объект, элементы которого будут заменены/слиты."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replacement?: ObjectOrArray<I>"})," — Массив или объект, из которого будут браться элементы для замены."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isMerge: boolean"})," — Флаг слияния одноименных массивов (по умолчанию ",e.jsx(n.code,{children:"true"}),"). При ",e.jsx(n.code,{children:"false"})," элементы просто перезаписываются."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"ObjectItem<I>"})," — Новый объект или массив, являющийся результатом слияния. Исходный объект не мутирует."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { replaceRecursive } from '@dxtmisha/functional-basic'

const target = { a: [1, 2], b: { x: 1 } }
const source = { a: [2, 3], b: { y: 2 } }

console.log(replaceRecursive(target, source)) 
// { a: [1, 2, 3], b: { x: 1, y: 2 } }

console.log(replaceRecursive(target, source, false)) 
// { a: [2, 3], b: { x: 1, y: 2 } }
`})})]})}function j(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{j as default};
