import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/nitro-basic/# Project Setup`}),`
`,(0,c.jsx)(n.h1,{id:`project-setup`,children:`Project Setup`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`@dxtmisha/nitro-basic`}),` library is designed to work in conjunction with Nitro and Vue 3. It ensures a smooth transition between server-side and client-side rendering. Below is a step-by-step guide for integrating the library into your project.`]}),`
`,(0,c.jsx)(n.h2,{id:`1-install-dependencies`,children:`1. Install Dependencies`}),`
`,(0,c.jsx)(n.p,{children:`Install the necessary packages. In addition to the library itself, you will need Vue 3 and Vue Router:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm install @dxtmisha/nitro-basic vue vue-router
`})}),`
`,(0,c.jsx)(n.h2,{id:`2-nitro-plugin-initialization`,children:`2. Nitro Plugin Initialization`}),`
`,(0,c.jsx)(n.p,{children:`For basic server environment setup (e.g., API caching), you need to register a Nitro plugin.`}),`
`,(0,c.jsxs)(n.p,{children:[`Create the `,(0,c.jsx)(n.code,{children:`server/plugins/ui.ts`}),` file:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { definePlugin } from 'nitro'
import { initPluginBasic } from '@dxtmisha/nitro-basic/plugin'

export default definePlugin((nitroApp) => {
  initPluginBasic(nitroApp)
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`3-create-application-factory-maints`,children:`3. Create Application Factory (main.ts)`}),`
`,(0,c.jsx)(n.p,{children:`Create a shared file for Vue application initialization that will be used on both server and client.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// src/main.ts
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
`,(0,c.jsx)(n.h2,{id:`4-configure-client-entry-point`,children:`4. Configure Client Entry Point`}),`
`,(0,c.jsx)(n.p,{children:`On the client, you need to prepare the identifier generator and mount the application.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// src/entry-client.ts
import { uiBootstrapClient, uiCreateClientApp } from '@dxtmisha/nitro-basic'
import { createApp } from './main'

const { app, router, options } = createApp()

// ID initialization for hydration
uiBootstrapClient()

// Mount the application
uiCreateClientApp(app, '#app', router, options)
`})}),`
`,(0,c.jsx)(n.h2,{id:`5-configure-server-entry-point`,children:`5. Configure Server Entry Point`}),`
`,(0,c.jsx)(n.p,{children:`The server entry point is responsible for initializing storages, headers, and HTML rendering.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// src/entry-server.ts
import { uiBootstrapServer, uiCreateServerApp } from '@dxtmisha/nitro-basic'
import { createApp } from './main'
import template from './templates/main.html?raw' // HTML template

// Global server initialization
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
`,(0,c.jsx)(n.h2,{id:`6-html-template`,children:`6. HTML Template`}),`
`,(0,c.jsxs)(n.p,{children:[`For SSR to work correctly, the library uses a placeholder system in the HTML template. The `,(0,c.jsx)(n.code,{children:`uiCreateServerApp`}),` function automatically replaces them with up-to-date data.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Available markers:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`<!--ssr-lang-->`}),` — user language code (e.g., `,(0,c.jsx)(n.code,{children:`en`}),`). Used in `,(0,c.jsx)(n.code,{children:`<html lang="...">`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`<!--ssr-title-->`}),` — page title from `,(0,c.jsx)(n.code,{children:`MetaStatic`}),`. Injected into `,(0,c.jsx)(n.code,{children:`<title>`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`<!--ssr-meta-->`}),` — block of meta tags (OG, Twitter, etc.) from `,(0,c.jsx)(n.code,{children:`MetaStatic`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`<!--ssr-outlet-->`}),` — rendered HTML of your application. Usually inside `,(0,c.jsx)(n.code,{children:`<div id="app">`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`<!--ssr-teleports-->`}),` — content from Vue Teleports.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`<!--ssr-scriptsJson-->`}),` — `,(0,c.jsx)(n.strong,{children:`Critically important marker`}),`. Contains JSON with hydration data (`,(0,c.jsx)(n.code,{children:`ServerStorage`}),`, API cache). Must be placed before the closing `,(0,c.jsx)(n.code,{children:`</body>`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Example `,(0,c.jsx)(n.code,{children:`main.html`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<!DOCTYPE html>
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
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Without the `,(0,c.jsx)(n.code,{children:`<!--ssr-scriptsJson-->`}),` marker, data received on the server will not be transferred to the client, leading to hydration errors and redundant API requests.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};