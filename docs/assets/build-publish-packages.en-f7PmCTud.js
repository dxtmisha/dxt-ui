import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/# Commands/dxt-build-publish-packages - Publish Packages`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-build-publish-packages`,children:`dxt-build-publish-packages`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`dxt-build-publish-packages`}),` command provides automated publishing of npm packages across the workspace. It uses `,(0,c.jsx)(n.code,{children:`BuildPublishPackages`}),` and `,(0,c.jsx)(n.code,{children:`PackageFile`}),` to scan active library folders, track versions, and publish packages to npm when new versions are detected.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Monorepo Scanning`}),`: Automatically detects active package directories under `,(0,c.jsx)(n.code,{children:`/packages/`}),` that contain a valid `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Incremental Version-Based Caching`}),`: Avoids redundant publications by maintaining a local publication cache in `,(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json`}),`. It only triggers publish operations if a package's version has changed compared to the cache.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Intelligent Script Resolution`}),`: Automatically executes the `,(0,c.jsx)(n.code,{children:`"publish-to-npm"`}),` script if it is defined in the package's scripts, falling back to standard `,(0,c.jsx)(n.code,{children:`npm publish --access public`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Publish Exclusion`}),`: Automatically skips packages marked as private (`,(0,c.jsx)(n.code,{children:`"private": true`}),`) or explicitly flagged to prevent publication (`,(0,c.jsx)(n.code,{children:`"ui-no-publish": true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsx)(n.p,{children:`The package publication workflow automates checks and publish dispatching:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Scan Directories`}),`: The `,(0,c.jsx)(n.code,{children:`BuildPublishPackages`}),` class scans the target packages directory (by default, `,(0,c.jsx)(n.code,{children:`/packages/`}),`) and reads the publication cache log from `,(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Filter & Validate`}),`: For each directory, it instantiates a `,(0,c.jsx)(n.code,{children:`PackageFile`}),` wrapper to verify that it is a package and that it is not excluded from publishing.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Execute Publish`}),`: If an update is required or the package is not yet logged:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`If `,(0,c.jsx)(n.code,{children:`"publish-to-npm"`}),` script exists, it executes `,(0,c.jsx)(n.code,{children:`npm run publish-to-npm`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Otherwise, it falls back to executing `,(0,c.jsx)(n.code,{children:`npm publish --access public`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Log Synchronization`}),`: Upon successful publication of a package, its version is updated in the in-memory cache.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Persist Logs`}),`: If one or more packages were successfully published, the updated cache is saved back to `,(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`additional-information`,children:`Additional Information`}),`
`,(0,c.jsxs)(n.h3,{id:`log-caching-file-ui-publishlogjson`,children:[`Log Caching File (`,(0,c.jsx)(n.code,{children:`ui-publish.log.json`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`The local publication cache is stored at:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json
`})}),`
`,(0,c.jsxs)(n.p,{children:[`If you wish to force-republish all packages regardless of version consistency, you can delete this file or reset its contents to empty `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`excluding-packages-from-publishing`,children:`Excluding Packages from Publishing`}),`
`,(0,c.jsxs)(n.p,{children:[`If you want a package to be ignored by the publisher, add one of the following properties to its `,(0,c.jsx)(n.code,{children:`package.json`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "private": true
}
`})}),`
`,(0,c.jsx)(n.p,{children:`or:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "ui-no-publish": true
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};