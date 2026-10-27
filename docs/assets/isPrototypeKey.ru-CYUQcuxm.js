import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isPrototypeKey - Проверка ключей загрязнения прототипа`}),`
`,(0,c.jsx)(t.h1,{id:`isprototypekey`,children:(0,c.jsx)(t.code,{children:`isPrototypeKey`})}),`
`,(0,c.jsxs)(t.p,{children:[`Проверяет, относится ли переданный ключ свойства к потенциально опасным ключам `,(0,c.jsx)(t.strong,{children:`Prototype Pollution`}),` (`,(0,c.jsx)(t.code,{children:`__proto__`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`, `,(0,c.jsx)(t.code,{children:`prototype`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`Используется для защиты объектов от модификации цепочки прототипов при рекурсивном слиянии, динамической установке свойств в DOM-элементы или разборе внешних структур данных.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: unknown`}),` — проверяемый ключ свойства.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если ключ равен `,(0,c.jsx)(t.code,{children:`'__proto__'`}),`, `,(0,c.jsx)(t.code,{children:`'constructor'`}),` или `,(0,c.jsx)(t.code,{children:`'prototype'`}),`, иначе `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isPrototypeKey } from '@dxtmisha/functional-basic'

isPrototypeKey('__proto__') // true
isPrototypeKey('constructor') // true
isPrototypeKey('prototype') // true

isPrototypeKey('id') // false
isPrototypeKey('toString') // false
isPrototypeKey(123) // false

// Пример безопасного назначения свойств:
function safeSet(target: Record<string, unknown>, key: string, value: unknown) {
  if (isPrototypeKey(key)) {
    return
  }

  target[key] = value
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};