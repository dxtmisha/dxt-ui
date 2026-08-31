import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/ComponentCreator - Automatic Component Scaffolding`}),`
`,(0,c.jsx)(t.h1,{id:`componentcreator-class`,children:`ComponentCreator Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` class is an automation utility designed to discover empty directories inside `,(0,c.jsx)(t.code,{children:`src/components/`}),` and scaffold their initial component structure. It scans configured component paths and bootstraps a full set of boilerplate files using `,(0,c.jsx)(t.code,{children:`ComponentItem`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Discovery`}),`: Recursively scans `,(0,c.jsx)(t.code,{children:`src/components/`}),` using `,(0,c.jsx)(t.code,{children:`PropertiesFile.readDirOnlyRecursive`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Empty Folder Filtering`}),`: Filters for folders that contain zero files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Batch Scaffolding`}),`: Instantiates `,(0,c.jsx)(t.code,{children:`ComponentItem`}),` for each detected empty folder to generate all essential component files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Design System Consistency`}),`: Enforces a unified baseline architecture for all newly created components.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Initialize an instance of `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),`. It automatically targets the standard components directory `,(0,c.jsx)(t.code,{children:`src/components/`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentCreator } from '@dxtmisha/scripts'

const creator = new ComponentCreator()
creator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Primary orchestration method:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Calls `,(0,c.jsx)(t.code,{children:`getDirs()`}),` to obtain a list of empty directory paths.`]}),`
`,(0,c.jsxs)(t.li,{children:[`For each detected path, creates a `,(0,c.jsx)(t.code,{children:`ComponentItem(path)`}),` instance and invokes `,(0,c.jsx)(t.code,{children:`.make()`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getDirs(): string[]`}),` — Scans `,(0,c.jsx)(t.code,{children:`UI_DIRS_COMPONENTS`}),` (`,(0,c.jsx)(t.code,{children:`src/components/`}),`) via `,(0,c.jsx)(t.code,{children:`PropertiesFile.readDirOnlyRecursive`}),` and returns an array of folder paths where `,(0,c.jsx)(t.code,{children:`PropertiesFile.readDir(getComponentPaths(path)).length === 0`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`example-usage`,children:`Example Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentCreator } from '@dxtmisha/scripts'

// Scan and bootstrap all empty component directories
new ComponentCreator().make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};