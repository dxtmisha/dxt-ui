import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function e(o){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/ru/functional-basic/Functions/toArray - Преобразование значения в массив"}),`
`,n.jsx(r.h1,{id:"toarray",children:n.jsx(r.code,{children:"toArray"})}),`
`,n.jsx(r.p,{children:"Преобразует значение в массив. Если переданное значение уже является массивом, возвращается оно само. В противном случае значение оборачивается в массив."}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Параметры:"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"value: T"})," — Значение, которое необходимо преобразовать в массив."]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Возвращает:"}),`
`,n.jsx(r.code,{children:"T[]"})," — Массив, содержащий переданное значение."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { toArray } from '@dxtmisha/functional-basic'

console.log(toArray([1, 2, 3])) // [1, 2, 3]
console.log(toArray(1)) // [1]
`})})]})}function h(o={}){const{wrapper:r}={...t(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(e,{...o})}):e(o)}export{h as default};
