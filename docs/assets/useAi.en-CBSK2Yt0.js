import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/scripts/Composables/useAi - AI Instance Procurement"}),`
`,e.jsx(n.h1,{id:"useai",children:e.jsx(n.code,{children:"useAi"})}),`
`,e.jsx(n.p,{children:"Composable to obtain an AI instance based on the current configuration."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"AiAbstract | undefined"})," — An instance of an AI class (e.g., ",e.jsx(n.code,{children:"AiGoogle"})," or ",e.jsx(n.code,{children:"AiGoogleCli"}),") based on the configured AI type, or ",e.jsx(n.code,{children:"undefined"})," if the type is not recognized or not configured."]}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsxs(n.p,{children:["The composable reads the AI type from ",e.jsx(n.code,{children:"PropertiesConfig.getAiType()"})," and returns a new instance of the corresponding class:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'gemini'"})," returns a new ",e.jsx(n.code,{children:"AiGoogle"})," instance."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'gemini-cli'"})," returns a new ",e.jsx(n.code,{children:"AiGoogleCli"})," instance."]}),`
`,e.jsxs(n.li,{children:["Other types return ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useAi } from '@dxtmisha/scripts'

const ai = useAi()

if (ai) {
  // Use the AI instance
  const response = await ai.generate('Hello, AI!')
  console.log(response)
}
`})})]})}function x(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
