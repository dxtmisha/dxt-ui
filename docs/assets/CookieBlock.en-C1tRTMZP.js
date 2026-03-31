import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/CookieBlock - Global Cookie Control`}),`
`,(0,c.jsx)(n.h1,{id:`cookieblock-class`,children:`CookieBlock Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A static utility class that serves as a global "kill switch" for DOM cookie modifications. It provides a simple boolean state that other classes, specifically `,(0,c.jsx)(n.code,{children:`Cookie`}),`, check before attempting to write to `,(0,c.jsx)(n.code,{children:`document.cookie`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Truth`}),` — a single configuration point to halt cookie operations application-wide.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Privacy Compliance`}),` — extremely useful for implementing "Cookie Consent" banners. Simply set the block to `,(0,c.jsx)(n.code,{children:`true`}),` until the user explicitly accepts all cookies.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`DataStorage Backed`}),` — uses the `,(0,c.jsx)(n.code,{children:`DataStorage`}),` abstraction internally to maintain the blocked state reliably.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Since all methods are `,(0,c.jsx)(n.code,{children:`static`}),`, you interact with the class directly.`]}),`
`,(0,c.jsx)(n.h2,{id:`access-management`,children:`Access Management`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsxs)(n.p,{children:[`Use the `,(0,c.jsx)(n.code,{children:`get()`}),` method to read the current blocking status. This returns a boolean.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if cookie writing is blocked.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`if (CookieBlock.get()) {
  console.log('Cookie writes are currently blocked by user settings.')
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Use the `,(0,c.jsx)(n.code,{children:`set()`}),` method to enable or disable cookie writing capabilities.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` to block cookie writes, `,(0,c.jsx)(n.code,{children:`false`}),` to allow them.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { CookieBlock } from '@dxtmisha/functional'

// Block all future DOM cookie writes
CookieBlock.set(true)

// Allow DOM cookie writes (default behavior)
CookieBlock.set(false)
`})}),`
`,(0,c.jsxs)(n.h2,{id:`how-it-interacts-with-cookie`,children:[`How It Interacts With `,(0,c.jsx)(n.code,{children:`Cookie`})]}),`
`,(0,c.jsxs)(n.p,{children:[`The core `,(0,c.jsx)(n.code,{children:`Cookie`}),` class strictly monitors this block. If `,(0,c.jsx)(n.code,{children:`CookieBlock.get()`}),` returns `,(0,c.jsx)(n.code,{children:`true`}),`:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Your application logic can still technically call `,(0,c.jsx)(n.code,{children:`cookieInstance.set('value')`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`The `,(0,c.jsx)(n.code,{children:`Cookie`}),` instance will update its `,(0,c.jsx)(n.em,{children:`internal memory storage`}),` to the new value.`]}),`
`,(0,c.jsxs)(n.li,{children:[`The `,(0,c.jsx)(n.code,{children:`Cookie`}),` instance `,(0,c.jsx)(n.strong,{children:`will silently refuse`}),` to execute the actual `,(0,c.jsx)(n.code,{children:`document.cookie = ...`}),` DOM write.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`This guarantees your app doesn't break from undefined reads in memory while strictly honoring the browser's disk persistence settings.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};