import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/PackageInitItem - Package Item Initializer`}),`
`,(0,c.jsx)(n.h1,{id:`packageinititem-class`,children:`PackageInitItem Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),` class handles the detailed initialization of an individual component or sub-package. It manages the file lifecycle—from template application to integration with the main library, `,(0,c.jsx)(n.code,{children:`package.json`}),`, and Storybook.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`File Generation`}),` — Automatically creates files based on samples and specialized templates.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dynamic Content Replacement`}),` — Automatically resolves placeholders like `,(0,c.jsx)(n.code,{children:`[name]`}),` and `,(0,c.jsx)(n.code,{children:`@packages/library`}),` within generated files.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Library Integration`}),` — Automatically generates entry points and registers the component in the global library.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dependency Management`}),` — Updates the root `,(0,c.jsx)(n.code,{children:`package.json`}),` to include the new package in dependencies, exports, and files list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Storybook Automation`}),` — Automatically injects new stories into the Storybook configuration.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`PackageInitItem(name, dir, type, templates)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — The unique name/path identifier of the component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dir: string[]`}),` — The absolute path array to the component's target directory.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — The package type identifier (e.g., `,(0,c.jsx)(n.code,{children:`'functional'`}),`, `,(0,c.jsx)(n.code,{children:`'ui'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`templates?: string`}),` — Optional comma-separated list of templates to be applied.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PackageInitItem } from '@dxtmisha/scripts'

const item = new PackageInitItem(
  'button',
  ['path', 'to', 'button'],
  'ui'
)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Executes the full initialization sequence: creating files, updating the library, `,(0,c.jsx)(n.code,{children:`package.json`}),`, and Storybook.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`initialization-workflow`,children:`Initialization Workflow`}),`
`,(0,c.jsxs)(n.p,{children:[`When `,(0,c.jsx)(n.code,{children:`make()`}),` is called, the class performs the following steps in order:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`File Scaffolding`}),`: It retrieves sample files from the media/templates directory based on the package `,(0,c.jsx)(n.code,{children:`type`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Template Application`}),`: If specific `,(0,c.jsx)(n.code,{children:`templates`}),` are provided, it fetches and applies them.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`File Writing`}),`: It writes the processed files to the target directory, performing necessary content replacements.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Integration (Library)`}),`: If a `,(0,c.jsx)(n.code,{children:`library.ts`}),` file is created, it triggers the automatic generation of export files in the library root.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Integration (Package)`}),`: It updates the root `,(0,c.jsx)(n.code,{children:`package.json`}),` to register the new package's workspace dependency and exports.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Integration (Storybook)`}),`: It scans for the Storybook configuration and adds patterns to include the new component's stories.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`internal-resolution-logic`,children:`Internal Resolution Logic`}),`
`,(0,c.jsx)(n.p,{children:`The class uses several internal helpers to resolve naming conventions:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`getName()`})}),`: Normalizes the component name for use in file content.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`getCode()`})}),`: Converts the name to a hyphenated code for package identifiers.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`getProjectName()`})}),`: Resolves the full NPM package name including the design prefix.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};