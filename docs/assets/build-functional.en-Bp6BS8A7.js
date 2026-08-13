import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/# Commands/dxt-build-functional - Build Functional Exports`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-build-functional`,children:`dxt-build-functional`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-build-functional`}),` command automatically aggregates and re-exports all reactive utilities, classes, and composables from the `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),` package into a consolidated entry file `,(0,c.jsx)(t.code,{children:`functional.ts`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Entry Creation`}),`: Automatically collects and compiles a single export list of all reactive functional APIs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Strict Sorting`}),`: Sorts re-exports alphabetically to maintain consistency and prevent merge conflicts.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Type-safe Re-exports`}),`: Automatically forwards TypeScript types (`,(0,c.jsx)(t.code,{children:`export type *`}),`) from the core functional package.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Load Package`}),`: The script imports the core `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),` module.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Collect Keys`}),`: It reads all exported keys dynamically from the module object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sort & Build`}),`: It sorts the keys alphabetically and constructs code generation strings for each exported member.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Write Output`}),`: The script joins the strings and writes the completed file to the configured library path as `,(0,c.jsx)(t.code,{children:`functional.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(t.p,{children:[`Run the build tool via `,(0,c.jsx)(t.code,{children:`npx`}),` or npm workspace scripts:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-build-functional
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};