import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/getObjectByKeys - Объект по списку ключей`}),`
`,(0,c.jsx)(n.h1,{id:`getobjectbykeys`,children:(0,c.jsx)(n.code,{children:`getObjectByKeys`})}),`
`,(0,c.jsxs)(n.p,{children:[`Создает и возвращает новый объект, в который копируются только свойства с указанными ключами из исходного объекта. Свойства, которых нет в исходном объекте или значение которых равно `,(0,c.jsx)(n.code,{children:`undefined`}),`, игнорируются при копировании.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: Record<string, any>`}),` — Исходный объект с данными.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`keys: string[]`}),` — Массив строковых ключей, которые необходимо извлечь.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`Record<string, any>`}),` — Новый объект, содержащий только найденные выбранные свойства. Одноименные значения, равные `,(0,c.jsx)(n.code,{children:`undefined`}),`, не попадут в результат.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getObjectByKeys } from '@dxtmisha/functional-basic'

const user = {
  id: 1,
  name: 'Ivan',
  role: 'admin',
  age: undefined, // undefined пропускаются
  active: true
}

const result = getObjectByKeys(user, ['id', 'name', 'age', 'token'])
console.log(result) // { id: 1, name: 'Ivan' }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};