import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional-basic/Functions/intersectKey - Пересечение объектов по ключам"}),`
`,n.jsx(e.h1,{id:"intersectkey",children:n.jsx(e.code,{children:"intersectKey"})}),`
`,n.jsxs(e.p,{children:["Анализирует два объекта (или массива) и возвращает новый объект, содержащий только те свойства из первого объекта, ключи которых присутствуют и во втором объекте. Значения для результирующего объекта берутся из исходного объекта (",n.jsx(e.code,{children:"data"}),")."]}),`
`,n.jsx(e.p,{children:"Функция полезна для фильтрации данных по разрешенному списку свойств или для синхронизации моделей."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: T"})," — Основной объект, из которого будут браться значения."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"comparison: C"})," — Объект, список ключей которого используется для проверки наличия."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"Record<KT & KC, T[KT]>"})," — Новый объект, в который скопированы только пересекающиеся свойства. Если аргументы не переданы или не являются объектами, вернет пустой объект ",n.jsx(e.code,{children:"{}"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { intersectKey } from '@dxtmisha/functional-basic'

const inputData = { id: 1, name: 'John', age: 30, _internalToken: 'xyz' }
const allowedSchema = { id: null, name: null, role: null }

// Возвратит только ключи из inputData, которые есть в allowedSchema
const result = intersectKey(inputData, allowedSchema)
console.log(result) // { id: 1, name: 'John' }
`})})]})}function x(t={}){const{wrapper:e}={...c(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{x as default};
