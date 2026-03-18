import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(o){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional/Composables/useCookieRef - Cookie Management"}),`
`,e.jsx(n.h1,{id:"usecookieref",children:e.jsx(n.code,{children:"useCookieRef"})}),`
`,e.jsxs(n.p,{children:["A composable for working with browser cookies. It allows creating reactive variables that automatically synchronize with cookies. It also supports cross-tab synchronization via ",e.jsx(n.code,{children:"BroadcastChannel"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — Cookie name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | string | (() => (T | string))"})," — Default value. Can be a static value or a function."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: CookieOptions"})," — Additional parameters for cookie management (expires, path, domain, etc.)."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Returns (",e.jsx(n.code,{children:"Ref<T | string | undefined>"}),"):"]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A reactive reference to the cookie value."}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useCookieRef } from '@dxtmisha/functional'

// Create a reference to 'theme' cookie with 'light' as default
const theme = useCookieRef('theme', 'light', { age: 365 * 24 * 60 * 60 })

// Update value (automatically saved to cookie)
theme.value = 'dark'

// The value will be synchronized across all browser tabs in real-time
`})})]})}function m(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{m as default};
