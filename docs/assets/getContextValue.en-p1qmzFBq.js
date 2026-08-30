import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/nitro-basic/Functions/getContextValue - Get Context Value`}),`
`,(0,c.jsx)(t.h1,{id:`getcontextvalue`,children:(0,c.jsx)(t.code,{children:`getContextValue`})}),`
`,(0,c.jsx)(t.p,{children:`A utility function that retrieves a specific value from the active Server-Side Rendering (SSR) application context by its key name.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — The key of the value to retrieve (e.g., `,(0,c.jsx)(t.code,{children:`'headers'`}),`, `,(0,c.jsx)(t.code,{children:`'storage'`}),`, or `,(0,c.jsx)(t.code,{children:`'cookie'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`any | undefined`}),` — The retrieved context value, or `,(0,c.jsx)(t.code,{children:`undefined`}),` if the context is not active or the key does not exist.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getContextValue } from '@dxtmisha/nitro-basic'

// Get cookie or headers from the active request context during SSR:
const cookies = getContextValue<string>('cookie')
const headers = getContextValue<Headers>('headers')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};