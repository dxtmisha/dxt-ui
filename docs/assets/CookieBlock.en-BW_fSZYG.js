import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/CookieBlock - Global Cookie Control`}),`
`,(0,c.jsx)(t.h1,{id:`cookieblock-class`,children:`CookieBlock Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A static utility class that serves as a global "kill switch" for DOM cookie modifications. Provides a simple boolean state that other classes, specifically `,(0,c.jsx)(t.code,{children:`Cookie`}),`, check before attempting to write to `,(0,c.jsx)(t.code,{children:`document.cookie`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Includes tight integration with `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` for request-level state isolation in SSR environments.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Global Truth`}),` — a single configuration point to halt cookie operations application-wide`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Privacy Compliance`}),` — extremely useful for implementing "Cookie Consent" banners`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR Compatible`}),` — uses `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` to reliably maintain the blocked state in isolated request contexts`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`static-methods`,children:`Static Methods`}),`
`,(0,c.jsx)(t.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsx)(t.h4,{id:`set`,children:(0,c.jsx)(t.code,{children:`set`})}),`
`,(0,c.jsxs)(t.p,{children:[`Enables or disables cookie writing capabilities. When set to `,(0,c.jsx)(t.code,{children:`true`}),`, all write operations will only save data in memory without touching `,(0,c.jsx)(t.code,{children:`document.cookie`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` to block cookie writes, `,(0,c.jsx)(t.code,{children:`false`}),` to allow them`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h3,{id:`check`,children:`Check`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): boolean`}),` — Returns the current blocking status. `,(0,c.jsx)(t.code,{children:`true`}),` if cookie writing is blocked`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CookieBlock } from '@dxtmisha/functional'

// Block all future DOM cookie writes
CookieBlock.set(true)

if (CookieBlock.get()) {
  console.log('Cookie writes are currently blocked')
}

// Allow DOM cookie writes (default behavior)
CookieBlock.set(false)
`})}),`
`,(0,c.jsx)(t.h3,{id:`cookie-consent-banner-implementation`,children:`Cookie Consent Banner Implementation`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { CookieBlock, Cookie } from '@dxtmisha/functional'

// Block cookies on app load
CookieBlock.set(true)

// After user accepts cookies
function onCookieConsentAccepted() {
  CookieBlock.set(false)
  
  // Now we can set cookies
  const theme = new Cookie('theme')
  theme.set('dark')
}
`})}),`
`,(0,c.jsxs)(t.h2,{id:`how-it-interacts-with-cookie`,children:[`How It Interacts With `,(0,c.jsx)(t.code,{children:`Cookie`})]}),`
`,(0,c.jsxs)(t.p,{children:[`The core `,(0,c.jsx)(t.code,{children:`Cookie`}),` class strictly monitors this block. If `,(0,c.jsx)(t.code,{children:`CookieBlock.get()`}),` returns `,(0,c.jsx)(t.code,{children:`true`}),`:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Your application logic can still technically call `,(0,c.jsx)(t.code,{children:`cookieInstance.set('value')`})]}),`
`,(0,c.jsxs)(t.li,{children:[`The `,(0,c.jsx)(t.code,{children:`Cookie`}),` instance will update its `,(0,c.jsx)(t.em,{children:`internal memory storage`}),` to the new value`]}),`
`,(0,c.jsxs)(t.li,{children:[`The `,(0,c.jsx)(t.code,{children:`Cookie`}),` instance `,(0,c.jsx)(t.strong,{children:`will silently refuse`}),` to execute the actual `,(0,c.jsx)(t.code,{children:`document.cookie = ...`}),` DOM write`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`This guarantees your app doesn't break from undefined reads in memory while strictly honoring the browser's disk persistence settings.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};