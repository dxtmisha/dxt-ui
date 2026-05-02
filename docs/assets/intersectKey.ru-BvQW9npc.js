import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/intersectKey - Пересечение объектов по ключам`}),`
`,(0,c.jsx)(n.h1,{id:`intersectkey`,children:(0,c.jsx)(n.code,{children:`intersectKey`})}),`
`,(0,c.jsxs)(n.p,{children:[`Анализирует два объекта (или массива) и возвращает новый объект, содержащий только те свойства из первого объекта, ключи которых присутствуют и во втором объекте. Значения для результирующего объекта берутся из исходного объекта (`,(0,c.jsx)(n.code,{children:`data`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:`Функция полезна для фильтрации данных по разрешенному списку свойств или для синхронизации моделей.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: T`}),` — Основной объект, из которого будут браться значения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison: C`}),` — Объект, список ключей которого используется для проверки наличия.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`Record<KT & KC, T[KT]>`}),` — Новый объект, в который скопированы только пересекающиеся свойства. Если аргументы не переданы или не являются объектами, вернет пустой объект `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { intersectKey } from '@dxtmisha/functional-basic'

const inputData = { id: 1, name: 'John', age: 30, _internalToken: 'xyz' }
const allowedSchema = { id: null, name: null, role: null }

// Возвратит только ключи из inputData, которые есть в allowedSchema
const result = intersectKey(inputData, allowedSchema)
console.log(result) // { id: 1, name: 'John' }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};