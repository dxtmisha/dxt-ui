import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/getStepPercent - Вычисление шага в процентах`}),`
`,(0,c.jsx)(n.h1,{id:`getsteppercent`,children:(0,c.jsx)(n.code,{children:`getStepPercent`})}),`
`,(0,c.jsx)(n.p,{children:`Вычисляет, какой процент от общего диапазона (между минимальным и максимальным значениями) составляет одна единица (или один шаг = 1). Функция полезна для позиционирования элементов слайдеров или прогресс-баров в процентах.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min: number | undefined`}),` — Минимальное значение диапазона. Если передано `,(0,c.jsx)(n.code,{children:`undefined`}),`, будет использован `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`max: number`}),` — Максимальное значение диапазона.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`number`}),` — Процент (от 0 до 100), который занимает один шаг. Если максимальное значение меньше или равно минимальному, функция вернет `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getStepPercent } from '@dxtmisha/functional-basic'

// Диапазон от 0 до 200, значит 1 шаг это 0.5%
console.log(getStepPercent(0, 200)) // 0.5

// Диапазон от 50 до 150 (разница 100), шаг = 1%
console.log(getStepPercent(50, 150)) // 1
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};