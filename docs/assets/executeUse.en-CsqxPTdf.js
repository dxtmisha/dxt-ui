import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/executeUse - Singleton with lifecycle management`}),`
`,(0,c.jsx)(t.h1,{id:`executeuse`,children:(0,c.jsx)(t.code,{children:`executeUse`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`executeUse`}),` is a factory that wraps any initializer function and turns its result into a `,(0,c.jsx)(t.strong,{children:`managed singleton`}),`. The object is created exactly once, frozen (`,(0,c.jsx)(t.code,{children:`Object.freeze`}),`), and reused on every subsequent call. Depending on the selected type, the singleton can be component-scoped, global, or local.`]}),`
`,(0,c.jsxs)(t.p,{children:[`To ensure unique identifiers, a combination of an internal global code and the `,(0,c.jsx)(t.code,{children:`getElementId()`}),` function is used, guaranteeing no collisions even when used across different modules.`]}),`
`,(0,c.jsx)(t.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`R extends object | void`}),` — a plain object container returned by the initializer, or `,(0,c.jsx)(t.code,{children:`void`}),` for initialization without a result.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`O extends unknown[]`}),` — the types of arguments accepted by `,(0,c.jsx)(t.code,{children:`callback`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`RI extends ExecuteUseReturn<R>`}),` — the resulting singleton type, including management methods.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`function executeUse<R extends object | void, O extends unknown[], RI extends ExecuteUseReturn<R>>(
  callback: (...args: O) => R,
  type: ExecuteUseType = ExecuteUseType.provide
): (...args: O) => RI

