import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/7. Commands/dxt-build-publish-packages - Publish Packages`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-build-publish-packages`,children:`dxt-build-publish-packages`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-build-publish-packages`}),` command provides automated incremental publishing of npm packages across the monorepo workspace. It utilizes the `,(0,c.jsx)(t.code,{children:`BuildPublishPackages`}),` class and `,(0,c.jsx)(t.code,{children:`PackageFile`}),` wrapper to scan package directories, verify version updates via a local log cache, and publish new releases to the npm registry.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Monorepo Scanning`}),`: Discovers active package directories under `,(0,c.jsx)(t.code,{children:`/packages/`}),` that contain a valid `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Incremental Version-Based Caching`}),`: Avoids redundant publications by maintaining a local version registry in `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`. Publication is triggered only when a package's version in `,(0,c.jsx)(t.code,{children:`package.json`}),` differs from the cached value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Intelligent Script Resolution`}),`: Automatically executes the `,(0,c.jsx)(t.code,{children:`"publish-to-npm"`}),` script if defined in `,(0,c.jsx)(t.code,{children:`package.json`}),`, falling back to standard `,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Baseline Version Synchronization`}),`: Automatically registers untracked packages into the cache on first run without dispatching unwanted publish calls.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Publish Exclusion`}),`: Automatically skips packages marked as private (`,(0,c.jsx)(t.code,{children:`"private": true`}),` in `,(0,c.jsx)(t.code,{children:`package.json`}),`) or flagged with `,(0,c.jsx)(t.code,{children:`"ui-no-publish": true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Real-Time Stream Logging`}),`: Forwards full stdout and stderr streams of publication commands directly to the console.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsx)(t.p,{children:`The package publication workflow automates version verification and release dispatching:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Scan and Cache Initialization`}),`: The `,(0,c.jsx)(t.code,{children:`BuildPublishPackages`}),` class reads the publication cache `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),` and scans the packages directory (`,(0,c.jsx)(t.code,{children:`packages/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Filter & Validate`}),`: For each directory, it instantiates a `,(0,c.jsx)(t.code,{children:`PackageFile`}),` wrapper to verify that `,(0,c.jsx)(t.code,{children:`package.json`}),` exists and that it is not excluded (`,(0,c.jsx)(t.code,{children:`!packageFile.isNoPublish()`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Publication Status Check`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Baseline Registration`}),`: If the package is not yet in the log cache (`,(0,c.jsx)(t.code,{children:`this.log[name] === undefined`}),`), its current version is recorded in the cache without running a publish command.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Version Upgrade`}),`: If the package is already logged and its version in `,(0,c.jsx)(t.code,{children:`package.json`}),` differs from the cache (`,(0,c.jsx)(t.code,{children:`isUpdate`}),`):`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`If `,(0,c.jsx)(t.code,{children:`"publish-to-npm"`}),` script exists, it executes `,(0,c.jsx)(t.code,{children:`npm run publish-to-npm`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Otherwise, it executes `,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Log Synchronization`}),`: Upon successful publication of a package, its version is updated in the in-memory cache.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Persist Logs`}),`: If one or more packages were registered or published (`,(0,c.jsx)(t.code,{children:`changed > 0`}),`), the updated cache is saved back to `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`. If no packages required changes, it logs `,(0,c.jsx)(t.code,{children:`Publish packages - no changes`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.p,{children:`Run the publish command via CLI:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-build-publish-packages
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Or configure it in the monorepo's root `,(0,c.jsx)(t.code,{children:`package.json`}),` scripts:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "publish:packages": "dxt-build-publish-packages"
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`additional-information`,children:`Additional Information`}),`
`,(0,c.jsxs)(t.h3,{id:`log-cache-file-ui-publishlogjson`,children:[`Log Cache File (`,(0,c.jsx)(t.code,{children:`ui-publish.log.json`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`The local version cache is stored at:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json
`})}),`
`,(0,c.jsxs)(t.p,{children:[`If you wish to force-republish all packages regardless of version consistency, you can delete this file or reset its contents to empty `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`excluding-packages-from-publishing`,children:`Excluding Packages from Publishing`}),`
`,(0,c.jsxs)(t.p,{children:[`If you want a package to be ignored by the publisher, add one of the following properties to its `,(0,c.jsx)(t.code,{children:`package.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "private": true
}
`})}),`
`,(0,c.jsx)(t.p,{children:`or:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "ui-no-publish": true
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`custom-publish-command`,children:`Custom Publish Command`}),`
`,(0,c.jsxs)(t.p,{children:[`You can define a custom publication script inside the `,(0,c.jsx)(t.code,{children:`scripts`}),` section of a package's `,(0,c.jsx)(t.code,{children:`package.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "publish-to-npm": "npm publish --access public --tag next"
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};