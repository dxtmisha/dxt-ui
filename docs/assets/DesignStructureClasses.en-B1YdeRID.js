import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/DesignStructureClasses - CSS Class Resolver`}),`
`,(0,c.jsx)(n.h1,{id:`designstructureclasses-class`,children:`DesignStructureClasses Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`DesignStructureClasses`}),` class is responsible for transforming a component's structural metadata into a flattened list of CSS class definitions. It identifies specific tokens marked as subclasses and recursively builds class names following BEM (Block Element Modifier) naming conventions, ensuring consistency across the design system's style architecture.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Recursive Class Discovery`}),` — Deeply traverses property trees to find nested elements and modifiers.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`BEM Name Construction`}),` — Automatically joins parent and child identifiers using double underscores (`,(0,c.jsx)(n.code,{children:`__`}),`) for elements.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`CamelCase Indexing`}),` — Generates clean, variable-friendly names for use in TypeScript/Vue logic.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Full-Name Support`}),` — Allows specific tokens to ignore parent hierarchies and use global class names when required.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Property Mapping`}),` — Directly integrates with standard property metadata to determine which items contribute to the styling API.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`To initialize the class resolver, provide the base component name. The class will automatically load the associated structural metadata via its parent abstraction.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` — The identifier of the component to process (e.g., `,(0,c.jsx)(n.code,{children:`'button'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignStructureClasses } from '@dxtmisha/scripts'

const resolver = new DesignStructureClasses('button')
const classes = resolver.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`information`,children:`Information`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): DesignStructureClassesList`}),` — Returns the fully processed list of class mapping objects.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-class-resolution-workflow`,children:`The Class Resolution Workflow`}),`
`,(0,c.jsx)(n.p,{children:`When initialized, the class automatically executes its resolution logic:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Property Analysis`}),`: The engine scans the component's `,(0,c.jsx)(n.code,{children:`PropertyItem`}),` list for tags indicating a `,(0,c.jsx)(n.code,{children:`subclass`}),` type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Namespace Building`}),`: It tracks the hierarchy of names. For example, a `,(0,c.jsx)(n.code,{children:`label`}),` inside a `,(0,c.jsx)(n.code,{children:`button`}),` becomes `,(0,c.jsx)(n.code,{children:`button__label`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data Structuring`}),`: For each identified class, it creates an object containing:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`index`}),`: A CamelCase version of the name (e.g., `,(0,c.jsx)(n.code,{children:`buttonLabel`}),`) for code references.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`className`}),`: The actual CSS class string (e.g., `,(0,c.jsx)(n.code,{children:`button__label`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`full`}),`: A flag indicating if the name is an absolute global class.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flattening`}),`: The recursive tree is flattened into a single array, providing a fast lookup for template engines.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`integration-with-code-generators`,children:`Integration with Code Generators`}),`
`,(0,c.jsxs)(n.p,{children:[`This class provides the essential mapping used by `,(0,c.jsx)(n.code,{children:`DesignReplace`}),` to inject class definitions into component implementations. By centralizing the naming logic, it ensures that changes to naming conventions can be applied globally across all components without manual file edits.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};