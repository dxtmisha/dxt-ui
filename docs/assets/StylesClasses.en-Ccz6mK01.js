import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/StylesClasses - Base Class Generator`}),`
`,(0,c.jsx)(t.h1,{id:`stylesclasses-class`,children:`StylesClasses Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`StylesClasses`}),` class is responsible for generating base CSS classes from design properties. It filters the property list for categories like `,(0,c.jsx)(t.code,{children:`class`}),` and `,(0,c.jsx)(t.code,{children:`theme`}),` and creates individual class structures.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Category Filtering`}),` — Specifically targets properties categorized as `,(0,c.jsx)(t.code,{children:`class`}),` or `,(0,c.jsx)(t.code,{children:`theme`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Class Generation`}),` — Creates a dictionary of SCSS blocks, where each key is a class name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dependency Orchestration`}),` — Uses `,(0,c.jsx)(t.code,{children:`StylesProperties`}),` to generate the internal style rules (properties, mixins, etc.) for each class.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Import Management`}),` — Automatically includes necessary SCSS `,(0,c.jsx)(t.code,{children:`@use`}),` directives to link the generated class files.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the `,(0,c.jsx)(t.code,{children:`StylesClasses(items)`}),` constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: PropertiesItems`}),` — an object for working with the list of design properties.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { StylesClasses, PropertiesItems } from '@dxtmisha/scripts'

// 1. Initialize PropertiesItems
const items = new PropertiesItems(designData)

// 2. Initialize StylesClasses
const generator = new StylesClasses(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): StylesClassesItem`}),` — The main entry point. Processes the property list and returns an object containing the list of required imports and the generated class content.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`stylesclassesitem`,children:`StylesClassesItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: string[]`}),` — An array of SCSS `,(0,c.jsx)(t.code,{children:`@use`}),` statements for the generated class files.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classes: Record<string, string[]>`}),` — A dictionary where each key is a class name and the value is an array of strings representing the SCSS content of that class.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};