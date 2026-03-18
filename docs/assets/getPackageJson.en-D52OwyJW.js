import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/en/scripts/Functions/getPackageJson - Get package.json content"}),`
`,e.jsx(n.h1,{id:"getpackagejson",children:e.jsx(n.code,{children:"getPackageJson"})}),`
`,e.jsxs(n.p,{children:["The function returns the content of the ",e.jsx(n.code,{children:"package.json"})," file."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"Record<string, any> | undefined"})," — the content of the ",e.jsx(n.code,{children:"package.json"})," file or ",e.jsx(n.code,{children:"undefined"})," if the file could not be read."]}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsxs(n.p,{children:["The function uses the ",e.jsx(n.code,{children:"PropertiesFile.readFile"})," method to load the content of the ",e.jsx(n.code,{children:"package.json"})," file specified in the global configuration."]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getPackageJson } from '@dxtmisha/scripts'

const packageJson = getPackageJson()
if (packageJson) {
  console.log(\`Package Name: \${packageJson.name}\`)
}
`})})]})}function p(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{p as default};
