import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Composables/useCookieRef - Cookie Management`}),`
`,(0,c.jsx)(n.h1,{id:`usecookieref`,children:(0,c.jsx)(n.code,{children:`useCookieRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`A composable for working with browser cookies. It allows creating reactive variables that automatically synchronize with cookies. It also supports cross-tab synchronization via `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Cookie name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | string | (() => (T | string))`}),` — Default value. Can be a static value or a function.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: CookieOptions`}),` — Additional parameters for cookie management (expires, path, domain, etc.).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Returns (`,(0,c.jsx)(n.code,{children:`Ref<T | string | undefined>`}),`):`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`A reactive reference to the cookie value.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useCookieRef } from '@dxtmisha/functional'

// Create a reference to 'theme' cookie with 'light' as default
const theme = useCookieRef('theme', 'light', { age: 365 * 24 * 60 * 60 })

// Update value (automatically saved to cookie)
theme.value = 'dark'

// The value will be synchronized across all browser tabs in real-time
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};