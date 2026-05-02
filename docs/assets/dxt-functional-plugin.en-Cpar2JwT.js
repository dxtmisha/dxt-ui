import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/# Plugin Initialization`}),`
`,(0,c.jsx)(n.h1,{id:`unified-plugin-initialization-dxtfunctionalplugin`,children:`Unified Plugin Initialization (dxtFunctionalPlugin)`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`dxtFunctionalPlugin`}),` is a Vue 3 plugin that handles all the routine work of centrally configuring and batch-initializing the core services (`,(0,c.jsx)(n.code,{children:`Api`}),`, `,(0,c.jsx)(n.code,{children:`Translate`}),`, `,(0,c.jsx)(n.code,{children:`Icons`}),`, `,(0,c.jsx)(n.code,{children:`Meta`}),`) in your application.`]}),`
`,(0,c.jsx)(n.p,{children:`Instead of manually importing each service and configuring them separately, you pass a single configuration object at application startup.`}),`
`,(0,c.jsx)(n.h2,{id:`quick-start-installation`,children:`Quick Start (Installation)`}),`
`,(0,c.jsxs)(n.p,{children:[`In your main application file (`,(0,c.jsx)(n.code,{children:`main.ts`}),`), call the `,(0,c.jsx)(n.code,{children:`app.use()`}),` method, passing the plugin and your options. `,(0,c.jsxs)(n.strong,{children:[`Be sure to do this before mounting the app (`,(0,c.jsx)(n.code,{children:`app.mount`}),`).`]})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// src/main.ts
import { createApp } from 'vue'
import { dxtFunctionalPlugin, type FunctionalPluginOptions } from '@dxtmisha/functional'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Prepare configuration
const functionalOptions: FunctionalPluginOptions = {
  // API client configuration (base URL)
  api: { urlRoot: 'https://api.example.com' },
  // Suffix to be appended to all page <title>
  metaSuffix: ' | My App',
  // Pass the router so services can access navigation
  router
}

// Use functional plugin
app.use(dxtFunctionalPlugin, functionalOptions)

app.mount('#app')
`})}),`
`,(0,c.jsx)(n.h2,{id:`what-does-the-plugin-do-under-the-hood`,children:`What Does the Plugin Do Under the Hood?`}),`
`,(0,c.jsxs)(n.p,{children:[`When you call `,(0,c.jsx)(n.code,{children:`app.use(dxtFunctionalPlugin)`}),`, the following steps occur automatically:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`Api`}),` Initialization`]}),`: Sets the base URL, default headers, and interception logic (hooks) via `,(0,c.jsx)(n.code,{children:`Api.setConfig()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`Translate`}),` Initialization`]}),`: Applies the configuration for localization and text loading.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`Icons`}),` Initialization`]}),`: Configures the global SVG icon registry.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`Meta`}),` Initialization`]}),`: Automatically sets the browser tab suffix (via `,(0,c.jsx)(n.code,{children:`useMeta().setSuffix()`}),`) if provided.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Vue Router Integration`}),`: Globally registers the router object in the library's memory (`,(0,c.jsx)(n.code,{children:`RouterItemRef`}),`), allowing other functional services to use navigation even outside Vue components.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`executeUseGlobalInit()`}),` Execution`]}),`: Automatically triggers the initialization of absolutely all global singletons created via `,(0,c.jsx)(n.code,{children:`executeUseGlobal`}),`. You no longer need to call it manually!`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`service-configuration`,children:`Service Configuration`}),`
`,(0,c.jsxs)(n.p,{children:[`In `,(0,c.jsx)(n.code,{children:`FunctionalPluginOptions`}),`, you only specify the services you actually need. For example, if your project does not use translations (`,(0,c.jsx)(n.code,{children:`Translate`}),`), you simply omit that key from the options object.`]}),`
`,(0,c.jsx)(n.h3,{id:`advanced-api-configuration-example`,children:`Advanced API Configuration Example:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const options: FunctionalPluginOptions = {
  api: {
    urlRoot: 'https://api.my-crm.com',
    headers: {
      'Content-Type': 'application/json'
    },
    // Hook called BEFORE every request (e.g., adding an auth token)
    preparation: async (fetchObj) => {
      fetchObj.request.headers['Authorization'] = \`Bearer \${myToken}\`
    },
    // Hook called AFTER every request (e.g., global error handling)
    end: async (response, fetchObj) => {
      if (response.status === 401) {
        // Log the user out
      }
      return undefined
    }
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};