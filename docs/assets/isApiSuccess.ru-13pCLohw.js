import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isApiSuccess - Проверка успешности ответа API`}),`
`,(0,c.jsx)(t.h1,{id:`isapisuccess`,children:(0,c.jsx)(t.code,{children:`isApiSuccess`})}),`
`,(0,c.jsx)(t.p,{children:`Проверяет, является ли ответ API успешным.`}),`
`,(0,c.jsx)(t.p,{children:`Проверка выполняется по следующим правилам:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Если данные являются массивом, это считается успехом.`}),`
`,(0,c.jsxs)(t.li,{children:[`Если данные являются объектом, успех определяется полями `,(0,c.jsx)(t.code,{children:`status === 'success'`}),` или `,(0,c.jsx)(t.code,{children:`success === true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Если присутствует поле `,(0,c.jsx)(t.code,{children:`statusObject`}),`, успех определяется кодом статуса HTTP (начинается с 2).`]}),`
`,(0,c.jsx)(t.li,{children:`Если ни одно из полей не присутствует, успех определяется глобальным статусом API.`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ApiData<T>`}),` — данные ответа API.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если ответ успешен, иначе `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isApiSuccess } from '@dxtmisha/functional-basic'

console.log(isApiSuccess({ status: 'success' })) // true
console.log(isApiSuccess({ success: true })) // true
console.log(isApiSuccess([])) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};