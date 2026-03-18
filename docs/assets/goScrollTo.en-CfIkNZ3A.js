import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/goScrollTo - Scroll container to element"}),`
`,e.jsx(n.h1,{id:"goscrollto",children:e.jsx(n.code,{children:"goScrollTo"})}),`
`,e.jsxs(n.p,{children:["Executes scrolling within a defined container element to ensure that the designated child target element falls into the visible area. The function retrieves the bounding client rects (",e.jsx(n.code,{children:"getBoundingClientRect"}),") of both elements and engages the ",e.jsx(n.code,{children:"scrollBy"})," method based on relative coordinate offsets."]}),`
`,e.jsxs(n.p,{children:["Unlike ",e.jsx(n.code,{children:"goScrollSmooth"})," (which scrolls the general window or delegates to ",e.jsx(n.code,{children:"scrollIntoView"}),"), ",e.jsx(n.code,{children:"goScrollTo"})," operates through deliberate margins calculating exact inner distances within an explicitly provided container framework."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: HTMLElement | undefined"})," — The parent scroll container element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementTo: HTMLElement | undefined"})," — The targeted goal element (normally nestled within the container parent) needing focus."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"behavior: ScrollBehavior"})," — (Optional) Adjusts the scroll animation style, defers to ",e.jsx(n.code,{children:"'smooth'"})," automatically."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
Commits the side-effect scroll adjustment safely returning `,e.jsx(n.code,{children:"void"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { goScrollTo } from '@dxtmisha/functional-basic'

const list = document.getElementById('item-list')
const targetItem = document.getElementById('item-42')

// Safely animates scrolling across the list down to item 42
goScrollTo(list, targetItem)
`})})]})}function m(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{m as default};
