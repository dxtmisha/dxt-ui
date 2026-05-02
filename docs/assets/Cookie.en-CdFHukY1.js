import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/Cookie - Cookie Management`}),`
`,(0,c.jsx)(n.h1,{id:`cookie-class`,children:`Cookie Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A seamless wrapper for managing browser cookies. Automatically syncs between memory and the `,(0,c.jsx)(n.code,{children:`document.cookie`}),` DOM API, allowing reactive setting, retrieval, and deletion of cookies while ensuring consistent fallback values.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Includes tight integration with `,(0,c.jsx)(n.code,{children:`CookieStorage`}),` for low-level management and respects global blocking via `,(0,c.jsx)(n.code,{children:`CookieBlock`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Memory Sync`}),` — maintains an in-memory record of cookies to prevent unnecessary DOM traversals`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Environment Aware`}),` — detects if running in a DOM environment. In SSR or testing, elegantly degrades to memory-only storage`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Blocking Control`}),` — integrates securely with `,(0,c.jsx)(n.code,{children:`CookieBlock`}),`. If cookie writing is globally disabled, the class respects this and suspends all DOM changes`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Default/Fallback Logic`}),` — getting a value can lazily initialize it with a default if it doesn't already exist`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`constructor`,children:`Constructor`}),`
`,(0,c.jsxs)(n.p,{children:[`A `,(0,c.jsx)(n.code,{children:`Cookie`}),` instance can be created to manage a specific cookie. If an instance with the same name already exists, it will be returned.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — the cookie name to manage`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsx)(n.h4,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Reads the cookie value. If the value doesn't exist and a default is provided, it will be saved and returned. Supports functions for lazy default value computation.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | string | (() => T | string)`}),` — default value or function returning the value`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: CookieOptions`}),` — cookie options (used when setting default value)`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`T | string | undefined`}),` — the cookie value or the assigned default`]}),`
`,(0,c.jsx)(n.h4,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Stores or updates a cookie value with specified options. Supports functions for dynamic value computation. If blocking is active via `,(0,c.jsx)(n.code,{children:`CookieBlock`}),`, the value is stored in memory only.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: T | string | (() => T | string)`}),` — the value to store or a function returning the value`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: CookieOptions`}),` — cookie options (lifetime, SameSite, additional arguments)`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h4,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsxs)(n.p,{children:[`Removes a cookie by overwriting it with an empty string and setting Max-Age to `,(0,c.jsx)(n.code,{children:`-1`}),`, instructing the browser to instantly delete the record.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`static-methods`,children:`Static Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getInstance<T>(name: string): Cookie<T>`}),` — Returns an existing instance or creates a new one by name`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`auxiliary`,children:`Auxiliary`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`CookieStorage.update()`}),` — Updates data from `,(0,c.jsx)(n.code,{children:`document.cookie`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`cookieoptions`,children:(0,c.jsx)(n.code,{children:`CookieOptions`})}),`
`,(0,c.jsx)(n.p,{children:`Configuration object for cookie parameters:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`age?: number`}),` — lifetime in seconds (Max-Age attribute). Default: 7 days (604800 sec)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`sameSite?: 'strict' | 'lax'`}),` — SameSite policy. Default: `,(0,c.jsx)(n.code,{children:`'strict'`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`arguments?: string[]`}),` — additional directives appended to the cookie string`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Cookie } from '@dxtmisha/functional'

// Create instance to manage 'theme' cookie
const themeCookie = new Cookie('theme')

// Read with default value
const currentTheme = themeCookie.get('dark')

// Set value
themeCookie.set('light')

// Set with options
themeCookie.set('dark', {
  age: 60 * 60 * 24 * 30, // 30 days
  sameSite: 'lax'
})

// Remove
themeCookie.remove()
`})}),`
`,(0,c.jsx)(n.h3,{id:`using-getinstance`,children:`Using getInstance`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Cookie } from '@dxtmisha/functional'

// Get or create instance
const cookie = Cookie.getInstance<string>('user')

// All getInstance calls with the same name return the same instance
const sameCookie = Cookie.getInstance<string>('user')

console.log(cookie === sameCookie) // true
`})}),`
`,(0,c.jsx)(n.h3,{id:`cookieblock-integration`,children:`CookieBlock Integration`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Cookie, CookieBlock } from '@dxtmisha/functional'

// Block all write operations
CookieBlock.set(true)

const cookie = new Cookie('blocked')

// Value is saved in memory, but not in DOM
cookie.set('value')

// Unblock
CookieBlock.set(false)

// Now writes work normally
cookie.set('newValue')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};