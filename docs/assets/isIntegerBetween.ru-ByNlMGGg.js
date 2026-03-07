import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(r){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/ru/functional-basic/Functions/isIntegerBetween - Проверка вхождения в целочисленный интервал"}),`
`,e.jsx(n.h1,{id:"isintegerbetween",children:e.jsx(n.code,{children:"isIntegerBetween"})}),`
`,e.jsx(n.p,{children:"Проверяет, находится ли заданное число в пределах определенного целочисленного интервала."}),`
`,e.jsxs(n.p,{children:["Интервал определяется путем округления в меньшую сторону базового значения (",e.jsx(n.code,{children:"between"}),"). Функция вернет истину, если проверяемое число больше или равно нижней границе (целому числу), но строго меньше следующего целого числа."]}),`
`,e.jsxs(n.p,{children:["Формула: ",e.jsx(n.code,{children:"floor(between) <= value < floor(between) + 1"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: number"})," — Проверяемое число."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"between: number"})," — Базовое число, определяющее интервал после округления вниз."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"boolean"})," — ",e.jsx(n.code,{children:"true"}),", если число находится в заданном целочисленном диапазоне."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isIntegerBetween } from '@dxtmisha/functional-basic'

// Интервал [5, 6)
console.log(isIntegerBetween(5.2, 5.8)) // true (Math.floor(5.8) = 5)
console.log(isIntegerBetween(5.99, 5))  // true
console.log(isIntegerBetween(6, 5))     // false
`})})]})}function j(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{j as default};
