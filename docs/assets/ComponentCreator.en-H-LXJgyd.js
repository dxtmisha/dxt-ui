import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/ComponentCreator - Automatic Component Scaffolding`}),`
`,(0,c.jsx)(n.h1,{id:`componentcreator-class`,children:`ComponentCreator Class`}),`
`,(0,c.jsx)(n.p,{children:`A utility class for automating the creation of component skeletons in empty directories. It proactively identifies folders within the component directory that lack files and initializes them using the project's standard templates.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Discovery`}),` — scans the component directory recursively to find empty folders.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Smart Scaffolding`}),` — automatically triggers the creation process for each identified directory.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Project Consistency`}),` — ensures all new components start with the same baseline structure and files.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Initialize a new instance of `,(0,c.jsx)(n.code,{children:`ComponentCreator`}),`. It automatically targets the standard components directory defined in the project configuration.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ComponentCreator } from '@dxtmisha/scripts'

const creator = new ComponentCreator()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsxs)(n.p,{children:[`The primary orchestration method that performs a recursive scan of the components directory, identifies folders without files, and triggers the `,(0,c.jsx)(n.code,{children:`ComponentItem`}),` scaffolding process for each one.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`complete-scaffolding-flow`,children:`Complete Scaffolding Flow`}),`
`,(0,c.jsxs)(n.p,{children:[`Running the creator as part of a build or preparation script ensures that even manually created empty folders are properly initialized with necessary files (`,(0,c.jsx)(n.code,{children:`index.ts`}),`, `,(0,c.jsx)(n.code,{children:`types.ts`}),`, etc.).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const creator = new ComponentCreator()
creator.make()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};