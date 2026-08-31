import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/nitro-basic/Functions/uiCreateSsrRouter - Создание SSR роутера`}),`
`,(0,c.jsx)(t.h1,{id:`uicreatessrrouter`,children:(0,c.jsx)(t.code,{children:`uiCreateSsrRouter`})}),`
`,(0,c.jsxs)(t.p,{children:[`Создаёт экземпляр маршрутизатора Vue с типом истории, подходящим для текущей среды выполнения. На сервере используется `,(0,c.jsx)(t.code,{children:`createMemoryHistory`}),`, а в браузере — `,(0,c.jsx)(t.code,{children:`createWebHistory`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`routes: RouteRecordRaw[]`}),` — Список маршрутов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: NitroAppRouterOptions`}),` — Дополнительные опции роутера.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`base?: string`}),` — Базовый путь для маршрутизатора.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { uiCreateSsrRouter } from '@dxtmisha/nitro-basic'

const router = uiCreateSsrRouter(routes, {}, '/base-path/')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};