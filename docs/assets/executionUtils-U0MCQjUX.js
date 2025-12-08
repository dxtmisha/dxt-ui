import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-Zkkrlp1B.js";import{M as s}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/functional/en/Execution Utils"}),`
`,n.jsx(e.h1,{id:"execution-utilities",children:"Execution Utilities"}),`
`,n.jsx(e.p,{children:"A set of functions for universal execution of synchronous and asynchronous operations."}),`
`,n.jsx(e.h2,{id:"computedbylanguage",children:n.jsx(e.code,{children:"computedByLanguage"})}),`
`,n.jsx(e.p,{children:"Creates a reactive computed property whose value depends on the current language and specified conditions."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getter: ComputedGetter<R>"})," — function that returns the main value depending on the language"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getterNone: R | (() => R)"})," — alternative value if conditions are not met or getter returns undefined (default undefined)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"conditions: () => boolean"})," — condition for calling the main getter (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"debugOptions: DebuggerOptions"})," — Vue debug options (optional)"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { computedByLanguage } from '@dxtmisha/functional'
import { ref } from 'vue'

// Simple example with translations
const title = computedByLanguage(
  () => {
    const lang = GeoRef.get().value
    return lang === 'ru' ? 'Заголовок' : 'Title'
  },
  'Default Title'
)

// With condition
const description = computedByLanguage(
  () => {
    const lang = GeoRef.get().value
    const translations = {
      ru: 'Описание на русском',
      en: 'Description in English'
    }
    return translations[lang]
  },
  () => 'Default description',
  () => showDescription.value // show condition
)

// Usage in component
export default {
  setup() {
    const showText = ref(true)

    const greeting = computedByLanguage(
      () => {
        const lang = GeoRef.get().value
        return lang === 'ru' ? 'Привет, мир!' : 'Hello, world!'
      },
      'Greeting',
      () => showText.value
    )

    return { greeting }
  }
}
`})}),`
`,n.jsx(e.h2,{id:"executefunction",children:n.jsx(e.code,{children:"executeFunction"})}),`
`,n.jsx(e.p,{children:"Executes a function and returns its result, or returns input data if it's not a function."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: T | FunctionArgs<any, T>"})," — function or any value"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { executeFunction } from '@dxtmisha/functional'

executeFunction(() => 'Hello World') // 'Hello World'
executeFunction('Static value') // 'Static value'
executeFunction(() => 42 + 8) // 50
executeFunction({ data: 'object' }) // { data: 'object' }
`})}),`
`,n.jsx(e.h2,{id:"executepromise",children:n.jsx(e.code,{children:"executePromise"})}),`
`,n.jsx(e.p,{children:"Executes an asynchronous function or returns a value, automatically handling Promise."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: (() => Promise<T>) | (() => T) | T"})," — async function, sync function or value"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { executePromise } from '@dxtmisha/functional'

await executePromise(async () => fetch('/api').then(r => r.json())) // Promise result
await executePromise(() => 'Sync result') // 'Sync result'
await executePromise('Static value') // 'Static value'
`})}),`
`,n.jsx(e.h2,{id:"executeuse",children:n.jsx(e.code,{children:"executeUse"})}),`
`,n.jsx(e.p,{children:"Returns a function for caching and reusing initialization results in Vue components. Supports various modes: local caching, global state, inheritance via provide/inject and automatic cleanup on unmount."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: (...args: O) => R"})," — initialization function whose result will be cached"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unmounted: boolean"})," — whether to delete data from cache on component unmount (default ",n.jsx(e.code,{children:"true"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isGlobal: boolean"})," — whether object is global for entire application (default ",n.jsx(e.code,{children:"false"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isProvide: boolean"})," — whether to use provide/inject for inheritance in child components (default ",n.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"}),`
Function that executes callback and caches result on first call, returns cached value on subsequent calls.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { executeUse } from '@dxtmisha/functional'
import { reactive, ref } from 'vue'

// Simple state caching
const useCounter = executeUse(() => {
  return reactive({
    count: 0,
    increment() { this.count++ },
    decrement() { this.count-- }
  })
})

// In component
const counter = useCounter() // created once
counter.increment()

// Caching with parameters
const useStore = executeUse((initialData) => {
  return reactive({
    data: initialData,
    loading: false,
    error: null,
    async fetch() {
      this.loading = true
      try {
        this.data = await api.getData()
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    }
  })
})

// Global state (persists between components)
const useGlobalTheme = executeUse(
  () => reactive({ theme: 'dark', language: 'en' }),
  false,  // don't delete on unmount
  true,   // global state
  false   // without provide/inject
)

// API client caching
const useApiClient = executeUse(() => {
  const baseURL = process.env.VUE_APP_API_URL

  return {
    async get(endpoint) {
      const response = await fetch(\`\${baseURL}\${endpoint}\`)
      return response.json()
    },
    async post(endpoint, data) {
      const response = await fetch(\`\${baseURL}\${endpoint}\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      return response.json()
    }
  }
})

// Usage in components
export default {
  setup() {
    // All calls return the same object
    const counter = useCounter()
    const store = useStore({ items: [] })
    const theme = useGlobalTheme()
    const api = useApiClient()

    return { counter, store, theme, api }
  }
}
`})})]})}function h(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{h as default};
