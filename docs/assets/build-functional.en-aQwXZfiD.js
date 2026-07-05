import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/# Commands/dxt-build-functional - Build Functional Exports`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-build-functional`,children:`dxt-build-functional`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`dxt-build-functional`}),` command automatically aggregates and re-exports all reactive utilities, classes, and composables from the `,(0,c.jsx)(n.code,{children:`@dxtmisha/functional`}),` package into a consolidated entry file `,(0,c.jsx)(n.code,{children:`functional.ts`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Entry Creation`}),`: Automatically collects and compiles a single export list of all reactive functional APIs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Strict Sorting`}),`: Sorts re-exports alphabetically to maintain consistency and prevent merge conflicts.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type-safe Re-exports`}),`: Automatically forwards TypeScript types (`,(0,c.jsx)(n.code,{children:`export type *`}),`) from the core functional package.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Load Package`}),`: The script imports the core `,(0,c.jsx)(n.code,{children:`@dxtmisha/functional`}),` module.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Collect Keys`}),`: It reads all exported keys dynamically from the module object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sort & Build`}),`: It sorts the keys alphabetically and constructs code generation strings for each exported member.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Write Output`}),`: The script joins the strings and writes the completed file to the configured library path as `,(0,c.jsx)(n.code,{children:`functional.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(n.p,{children:[`Run the build tool via `,(0,c.jsx)(n.code,{children:`npx`}),` or npm workspace scripts:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-build-functional
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};