import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PackageInit - Package Initializer`}),`
`,(0,c.jsx)(n.h1,{id:`packageinit-class`,children:`PackageInit Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PackageInit`}),` class is responsible for bootstrapping new package structures within the design system. It handles directory scanning and delegates individual file initialization to the `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),` class, ensuring consistent environment setup based on provided templates and types.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Structure Bootstrapping`}),` — Automatically creates the necessary folder hierarchy for new packages.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Template-Based Initialization`}),` — Supports different package types and template sets for flexible environment setup.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Directory Handling`}),` — Identifies and processes empty or new directories within the package root.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lifecycle Management`}),` — Provides a single entry point for triggering the entire initialization sequence.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`PackageInit(type, templates, dir)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — The package type identifier (e.g., `,(0,c.jsx)(n.code,{children:`'functional'`}),`, `,(0,c.jsx)(n.code,{children:`'ui'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`templates?: string`}),` — Optional comma-separated list of templates to be applied.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dir: string`}),` — The base directory where packages are located (defaults to `,(0,c.jsx)(n.code,{children:`UI_DIR_PACKAGES`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PackageInit } from '@dxtmisha/scripts'

// Initialize for a 'functional' package with default templates
const initializer = new PackageInit('functional', 'basic,test')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Starts the initialization process for all identified directories within the target path.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`detailed-initialization-flow`,children:`Detailed Initialization Flow`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`make()`}),` method follows a specific sequence to ensure a clean package setup:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Scanning`}),`: It scans the target `,(0,c.jsx)(n.code,{children:`dir`}),` to identify subdirectories that require initialization (typically empty ones).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Delegation`}),`: For each identified directory, it creates an instance of `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Execution`}),`: It triggers the `,(0,c.jsx)(n.code,{children:`make()`}),` method on each `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),`, which handles the actual file creation and template application.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`identifying-target-directories`,children:`Identifying Target Directories`}),`
`,(0,c.jsxs)(n.p,{children:[`The class uses the `,(0,c.jsx)(n.code,{children:`getDirs()`}),` internal method to find directories that are "empty" (contain no subdirectories), which are then treated as the roots for new package components.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`protected getDirs(): string[] {
  return PropertiesFile.readDir(this.dir)
    .filter(
      path => PropertiesFile.readDir([this.dir, path]).length === 0
    )
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};