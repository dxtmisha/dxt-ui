import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/scripts/Functions/getDirname - Get current directory name"}),`
`,e.jsx(n.h1,{id:"getdirname",children:e.jsx(n.code,{children:"getDirname"})}),`
`,e.jsx(n.p,{children:"The function returns the name of the current directory, handling both CommonJS and ESM environments."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"string"})," — the current directory name."]}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsxs(n.p,{children:["The function checks if the environment has native ",e.jsx(n.code,{children:"__dirname"})," support (using ",e.jsx(n.code,{children:"hasNativeDirname"}),"). If it does, it returns ",e.jsx(n.code,{children:"__dirname"}),". Otherwise, it derives the directory name from ",e.jsx(n.code,{children:"import.meta.url"}),"."]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getDirname } from '@dxtmisha/scripts'

const dirname = getDirname()
console.log(dirname)
`})})]})}function l(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{l as default};
