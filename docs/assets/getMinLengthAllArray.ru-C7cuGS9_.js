import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getMinLengthAllArray - Минимальная длина в массиве`}),`
`,(0,c.jsx)(n.h1,{id:`getminlengthallarray`,children:(0,c.jsx)(n.code,{children:`getMinLengthAllArray`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилита, которая находит самую короткую строку в предоставленном массиве и возвращает её длину (число). Функция использует встроенный `,(0,c.jsx)(n.code,{children:`Math.min`}),` в сочетании с `,(0,c.jsx)(n.code,{children:`getLengthOfAllArray`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: ObjectOrArray<string>`}),` — Входной массив строк.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`number`}),` — Длина самой короткой строки массива. Если передан пустой массив, вернется `,(0,c.jsx)(n.code,{children:`Infinity`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getMinLengthAllArray } from '@dxtmisha/functional-basic'

const words = ['компьютер', 'код', 'программирование']
const minLength = getMinLengthAllArray(words)

console.log(minLength) // 3 ("код")
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};