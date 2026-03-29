import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Functions/dxtFunctionalPlugin - Unified Initialization`}),`
`,(0,c.jsx)(n.h1,{id:`dxtfunctionalplugin`,children:(0,c.jsx)(n.code,{children:`dxtFunctionalPlugin`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`dxtFunctionalPlugin`}),` is a Vue 3 plugin designed to centralize the configuration and initialization of all functional services (`,(0,c.jsx)(n.code,{children:`Api`}),`, `,(0,c.jsx)(n.code,{children:`Translate`}),`, `,(0,c.jsx)(n.code,{children:`Icons`}),`, `,(0,c.jsx)(n.code,{children:`Meta`}),`) in your application. It ensures that global singletons are properly set up before the app is mounted.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`app: App`}),` — The Vue application instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: FunctionalPluginOptions`}),` — Configuration object for functional services.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`Plugin`}),` — A Vue plugin object that integrates core functional logic into the application.`]}),`
`,(0,c.jsx)(n.h2,{id:`installation`,children:`Installation`}),`
`,(0,c.jsxs)(n.p,{children:[`Add the plugin to your Vue application in `,(0,c.jsx)(n.code,{children:`main.ts`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { createApp } from 'vue'
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
`,(0,c.jsx)(n.h2,{id:`initialization-flow`,children:`Initialization Flow`}),`
`,(0,c.jsx)(n.p,{children:`When the plugin is installed, it performs the following steps in order:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Api`}),`: Calls `,(0,c.jsx)(n.code,{children:`Api.setConfig()`}),` with the provided `,(0,c.jsx)(n.code,{children:`ApiConfig`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Translate`}),`: Calls `,(0,c.jsx)(n.code,{children:`Translate.setConfig()`}),` with the provided `,(0,c.jsx)(n.code,{children:`TranslateConfig`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Icons`}),`: Calls `,(0,c.jsx)(n.code,{children:`Icons.setConfig()`}),` with the provided `,(0,c.jsx)(n.code,{children:`IconsConfig`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Meta`}),`: Configures the default title suffix via `,(0,c.jsx)(n.code,{children:`useMeta().setSuffix()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Router`}),`: Registers the router instance in `,(0,c.jsx)(n.code,{children:`RouterItemRef`}),`, making it accessible globally.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`executeUseGlobalInit`}),`: Triggers the batch initialization of all global singletons defined using `,(0,c.jsx)(n.code,{children:`executeUseGlobal`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`data-types`,children:`Data Types`}),`
`,(0,c.jsx)(n.p,{children:`The plugin uses the following interfaces for configuration:`}),`
`,(0,c.jsx)(n.h3,{id:`functionalpluginoptions`,children:(0,c.jsx)(n.code,{children:`FunctionalPluginOptions`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: ApiConfig`}),` — Configuration for the global `,(0,c.jsx)(n.code,{children:`Api`}),` instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`translate?: TranslateConfig`}),` — Configuration for the global `,(0,c.jsx)(n.code,{children:`Translate`}),` service.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`icons?: IconsConfig`}),` — Configuration for the global `,(0,c.jsx)(n.code,{children:`Icons`}),` registry.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`metaSuffix?: string`}),` — A string that will be appended to all page titles set via `,(0,c.jsx)(n.code,{children:`useMeta()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`router?: Router`}),` — The Vue Router instance. If omitted, the plugin will attempt to extract it from `,(0,c.jsx)(n.code,{children:`app.config.globalProperties.$router`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`apiconfig`,children:(0,c.jsx)(n.code,{children:`ApiConfig`})}),`
`,(0,c.jsx)(n.p,{children:`Interface for API service configuration:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`urlRoot?: string`}),` — Base URL for API requests.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`headers?: Record<string, string>`}),` — Default headers for all API requests.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`requestDefault?: Record<string, any>`}),` — Default request data to be sent with every request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`preparation?: (apiFetch: ApiFetch) => Promise<void>`}),` — Hook called before every request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`end: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>`}),` — Hook called after every request.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`translateconfig`,children:(0,c.jsx)(n.code,{children:`TranslateConfig`})}),`
`,(0,c.jsx)(n.p,{children:`Interface for translation service configuration:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url?: string`}),` — URL to the translation data script.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`propsName?: string`}),` — Key name in the local storage or state for translations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readApi?: boolean`}),` — Whether to read translations from the API.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`iconsconfig`,children:(0,c.jsx)(n.code,{children:`IconsConfig`})}),`
`,(0,c.jsx)(n.p,{children:`Interface for icon registry configuration:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url?: string`}),` — Base URL for retrieving icon assets.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list?: Record<string, IconsItem>`}),` — Object mapping icon names to their SVG content or loader.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};