import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PropertiesToRoot - CSS Root Selector Scope Transformer`}),`
`,(0,c.jsx)(n.h1,{id:`propertiestoroot-class`,children:`PropertiesToRoot Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesToRoot`}),` class transforms design tokens designating CSS root scope behaviors (using the `,(0,c.jsx)(n.code,{children:`PropertyType.root`}),` identifier) into parent-referenced selectors. It extends `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Root Selector Synthesis`}),` — Appends the parent `,(0,c.jsx)(n.code,{children:`&`}),` selector reference to design token names.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Scoping Context`}),` — Associates variables with a components' main container wrapper.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Persistence`}),` — Saves resolved root properties to the `,(0,c.jsx)(n.code,{children:`038-root`}),` cache file.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToRoot, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToRoot(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`lifecycle--helpers`,children:`Lifecycle & Helpers`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Overrides the abstract lifecycle hook to retrieve all variables of type `,(0,c.jsx)(n.code,{children:`root`}),` and format their selectors.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(design: string, component: string, name: string): string`}),` — Combines design layout and component name references, returning selector expressions formatted like `,(0,c.jsx)(n.code,{children:`[resolved-link] &`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};