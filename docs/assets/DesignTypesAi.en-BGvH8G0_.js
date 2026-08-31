import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/DesignTypesAi - Low-Level AI Client for Type Generation`}),`
`,(0,c.jsx)(t.h1,{id:`class-designtypesai`,children:`Class DesignTypesAi`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignTypesAi`}),` class manages low-level AI interactions during TypeScript declaration extraction, directory resolution, and isolated prompt execution.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Isolated Prompt Context`}),` — Enforces strict directives preventing previous conversation history from contaminating generated types.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Supplementary Code Context`}),` — Supplies raw JavaScript implementation as background context without erroneously leaking unexported entities into the output.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`JSON Response Parsing`}),` — The `,(0,c.jsx)(t.code,{children:`toAiJson`}),` method strips markdown blocks and parses structured JSON output from LLM responses.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Project Name Resolution`}),` — Resolves and caches the package name from `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string`}),` — `,(0,c.jsxs)(t.em,{children:[`(optional, default `,(0,c.jsx)(t.code,{children:`'ai-types-temp'`}),`)`]}),` Directory path containing declaration files.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('ai-types-temp')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`isfilefile-string-boolean`,children:(0,c.jsx)(t.code,{children:`isFile(file: string): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Checks if the file is a valid TypeScript declaration file (.d.ts).`}),`
`,(0,c.jsx)(t.h3,{id:`isfilejsfile-string-boolean`,children:(0,c.jsx)(t.code,{children:`isFileJs(file: string): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Checks if the file is a valid JavaScript file (.js).`}),`
`,(0,c.jsx)(t.h3,{id:`getmd5content-string-string`,children:(0,c.jsx)(t.code,{children:`getMd5(content: string): string`})}),`
`,(0,c.jsx)(t.p,{children:`Generates an MD5 hash for the given text content.`}),`
`,(0,c.jsx)(t.h3,{id:`getdirarray-string`,children:(0,c.jsx)(t.code,{children:`getDirArray(): string[]`})}),`
`,(0,c.jsx)(t.p,{children:`Returns the array of directory path segments.`}),`
`,(0,c.jsx)(t.h3,{id:`getprojectname-string`,children:(0,c.jsx)(t.code,{children:`getProjectName(): string`})}),`
`,(0,c.jsxs)(t.p,{children:[`Returns the project name resolved from `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`toaicontent-string-prompt-string-code-string-promisestring--undefined`,children:(0,c.jsx)(t.code,{children:`toAi(content: string, prompt: string, code?: string): Promise<string | undefined>`})}),`
`,(0,c.jsx)(t.p,{children:`Sends content and prompt instructions to the configured AI provider and returns the raw string response.`}),`
`,(0,c.jsx)(t.h3,{id:`toaijsontcontent-string-prompt-string-code-string-promiset--undefined`,children:(0,c.jsx)(t.code,{children:`toAiJson<T>(content: string, prompt: string, code?: string): Promise<T | undefined>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Sends an AI prompt and parses the resulting output into a typed JSON object `,(0,c.jsx)(t.code,{children:`T`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const prompt = 'Optimize types by stripping internal interfaces'
const result = await ai.toAi(dtsContent, prompt, jsCode)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};