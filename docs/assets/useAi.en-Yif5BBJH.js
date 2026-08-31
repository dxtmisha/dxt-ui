import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Composables/useAi - Get AI Instance`}),`
`,(0,c.jsx)(t.h1,{id:`useai`,children:(0,c.jsx)(t.code,{children:`useAi`})}),`
`,(0,c.jsx)(t.p,{children:`Composable to obtain an AI adapter instance based on the current project configuration.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`AiAbstract | undefined`}),` — An instance of the configured AI provider class (such as `,(0,c.jsx)(t.code,{children:`AiGoogle`}),`, `,(0,c.jsx)(t.code,{children:`AiGoogleCli`}),`, `,(0,c.jsx)(t.code,{children:`AiClaude`}),`, `,(0,c.jsx)(t.code,{children:`AiClaudeAgent`}),`, `,(0,c.jsx)(t.code,{children:`AiClaudeCli`}),`, `,(0,c.jsx)(t.code,{children:`AiOpenAi`}),`, `,(0,c.jsx)(t.code,{children:`AiZAi`}),`) depending on the configured AI type, or `,(0,c.jsx)(t.code,{children:`undefined`}),` if the type is unrecognized or unconfigured.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,c.jsxs)(t.p,{children:[`The composable reads the AI type from `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getAiType()`}),` and instantiates the corresponding class:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'claude'`}),` — returns `,(0,c.jsx)(t.code,{children:`AiClaude`}),` (Anthropic Claude API).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'claude-agent'`}),` — returns `,(0,c.jsx)(t.code,{children:`AiClaudeAgent`}),` (Anthropic Claude Agent SDK).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'claude-cli'`}),` — returns `,(0,c.jsx)(t.code,{children:`AiClaudeCli`}),` (Claude CLI interface).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'gemini'`}),` — returns `,(0,c.jsx)(t.code,{children:`AiGoogle`}),` (Google Gemini API).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'gemini-cli'`}),` — returns `,(0,c.jsx)(t.code,{children:`AiGoogleCli`}),` (Google Gemini CLI interface).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'openai'`}),` — returns `,(0,c.jsx)(t.code,{children:`AiOpenAi`}),` (OpenAI GPT API).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'zai'`}),` — returns `,(0,c.jsx)(t.code,{children:`AiZAi`}),` (xAI / Grok API).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Other types return `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useAi } from '@dxtmisha/scripts'

const ai = useAi()

if (ai) {
  const response = await ai.generate('Hello, AI!')
  console.log(response)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};