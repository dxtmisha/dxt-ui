import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getLengthOfAllArray - Длины всех элементов массива`}),`
`,(0,c.jsx)(n.h1,{id:`getlengthofallarray`,children:(0,c.jsx)(n.code,{children:`getLengthOfAllArray`})}),`
`,(0,c.jsxs)(n.p,{children:[`Создает и возвращает новый массив, состоящий из длин (свойство `,(0,c.jsx)(n.code,{children:`.length`}),`) всех элементов переданного массива строк.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: ObjectOrArray<string>`}),` — Входной массив строк. Если передана одиночная строка, она будет обработана как массив из одного элемента.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`number[]`}),` — Массив чисел, где каждое число соответствует длине строки исходного массива на той же позиции.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getLengthOfAllArray } from '@dxtmisha/functional-basic'

const data = ['красный', 'синий', 'зеленый']
const lengths = getLengthOfAllArray(data)

console.log(lengths) // [7, 5, 7]
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};