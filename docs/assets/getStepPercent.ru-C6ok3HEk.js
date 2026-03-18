import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/ru/functional-basic/Functions/getStepPercent - Вычисление шага в процентах"}),`
`,e.jsx(n.h1,{id:"getsteppercent",children:e.jsx(n.code,{children:"getStepPercent"})}),`
`,e.jsx(n.p,{children:"Вычисляет, какой процент от общего диапазона (между минимальным и максимальным значениями) составляет одна единица (или один шаг = 1). Функция полезна для позиционирования элементов слайдеров или прогресс-баров в процентах."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"min: number | undefined"})," — Минимальное значение диапазона. Если передано ",e.jsx(n.code,{children:"undefined"}),", будет использован ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max: number"})," — Максимальное значение диапазона."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"number"})," — Процент (от 0 до 100), который занимает один шаг. Если максимальное значение меньше или равно минимальному, функция вернет ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getStepPercent } from '@dxtmisha/functional-basic'

// Диапазон от 0 до 200, значит 1 шаг это 0.5%
console.log(getStepPercent(0, 200)) // 0.5

// Диапазон от 50 до 150 (разница 100), шаг = 1%
console.log(getStepPercent(50, 150)) // 1
`})})]})}function h(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{h as default};
