import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/LibraryAiPrompt - AI Prompt Consolidator`}),`
`,(0,c.jsx)(n.h1,{id:`libraryaiprompt-class`,children:`LibraryAiPrompt Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`LibraryAiPrompt`}),` class is a developer utility designed to scan directories recursively, compile markdown descriptions, specifications, TypeScript files, and screenshot references, and bundle them into a single consolidated context prompt file for Large Language Models (LLMs).`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Prompt Aggregation`}),` — consolidates global coding guidelines, Vue component implementation standards, and module instructions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Directory Crawler`}),` — recursively searches target workspaces and component subdirectories to extract active prompt configurations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ordered Layout Formatting`}),` — formats sections with clear hierarchical headers, dividing code, types, and architectural descriptions logically.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`High-Priority Rules Standard`}),` — parses dedicated instruction files to prepend final instructions with overriding authority.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`File System Integration`}),` — utilizes `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),` to load resources and export the finished file to the defined destination.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`LibraryAiPrompt`}),` can be initialized with an optional array of extra folders to search.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirs: string[]`}),` — (Optional) Additional directory paths to scan.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryAiPrompt } from '@dxtmisha/scripts'

const consolidator = new LibraryAiPrompt(['custom/path/to/modules'])
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`execution`,children:`Execution`}),`
`,(0,c.jsx)(n.h4,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsx)(n.p,{children:`Core orchestrator that triggers directory scanning, formats the header rules, bundles found module prompts, appends overriding instructions, and writes the consolidated result.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`consolidator.make()
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`protected-crawlers--bundlers`,children:`Protected Crawlers & Bundlers`}),`
`,(0,c.jsx)(n.h4,{id:`getlist`,children:(0,c.jsx)(n.code,{children:`getList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Recursively crawls directories up to a specific depth limit, ignoring hidden files and returning compiled `,(0,c.jsx)(n.code,{children:`LibraryAiPromptItem`}),` instances.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirs: string[]`}),` — (Default: internal `,(0,c.jsx)(n.code,{children:`dirs`}),`) Target subdirectories to scan.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string[]`}),` — Current accumulated path segments.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit: number`}),` — (Default: `,(0,c.jsx)(n.code,{children:`4`}),`) Limit to avoid infinite symlink recursion.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`LibraryAiPromptItem[]`})]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`protected-helpers`,children:`Protected Helpers`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFileOnDirs(dirs: string[]): boolean`}),` — Helper that verifies if any targeted path is a direct file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getInstruction(): string | undefined`}),` — Formats high-priority override instructions if the file exists.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getVuePrompt(): string`}),` — Reads and formats standard Vue SFC creation guidelines.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getGlobalPrompt(): string`}),` — Reads and formats global clean-code guidelines.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`write(prompts: string[]): this`}),` — Saves the compiled strings into the destination prompt file.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};