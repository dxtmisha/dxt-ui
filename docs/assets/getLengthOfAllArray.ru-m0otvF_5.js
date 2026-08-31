import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getLengthOfAllArray - Длины всех элементов массива`}),`
`,(0,c.jsx)(t.h1,{id:`getlengthofallarray`,children:(0,c.jsx)(t.code,{children:`getLengthOfAllArray`})}),`
`,(0,c.jsxs)(t.p,{children:[`Создает и возвращает новый массив, состоящий из длин (свойство `,(0,c.jsx)(t.code,{children:`.length`}),`) всех элементов переданного массива строк.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: ObjectOrArray<string>`}),` — Входной массив строк. Если передана одиночная строка, она будет обработана как массив из одного элемента.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`number[]`}),` — Массив чисел, где каждое число соответствует длине строки исходного массива на той же позиции.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getLengthOfAllArray } from '@dxtmisha/functional-basic'

const data = ['красный', 'синий', 'зеленый']
const lengths = getLengthOfAllArray(data)

console.log(lengths) // [7, 5, 7]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};