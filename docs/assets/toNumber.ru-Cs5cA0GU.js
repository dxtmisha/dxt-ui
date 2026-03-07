import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(o){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/ru/functional-basic/Functions/toNumber - Преобразование значения в число"}),`
`,n.jsx(e.h1,{id:"tonumber",children:n.jsx(e.code,{children:"toNumber"})}),`
`,n.jsx(e.p,{children:"Извлекает числовое значение из строки или числа. Функция удаляет лишние символы и корректно обрабатывает различные разделители тысяч и дробной части (пробелы, запятые, точки)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: T"})," — Входное значение (строка или число)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"number"})," — Преобразованное число типа float. Если значение пустое или невалидное, возвращается ",n.jsx(e.code,{children:"0"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { toNumber } from '@dxtmisha/functional-basic'

console.log(toNumber('1 250,50')) // 1250.5
console.log(toNumber('1,000,000.99')) // 1000000.99
console.log(toNumber('abc-12.5')) // 12.5
`})})]})}function x(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{x as default};
