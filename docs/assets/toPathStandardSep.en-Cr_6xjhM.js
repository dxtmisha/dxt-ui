import{j as t}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"@dxtmisha/en/scripts/Functions/toPathStandardSep - Convert path separators"}),`
`,t.jsx(n.h1,{id:"topathstandardsep",children:t.jsx(n.code,{children:"toPathStandardSep"})}),`
`,t.jsx(n.p,{children:"The function converts forward slashes in a path string to the standard path separator of the current operating system."}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"Parameters:"})}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.code,{children:"path: string"})," — the input path string."]}),`
`]}),`
`,t.jsxs(n.p,{children:[t.jsx(n.strong,{children:"Returns:"}),`
`,t.jsx(n.code,{children:"string"})," — the path with standard separators."]}),`
`,t.jsx(n.h2,{id:"how-it-works",children:"How it works"}),`
`,t.jsxs(n.p,{children:["The function uses a regular expression to find all forward slashes (",t.jsx(n.code,{children:"/"}),") in the input string and replaces them with the platform-specific separator (",t.jsx(n.code,{children:"path.sep"}),")."]}),`
`,t.jsx(n.h2,{id:"example",children:"Example"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-typescript",children:`import { toPathStandardSep } from '@dxtmisha/scripts'

// On Windows:
toPathStandardSep('src/components/button') // 'src\\\\components\\\\button'

// On Unix:
toPathStandardSep('src/components/button') // 'src/components/button'
`})})]})}function l(e={}){const{wrapper:n}={...r(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(s,{...e})}):s(e)}export{l as default};
