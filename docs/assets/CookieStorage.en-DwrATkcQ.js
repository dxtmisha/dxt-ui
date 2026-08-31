import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/CookieStorage - Cookie Storage`}),`
`,(0,c.jsx)(t.h1,{id:`cookiestorage-class`,children:`CookieStorage Class`}),`
`,(0,c.jsx)(t.p,{children:`A class for managing cookie storage with support for custom listeners. Provides a low-level interface for working with cookies in different environments (DOM, SSR) with automatic type parsing and secure data handling.`}),`
`,(0,c.jsxs)(t.p,{children:[`Includes tight integration with `,(0,c.jsx)(t.code,{children:`CookieBlock`}),` for access control and supports URL-encoded value decoding.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Flexible Storage`}),` — supports in-memory storage and external storage mechanisms through listeners`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Parsing`}),` — intelligently converts string values to appropriate data types`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Block Integration`}),` — respects global write blocking via `,(0,c.jsx)(t.code,{children:`CookieBlock`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Environment Awareness`}),` — automatically detects DOM environment and adapts behavior`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`URL Decoding`}),` — automatically decodes names and values when reading from DOM`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`static-methods`,children:`Static Methods`}),`
`,(0,c.jsx)(t.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsx)(t.h4,{id:`get`,children:(0,c.jsx)(t.code,{children:`get`})}),`
`,(0,c.jsx)(t.p,{children:`Retrieves a cookie value by name with automatic type conversion. If the value doesn't exist and a default is provided, it will be set and stored.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — the cookie name`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: T | (() => T)`}),` — default value or function returning the value`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`T | undefined`}),` — the converted cookie value or default value`]}),`
`,(0,c.jsx)(t.h4,{id:`set`,children:(0,c.jsx)(t.code,{children:`set`})}),`
`,(0,c.jsxs)(t.p,{children:[`Stores a cookie value with specified options and automatically updates both memory and DOM. If blocking is active via `,(0,c.jsx)(t.code,{children:`CookieBlock`}),`, the value is stored in memory only.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — the cookie name`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T | (() => T)`}),` — the value or a function returning the value`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: CookieOptions`}),` — additional cookie options`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`T`}),` — the stored value`]}),`
`,(0,c.jsx)(t.h4,{id:`remove`,children:(0,c.jsx)(t.code,{children:`remove`})}),`
`,(0,c.jsxs)(t.p,{children:[`Removes a cookie by setting an empty value and negative expiration. Equivalent to calling `,(0,c.jsx)(t.code,{children:`set(name, '', { age: -1 })`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — the cookie name`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(getListener?, getListenerRaw?, setListener?)`}),` — Initializes the storage with custom listeners for reading and writing data. The `,(0,c.jsx)(t.code,{children:`setListener`}),` takes 4 arguments: `,(0,c.jsx)(t.code,{children:`(key, value, cookie, options)`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset()`}),` — Resets the storage by clearing all in-memory items and removing listeners`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`auxiliary`,children:`Auxiliary`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`update()`}),` — Updates in-memory data by parsing values from `,(0,c.jsx)(t.code,{children:`document.cookie`})]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`cookieoptions`,children:(0,c.jsx)(t.code,{children:`CookieOptions`})}),`
`,(0,c.jsx)(t.p,{children:`Configuration object for cookie parameters:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`age?: number`}),` — lifetime in seconds (max-age attribute)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sameSite?: 'strict' | 'lax'`}),` — SameSite policy`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: string`}),` — cookie path (defaults to `,(0,c.jsx)(t.code,{children:`/`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`domain?: string`}),` — cookie domain`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`secure?: boolean`}),` — if true, adds the Secure attribute`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`httpOnly?: boolean`}),` — if true, adds the HttpOnly attribute (only for server-side listeners)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`partitioned?: boolean`}),` — if true, adds the Partitioned attribute (CHIPS)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`arguments?: string[] | Record<string, any>`}),` — additional directives for the cookie string`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`built-in-type-conversion`,children:`Built-in Type Conversion`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`CookieStorage`}),` automatically converts string values when reading:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'undefined'`}),` → `,(0,c.jsx)(t.code,{children:`undefined`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'null'`}),` → `,(0,c.jsx)(t.code,{children:`null`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'true'`}),` → `,(0,c.jsx)(t.code,{children:`true`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'false'`}),` → `,(0,c.jsx)(t.code,{children:`false`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'123'`}),` → `,(0,c.jsx)(t.code,{children:`123`}),` (number)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'{"key":"value"}'`}),` → `,(0,c.jsx)(t.code,{children:`{key: 'value'}`}),` (JSON object)`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CookieStorage } from '@dxtmisha/functional-basic'

// Get with default value
const theme = CookieStorage.get<string>('theme', 'dark')

// Store value
CookieStorage.set('user', 'john', {
  age: 3600,
  sameSite: 'lax'
})

// Remove
CookieStorage.remove('user')
`})}),`
`,(0,c.jsx)(t.h3,{id:`initialize-with-external-storage`,children:`Initialize with External Storage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CookieStorage } from '@dxtmisha/functional-basic'

CookieStorage.init(
  (key) => myStorage.get(key),
  undefined,
  (key, value, cookie, options) => {
    // cookie is already formatted string like "key=value; max-age=..."
    myStorage.set(key, value, cookie, options)
  }
)
`})}),`
`,(0,c.jsx)(t.h3,{id:`initialize-for-ssr-raw`,children:`Initialize for SSR (Raw)`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CookieStorage } from '@dxtmisha/functional-basic'

// For SSR, get all cookies as a raw string
CookieStorage.init(
  undefined,
  () => request.headers.cookie
)
`})}),`
`,(0,c.jsx)(t.h3,{id:`update-and-reset`,children:`Update and Reset`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CookieStorage } from '@dxtmisha/functional-basic'

// Update in-memory data from document.cookie
// Useful when cookies were set externally
CookieStorage.update()

// Reset storage (clear listeners and in-memory data)
// Useful for testing or cleanup
CookieStorage.reset()
`})}),`
`,(0,c.jsx)(t.h3,{id:`complete-workflow`,children:`Complete Workflow`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CookieStorage } from '@dxtmisha/functional-basic'

// Initialize with custom storage
CookieStorage.init(
  (key) => redis.get(key),
  undefined,
  (key, value, cookie, options) => redis.set(key, value, cookie, options)
)

// Set value with options
CookieStorage.set('user', 'john', {
  age: 3600,           // 1 hour
  sameSite: 'lax',     // SameSite policy
  path: '/',           // Path
  secure: true,        // HTTPS only
  httpOnly: true,      // XSS protection (for SSR)
  arguments: ['Priority=High'] // Additional directives
})

// Get with type conversion
const user = CookieStorage.get<string>('user')

// Update from external source
CookieStorage.update()

// Clean up
CookieStorage.remove('user')
CookieStorage.reset()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};