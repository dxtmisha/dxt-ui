import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/scripts/Functions/hasNativeDirname - Check __dirname availability"}),`
`,e.jsx(n.h1,{id:"hasnativedirname",children:e.jsx(n.code,{children:"hasNativeDirname"})}),`
`,e.jsxs(n.p,{children:["The function checks if the global ",e.jsx(n.code,{children:"__dirname"})," variable is available in the current environment."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"boolean"})," — ",e.jsx(n.code,{children:"true"})," if ",e.jsx(n.code,{children:"__dirname"})," is defined, ",e.jsx(n.code,{children:"false"})," otherwise."]}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsxs(n.p,{children:["The function uses ",e.jsx(n.code,{children:"typeof __dirname !== 'undefined'"})," to determine if the environment supports native directory name resolution (typically CommonJS environments)."]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { hasNativeDirname } from '@dxtmisha/scripts'

if (hasNativeDirname()) {
  console.log('Environment supports native __dirname')
}
`})})]})}function l(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{l as default};
