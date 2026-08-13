import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/# Commands/dxt-build-packages - Build Packages`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-build-packages`,children:`dxt-build-packages`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-build-packages`}),` command provides automated building of changed npm packages across the workspace. It uses `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` and `,(0,c.jsx)(t.code,{children:`PackageFile`}),` to scan for active library folders, track versions, and incrementally compile package structures when changes are detected.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Monorepo Scanning`}),`: Automatically detects active package directories under `,(0,c.jsx)(t.code,{children:`/packages/`}),` that contain a valid `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Incremental Version-Based Caching`}),`: Avoids redundant builds by maintaining a local build cache in `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`. It only triggers build operations if a package's version has changed compared to the cache.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Intelligent Script Resolution`}),`: Automatically executes `,(0,c.jsx)(t.code,{children:`"build-recovery"`}),` script if it is defined in the package's scripts, falling back to the standard `,(0,c.jsx)(t.code,{children:`"build"`}),` script.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Test Package Exclusion`}),`: Automatically skips packages marked as tests (`,(0,c.jsx)(t.code,{children:`"ui-test": true`}),` in `,(0,c.jsx)(t.code,{children:`package.json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsx)(t.p,{children:`The package compilation workflow automates checks and build dispatching:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Scan Directories`}),`: The `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` class scans the target packages directory (by default, `,(0,c.jsx)(t.code,{children:`/packages/`}),`) and reads the build cache log `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Filter & Validate`}),`: For each directory, it instantiates a `,(0,c.jsx)(t.code,{children:`PackageFile`}),` wrapper to verify that it is a package, that it is not a test package, and that its current version differs from the version recorded in the build cache.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Execute Build`}),`: If an update is required, it checks the package's `,(0,c.jsx)(t.code,{children:`package.json`}),` scripts:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`If `,(0,c.jsx)(t.code,{children:`"build-recovery"`}),` script exists, it executes `,(0,c.jsx)(t.code,{children:`npm run build-recovery`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Otherwise, if `,(0,c.jsx)(t.code,{children:`"build"`}),` script exists, it executes `,(0,c.jsx)(t.code,{children:`npm run build`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Log Synchronization`}),`: Upon successful compilation of a package, its version is updated in the in-memory cache.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Persist Logs`}),`: If one or more packages were successfully built, the updated cache is saved back to `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`additional-information`,children:`Additional Information`}),`
`,(0,c.jsxs)(t.h3,{id:`log-caching-file-ui-buildlogjson`,children:[`Log Caching File (`,(0,c.jsx)(t.code,{children:`ui-build.log.json`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`The local cache is stored at:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json
`})}),`
`,(0,c.jsxs)(t.p,{children:[`If you wish to force-rebuild all packages regardless of version consistency, you can delete this file or reset its contents to empty `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`excluding-test-packages`,children:`Excluding Test Packages`}),`
`,(0,c.jsxs)(t.p,{children:[`If you want a package to be ignored by the builder, add the following property to its `,(0,c.jsx)(t.code,{children:`package.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "ui-test": true
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};