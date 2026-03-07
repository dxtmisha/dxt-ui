import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Classes/Cookie - Cookie Management"}),`
`,e.jsx(n.h1,{id:"cookie-class",children:"Cookie Class"}),`
`,e.jsxs(n.p,{children:["A seamless, stateful wrapper for managing browser cookies. It automatically syncs between memory and the ",e.jsx(n.code,{children:"document.cookie"})," DOM API, allowing you to reactively set, retrieve, and delete cookies while ensuring consistent fallback values."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Memory Sync"})," — maintains an in-memory record of cookies to prevent unnecessary DOM traversals. Automatically parses ",e.jsx(n.code,{children:"document.cookie"})," on startup."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Environment Aware"})," — detects if it is running in a DOM environment. In SSR (Server-Side Rendering) or testing (non-DOM), it elegantly degrades to memory-only storage without throwing errors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global Blocking Control"})," — integrates securely with ",e.jsx(n.code,{children:"CookieBlock"}),". If cookie writing is globally disabled (e.g., due to user privacy consent), the ",e.jsx(n.code,{children:"Cookie"})," class respects this and suspends all outgoing DOM changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default/Fallback Logic"})," — getting a value can lazily initialize it with a default standard if it doesn't already exist."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.p,{children:"Create an instance by passing the name of the cookie you want to manage."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Cookie } from '@dxtmisha/functional'

// Initialize wrapper for the 'theme' cookie
const themeCookie = new Cookie('theme')
`})}),`
`,e.jsx(n.h2,{id:"data-management",children:"Data Management"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"get()"})," to read the cookie. If you pass a default value to ",e.jsx(n.code,{children:"get()"}),", it will simultaneously save that default if the cookie was previously unset."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: T | string | (() => T | string)"})," — optional default value or a function returning it."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T | string | undefined"})," — the value from the cookie, or the assigned default."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Will read 'theme', OR set and return 'dark' if it doesn't exist
const currentTheme = themeCookie.get('dark') 
`})}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"set()"})," to override or create new data. Options allow you to control standard cookie attributes like ",e.jsx(n.code,{children:"age"})," (Max-Age cache duration in seconds) or ",e.jsx(n.code,{children:"sameSite"})," policy."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T | string | (() => T | string)"})," — the value to store, or a function returning the value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: CookieOptions"})," — configuration for the cookie lifetime and security."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const userPrefs = new Cookie('preferences')

// Set a simple string
userPrefs.set('{"compact": true}')

// Set with advanced options
userPrefs.set('{"compact": true}', {
  age: 60 * 60 * 24 * 30, // 30 days
  sameSite: 'lax'
})
`})}),`
`,e.jsx(n.h3,{id:"remove",children:e.jsx(n.code,{children:"remove"})}),`
`,e.jsxs(n.p,{children:["Removing a cookie overwrites it with an empty string and sets its Max-Age to ",e.jsx(n.code,{children:"-1"}),", instructing the browser to instantly delete the record."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`userPrefs.remove()
`})}),`
`,e.jsx(n.h2,{id:"synchronization",children:"Synchronization"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"updateData(): void"})," (static) — Updates data from ",e.jsx(n.code,{children:"document.cookie"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"cookieoptions",children:"CookieOptions"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CookieOptions"})," is a configuration object for the ",e.jsx(n.code,{children:"get"})," and ",e.jsx(n.code,{children:"set"})," methods:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"age?: number"})," — cookie lifetime in ",e.jsx(n.strong,{children:"seconds"})," (",e.jsx(n.code,{children:"Max-Age"})," attribute). Default: 7 days (604800 sec). Automatically set to ",e.jsx(n.code,{children:"-1"})," when deleting via ",e.jsx(n.code,{children:"remove()"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sameSite?: 'strict' | 'lax'"})," — the ",e.jsx(n.code,{children:"SameSite"})," policy. Default: ",e.jsx(n.code,{children:"'strict'"})," (cookie is only sent on same-site navigations). ",e.jsx(n.code,{children:"'lax'"})," also allows sending on cross-site GET requests."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"arguments?: string[]"})," — additional directives appended to the cookie string (e.g. ",e.jsx(n.code,{children:"'Secure'"}),", ",e.jsx(n.code,{children:"'Path=/'"}),", ",e.jsx(n.code,{children:"'Domain=.myapp.com'"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"internal-overview",children:"Internal Overview"}),`
`,e.jsxs(n.p,{children:["Internally, ",e.jsx(n.code,{children:"Cookie"})," registers all instantiated wrappers in a shared ",e.jsx(n.code,{children:"items"})," dictionary. If you instantiate ",e.jsx(n.code,{children:"new Cookie('auth')"})," in two different files, they will correctly share and update the exact same underlying memory instance."]})]})}function x(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{x as default};
