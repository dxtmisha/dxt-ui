import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/en/functional-basic/Functions/goScroll - Quick scroll change"}),`
`,e.jsx(n.h1,{id:"goscroll",children:e.jsx(n.code,{children:"goScroll"})}),`
`,e.jsx(n.p,{children:"Quick change of scroll at the element to the required element."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selector: string"})," — the selected an element, the scroll position of which needs to be changed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementTo: HTMLElement | undefined"})," — the element to which you need to scroll."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"elementCenter: HTMLElement"})," — the element that needs to be centered."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { goScroll } from '@dxtmisha/functional-basic'

const container = document.querySelector('.container')
const target = document.querySelector('.target')

goScroll('.container', target)
`})})]})}function m(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{m as default};
