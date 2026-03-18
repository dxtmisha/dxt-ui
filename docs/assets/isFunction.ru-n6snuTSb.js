import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const o={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/isFunction - Проверка на функцию"}),`
`,n.jsx(o.h1,{id:"isfunction",children:n.jsx(o.code,{children:"isFunction"})}),`
`,n.jsx(o.p,{children:"Определяет, является ли переданное значение исполняемой функцией (включая стрелочные, асинхронные функции и функции-генераторы)."}),`
`,n.jsxs(o.p,{children:["Проверка осуществляется с использованием оператора ",n.jsx(o.code,{children:"instanceof Function"}),", а также запасной проверки ",n.jsx(o.code,{children:"typeof callback === 'function'"}),"."]}),`
`,n.jsx(o.p,{children:n.jsx(o.strong,{children:"Параметры:"})}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"callback: T"})," — Значение для проверки."]}),`
`]}),`
`,n.jsxs(o.p,{children:[n.jsx(o.strong,{children:"Возвращает:"}),`
`,n.jsx(o.code,{children:"boolean"})," — Вернет ",n.jsx(o.code,{children:"true"}),", если аргумент является функцией, и ",n.jsx(o.code,{children:"false"})," в противном случае. Также работает как защитник типа (type guard), сужая тип до ",n.jsx(o.code,{children:"FunctionArgs<any, any>"}),"."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-typescript",children:`import { isFunction } from '@dxtmisha/functional-basic'

const myLogger = () => console.log('Hi!')

console.log(isFunction(myLogger)) // true
console.log(isFunction({ myLogger })) // false
console.log(isFunction('myLogger')) // false
`})})]})}function x(e={}){const{wrapper:o}={...s(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(c,{...e})}):c(e)}export{x as default};
