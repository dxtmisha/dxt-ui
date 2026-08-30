import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/goScrollSmooth - Smooth scrolling to element`}),`
`,(0,c.jsx)(t.h1,{id:`goscrollsmooth`,children:(0,c.jsx)(t.code,{children:`goScrollSmooth`})}),`
`,(0,c.jsx)(t.p,{children:`Provides a smooth scrolling experience navigating the browser window or container to the designated element.`}),`
`,(0,c.jsxs)(t.p,{children:[`The function first verifies whether the target element supports the native `,(0,c.jsx)(t.code,{children:`scrollIntoView`}),` method. If it does, and no `,(0,c.jsx)(t.code,{children:`shift`}),` (offset) parameter is given, it relies on the browser's native implementation. Conversely, when a `,(0,c.jsx)(t.code,{children:`shift`}),` is required (for instance, to clear a fixed header), the function calculates the offset using `,(0,c.jsx)(t.code,{children:`getBoundingClientRect`}),` and delegates the scrolling to `,(0,c.jsx)(t.code,{children:`window.scrollTo`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: E`}),` — The target element (`,(0,c.jsx)(t.code,{children:`HTMLElement`}),`) to scroll to.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: ScrollIntoViewOptions`}),` — (Optional) Configuration options forwarded to `,(0,c.jsx)(t.code,{children:`scrollIntoView`}),` (e.g., `,(0,c.jsx)(t.code,{children:`behavior`}),`, `,(0,c.jsx)(t.code,{children:`block`}),`, `,(0,c.jsx)(t.code,{children:`inline`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`shift: number`}),` — (Optional) Top margin offset (in pixels) applied to prevent the targeted element from being obscured by sticky/fixed navigation components. Defaults to `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
The function does not return a value (`,(0,c.jsx)(t.code,{children:`void`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { goScrollSmooth } from '@dxtmisha/functional-basic'

const section = document.getElementById('contact-us')

// Standard smooth scroll to element execution
goScrollSmooth(section)

// Scroll resolving a 60px shift (safeguarding past a fixed header)
goScrollSmooth(section, { behavior: 'smooth' }, 60)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};