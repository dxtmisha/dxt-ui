import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/DataStorage - Local and Session Storage Wrapper"}),`
`,e.jsx(n.h1,{id:"datastorage-class",children:"DataStorage Class"}),`
`,e.jsxs(n.p,{children:["A versatile class for interacting with the browser's ",e.jsx(n.code,{children:"localStorage"})," and ",e.jsx(n.code,{children:"sessionStorage"}),". It features built-in prefixes, cache expiration, memory caching for active instances, and automatic JSON serialization."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Serialization"})," — seamlessly handles JSON parsing and stringifying for stored configurations and objects."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Time-based Caching"})," — allows saving objects with timestamps and respects age constraints during data retrieval."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prefix Management"})," — supports global and instance-specific prefixes to isolate and group keys within ",e.jsx(n.code,{children:"localStorage"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Memory Efficiency"})," — creates singletons for identical keys, avoiding duplicate reads from disk."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"DataStorage(name, isSession)"})," constructor."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — the name of the storage key."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isSession: boolean = false"})," — whether to use ",e.jsx(n.code,{children:"sessionStorage"})," (defaults to ",e.jsx(n.code,{children:"localStorage"}),")."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DataStorage } from '@dxtmisha/functional'

// 1. Create an instance for localStorage
const settings = new DataStorage('settings')

// 2. Create an instance for sessionStorage
const session = new DataStorage('user_session', true)
`})}),`
`,e.jsx(n.h2,{id:"global-settings",children:"Global Settings"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setPrefix(newPrefix: string): void"})," (static) — Changes the global prefix applied to new instances attempting to use ",e.jsx(n.code,{children:"localStorage"}),". The default prefix is ",e.jsx(n.code,{children:"ui-storage"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"data-management",children:"Data Management"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Retrieves the currently saved structured configuration."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | (() => T)"})," — a fallback value to return if the storage is empty."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cache?: number"})," — maximum allowed age (in seconds). If the data is older, it behaves as if nothing was stored."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T | undefined"})," — the stored value or ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Get data, falling back to an empty object if not found
const currentSettings = settings.get({})

// Get data only if it was saved within the last 60 seconds
const cachedItem = settings.get(undefined, 60)
`})}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsx(n.p,{children:"Sets or updates the value in the storage mechanism."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: T | (() => T)"})," — the value to save. Passing ",e.jsx(n.code,{children:"undefined"})," will delete the item from storage."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T | undefined"})," — the stored value."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`settings.set({ theme: 'dark', notifications: true })
`})}),`
`,e.jsx(n.h2,{id:"additional-methods",children:"Additional Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"remove(): this"})," — Clears the corresponding key actively from the ",e.jsx(n.code,{children:"localStorage"})," or ",e.jsx(n.code,{children:"sessionStorage"})," environments, and immediately unsets the existing memory instance."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"update(): this"})," — Forces the memory instance to synchronize tightly with the current raw data inside the physical Storage APIs."]}),`
`]})]})}function x(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
