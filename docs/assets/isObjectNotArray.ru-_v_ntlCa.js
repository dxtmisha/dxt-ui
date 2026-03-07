import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(r){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/ru/functional-basic/Functions/isObjectNotArray - Проверка на строгий объект"}),`
`,e.jsx(n.h1,{id:"isobjectnotarray",children:e.jsx(n.code,{children:"isObjectNotArray"})}),`
`,e.jsxs(n.p,{children:["Выполняет расширенную проверку значения, чтобы убедиться, что оно является классическим объектом ",e.jsx(n.code,{children:"{}"})," (Record) и при этом ",e.jsx(n.strong,{children:"гарантированно не является массивом"}),"."]}),`
`,e.jsxs(n.p,{children:["Поскольку функция базовая утилита ",e.jsx(n.code,{children:"isObject"})," возвращает ",e.jsx(n.code,{children:"true"})," даже для массивов (согласно специфике типов JavaScript), данная функция решает эту проблему, комбинируя оригинальную логику ",e.jsx(n.code,{children:"isObject(value)"})," со строгой проверкой ",e.jsx(n.code,{children:"!Array.isArray(value)"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — Проверяемое значение."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"boolean"})," — Вернет ",e.jsx(n.code,{children:"true"})," исключительно для истинных объектов ",e.jsx(n.code,{children:"{ key: 'value' }"}),". Вернет ",e.jsx(n.code,{children:"false"})," для массивов ",e.jsx(n.code,{children:"[]"}),", null, функций и всех примитивных типов данных. Выступает в качестве защитника типа (type guard), извлекая тип формы объекта и исключая возможные массивы или пустые значения (null/undefined)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isObjectNotArray } from '@dxtmisha/functional-basic'

// Успешная валидация
console.log(isObjectNotArray({ id: 1, name: 'Test' })) // true

// Типичные сценарии, где функция отфильтрует "ненужные" объекты
console.log(isObjectNotArray([1, 2, 3])) // false (Защита от массивов работает!)
console.log(isObjectNotArray(null)) // false
console.log(isObjectNotArray('string')) // false
`})})]})}function x(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{x as default};
