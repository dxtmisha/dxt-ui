import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/hasKey - Проверка наличия собственного ключа в объекте`}),`
`,(0,c.jsx)(t.h1,{id:`haskey`,children:(0,c.jsx)(t.code,{children:`hasKey`})}),`
`,(0,c.jsxs)(t.p,{children:[`Проверяет, является ли указанное свойство собственным свойством объекта или функции, используя безопасный вызов `,(0,c.jsx)(t.code,{children:`Object.prototype.hasOwnProperty.call`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Функция обеспечивает защиту от `,(0,c.jsx)(t.strong,{children:`Prototype Pollution`}),` и исключает ложные срабатывания на свойства из цепочки прототипов (такие как `,(0,c.jsx)(t.code,{children:`toString`}),`, `,(0,c.jsx)(t.code,{children:`valueOf`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`, `,(0,c.jsx)(t.code,{children:`__proto__`}),`, `,(0,c.jsx)(t.code,{children:`hasOwnProperty`}),`). Безопасна для работы с `,(0,c.jsx)(t.code,{children:`null`}),`, `,(0,c.jsx)(t.code,{children:`undefined`}),`, примитивами и словарями без прототипа (`,(0,c.jsx)(t.code,{children:`Object.create(null)`}),`). В среде TypeScript выступает в качестве защитника типа (type guard), автоматически сужая тип объекта.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`object: unknown`}),` — проверяемый объект, функция или значение любого типа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: K`}),` — ключ свойства (`,(0,c.jsx)(t.code,{children:`K extends PropertyKey`}),`: `,(0,c.jsx)(t.code,{children:`string | number | symbol`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` (`,(0,c.jsx)(t.code,{children:`object is T & Record<K, unknown>`}),`) — `,(0,c.jsx)(t.code,{children:`true`}),`, если свойство существует и принадлежит непосредственно данному объекту (собственное свойство), иначе `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { hasKey } from '@dxtmisha/functional-basic'

const user = { name: 'Alice', age: 30 }
console.log(hasKey(user, 'name')) // true
console.log(hasKey(user, 'email')) // false

// Защита от prototype pollution:
console.log(hasKey({}, 'toString')) // false
console.log(hasKey({ toString: 'custom' }, 'toString')) // true

// Безопасность при работе с null, undefined и примитивами:
console.log(hasKey(null, 'foo')) // false
console.log(hasKey(123, 'foo')) // false

// Работа со словарями без прототипа (Object.create(null)):
const dict = Object.create(null)
dict.item = 'value'
console.log(hasKey(dict, 'item')) // true
console.log(hasKey(dict, 'toString')) // false

// Сужение типов в TypeScript (Type Guard):
const data: unknown = { id: 1, title: 'DXT' }
if (hasKey(data, 'title')) {
  console.log(data.title) // data гарантированно содержит свойство title
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};