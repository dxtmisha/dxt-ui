import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/AiDocItemClasses - AI Class Documentation Generator`}),`
`,(0,c.jsx)(n.h1,{id:`aidocitemclasses-class`,children:`AiDocItemClasses Class`}),`
`,(0,c.jsx)(n.p,{children:`A dedicated class for generating and updating documentation for TypeScript classes using AI. It automates the entire process, including reading source code, collecting context, interacting with AI models, and generating standardized MDX documentation files.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Generation`}),` — handles the full lifecycle of creating documentation from a class definition.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Template-driven`}),` — uses specialized prompt templates (`,(0,c.jsx)(n.code,{children:`aiDocClassPrompt.en.txt`}),`) to ensure consistent AI output.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Demo-aware`}),` — incorporates reference demonstration files (`,(0,c.jsx)(n.code,{children:`demoClassEn.mdx`}),`) to guide the AI in visual formatting.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Smart Logic`}),` — automatically determines Wiki paths and titles based on the source file structure.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Build Guard`}),` — integrates with the build system to ensure only valid, compilable code is documented.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Initialize the `,(0,c.jsx)(n.code,{children:`AiDocItemClasses`}),` by providing the source path and the target file information.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — the base directory path of the project.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: GitFileItem`}),` — information about the specific TypeScript class file.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiDocItemClasses } from '@dxtmisha/scripts'

const classDoc = new AiDocItemClasses('/src/classes', gitFileItem)

// Generate the documentation
await classDoc.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<void>`}),` — starts the documentation cycle: checks for updates, prepares context, invokes AI, and writes results.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`metadata`,children:`Metadata`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTitle(): string`}),` — generates a standardized title for the documentation page.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPathWiki(): string[]`}),` — calculates the target storage path in the Wiki based on the file's location.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isBuildDisabled(): boolean`}),` — checks if the source file is marked with `,(0,c.jsx)(n.code,{children:`// wiki:build-none`}),` to skip processing.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`gitfileitem`,children:`GitFileItem`}),`
`,(0,c.jsx)(n.p,{children:`Represents file information managed by Git.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Relative path to the file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathByOS: string`}),` — Absolute OS-specific path.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date: string`}),` — Last modification date.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: any`}),` — Reserved for additional metadata.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};