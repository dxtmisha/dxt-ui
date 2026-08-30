import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/nitro-basic/Functions/initCookieStorage - Инициализация хранилища Cookie`}),`
`,(0,c.jsx)(t.h1,{id:`initcookiestorage`,children:(0,c.jsx)(t.code,{children:`initCookieStorage`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция для инициализации хранилища cookie в Vue-приложении. Она извлекает строку `,(0,c.jsx)(t.code,{children:`Cookie`}),` из HTTP-запроса и предоставляет её через механизм `,(0,c.jsx)(t.code,{children:`provide`}),`, используя ключ `,(0,c.jsx)(t.code,{children:`NITRO_APP_COOKIE`}),`. Это позволяет компонентам и композитным функциям получать доступ к cookie во время серверного рендеринга.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`app: App<T>`}),` — Экземпляр приложения Vue.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: Request`}),` — Объект HTTP-запроса.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initCookieStorage } from '@dxtmisha/nitro-basic'

// В серверном обработчике
initCookieStorage(app, request)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};