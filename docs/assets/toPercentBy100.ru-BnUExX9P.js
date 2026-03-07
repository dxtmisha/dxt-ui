import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/toPercentBy100 - Преобразование значения в проценты (от 0 до 100)"}),`
`,n.jsx(e.h1,{id:"topercentby100",children:n.jsx(e.code,{children:"toPercentBy100"})}),`
`,n.jsx(e.p,{children:"Вычисляет процентное значение текущего числа относительно максимального в классическом формате (от 0 до 100)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"maxValue: number"})," — Максимально возможное значение."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: number"})," — Текущее значение."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"number"})," — Числовое значение процента."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { toPercentBy100 } from '@dxtmisha/functional-basic'

console.log(toPercentBy100(200, 100)) // 50
console.log(toPercentBy100(1000, 10)) // 1
`})})]})}function a(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{a as default};
