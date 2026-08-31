import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useCookieRef - Cookie Management`}),`
`,(0,c.jsx)(t.h1,{id:`usecookieref`,children:(0,c.jsx)(t.code,{children:`useCookieRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`A composable for working with browser cookies. It allows creating reactive variables that automatically synchronize with cookies. It also supports cross-tab synchronization via `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Cookie name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: T | string | (() => (T | string))`}),` — Default value. Can be a static value or a function.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: CookieOptions`}),` — Additional parameters for cookie management (expires, path, domain, etc.).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Returns (`,(0,c.jsx)(t.code,{children:`Ref<T | string | undefined>`}),`):`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`A reactive reference to the cookie value.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useCookieRef } from '@dxtmisha/functional'

// Create a reference to 'theme' cookie with 'light' as default
const theme = useCookieRef('theme', 'light', { age: 365 * 24 * 60 * 60 })

// Update value (automatically saved to cookie)
theme.value = 'dark'

// The value will be synchronized across all browser tabs in real-time
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};