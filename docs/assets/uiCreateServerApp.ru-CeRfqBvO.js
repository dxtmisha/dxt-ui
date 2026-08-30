import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/nitro-basic/Functions/uiCreateServerApp - Полная инициализация сервера`}),`
`,(0,c.jsx)(t.h1,{id:`uicreateserverapp`,children:(0,c.jsx)(t.code,{children:`uiCreateServerApp`})}),`
`,(0,c.jsx)(t.p,{children:`Комплексная асинхронная функция для инициализации приложения на стороне сервера. Она настраивает всё необходимое для SSR: заголовки, хранилища, API, маршрутизацию и выполняет рендеринг в HTML.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Основные этапы:`})}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`Инициализация заголовков, хранилищ и cookie.`}),`
`,(0,c.jsx)(t.li,{children:`Настройка API-клиента и функциональных плагинов.`}),`
`,(0,c.jsx)(t.li,{children:`Синхронизация роутера с текущим URL.`}),`
`,(0,c.jsx)(t.li,{children:`Рендеринг приложения в строку.`}),`
`,(0,c.jsx)(t.li,{children:`Подстановка данных (язык, мета, скрипты, контент) в HTML-шаблон.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
Объект с отрендеренным телом страницы, метаданными и заголовками.`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`nitroappoptions`,children:`NitroAppOptions`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`api?: ApiConfig`}),` — конфигурация для API-клиента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`translate?: TranslateConfig`}),` — конфигурация для сервиса переводов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`metaSuffix?: string`}),` — суффикс, который будет добавляться ко всем заголовкам страниц.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icons?: IconsConfig`}),` — конфигурация для сервиса управления иконками.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`router?: Router`}),` — экземпляр Vue Router.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorCauses?: ErrorCenterCauseList`}),` — список причин ошибок для центра ошибок.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { uiCreateServerApp } from '@dxtmisha/nitro-basic'

const data = await uiCreateServerApp(app, request, router, options, action, context, htmlTemplate)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};