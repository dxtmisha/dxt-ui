import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/Query - URL Query State`}),`
`,(0,c.jsx)(t.h1,{id:`query-class`,children:`Query Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A static facade class for managing data stored in the URL query parameters (GET parameters). It delegates execution to the `,(0,c.jsx)(t.code,{children:`QueryInstance`}),` class, providing centralized access and state isolation (e.g., for SSR).`]}),`
`,(0,c.jsxs)(t.p,{children:[`It automatically synchronizes application state with the URL — every `,(0,c.jsx)(t.code,{children:`set`}),` call updates the browser's query string, while the `,(0,c.jsx)(t.code,{children:`popstate`}),` event refreshes the internal state.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`URL Synchronization`}),` — Data is stored in standard query parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Reactivity via Watchers`}),` — The `,(0,c.jsx)(t.code,{children:`addWatch`}),` method allows subscribing to changes on a specific query variable.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Auto-initialization`}),` — When the page loads, data is automatically read from the URL search parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Smart Typing`}),` — Values are deserialized from a string: numbers, booleans, and objects are restored to their original types.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR Isolation`}),` — `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` ensures a unique data instance for each request on the server, integrated with `,(0,c.jsx)(t.code,{children:`UrlItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:`The class is static and initializes automatically upon the first access.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// URL: https://myapp.com/?page=2&filter=active

import { Query } from '@dxtmisha/functional-basic'

const page = Query.get('page')    // 2 (number)
const filter = Query.get('filter') // 'active' (string)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`instance`,children:`Instance`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getItem(): QueryInstance`}),` — Returns the current `,(0,c.jsx)(t.code,{children:`QueryInstance`}),` (isolated for the current request).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`reading-and-writing`,children:`Reading and Writing`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get<T>(name: string, defaultValue?: T | (() => T)): T`}),` — Returns the value of a query variable.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static set<T>(name: string, callback: T | (() => T)): void`}),` — Sets a variable's value and updates the URL query parameters.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`watchers`,children:`Watchers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static addWatch<T>(name: string, callback: (value: T) => void): void`}),` — Subscribes to changes for a specific query variable.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static removeWatch<T>(name: string, callback: (value: T) => void): void`}),` — Unsubscribes from changes for a specific variable.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`management`,children:`Management`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static reload(): void`}),` — Forces synchronization of the state with the current URL query parameters.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`reading-and-writing-1`,children:`Reading and Writing`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Query } from '@dxtmisha/functional-basic'

// Reading with a default value
const page = Query.get<number>('page', 1)

// Writing (URL changes to ?page=3)
Query.set('page', 3)

// Writing via a function
Query.set('page', () => page + 1)
`})}),`
`,(0,c.jsx)(t.h3,{id:`subscribing-to-changes`,children:`Subscribing to Changes`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`Query.addWatch<string>('filter', (newFilter) => {
  console.log('Filter changed to:', newFilter)
})

// Unsubscribe (callback must be a reference to the same function)
Query.removeWatch('filter', callback)
`})}),`
`,(0,c.jsx)(t.h3,{id:`managing-page-state`,children:`Managing Page State`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Initialize filters with a default value
const filter = Query.get('filter', 'all')
const sort = Query.get('sort', 'date')

// Change on user action
Query.set('filter', 'active')
// URL: ?filter=active&sort=date
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};