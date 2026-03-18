import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(o){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/goScrollSmooth - Smooth scrolling to element"}),`
`,e.jsx(n.h1,{id:"goscrollsmooth",children:e.jsx(n.code,{children:"goScrollSmooth"})}),`
`,e.jsx(n.p,{children:"Provides a smooth scrolling experience navigating the browser window or container to the designated element."}),`
`,e.jsxs(n.p,{children:["The function first verifies whether the target element supports the native ",e.jsx(n.code,{children:"scrollIntoView"})," method. If it does, and no ",e.jsx(n.code,{children:"shift"})," (offset) parameter is given, it relies on the browser's native implementation. Conversely, when a ",e.jsx(n.code,{children:"shift"})," is required (for instance, to clear a fixed header), the function calculates the offset using ",e.jsx(n.code,{children:"getBoundingClientRect"})," and delegates the scrolling to ",e.jsx(n.code,{children:"window.scrollTo"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: E"})," — The target element (",e.jsx(n.code,{children:"HTMLElement"}),") to scroll to."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options: ScrollIntoViewOptions"})," — (Optional) Configuration options forwarded to ",e.jsx(n.code,{children:"scrollIntoView"})," (e.g., ",e.jsx(n.code,{children:"behavior"}),", ",e.jsx(n.code,{children:"block"}),", ",e.jsx(n.code,{children:"inline"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"shift: number"})," — (Optional) Top margin offset (in pixels) applied to prevent the targeted element from being obscured by sticky/fixed navigation components. Defaults to ",e.jsx(n.code,{children:"0"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
The function does not return a value (`,e.jsx(n.code,{children:"void"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { goScrollSmooth } from '@dxtmisha/functional-basic'

const section = document.getElementById('contact-us')

// Standard smooth scroll to element execution
goScrollSmooth(section)

// Scroll resolving a 60px shift (safeguarding past a fixed header)
goScrollSmooth(section, { behavior: 'smooth' }, 60)
`})})]})}function m(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{m as default};
