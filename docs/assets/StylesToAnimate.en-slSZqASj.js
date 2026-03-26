import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/StylesToAnimate - Animation Generator`}),`
`,(0,c.jsx)(n.h1,{id:`stylestoanimate-class`,children:`StylesToAnimate Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`StylesToAnimate`}),` class is responsible for generating CSS `,(0,c.jsx)(n.code,{children:`@keyframes`}),` animations from design properties. It implements the necessary logic to wrap nested keyframe rules within a named animation block.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Keyframes Wrapping`}),` — Automatically wraps the generated style content within a `,(0,c.jsx)(n.code,{children:`@keyframes`}),` block.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dynamic Naming`}),` — Uses the design property name to define the animation identifier.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Indentation Management`}),` — Correctly handles block indentation and optional leading empty lines.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Initialize the `,(0,c.jsx)(n.code,{children:`StylesToAnimate`}),` converter with the required property and a content callable for the keyframe steps.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`property: PropertyItemsItem`}),` — the current branch of the property tree being processed.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`space: string`}),` — the indentation string (e.g., `,(0,c.jsx)(n.code,{children:`"  "`}),` or `,(0,c.jsx)(n.code,{children:`"\\t"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`content?: () => string[]`}),` — a callable function that returns an array of strings representing the keyframes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`first?: boolean`}),` — indicates if this is the first element in the current level (optional, default: `,(0,c.jsx)(n.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesToAnimate } from '@dxtmisha/scripts'

// Usage in conversion logic
const converter = new StylesToAnimate(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): string[]`}),` — The main entry point. Orchestrates the transformation and adds the required indentation to each line.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};