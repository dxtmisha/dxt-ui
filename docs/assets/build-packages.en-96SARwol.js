import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DTffVoCm.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/7. Commands/dxt-build-packages - Build Packages`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-build-packages`,children:`dxt-build-packages`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-build-packages`}),` command provides automated incremental building of npm packages across the monorepo workspace. It utilizes the `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` class and `,(0,c.jsx)(t.code,{children:`PackageFile`}),` wrapper to scan package directories, sort them by build priority, track version changes via a local log cache, and compile only packages with updated versions.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Monorepo Scanning`}),`: Scans the packages directory (`,(0,c.jsx)(t.code,{children:`packages/`}),`) and discovers all active packages containing a valid `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Priority-Based Build Ordering (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`: Automatically sorts packages based on the `,(0,c.jsx)(t.code,{children:`ui-priority`}),` field in `,(0,c.jsx)(t.code,{children:`package.json`}),` (defaults to `,(0,c.jsx)(t.code,{children:`500`}),`), ensuring dependencies build in proper order from foundational utilities to high-level components.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Incremental Version-Based Caching`}),`: Prevents redundant builds by tracking package versions in a local log cache. Compilation is only triggered when a package version changes or is not yet cached.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Custom Build Code (`,(0,c.jsx)(t.code,{children:`--code`}),`)`]}),`: Allows overriding the build command (e.g., `,(0,c.jsx)(t.code,{children:`dxt-build-packages --code=types`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Custom Log File & GitIgnore Sync (`,(0,c.jsx)(t.code,{children:`--log`}),`)`]}),`: Allows specifying a custom log file name/path (e.g., `,(0,c.jsx)(t.code,{children:`--log=ui-types`}),`), automatically registering it in `,(0,c.jsx)(t.code,{children:`.gitignore`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Intelligent Script Resolution`}),`: Automatically resolves the first available build command in `,(0,c.jsx)(t.code,{children:`package.json`}),` in strict priority order: `,(0,c.jsx)(t.code,{children:`prepublishOnly`}),`, then `,(0,c.jsx)(t.code,{children:`build-recovery`}),`, then `,(0,c.jsx)(t.code,{children:`build`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Test Package Exclusion`}),`: Automatically skips packages marked with `,(0,c.jsx)(t.code,{children:`"ui-test": true`}),` in `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsx)(t.p,{children:`The package compilation workflow runs through the following step-by-step process:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Scan and Cache Initialization`}),`: The `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` class reads the build cache (`,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),` or custom file) and scans the packages directory (`,(0,c.jsx)(t.code,{children:`packages/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Package Filtering`}),`: A `,(0,c.jsx)(t.code,{children:`PackageFile`}),` instance is created for each folder, filtering out non-package folders and test packages (`,(0,c.jsx)(t.code,{children:`"ui-test": true`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Priority Sorting`}),`: Valid packages are sorted in ascending order according to their `,(0,c.jsx)(t.code,{children:`ui-priority`}),` value (defaults to `,(0,c.jsx)(t.code,{children:`500`}),` if not specified).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Version Consistency Check`}),`: Compares the current version in `,(0,c.jsx)(t.code,{children:`package.json`}),` against the cached version log.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Execute Build`}),`: If a package version differs (or has never been built):`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`If `,(0,c.jsx)(t.code,{children:`--code`}),` is provided, executes the specified command or `,(0,c.jsx)(t.code,{children:`npm run <code-name>`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Otherwise, the build script is resolved from `,(0,c.jsx)(t.code,{children:`package.json`}),` by priority (`,(0,c.jsx)(t.code,{children:`prepublishOnly`}),` -> `,(0,c.jsx)(t.code,{children:`build-recovery`}),` -> `,(0,c.jsx)(t.code,{children:`build`}),`).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Log Update`}),`: Upon successful build, the package version is recorded in the in-memory log.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cache Persistence & GitIgnore Update`}),`: If one or more packages were compiled (`,(0,c.jsx)(t.code,{children:`changed > 0`}),`), the updated cache is written back to disk, and the log file path is added to `,(0,c.jsx)(t.code,{children:`.gitignore`}),`. If no packages required updating, it logs `,(0,c.jsx)(t.code,{children:`Build packages - no changes`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.p,{children:`Run the build command via CLI:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`# Standard incremental packages build
npx dxt-build-packages

# Types build with dedicated log cache
npx dxt-build-packages --code=types --log=ui-types
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Or configure it in the monorepo's root `,(0,c.jsx)(t.code,{children:`package.json`}),` scripts:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "build:packages": "dxt-build-packages",
    "build:types": "dxt-build-packages --code=types --log=ui-types"
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`available-cli-options`,children:`Available CLI Options`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`-c, --code <CODE>`}),`: Custom build command or npm script name (e.g., `,(0,c.jsx)(t.code,{children:`types`}),` or `,(0,c.jsx)(t.code,{children:`npm run build:prod`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`-d, --dir <DIR>`}),`: Packages directory path (defaults to `,(0,c.jsx)(t.code,{children:`packages`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`-l, --log <LOG>`}),`: Custom build log file name or path (defaults to `,(0,c.jsx)(t.code,{children:`ui-build.log.json`}),` inside `,(0,c.jsx)(t.code,{children:`logs/`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`additional-information`,children:`Additional Information`}),`
`,(0,c.jsxs)(t.h3,{id:`managing-build-priorities-ui-priority`,children:[`Managing Build Priorities (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`To ensure foundational libraries (e.g. basic utilities or design tokens) compile before dependent UI components, specify a numeric priority in the package's `,(0,c.jsx)(t.code,{children:`package.json`}),` (lower numbers execute first):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "name": "@dxtmisha/functional-basic",
  "ui-priority": 100
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Packages with `,(0,c.jsx)(t.code,{children:`ui-priority: 100`}),` are built prior to packages with default priority `,(0,c.jsx)(t.code,{children:`500`}),`.`]}),`
`,(0,c.jsxs)(t.h3,{id:`excluding-test-packages-ui-test`,children:[`Excluding Test Packages (`,(0,c.jsx)(t.code,{children:`ui-test`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`To exclude a package from automated builds, add the following flag to its `,(0,c.jsx)(t.code,{children:`package.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "ui-test": true
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};