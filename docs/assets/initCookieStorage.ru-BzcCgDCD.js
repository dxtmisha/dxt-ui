import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/nitro-basic/Functions/initCookieStorage - Инициализация хранилища Cookie`}),`
`,(0,c.jsx)(n.h1,{id:`initcookiestorage`,children:(0,c.jsx)(n.code,{children:`initCookieStorage`})}),`
`,(0,c.jsxs)(n.p,{children:[`Функция для инициализации хранилища cookie в Vue-приложении. Она извлекает строку `,(0,c.jsx)(n.code,{children:`Cookie`}),` из HTTP-запроса и предоставляет её через механизм `,(0,c.jsx)(n.code,{children:`provide`}),`, используя ключ `,(0,c.jsx)(n.code,{children:`NITRO_APP_COOKIE`}),`. Это позволяет компонентам и композитным функциям получать доступ к cookie во время серверного рендеринга.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`app: App<T>`}),` — Экземпляр приложения Vue.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: Request`}),` — Объект HTTP-запроса.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initCookieStorage } from '@dxtmisha/nitro-basic'

// В серверном обработчике
initCookieStorage(app, request)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};