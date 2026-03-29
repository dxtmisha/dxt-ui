import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/BuildItem - Component Build Manager`}),`
`,(0,c.jsx)(n.h1,{id:`builditem-class`,children:`BuildItem Class`}),`
`,(0,c.jsx)(n.p,{children:`Responsible for orchestrating the build process of individual components using Vite. It manages temporary build configurations, executes the build pipeline, and aggregates the resulting output into a single code snapshot.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Configuration Isolation`}),` — Safely renames existing Vite configs before build and restores them after completion.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Vite Integration`}),` — Generates dynamic Vite configurations based on a component-specific template.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Output Aggregation`}),` — Recursively reads all files from the temporary distribution directory and combines them into a single `,(0,c.jsx)(n.code,{children:`code.txt`}),` file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Error Propagation`}),` — Monitors build status and handles environment exit codes on failure.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Storage Management`}),` — Provides utility methods for retrieving and cleaning up temporary distribution paths.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Initialize the `,(0,c.jsx)(n.code,{children:`BuildItem`}),` by providing the target component path.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — the target path to the component directory to be built.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BuildItem } from '@dxtmisha/scripts'

const builder = new BuildItem('packages/components/Button')

// Trigger the build process
await builder.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<boolean>`}),` — coordinates the full build lifecycle: configuration backup, build execution, and file restoration.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCode(): string`}),` — retrieves the content of the aggregated code snapshot generated during the build.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`removeDir(): void`}),` — permanently deletes the temporary distribution directory.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`internal-workflow`,children:`Internal Workflow`}),`
`,(0,c.jsx)(n.p,{children:`The build process follows a strict lifecycle to ensure environment safety and consistent output:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Configuration Backup`}),` — Renames the existing `,(0,c.jsx)(n.code,{children:`vite.config.ts`}),` to `,(0,c.jsx)(n.code,{children:`vite.config.workers.ts`}),` to prevent it from being overwritten or interfering with the build.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Template Synthesis`}),` — Reads the component-specific Vite template and injects the target path dynamically.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Shell Execution`}),` — Triggers the `,(0,c.jsx)(n.code,{children:`npm run build`}),` command via a child process, capturing and logging all output.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Restoration`}),` — Safely restores the original `,(0,c.jsx)(n.code,{children:`vite.config.ts`}),` from the backup once the build completes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Aggregation`}),` — Recursively scans the distribution directory, wraps each file's content in an identifier comment, and writes the final combined result to `,(0,c.jsx)(n.code,{children:`code.txt`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};