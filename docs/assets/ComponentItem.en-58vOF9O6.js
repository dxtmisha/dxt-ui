import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/ComponentItem - Component File Generator`}),`
`,(0,c.jsx)(t.h1,{id:`componentitem-class`,children:`ComponentItem Class`}),`
`,(0,c.jsx)(t.p,{children:`A specialized class for generating individual component files based on templates. It manages the entire creation process, from reading template samples to performing dynamic string replacements and setting correct file system permissions.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Template-Driven`}),` — uses a centralized repository of component templates for consistent file generation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Replacements`}),` — automatically replaces markers like `,(0,c.jsx)(t.code,{children:`ComponentDoc`}),`, `,(0,c.jsx)(t.code,{children:`[project]`}),`, and `,(0,c.jsx)(t.code,{children:`[path]`}),` with context-specific values.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Placeholder Support`}),` — handles both camelCase (class names) and kebab-case (filenames) transformations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Permission Management`}),` — ensures generated files have the correct execution and read/write permissions.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the `,(0,c.jsx)(t.code,{children:`ComponentItem(path)`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — the relative or absolute path to the directory where the component will be created.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentItem } from '@dxtmisha/scripts'

const component = new ComponentItem('src/components/MyComponent')

// Generating files
component.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — The main method that reads all template files and writes their processed versions to the component directory.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`manual-scaffolding`,children:`Manual Scaffolding`}),`
`,(0,c.jsxs)(t.p,{children:[`While `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` handles batch creation, `,(0,c.jsx)(t.code,{children:`ComponentItem`}),` can be used directly for fine-grained control over a specific component.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const item = new ComponentItem('packages/ui/src/components/Avatar')
item.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};