import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getObjectByKeys - Объект по списку ключей`}),`
`,(0,c.jsx)(t.h1,{id:`getobjectbykeys`,children:(0,c.jsx)(t.code,{children:`getObjectByKeys`})}),`
`,(0,c.jsxs)(t.p,{children:[`Создает и возвращает новый объект, в который копируются только собственные свойства (`,(0,c.jsx)(t.code,{children:`hasKey`}),`) с указанными ключами из исходного объекта. Ключи прототипа (`,(0,c.jsx)(t.code,{children:`__proto__`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`, `,(0,c.jsx)(t.code,{children:`prototype`}),`), отсутствующие свойства и свойства со значением `,(0,c.jsx)(t.code,{children:`undefined`}),` игнорируются при копировании.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: T`}),` — Исходный объект с данными (где `,(0,c.jsx)(t.code,{children:`T extends Record<string, unknown>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keys: K[]`}),` — Массив ключей, которые необходимо извлечь (где `,(0,c.jsx)(t.code,{children:`K extends keyof T`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Pick<T, K>`}),` — Новый объект, содержащий только найденные собственные свойства со значениями, отличными от `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getObjectByKeys } from '@dxtmisha/functional-basic'

const user = {
  id: 1,
  name: 'Ivan',
  role: 'admin',
  age: undefined, // undefined пропускаются
  active: true
}

const result = getObjectByKeys(user, ['id', 'name', 'age'])
console.log(result) // { id: 1, name: 'Ivan' }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};