import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/nitro-basic/Functions/getRequestUrl - Получение пути запроса`}),`
`,(0,c.jsx)(n.h1,{id:`getrequesturl`,children:(0,c.jsx)(n.code,{children:`getRequestUrl`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилитарная функция, которая извлекает путь (pathname) из объекта `,(0,c.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Request`,rel:`nofollow`,children:`Request`}),`. Это позволяет получить только путь к ресурсу, исключая протокол, домен и параметры запроса.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: Request`}),` — Объект стандартного Web API запроса.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Строка пути (например, `,(0,c.jsx)(n.code,{children:`/api/users`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getRequestUrl } from '@dxtmisha/nitro-basic'

// Пример с объектом Request
const request = new Request('https://dxtmisha.com/docs/api?query=1')
const urlPath = getRequestUrl(request)

// Результат: "/docs/api"
console.log(urlPath)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};