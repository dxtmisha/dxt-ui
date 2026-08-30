import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/7. Commands/dxt-package - Package Structure Initialization`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-package`,children:`dxt-package`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-package`}),` command automates the initialization of a new package's structure and development environment based on predefined templates. Under the hood, it uses the `,(0,c.jsx)(t.code,{children:`PackageInit`}),` and `,(0,c.jsx)(t.code,{children:`PackageInitItem`}),` classes to process empty package directories and scaffold them appropriately.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automated Directory Scanning`}),`: Automatically scans the configured base directory (defaults to `,(0,c.jsx)(t.code,{children:`packages/`}),`) and identifies empty package folders that require initialization.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Template-Based Scaffolding`}),`: Supports applying specific templates to customize the generation process, adapting the scaffolded structure based on the provided package `,(0,c.jsx)(t.code,{children:`type`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Flexible Configuration`}),`: Allows overriding the default package type, templates, and target base directory via command-line options.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-does-it-work`,children:`How does it work?`}),`
`,(0,c.jsx)(t.p,{children:`The package initialization workflow streamlines the creation of new packages:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The script reads the provided options to determine the package `,(0,c.jsx)(t.code,{children:`type`}),` (defaulting to `,(0,c.jsx)(t.code,{children:`library`}),`), `,(0,c.jsx)(t.code,{children:`templates`}),`, and target `,(0,c.jsx)(t.code,{children:`dir`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`It scans the target directory to find any empty folders (directories with no children).`}),`
`,(0,c.jsxs)(t.li,{children:[`For each empty directory found, it initializes a `,(0,c.jsx)(t.code,{children:`PackageInitItem`}),` instance, passing the package path, type, and templates.`]}),`
`,(0,c.jsx)(t.li,{children:`The system then processes these configurations to scaffold the required files and environment structure for the package, making it ready for development.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-configure-and-run`,children:`How to configure and run`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize newly created empty package folders with the default `,(0,c.jsx)(t.code,{children:`library`}),` type, run:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package
`})}),`
`,(0,c.jsxs)(t.p,{children:[`To specify a custom package type (e.g., `,(0,c.jsx)(t.code,{children:`vue`}),`), run:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package --type vue
`})}),`
`,(0,c.jsx)(t.p,{children:`To apply specific templates, combine them with the type:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package --type vue --templates "template1,template2"
`})}),`
`,(0,c.jsx)(t.p,{children:`You can also specify a custom base directory:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package --type vue --templates "template1" --dir packages/custom-dir
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Run `,(0,c.jsx)(t.code,{children:`npx dxt-package --help`}),` to print the full list of available options.`]}),`
`,(0,c.jsx)(t.h2,{id:`generated-structure`,children:`Generated Structure`}),`
`,(0,c.jsx)(t.p,{children:`When the command processes an empty directory, it scaffolds the base files necessary for the given package type and templates. This typically includes structural files, base configurations, and entry points, transforming an empty folder into a fully functional package environment within the workspace.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};