import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/nitro-basic/Functions/initApi - Инициализация API клиента`}),`
`,(0,c.jsx)(t.h1,{id:`initapi`,children:(0,c.jsx)(t.code,{children:`initApi`})}),`
`,(0,c.jsx)(t.p,{children:`Утилитарная функция, которая инициализирует API-клиент для текущего запроса на сервере. Она устанавливает базовый источник (origin), извлеченный из объекта запроса, чтобы гарантировать правильное формирование абсолютных URL-адресов при выполнении API-запросов во время серверного рендеринга (SSR).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: Request`}),` — Объект входящего HTTP-запроса сервера.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример использования:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initApi } from '@dxtmisha/nitro-basic'

export default defineEventHandler((event) => {
  const request = toWebRequest(event)
  initApi(request)
  
  // Теперь Api клиент настроен на правильный origin
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};