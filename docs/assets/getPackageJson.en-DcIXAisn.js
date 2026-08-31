import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Functions/getPackageJson - Get package.json content`}),`
`,(0,c.jsx)(t.h1,{id:`getpackagejson`,children:(0,c.jsx)(t.code,{children:`getPackageJson`})}),`
`,(0,c.jsxs)(t.p,{children:[`The function returns the content of the `,(0,c.jsx)(t.code,{children:`package.json`}),` file.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: PropertiesFilePath`}),` — optional path to a directory or a `,(0,c.jsx)(t.code,{children:`package.json`}),` file.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Record<string, any> | undefined`}),` — the content of the `,(0,c.jsx)(t.code,{children:`package.json`}),` file or `,(0,c.jsx)(t.code,{children:`undefined`}),` if the file could not be read.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(t.p,{children:[`The function uses the `,(0,c.jsx)(t.code,{children:`PropertiesFile.readFile`}),` method to load the content of the `,(0,c.jsx)(t.code,{children:`package.json`}),` file. If a `,(0,c.jsx)(t.code,{children:`path`}),` parameter is provided, it reads `,(0,c.jsx)(t.code,{children:`package.json`}),` from the specified location; otherwise, it reads the default `,(0,c.jsx)(t.code,{children:`package.json`}),` specified in the configuration.`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getPackageJson } from '@dxtmisha/scripts'

const packageJson = getPackageJson()
if (packageJson) {
  console.log(\`Package Name: \${packageJson.name}\`)
}

const customPackageJson = getPackageJson(['packages', 'functional'])
if (customPackageJson) {
  console.log(\`Custom Package Name: \${customPackageJson.name}\`)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};