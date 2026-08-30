import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/goScrollTo - Scroll container to element`}),`
`,(0,c.jsx)(t.h1,{id:`goscrollto`,children:(0,c.jsx)(t.code,{children:`goScrollTo`})}),`
`,(0,c.jsxs)(t.p,{children:[`Executes scrolling within a defined container element to ensure that the designated child target element falls into the visible area. The function retrieves the bounding client rects (`,(0,c.jsx)(t.code,{children:`getBoundingClientRect`}),`) of both elements and engages the `,(0,c.jsx)(t.code,{children:`scrollBy`}),` method based on relative coordinate offsets.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Unlike `,(0,c.jsx)(t.code,{children:`goScrollSmooth`}),` (which scrolls the general window or delegates to `,(0,c.jsx)(t.code,{children:`scrollIntoView`}),`), `,(0,c.jsx)(t.code,{children:`goScrollTo`}),` operates through deliberate margins calculating exact inner distances within an explicitly provided container framework.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: HTMLElement | undefined`}),` — The parent scroll container element.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementTo: HTMLElement | undefined`}),` — The targeted goal element (normally nestled within the container parent) needing focus.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`behavior: ScrollBehavior`}),` — (Optional) Adjusts the scroll animation style, defers to `,(0,c.jsx)(t.code,{children:`'smooth'`}),` automatically.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
Commits the side-effect scroll adjustment safely returning `,(0,c.jsx)(t.code,{children:`void`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { goScrollTo } from '@dxtmisha/functional-basic'

const list = document.getElementById('item-list')
const targetItem = document.getElementById('item-42')

// Safely animates scrolling across the list down to item 42
goScrollTo(list, targetItem)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};