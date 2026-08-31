import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/dxtFunctionalPlugin - Unified Initialization`}),`
`,(0,c.jsx)(t.h1,{id:`dxtfunctionalplugin`,children:(0,c.jsx)(t.code,{children:`dxtFunctionalPlugin`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`dxtFunctionalPlugin`}),` is a Vue 3 plugin designed to centralize the configuration and initialization of all functional services (`,(0,c.jsx)(t.code,{children:`Api`}),`, `,(0,c.jsx)(t.code,{children:`Translate`}),`, `,(0,c.jsx)(t.code,{children:`Icons`}),`, `,(0,c.jsx)(t.code,{children:`Meta`}),`) in your application. It ensures that global singletons are properly set up before the app is mounted.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`app: App`}),` — The Vue application instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: FunctionalPluginOptions`}),` — Configuration object for functional services.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Plugin`}),` — A Vue plugin object that integrates core functional logic into the application.`]}),`
`,(0,c.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,c.jsxs)(t.p,{children:[`Add the plugin to your Vue application in `,(0,c.jsx)(t.code,{children:`main.ts`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { createApp } from 'vue'
import { dxtFunctionalPlugin } from '@dxtmisha/functional'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(dxtFunctionalPlugin, {
  api: { urlRoot: 'https://api.example.com' },
  metaSuffix: ' | My Portal',
  router
})

app.mount('#app')
`})}),`
`,(0,c.jsx)(t.h2,{id:`initialization-flow`,children:`Initialization Flow`}),`
`,(0,c.jsx)(t.p,{children:`When the plugin is installed, it performs the following steps in order:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Api`}),`: Calls `,(0,c.jsx)(t.code,{children:`Api.setConfig()`}),` with the provided `,(0,c.jsx)(t.code,{children:`ApiConfig`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Translate`}),`: Calls `,(0,c.jsx)(t.code,{children:`Translate.setConfig()`}),` with the provided `,(0,c.jsx)(t.code,{children:`TranslateConfig`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Icons`}),`: Calls `,(0,c.jsx)(t.code,{children:`Icons.setConfig()`}),` with the provided `,(0,c.jsx)(t.code,{children:`IconsConfig`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Meta`}),`: Configures the default title suffix via `,(0,c.jsx)(t.code,{children:`useMeta().setSuffix()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Router`}),`: Registers the router instance in `,(0,c.jsx)(t.code,{children:`RouterItemRef`}),`, making it accessible globally.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`ErrorCenter`}),`: Configures the predefined list of error causes via `,(0,c.jsx)(t.code,{children:`ErrorCenter.addList()`}),` and registers error handlers via `,(0,c.jsx)(t.code,{children:`ErrorCenter.addHandlerList()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`executeUseGlobalInit`}),`: Triggers the batch initialization of all global singletons defined using `,(0,c.jsx)(t.code,{children:`executeUseGlobal`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`data-types`,children:`Data Types`}),`
`,(0,c.jsx)(t.p,{children:`The plugin uses the following interfaces for configuration:`}),`
`,(0,c.jsx)(t.h3,{id:`functionalpluginoptions`,children:(0,c.jsx)(t.code,{children:`FunctionalPluginOptions`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`api?: ApiConfig`}),` — Configuration for the global `,(0,c.jsx)(t.code,{children:`Api`}),` instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`translate?: TranslateConfig`}),` — Configuration for the global `,(0,c.jsx)(t.code,{children:`Translate`}),` service.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icons?: IconsConfig`}),` — Configuration for the global `,(0,c.jsx)(t.code,{children:`Icons`}),` registry.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`metaSuffix?: string`}),` — A string that will be appended to all page titles set via `,(0,c.jsx)(t.code,{children:`useMeta()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`router?: Router`}),` — The Vue Router instance. If omitted, the plugin will attempt to extract it from `,(0,c.jsx)(t.code,{children:`app.config.globalProperties.$router`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorCauses?: ErrorCenterCauseList`}),` — Predefined list of error causes for `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorHandlers?: ErrorCenterHandlerList`}),` — List of error handlers for `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`apiconfig`,children:(0,c.jsx)(t.code,{children:`ApiConfig`})}),`
`,(0,c.jsx)(t.p,{children:`Interface for API service configuration:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`urlRoot?: string`}),` — Base URL for API requests.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`headers?: Record<string, string>`}),` — Default headers for all API requests.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`requestDefault?: Record<string, any>`}),` — Default request data to be sent with every request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`preparation?: (apiFetch: ApiFetch) => Promise<void>`}),` — Hook called before every request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`end: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>`}),` — Hook called after every request.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`translateconfig`,children:(0,c.jsx)(t.code,{children:`TranslateConfig`})}),`
`,(0,c.jsx)(t.p,{children:`Interface for translation service configuration:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`url?: string`}),` — URL to the translation data script.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`propsName?: string`}),` — Key name in the local storage or state for translations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`readApi?: boolean`}),` — Whether to read translations from the API.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`iconsconfig`,children:(0,c.jsx)(t.code,{children:`IconsConfig`})}),`
`,(0,c.jsx)(t.p,{children:`Interface for icon registry configuration:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`url?: string`}),` — Base URL for retrieving icon assets.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list?: Record<string, IconsItem>`}),` — Object mapping icon names to their SVG content or loader.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};