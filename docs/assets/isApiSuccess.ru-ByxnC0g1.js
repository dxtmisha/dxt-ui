import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/isApiSuccess - Проверка успешности ответа API`}),`
`,(0,c.jsx)(n.h1,{id:`isapisuccess`,children:(0,c.jsx)(n.code,{children:`isApiSuccess`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, является ли ответ API успешным.`}),`
`,(0,c.jsx)(n.p,{children:`Проверка выполняется по следующим правилам:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Если данные являются массивом, это считается успехом.`}),`
`,(0,c.jsxs)(n.li,{children:[`Если данные являются объектом, успех определяется полями `,(0,c.jsx)(n.code,{children:`status === 'success'`}),` или `,(0,c.jsx)(n.code,{children:`success === true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Если присутствует поле `,(0,c.jsx)(n.code,{children:`statusObject`}),`, успех определяется кодом статуса HTTP (начинается с 2).`]}),`
`,(0,c.jsx)(n.li,{children:`Если ни одно из полей не присутствует, успех определяется глобальным статусом API.`}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: ApiData<T>`}),` — данные ответа API.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если ответ успешен, иначе `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isApiSuccess } from '@dxtmisha/functional-basic'

console.log(isApiSuccess({ status: 'success' })) // true
console.log(isApiSuccess({ success: true })) // true
console.log(isApiSuccess([])) // true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};