import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/Cookie - Cookie Management`}),`
`,(0,c.jsx)(n.h1,{id:`cookie-class`,children:`Cookie Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A seamless, stateful wrapper for managing browser cookies. It automatically syncs between memory and the `,(0,c.jsx)(n.code,{children:`document.cookie`}),` DOM API, allowing you to reactively set, retrieve, and delete cookies while ensuring consistent fallback values.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Memory Sync`}),` — maintains an in-memory record of cookies to prevent unnecessary DOM traversals. Automatically parses `,(0,c.jsx)(n.code,{children:`document.cookie`}),` on startup.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Environment Aware`}),` — detects if it is running in a DOM environment. In SSR (Server-Side Rendering) or testing (non-DOM), it elegantly degrades to memory-only storage without throwing errors.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Blocking Control`}),` — integrates securely with `,(0,c.jsx)(n.code,{children:`CookieBlock`}),`. If cookie writing is globally disabled (e.g., due to user privacy consent), the `,(0,c.jsx)(n.code,{children:`Cookie`}),` class respects this and suspends all outgoing DOM changes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Default/Fallback Logic`}),` — getting a value can lazily initialize it with a default standard if it doesn't already exist.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`Cookie(name)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — the name of the cookie you want to manage.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Cookie } from '@dxtmisha/functional'

// 1. Initialize wrapper for the 'theme' cookie
const themeCookie = new Cookie('theme')
`})}),`
`,(0,c.jsx)(n.h2,{id:`data-management`,children:`Data Management`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsxs)(n.p,{children:[`Use `,(0,c.jsx)(n.code,{children:`get()`}),` to read the cookie. If you pass a default value to `,(0,c.jsx)(n.code,{children:`get()`}),`, it will simultaneously save that default if the cookie was previously unset.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: T | string | (() => T | string)`}),` — optional default value or a function returning it.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`T | string | undefined`}),` — the value from the cookie, or the assigned default.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Will read 'theme', OR set and return 'dark' if it doesn't exist
const currentTheme = themeCookie.get('dark') 
`})}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Use `,(0,c.jsx)(n.code,{children:`set()`}),` to override or create new data. Options allow you to control standard cookie attributes like `,(0,c.jsx)(n.code,{children:`age`}),` (Max-Age cache duration in seconds) or `,(0,c.jsx)(n.code,{children:`sameSite`}),` policy.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T | string | (() => T | string)`}),` — the value to store, or a function returning the value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: CookieOptions`}),` — configuration for the cookie lifetime and security.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const userPrefs = new Cookie('preferences')

// Set a simple string
userPrefs.set('{"compact": true}')

// Set with advanced options
userPrefs.set('{"compact": true}', {
  age: 60 * 60 * 24 * 30, // 30 days
  sameSite: 'lax'
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsxs)(n.p,{children:[`Removing a cookie overwrites it with an empty string and sets its Max-Age to `,(0,c.jsx)(n.code,{children:`-1`}),`, instructing the browser to instantly delete the record.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`userPrefs.remove()
`})}),`
`,(0,c.jsx)(n.h2,{id:`synchronization`,children:`Synchronization`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`updateData(): void`}),` (static) — Updates data from `,(0,c.jsx)(n.code,{children:`document.cookie`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cookieoptions`,children:`CookieOptions`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`CookieOptions`}),` is a configuration object for the `,(0,c.jsx)(n.code,{children:`get`}),` and `,(0,c.jsx)(n.code,{children:`set`}),` methods:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`age?: number`}),` — cookie lifetime in `,(0,c.jsx)(n.strong,{children:`seconds`}),` (`,(0,c.jsx)(n.code,{children:`Max-Age`}),` attribute). Default: 7 days (604800 sec). Automatically set to `,(0,c.jsx)(n.code,{children:`-1`}),` when deleting via `,(0,c.jsx)(n.code,{children:`remove()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`sameSite?: 'strict' | 'lax'`}),` — the `,(0,c.jsx)(n.code,{children:`SameSite`}),` policy. Default: `,(0,c.jsx)(n.code,{children:`'strict'`}),` (cookie is only sent on same-site navigations). `,(0,c.jsx)(n.code,{children:`'lax'`}),` also allows sending on cross-site GET requests.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`arguments?: string[]`}),` — additional directives appended to the cookie string (e.g. `,(0,c.jsx)(n.code,{children:`'Secure'`}),`, `,(0,c.jsx)(n.code,{children:`'Path=/'`}),`, `,(0,c.jsx)(n.code,{children:`'Domain=.myapp.com'`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};