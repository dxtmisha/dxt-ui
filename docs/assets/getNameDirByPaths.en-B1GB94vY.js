import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Functions/getNameDirByPaths - Get last directory name"}),`
`,e.jsx(t.h1,{id:"getnamedirbypaths",children:e.jsx(t.code,{children:"getNameDirByPaths"})}),`
`,e.jsx(t.p,{children:"The function returns the name of the last directory from the given array of path segments."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"paths: PropertiesFilePath"})," — an array of path segments."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"}),`
`,e.jsx(t.code,{children:"string"})," — the name of the last directory."]}),`
`,e.jsx(t.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsxs(t.p,{children:["The function joins the provided path segments using ",e.jsx(t.code,{children:"PropertiesFile.joinPath"}),", then splits them back into directory segments using ",e.jsx(t.code,{children:"PropertiesFile.splitForDir"})," and returns the last element of the resulting array."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { getNameDirByPaths } from '@dxtmisha/scripts'

getNameDirByPaths(['src', 'components', 'button']) // 'button'
`})})]})}function m(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{m as default};
