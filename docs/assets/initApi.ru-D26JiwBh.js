import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/nitro-basic/Functions/initApi - Инициализация API клиента`}),`
`,(0,c.jsx)(n.h1,{id:`initapi`,children:(0,c.jsx)(n.code,{children:`initApi`})}),`
`,(0,c.jsx)(n.p,{children:`Утилитарная функция, которая инициализирует API-клиент для текущего запроса на сервере. Она устанавливает базовый источник (origin), извлеченный из объекта запроса, чтобы гарантировать правильное формирование абсолютных URL-адресов при выполнении API-запросов во время серверного рендеринга (SSR).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: Request`}),` — Объект входящего HTTP-запроса сервера.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример использования:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initApi } from '@dxtmisha/nitro-basic'

export default defineEventHandler((event) => {
  const request = toWebRequest(event)
  initApi(request)
  
  // Теперь Api клиент настроен на правильный origin
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};