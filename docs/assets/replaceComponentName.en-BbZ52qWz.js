import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/replaceComponentName - Replace component name in text"}),`
`,e.jsx(n.h1,{id:"replacecomponentname",children:e.jsx(n.code,{children:"replaceComponentName"})}),`
`,e.jsxs(n.p,{children:["Replaces HTML tags of a specific component within a text string with new ones. It searches for opening (",e.jsx(n.code,{children:"<name"}),") and closing (",e.jsx(n.code,{children:"</name"}),") tags case-insensitively and replaces them with ",e.jsx(n.code,{children:"componentName"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text: string | undefined"})," — The original text."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — The component name to replace."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"componentName: string"})," — The new component name."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"string | undefined"})," — The modified text with new tags, or ",e.jsx(n.code,{children:"undefined"})," if the original text was not provided."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { replaceComponentName } from '@dxtmisha/functional-basic'

const template = '<Button>Click me</Button>'
console.log(replaceComponentName(template, 'Button', 'AppButton')) 
// '<AppButton>Click me</AppButton>'
`})})]})}function p(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{p as default};
