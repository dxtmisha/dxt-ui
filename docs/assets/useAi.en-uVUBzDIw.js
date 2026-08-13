import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Composables/useAi - AI Instance Procurement`}),`
`,(0,c.jsx)(t.h1,{id:`useai`,children:(0,c.jsx)(t.code,{children:`useAi`})}),`
`,(0,c.jsx)(t.p,{children:`Composable to obtain an AI instance based on the current configuration.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`AiAbstract | undefined`}),` — An instance of an AI class (e.g., `,(0,c.jsx)(t.code,{children:`AiGoogle`}),` or `,(0,c.jsx)(t.code,{children:`AiGoogleCli`}),`) based on the configured AI type, or `,(0,c.jsx)(t.code,{children:`undefined`}),` if the type is not recognized or not configured.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(t.p,{children:[`The composable reads the AI type from `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getAiType()`}),` and returns a new instance of the corresponding class:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'gemini'`}),` returns a new `,(0,c.jsx)(t.code,{children:`AiGoogle`}),` instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'gemini-cli'`}),` returns a new `,(0,c.jsx)(t.code,{children:`AiGoogleCli`}),` instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Other types return `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useAi } from '@dxtmisha/scripts'

const ai = useAi()

if (ai) {
  // Use the AI instance
  const response = await ai.generate('Hello, AI!')
  console.log(response)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};