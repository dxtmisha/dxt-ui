import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as l}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/functional-basic/Functions/getLengthOfAllArray - Длины всех элементов массива"}),`
`,n.jsx(e.h1,{id:"getlengthofallarray",children:n.jsx(e.code,{children:"getLengthOfAllArray"})}),`
`,n.jsxs(e.p,{children:["Создает и возвращает новый массив, состоящий из длин (свойство ",n.jsx(e.code,{children:".length"}),") всех элементов переданного массива строк."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: ObjectOrArray<string>"})," — Входной массив строк. Если передана одиночная строка, она будет обработана как массив из одного элемента."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"number[]"})," — Массив чисел, где каждое число соответствует длине строки исходного массива на той же позиции."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getLengthOfAllArray } from '@dxtmisha/functional-basic'

const data = ['красный', 'синий', 'зеленый']
const lengths = getLengthOfAllArray(data)

console.log(lengths) // [7, 5, 7]
`})})]})}function x(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{x as default};
