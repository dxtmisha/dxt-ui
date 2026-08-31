import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Composables/useAi - Получение экземпляра AI`}),`
`,(0,c.jsx)(t.h1,{id:`useai`,children:(0,c.jsx)(t.code,{children:`useAi`})}),`
`,(0,c.jsx)(t.p,{children:`Композабл для получения экземпляра AI-адаптера на основе текущей конфигурации проекта.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`AiAbstract | undefined`}),` — экземпляр класса AI-провайдера (например, `,(0,c.jsx)(t.code,{children:`AiGoogle`}),`, `,(0,c.jsx)(t.code,{children:`AiGoogleCli`}),`, `,(0,c.jsx)(t.code,{children:`AiClaude`}),`, `,(0,c.jsx)(t.code,{children:`AiClaudeAgent`}),`, `,(0,c.jsx)(t.code,{children:`AiClaudeCli`}),`, `,(0,c.jsx)(t.code,{children:`AiOpenAi`}),`, `,(0,c.jsx)(t.code,{children:`AiZAi`}),`) в зависимости от настроенного типа AI, или `,(0,c.jsx)(t.code,{children:`undefined`}),`, если тип не распознан или не настроен.`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(t.p,{children:[`Композабл считывает тип AI из `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getAiType()`}),` и возвращает новый экземпляр соответствующего класса:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'claude'`}),` — возвращает `,(0,c.jsx)(t.code,{children:`AiClaude`}),` (интеграция с Anthropic Claude API).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'claude-agent'`}),` — возвращает `,(0,c.jsx)(t.code,{children:`AiClaudeAgent`}),` (Anthropic Claude Agent SDK).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'claude-cli'`}),` — возвращает `,(0,c.jsx)(t.code,{children:`AiClaudeCli`}),` (CLI-интерфейс Claude).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'gemini'`}),` — возвращает `,(0,c.jsx)(t.code,{children:`AiGoogle`}),` (Google Gemini API).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'gemini-cli'`}),` — возвращает `,(0,c.jsx)(t.code,{children:`AiGoogleCli`}),` (CLI-интерфейс Google Gemini).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'openai'`}),` — возвращает `,(0,c.jsx)(t.code,{children:`AiOpenAi`}),` (OpenAI GPT API).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'zai'`}),` — возвращает `,(0,c.jsx)(t.code,{children:`AiZAi`}),` (xAI / Grok API).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Другие типы возвращают `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useAi } from '@dxtmisha/scripts'

const ai = useAi()

if (ai) {
  const response = await ai.generate('Привет, AI!')
  console.log(response)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};