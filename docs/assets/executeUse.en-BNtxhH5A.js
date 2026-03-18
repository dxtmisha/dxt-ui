import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional/Functions/executeUse - Singleton with lifecycle management"}),`
`,e.jsx(n.h1,{id:"executeuse",children:e.jsx(n.code,{children:"executeUse"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"executeUse"})," is a factory that wraps any initializer function and turns its result into a ",e.jsx(n.strong,{children:"managed singleton"}),". The object is created exactly once, frozen (",e.jsx(n.code,{children:"Object.freeze"}),"), and reused on every subsequent call. Depending on the selected type, the singleton can be component-scoped, global, or local."]}),`
`,e.jsxs(n.p,{children:["To ensure unique identifiers, a combination of an internal global code and the ",e.jsx(n.code,{children:"getElementId()"})," function is used, guaranteeing no collisions even when used across different modules."]}),`
`,e.jsx(n.h3,{id:"generic-constraints",children:"Generic Constraints"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"R"})," — the type of object returned by the initializer function (",e.jsx(n.code,{children:"callback"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"O extends any[]"})," — the types of arguments accepted by ",e.jsx(n.code,{children:"callback"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"RI extends ExecuteUseReturn<R>"})," — the resulting singleton type, including management methods."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`function executeUse<R, O extends any[], RI extends ExecuteUseReturn<R>>(
  callback: (...args: O) => R,
  type: ExecuteUseType = ExecuteUseType.provide
): (...args: O) => RI

