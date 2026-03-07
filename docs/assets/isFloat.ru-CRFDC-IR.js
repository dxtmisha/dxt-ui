import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(o){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/isFloat - Проверка на число или дробное число"}),`
`,n.jsx(e.h1,{id:"isfloat",children:n.jsx(e.code,{children:"isFloat"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли значение числом или дробным числом."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: any"})," — значения для проверки."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"boolean"})," — ",n.jsx(e.code,{children:"true"}),", если значение является числом или строковым представлением числа, иначе ",n.jsx(e.code,{children:"false"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { isFloat } from '@dxtmisha/functional-basic'

console.log(isFloat(123)) // true
console.log(isFloat('123.45')) // true
console.log(isFloat('abc')) // false
`})})]})}function h(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{h as default};
