import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/StylesRoot - Root Variable Generator`}),`
`,(0,c.jsx)(t.h1,{id:`stylesroot-class`,children:`StylesRoot Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`StylesRoot`}),` class is responsible for generating the global `,(0,c.jsx)(t.code,{children:`:root`}),` CSS block from design tokens. It converts tokens into CSS variables and intelligently resolves complex `,(0,c.jsx)(t.code,{children:`calc()`}),` expressions to ensure browser compatibility.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Root Block Generation`}),` — Creates a standard `,(0,c.jsx)(t.code,{children:`:root { ... }`}),` structure containing all design tokens.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Variable Conversion`}),` — Uses `,(0,c.jsx)(t.code,{children:`StylesToVar`}),` to transform property items into valid CSS variables.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Calculation Resolution`}),` — Recursively resolves `,(0,c.jsx)(t.code,{children:`calc()`}),` expressions that reference other variables, ensuring that final values are pre-calculated where possible.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SCSS Integration`}),` — Automatically includes the necessary SCSS `,(0,c.jsx)(t.code,{children:`@use`}),` directives for property definitions.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the `,(0,c.jsx)(t.code,{children:`StylesRoot(items)`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: PropertiesItems`}),` — an object for working with the list of design properties.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { StylesRoot, PropertiesItems } from '@dxtmisha/scripts'

// 1. Initialize PropertiesItems
const items = new PropertiesItems(designData)

// 2. Initialize StylesRoot
const generator = new StylesRoot(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): string[]`}),` — The main entry point. Processes the property list, resolves calculations, and returns an array of strings representing the complete `,(0,c.jsx)(t.code,{children:`:root`}),` block with its imports.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};