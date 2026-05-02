import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/nitro-basic/Functions/uiCreateApp - Создание Vue приложения`}),`
`,(0,c.jsx)(n.h1,{id:`uicreateapp`,children:(0,c.jsx)(n.code,{children:`uiCreateApp`})}),`
`,(0,c.jsx)(n.p,{children:`Создаёт экземпляр Vue SSR приложения из корневого компонента и инициализирует основные плагины, включая маршрутизатор. Если в опциях не передан готовый роутер, функция может создать его автоматически на основе предоставленных маршрутов.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`appComponent: A`}),` — Корневой компонент приложения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: NitroAppOptions`}),` — Параметры конфигурации приложения.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
Объект, содержащий экземпляр `,(0,c.jsx)(n.code,{children:`app`}),`, `,(0,c.jsx)(n.code,{children:`router`}),` и `,(0,c.jsx)(n.code,{children:`options`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`nitroappoptions`,children:`NitroAppOptions`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`appRouter?: object`}),` — Конфигурация маршрутизатора:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`routes: RouteRecordRaw[]`}),` — список записей маршрутов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: RouterOptions`}),` — опции создания маршрутизатора.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: ApiConfig`}),` — конфигурация для API-клиента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`translate?: TranslateConfig`}),` — конфигурация для сервиса переводов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`metaSuffix?: string`}),` — суффикс, который будет добавляться ко всем заголовкам страниц.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`icons?: IconsConfig`}),` — конфигурация для сервиса управления иконками.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`router?: Router`}),` — экземпляр Vue Router (если уже создан).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorCauses?: ErrorCenterCauseList`}),` — список причин ошибок для центра ошибок.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример использования:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { uiCreateApp } from '@dxtmisha/nitro-basic'
import App from './App.vue'

const { app, router } = uiCreateApp(App, {
  appRouter: {
    routes: [
      { path: '/', component: () => import('./Home.vue') }
    ]
  }
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};