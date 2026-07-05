import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/# Commands/dxt-library - Library Entry Point Generator`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-library`,children:`dxt-library`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`dxt-library`}),` command is a CLI utility that generates a consolidated entry point (`,(0,c.jsx)(n.code,{children:`src/library.ts`}),`) for the entire UI library. It uses the `,(0,c.jsx)(n.code,{children:`LibraryExport`}),` class to scan primary subfolders and dynamically compile all exports into a single public interface.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unified Entry Point`}),`: Compiles multiple directories into a single optimized export interface.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Smart Module Handling`}),`: Automatically handles wildcard exports for TypeScript utilities and creates named exports for Vue components.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Intelligent Filtering`}),`: Excludes unit test files and files marked with a non-export directive.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Style Bundling`}),`: Automatically incorporates global styles into the generated entry file.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsx)(n.p,{children:`The entry point compilation workflow automates the assembly of all module exports:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`The script scans the designated source subdirectories (`,(0,c.jsx)(n.code,{children:`classes`}),`, `,(0,c.jsx)(n.code,{children:`components`}),`, `,(0,c.jsx)(n.code,{children:`composables`}),`, `,(0,c.jsx)(n.code,{children:`functions`}),`, `,(0,c.jsx)(n.code,{children:`global`}),`, `,(0,c.jsx)(n.code,{children:`types`}),`) using recursive directory reading tools.`]}),`
`,(0,c.jsxs)(n.li,{children:[`It filters out unit test files (containing `,(0,c.jsx)(n.code,{children:`.test.`}),`) and files containing the `,(0,c.jsx)(n.code,{children:`// export:none`}),` directive.`]}),`
`,(0,c.jsxs)(n.li,{children:[`For each valid TypeScript file (`,(0,c.jsx)(n.code,{children:`.ts`}),`), it appends a standard wildcard export.`]}),`
`,(0,c.jsxs)(n.li,{children:[`For each Vue SFC file (`,(0,c.jsx)(n.code,{children:`.vue`}),`), it generates an import and maps it to a named constant export for clean consumption.`]}),`
`,(0,c.jsxs)(n.li,{children:[`It checks for the existence of `,(0,c.jsx)(n.code,{children:`style.scss`}),` or `,(0,c.jsx)(n.code,{children:`style.css`}),` in the base input directory and prepends their import statements if found.`]}),`
`,(0,c.jsxs)(n.li,{children:[`It writes the compiled code directly to `,(0,c.jsx)(n.code,{children:`src/library.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-to-configure-and-run`,children:`How to configure and run`}),`
`,(0,c.jsx)(n.p,{children:`No complex setup is required to run the library entry point generator. The script automatically reads configurations and processes the preset export directories.`}),`
`,(0,c.jsx)(n.p,{children:`To execute the generation workflow, run:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-library
`})}),`
`,(0,c.jsx)(n.h2,{id:`generated-file-structure`,children:`Generated File Structure`}),`
`,(0,c.jsx)(n.p,{children:`Upon successful execution, the tool creates or updates the following file in the package:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`src/library.ts`}),`: The unified entry point containing all imports, named component exports, and wildcards.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};