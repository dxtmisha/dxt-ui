import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/Styles - Style Orchestrator`}),`
`,(0,c.jsx)(t.h1,{id:`styles-class`,children:`Styles Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`Styles`}),` class is the central orchestrator for generating all style-related systemic files within the design system. it manages the initialization of root variables, base classes, SCSS properties, and design-specific style setups.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Systemic Generation`}),` — Coordinates the creation of `,(0,c.jsx)(t.code,{children:`vars`}),`, `,(0,c.jsx)(t.code,{children:`classes`}),`, `,(0,c.jsx)(t.code,{children:`properties`}),`, and `,(0,c.jsx)(t.code,{children:`list`}),` files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Root Variable Initialization`}),` — Uses `,(0,c.jsx)(t.code,{children:`StylesRoot`}),` to generate global CSS variables.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Base Class Management`}),` — Uses `,(0,c.jsx)(t.code,{children:`StylesClasses`}),` to generate standard utility classes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Design-Aware Setup`}),` — Automatically creates `,(0,c.jsx)(t.code,{children:`main`}),`, `,(0,c.jsx)(t.code,{children:`basic`}),`, and `,(0,c.jsx)(t.code,{children:`style`}),` files tailored to specific designs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SCSS Integration`}),` — Transforms property data into SCSS-compatible structures using `,(0,c.jsx)(t.code,{children:`PropertiesScss`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Cleanup`}),` — Filters out redundant data to keep the generated list files clean.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Initialize the `,(0,c.jsx)(t.code,{children:`Styles`}),` orchestrator. It internally manages a `,(0,c.jsx)(t.code,{children:`Properties`}),` instance to retrieve design data.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Styles } from '@dxtmisha/scripts'

const orchestrator = new Styles()
orchestrator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): this`}),` — The main entry point. Triggers the full generation cycle for all designs.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`internal-initialization`,children:`Internal Initialization`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initRoot(items: PropertiesItems): this`}),` — Generates global variables and writes them to the `,(0,c.jsx)(t.code,{children:`vars`}),` file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initClasses(items: PropertiesItems): this`}),` — Generates base classes and individual class files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initProperties(items: PropertiesItems): this`}),` — Generates SCSS property structures.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initList(items: PropertiesItems): this`}),` — Generates a cleaned-up property list for references.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initBasic(design: string): this`}),` — Generates the basic connection files and design-specific style anchors.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};