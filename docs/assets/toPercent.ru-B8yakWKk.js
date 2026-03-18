import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(r){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/toPercent - Вычисление процента от значения"}),`
`,n.jsx(e.h1,{id:"topercent",children:n.jsx(e.code,{children:"toPercent"})}),`
`,n.jsx(e.p,{children:"Вычисляет долю текущего значения относительно максимального. Возвращает число в диапазоне от 0 до 1."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"maxValue: number"})," — Максимально возможное значение (100%)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: number"})," — Текущее значение."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"number"})," — Результат в виде десятичной дроби (например, ",n.jsx(e.code,{children:"0.5"})," для 50%)."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { toPercent } from '@dxtmisha/functional-basic'

console.log(toPercent(200, 100)) // 0.5
console.log(toPercent(100, 25)) // 0.25
`})})]})}function h(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{h as default};
