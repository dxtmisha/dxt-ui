import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/DesignTypesPromptsAbstract - Abstract AI Prompts and Rules Manager`}),`
`,(0,c.jsx)(t.h1,{id:`class-designtypespromptsabstract`,children:`Class DesignTypesPromptsAbstract`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignTypesPromptsAbstract`}),` class provides the base abstract architecture for discovering, analyzing, caching, and compiling AI prompts and rule definitions (`,(0,c.jsx)(t.code,{children:`ai-resources/`}),`) into mandatory agent directives.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Prompt Discovery`}),`: Recursively scans prompt and rule markdown files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Incremental MD5 Caching`}),`: Generates and manages individual JSON metadata cache files in `,(0,c.jsx)(t.code,{children:`ai-types-list/ai-resources/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`AI Rule Summarization`}),`: Uses LLM prompts to extract concise document titles and descriptions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mandatory Directives Compilation`}),`: Generates formatted mandatory rule triggers for inclusion in project descriptions.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`parameters`,children:`Parameters`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`promptsDir: string`}),` — relative path to prompt files directory (default: `,(0,c.jsx)(t.code,{children:`'ai-resources'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — instance of `,(0,c.jsx)(t.code,{children:`DesignTypesAi`}),` for AI operations and project name resolution.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-getcachelist-designtypespromptcachelist`,children:(0,c.jsx)(t.code,{children:`abstract getCacheList(): DesignTypesPromptCacheList`})}),`
`,(0,c.jsx)(t.p,{children:`Retrieves prompt metadata list from cache.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-make-promisethis`,children:(0,c.jsx)(t.code,{children:`abstract make(): Promise<this>`})}),`
`,(0,c.jsx)(t.p,{children:`Processes prompt files and updates metadata cache.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-toaiprompts-promisestring`,children:(0,c.jsx)(t.code,{children:`abstract toAiPrompts(): Promise<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Compiles formatted mandatory AI rule directives from prompts.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};