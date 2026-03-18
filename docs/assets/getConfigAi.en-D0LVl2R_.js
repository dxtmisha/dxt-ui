import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Functions/getConfigAi - Get AI configuration"}),`
`,e.jsx(n.h1,{id:"getconfigai",children:e.jsx(n.code,{children:"getConfigAi"})}),`
`,e.jsx(n.p,{children:"The function returns the AI configuration, including the API key and model."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"[string, string]"})," — a tuple with the API key and the model name."]}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsxs(n.p,{children:["The function retrieves the configuration values from the ",e.jsx(n.code,{children:"PropertiesConfig"})," class, which manages project-level settings."]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:"import { getConfigAi } from '@dxtmisha/scripts'\n\nconst [apiKey, model] = getConfigAi()\nconsole.log(`API Key: ${apiKey}, Model: ${model}`)\n"})})]})}function m(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{m as default};
