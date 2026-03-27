import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/scripts/Classes/DesignStructureStyles - Component Style Compiler`}),`
`,(0,c.jsx)(n.h1,{id:`designstructurestyles-class`,children:`DesignStructureStyles Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`DesignStructureStyles`}),` class is responsible for converting a component's structural design tokens into a standardized array of CSS property strings. By leveraging the `,(0,c.jsx)(n.code,{children:`StylesProperties`}),` engine, it ensures that every component inherits its base visual identity directly from the design system's central theme configuration.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Token-to-CSS Transformation`}),` — Automatically maps abstract design tokens to concrete CSS properties.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`BEM Selector Scoping`}),` — Wraps generated styles in a component-level selector (`,(0,c.jsx)(n.code,{children:`& { ... }`}),`) to ensure style isolation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hierarchical Inheritance`}),` — Utilizes parent structural metadata to resolve nested property variables accurately.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Standardized Formatting`}),` — Applies consistent indentation and line breaks, ensuring generated style files remain readable.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`To initialize the style compiler, provide the identifier of the component whose styles needs to be generated. The class will automatically load the relevant structural metadata.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` — The identifier of the component (e.g., `,(0,c.jsx)(n.code,{children:`'button'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignStructureStyles } from '@dxtmisha/scripts'

const compiler = new DesignStructureStyles('button')
const stylesArray = compiler.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): string[]`}),` — Triggers the transformation process and returns the array of CSS property strings.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`the-style-compilation-flow`,children:`The Style Compilation Flow`}),`
`,(0,c.jsx)(n.p,{children:`When the compiler is initialized, it follows a structured pipeline:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Metadata Loading`}),`: It uses the parent `,(0,c.jsx)(n.code,{children:`DesignStructureItemAbstract`}),` logic to fetch the specific `,(0,c.jsx)(n.code,{children:`PropertyItemsItem`}),` associated with the component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Contextual Selection`}),`: The engine wraps all output properties within a self-referencing CSS selector (`,(0,c.jsx)(n.code,{children:`& { ... }`}),`) to maintain compatibility with CSS-in-JS and preprocessors.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Property Resolution`}),`: It instantiates `,(0,c.jsx)(n.code,{children:`StylesProperties`}),`, passing the collected metadata. This sub-engine then traverses every token, resolving theme variables, units, and fallbacks.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Output Buffering`}),`: The final list of properties is joined into a flat array of strings, ready for injection into a CSS file or a style tag.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`integration-with-theme-engine`,children:`Integration with Theme Engine`}),`
`,(0,c.jsx)(n.p,{children:`This class acts as the bridge between raw design data and the final visual representation. By centralizing the style compilation logic, the system ensures that changes to the theme's core architecture (such as variable naming conventions or unit logic) are automatically propagated to all components during the next build cycle.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};