function executeUseGlobal<R>(callback: () => R): () => ExecuteUseReturn<R>
function executeUseProvide<R, O extends any[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
function executeUseLocal<R, O extends any[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: (...args: O) => R"})," — The initializer function. Called on the first access and returns an object that will be frozen and cached. Arguments are passed only on the first call."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: ExecuteUseType"})," — The type of singleton (default: ",e.jsx(n.code,{children:"ExecuteUseType.provide"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ExecuteUseReturn<R>"})," — a frozen object extending ",e.jsx(n.code,{children:"R"})," with the following methods:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"init(): Readonly<R>"})," — returns the raw result of ",e.jsx(n.code,{children:"callback"})," without any management methods (",e.jsx(n.code,{children:"init"}),", ",e.jsx(n.code,{children:"destroyExecute"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"destroyExecute?(): void"})," — only on ",e.jsx(n.code,{children:"local"})," and ",e.jsx(n.code,{children:"global"}),". Resets the cache, allowing the object to be re-created on the next call."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"the-initializer-function-callback-and-its-arguments-args-o",children:["The Initializer Function (",e.jsx(n.code,{children:"callback"}),") and its Arguments (",e.jsx(n.code,{children:"...args: O"}),")"]}),`
`,e.jsxs(n.p,{children:["The main feature of ",e.jsx(n.code,{children:"executeUse"})," is that the factory function (",e.jsx(n.code,{children:"callback"}),") and the arguments passed to it (",e.jsx(n.code,{children:"...args"}),") are used ",e.jsx(n.strong,{children:"only once"})," — during actual initialization (the very first call)."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"callback"})}),": This is a factory describing the state creation logic. Inside it, you typically declare reactive variables (",e.jsx(n.code,{children:"ref"}),", ",e.jsx(n.code,{children:"reactive"}),"), functions to mutate them, and computed values (",e.jsx(n.code,{children:"computed"}),"). The object returned from ",e.jsx(n.code,{children:"callback"}),' will be "frozen" and cached.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"...args: O"})}),": You can pass any arguments into your initializer (e.g., initial state, ID of the entity being loaded, or an API client). These arguments will be forwarded into the ",e.jsx(n.code,{children:"callback"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important note about arguments:"})," Because ",e.jsx(n.code,{children:"executeUse"})," strictly caches the result of the first call, any arguments passed during ",e.jsx(n.strong,{children:"subsequent"})," calls of the same hook in other components ",e.jsx(n.strong,{children:"will be completely ignored"}),". The object will not be recreated, and the ",e.jsx(n.code,{children:"callback"})," function will not run again with new arguments (unless you have previously reset the cache via ",e.jsx(n.code,{children:"destroyExecute()"}),")."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"the-init-placeholder-method",children:["The ",e.jsx(n.code,{children:"init()"})," Placeholder Method"]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"init"})," method is simply an empty placeholder function that returns the exact same frozen state object. It exists ",e.jsx(n.strong,{children:"purely for code readability and Developer Experience (DX)"}),"."]}),`
`,e.jsxs(n.p,{children:["Its main purpose is to give the developer a way to explicitly and visually highlight in the code the exact place where the actual (first) initialization of the singleton takes place. From a technical perspective, ",e.jsx(n.code,{children:"const state = useTheme()"})," and ",e.jsx(n.code,{children:"const state = useTheme().init()"})," do exactly the same thing."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Somewhere deep in the component tree, we simply get the readied state
const theme = useTheme()

// And here, in the root component (or main.ts), 
// we explicitly show other developers: "Initialization happens exactly HERE"
const theme = useTheme().init()
`})}),`
`,e.jsxs(n.h2,{id:"the-executeusetype-enum",children:["The ",e.jsx(n.code,{children:"ExecuteUseType"})," Enum"]}),`
`,e.jsxs(n.h3,{id:"provide-component-scoped-singleton-default",children:[e.jsx(n.code,{children:"provide"})," (component-scoped singleton, default)"]}),`
`,e.jsxs(n.p,{children:["This is a component-oriented singleton that is strictly tied to the lifecycle of a Vue component and its entire subtree. Under the hood, it uses Vue's built-in reactivity and context-passing mechanism (",e.jsx(n.code,{children:"provide"}),"/",e.jsx(n.code,{children:"inject"}),"), allowing you to safely pass the very same state instance deep down the component tree without having to drill it through props."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"For sharing state specifically within a defined component subtree (parent -> multiple nesting levels -> child) without polluting the global store."}),`
`,e.jsx(n.li,{children:"When you need to render multiple independent blocks on the same page (e.g., several complex file uploader widgets), each requiring its own unique state shared only within that widget."}),`
`,e.jsx(n.li,{children:'If you need automatic garbage collection of the data straight from memory when the "owner" component is unmounted.'}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"How it works:"}),`
The first component that calls this function automatically becomes the "owner". The function instantiates the object and immediately calls `,e.jsx(n.code,{children:"provide(id, instance)"}),". Any nested components that call the same function will not create a new object; instead, they retrieve the previously created one via ",e.jsx(n.code,{children:"inject(id)"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: This type lacks a ",e.jsx(n.code,{children:"destroyExecute()"})," method because memory is freed automatically by Vue's reactivity system when the owner component is destroyed."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { executeUseProvide } from '@dxtmisha/functional'
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
`,e.jsxs(n.h3,{id:"global-application-wide-singleton",children:[e.jsx(n.code,{children:"global"})," (application-wide singleton)"]}),`
`,e.jsx(n.p,{children:"This is a classic Singleton architectural pattern, existing as a strictly unique instance throughout the entire lifetime of your application (from initialization to closing the browser tab). It provides a global point of access to state from literally anywhere in the code."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"For storing global application state: authentication, current user profile, language settings, global shopping cart."}),`
`,e.jsx(n.li,{children:"When the same data needs to be accessed from completely distinct, unrelated parts of the application (or even outside Vue components, such as in the router)."}),`
`,e.jsx(n.li,{children:"As a lightweight replacement for Vuex / Pinia for simple state management tasks."}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"How it works:"}),`
The initializer function is `,e.jsx(n.strong,{children:"not executed when called"}),". Instead, it is added to a special internal queue (",e.jsx(n.code,{children:"globalMethods"}),"). Full initialization of all global objects only occurs upon explicitly calling ",e.jsx(n.code,{children:"executeUseGlobalInit()"}),", which is typically placed in ",e.jsx(n.code,{children:"main.ts"})," before the app is mounted. Thereafter, all components receive the same cached object from memory."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { executeUseGlobal, executeUseGlobalInit } from '@dxtmisha/functional'
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
`,e.jsxs(n.h3,{id:"local-closure-cached-singleton",children:[e.jsx(n.code,{children:"local"})," (closure-cached singleton)"]}),`
`,e.jsxs(n.p,{children:["This is an independent singleton that relies on the lexical closure mechanism (",e.jsx(n.code,{children:"closure caching"}),") in JavaScript. Instead of using the Vue context or the global scope, it preserves the once-generated result directly inside its own function memory, instantly returning it on all subsequent calls."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"When to use:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["For utilities, factories, or services not coupled to Vue (",e.jsx(n.code,{children:"provide"}),"/",e.jsx(n.code,{children:"inject"})," only function inside a component's ",e.jsx(n.code,{children:"setup"}),")."]}),`
`,e.jsx(n.li,{children:"When you need an isolated instance of a heavy class or service only at the exact moment it's actually required (lazy initialization on demand), rather than at app startup."}),`
`,e.jsx(n.li,{children:"For caching the results of heavy mathematical calculations or configuration transformations."}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"How it works:"}),`
It does not use Vue mechanisms. On the very first call, the initializer function is executed with the provided arguments. The result is strictly frozen (`,e.jsx(n.code,{children:"Object.freeze"}),") and stored in a variable inside the ",e.jsx(n.code,{children:"executeUse"}),` closure. On all subsequent calls (even if you pass different arguments), the function instantly returns the already saved object from the variable.
The `,e.jsx(n.code,{children:"destroyExecute()"})," method nullifies this internal variable, allowing the initialization algorithm to run again on the next call."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { executeUseLocal } from '@dxtmisha/functional'
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
`,e.jsx(n.h2,{id:"executeuseglobalinit",children:e.jsx(n.code,{children:"executeUseGlobalInit"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`function executeUseGlobalInit(): void
`})}),`
`,e.jsxs(n.p,{children:["Calls all registered global initializers (",e.jsx(n.code,{children:"ExecuteUseType.global"}),") and clears the queue. Calling it again does not re-initialize already created singletons. Should be called ",e.jsx(n.strong,{children:"once"})," at app startup — before mounting the root component."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { createApp } from 'vue'
import { executeUseGlobalInit } from '@dxtmisha/functional'
import App from './App.vue'

executeUseGlobalInit()
createApp(App).mount('#app')
`})})]})}function u(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{u as default};
