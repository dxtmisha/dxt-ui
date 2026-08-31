import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/toNumberPositive - Преобразование в конечное положительное число`}),`
`,(0,c.jsx)(t.h1,{id:`tonumberpositive`,children:(0,c.jsx)(t.code,{children:`toNumberPositive`})}),`
`,(0,c.jsxs)(t.p,{children:[`Преобразует входное значение в конечное положительное число (`,(0,c.jsx)(t.code,{children:`> 0`}),`). Если значение не является валидным положительным числом, возвращает значение по умолчанию (по умолчанию `,(0,c.jsx)(t.code,{children:`0`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: number | string | null`}),` — Входное значение для преобразования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue: number = 0`}),` — Значение по умолчанию, если преобразование невозможно или число не является положительным.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`number`}),` — Положительное число (`,(0,c.jsx)(t.code,{children:`> 0`}),`) или значение по умолчанию.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toNumberPositive } from '@dxtmisha/functional-basic'

console.log(toNumberPositive(15)) // 15
console.log(toNumberPositive('10')) // 10
console.log(toNumberPositive(-5)) // 0
console.log(toNumberPositive('invalid', 1)) // 1
console.log(toNumberPositive(undefined, 1)) // 1
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};