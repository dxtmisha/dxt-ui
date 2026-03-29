import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/ComponentItem - Component File Generator`}),`
`,(0,c.jsx)(n.h1,{id:`componentitem-class`,children:`ComponentItem Class`}),`
`,(0,c.jsx)(n.p,{children:`A specialized class for generating individual component files based on templates. It manages the entire creation process, from reading template samples to performing dynamic string replacements and setting correct file system permissions.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Template-Driven`}),` — uses a centralized repository of component templates for consistent file generation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dynamic Replacements`}),` — automatically replaces markers like `,(0,c.jsx)(n.code,{children:`ComponentDoc`}),`, `,(0,c.jsx)(n.code,{children:`[project]`}),`, and `,(0,c.jsx)(n.code,{children:`[path]`}),` with context-specific values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Placeholder Support`}),` — handles both camelCase (class names) and kebab-case (filenames) transformations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Permission Management`}),` — ensures generated files have the correct execution and read/write permissions.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`ComponentItem(path)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — the relative or absolute path to the directory where the component will be created.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ComponentItem } from '@dxtmisha/scripts'

const component = new ComponentItem('src/components/MyComponent')

// Generating files
component.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — The main method that reads all template files and writes their processed versions to the component directory.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`manual-scaffolding`,children:`Manual Scaffolding`}),`
`,(0,c.jsxs)(n.p,{children:[`While `,(0,c.jsx)(n.code,{children:`ComponentCreator`}),` handles batch creation, `,(0,c.jsx)(n.code,{children:`ComponentItem`}),` can be used directly for fine-grained control over a specific component.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const item = new ComponentItem('packages/ui/src/components/Avatar')
item.make()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};