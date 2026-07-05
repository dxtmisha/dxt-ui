import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/# Commands/dxt-package - Package Structure Initialization`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-package`,children:`dxt-package`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`dxt-package`}),` command automates the initialization of a new package's structure and development environment based on predefined templates. Under the hood, it uses the `,(0,c.jsx)(n.code,{children:`PackageInit`}),` and `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),` classes to process empty package directories and scaffold them appropriately.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Directory Scanning`}),`: Automatically scans the configured base directory (defaults to `,(0,c.jsx)(n.code,{children:`packages/`}),`) and identifies empty package folders that require initialization.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Template-Based Scaffolding`}),`: Supports applying specific templates to customize the generation process, adapting the scaffolded structure based on the provided package `,(0,c.jsx)(n.code,{children:`type`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible Configuration`}),`: Allows overriding the default package type, templates, and target base directory via command-line arguments.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsx)(n.p,{children:`The package initialization workflow streamlines the creation of new packages:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`The script reads the provided arguments to determine the package `,(0,c.jsx)(n.code,{children:`type`}),` (defaulting to `,(0,c.jsx)(n.code,{children:`library`}),`), `,(0,c.jsx)(n.code,{children:`templates`}),`, and target `,(0,c.jsx)(n.code,{children:`dir`}),`.`]}),`
`,(0,c.jsx)(n.li,{children:`It scans the target directory to find any empty folders (directories with no children).`}),`
`,(0,c.jsxs)(n.li,{children:[`For each empty directory found, it initializes a `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),` instance, passing the package path, type, and templates.`]}),`
`,(0,c.jsx)(n.li,{children:`The system then processes these configurations to scaffold the required files and environment structure for the package, making it ready for development.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-to-configure-and-run`,children:`How to configure and run`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize newly created empty package folders with the default `,(0,c.jsx)(n.code,{children:`library`}),` type, run:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-package
`})}),`
`,(0,c.jsxs)(n.p,{children:[`To specify a custom package type (e.g., `,(0,c.jsx)(n.code,{children:`vue`}),`), run:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-package vue
`})}),`
`,(0,c.jsx)(n.p,{children:`To specify a custom type and apply specific templates, pass them as arguments:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-package vue "template1,template2"
`})}),`
`,(0,c.jsx)(n.p,{children:`You can also specify a custom base directory as the third argument:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-package vue "template1" "packages/custom-dir"
`})}),`
`,(0,c.jsx)(n.h2,{id:`generated-structure`,children:`Generated Structure`}),`
`,(0,c.jsx)(n.p,{children:`When the command processes an empty directory, it scaffolds the base files necessary for the given package type and templates. This typically includes structural files, base configurations, and entry points, transforming an empty folder into a fully functional package environment within the workspace.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};