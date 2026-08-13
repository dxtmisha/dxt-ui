import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/BuildPublishPackages - Monorepo Package Publisher`}),`
`,(0,c.jsx)(t.h1,{id:`buildpublishpackages-class`,children:`BuildPublishPackages Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`BuildPublishPackages`}),` class is a utility responsible for automated publishing of npm packages across the monorepo workspace. It scans the `,(0,c.jsx)(t.code,{children:`packages`}),` directory, determines version changes compared to a local log cache, and publishes updated packages to npm.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Directory Scanning`}),` — Scans the packages folder (`,(0,c.jsx)(t.code,{children:`packages/`}),`) for directories containing a valid `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Incremental Version-Based Caching`}),` — Compares the package version with `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),` to prevent republishing unchanged code.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Intelligent Script Resolution`}),` — Runs `,(0,c.jsx)(t.code,{children:`publish-to-npm`}),` if defined in `,(0,c.jsx)(t.code,{children:`package.json`}),` scripts, otherwise falls back to standard `,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Publish Exclusion`}),` — Skips packages marked as private (`,(0,c.jsx)(t.code,{children:`"private": true`}),`) or with `,(0,c.jsx)(t.code,{children:`"ui-no-publish": true`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`You can create an instance of `,(0,c.jsx)(t.code,{children:`BuildPublishPackages`}),` by optionally passing a custom packages directory path.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BuildPublishPackages } from './BuildPublishPackages'

const publisher = new BuildPublishPackages()
await publisher.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — Initiates scanning and triggers the publication process for each detected package.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isUpdate(packageFile: PackageFile): boolean`}),` — Checks whether the package's version in `,(0,c.jsx)(t.code,{children:`package.json`}),` is different from the version stored in the log file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getVersionLog(name: string): string`}),` — Retrieves the cached version of the package from the publish log.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`updateLog(packageFile: PackageFile): void`}),` — Updates the in-memory publish log with the current package version.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`saveLog(): void`}),` — Saves the in-memory publish log to the `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),` file.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};