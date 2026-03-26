import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/goScrollSmooth - Smooth scrolling to element`}),`
`,(0,c.jsx)(n.h1,{id:`goscrollsmooth`,children:(0,c.jsx)(n.code,{children:`goScrollSmooth`})}),`
`,(0,c.jsx)(n.p,{children:`Provides a smooth scrolling experience navigating the browser window or container to the designated element.`}),`
`,(0,c.jsxs)(n.p,{children:[`The function first verifies whether the target element supports the native `,(0,c.jsx)(n.code,{children:`scrollIntoView`}),` method. If it does, and no `,(0,c.jsx)(n.code,{children:`shift`}),` (offset) parameter is given, it relies on the browser's native implementation. Conversely, when a `,(0,c.jsx)(n.code,{children:`shift`}),` is required (for instance, to clear a fixed header), the function calculates the offset using `,(0,c.jsx)(n.code,{children:`getBoundingClientRect`}),` and delegates the scrolling to `,(0,c.jsx)(n.code,{children:`window.scrollTo`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: E`}),` — The target element (`,(0,c.jsx)(n.code,{children:`HTMLElement`}),`) to scroll to.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: ScrollIntoViewOptions`}),` — (Optional) Configuration options forwarded to `,(0,c.jsx)(n.code,{children:`scrollIntoView`}),` (e.g., `,(0,c.jsx)(n.code,{children:`behavior`}),`, `,(0,c.jsx)(n.code,{children:`block`}),`, `,(0,c.jsx)(n.code,{children:`inline`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`shift: number`}),` — (Optional) Top margin offset (in pixels) applied to prevent the targeted element from being obscured by sticky/fixed navigation components. Defaults to `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
The function does not return a value (`,(0,c.jsx)(n.code,{children:`void`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { goScrollSmooth } from '@dxtmisha/functional-basic'

const section = document.getElementById('contact-us')

// Standard smooth scroll to element execution
goScrollSmooth(section)

// Scroll resolving a 60px shift (safeguarding past a fixed header)
goScrollSmooth(section, { behavior: 'smooth' }, 60)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};