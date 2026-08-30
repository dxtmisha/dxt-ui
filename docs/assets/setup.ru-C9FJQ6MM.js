import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/nitro-basic/1. Подготовка проекта`}),`
`,(0,c.jsx)(t.h1,{id:`подготовка-проекта`,children:`Подготовка проекта`}),`
`,(0,c.jsxs)(t.p,{children:[`Библиотека `,(0,c.jsx)(t.code,{children:`@dxtmisha/nitro-basic`}),` спроектирована для работы в связке с Nitro и Vue 3. Она обеспечивает плавный переход между серверным и клиентским рендерингом. Ниже приведено пошаговое руководство по интеграции библиотеки в ваш проект.`]}),`
`,(0,c.jsx)(t.h2,{id:`1-установка-зависимостей`,children:`1. Установка зависимостей`}),`
`,(0,c.jsx)(t.p,{children:`Установите необходимые пакеты. Помимо самой библиотеки, вам потребуются Vue 3 и Vue Router:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install @dxtmisha/nitro-basic vue vue-router
`})}),`
`,(0,c.jsx)(t.h2,{id:`2-инициализация-плагина-nitro`,children:`2. Инициализация плагина Nitro`}),`
`,(0,c.jsx)(t.p,{children:`Для базовой настройки серверной среды (например, кэширования API) необходимо зарегистрировать плагин Nitro.`}),`
`,(0,c.jsxs)(t.p,{children:[`Создайте файл `,(0,c.jsx)(t.code,{children:`server/plugins/ui.ts`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { definePlugin } from 'nitro'
import { initPluginBasic } from '@dxtmisha/nitro-basic/plugin'

export default definePlugin((nitroApp) => {
  initPluginBasic(nitroApp)
})
`})}),`
`,(0,c.jsx)(t.h2,{id:`3-создание-фабрики-приложения-maints`,children:`3. Создание фабрики приложения (main.ts)`}),`
`,(0,c.jsx)(t.p,{children:`Создайте общий файл для инициализации Vue-приложения, который будет использоваться и на сервере, и на клиенте.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// src/main.ts
import { uiCreateApp } from '@dxtmisha/nitro-basic'
import App from './App.vue'
import { routes } from './router'

export function createApp() {
  return uiCreateApp(App, {
    appRouter: {
      routes
    }
  })
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`4-настройка-клиентской-точки-входа`,children:`4. Настройка клиентской точки входа`}),`
`,(0,c.jsx)(t.p,{children:`На клиенте необходимо подготовить генератор идентификаторов и примонтировать приложение.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// src/entry-client.ts
import { uiBootstrapClient, uiCreateClientApp } from '@dxtmisha/nitro-basic'
import { createApp } from './main'

const { app, router, options } = createApp()

// Инициализация ID для гидратации
uiBootstrapClient()

// Монтирование приложения
uiCreateClientApp(app, '#app', router, options)
`})}),`
`,(0,c.jsx)(t.h2,{id:`5-настройка-серверной-точки-входа`,children:`5. Настройка серверной точки входа`}),`
`,(0,c.jsx)(t.p,{children:`Серверная точка входа отвечает за инициализацию хранилищ, заголовков и рендеринг HTML.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// src/entry-server.ts
import { uiBootstrapServer, uiCreateServerApp } from '@dxtmisha/nitro-basic'
import { createApp } from './main'
import template from './templates/main.html?raw' // HTML шаблон

// Глобальная инициализация сервера
uiBootstrapServer()

export default {
  async fetch(request: Request) {
    const { app, router, options } = createApp()

    const { headers, body } = await uiCreateServerApp(
      app,
      request,
      router,
      options,
      undefined,
      undefined,
      template
    )

    return new Response(body, { headers })
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`6-html-шаблон`,children:`6. HTML Шаблон`}),`
`,(0,c.jsxs)(t.p,{children:[`Для корректной работы SSR библиотека использует систему плейсхолдеров в HTML-шаблоне. Функция `,(0,c.jsx)(t.code,{children:`uiCreateServerApp`}),` автоматически заменяет их актуальными данными.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Доступные метки:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`<!--ssr-lang-->`}),` — языковой код пользователя (например, `,(0,c.jsx)(t.code,{children:`ru`}),`). Используется в `,(0,c.jsx)(t.code,{children:`<html lang="...">`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`<!--ssr-title-->`}),` — заголовок страницы из `,(0,c.jsx)(t.code,{children:`MetaStatic`}),`. Подставляется в `,(0,c.jsx)(t.code,{children:`<title>`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`<!--ssr-meta-->`}),` — блок мета-тегов (OG, Twitter и др.) из `,(0,c.jsx)(t.code,{children:`MetaStatic`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`<!--ssr-outlet-->`}),` — отрендеренный HTML вашего приложения. Обычно внутри `,(0,c.jsx)(t.code,{children:`<div id="app">`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`<!--ssr-teleports-->`}),` — содержимое Vue Teleports.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`<!--ssr-scriptsJson-->`}),` — `,(0,c.jsx)(t.strong,{children:`Критически важная метка`}),`. Содержит JSON с данными для гидратации (`,(0,c.jsx)(t.code,{children:`ServerStorage`}),`, кэш API). Должна быть размещена перед закрывающим `,(0,c.jsx)(t.code,{children:`</body>`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Пример `,(0,c.jsx)(t.code,{children:`main.html`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<!DOCTYPE html>
<html lang="<!--ssr-lang-->">
<head>
    <meta charset="UTF-8">
    <!--ssr-meta-->
    <title><!--ssr-title--></title>
</head>
<body>
    <div id="app"><!--ssr-outlet--></div>
    
    <!--ssr-teleports-->
    <!--ssr-scriptsJson-->

    <script type="module" src="/src/entry-client.ts"><\/script>
</body>
</html>
`})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Без метки `,(0,c.jsx)(t.code,{children:`<!--ssr-scriptsJson-->`}),` данные, полученные на сервере, не будут переданы на клиент, что приведет к ошибкам гидратации и повторным запросам к API.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};