import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as a}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"@dxtmisha/en/functional-basic/Classes/Translate - Translation and Text Management"}),`
`,e.jsx(n.h1,{id:"translate-class",children:"Translate Class"}),`
`,e.jsx(n.p,{children:"A static utility class for managing translations and localized text. It provides powerful tools for retrieving, caching, and displaying content with template support, automatic locale detection, and batch request loading for optimized performance."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Batch Loading"})," — Intelligently groups translation requests, sending them as a single pack 160ms after being queued."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible Templates"})," — Supports parameter replacement in text using both indices (",e.jsx(n.code,{children:"[0]"}),") and named keys (",e.jsx(n.code,{children:"{key}"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sync and Async Access"})," — Methods for instant text retrieval from cache (",e.jsx(n.code,{children:"getSync"}),") or guaranteed server loading (",e.jsx(n.code,{children:"get"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smart Cache"})," — Stores translations scoped to the current locale and supports fallbacks (language-country → language → global)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Local Development"})," — The ",e.jsx(n.code,{children:"addNormalOrSync"})," mode automatically switches between mocks and real requests based on the environment."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.p,{children:"The class is static and does not require instantiation. The primary configuration consists of setting the API URL."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Translate } from '@dxtmisha/functional-basic'

// Configure API URL for requests
Translate.setUrl('/api/v1/translate')

// Preload necessary texts
await Translate.add(['welcome', 'auth.login', 'errors.required'])
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"translation-retrieval",children:"Translation Retrieval"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"async get(name: string, replacement?: any): Promise<string>"})," — Asynchronously retrieves text. If not in cache and not on localhost, it attempts to load it from the server."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSync(name: string, first?: boolean, replacement?: any): string"})," — Returns text from the cache. If ",e.jsx(n.code,{children:"first"})," is ",e.jsx(n.code,{children:"true"}),", returns a space ",e.jsx(n.code,{children:" "})," if the text is missing; otherwise, returns the code ",e.jsx(n.code,{children:"name"})," itself."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"async getList(names: TranslateCode[]): Promise<TranslateList>"})," — Retrieves an object with a group of translations (asynchronous)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getListSync(names: TranslateCode[], first?: boolean): TranslateList"})," — Retrieves an object with a group of translations from the cache (synchronous)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"data-management",children:"Data Management"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"async add(names: string | string[]): Promise<void>"})," — Adds codes to the loading queue. Requests are batched to minimize network load."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addSync(data: Record<string, string>): void"})," — Directly adds translated strings to the cache."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"async addNormalOrSync(data: Record<string, string>): Promise<void>"})," — Intelligent addition: behaves as ",e.jsx(n.code,{children:"addSync"})," on localhost, and as ",e.jsx(n.code,{children:"add"})," otherwise."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addSyncByLocation(data: Record<string, Record<string, string>>): void"})," — Bulk-adds texts tied to specific locales."]}),`
`]}),`
`,e.jsx(n.h3,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setUrl(url: string): Translate"})," — Sets the API path for loading translations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setPropsName(name: string): Translate"})," — Sets the property name in the request body (default is ",e.jsx(n.code,{children:"list"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"working-with-templates",children:"Working with Templates"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// In database: "Hello, [0]! You have {count} notifications."
const text = await Translate.get('user.notifications', ['John', { count: 5 }])
// Result: "Hello, John! You have 5 notifications."
`})}),`
`,e.jsx(n.h3,{id:"synchronous-usage-in-components",children:"Synchronous Usage in Components"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// First, load everything needed (e.g., during app initialization)
await Translate.add(['btn.save', 'btn.cancel'])

// Inside a component, use synchronously to avoid excessive await usage
const label = Translate.getSync('btn.save')
`})}),`
`,e.jsx(n.h3,{id:"bulk-list-retrieval",children:"Bulk List Retrieval"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const labels = await Translate.getList([
  'home.title',
  ['home.welcome', 'Guest'], // with immediate template replacement
  'home.footer'
])

console.log(labels['home.welcome']) // "Welcome, Guest!"
`})})]})}function x(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};
