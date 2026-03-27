import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/isDomData - Проверка среды на Data URL`}),`
`,(0,c.jsx)(n.h1,{id:`isdomdata`,children:(0,c.jsx)(n.code,{children:`isDomData`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилита, проверяющая, выполняется ли текущий код в среде, где URL-адрес (`,(0,c.jsx)(n.code,{children:`location.href`}),`) начинается со схемы `,(0,c.jsx)(n.code,{children:`data:`}),`. Это часто бывает полезно для определения специфичных контекстов исполнения, таких как встроенные скрипты в data-URI или песочницы (iframes).`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),`
Функция не принимает аргументов.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(n.code,{children:`true`}),`, если глобальный URL-адрес документа начинается с `,(0,c.jsx)(n.code,{children:`data:`}),`, и `,(0,c.jsx)(n.code,{children:`false`}),` в противном случае.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isDomData } from '@dxtmisha/functional-basic'

// Если код выполняется на странице 'https://example.com'
console.log(isDomData()) // false

// Если код встроен или запущен через 'data:text/html,...'
console.log(isDomData()) // true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};