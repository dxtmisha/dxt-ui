import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/LibraryAiPromptItem - AI Prompt Aggregator Item`}),`
`,(0,c.jsx)(n.h1,{id:`libraryaipromptitem-class`,children:`LibraryAiPromptItem Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`LibraryAiPromptItem`}),` class represents an individual target module or package context block in the AI prompt generation pipeline. It manages discovering, reading, caching, and formatting module-specific resources (such as descriptions, instructions, TypeScript types, and UI screenshot lists) into a coherent section.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Module Discovered Context`}),` — checks for the existence of descriptions, metadata, types, and screenshots within a target subdirectory.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Package Manifest Parsing`}),` — loads and parses the module's `,(0,c.jsx)(n.code,{children:`package.json`}),` to extract its official project name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Structured Content Bundling`}),` — aggregates discovered files into a single, clean markdown output detailing location, purpose, types, and visual assets.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible Path Standardizer`}),` — translates relative paths inside raw instruction sheets into absolute, codebase-relative paths.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Smart Resource Caching`}),` — caches package JSON structures internally to prevent redundant disk read operations.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`LibraryAiPromptItem`}),` is initialized with the directory path segments representing the targeted module.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dir: string[]`}),` — The path segments to the module directory (e.g. `,(0,c.jsx)(n.code,{children:`['packages', 'scripts']`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryAiPromptItem } from '@dxtmisha/scripts'

const item = new LibraryAiPromptItem(['packages', 'scripts'])
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`execution`,children:`Execution`}),`
`,(0,c.jsx)(n.h4,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsx)(n.p,{children:`Core orchestrator that runs status checks for each type of resource (description, info, types, screenshots), aggregates whatever files are present, and formats them into a unified, clean markdown block for the module.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string | undefined`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const promptBlock = item.make()
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`status-checkers`,children:`Status Checkers`}),`
`,(0,c.jsxs)(n.p,{children:[`All status checkers return `,(0,c.jsx)(n.code,{children:`boolean`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isPrompt()`}),` — Returns `,(0,c.jsx)(n.code,{children:`true`}),` if `,(0,c.jsx)(n.em,{children:`any`}),` of description, info, types, or screenshots exist for the module.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDescription()`}),` — Verifies if `,(0,c.jsx)(n.code,{children:`description.txt`}),` exists.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isInfo()`}),` — Verifies if `,(0,c.jsx)(n.code,{children:`info.txt`}),` exists.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isTypes()`}),` — Verifies if `,(0,c.jsx)(n.code,{children:`ai-types.txt`}),` exists.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isScreenshot()`}),` — Verifies if `,(0,c.jsx)(n.code,{children:`ai-screenshot`}),` directory exists.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`public--protected-helpers`,children:`Public & Protected Helpers`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getProjectName(): string`}),` — Reads the project name from the local `,(0,c.jsx)(n.code,{children:`package.json`}),` manifest.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPath(dirFile: string): string[]`}),` — Returns complete path segment array for the specified file in the module folder.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPathString(): string`}),` — Returns the module path segments joined by a slash.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPackageJson(): Record<string, any>`}),` — Reads and caches `,(0,c.jsx)(n.code,{children:`package.json`}),` manifest content.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readFile(dirFile: string): string`}),` — Reads specified file content, updating references to match absolute module directory mapping.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDescription(): string | undefined`}),` — Formats the module description section if present.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getInfo(): string | undefined`}),` — Formats the module core overview section if present.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTypes(): string | undefined`}),` — Formats the module type definition catalog links if present.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getScreenshot(): string | undefined`}),` — Formats visual reference links and screenshots list if present.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getScreenshotList(): string[] | undefined`}),` — Lists files inside the `,(0,c.jsx)(n.code,{children:`ai-screenshot`}),` subdirectory.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};