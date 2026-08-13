import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Functions/getConfigAi - Get AI configuration`}),`
`,(0,c.jsx)(t.h1,{id:`getconfigai`,children:(0,c.jsx)(t.code,{children:`getConfigAi`})}),`
`,(0,c.jsx)(t.p,{children:`The function returns the AI configuration, including the API key and model.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`[string, string]`}),` — a tuple with the API key and the model name.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(t.p,{children:[`The function retrieves the configuration values from the `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` class, which manages project-level settings.`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getConfigAi } from '@dxtmisha/scripts'

const [apiKey, model] = getConfigAi()
console.log(\`API Key: \${apiKey}, Model: \${model}\`)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};