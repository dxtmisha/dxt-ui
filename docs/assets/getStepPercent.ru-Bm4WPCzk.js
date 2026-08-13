import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getStepPercent - Вычисление шага в процентах`}),`
`,(0,c.jsx)(t.h1,{id:`getsteppercent`,children:(0,c.jsx)(t.code,{children:`getStepPercent`})}),`
`,(0,c.jsx)(t.p,{children:`Вычисляет, какой процент от общего диапазона (между минимальным и максимальным значениями) составляет одна единица (или один шаг = 1). Функция полезна для позиционирования элементов слайдеров или прогресс-баров в процентах.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min: number | undefined`}),` — Минимальное значение диапазона. Если передано `,(0,c.jsx)(t.code,{children:`undefined`}),`, будет использован `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max: number`}),` — Максимальное значение диапазона.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`number`}),` — Процент (от 0 до 100), который занимает один шаг. Если максимальное значение меньше или равно минимальному, функция вернет `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getStepPercent } from '@dxtmisha/functional-basic'

// Диапазон от 0 до 200, значит 1 шаг это 0.5%
console.log(getStepPercent(0, 200)) // 0.5

// Диапазон от 50 до 150 (разница 100), шаг = 1%
console.log(getStepPercent(50, 150)) // 1
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};