import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Functions/getConfigAi - Get AI configuration`}),`
`,(0,c.jsx)(n.h1,{id:`getconfigai`,children:(0,c.jsx)(n.code,{children:`getConfigAi`})}),`
`,(0,c.jsx)(n.p,{children:`The function returns the AI configuration, including the API key and model.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`[string, string]`}),` — a tuple with the API key and the model name.`]}),`
`,(0,c.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(n.p,{children:[`The function retrieves the configuration values from the `,(0,c.jsx)(n.code,{children:`PropertiesConfig`}),` class, which manages project-level settings.`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getConfigAi } from '@dxtmisha/scripts'

const [apiKey, model] = getConfigAi()
console.log(\`API Key: \${apiKey}, Model: \${model}\`)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};