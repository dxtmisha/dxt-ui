import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/nitro-basic/Functions/uiCreateServerApp - Полная инициализация сервера`}),`
`,(0,c.jsx)(n.h1,{id:`uicreateserverapp`,children:(0,c.jsx)(n.code,{children:`uiCreateServerApp`})}),`
`,(0,c.jsx)(n.p,{children:`Комплексная асинхронная функция для инициализации приложения на стороне сервера. Она настраивает всё необходимое для SSR: заголовки, хранилища, API, маршрутизацию и выполняет рендеринг в HTML.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Основные этапы:`})}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Инициализация заголовков, хранилищ и cookie.`}),`
`,(0,c.jsx)(n.li,{children:`Настройка API-клиента и функциональных плагинов.`}),`
`,(0,c.jsx)(n.li,{children:`Синхронизация роутера с текущим URL.`}),`
`,(0,c.jsx)(n.li,{children:`Рендеринг приложения в строку.`}),`
`,(0,c.jsx)(n.li,{children:`Подстановка данных (язык, мета, скрипты, контент) в HTML-шаблон.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
Объект с отрендеренным телом страницы, метаданными и заголовками.`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`nitroappoptions`,children:`NitroAppOptions`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: ApiConfig`}),` — конфигурация для API-клиента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`translate?: TranslateConfig`}),` — конфигурация для сервиса переводов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`metaSuffix?: string`}),` — суффикс, который будет добавляться ко всем заголовкам страниц.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`icons?: IconsConfig`}),` — конфигурация для сервиса управления иконками.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`router?: Router`}),` — экземпляр Vue Router.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorCauses?: ErrorCenterCauseList`}),` — список причин ошибок для центра ошибок.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { uiCreateServerApp } from '@dxtmisha/nitro-basic'

const data = await uiCreateServerApp(app, request, router, options, action, context, htmlTemplate)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};