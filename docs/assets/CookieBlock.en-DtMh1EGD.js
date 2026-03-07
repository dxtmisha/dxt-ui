import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function n(o){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/en/functional-basic/Classes/CookieBlock - Global Cookie Control"}),`
`,e.jsx(i.h1,{id:"cookieblock-class",children:"CookieBlock Class"}),`
`,e.jsxs(i.p,{children:['A static utility class that serves as a global "kill switch" for DOM cookie modifications. It provides a simple boolean state that other classes, specifically ',e.jsx(i.code,{children:"Cookie"}),", check before attempting to write to ",e.jsx(i.code,{children:"document.cookie"}),"."]}),`
`,e.jsx(i.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Global Truth"})," — a single configuration point to halt cookie operations application-wide."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Privacy Compliance"}),' — extremely useful for implementing "Cookie Consent" banners. Simply set the block to ',e.jsx(i.code,{children:"true"})," until the user explicitly accepts all cookies."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"DataStorage Backed"})," — uses the ",e.jsx(i.code,{children:"DataStorage"})," abstraction internally to maintain the blocked state reliably."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Since all methods are ",e.jsx(i.code,{children:"static"}),", you interact with the class directly."]}),`
`,e.jsx(i.h2,{id:"access-management",children:"Access Management"}),`
`,e.jsx(i.h3,{id:"get",children:e.jsx(i.code,{children:"get"})}),`
`,e.jsxs(i.p,{children:["Use the ",e.jsx(i.code,{children:"get()"})," method to read the current blocking status. This returns a boolean."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Returns:"})," ",e.jsx(i.code,{children:"boolean"})," — ",e.jsx(i.code,{children:"true"})," if cookie writing is blocked."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`if (CookieBlock.get()) {
  console.log('Cookie writes are currently blocked by user settings.')
}
`})}),`
`,e.jsx(i.h3,{id:"set",children:e.jsx(i.code,{children:"set"})}),`
`,e.jsxs(i.p,{children:["Use the ",e.jsx(i.code,{children:"set()"})," method to enable or disable cookie writing capabilities."]}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Parameters:"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"value: boolean"})," — ",e.jsx(i.code,{children:"true"})," to block cookie writes, ",e.jsx(i.code,{children:"false"})," to allow them."]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`import { CookieBlock } from '@dxtmisha/functional'

// Block all future DOM cookie writes
CookieBlock.set(true)

// Allow DOM cookie writes (default behavior)
CookieBlock.set(false)
`})}),`
`,e.jsxs(i.h2,{id:"how-it-interacts-with-cookie",children:["How It Interacts With ",e.jsx(i.code,{children:"Cookie"})]}),`
`,e.jsxs(i.p,{children:["The core ",e.jsx(i.code,{children:"Cookie"})," class strictly monitors this block. If ",e.jsx(i.code,{children:"CookieBlock.get()"})," returns ",e.jsx(i.code,{children:"true"}),":"]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:["Your application logic can still technically call ",e.jsx(i.code,{children:"cookieInstance.set('value')"}),"."]}),`
`,e.jsxs(i.li,{children:["The ",e.jsx(i.code,{children:"Cookie"})," instance will update its ",e.jsx(i.em,{children:"internal memory storage"})," to the new value."]}),`
`,e.jsxs(i.li,{children:["The ",e.jsx(i.code,{children:"Cookie"})," instance ",e.jsx(i.strong,{children:"will silently refuse"})," to execute the actual ",e.jsx(i.code,{children:"document.cookie = ..."})," DOM write."]}),`
`]}),`
`,e.jsx(i.p,{children:"This guarantees your app doesn't break from undefined reads in memory while strictly honoring the browser's disk persistence settings."})]})}function x(o={}){const{wrapper:i}={...s(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(n,{...o})}):n(o)}export{x as default};
