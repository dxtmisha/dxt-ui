import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(e){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/inArray - Проверка наличия значения в массиве"}),`
`,n.jsx(r.h1,{id:"inarray",children:n.jsx(r.code,{children:"inArray"})}),`
`,n.jsx(r.p,{children:"Проверяет, есть ли значение в текущем массиве."}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Параметры:"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"array: T[]"})," — массив для проверки."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"value: T"})," — проверяемое значение."]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Возвращает:"}),`
`,n.jsx(r.code,{children:"boolean"})," — ",n.jsx(r.code,{children:"true"}),", если значение есть в массиве, иначе ",n.jsx(r.code,{children:"false"}),"."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { inArray } from '@dxtmisha/functional-basic'

const array = [1, 2, 3]
console.log(inArray(array, 2)) // true
console.log(inArray(array, 4)) // false
`})})]})}function h(e={}){const{wrapper:r}={...o(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{h as default};
