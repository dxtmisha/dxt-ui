import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/Styles - Style Orchestrator`}),`
`,(0,c.jsx)(n.h1,{id:`styles-class`,children:`Styles Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`Styles`}),` class is the central orchestrator for generating all style-related systemic files within the design system. it manages the initialization of root variables, base classes, SCSS properties, and design-specific style setups.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Systemic Generation`}),` — Coordinates the creation of `,(0,c.jsx)(n.code,{children:`vars`}),`, `,(0,c.jsx)(n.code,{children:`classes`}),`, `,(0,c.jsx)(n.code,{children:`properties`}),`, and `,(0,c.jsx)(n.code,{children:`list`}),` files.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Root Variable Initialization`}),` — Uses `,(0,c.jsx)(n.code,{children:`StylesRoot`}),` to generate global CSS variables.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Base Class Management`}),` — Uses `,(0,c.jsx)(n.code,{children:`StylesClasses`}),` to generate standard utility classes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Design-Aware Setup`}),` — Automatically creates `,(0,c.jsx)(n.code,{children:`main`}),`, `,(0,c.jsx)(n.code,{children:`basic`}),`, and `,(0,c.jsx)(n.code,{children:`style`}),` files tailored to specific designs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`SCSS Integration`}),` — Transforms property data into SCSS-compatible structures using `,(0,c.jsx)(n.code,{children:`PropertiesScss`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Cleanup`}),` — Filters out redundant data to keep the generated list files clean.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Initialize the `,(0,c.jsx)(n.code,{children:`Styles`}),` orchestrator. It internally manages a `,(0,c.jsx)(n.code,{children:`Properties`}),` instance to retrieve design data.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Styles } from '@dxtmisha/scripts'

const orchestrator = new Styles()
orchestrator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): this`}),` — The main entry point. Triggers the full generation cycle for all designs.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`internal-initialization`,children:`Internal Initialization`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initRoot(items: PropertiesItems): this`}),` — Generates global variables and writes them to the `,(0,c.jsx)(n.code,{children:`vars`}),` file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initClasses(items: PropertiesItems): this`}),` — Generates base classes and individual class files.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initProperties(items: PropertiesItems): this`}),` — Generates SCSS property structures.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initList(items: PropertiesItems): this`}),` — Generates a cleaned-up property list for references.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initBasic(design: string): this`}),` — Generates the basic connection files and design-specific style anchors.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};