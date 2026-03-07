import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(e){const o={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/transformation - Преобразование строки в тип данных"}),`
`,n.jsx(o.h1,{id:"transformation",children:n.jsx(o.code,{children:"transformation"})}),`
`,n.jsxs(o.p,{children:["Преобразует строковое значение в соответствующий ему тип данных (логический, числовой, объектный или ",n.jsx(o.code,{children:"null"}),"/",n.jsx(o.code,{children:"undefined"}),"). Если включен флаг ",n.jsx(o.code,{children:"isFunction"}),", проверяет наличие функции с таким именем в глобальном объекте ",n.jsx(o.code,{children:"window"}),"."]}),`
`,n.jsx(o.p,{children:n.jsx(o.strong,{children:"Параметры:"})}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"value: any"})," — Значение для преобразования."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"isFunction: boolean"})," — Флаг поиска функции в ",n.jsx(o.code,{children:"window"})," (по умолчанию ",n.jsx(o.code,{children:"false"}),")."]}),`
`]}),`
`,n.jsxs(o.p,{children:[n.jsx(o.strong,{children:"Возвращает:"}),`
`,n.jsx(o.code,{children:"any"})," — Преобразованное значение."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-typescript",children:`import { transformation } from '@dxtmisha/functional-basic'

console.log(transformation('true')) // true
console.log(transformation('12.5')) // 12.5
console.log(transformation('{"a":1}')) // { a: 1 }
console.log(transformation('null')) // null
`})})]})}function h(e={}){const{wrapper:o}={...s(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(r,{...e})}):r(e)}export{h as default};
