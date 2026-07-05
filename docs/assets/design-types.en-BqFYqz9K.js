import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/# Commands/dxt-types - AI Type Definition Generator`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-types`,children:`dxt-types`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`dxt-types`}),` command compiles, sanitizes, and compresses TypeScript declaration files (`,(0,c.jsx)(n.code,{children:`.d.ts`}),`) into AI-optimized type definitions. It filters out internal details and uses AI to generate developer instructions.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Declaration Processing`}),`: Recursively collects `,(0,c.jsx)(n.code,{children:`.d.ts`}),` files from compile output folders (e.g., `,(0,c.jsx)(n.code,{children:`dist/`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Encapsulation Filtering`}),`: Automatically strips out private, protected, and non-exported members to keep only the public API surface.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`AI Optimization`}),`: Uses an AI model to clean up comments and produce a highly compressed, token-efficient `,(0,c.jsx)(n.code,{children:`ai-types.md`}),` file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Developer Guide Generation`}),`: Automatically prompts AI to draft a structured overview of library features and saves it to `,(0,c.jsx)(n.code,{children:`ai-developer.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Scan Declarations`}),`: The script crawls the target build folder for declaration files (`,(0,c.jsx)(n.code,{children:`.d.ts`}),`), ignoring Vue component and wiki files.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Consolidate Code`}),`: Combines all matching files into a single in-memory text payload.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`AI Cleaning (API Surface)`}),`: Sends the text to the AI to strip internal comments/imports, filter out private details, and compress the code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Save Types`}),`: Saves the cleaned type list to `,(0,c.jsx)(n.code,{children:`ai-types.md`}),` along with guidelines on package exports.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`AI Guide Generation`}),`: Asks the AI to generate a technical summary of the library and writes it to `,(0,c.jsx)(n.code,{children:`ai-developer.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(n.p,{children:[`Run the type compiler via `,(0,c.jsx)(n.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-types [build_dir]
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`build_dir`}),` (Optional): The directory to scan. Defaults to `,(0,c.jsx)(n.code,{children:`dist`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};