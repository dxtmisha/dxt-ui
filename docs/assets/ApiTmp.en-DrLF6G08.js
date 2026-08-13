import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/ApiTmp - Temporary File Helper for AI prompts`}),`
`,(0,c.jsx)(t.h1,{id:`apitmp-class`,children:`ApiTmp Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`ApiTmp`}),` class is a helper utility designed to manage temporary prompt files on the filesystem under the `,(0,c.jsx)(t.code,{children:`./ai-tmp`}),` directory. It is primarily used by CLI-based AI services to dump large text inputs into text files to prevent terminal argument length violations.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Safe Disk Buffering`}),` — writes large prompt blocks to the local disk during generation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Unique Identifiers`}),` — automatically increments file IDs to prevent concurrent write collisions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Clean PURGE Actions`}),` — provides methods to instantly delete temporary directories and recover system disk space.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`ApiTmp`}),` class can be instantiated directly.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ApiTmp } from '@dxtmisha/scripts'

const tmp = new ApiTmp()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`files-management`,children:`Files Management`}),`
`,(0,c.jsx)(t.h4,{id:`createfile`,children:(0,c.jsx)(t.code,{children:`createFile`})}),`
`,(0,c.jsx)(t.p,{children:`Writes prompt content to a uniquely numbered temporary file and returns a formatted command-line reference instruction.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`content: string`}),` — The text content of the prompt to write to disk.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`string`}),` — A formatted path reference string (e.g., `,(0,c.jsx)(t.code,{children:`Please read the following file as it contains the prompt instructions: @./ai-tmp/Prompt-1.txt`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const promptReference = tmp.createFile('Hello Claude, please generate standard SCSS mixins.')
`})}),`
`,(0,c.jsx)(t.h4,{id:`removefile`,children:(0,c.jsx)(t.code,{children:`removeFile`})}),`
`,(0,c.jsxs)(t.p,{children:[`Cleans up the entire temporary file directory `,(0,c.jsx)(t.code,{children:`./ai-tmp`}),` from the filesystem.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`tmp.removeFile()
`})}),`
`,(0,c.jsx)(t.h3,{id:`protected-helpers`,children:`Protected Helpers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFileName(): string`}),` — Generates a unique, incremented file path (e.g., `,(0,c.jsx)(t.code,{children:`./ai-tmp/Prompt-1.txt`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};