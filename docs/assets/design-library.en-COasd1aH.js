import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/# Commands/dxt-library - Library Entry Point Generator`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-library`,children:`dxt-library`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-library`}),` command is a CLI utility that generates a consolidated entry point (`,(0,c.jsx)(t.code,{children:`src/library.ts`}),`) for the entire UI library. It uses the `,(0,c.jsx)(t.code,{children:`LibraryExport`}),` class to scan primary subfolders and dynamically compile all exports into a single public interface.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Unified Entry Point`}),`: Compiles multiple directories into a single optimized export interface.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Smart Module Handling`}),`: Automatically handles wildcard exports for TypeScript utilities and creates named exports for Vue components.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Intelligent Filtering`}),`: Excludes unit test files and files marked with a non-export directive.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Global Style Bundling`}),`: Automatically incorporates global styles into the generated entry file.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsx)(t.p,{children:`The entry point compilation workflow automates the assembly of all module exports:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The script scans the designated source subdirectories (`,(0,c.jsx)(t.code,{children:`classes`}),`, `,(0,c.jsx)(t.code,{children:`components`}),`, `,(0,c.jsx)(t.code,{children:`composables`}),`, `,(0,c.jsx)(t.code,{children:`functions`}),`, `,(0,c.jsx)(t.code,{children:`global`}),`, `,(0,c.jsx)(t.code,{children:`types`}),`) using recursive directory reading tools.`]}),`
`,(0,c.jsxs)(t.li,{children:[`It filters out unit test files (containing `,(0,c.jsx)(t.code,{children:`.test.`}),`) and files containing the `,(0,c.jsx)(t.code,{children:`// export:none`}),` directive.`]}),`
`,(0,c.jsxs)(t.li,{children:[`For each valid TypeScript file (`,(0,c.jsx)(t.code,{children:`.ts`}),`), it appends a standard wildcard export.`]}),`
`,(0,c.jsxs)(t.li,{children:[`For each Vue SFC file (`,(0,c.jsx)(t.code,{children:`.vue`}),`), it generates an import and maps it to a named constant export for clean consumption.`]}),`
`,(0,c.jsxs)(t.li,{children:[`It checks for the existence of `,(0,c.jsx)(t.code,{children:`style.scss`}),` or `,(0,c.jsx)(t.code,{children:`style.css`}),` in the base input directory and prepends their import statements if found.`]}),`
`,(0,c.jsxs)(t.li,{children:[`It writes the compiled code directly to `,(0,c.jsx)(t.code,{children:`src/library.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-configure-and-run`,children:`How to configure and run`}),`
`,(0,c.jsx)(t.p,{children:`No complex setup is required to run the library entry point generator. The script automatically reads configurations and processes the preset export directories.`}),`
`,(0,c.jsx)(t.p,{children:`To execute the generation workflow, run:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-library
`})}),`
`,(0,c.jsx)(t.h2,{id:`generated-file-structure`,children:`Generated File Structure`}),`
`,(0,c.jsx)(t.p,{children:`Upon successful execution, the tool creates or updates the following file in the package:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`src/library.ts`}),`: The unified entry point containing all imports, named component exports, and wildcards.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};