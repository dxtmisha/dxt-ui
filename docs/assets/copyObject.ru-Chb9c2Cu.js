import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(o){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/copyObject - Копирование объекта"}),`
`,n.jsx(e.h1,{id:"copyobject",children:n.jsx(e.code,{children:"copyObject"})}),`
`,n.jsx(e.p,{children:"Создает глубокую копию (deep copy) объектов и массивов, содержащих базовые типы данных."}),`
`,n.jsxs(e.p,{children:["Это полезно, когда нужно избежать мутаций исходного состояния. Однако следует помнить, что утилита не копирует функции, символы, значения ",n.jsx(e.code,{children:"undefined"})," и не может обработать циклические ссылки (внутри используется ",n.jsx(e.code,{children:"JSON.parse(JSON.stringify(value))"}),")."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: T"})," — Объект или значение, которое необходимо скопировать."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"T"})," — Новая копия объекта."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { copyObject } from '@dxtmisha/functional-basic'

const original = { name: 'John', details: { age: 30 } }
const copy = copyObject(original)

copy.details.age = 31

console.log(original.details.age) // 30 (исходный объект не изменился)
console.log(copy.details.age) // 31
`})})]})}function j(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(c,{...o})}):c(o)}export{j as default};
