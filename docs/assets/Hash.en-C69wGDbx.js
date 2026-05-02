import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/Hash - URL Hash State`}),`
`,(0,c.jsx)(n.h1,{id:`hash-class`,children:`Hash Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A static facade class for managing data stored in the URL hash (`,(0,c.jsx)(n.code,{children:`#`}),`). It delegates execution to the `,(0,c.jsx)(n.code,{children:`HashInstance`}),` class, providing centralized access and state isolation (e.g., for SSR).`]}),`
`,(0,c.jsxs)(n.p,{children:[`It automatically synchronizes application state with the URL — every `,(0,c.jsx)(n.code,{children:`set`}),` call updates the browser's hash string, while the `,(0,c.jsx)(n.code,{children:`hashchange`}),` event refreshes the internal state.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`URL Synchronization`}),` — Data is stored in a human-readable format in the hash string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Reactivity via Watchers`}),` — The `,(0,c.jsx)(n.code,{children:`addWatch`}),` method allows subscribing to changes on a specific variable.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Auto-initialization`}),` — When the page loads, data is automatically read from the URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Smart Typing`}),` — Values are deserialized from a string: numbers, booleans, and objects are restored to their original types.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`SSR Isolation`}),` — `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` ensures a unique data instance for each request on the server.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`The class is static and initializes automatically upon the first access.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// URL: https://myapp.com/#page=2;filter=active

import { Hash } from '@dxtmisha/functional-basic'

const page = Hash.get('page')    // 2 (number)
const filter = Hash.get('filter') // 'active' (string)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`instance`,children:`Instance`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static getItem(): HashInstance`}),` — Returns the current `,(0,c.jsx)(n.code,{children:`HashInstance`}),` (isolated for the current request).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`reading-and-writing`,children:`Reading and Writing`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static get<T>(name: string, defaultValue?: T | (() => T)): T`}),` — Returns the value of a hash variable.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static set<T>(name: string, callback: T | (() => T)): void`}),` — Sets a variable's value and updates the URL hash.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`watchers`,children:`Watchers`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static addWatch<T>(name: string, callback: (value: T) => void): void`}),` — Subscribes to changes for a specific hash variable.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static removeWatch<T>(name: string, callback: (value: T) => void): void`}),` — Unsubscribes from changes for a specific variable.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`management`,children:`Management`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static reload(): void`}),` — Forces synchronization of the state with the current URL hash.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`reading-and-writing-1`,children:`Reading and Writing`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Hash } from '@dxtmisha/functional-basic'

// Reading with a default value
const page = Hash.get<number>('page', 1)

// Writing (URL changes to #page=3)
Hash.set('page', 3)

// Writing via a function
Hash.set('page', () => page + 1)
`})}),`
`,(0,c.jsx)(n.h3,{id:`subscribing-to-changes`,children:`Subscribing to Changes`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Hash.addWatch<string>('filter', (newFilter) => {
  console.log('Filter changed to:', newFilter)
})

// Unsubscribe (callback must be a reference to the same function)
Hash.removeWatch('filter', callback)
`})}),`
`,(0,c.jsx)(n.h3,{id:`managing-page-state`,children:`Managing Page State`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Initialize filters with a default value
const filter = Hash.get('filter', 'all')
const sort = Hash.get('sort', 'date')

// Change on user action
Hash.set('filter', 'active')
// URL: #filter=active;sort=date
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};