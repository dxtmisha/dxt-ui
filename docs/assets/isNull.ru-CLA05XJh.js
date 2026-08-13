import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isNull - Проверка на null или undefined`}),`
`,(0,c.jsx)(t.h1,{id:`isnull`,children:(0,c.jsx)(t.code,{children:`isNull`})}),`
`,(0,c.jsxs)(t.p,{children:[`Конкретная и строгая проверка значения на соответствие исключительно `,(0,c.jsx)(t.code,{children:`null`}),` или `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`В отличие от обычной проверки `,(0,c.jsx)(t.code,{children:`!value`}),` (где строка `,(0,c.jsx)(t.code,{children:`''`}),`, число `,(0,c.jsx)(t.code,{children:`0`}),` и булево `,(0,c.jsx)(t.code,{children:`false`}),` также приведут к прохождению условия), эта функция отфильтрует все ложные (falsy) значения и оставит только те, которые фактически не определены.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Любое проверяемое значение.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(t.code,{children:`true`}),`, если переменная равна `,(0,c.jsx)(t.code,{children:`null`}),` либо `,(0,c.jsx)(t.code,{children:`undefined`}),`. Функция также выступает как type guard TypeScript, сужающий тип переменной до `,(0,c.jsx)(t.code,{children:`Undefined`}),` (`,(0,c.jsx)(t.code,{children:`null | undefined`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isNull } from '@dxtmisha/functional-basic'

console.log(isNull(null)) // true
console.log(isNull(undefined)) // true

// Другие falsy значения возвращают false
console.log(isNull(0)) // false
console.log(isNull('')) // false
console.log(isNull(false)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};