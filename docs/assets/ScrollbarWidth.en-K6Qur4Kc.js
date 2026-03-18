import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/en/functional-basic/Classes/ScrollbarWidth - Scrollbar Width"}),`
`,e.jsx(n.h1,{id:"scrollbarwidth-class",children:"ScrollbarWidth Class"}),`
`,e.jsxs(n.p,{children:["A static class for asynchronously measuring the browser scrollbar width. The result is cached in ",e.jsx(n.code,{children:"DataStorage"})," and recalculated only once per session."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Caching"})," — width is measured only once, then read from cache."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Async Measurement"})," — uses ",e.jsx(n.code,{children:"requestAnimationFrame"})," for an accurate result after repaint."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Overlay Scroll Detection"})," — ",e.jsx(n.code,{children:"is()"}),' checks if the scrollbar is "overlay" (width ≤ 8px), typical of macOS and mobile browsers.']}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["The class is ",e.jsx(n.strong,{children:"static"}),". Methods can be called directly without creating an object instance."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Features:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Caching"})," — data is stored in ",e.jsx(n.code,{children:"DataStorage"})," and not recalculated on subsequent calls."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Persistence"})," — the value is preserved across page reloads (session storage)."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

// Static method call
const width = await ScrollbarWidth.get()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(): Promise<number>"})," — scrollbar width in pixels. On first call, measures via a temporary DOM element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"is(): Promise<boolean>"})," — ",e.jsx(n.code,{children:"true"})," if the scrollbar is overlay (width ≤ 8px, macOS / mobile)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

const width = await ScrollbarWidth.get()
console.log(width) // 17 (Windows), 0 (macOS)

if (await ScrollbarWidth.is()) {
  // Overlay scroll — no width compensation needed
}
`})})]})}function x(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{x as default};
