import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/ScrollbarWidth - Scrollbar Width`}),`
`,(0,c.jsx)(n.h1,{id:`scrollbarwidth-class`,children:`ScrollbarWidth Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A static class for asynchronously measuring the browser scrollbar width. The result is cached in `,(0,c.jsx)(n.code,{children:`DataStorage`}),` and recalculated only once per session.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Caching`}),` — width is measured only once, then read from cache.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Async Measurement`}),` — uses `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` for an accurate result after repaint.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Overlay Scroll Detection`}),` — `,(0,c.jsx)(n.code,{children:`is()`}),` checks if the scrollbar is "overlay" (width ≤ 8px), typical of macOS and mobile browsers.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`The class is `,(0,c.jsx)(n.strong,{children:`static`}),`. Methods can be called directly without creating an object instance.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Caching`}),` — data is stored in `,(0,c.jsx)(n.code,{children:`DataStorage`}),` and not recalculated on subsequent calls.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Persistence`}),` — the value is preserved across page reloads (session storage).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

// Static method call
const width = await ScrollbarWidth.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): Promise<number>`}),` — scrollbar width in pixels. On first call, measures via a temporary DOM element.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): Promise<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if the scrollbar is overlay (width ≤ 8px, macOS / mobile).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

const width = await ScrollbarWidth.get()
console.log(width) // 17 (Windows), 0 (macOS)

if (await ScrollbarWidth.is()) {
  // Overlay scroll — no width compensation needed
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};