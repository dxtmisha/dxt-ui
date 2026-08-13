import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getObjectByKeys - Объект по списку ключей`}),`
`,(0,c.jsx)(t.h1,{id:`getobjectbykeys`,children:(0,c.jsx)(t.code,{children:`getObjectByKeys`})}),`
`,(0,c.jsxs)(t.p,{children:[`Создает и возвращает новый объект, в который копируются только свойства с указанными ключами из исходного объекта. Свойства, которых нет в исходном объекте или значение которых равно `,(0,c.jsx)(t.code,{children:`undefined`}),`, игнорируются при копировании.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: Record<string, any>`}),` — Исходный объект с данными.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keys: string[]`}),` — Массив строковых ключей, которые необходимо извлечь.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Record<string, any>`}),` — Новый объект, содержащий только найденные выбранные свойства. Одноименные значения, равные `,(0,c.jsx)(t.code,{children:`undefined`}),`, не попадут в результат.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getObjectByKeys } from '@dxtmisha/functional-basic'

const user = {
  id: 1,
  name: 'Ivan',
  role: 'admin',
  age: undefined, // undefined пропускаются
  active: true
}

const result = getObjectByKeys(user, ['id', 'name', 'age', 'token'])
console.log(result) // { id: 1, name: 'Ivan' }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};