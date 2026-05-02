import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/nitro-basic/Functions/uiCreateSsrRouter - Создание SSR роутера`}),`
`,(0,c.jsx)(n.h1,{id:`uicreatessrrouter`,children:(0,c.jsx)(n.code,{children:`uiCreateSsrRouter`})}),`
`,(0,c.jsxs)(n.p,{children:[`Создаёт экземпляр маршрутизатора Vue с типом истории, подходящим для текущей среды выполнения. На сервере используется `,(0,c.jsx)(n.code,{children:`createMemoryHistory`}),`, а в браузере — `,(0,c.jsx)(n.code,{children:`createWebHistory`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`routes: RouteRecordRaw[]`}),` — Список маршрутов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: NitroAppRouterOptions`}),` — Дополнительные опции роутера.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { uiCreateSsrRouter } from '@dxtmisha/nitro-basic'

const router = uiCreateSsrRouter(routes)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};