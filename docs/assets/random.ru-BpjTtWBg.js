import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(r){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/random - Генерация случайного числа"}),`
`,n.jsx(e.h1,{id:"random",children:n.jsx(e.code,{children:"random"})}),`
`,n.jsxs(e.p,{children:["Генерирует и возвращает случайное целое число в заданном диапазоне от ",n.jsx(e.code,{children:"min"})," до ",n.jsx(e.code,{children:"max"})," (включительно)."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"min: number"})," — Наименьшее возможное значение."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"max: number"})," — Наибольшее возможное значение."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"number"})," — Случайное целое число."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { random } from '@dxtmisha/functional-basic'

console.log(random(1, 10)) // например, 7
console.log(random(50, 100)) // например, 84
`})})]})}function a(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{a as default};
