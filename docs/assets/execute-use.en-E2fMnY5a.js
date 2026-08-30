import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/3. Managed Singletons`}),`
`,(0,c.jsx)(t.h1,{id:`managed-singletons-executeuse`,children:`Managed Singletons (executeUse)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.strong,{children:`executeUse`}),` function is an advanced factory for creating managed singletons within the `,(0,c.jsx)(t.strong,{children:`Vue 3`}),` ecosystem. It solves the problem of initializing and reusing reactive states, global services (like meta tags), or component logic by providing flexible control over the execution context (global, local, or via `,(0,c.jsx)(t.code,{children:`provide/inject`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`execution-modes`,children:`Execution Modes`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`executeUse`}),` supports three initialization modes (`,(0,c.jsx)(t.code,{children:`ExecuteUseType`}),` enum), each designed for specific architectural tasks:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`global`}),` (`,(0,c.jsx)(t.code,{children:`executeUseGlobal`}),`) — a single instance for the entire application. Ideal for creating services that live outside any specific component.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`provide`}),` (`,(0,c.jsx)(t.code,{children:`executeUseProvide`}),`) — shares state down the component tree using Vue's `,(0,c.jsx)(t.code,{children:`provide`}),`/`,(0,c.jsx)(t.code,{children:`inject`}),`. Guarantees that child components will receive the exact same instance from their closest provider parent.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`local`}),` (`,(0,c.jsx)(t.code,{children:`executeUseLocal`}),`) — a single instance within a closure, isolated inside its own `,(0,c.jsx)(t.code,{children:`effectScope`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`differences-between-global-and-local`,children:[`Differences between `,(0,c.jsx)(t.code,{children:`global`}),` and `,(0,c.jsx)(t.code,{children:`local`})]}),`
`,(0,c.jsxs)(t.p,{children:[`The main architectural difference between the `,(0,c.jsx)(t.code,{children:`global`}),` and `,(0,c.jsx)(t.code,{children:`local`}),` modes lies in the `,(0,c.jsx)(t.strong,{children:`initialization timing`}),` (exactly when the instance is created):`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`global`}),` (Eager/Mass Initialization):`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`All callbacks wrapped in `,(0,c.jsx)(t.code,{children:`global`}),` are collected in a global array. They are `,(0,c.jsx)(t.strong,{children:`immediately executed all together`}),` when the `,(0,c.jsx)(t.code,{children:`executeUseGlobalInit()`}),` function is called at the application's entry point (e.g., in `,(0,c.jsx)(t.code,{children:`main.ts`}),` or during SSR).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Use Case:`}),` Mission-critical services (Settings, Meta Tags, Locales, User Sessions) that must be fully ready to work `,(0,c.jsx)(t.em,{children:`before`}),` the first component renders, or services that must be centrally recreated on app reset.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`local`}),` (Lazy Initialization):`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The instance is created `,(0,c.jsx)(t.strong,{children:`only at the exact moment of the first call`}),` inside a component or service. Importantly, because the initialization is wrapped in a global `,(0,c.jsx)(t.code,{children:`effectScope`}),`, this singleton—just like the global one—will "live forever" and won't be destroyed even when the calling component unmounts.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Use Case:`}),` Heavy or context-specific services (e.g., complex filtering, an isolated websocket chat, heavy analytics trackers) that:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Might not be needed during the current user session.`}),`
`,(0,c.jsx)(t.li,{children:`Should only be initialized exactly when the user reaches the relevant section of the application.`}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-global-service-example`,children:`Usage (Global Service Example)`}),`
`,(0,c.jsx)(t.p,{children:`The most common scenario is creating a global store or service (for example, to manage SEO meta tags).`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { executeUseGlobal } from '@dxtmisha/functional'

// 1. Defining the singleton
const item = executeUseGlobal(() => {
  const title = ref('My Title')
  
  const updateTitle = (newTitle: string) => {
    title.value = newTitle
  }

  return { title, updateTitle }
})

// 2. Exporting a composable function (following Vue conventions)
export const useMeta = () => item()
`})}),`
`,(0,c.jsx)(t.p,{children:`Inside any Vue component:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useMeta } from './useMeta'

const { title, updateTitle } = useMeta() // title will be shared across all calls
`})}),`
`,(0,c.jsx)(t.h2,{id:`provide--inject-usage`,children:`Provide / Inject Usage`}),`
`,(0,c.jsxs)(t.p,{children:[`If you need the state to live only within a specific component tree (like a complex form and its internal fields), use `,(0,c.jsx)(t.code,{children:`executeUseProvide`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeUseProvide } from '@dxtmisha/functional'

const useFormState = executeUseProvide((initialData: any) => {
  // ... reactive state initialization logic
  return { /* ... */ }
})
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Upon the first call to `,(0,c.jsx)(t.code,{children:`useFormState(data)`}),` in a parent component, the state is initialized and provided downwards (via `,(0,c.jsx)(t.code,{children:`provide`}),`). Any child component that then calls `,(0,c.jsx)(t.code,{children:`useFormState()`}),` will receive this very instance via `,(0,c.jsx)(t.code,{children:`inject`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`instance-management`,children:`Instance Management`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`executeUse`}),` functions wrap the result of your factory and augment it with special lifecycle management methods (depending on the chosen mode).`]}),`
`,(0,c.jsx)(t.h3,{id:`the-init-method`,children:`The init() method`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`init()`}),` method is simply a stub that returns the object itself. It is used exclusively to explicitly highlight the initial call of the composable within a component's code.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const service = useMeta()

// Explicitly defining the entry point
service.init()
`})}),`
`,(0,c.jsx)(t.h3,{id:`reset-and-reinitialization`,children:`Reset and Reinitialization`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const service = useMeta()

// Resets the cached instance (available for local and global modes).
// On the next composable call, a fresh instance will be created.
if (service.destroyExecute) {
  service.destroyExecute()
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Additionally, for global singletons, the `,(0,c.jsx)(t.code,{children:`executeUseGlobalInit()`}),` function is available, which forcefully invokes all registered global `,(0,c.jsx)(t.code,{children:`callback`}),` methods (useful for SSR initialization or full application state resets).`]}),`
`,(0,c.jsxs)(t.p,{children:[`If your application uses the `,(0,c.jsx)(t.code,{children:`dxtFunctionalPlugin`}),`, you `,(0,c.jsx)(t.strong,{children:`do not need`}),` to call `,(0,c.jsx)(t.code,{children:`executeUseGlobalInit()`}),` manually at startup — the plugin handles it automatically under the hood.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};