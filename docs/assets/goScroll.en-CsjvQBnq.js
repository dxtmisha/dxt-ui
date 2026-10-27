import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/goScroll - Quick scroll change`}),`
`,(0,c.jsx)(t.h1,{id:`goscroll`,children:(0,c.jsx)(t.code,{children:`goScroll`})}),`
`,(0,c.jsx)(t.p,{children:`Quickly scrolls a container to bring a target element into view (scroll-into-view) if it is outside the visible boundary, or centers it relative to a reference element. Scrolling is confined strictly to the container and does not affect outer window scrolling.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`target: string | HTMLElement`}),` — CSS selector to resolve the nearest ancestor container or the scrollable container element itself.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementTo?: HTMLElement | null`}),` — The target element to scroll into view.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementCenter?: HTMLElement | null`}),` — (Optional) Reference element to center the target element against.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`indent?: number`}),` — (Optional) Additional padding indent in pixels from the boundary. Defaults to `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`void`}),` — Performs the scroll side-effect and returns nothing.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { goScroll } from '@dxtmisha/functional-basic'

const container = document.querySelector<HTMLElement>('.container')
const target = document.querySelector<HTMLElement>('.target')

// Option 1: Find container via selector through closest
goScroll('.container', target)

// Option 2: Pass container element directly with optional indent
if (container && target) {
  goScroll(container, target, null, 16)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};