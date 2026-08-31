import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/intersectKey - Пересечение объектов по ключам`}),`
`,(0,c.jsx)(t.h1,{id:`intersectkey`,children:(0,c.jsx)(t.code,{children:`intersectKey`})}),`
`,(0,c.jsxs)(t.p,{children:[`Анализирует два объекта (или массива) и возвращает новый объект, содержащий только те свойства из первого объекта, ключи которых присутствуют и во втором объекте. Значения для результирующего объекта берутся из исходного объекта (`,(0,c.jsx)(t.code,{children:`data`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`Функция полезна для фильтрации данных по разрешенному списку свойств или для синхронизации моделей.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: T`}),` — Основной объект, из которого будут браться значения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`comparison: C`}),` — Объект, список ключей которого используется для проверки наличия.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Record<KT & KC, T[KT]>`}),` — Новый объект, в который скопированы только пересекающиеся свойства. Если аргументы не переданы или не являются объектами, вернет пустой объект `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { intersectKey } from '@dxtmisha/functional-basic'

const inputData = { id: 1, name: 'John', age: 30, _internalToken: 'xyz' }
const allowedSchema = { id: null, name: null, role: null }

// Возвратит только ключи из inputData, которые есть в allowedSchema
const result = intersectKey(inputData, allowedSchema)
console.log(result) // { id: 1, name: 'John' }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};