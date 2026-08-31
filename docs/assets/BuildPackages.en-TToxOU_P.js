import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/BuildPackages - Library Builder for Monorepo`}),`
`,(0,c.jsx)(t.h1,{id:`buildpackages-class`,children:`BuildPackages Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` class is an orchestrator responsible for scanning, filtering, priority sorting, and incrementally building npm packages across the monorepo workspace. It tracks package version changes using a local log cache file (`,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`) and compiles only modules whose versions have changed or have not yet been built.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Monorepo Scanning`}),`: Scans the packages directory (`,(0,c.jsx)(t.code,{children:`packages/`}),`) and discovers all active packages containing a valid `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Priority-Based Build Ordering (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`: Sorts packages by `,(0,c.jsx)(t.code,{children:`ui-priority`}),` (defaults to `,(0,c.jsx)(t.code,{children:`500`}),`, ascending order), ensuring lower-level utility and design packages build prior to dependent high-level components.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Incremental Version-Based Caching`}),`: Compares the package version with `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),` to prevent rebuilding unchanged code.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Intelligent Script Resolution`}),`: Automatically resolves the first available build command in `,(0,c.jsx)(t.code,{children:`package.json`}),` following strict priority order:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prepublishOnly`}),` (Priority 1)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`build-recovery`}),` (Priority 2)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`build`}),` (Priority 3)`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Test Package Filtering`}),`: Ignores packages marked with `,(0,c.jsx)(t.code,{children:`"ui-test": true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Log Persistence`}),`: Writes updated build versions to `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),` only when at least one package was successfully compiled (`,(0,c.jsx)(t.code,{children:`changed > 0`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`constructor`,children:`Constructor`}),`
`,(0,c.jsxs)(t.p,{children:[`The constructor accepts a custom packages directory path (defaults to the `,(0,c.jsx)(t.code,{children:`UI_DIR_PACKAGES`}),` constant = `,(0,c.jsx)(t.code,{children:`'packages'`}),`) and loads the existing build cache log from `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BuildPackages } from '@dxtmisha/scripts'

// Initialize using default packages directory ('packages')
const builder = new BuildPackages()

// Or specify a custom packages path
const customBuilder = new BuildPackages('custom-packages')
await customBuilder.make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`class-properties`,children:`Class Properties`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readonly path: string`}),` — Monorepo packages root directory path (defaults to `,(0,c.jsx)(t.code,{children:`'packages'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readonly log: Record<string, string>`}),` — In-memory map of cached package versions `,(0,c.jsx)(t.code,{children:`{ [packageName]: version }`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — Main orchestration pipeline:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Retrieves the sorted list of valid packages via `,(0,c.jsx)(t.code,{children:`getList()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Logs total discovered packages count (`,(0,c.jsx)(t.code,{children:`Build packages(N)...`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`For each package, verifies whether an update is required (`,(0,c.jsx)(t.code,{children:`isUpdate`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Triggers package compilation if needed (`,(0,c.jsx)(t.code,{children:`build`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`On successful build, updates the in-memory version log (`,(0,c.jsx)(t.code,{children:`updateLog`}),`) and increments `,(0,c.jsx)(t.code,{children:`changed`}),` count.`]}),`
`,(0,c.jsxs)(t.li,{children:[`If `,(0,c.jsx)(t.code,{children:`changed > 0`}),`, saves the updated log file to disk (`,(0,c.jsx)(t.code,{children:`saveLog`}),`) and logs `,(0,c.jsx)(t.code,{children:`Build packages changed: N`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`If no packages required compilation, logs `,(0,c.jsx)(t.code,{children:`Build packages - no changes`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected build(packageFile: PackageFile): Promise<boolean>`}),` — Executes the build command for a package:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Resolves the script via `,(0,c.jsx)(t.code,{children:`packageFile.getCodeBuildOrRecovery()`}),` (`,(0,c.jsx)(t.code,{children:`prepublishOnly`}),` -> `,(0,c.jsx)(t.code,{children:`build-recovery`}),` -> `,(0,c.jsx)(t.code,{children:`build`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Runs `,(0,c.jsx)(t.code,{children:`npm run <script>`}),` inside the package directory using the `,(0,c.jsx)(t.code,{children:`run`}),` helper function.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Returns `,(0,c.jsx)(t.code,{children:`true`}),` on successful completion, or `,(0,c.jsx)(t.code,{children:`false`}),` on execution failure / if no build script was found.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected isUpdate(packageFile: PackageFile): boolean`}),` — Checks if a package requires rebuilding via `,(0,c.jsx)(t.code,{children:`!packageFile.isVersionConsistency(this.getVersionLog(packageFile.getName()))`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getVersionLog(name: string): string`}),` — Retrieves the cached package version from the log (returns `,(0,c.jsx)(t.code,{children:`'0.0.0'`}),` if the package has not been logged yet).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected updateLog(packageFile: PackageFile): void`}),` — Updates the in-memory version entry `,(0,c.jsx)(t.code,{children:`this.log[packageFile.getName()] = packageFile.getVersion()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected saveLog(): void`}),` — Persists the current in-memory log map `,(0,c.jsx)(t.code,{children:`this.log`}),` to `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),` via `,(0,c.jsx)(t.code,{children:`PropertiesFile.writeByPath`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`private getList(): PackageFile[]`}),` — Scans `,(0,c.jsx)(t.code,{children:`this.path`}),`, filters directories (ensures `,(0,c.jsx)(t.code,{children:`package.json`}),` exists and `,(0,c.jsx)(t.code,{children:`"ui-test": true`}),` is absent), and sorts packages in ascending order based on `,(0,c.jsx)(t.code,{children:`ui-priority`}),` (defaults to `,(0,c.jsx)(t.code,{children:`500`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};