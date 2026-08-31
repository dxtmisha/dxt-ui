import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/7. Commands/dxt-types-save - Save AI Type Definitions`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-types-save`,children:`dxt-types-save`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-types-save`}),` command compiles and saves AI-optimized TypeScript definitions from cached/prepared list files without invoking AI generation models. It generates type definitions rapidly, verifies that the developer guide exists, and compiles MCP server resources.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Fast Offline Saving`}),`: Combines processed declarations from the `,(0,c.jsx)(t.code,{children:`ai-types-list`}),` directory without spending tokens or making AI network requests.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Description Check`}),`: Checks if `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),` exists; if missing, generates it automatically.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`MCP Resource Compilation`}),`: Prepares MCP resources and metadata for the library.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Read Processed List`}),`: Scans the `,(0,c.jsx)(t.code,{children:`ai-types-list`}),` directory for prepared type definitions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Assemble `,(0,c.jsx)(t.code,{children:`ai-types.md`})]}),`: Joins and writes the complete AI-optimized TypeScript type reference.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ensure Description`}),`: Verifies that the package overview in `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),` is present.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Generate MCP Config`}),`: Compiles Model Context Protocol resources via `,(0,c.jsx)(t.code,{children:`DesignTypesMcp`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(t.p,{children:[`Run the type saver via `,(0,c.jsx)(t.code,{children:`npx`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-types-save
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--prompts`}),` (`,(0,c.jsx)(t.code,{children:`-p`}),`) (Optional): Input directory containing prompt files. Defaults to `,(0,c.jsx)(t.code,{children:`ai-resources`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--dir`}),` (`,(0,c.jsx)(t.code,{children:`-d`}),`) (Optional): Input directory containing declaration files. Defaults to the temporary compilation directory (`,(0,c.jsx)(t.code,{children:`ai-types-temp`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--dist`}),` (Optional): Output directory containing compiled JavaScript files. Defaults to `,(0,c.jsx)(t.code,{children:`dist`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Run `,(0,c.jsx)(t.code,{children:`npx dxt-types-save --help`}),` to print the full list of available options.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};