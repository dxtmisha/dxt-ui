import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/scripts/Classes/BuildItem - Component Build Manager"}),`
`,e.jsx(n.h1,{id:"builditem-class",children:"BuildItem Class"}),`
`,e.jsx(n.p,{children:"Responsible for orchestrating the build process of individual components using Vite. It manages temporary build configurations, executes the build pipeline, and aggregates the resulting output into a single code snapshot."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Configuration Isolation"})," — Safely renames existing Vite configs before build and restores them after completion."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vite Integration"})," — Generates dynamic Vite configurations based on a component-specific template."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Output Aggregation"})," — Recursively reads all files from the temporary distribution directory and combines them into a single ",e.jsx(n.code,{children:"code.txt"})," file."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Error Propagation"})," — Monitors build status and handles environment exit codes on failure."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storage Management"})," — Provides utility methods for retrieving and cleaning up temporary distribution paths."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["Initialize the ",e.jsx(n.code,{children:"BuildItem"})," by providing the target component path."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: string"})," — the target path to the component directory to be built."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { BuildItem } from '@dxtmisha/scripts'

const builder = new BuildItem('packages/components/Button')

// Trigger the build process
await builder.make()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(n.h3,{id:"control",children:"Control"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): Promise<boolean>"})," — coordinates the full build lifecycle: configuration backup, build execution, and file restoration."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getCode(): string"})," — retrieves the content of the aggregated code snapshot generated during the build."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"removeDir(): void"})," — permanently deletes the temporary distribution directory."]}),`
`]}),`
`,e.jsx(n.h2,{id:"internal-workflow",children:"Internal Workflow"}),`
`,e.jsx(n.p,{children:"The build process follows a strict lifecycle to ensure environment safety and consistent output:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Configuration Backup"})," — Renames the existing ",e.jsx(n.code,{children:"vite.config.ts"})," to ",e.jsx(n.code,{children:"vite.config.workers.ts"})," to prevent it from being overwritten or interfering with the build."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Template Synthesis"})," — Reads the component-specific Vite template and injects the target path dynamically."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shell Execution"})," — Triggers the ",e.jsx(n.code,{children:"npm run build"})," command via a child process, capturing and logging all output."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Restoration"})," — Safely restores the original ",e.jsx(n.code,{children:"vite.config.ts"})," from the backup once the build completes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Aggregation"})," — Recursively scans the distribution directory, wraps each file's content in an identifier comment, and writes the final combined result to ",e.jsx(n.code,{children:"code.txt"}),"."]}),`
`]})]})}function u(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{u as default};
