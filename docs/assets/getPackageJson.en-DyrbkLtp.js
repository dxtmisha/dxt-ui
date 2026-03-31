import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Functions/getPackageJson - Get package.json content`}),`
`,(0,c.jsx)(n.h1,{id:`getpackagejson`,children:(0,c.jsx)(n.code,{children:`getPackageJson`})}),`
`,(0,c.jsxs)(n.p,{children:[`The function returns the content of the `,(0,c.jsx)(n.code,{children:`package.json`}),` file.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`Record<string, any> | undefined`}),` — the content of the `,(0,c.jsx)(n.code,{children:`package.json`}),` file or `,(0,c.jsx)(n.code,{children:`undefined`}),` if the file could not be read.`]}),`
`,(0,c.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(n.p,{children:[`The function uses the `,(0,c.jsx)(n.code,{children:`PropertiesFile.readFile`}),` method to load the content of the `,(0,c.jsx)(n.code,{children:`package.json`}),` file specified in the global configuration.`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getPackageJson } from '@dxtmisha/scripts'

const packageJson = getPackageJson()
if (packageJson) {
  console.log(\`Package Name: \${packageJson.name}\`)
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};