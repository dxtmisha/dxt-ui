import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Functions/executeUse - Singleton with lifecycle management`}),`
`,(0,c.jsx)(n.h1,{id:`executeuse`,children:(0,c.jsx)(n.code,{children:`executeUse`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`executeUse`}),` is a factory that wraps any initializer function and turns its result into a `,(0,c.jsx)(n.strong,{children:`managed singleton`}),`. The object is created exactly once, frozen (`,(0,c.jsx)(n.code,{children:`Object.freeze`}),`), and reused on every subsequent call. Depending on the selected type, the singleton can be component-scoped, global, or local.`]}),`
`,(0,c.jsxs)(n.p,{children:[`To ensure unique identifiers, a combination of an internal global code and the `,(0,c.jsx)(n.code,{children:`getElementId()`}),` function is used, guaranteeing no collisions even when used across different modules.`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`R`}),` — the type of object returned by the initializer function (`,(0,c.jsx)(n.code,{children:`callback`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`O extends any[]`}),` — the types of arguments accepted by `,(0,c.jsx)(n.code,{children:`callback`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`RI extends ExecuteUseReturn<R>`}),` — the resulting singleton type, including management methods.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`function executeUse<R, O extends any[], RI extends ExecuteUseReturn<R>>(
  callback: (...args: O) => R,
  type: ExecuteUseType = ExecuteUseType.provide
): (...args: O) => RI

function executeUseGlobal<R>(callback: () => R): () => ExecuteUseReturn<R>
function executeUseProvide<R, O extends any[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
function executeUseLocal<R, O extends any[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (...args: O) => R`}),` — The initializer function. Called on the first access and returns an object that will be frozen and cached. Arguments are passed only on the first call.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: ExecuteUseType`}),` — The type of singleton (default: `,(0,c.jsx)(n.code,{children:`ExecuteUseType.provide`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ExecuteUseReturn<R>`}),` — a frozen object extending `,(0,c.jsx)(n.code,{children:`R`}),` with the following methods:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): Readonly<R>`}),` — returns the raw result of `,(0,c.jsx)(n.code,{children:`callback`}),` without any management methods (`,(0,c.jsx)(n.code,{children:`init`}),`, `,(0,c.jsx)(n.code,{children:`destroyExecute`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`destroyExecute?(): void`}),` — only on `,(0,c.jsx)(n.code,{children:`local`}),` and `,(0,c.jsx)(n.code,{children:`global`}),`. Resets the cache, allowing the object to be re-created on the next call.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`the-initializer-function-callback-and-its-arguments-args-o`,children:[`The Initializer Function (`,(0,c.jsx)(n.code,{children:`callback`}),`) and its Arguments (`,(0,c.jsx)(n.code,{children:`...args: O`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`The main feature of `,(0,c.jsx)(n.code,{children:`executeUse`}),` is that the factory function (`,(0,c.jsx)(n.code,{children:`callback`}),`) and the arguments passed to it (`,(0,c.jsx)(n.code,{children:`...args`}),`) are used `,(0,c.jsx)(n.strong,{children:`only once`}),` — during actual initialization (the very first call).`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`callback`})}),`: This is a factory describing the state creation logic. Inside it, you typically declare reactive variables (`,(0,c.jsx)(n.code,{children:`ref`}),`, `,(0,c.jsx)(n.code,{children:`reactive`}),`), functions to mutate them, and computed values (`,(0,c.jsx)(n.code,{children:`computed`}),`). The object returned from `,(0,c.jsx)(n.code,{children:`callback`}),` will be "frozen" and cached.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`...args: O`})}),`: You can pass any arguments into your initializer (e.g., initial state, ID of the entity being loaded, or an API client). These arguments will be forwarded into the `,(0,c.jsx)(n.code,{children:`callback`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Important note about arguments:`}),` Because `,(0,c.jsx)(n.code,{children:`executeUse`}),` strictly caches the result of the first call, any arguments passed during `,(0,c.jsx)(n.strong,{children:`subsequent`}),` calls of the same hook in other components `,(0,c.jsx)(n.strong,{children:`will be completely ignored`}),`. The object will not be recreated, and the `,(0,c.jsx)(n.code,{children:`callback`}),` function will not run again with new arguments (unless you have previously reset the cache via `,(0,c.jsx)(n.code,{children:`destroyExecute()`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`the-init-placeholder-method`,children:[`The `,(0,c.jsx)(n.code,{children:`init()`}),` Placeholder Method`]}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`init`}),` method is simply an empty placeholder function that returns the exact same frozen state object. It exists `,(0,c.jsx)(n.strong,{children:`purely for code readability and Developer Experience (DX)`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Its main purpose is to give the developer a way to explicitly and visually highlight in the code the exact place where the actual (first) initialization of the singleton takes place. From a technical perspective, `,(0,c.jsx)(n.code,{children:`const state = useTheme()`}),` and `,(0,c.jsx)(n.code,{children:`const state = useTheme().init()`}),` do exactly the same thing.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Somewhere deep in the component tree, we simply get the readied state
const theme = useTheme()

// And here, in the root component (or main.ts), 
// we explicitly show other developers: "Initialization happens exactly HERE"
const theme = useTheme().init()
`})}),`
`,(0,c.jsx)(n.h2,{id:`step-by-step-guide-how-to-create-and-use-your-own-service`,children:`Step-by-Step Guide: How to Create and Use Your Own Service`}),`
`,(0,c.jsxs)(n.p,{children:[`Creating a managed singleton using `,(0,c.jsx)(n.code,{children:`executeUse`}),` typically consists of three simple steps.`]}),`
`,(0,c.jsx)(n.h3,{id:`step-1-defining-the-state-factory`,children:`Step 1: Defining the State (Factory)`}),`
`,(0,c.jsxs)(n.p,{children:[`First, decide what type of state you need (`,(0,c.jsx)(n.code,{children:`global`}),`, `,(0,c.jsx)(n.code,{children:`local`}),`, or `,(0,c.jsx)(n.code,{children:`provide`}),`). Create a separate file (e.g., `,(0,c.jsx)(n.code,{children:`useMyService.ts`}),`). Use one of the factory functions (e.g., `,(0,c.jsx)(n.code,{children:`executeUseGlobal`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Inside the callback function, define all your reactive variables (`,(0,c.jsx)(n.code,{children:`ref`}),`, `,(0,c.jsx)(n.code,{children:`reactive`}),`), computed properties (`,(0,c.jsx)(n.code,{children:`computed`}),`), and functions to mutate the state:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// src/composables/useMyService.ts
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
`,(0,c.jsxs)(n.h3,{id:`step-2-initialization-for-global-only`,children:[`Step 2: Initialization (For `,(0,c.jsx)(n.code,{children:`global`}),` only)`]}),`
`,(0,c.jsxs)(n.p,{children:[`If you chose the `,(0,c.jsx)(n.code,{children:`global`}),` mode (like in the example above), you need to tell the application exactly when to instantiate it. This is usually done once at the entry point (`,(0,c.jsx)(n.code,{children:`main.ts`}),`):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// src/main.ts
import { createApp } from 'vue'
import { executeUseGlobalInit } from '@dxtmisha/functional'
import App from './App.vue'

// Initialize absolutely all global singletons at once
executeUseGlobalInit() 

createApp(App).mount('#app')
`})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Note:`}),` If your application uses the `,(0,c.jsx)(n.code,{children:`dxtFunctionalPlugin`}),`, you `,(0,c.jsx)(n.strong,{children:`do not need`}),` to call `,(0,c.jsx)(n.code,{children:`executeUseGlobalInit()`}),` manually at startup — the plugin handles it automatically under the hood.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`step-3-usage-in-a-component`,children:`Step 3: Usage in a Component`}),`
`,(0,c.jsxs)(n.p,{children:[`Now you can import your `,(0,c.jsx)(n.code,{children:`useMyService`}),` function into any Vue component. On the very first logical call, use the `,(0,c.jsx)(n.code,{children:`init()`}),` method for clarity.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-vue`,children:`<!-- src/components/MyComponent.vue -->
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
`,(0,c.jsx)(n.p,{children:`If for some reason you need to forcefully reset the state (e.g., upon user logout), simply call the built-in reset method:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const service = useMyService()
if (service.destroyExecute) {
  service.destroyExecute()
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`the-executeusetype-enum`,children:[`The `,(0,c.jsx)(n.code,{children:`ExecuteUseType`}),` Enum`]}),`
`,(0,c.jsxs)(n.h3,{id:`provide-component-scoped-singleton-default`,children:[(0,c.jsx)(n.code,{children:`provide`}),` (component-scoped singleton, default)`]}),`
`,(0,c.jsxs)(n.p,{children:[`This is a component-oriented singleton that is strictly tied to the lifecycle of a Vue component and its entire subtree. Under the hood, it uses Vue's built-in reactivity and context-passing mechanism (`,(0,c.jsx)(n.code,{children:`provide`}),`/`,(0,c.jsx)(n.code,{children:`inject`}),`), allowing you to safely pass the very same state instance deep down the component tree without having to drill it through props.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`When to use:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`For sharing state specifically within a defined component subtree (parent -> multiple nesting levels -> child) without polluting the global store.`}),`
`,(0,c.jsx)(n.li,{children:`When you need to render multiple independent blocks on the same page (e.g., several complex file uploader widgets), each requiring its own unique state shared only within that widget.`}),`
`,(0,c.jsx)(n.li,{children:`If you need automatic garbage collection of the data straight from memory when the "owner" component is unmounted.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`How it works:`}),`
The first component that calls this function automatically becomes the "owner". The function instantiates the object and immediately calls `,(0,c.jsx)(n.code,{children:`provide(id, instance)`}),`. Any nested components that call the same function will not create a new object; instead, they retrieve the previously created one via `,(0,c.jsx)(n.code,{children:`inject(id)`}),`.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Note: This type lacks a `,(0,c.jsx)(n.code,{children:`destroyExecute()`}),` method because memory is freed automatically by Vue's reactivity system when the owner component is destroyed.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executeUseProvide } from '@dxtmisha/functional'
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
`,(0,c.jsxs)(n.h3,{id:`global-application-wide-singleton`,children:[(0,c.jsx)(n.code,{children:`global`}),` (application-wide singleton)`]}),`
`,(0,c.jsx)(n.p,{children:`This is a classic Singleton architectural pattern, existing as a strictly unique instance throughout the entire lifetime of your application (from initialization to closing the browser tab). It provides a global point of access to state from literally anywhere in the code.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`When to use:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`For storing global application state: authentication, current user profile, language settings, global shopping cart.`}),`
`,(0,c.jsx)(n.li,{children:`When the same data needs to be accessed from completely distinct, unrelated parts of the application (or even outside Vue components, such as in the router).`}),`
`,(0,c.jsx)(n.li,{children:`As a lightweight replacement for Vuex / Pinia for simple state management tasks.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`How it works:`}),`
The initializer function is `,(0,c.jsx)(n.strong,{children:`not executed when called`}),`. Instead, it is added to a special internal queue (`,(0,c.jsx)(n.code,{children:`globalMethods`}),`). Full initialization of all global objects only occurs upon explicitly calling `,(0,c.jsx)(n.code,{children:`executeUseGlobalInit()`}),`, which is typically placed in `,(0,c.jsx)(n.code,{children:`main.ts`}),` before the app is mounted. Thereafter, all components receive the same cached object from memory.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executeUseGlobal, executeUseGlobalInit } from '@dxtmisha/functional'
import { ref } from 'vue'

const useAuth = executeUseGlobal(() => {
  const user = ref<string | null>(null)
  const login = (name: string) => { user.value = name }
  const logout = () => { user.value = null }
  return { user, login, logout }
})

// In main.ts — strictly BEFORE mounting the app (app.mount()):
executeUseGlobalInit()

// In any component, utility, or router:
const auth = useAuth()
auth.login('Alice')

// If you need to forcefully reset the state (recreate the state from scratch):
auth.destroyExecute?.() 
`})}),`
`,(0,c.jsxs)(n.h3,{id:`local-closure-cached-singleton`,children:[(0,c.jsx)(n.code,{children:`local`}),` (closure-cached singleton)`]}),`
`,(0,c.jsxs)(n.p,{children:[`This is an independent singleton that relies on the lexical closure mechanism (`,(0,c.jsx)(n.code,{children:`closure caching`}),`) in JavaScript. Instead of using the Vue context or the global scope, it preserves the once-generated result directly inside its own function memory, instantly returning it on all subsequent calls.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`When to use:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`For utilities, factories, or services not coupled to Vue (`,(0,c.jsx)(n.code,{children:`provide`}),`/`,(0,c.jsx)(n.code,{children:`inject`}),` only function inside a component's `,(0,c.jsx)(n.code,{children:`setup`}),`).`]}),`
`,(0,c.jsx)(n.li,{children:`When you need an isolated instance of a heavy class or service only at the exact moment it's actually required (lazy initialization on demand), rather than at app startup.`}),`
`,(0,c.jsx)(n.li,{children:`For caching the results of heavy mathematical calculations or configuration transformations.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`How it works:`}),`
It does not use Vue mechanisms. On the very first call, the initializer function is executed with the provided arguments. The result is strictly frozen (`,(0,c.jsx)(n.code,{children:`Object.freeze`}),`) and stored in a variable inside the `,(0,c.jsx)(n.code,{children:`executeUse`}),` closure. On all subsequent calls (even if you pass different arguments), the function instantly returns the already saved object from the variable.
The `,(0,c.jsx)(n.code,{children:`destroyExecute()`}),` method nullifies this internal variable, allowing the initialization algorithm to run again on the next call.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executeUseLocal } from '@dxtmisha/functional'
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
`,(0,c.jsx)(n.h2,{id:`executeuseglobalinit`,children:(0,c.jsx)(n.code,{children:`executeUseGlobalInit`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`function executeUseGlobalInit(): void
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Calls all registered global initializers (`,(0,c.jsx)(n.code,{children:`ExecuteUseType.global`}),`) and clears the queue. Calling it again does not re-initialize already created singletons. Should be called `,(0,c.jsx)(n.strong,{children:`once`}),` at app startup — before mounting the root component.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { createApp } from 'vue'
import { executeUseGlobalInit } from '@dxtmisha/functional'
import App from './App.vue'

executeUseGlobalInit()
createApp(App).mount('#app')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};