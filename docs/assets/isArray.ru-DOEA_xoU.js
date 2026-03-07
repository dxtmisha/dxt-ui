import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(e){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/isArray - Проверка на массив"}),`
`,n.jsx(r.h1,{id:"isarray",children:n.jsx(r.code,{children:"isArray"})}),`
`,n.jsx(r.p,{children:"Проверяет, являются ли значения массивами."}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Параметры:"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"value: T"})," — входное значение."]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Возвращает:"}),`
`,n.jsx(r.code,{children:"boolean"})," — ",n.jsx(r.code,{children:"true"}),", если значение является массивом, иначе ",n.jsx(r.code,{children:"false"}),"."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { isArray } from '@dxtmisha/functional-basic'

console.log(isArray([1, 2, 3])) // true
console.log(isArray({})) // false
`})})]})}function h(e={}){const{wrapper:r}={...o(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{h as default};
