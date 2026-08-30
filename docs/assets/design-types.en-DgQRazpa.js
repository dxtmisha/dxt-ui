import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/7. Commands/dxt-types - AI Type Definition Generator`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-types`,children:`dxt-types`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-types`}),` command compiles, sanitizes, and compresses TypeScript declaration files (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`) into AI-optimized type definitions. It filters out internal details and uses AI to generate developer instructions.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Declaration Processing`}),`: Recursively collects `,(0,c.jsx)(t.code,{children:`.d.ts`}),` files from compile output folders (e.g., `,(0,c.jsx)(t.code,{children:`dist/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Encapsulation Filtering`}),`: Automatically strips out private, protected, and non-exported members to keep only the public API surface.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`AI Optimization`}),`: Uses an AI model to clean up comments and produce a highly compressed, token-efficient `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Developer Guide Generation`}),`: Automatically prompts AI to draft a structured overview of library features and saves it to `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Scan Declarations`}),`: The script crawls the target build folder for declaration files (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`), ignoring Vue component and wiki files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Consolidate Code`}),`: Combines all matching files into a single in-memory text payload.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`AI Cleaning (API Surface)`}),`: Sends the text to the AI to strip internal comments/imports, filter out private details, and compress the code.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Save Types`}),`: Saves the cleaned type list to `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` along with guidelines on package exports.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`AI Guide Generation`}),`: Asks the AI to generate a technical summary of the library and writes it to `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(t.p,{children:[`Run the type compiler via `,(0,c.jsx)(t.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--prompts`}),` (`,(0,c.jsx)(t.code,{children:`-p`}),`) (Optional): Input directory containing prompt files. Defaults to `,(0,c.jsx)(t.code,{children:`ai-resources`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--dir`}),` (`,(0,c.jsx)(t.code,{children:`-d`}),`) (Optional): Input directory containing declaration files. Defaults to the temporary compilation directory (`,(0,c.jsx)(t.code,{children:`ai-types-temp`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--dist`}),` (Optional): Output directory containing compiled JavaScript files. Defaults to `,(0,c.jsx)(t.code,{children:`dist`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Run `,(0,c.jsx)(t.code,{children:`npx dxt-types --help`}),` to print the full list of available options.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};