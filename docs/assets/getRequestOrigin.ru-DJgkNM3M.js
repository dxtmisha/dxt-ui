import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/nitro-basic/Functions/getRequestOrigin - Получение источника запроса`}),`
`,(0,c.jsx)(n.h1,{id:`getrequestorigin`,children:(0,c.jsx)(n.code,{children:`getRequestOrigin`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилитарная функция, которая извлекает источник (протокол и домен) из объекта `,(0,c.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Request`,rel:`nofollow`,children:`Request`}),`. Это удобно для получения базового URL текущего запроса без путей и параметров.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: Request`}),` — Объект стандартного Web API запроса.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Строка источника (например, `,(0,c.jsx)(n.code,{children:`https://example.com`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getRequestOrigin } from '@dxtmisha/nitro-basic'

// Пример с объектом Request
const request = new Request('https://dxtmisha.com/docs/api?query=1')
const origin = getRequestOrigin(request)

// Результат: "https://dxtmisha.com"
console.log(origin)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};