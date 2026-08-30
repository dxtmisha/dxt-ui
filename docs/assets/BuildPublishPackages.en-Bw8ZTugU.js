import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/BuildPublishPackages - Monorepo Package Publisher`}),`
`,(0,c.jsx)(t.h1,{id:`buildpublishpackages-class`,children:`BuildPublishPackages Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`BuildPublishPackages`}),` class is an orchestrator responsible for scanning, filtering, and automatically publishing changed npm packages across the monorepo workspace to the npm registry. It tracks package versions using a local log cache file (`,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`), automatically registers new packages, and publishes packages upon version upgrades.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Monorepo Scanning`}),`: Scans the packages directory (`,(0,c.jsx)(t.code,{children:`packages/`}),`) and discovers all active packages containing a valid `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Incremental Version-Based Caching`}),`: Prevents duplicate publications of previously released versions by maintaining a local version registry in `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Intelligent Publish Command Resolution`}),`: Automatically executes custom `,(0,c.jsx)(t.code,{children:`"publish-to-npm"`}),` script if defined in `,(0,c.jsx)(t.code,{children:`package.json`}),`, or falls back to default `,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Baseline Sync for New Packages`}),`: Automatically records current versions of previously untracked packages without re-triggering publish.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Publish Exclusion`}),`: Automatically skips packages marked with `,(0,c.jsx)(t.code,{children:`"private": true`}),` or `,(0,c.jsx)(t.code,{children:`"ui-no-publish": true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Real-Time Stream Logging`}),`: Forwards full stdout and stderr streams of publication commands directly to the console.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Log Persistence`}),`: Writes updated versions to `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),` only when changes have occurred (`,(0,c.jsx)(t.code,{children:`changed > 0`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`constructor`,children:`Constructor`}),`
`,(0,c.jsxs)(t.p,{children:[`The constructor accepts a custom packages directory path (defaults to the `,(0,c.jsx)(t.code,{children:`UI_DIR_PACKAGES`}),` constant = `,(0,c.jsx)(t.code,{children:`'packages'`}),`) and loads the existing publish cache log from `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BuildPublishPackages } from '@dxtmisha/scripts'

// Initialize using default packages directory ('packages')
const publisher = new BuildPublishPackages()

// Or specify a custom packages path
const customPublisher = new BuildPublishPackages('custom-packages')
await customPublisher.make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`class-properties`,children:`Class Properties`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readonly path: string`}),` — Monorepo packages root directory path (defaults to `,(0,c.jsx)(t.code,{children:`'packages'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readonly log: Record<string, string>`}),` — In-memory map of cached published package versions `,(0,c.jsx)(t.code,{children:`{ [packageName]: version }`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — Main orchestration pipeline:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Scans `,(0,c.jsx)(t.code,{children:`this.path`}),` and retrieves folder names via `,(0,c.jsx)(t.code,{children:`PropertiesFile.readDir`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Logs total discovered packages count (`,(0,c.jsx)(t.code,{children:`Publish packages(N)...`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`For each folder, creates a `,(0,c.jsx)(t.code,{children:`PackageFile`}),` instance, verifies `,(0,c.jsx)(t.code,{children:`package.json`}),` existence, and checks `,(0,c.jsx)(t.code,{children:`!packageFile.isNoPublish()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`If the package is not yet registered in the log (`,(0,c.jsx)(t.code,{children:`this.log[name] === undefined`}),`), records its current version in the cache and increments `,(0,c.jsx)(t.code,{children:`changed`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`If the package is already logged and its version is updated (`,(0,c.jsx)(t.code,{children:`isUpdate`}),`), executes publication via `,(0,c.jsx)(t.code,{children:`packageFile.getCodePublish()`}),` with real-time stdout/stderr output. On success, updates the cache (`,(0,c.jsx)(t.code,{children:`updateLog`}),`) and increments `,(0,c.jsx)(t.code,{children:`changed`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`If `,(0,c.jsx)(t.code,{children:`changed > 0`}),`, saves the updated log file to disk (`,(0,c.jsx)(t.code,{children:`saveLog`}),`) and logs `,(0,c.jsx)(t.code,{children:`Publish packages changed: N`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`If no packages required publishing or registration, logs `,(0,c.jsx)(t.code,{children:`Publish packages - no changes`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected isUpdate(packageFile: PackageFile): boolean`}),` — Checks if a package requires publishing via `,(0,c.jsx)(t.code,{children:`!packageFile.isVersionConsistency(this.getVersionLog(packageFile.getName()))`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getVersionLog(name: string): string`}),` — Retrieves the cached package version from the publish log (returns `,(0,c.jsx)(t.code,{children:`'0.0.0'`}),` if the package has not been logged yet).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected updateLog(packageFile: PackageFile): void`}),` — Updates the in-memory version entry `,(0,c.jsx)(t.code,{children:`this.log[packageFile.getName()] = packageFile.getVersion()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected saveLog(): void`}),` — Persists the current in-memory log map `,(0,c.jsx)(t.code,{children:`this.log`}),` to `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),` via `,(0,c.jsx)(t.code,{children:`PropertiesFile.writeByPath`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};