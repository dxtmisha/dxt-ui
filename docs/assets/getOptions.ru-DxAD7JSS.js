import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/getOptions - Получение опций запроса`}),`
`,(0,c.jsx)(t.h1,{id:`getoptions`,children:(0,c.jsx)(t.code,{children:`getOptions`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает опции запроса. Если переданная опция является строкой, возвращается объект с полем `,(0,c.jsx)(t.code,{children:`method`}),`, равным этой строке. Если передан объект, возвращается он сам. Если параметр не передан, возвращается пустой объект.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ApiOptions`}),` — Опции запроса или строка с методом.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`RefOrNormal<ApiFetch>`}),` — Опции для запроса `,(0,c.jsx)(t.code,{children:`ApiFetch`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getOptions } from '@dxtmisha/functional'

console.log(getOptions('POST')) // { method: 'POST' }
console.log(getOptions({ method: 'GET', cache: true })) // { method: 'GET', cache: true }
console.log(getOptions()) // {}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};