function executeUseGlobal<R extends object | void>(callback: () => R): () => ExecuteUseReturn<R>
function executeUseProvide<R extends object | void, O extends unknown[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
function executeUseLocal<R extends object | void, O extends unknown[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: (...args: O) => R`}),` — The initializer function. Called on the first access and returns an object that will be frozen and cached. Arguments are passed only on the first call.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: ExecuteUseType`}),` — The type of singleton (default: `,(0,c.jsx)(t.code,{children:`ExecuteUseType.provide`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ExecuteUseReturn<R>`}),` — a frozen object extending `,(0,c.jsx)(t.code,{children:`R`}),` with the following methods:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): Readonly<R>`}),` — returns the raw result of `,(0,c.jsx)(t.code,{children:`callback`}),` without any management methods (`,(0,c.jsx)(t.code,{children:`init`}),`, `,(0,c.jsx)(t.code,{children:`destroyExecute`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`destroyExecute?(): void`}),` — only on `,(0,c.jsx)(t.code,{children:`local`}),` and `,(0,c.jsx)(t.code,{children:`global`}),`. Resets the cache, allowing the object to be re-created on the next call.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`class-instances-inside-a-container`,children:`Class instances inside a container`}),`
`,(0,c.jsxs)(t.p,{children:[`Return a plain object with own enumerable properties, or `,(0,c.jsx)(t.code,{children:`void`}),` for a factory used only for initialization. The management shell copies the container's fields. Returning a class instance directly is unsupported: runtime validation throws `,(0,c.jsx)(t.code,{children:`TypeError`}),` before prototype methods can be silently lost.`]}),`
`,(0,c.jsx)(t.p,{children:`The container's type can be declared through a named interface; no index signature is required. TypeScript uses structural typing, so the plain-object requirement is checked at runtime.`}),`
`,(0,c.jsxs)(t.p,{children:[`Put class instances inside the container. Only the container is shallowly frozen: the nested instance retains its identity, prototype methods, accessors, private fields and mutable state. This applies to `,(0,c.jsx)(t.code,{children:`executeUse`}),`, `,(0,c.jsx)(t.code,{children:`executeUseGlobal`}),`, `,(0,c.jsx)(t.code,{children:`executeUseLocal`}),` and `,(0,c.jsx)(t.code,{children:`executeUseProvide`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeUseLocal } from '@dxtmisha/functional'

class Service {
  #value = 'ready'

  read(): string {
    return this.#value
  }
}

export const useService = /*#__PURE__*/ executeUseLocal(() => ({ service: new Service() }))

// Both access paths return the same original class instance.
useService().service.read()
useService().init().service.read()
`})}),`
`,(0,c.jsxs)(t.h3,{id:`the-initializer-function-callback-and-its-arguments-args-o`,children:[`The Initializer Function (`,(0,c.jsx)(t.code,{children:`callback`}),`) and its Arguments (`,(0,c.jsx)(t.code,{children:`...args: O`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`The main feature of `,(0,c.jsx)(t.code,{children:`executeUse`}),` is that the factory function (`,(0,c.jsx)(t.code,{children:`callback`}),`) and the arguments passed to it (`,(0,c.jsx)(t.code,{children:`...args`}),`) are used `,(0,c.jsx)(t.strong,{children:`only once`}),` — during actual initialization (the very first call).`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`callback`})}),`: This is a factory describing the state creation logic. Inside it, you typically declare reactive variables (`,(0,c.jsx)(t.code,{children:`ref`}),`, `,(0,c.jsx)(t.code,{children:`reactive`}),`), functions to mutate them, and computed values (`,(0,c.jsx)(t.code,{children:`computed`}),`). The object returned from `,(0,c.jsx)(t.code,{children:`callback`}),` will be "frozen" and cached.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`...args: O`})}),`: You can pass any arguments into your initializer (e.g., initial state, ID of the entity being loaded, or an API client). These arguments will be forwarded into the `,(0,c.jsx)(t.code,{children:`callback`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Important note about arguments:`}),` Because `,(0,c.jsx)(t.code,{children:`executeUse`}),` strictly caches the result of the first call, any arguments passed during `,(0,c.jsx)(t.strong,{children:`subsequent`}),` calls of the same hook in other components `,(0,c.jsx)(t.strong,{children:`will be completely ignored`}),`. The object will not be recreated, and the `,(0,c.jsx)(t.code,{children:`callback`}),` function will not run again with new arguments (unless you have previously reset the cache via `,(0,c.jsx)(t.code,{children:`destroyExecute()`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`the-init-placeholder-method`,children:[`The `,(0,c.jsx)(t.code,{children:`init()`}),` Placeholder Method`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`init`}),` method is simply an empty placeholder function that returns the exact same frozen state object. It exists `,(0,c.jsx)(t.strong,{children:`purely for code readability and Developer Experience (DX)`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Its main purpose is to give the developer a way to explicitly and visually highlight in the code the exact place where the actual (first) initialization of the singleton takes place. From a technical perspective, `,(0,c.jsx)(t.code,{children:`const state = useTheme()`}),` and `,(0,c.jsx)(t.code,{children:`const state = useTheme().init()`}),` do exactly the same thing.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Somewhere deep in the component tree, we simply get the readied state
const theme = useTheme()

// And here, in the root component (or main.ts), 
// we explicitly show other developers: "Initialization happens exactly HERE"
const theme = useTheme().init()
`})}),`
`,(0,c.jsx)(t.h2,{id:`step-by-step-guide-how-to-create-and-use-your-own-service`,children:`Step-by-Step Guide: How to Create and Use Your Own Service`}),`
`,(0,c.jsxs)(t.p,{children:[`Creating a managed singleton using `,(0,c.jsx)(t.code,{children:`executeUse`}),` typically consists of three simple steps.`]}),`
`,(0,c.jsx)(t.h3,{id:`step-1-defining-the-state-factory`,children:`Step 1: Defining the State (Factory)`}),`
`,(0,c.jsxs)(t.p,{children:[`First, decide what type of state you need (`,(0,c.jsx)(t.code,{children:`global`}),`, `,(0,c.jsx)(t.code,{children:`local`}),`, or `,(0,c.jsx)(t.code,{children:`provide`}),`). Create a separate file (e.g., `,(0,c.jsx)(t.code,{children:`useMyService.ts`}),`). Use one of the factory functions (e.g., `,(0,c.jsx)(t.code,{children:`executeUseGlobal`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Inside the callback function, define all your reactive variables (`,(0,c.jsx)(t.code,{children:`ref`}),`, `,(0,c.jsx)(t.code,{children:`reactive`}),`), computed properties (`,(0,c.jsx)(t.code,{children:`computed`}),`), and functions to mutate the state:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// src/composables/useMyService.ts
import { ref, computed } from 'vue'
import { executeUseGlobal } from '@dxtmisha/functional'

// Create the singleton and encapsulate the logic
const instance = executeUseGlobal(() => {
  // 1. Reactive state
  const count = ref(0)
  
  // 2. Computed properties
  const isPositive = computed(() => count.value > 0)
  
  // 3. Management methods
  const increment = () => count.value++
  const reset = () => { count.value = 0 }

  // Return exactly what should be exposed to the outside
  return { count, isPositive, increment, reset }
})

// Export a wrapper function.
// The () => instance() construct is necessary so that code editors (IDEs)
// correctly recognize useMyService as a composable function.
// This ensures proper autocomplete and type inference.
export const useMyService = () => instance()
`})}),`
`,(0,c.jsxs)(t.h3,{id:`step-2-initialization-for-global-only`,children:[`Step 2: Initialization (For `,(0,c.jsx)(t.code,{children:`global`}),` only)`]}),`
`,(0,c.jsxs)(t.p,{children:[`If you chose the `,(0,c.jsx)(t.code,{children:`global`}),` mode (like in the example above), you need to tell the application exactly when to instantiate it. This is usually done once at the entry point (`,(0,c.jsx)(t.code,{children:`main.ts`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// src/main.ts
import { createApp } from 'vue'
import { executeUseGlobalInit } from '@dxtmisha/functional'
import App from './App.vue'

// Initialize absolutely all global singletons at once
executeUseGlobalInit() 

createApp(App).mount('#app')
`})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Note:`}),` If your application uses the `,(0,c.jsx)(t.code,{children:`dxtFunctionalPlugin`}),`, you `,(0,c.jsx)(t.strong,{children:`do not need`}),` to call `,(0,c.jsx)(t.code,{children:`executeUseGlobalInit()`}),` manually at startup — the plugin handles it automatically under the hood.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`step-3-usage-in-a-component`,children:`Step 3: Usage in a Component`}),`
`,(0,c.jsxs)(t.p,{children:[`Now you can import your `,(0,c.jsx)(t.code,{children:`useMyService`}),` function into any Vue component. On the very first logical call, use the `,(0,c.jsx)(t.code,{children:`init()`}),` method for clarity.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<!-- src/components/MyComponent.vue -->
<script setup lang="ts">
import { useMyService } from '@/composables/useMyService'

// We receive the state directly. The init() method indicates
// that the primary (first) access within this scope is happening here.
const { count, isPositive, increment } = useMyService().init()
<\/script>

<template>
  <div>
    <p>Current count: {{ count }}</p>
    <p>Is positive? {{ isPositive ? 'Yes' : 'No' }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`To reset a shared service, call the built-in reset method. For `,(0,c.jsx)(t.code,{children:`global`}),` in SSR, this reset affects the entire server process:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const service = useMyService()
if (service.destroyExecute) {
  service.destroyExecute()
}
`})}),`
`,(0,c.jsxs)(t.h2,{id:`the-executeusetype-enum`,children:[`The `,(0,c.jsx)(t.code,{children:`ExecuteUseType`}),` Enum`]}),`
`,(0,c.jsxs)(t.h3,{id:`provide-component-scoped-singleton-default`,children:[(0,c.jsx)(t.code,{children:`provide`}),` (component-scoped singleton, default)`]}),`
`,(0,c.jsxs)(t.p,{children:[`This is a component-oriented singleton that is strictly tied to the lifecycle of a Vue component and its entire subtree. Under the hood, it uses Vue's built-in reactivity and context-passing mechanism (`,(0,c.jsx)(t.code,{children:`provide`}),`/`,(0,c.jsx)(t.code,{children:`inject`}),`), allowing you to safely pass the very same state instance deep down the component tree without having to drill it through props.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`When to use:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`For sharing state specifically within a defined component subtree (parent -> multiple nesting levels -> child) without polluting the global store.`}),`
`,(0,c.jsx)(t.li,{children:`When you need to render multiple independent blocks on the same page (e.g., several complex file uploader widgets), each requiring its own unique state shared only within that widget.`}),`
`,(0,c.jsx)(t.li,{children:`If you need automatic garbage collection of the data straight from memory when the "owner" component is unmounted.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`How it works:`}),`
The first component that calls this function automatically becomes the "owner". The function instantiates the object and immediately calls `,(0,c.jsx)(t.code,{children:`provide(id, instance)`}),`. Any nested components that call the same function will not create a new object; instead, they retrieve the previously created one via `,(0,c.jsx)(t.code,{children:`inject(id)`}),`.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Note: This type lacks a `,(0,c.jsx)(t.code,{children:`destroyExecute()`}),` method because memory is freed automatically by Vue's reactivity system when the owner component is destroyed.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeUseProvide } from '@dxtmisha/functional'
import { ref } from 'vue'

const useTheme = executeUseProvide(() => {
  const mode = ref<'light' | 'dark'>('light')
  const toggle = () => { mode.value = mode.value === 'light' ? 'dark' : 'light' }
  return { mode, toggle }
})

// In the parent component (owner) — the object is created and provided:
const theme = useTheme()
theme.toggle()

// In a deeply nested child component — it receives the same object via inject:
const theme = useTheme()

// In a completely different, independent component tree — a NEW instance is created:
const theme2 = useTheme()
`})}),`
`,(0,c.jsxs)(t.h3,{id:`global-runtime-wide-singleton`,children:[(0,c.jsx)(t.code,{children:`global`}),` (runtime-wide singleton)`]}),`
`,(0,c.jsxs)(t.p,{children:[`The factory registry and each `,(0,c.jsx)(t.code,{children:`global`}),` instance are shared by the entire JavaScript runtime. In a browser, the instance lives within the loaded module. In SSR, `,(0,c.jsx)(t.strong,{children:`all requests handled by the same server process use the same instance`}),`. Separate processes, workers, replicas, and the browser have their own instances.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`When to use:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`For public configuration, reference data, or services whose state does not depend on a user, session, tenant, or request.`}),`
`,(0,c.jsx)(t.li,{children:`When independent parts of the application need the same process-wide service.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`How it works:`}),`
`,(0,c.jsx)(t.code,{children:`executeUseGlobal(callback)`}),` registers a factory without executing it. The first call to the returned hook or to `,(0,c.jsx)(t.code,{children:`executeUseGlobalInit()`}),` creates the instance in its own detached effect scope. Subsequent calls reuse it across SSR request contexts. The shared registry is retained, so later initialization calls also discover factories registered after startup.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`SSR warnings:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Do not store authentication, tokens, cookies, user profiles, shopping carts, or request-specific locale/tenant state in a global instance: another request can read the same state.`}),`
`,(0,c.jsxs)(t.li,{children:[`Do not capture request-scoped dependencies such as request headers, the current router, or an `,(0,c.jsx)(t.code,{children:`Api`}),` instance obtained from the current request. The singleton retains the dependencies from its first initialization.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Declare the factory once at module scope, not inside a request handler or component. For per-request state, use `,(0,c.jsx)(t.code,{children:`executeUseLocal`}),` with a configured `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` request context, or `,(0,c.jsx)(t.code,{children:`executeUseProvide`}),` inside a component tree.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`destroyExecute()`}),` resets the singleton for the entire process and stops its effects. The next hook access or initialization call creates a new shared instance; references previously returned to callers still point to the old object. Server and browser instances are separate; this helper does not automatically hydrate their state.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeUseGlobal, executeUseGlobalInit } from '@dxtmisha/functional'
import { ref } from 'vue'

// Public configuration shared by every request in the server process.
export const usePublicConfig = /*#__PURE__*/ executeUseGlobal(() => {
  const apiVersion = ref('v1')
  return { apiVersion }
})

executeUseGlobalInit()

const configuration = /*#__PURE__*/ usePublicConfig()
// Changes are visible to all consumers in this runtime.
configuration.apiVersion.value = 'v2'
`})}),`
`,(0,c.jsxs)(t.h3,{id:`local-lazy-context-scoped-singleton`,children:[(0,c.jsx)(t.code,{children:`local`}),` (lazy context-scoped singleton)`]}),`
`,(0,c.jsxs)(t.p,{children:[`This is a lazily initialized singleton stored through `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`. In a browser, calls reuse its cached instance. During SSR, an initialized request context gives each request its own instance.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`When to use:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`For utilities, factories, or services not coupled to Vue (`,(0,c.jsx)(t.code,{children:`provide`}),`/`,(0,c.jsx)(t.code,{children:`inject`}),` only function inside a component's `,(0,c.jsx)(t.code,{children:`setup`}),`).`]}),`
`,(0,c.jsx)(t.li,{children:`When you need an isolated instance of a heavy class or service only at the exact moment it's actually required (lazy initialization on demand), rather than at app startup.`}),`
`,(0,c.jsx)(t.li,{children:`For caching the results of heavy mathematical calculations or configuration transformations.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`How it works:`}),`
The first call runs the initializer with the supplied arguments, freezes the result (`,(0,c.jsx)(t.code,{children:`Object.freeze`}),`), and caches it in `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`. Later calls in the same context return that instance and ignore new arguments. `,(0,c.jsx)(t.code,{children:`destroyExecute()`}),` removes the cache entry in the current context. SSR isolation requires a configured `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` request context; without one, the storage fallback is not request-isolated.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeUseLocal } from '@dxtmisha/functional'
import { ref } from 'vue'

const useHeavyConfig = executeUseLocal((env: string) => {
  // Heavy configuration calculation operation...
  const config = ref({ api: \`https://\${env}.example.com\` })
  return { config }
})

// First call — initialization
const devConfig = useHeavyConfig('dev')
console.log(devConfig.config.value.api) // https://dev.example.com

// Second call in another file — returns the same object, the argument is ignored!
const sameConfig = useHeavyConfig('prod') 
console.log(sameConfig.config.value.api) // Still https://dev.example.com

// Forcefully clear the cache
sameConfig.destroyExecute?.()
const newConfig = useHeavyConfig('prod') // Initialization will run again
`})}),`
`,(0,c.jsx)(t.h2,{id:`executeuseglobalinit`,children:(0,c.jsx)(t.code,{children:`executeUseGlobalInit`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`function executeUseGlobalInit(): void
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Initializes all registered global singletons (`,(0,c.jsx)(t.code,{children:`ExecuteUseType.global`}),`) and retains their shared registry. Repeated calls reuse existing instances and initialize newly registered or explicitly reset factories. Import service modules before calling it. In SSR, the plugin may call it for each application/request, while each global instance remains shared by the server process.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { createApp } from 'vue'
import { executeUseGlobalInit } from '@dxtmisha/functional'
import App from './App.vue'

executeUseGlobalInit()
createApp(App).mount('#app')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};