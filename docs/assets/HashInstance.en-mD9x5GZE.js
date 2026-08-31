import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/HashInstance - URL Hash Instance`}),`
`,(0,c.jsx)(t.h1,{id:`hashinstance-class`,children:`HashInstance Class`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`HashInstance`}),` is the core class that implements the logic for managing data in the URL hash. It provides state storage, mechanisms for subscribing to changes, and synchronization with the browser API.`]}),`
`,(0,c.jsxs)(t.p,{children:[`You can use this class directly if you need isolated hash management separate from the global `,(0,c.jsx)(t.code,{children:`Hash`}),` state.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Isolated State`}),` — Stores its own set of hash variables.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chainable API`}),` — Most methods return `,(0,c.jsx)(t.code,{children:`this`}),`, allowing for concise code.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Synchronization`}),` — Upon initialization, it reads data from the URL and subscribes to the `,(0,c.jsx)(t.code,{children:`hashchange`}),` event.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR Compatibility`}),` — Works safely in server-side environments using stubs for DOM APIs.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To create an instance, use the `,(0,c.jsx)(t.code,{children:`HashInstance()`}),` constructor.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { HashInstance } from '@dxtmisha/functional-basic'

const myHash = new HashInstance()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`reading-and-writing`,children:`Reading and Writing`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get<T>(name: string, defaultValue?: T | (() => T)): T`}),` — Returns the value of a variable. If it doesn't exist, sets `,(0,c.jsx)(t.code,{children:`defaultValue`}),` and returns it.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set<T>(name: string, callback: T | (() => T)): this`}),` — Updates the variable's value and synchronizes the URL.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`watchers`,children:`Watchers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addWatch<T>(name: string, callback: (value: T) => void): this`}),` — Adds a handler for variable changes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`removeWatch<T>(name: string, callback: (value: T) => void): this`}),` — Removes a handler.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`management`,children:`Management`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reload(): this`}),` — Refreshes the internal state from the current URL hash.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`using-an-isolated-instance`,children:`Using an Isolated Instance`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const searchHash = new HashInstance()

// Subscribe
searchHash.addWatch('query', (q) => {
  console.log('Search:', q)
})

// Set value (will update URL)
searchHash.set('query', 'smartphones')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};