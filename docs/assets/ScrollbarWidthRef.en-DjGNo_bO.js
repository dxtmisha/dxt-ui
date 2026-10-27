import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/ScrollbarWidthRef - Scrollbar Width`}),`
`,(0,c.jsx)(t.h1,{id:`scrollbarwidthref-class`,children:`ScrollbarWidthRef Class`}),`
`,(0,c.jsxs)(t.p,{children:[`Reactive wrapper for asynchronous scrollbar measurement. In a DOM runtime it requests the scrollbar flag and pixel width independently through `,(0,c.jsx)(t.code,{children:`ScrollbarWidth`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Initial state`}),` — `,(0,c.jsx)(t.code,{children:`item`}),` is undefined and `,(0,c.jsx)(t.code,{children:`width`}),` is 0.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Independent results`}),` — flag and width may resolve in either order.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR safety`}),` — no browser measurement is requested outside a DOM runtime.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor()`})}),`
`,(0,c.jsx)(t.h2,{id:`behavior-and-lifecycle`,children:`Behavior and lifecycle`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`is`}),` means the flag is defined: both `,(0,c.jsx)(t.code,{children:`true`}),` and `,(0,c.jsx)(t.code,{children:`false`}),` set readiness to true. It does not guarantee that the independent width promise has completed. The wrapper performs one measurement at construction and does not subscribe to resize events. It has no public methods beyond construction.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ScrollbarWidthRef } from '@dxtmisha/functional'

const scrollbar = /*#__PURE__*/ new ScrollbarWidthRef()
const ready = scrollbar.is
const width = scrollbar.width
`})}),`
`,(0,c.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: Ref<boolean | undefined>`}),` — Result of ScrollbarWidth.is(): true for a measured width other than -1 that is at most 8 pixels; initially undefined.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`width: Ref<number>`}),` — Width in pixels; initially 0 and updated independently.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is: ComputedRef<boolean>`}),` — True once item is defined, regardless of the flag value or width readiness.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.p,{children:`No public methods; use the properties described above.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};