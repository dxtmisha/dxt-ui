import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(c){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/isObject - Проверка на объект"}),`
`,e.jsx(n.h1,{id:"isobject",children:e.jsx(n.code,{children:"isObject"})}),`
`,e.jsx(n.p,{children:"Базовая утилита, предназначенная для быстрой и безопасной проверки того, является ли значение истинно объектом."}),`
`,e.jsxs(n.p,{children:["В JavaScript определение типов работает с нюансами: оператор ",e.jsx(n.code,{children:"typeof null"})," возвращает строку ",e.jsx(n.code,{children:"'object'"}),", что зачастую ведет к скрытым ошибкам. Эта функция обходит эту проблему, предварительно проверяя значение на truthiness (",e.jsx(n.code,{children:"Boolean(value)"}),"), чтобы навсегда отсечь ",e.jsx(n.code,{children:"null"})," и другие ложные идентификаторы, после чего проводит строгую проверку типа. Обратите внимание, что массивы (",e.jsx(n.code,{children:"[]"}),") в JavaScript также являются объектами и поэтому дадут результат ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — Проверяемое значение."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"boolean"})," — Вернет ",e.jsx(n.code,{children:"true"}),", когда значение является экземпляром объекта (в том числе массивом). Вернет ",e.jsx(n.code,{children:"false"})," для любых примитивов, ",e.jsx(n.code,{children:"null"}),", ",e.jsx(n.code,{children:"undefined"})," и функций. Выступает в качестве защитника типа (type guard), сужая тип до ",e.jsx(n.code,{children:"Record<any, any>"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isObject } from '@dxtmisha/functional-basic'

console.log(isObject({ id: 1 })) // true
console.log(isObject([1, 2, 3])) // true (Массивы в JS - это технически объекты!)

// Строгая проверка исключает сюрпризы JS
console.log(isObject(null)) // false
console.log(isObject(100)) // false
console.log(isObject('string')) // false
`})})]})}function a(c={}){const{wrapper:n}={...o(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(s,{...c})}):s(c)}export{a as default};
