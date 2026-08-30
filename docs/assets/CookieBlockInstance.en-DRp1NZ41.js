import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/CookieBlockInstance - Cookie Access Status Instance`}),`
`,(0,c.jsx)(t.h1,{id:`cookieblockinstance-class`,children:`CookieBlockInstance Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`CookieBlockInstance`}),` class is responsible for managing the cookie access status at the instance level. It provides a localized state for blocking or allowing cookie operations, which is essential for request isolation in Server-Side Rendering (SSR) or when multiple independent contexts are required.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Includes tight integration with `,(0,c.jsx)(t.code,{children:`DataStorage`}),` for reliable state persistence.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Instance-Based`}),` — allows creating separate instances with their own block status`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`DataStorage Integration`}),` — automatically persists the block status using the `,(0,c.jsx)(t.code,{children:`DataStorage`}),` class`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR Compatible`}),` — designed to work seamlessly in server-side environments by leveraging the singleton-per-request pattern when wrapped by `,(0,c.jsx)(t.code,{children:`CookieBlock`})]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsx)(t.h4,{id:`set`,children:(0,c.jsx)(t.code,{children:`set`})}),`
`,(0,c.jsxs)(t.p,{children:[`Updates the cookie access status. When set to `,(0,c.jsx)(t.code,{children:`true`}),`, blocks all cookie write operations within this instance's context.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: boolean`}),` — the new status to set`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`check`,children:`Check`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): boolean`}),` — Returns the current cookie access status. `,(0,c.jsx)(t.code,{children:`true`}),` if cookies are blocked, `,(0,c.jsx)(t.code,{children:`false`}),` otherwise`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CookieBlockInstance } from '@dxtmisha/functional-basic'

const cookieBlock = new CookieBlockInstance()

// Get the current status
console.log(cookieBlock.get()) // false (default)

// Set status to blocked
cookieBlock.set(true)

console.log(cookieBlock.get()) // true

// Unblock
cookieBlock.set(false)

console.log(cookieBlock.get()) // false
`})}),`
`,(0,c.jsx)(t.h3,{id:`using-via-cookieblock`,children:`Using via CookieBlock`}),`
`,(0,c.jsxs)(t.p,{children:[`While `,(0,c.jsx)(t.code,{children:`CookieBlockInstance`}),` can be used directly, it is typically accessed through the static `,(0,c.jsx)(t.code,{children:`CookieBlock`}),` wrapper:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CookieBlock } from '@dxtmisha/functional-basic'

// CookieBlock automatically creates an isolated instance for each request
CookieBlock.set(true)

// Status is accessible through static methods
if (CookieBlock.get()) {
  console.log('Cookies are blocked in the current context')
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`independent-contexts`,children:`Independent Contexts`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CookieBlockInstance } from '@dxtmisha/functional-basic'

// Create independent instances
const block1 = new CookieBlockInstance()
const block2 = new CookieBlockInstance()

block1.set(true)

console.log(block1.get()) // true
console.log(block2.get()) // false (independent instance)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};