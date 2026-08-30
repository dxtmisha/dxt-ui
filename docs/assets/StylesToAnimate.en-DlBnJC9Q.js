import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/StylesToAnimate - Animation Generator`}),`
`,(0,c.jsx)(t.h1,{id:`stylestoanimate-class`,children:`StylesToAnimate Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`StylesToAnimate`}),` class is responsible for generating CSS `,(0,c.jsx)(t.code,{children:`@keyframes`}),` animations from design properties. It implements the necessary logic to wrap nested keyframe rules within a named animation block.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Keyframes Wrapping`}),` — Automatically wraps the generated style content within a `,(0,c.jsx)(t.code,{children:`@keyframes`}),` block.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dynamic Naming`}),` — Uses the design property name to define the animation identifier.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Indentation Management`}),` — Correctly handles block indentation and optional leading empty lines.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Initialize the `,(0,c.jsx)(t.code,{children:`StylesToAnimate`}),` converter with the required property and a content callable for the keyframe steps.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`property: PropertyItemsItem`}),` — the current branch of the property tree being processed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`space: string`}),` — the indentation string (e.g., `,(0,c.jsx)(t.code,{children:`"  "`}),` or `,(0,c.jsx)(t.code,{children:`"\\t"`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`content?: () => string[]`}),` — a callable function that returns an array of strings representing the keyframes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`first?: boolean`}),` — indicates if this is the first element in the current level (optional, default: `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { StylesToAnimate } from '@dxtmisha/scripts'

// Usage in conversion logic
const converter = new StylesToAnimate(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): string[]`}),` — The main entry point. Orchestrates the transformation and adds the required indentation to each line.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};