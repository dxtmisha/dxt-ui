import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(r){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/getMaxLengthAllArray - Максимальная длина в массиве"}),`
`,n.jsx(e.h1,{id:"getmaxlengthallarray",children:n.jsx(e.code,{children:"getMaxLengthAllArray"})}),`
`,n.jsxs(e.p,{children:["Утилита, которая находит самую длинную строку в предоставленном массиве и возвращает её длину (число). Функция использует встроенный ",n.jsx(e.code,{children:"Math.max"})," в сочетании с ",n.jsx(e.code,{children:"getLengthOfAllArray"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: ObjectOrArray<string>"})," — Входной массив строк."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"number"})," — Длина самой длинной строки массива. Если передан пустой массив, вернется ",n.jsx(e.code,{children:"-Infinity"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getMaxLengthAllArray } from '@dxtmisha/functional-basic'

const phrases = ['Привет', 'Доброе утро', 'Здравствуйте']
const maxLength = getMaxLengthAllArray(phrases)

console.log(maxLength) // 12 ("Здравствуйте")
`})})]})}function d(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{d as default};
