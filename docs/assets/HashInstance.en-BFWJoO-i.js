import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/HashInstance - URL Hash Instance`}),`
`,(0,c.jsx)(n.h1,{id:`hashinstance-class`,children:`HashInstance Class`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`HashInstance`}),` is the core class that implements the logic for managing data in the URL hash. It provides state storage, mechanisms for subscribing to changes, and synchronization with the browser API.`]}),`
`,(0,c.jsxs)(n.p,{children:[`You can use this class directly if you need isolated hash management separate from the global `,(0,c.jsx)(n.code,{children:`Hash`}),` state.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Isolated State`}),` — Stores its own set of hash variables.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chainable API`}),` — Most methods return `,(0,c.jsx)(n.code,{children:`this`}),`, allowing for concise code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Synchronization`}),` — Upon initialization, it reads data from the URL and subscribes to the `,(0,c.jsx)(n.code,{children:`hashchange`}),` event.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`SSR Compatibility`}),` — Works safely in server-side environments using stubs for DOM APIs.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To create an instance, use the `,(0,c.jsx)(n.code,{children:`HashInstance()`}),` constructor.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { HashInstance } from '@dxtmisha/functional-basic'

const myHash = new HashInstance()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`reading-and-writing`,children:`Reading and Writing`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<T>(name: string, defaultValue?: T | (() => T)): T`}),` — Returns the value of a variable. If it doesn't exist, sets `,(0,c.jsx)(n.code,{children:`defaultValue`}),` and returns it.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set<T>(name: string, callback: T | (() => T)): this`}),` — Updates the variable's value and synchronizes the URL.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`watchers`,children:`Watchers`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addWatch<T>(name: string, callback: (value: T) => void): this`}),` — Adds a handler for variable changes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`removeWatch<T>(name: string, callback: (value: T) => void): this`}),` — Removes a handler.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`management`,children:`Management`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reload(): this`}),` — Refreshes the internal state from the current URL hash.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`using-an-isolated-instance`,children:`Using an Isolated Instance`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const searchHash = new HashInstance()

// Subscribe
searchHash.addWatch('query', (q) => {
  console.log('Search:', q)
})

// Set value (will update URL)
searchHash.set('query', 'smartphones')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};