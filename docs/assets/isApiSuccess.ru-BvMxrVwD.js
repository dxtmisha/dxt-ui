import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isApiSuccess - Проверка успешности ответа API`}),`
`,(0,c.jsx)(t.h1,{id:`isapisuccess`,children:(0,c.jsx)(t.code,{children:`isApiSuccess`})}),`
`,(0,c.jsx)(t.p,{children:`Проверяет, является ли ответ API успешным.`}),`
`,(0,c.jsx)(t.p,{children:`Проверка выполняется по следующим правилам с учетом строгого приоритета:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Если данные являются массивом, это считается успехом (`,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Если данные не переданы (`,(0,c.jsx)(t.code,{children:`null`}),`, `,(0,c.jsx)(t.code,{children:`undefined`}),`) или не являются объектом, возвращается `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Приоритет явных ошибок:`}),` Если присутствуют флаги `,(0,c.jsx)(t.code,{children:`success === false`}),`, `,(0,c.jsx)(t.code,{children:`status === 'error'`}),`, `,(0,c.jsx)(t.code,{children:`status === 'warning'`}),` или объект `,(0,c.jsx)(t.code,{children:`errorObject`}),`, функция возвращает `,(0,c.jsx)(t.code,{children:`false`}),` (даже если HTTP-статус равен 200).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Если указаны явные флаги успеха `,(0,c.jsx)(t.code,{children:`status === 'success'`}),` или `,(0,c.jsx)(t.code,{children:`success === true`}),`, возвращается `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Если присутствует объект `,(0,c.jsx)(t.code,{children:`statusObject`}),`, успех определяется кодом HTTP-статуса (диапазон 2xx: от 200 до 299).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Если ни одно из статусных полей не присутствует в объекте, успех определяется глобальным статусом API (`,(0,c.jsx)(t.code,{children:`Api.getStatus().getStatus()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data?: ApiData<T>`}),` — данные ответа API (объект или массив).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если ответ успешен, иначе `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isApiSuccess } from '@dxtmisha/functional-basic'

// Массивы и явный успех
console.log(isApiSuccess([])) // true
console.log(isApiSuccess({ status: 'success' })) // true
console.log(isApiSuccess({ success: true })) // true

// Успешный HTTP-статус 2xx в statusObject
console.log(isApiSuccess({ statusObject: { status: 200 } })) // true

// Приоритет ошибки над кодом HTTP 200
console.log(isApiSuccess({ success: false, statusObject: { status: 200 } })) // false
console.log(isApiSuccess({ status: 'error', statusObject: { status: 200 } })) // false

// Некорректные значения
console.log(isApiSuccess(null)) // false
console.log(isApiSuccess(undefined)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};