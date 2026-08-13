import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isDomData - Проверка среды на Data URL`}),`
`,(0,c.jsx)(t.h1,{id:`isdomdata`,children:(0,c.jsx)(t.code,{children:`isDomData`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита, проверяющая, выполняется ли текущий код в среде, где URL-адрес (`,(0,c.jsx)(t.code,{children:`location.href`}),`) начинается со схемы `,(0,c.jsx)(t.code,{children:`data:`}),`. Это часто бывает полезно для определения специфичных контекстов исполнения, таких как встроенные скрипты в data-URI или песочницы (iframes).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Параметры:`}),`
Функция не принимает аргументов.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Вернет `,(0,c.jsx)(t.code,{children:`true`}),`, если глобальный URL-адрес документа начинается с `,(0,c.jsx)(t.code,{children:`data:`}),`, и `,(0,c.jsx)(t.code,{children:`false`}),` в противном случае.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isDomData } from '@dxtmisha/functional-basic'

// Если код выполняется на странице 'https://example.com'
console.log(isDomData()) // false

// Если код встроен или запущен через 'data:text/html,...'
console.log(isDomData()) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};