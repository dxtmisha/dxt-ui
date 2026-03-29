import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Composables/useAi - AI Instance Procurement`}),`
`,(0,c.jsx)(n.h1,{id:`useai`,children:(0,c.jsx)(n.code,{children:`useAi`})}),`
`,(0,c.jsx)(n.p,{children:`Composable to obtain an AI instance based on the current configuration.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`AiAbstract | undefined`}),` — An instance of an AI class (e.g., `,(0,c.jsx)(n.code,{children:`AiGoogle`}),` or `,(0,c.jsx)(n.code,{children:`AiGoogleCli`}),`) based on the configured AI type, or `,(0,c.jsx)(n.code,{children:`undefined`}),` if the type is not recognized or not configured.`]}),`
`,(0,c.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(n.p,{children:[`The composable reads the AI type from `,(0,c.jsx)(n.code,{children:`PropertiesConfig.getAiType()`}),` and returns a new instance of the corresponding class:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'gemini'`}),` returns a new `,(0,c.jsx)(n.code,{children:`AiGoogle`}),` instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'gemini-cli'`}),` returns a new `,(0,c.jsx)(n.code,{children:`AiGoogleCli`}),` instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Other types return `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useAi } from '@dxtmisha/scripts'

const ai = useAi()

if (ai) {
  // Use the AI instance
  const response = await ai.generate('Hello, AI!')
  console.log(response)
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};