import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/AiDocItemComposables - AI Composable Documentation Generator`}),`
`,(0,c.jsx)(n.h1,{id:`aidocitemcomposables-class`,children:`AiDocItemComposables Class`}),`
`,(0,c.jsx)(n.p,{children:`A specialized class for generating and updating documentation for Vue Composables using AI. It automates the process of analyzing composition functions, gathering context, and producing high-quality MDX documentation.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Composition-focused`}),` — uses specialized templates (`,(0,c.jsx)(n.code,{children:`aiDocComposablePrompt.en.txt`}),`) tailored for documenting Vue composables.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Visual Demos`}),` — incorporates reference data from `,(0,c.jsx)(n.code,{children:`demoComposableEn.mdx`}),` to maintain a consistent look for composable documentation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Full Automation`}),` — handles the technical steps of reading code, checking build status, and writing the final results.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Intelligent Routing`}),` — automatically calculates the appropriate Wiki storage path and page title.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Initialize the `,(0,c.jsx)(n.code,{children:`AiDocItemComposables`}),` by providing the project source path and the target file metadata.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — the base directory path of the project.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: GitFileItem`}),` — information about the specific composable file.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiDocItemComposables } from '@dxtmisha/scripts'

const composableDoc = new AiDocItemComposables('/src/composables', gitFileItem)

// Generate the documentation
await composableDoc.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<void>`}),` — executes the full documentation cycle: checks for updates, prepares the AI context, and writes the output.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`metadata`,children:`Metadata`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTitle(): string`}),` — generates a standardized title for the composable documentation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPathWiki(): string[]`}),` — calculates the Wiki path based on the file's location in the project.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isBuildDisabled(): boolean`}),` — checks if the source file contains `,(0,c.jsx)(n.code,{children:`// wiki:build-none`}),` to skip generation.`]}),`
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