import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/6. Publish Packages`}),`
`,(0,c.jsx)(t.h1,{id:`publishing-packages-to-the-npm-registry`,children:`Publishing Packages to the npm Registry`}),`
`,(0,c.jsxs)(t.p,{children:[`In the `,(0,c.jsx)(t.strong,{children:`DXT UI`}),` design system, the package distribution and release process across the entire monorepo is fully automated using the `,(0,c.jsx)(t.code,{children:`dxt-build-publish-packages`}),` CLI utility. Developers no longer need to manually check published versions on npm, navigate into separate package directories, or worry about release conflicts.`]}),`
`,(0,c.jsx)(t.p,{children:`The tool automatically scans the packages directory, queries current live versions from the public npm registry asynchronously, and safely publishes only modified packages.`}),`
`,(0,c.jsx)(t.h2,{id:`key-advantages`,children:`Key Advantages`}),`
`,(0,c.jsx)(t.h3,{id:`1-automated-differential-npm-registry-auditing`,children:`1. Automated Differential npm Registry Auditing`}),`
`,(0,c.jsxs)(t.p,{children:[`Before publishing, `,(0,c.jsx)(t.code,{children:`dxt-build-publish-packages`}),` performs an asynchronous `,(0,c.jsx)(t.code,{children:`npm view <package> version`}),` check for every package. Only packages whose local version is newer than the version currently on npm (or packages being published for the first time) are published.`]}),`
`,(0,c.jsx)(t.h3,{id:`2-conflict-free-publishing-zero-conflicts`,children:`2. Conflict-Free Publishing (Zero Conflicts)`}),`
`,(0,c.jsxs)(t.p,{children:[`The utility prevents `,(0,c.jsx)(t.code,{children:`E403`}),` / `,(0,c.jsx)(t.code,{children:`E409`}),` errors (Cannot publish over existing version) by completely avoiding publish attempts for unchanged packages.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-automatic-isolation-of-private-and-internal-packages`,children:`3. Automatic Isolation of Private and Internal Packages`}),`
`,(0,c.jsxs)(t.p,{children:[`The orchestrator automatically ignores private packages (`,(0,c.jsx)(t.code,{children:`"private": true`}),`) as well as packages flagged with `,(0,c.jsx)(t.code,{children:`"ui-no-publish": true`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`step-by-step-guide-what-to-do`,children:`Step-by-Step Guide (What to Do)`}),`
`,(0,c.jsx)(t.h3,{id:`step-1-configure-the-packagejson-file`,children:`Step 1. Configure the package.json File`}),`
`,(0,c.jsxs)(t.p,{children:[`In your package's `,(0,c.jsx)(t.code,{children:`package.json`}),`, ensure the package name, version, and publish scripts are configured properly:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "name": "@dxtmisha/example-package",
  "version": "1.0.1",
  "scripts": {
    "publish-to-npm": "npm publish --access public"
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-2-bump-the-package-version`,children:`Step 2. Bump the Package Version`}),`
`,(0,c.jsxs)(t.p,{children:[`When code changes are ready for release, increment the version number in the target `,(0,c.jsx)(t.code,{children:`package.json`}),` (for example, from `,(0,c.jsx)(t.code,{children:`1.0.0`}),` to `,(0,c.jsx)(t.code,{children:`1.0.1`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`step-3-run-the-publish-command`,children:`Step 3. Run the Publish Command`}),`
`,(0,c.jsxs)(t.p,{children:[`Execute `,(0,c.jsx)(t.code,{children:`dxt-build-publish-packages`}),` in your terminal from the monorepo root:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-build-publish-packages
`})}),`
`,(0,c.jsx)(t.p,{children:`The script audits the npm registry and publishes only the updated packages:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Publish packages(14)...
Publish packages changed: 1
`})}),`
`,(0,c.jsx)(t.p,{children:`If all monorepo packages match the versions on npm, no publish actions are taken:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Publish packages(14)...
Publish packages - no changes
`})}),`
`,(0,c.jsx)(t.h2,{id:`configuration-flags-in-packagejson`,children:`Configuration Flags in package.json`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ui-no-publish`}),` (boolean)`]}),`: When set to `,(0,c.jsx)(t.code,{children:`true`}),`, the package is excluded from publishing regardless of version changes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`private`}),` (boolean)`]}),`: Private packages are automatically skipped.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`publish-to-npm`}),` (script)`]}),`: If defined under `,(0,c.jsx)(t.code,{children:`scripts`}),`, the orchestrator executes `,(0,c.jsx)(t.code,{children:`npm run publish-to-npm`}),`. Otherwise, it falls back to `,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`advantages-over-manual-publishing`,children:`Advantages Over Manual Publishing`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Release Safety`}),`: Eliminates human errors and accidental deployment of unintended packages.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Single-Command Batch Releases`}),`: Release updates across dozens of packages in a single run.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`CI/CD Integration`}),`: Seamlessly fits into automated release pipelines upon merging into the main branch.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};