import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/nitro-basic/Functions/initSsrApp - Рендеринг SSR приложения`}),`
`,(0,c.jsx)(t.h1,{id:`initssrapp`,children:(0,c.jsx)(t.code,{children:`initSsrApp`})}),`
`,(0,c.jsx)(t.p,{children:`Асинхронная функция, которая рендерит приложение Vue в HTML-строку и извлекает дополнительные данные контекста (например, телепорты). Это основной шаг при формировании ответа на сервере.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`app: App<T>`}),` — Экземпляр приложения Vue.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`context: SSRContext`}),` (по умолчанию `,(0,c.jsx)(t.code,{children:`{}`}),`) — Контекст рендеринга на сервере.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<{ appHtml, teleportsHtml, context }>`}),` — Объект, содержащий HTML приложения, HTML телепортов и обновленный контекст.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initSsrApp } from '@dxtmisha/nitro-basic'

const { appHtml, teleportsHtml } = await initSsrApp(app)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};