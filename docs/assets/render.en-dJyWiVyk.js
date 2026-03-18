import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(i){const n={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional/Functions/render - Component Rendering with Keys"}),`
`,e.jsx(n.h1,{id:"render",children:e.jsx(n.code,{children:"render"})}),`
`,e.jsxs(n.p,{children:["A wrapper around Vue's ",e.jsx(n.code,{children:"h"})," (hyperscript) function that provides automatic key generation for components. It ensures that components have unique keys for efficient rendering and transition handling, especially when dealing with lists or dynamic elements."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string | any"})," — The name or tag of the component to render."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props?: T"})," — The properties to pass to the component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"children?: RawChildren | RawSlots"})," — The children or slots of the component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index?: string"})," — An optional index or identifier to use for key generation."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"VNode"})," — The rendered virtual node."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { render } from '@dxtmisha/functional'

// Renders a div with an automatically generated key
const vnode = render('div', { class: 'container' }, 'Hello World')
// key => '.div.container'

// Renders a component with a specific index for key generation
const item = render('my-component', { data: itemData }, null, 'item-1')
// key => '.my-component.item-1'
`})}),`
`,e.jsx(n.h3,{id:"key-generation",children:"Key Generation"}),`
`,e.jsxs(n.p,{children:["The key (",e.jsx(n.code,{children:"key"}),") for the Vue component is formed ",e.jsx(n.strong,{children:"additively"})," (by sequential appending). It always starts with a dot followed by the component name (",e.jsx(n.code,{children:".name"}),"), and other values are appended with dots (if they exist):"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:".name"})})," — if ",e.jsx(n.code,{children:"name"})," is a string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:".index"})," — from the third argument of the ",e.jsx(n.code,{children:"render"})," function."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:".props.index"})," — if provided in the properties object and is a string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:".className"})," — if a class is specified in ",e.jsx(n.code,{children:"props"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:".props.id"})," — if an ID is specified in ",e.jsx(n.code,{children:"props"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"This ensures key uniqueness even when component names are identical."})]})}function p(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{p as default};
