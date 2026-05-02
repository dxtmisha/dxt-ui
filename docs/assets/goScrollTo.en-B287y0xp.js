import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/goScrollTo - Scroll container to element`}),`
`,(0,c.jsx)(n.h1,{id:`goscrollto`,children:(0,c.jsx)(n.code,{children:`goScrollTo`})}),`
`,(0,c.jsxs)(n.p,{children:[`Executes scrolling within a defined container element to ensure that the designated child target element falls into the visible area. The function retrieves the bounding client rects (`,(0,c.jsx)(n.code,{children:`getBoundingClientRect`}),`) of both elements and engages the `,(0,c.jsx)(n.code,{children:`scrollBy`}),` method based on relative coordinate offsets.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Unlike `,(0,c.jsx)(n.code,{children:`goScrollSmooth`}),` (which scrolls the general window or delegates to `,(0,c.jsx)(n.code,{children:`scrollIntoView`}),`), `,(0,c.jsx)(n.code,{children:`goScrollTo`}),` operates through deliberate margins calculating exact inner distances within an explicitly provided container framework.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: HTMLElement | undefined`}),` — The parent scroll container element.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`elementTo: HTMLElement | undefined`}),` — The targeted goal element (normally nestled within the container parent) needing focus.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`behavior: ScrollBehavior`}),` — (Optional) Adjusts the scroll animation style, defers to `,(0,c.jsx)(n.code,{children:`'smooth'`}),` automatically.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
Commits the side-effect scroll adjustment safely returning `,(0,c.jsx)(n.code,{children:`void`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { goScrollTo } from '@dxtmisha/functional-basic'

const list = document.getElementById('item-list')
const targetItem = document.getElementById('item-42')

// Safely animates scrolling across the list down to item 42
goScrollTo(list, targetItem)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};