import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/toPercent - Вычисление процента от значения`}),`
`,(0,c.jsx)(t.h1,{id:`topercent`,children:(0,c.jsx)(t.code,{children:`toPercent`})}),`
`,(0,c.jsx)(t.p,{children:`Вычисляет долю текущего значения относительно максимального. Возвращает число в диапазоне от 0 до 1.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxValue: number`}),` — Максимально возможное значение (100%).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — Текущее значение.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`number`}),` — Результат в виде десятичной дроби (например, `,(0,c.jsx)(t.code,{children:`0.5`}),` для 50%).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toPercent } from '@dxtmisha/functional-basic'

console.log(toPercent(200, 100)) // 0.5
console.log(toPercent(100, 25)) // 0.25
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};