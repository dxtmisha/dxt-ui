import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/ScrollbarWidth - Scrollbar Width`}),`
`,(0,c.jsx)(t.h1,{id:`scrollbarwidth-class`,children:`ScrollbarWidth Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A static class for asynchronously measuring the browser scrollbar width. The result is cached in `,(0,c.jsx)(t.code,{children:`DataStorage`}),` and recalculated only once per session.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Caching`}),` — width is measured only once, then read from cache.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Async Measurement`}),` — uses `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` for an accurate result after repaint.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Overlay Scroll Detection`}),` — `,(0,c.jsx)(t.code,{children:`is()`}),` checks if the scrollbar is "overlay" (width ≤ 8px), typical of macOS and mobile browsers.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`The class is `,(0,c.jsx)(t.strong,{children:`static`}),`. Methods can be called directly without creating an object instance.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Features:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Caching`}),` — data is stored in `,(0,c.jsx)(t.code,{children:`DataStorage`}),` and not recalculated on subsequent calls.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Persistence`}),` — the value is preserved across page reloads (session storage).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

// Static method call
const width = await ScrollbarWidth.get()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): Promise<number>`}),` — scrollbar width in pixels. On first call, measures via a temporary DOM element.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(): Promise<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if the scrollbar is overlay (width ≤ 8px, macOS / mobile).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

const width = await ScrollbarWidth.get()
console.log(width) // 17 (Windows), 0 (macOS)

if (await ScrollbarWidth.is()) {
  // Overlay scroll — no width compensation needed
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};