import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/ApiTmp - Temporary File Helper for AI prompts`}),`
`,(0,c.jsx)(n.h1,{id:`apitmp-class`,children:`ApiTmp Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`ApiTmp`}),` class is a helper utility designed to manage temporary prompt files on the filesystem under the `,(0,c.jsx)(n.code,{children:`./ai-tmp`}),` directory. It is primarily used by CLI-based AI services to dump large text inputs into text files to prevent terminal argument length violations.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Safe Disk Buffering`}),` — writes large prompt blocks to the local disk during generation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unique Identifiers`}),` — automatically increments file IDs to prevent concurrent write collisions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Clean PURGE Actions`}),` — provides methods to instantly delete temporary directories and recover system disk space.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`ApiTmp`}),` class can be instantiated directly.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiTmp } from '@dxtmisha/scripts'

const tmp = new ApiTmp()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`files-management`,children:`Files Management`}),`
`,(0,c.jsx)(n.h4,{id:`createfile`,children:(0,c.jsx)(n.code,{children:`createFile`})}),`
`,(0,c.jsx)(n.p,{children:`Writes prompt content to a uniquely numbered temporary file and returns a formatted command-line reference instruction.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`content: string`}),` — The text content of the prompt to write to disk.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — A formatted path reference string (e.g., `,(0,c.jsx)(n.code,{children:`Please read the following file as it contains the prompt instructions: @./ai-tmp/Prompt-1.txt`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const promptReference = tmp.createFile('Hello Claude, please generate standard SCSS mixins.')
`})}),`
`,(0,c.jsx)(n.h4,{id:`removefile`,children:(0,c.jsx)(n.code,{children:`removeFile`})}),`
`,(0,c.jsxs)(n.p,{children:[`Cleans up the entire temporary file directory `,(0,c.jsx)(n.code,{children:`./ai-tmp`}),` from the filesystem.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`tmp.removeFile()
`})}),`
`,(0,c.jsx)(n.h3,{id:`protected-helpers`,children:`Protected Helpers`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFileName(): string`}),` — Generates a unique, incremented file path (e.g., `,(0,c.jsx)(n.code,{children:`./ai-tmp/Prompt-1.txt`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};