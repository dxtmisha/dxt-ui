import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/DesignTypesPrompts - AI Prompt and Rules Manager`}),`
`,(0,c.jsx)(t.h1,{id:`class-designtypesprompts`,children:`Class DesignTypesPrompts`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignTypesPrompts`}),` class reads prompt templates in `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`, caches prompt metadata in JSON files, and generates project rule descriptions and prompt triggers for AI coding assistants.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`MD5-Based Prompt Tracking`}),` — Detects modifications in prompt markdown files and caches AI-generated metadata in JSON.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Smart Summarization`}),` — Uses LLMs to generate concise purpose statements and trigger conditions for each prompt asset.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Rules Compilation`}),` — Assembles project rules and prompt invocation guidelines for inclusion into `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Path Scanning`}),` — Recursively discovers prompt templates within local `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` and dependencies.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`promptsDir: string`}),` — `,(0,c.jsxs)(t.em,{children:[`(optional, default `,(0,c.jsx)(t.code,{children:`'ai-resources'`}),`)`]}),` Directory containing prompt files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — AI client instance used for prompt metadata synthesis.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi, DesignTypesPrompts } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const prompts = new DesignTypesPrompts('ai-resources', ai)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`getcachelist-designtypespromptcachelist`,children:(0,c.jsx)(t.code,{children:`getCacheList(): DesignTypesPromptCacheList`})}),`
`,(0,c.jsx)(t.p,{children:`Retrieves the cached prompt metadata list.`}),`
`,(0,c.jsx)(t.h3,{id:`getlistprompts-designtypeslist`,children:(0,c.jsx)(t.code,{children:`getListPrompts(): DesignTypesList`})}),`
`,(0,c.jsx)(t.p,{children:`Retrieves list of all discovered prompt files with contents and MD5 hashes.`}),`
`,(0,c.jsx)(t.h3,{id:`init-promisestring`,children:(0,c.jsx)(t.code,{children:`init(): Promise<string[]>`})}),`
`,(0,c.jsx)(t.p,{children:`Initializes prompt rules and returns an array of formatted directive strings.
Reads and returns the cached list of prompt metadata.`}),`
`,(0,c.jsx)(t.h3,{id:`toaiprompts-promisestring`,children:(0,c.jsx)(t.code,{children:`toAiPrompts(): Promise<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Generates a formatted markdown block of project rules and prompt triggers for AI assistants.`}),`
`,(0,c.jsx)(t.h3,{id:`make-promisethis`,children:(0,c.jsx)(t.code,{children:`make(): Promise<this>`})}),`
`,(0,c.jsx)(t.p,{children:`Scans prompt files, updates the metadata cache, and compiles prompt descriptions.`}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi, DesignTypesPrompts } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const prompts = new DesignTypesPrompts('ai-resources', ai)

await prompts.make()
const rules = await prompts.toAiPrompts()
console.log(rules)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};