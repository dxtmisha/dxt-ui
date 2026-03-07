import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(a){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/en/functional-basic/Classes/Hash - URL Hash State"}),`
`,e.jsx(n.h1,{id:"hash-class",children:"Hash Class"}),`
`,e.jsxs(n.p,{children:["A static class for managing data stored in the URL hash (",e.jsx(n.code,{children:"#"}),"). It automatically synchronizes application state with the URL — every ",e.jsx(n.code,{children:"set"})," call updates the browser's hash string, while the ",e.jsx(n.code,{children:"hashchange"})," event refreshes the internal state."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"URL Synchronization"})," — Data is stored in a human-readable format in the hash string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reactivity via Watchers"})," — The ",e.jsx(n.code,{children:"addWatch"})," method allows subscribing to changes on a specific variable."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Auto-initialization"})," — When the page loads, data is automatically read from the URL."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smart Typing"})," — Values are deserialized from a string: numbers, booleans, and objects are restored to their original types."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.p,{children:"The class is static and initializes automatically on page load — reading the current URL hash string."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// URL: https://myapp.com/#page=2;filter=active

import { Hash } from '@dxtmisha/functional-basic'

const page = Hash.get('page')    // 2 (number)
const filter = Hash.get('filter') // 'active' (string)
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get<T>(name: string, defaultValue?: T | (() => T)): T"})," — Returns the value of a hash variable. If the value doesn't exist, it is set using ",e.jsx(n.code,{children:"defaultValue"})," (which can be a function)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"set<T>(name: string, callback: T | (() => T)): void"})," — Sets a variable's value and updates the URL hash. If the value hasn't changed, no update occurs."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addWatch<T>(name: string, callback: (value: T) => void): void"})," — Subscribes to changes for a specific hash variable."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reload(): void"})," — Reads the current URL hash and synchronizes it with the internal state."]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"reading-and-writing",children:"Reading and Writing"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Hash } from '@dxtmisha/functional-basic'

// Reading with a default value
const page = Hash.get<number>('page', 1)

// Writing (URL changes to #page=3)
Hash.set('page', 3)

// Writing via a function
Hash.set('page', () => page + 1)
`})}),`
`,e.jsx(n.h3,{id:"subscribing-to-changes",children:"Subscribing to Changes"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`Hash.addWatch<string>('filter', (newFilter) => {
  console.log('Filter changed to:', newFilter)
  loadData(newFilter)
})
`})}),`
`,e.jsx(n.h3,{id:"managing-page-state",children:"Managing Page State"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Initialize filters with a default value
const filter = Hash.get('filter', 'all')
const sort = Hash.get('sort', 'date')

// Change on user action
Hash.set('filter', 'active')
// URL: #filter=active;sort=date
`})})]})}function g(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}export{g as default};
